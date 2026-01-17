import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";

import { getApiBaseUrl } from "../../config";

const SP_USER_ID_KEY = "sp_user_id";
const SP_AGENT_SESSION_ID_KEY = "sp_agent_session_id";
const SP_AGENT_THREAD_PREFIX = "sp_agent_thread:";
const SP_AGENT_THREAD_VERSION = 1;

function withApiBase(path) {
  const base = getApiBaseUrl();
  const normalizedPath = String(path ?? "").startsWith("/")
    ? String(path ?? "")
    : `/${String(path ?? "")}`;

  if (!base) return normalizedPath;
  return `${String(base).replace(/\/+$/, "")}${normalizedPath}`;
}

function _randomId(prefix) {
  try {
    // Modern browsers
    if (globalThis.crypto?.randomUUID)
      return `${prefix}_${crypto.randomUUID()}`;
  } catch {
    // ignore
  }
  return `${prefix}_${Math.random().toString(16).slice(2)}_${Date.now().toString(16)}`;
}

function getOrCreateStoredId(storage, key, prefix) {
  try {
    const existing = storage?.getItem?.(key);
    if (existing) return existing;
    const next = _randomId(prefix);
    storage?.setItem?.(key, next);
    return next;
  } catch {
    return _randomId(prefix);
  }
}

function _safeParseJson(value) {
  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
}

function _normalizeThread(thread, fallbackFirstAiText) {
  if (!Array.isArray(thread)) return null;

  const normalized = thread
    .map((m) => {
      const role = m?.role === "user" ? "user" : "ai";
      const text = String(m?.text ?? "");
      const kind = m?.kind === "error" ? "error" : "message";
      return { role, text, kind };
    })
    .filter((m) => m.text || m.kind === "error");

  if (normalized.length === 0) return null;
  if (normalized[0]?.role !== "ai") {
    normalized.unshift({
      role: "ai",
      text: String(fallbackFirstAiText ?? ""),
      kind: "message",
    });
  }
  return normalized;
}

function loadStoredAgentThread({ sessionId, fallbackFirstAiText }) {
  if (!sessionId) return null;
  try {
    const raw = window.sessionStorage.getItem(
      `${SP_AGENT_THREAD_PREFIX}${sessionId}`
    );
    if (!raw) return null;
    const parsed = _safeParseJson(raw);
    if (!parsed || parsed?.v !== SP_AGENT_THREAD_VERSION) return null;
    return _normalizeThread(parsed?.thread, fallbackFirstAiText);
  } catch {
    return null;
  }
}

function storeAgentThread({ sessionId, thread }) {
  if (!sessionId) return;
  try {
    window.sessionStorage.setItem(
      `${SP_AGENT_THREAD_PREFIX}${sessionId}`,
      JSON.stringify({ v: SP_AGENT_THREAD_VERSION, thread })
    );
  } catch {
    // ignore
  }
}

function normalizeAiText(raw) {
  let text = String(raw ?? "");

  // Normalize newlines
  text = text.replace(/\r\n?/g, "\n");

  // Insert a space when punctuation is immediately followed by a capital letter
  // (common when streaming boundaries remove whitespace).
  text = text.replace(/([.?!])(\p{Lu})/gu, "$1 $2");

  // Convert inline bullet markers into real lines so lists render nicely.
  // Example: "This can include: * **Item**" -> "This can include:\n* **Item**"
  text = text.replace(/:\s*\*\s+/g, ":\n* ");
  text = text.replace(/\n\s*\*\s+/g, "\n* ");
  text = text.replace(/\n\s*-\s+/g, "\n- ");

  return text;
}

function renderInlineBold(text) {
  // Very small inline renderer for **bold** only.
  const parts = [];
  const re = /\*\*(.+?)\*\*/g;
  let lastIndex = 0;
  let match;
  while ((match = re.exec(text)) !== null) {
    const start = match.index;
    const end = re.lastIndex;
    if (start > lastIndex) parts.push(text.slice(lastIndex, start));
    parts.push(
      <strong key={`${start}-${end}`} className="font-semibold">
        {match[1]}
      </strong>
    );
    lastIndex = end;
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return parts.length ? parts : text;
}

function FormattedAiText({ text }) {
  const normalized = normalizeAiText(text);
  const lines = normalized.split("\n");

  const blocks = [];
  let pendingParagraphLines = [];
  let pendingListItems = [];

  const flushParagraph = () => {
    if (pendingParagraphLines.length === 0) return;
    const paragraph = pendingParagraphLines.join(" ").trim();
    pendingParagraphLines = [];
    if (!paragraph) return;
    blocks.push({ type: "p", text: paragraph });
  };
  const flushList = () => {
    if (pendingListItems.length === 0) return;
    blocks.push({ type: "ul", items: pendingListItems });
    pendingListItems = [];
  };

  for (const rawLine of lines) {
    const line = String(rawLine ?? "");
    const trimmed = line.trim();

    const listMatch = trimmed.match(/^[-*]\s+(.*)$/);
    if (listMatch) {
      flushParagraph();
      pendingListItems.push(listMatch[1].trim());
      continue;
    }

    if (!trimmed) {
      flushParagraph();
      flushList();
      continue;
    }

    flushList();
    pendingParagraphLines.push(trimmed);
  }

  flushParagraph();
  flushList();

  return (
    <div className="text-slate-900 text-sm leading-relaxed space-y-2">
      {blocks.map((b, i) => {
        if (b.type === "ul") {
          return (
            <ul key={i} className="list-disc pl-5 space-y-1">
              {b.items.map((item, j) => (
                <li key={j}>{renderInlineBold(item)}</li>
              ))}
            </ul>
          );
        }
        return <p key={i}>{renderInlineBold(b.text)}</p>;
      })}
    </div>
  );
}

function TypingIndicator({ label = "AI is typing" }) {
  return (
    <span className="sp-typing" aria-label={label} role="status">
      <span className="sp-typingPulseDot" />
    </span>
  );
}

async function streamSsePost({ url, body, signal, onEvent }) {
  const debug =
    Boolean(import.meta?.env?.DEV) || Boolean(import.meta?.env?.VITE_DEBUG_SSE);

  const startedAt =
    typeof performance !== "undefined" && performance.now
      ? performance.now()
      : Date.now();
  const sinceStartMs = () => {
    const now =
      typeof performance !== "undefined" && performance.now
        ? performance.now()
        : Date.now();
    return Math.round(now - startedAt);
  };

  if (debug) {
    // eslint-disable-next-line no-console
    console.log("[sse] POST start", { url, body });
  }

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "text/event-stream",
    },
    body: JSON.stringify(body),
    signal,
  });

  if (debug) {
    // eslint-disable-next-line no-console
    console.log("[sse] response", {
      status: res.status,
      ok: res.ok,
      contentType: res.headers.get("content-type"),
    });
  }

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(text || `Request failed (${res.status})`);
  }

  if (!res.body) return;

  const reader = res.body.getReader();
  const decoder = new TextDecoder("utf-8");
  let buffer = "";
  let chunksIn = 0;
  let bytesIn = 0;
  let framesOut = 0;

  // SSE servers commonly use CRLF (\r\n) line endings. Don't assume \n\n.
  const frameDelimiter = /\r?\n\r?\n/;

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    chunksIn += 1;
    bytesIn += value?.byteLength ?? 0;
    if (debug) {
      // eslint-disable-next-line no-console
      console.log("[sse] chunk in", {
        tMs: sinceStartMs(),
        chunkIdx: chunksIn,
        bytes: value?.byteLength ?? 0,
        bytesIn,
      });
    }

    buffer += decoder.decode(value, { stream: true });

    while (true) {
      const match = buffer.match(frameDelimiter);
      if (!match) break;
      const idx = match.index ?? -1;
      if (idx < 0) break;

      const frame = buffer.slice(0, idx);
      buffer = buffer.slice(idx + match[0].length);

      let eventName = "message";
      const dataLines = [];

      for (const line of frame.split(/\r?\n/)) {
        const l = line;
        if (l.startsWith("event:")) eventName = l.slice("event:".length).trim();
        if (l.startsWith("data:"))
          dataLines.push(l.slice("data:".length).trimStart());
      }

      const data = dataLines.join("\n");
      if (debug) {
        // eslint-disable-next-line no-console
        console.log("[sse] event", {
          tMs: sinceStartMs(),
          frameIdx: (framesOut += 1),
          event: eventName,
          dataPreview: data.slice(0, 120),
          dataLen: data.length,
        });
      }

      onEvent?.({ event: eventName, data });
    }
  }

  if (debug) {
    // eslint-disable-next-line no-console
    console.log("[sse] stream ended", {
      tMs: sinceStartMs(),
      chunksIn,
      bytesIn,
      bufferedCharsRemaining: buffer.length,
    });
  }
}

async function createAgentSession({ user_id, signal }) {
  const res = await fetch(withApiBase("/agent/session"), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ user_id }),
    signal,
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(text || `Session create failed (${res.status})`);
  }

  return res.json();
}

function AgentErrorMessage() {
  return (
    <div className="text-slate-900 text-sm">
      <p>
        Apologies, there seems to be an error with our AI agent at the moment.
      </p>
      <p className="mt-2">
        If you'd like to learn more about our services visit{" "}
        <a
          href="/services"
          className="text-brand-900 underline underline-offset-2 hover:text-brand-800"
        >
          our Services page
        </a>
        .
      </p>
      <p className="mt-2">
        Otherwise feel free to{" "}
        <a
          href="/contact"
          className="text-brand-900 underline underline-offset-2 hover:text-brand-800"
        >
          contact us
        </a>
        .
      </p>
    </div>
  );
}

const AiChatPreviewCard = forwardRef(function AiChatPreviewCard(
  {
    inputPlaceholder,
    sendLabel,
    previewNote,
    messages,
    borderless = false,
    draft: draftProp,
    setDraft: setDraftProp,
  },
  ref
) {
  const rootRef = useRef(null);
  const [sessionId, setSessionId] = useState(() => {
    try {
      const existing = window.sessionStorage.getItem(SP_AGENT_SESSION_ID_KEY);
      return typeof existing === "string" && existing.trim() ? existing : null;
    } catch {
      return null;
    }
  });

  const [thread, setThread] = useState(() => {
    const restored = loadStoredAgentThread({
      sessionId,
      fallbackFirstAiText: messages?.ai1 ?? "",
    });
    return (
      restored ?? [{ role: "ai", text: messages?.ai1 ?? "", kind: "message" }]
    );
  });

  const [isStreaming, setIsStreaming] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const abortRef = useRef(null);
  const sendInFlightRef = useRef(false);
  const scrollRef = useRef(null);
  const debug =
    Boolean(import.meta?.env?.DEV) || Boolean(import.meta?.env?.VITE_DEBUG_SSE);
  const lastRenderedAiLenRef = useRef(0);

  const persistTimerRef = useRef(null);

  const userIdRef = useRef(null);
  const sessionIdRef = useRef(null);

  // ===============================
  // Spoof “token-by-token” typing
  // ===============================
  const targetAiTextRef = useRef(""); // full text received so far
  const shownLenRef = useRef(0); // how many chars currently revealed
  const spoofTimerRef = useRef(null); // interval id
  const streamDoneRef = useRef(false); // whether server indicated done (or request ended)

  function stopSpoofTimer() {
    if (spoofTimerRef.current) {
      clearInterval(spoofTimerRef.current);
      spoofTimerRef.current = null;
    }
  }

  function computeCharsPerTick(targetLen) {
    if (targetLen < 300) return 6;
    if (targetLen < 1200) return 10;
    if (targetLen < 3000) return 16;
    return 22;
  }

  function ensureSpoofTypingRunning() {
    if (spoofTimerRef.current) return;

    spoofTimerRef.current = setInterval(() => {
      const target = targetAiTextRef.current || "";
      const targetLen = target.length;

      // If we already displayed everything, we can stop when server is done
      if (shownLenRef.current >= targetLen) {
        if (streamDoneRef.current) {
          stopSpoofTimer();
          setIsStreaming(false);
          sendInFlightRef.current = false;
        }
        return;
      }

      // Move forward a bit
      let step = computeCharsPerTick(targetLen);

      // Optional micro-pauses at punctuation/newlines for “LLM feel”
      const nextChar = target[shownLenRef.current];
      if (
        nextChar === "." ||
        nextChar === "!" ||
        nextChar === "?" ||
        nextChar === "\n"
      ) {
        step = Math.max(2, Math.floor(step / 3));
      }

      shownLenRef.current = Math.min(targetLen, shownLenRef.current + step);
      const partial = target.slice(0, shownLenRef.current);

      setThread((prev) => {
        const next = [...prev];
        const last = next[next.length - 1];
        if (last?.role === "ai" && last.kind !== "error") {
          last.text = partial;
        }
        return next;
      });
    }, 25);
  }

  useEffect(() => {
    return () => {
      stopSpoofTimer();
      abortRef.current?.abort?.();
    };
  }, []);

  // ===============================

  useEffect(() => {
    // user_id persists across visits; agent session_id persists for the current tab/session.
    userIdRef.current = getOrCreateStoredId(
      window.localStorage,
      SP_USER_ID_KEY,
      "user"
    );

    try {
      const storedSession = window.sessionStorage.getItem(
        SP_AGENT_SESSION_ID_KEY
      );
      sessionIdRef.current = storedSession;
      setSessionId(
        typeof storedSession === "string" && storedSession.trim()
          ? storedSession
          : null
      );
    } catch {
      sessionIdRef.current = null;
      setSessionId(null);
    }

    if (debug) {
      // eslint-disable-next-line no-console
      console.log("[chat] identity", {
        user_id: userIdRef.current,
        session_id: sessionIdRef.current,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // Persist thread to sessionStorage so refresh restores bubbles for the same backend session.
    if (!sessionId) return;

    if (persistTimerRef.current) clearTimeout(persistTimerRef.current);
    persistTimerRef.current = setTimeout(() => {
      storeAgentThread({ sessionId, thread });
    }, 200);

    return () => {
      if (persistTimerRef.current) clearTimeout(persistTimerRef.current);
    };
  }, [thread, sessionId]);

  const [draftLocal, setDraftLocal] = useState("");
  const draft = draftProp ?? draftLocal;
  const setDraft = setDraftProp ?? setDraftLocal;

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const raf = requestAnimationFrame(() => {
      el.scrollTop = el.scrollHeight;
    });
    return () => cancelAnimationFrame(raf);
  }, [thread, isStreaming]);

  useEffect(() => {
    if (!isAboutOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsAboutOpen(false);
    };

    const onPointerDown = (e) => {
      // Close if click/tap is outside the tooltip/button group.
      const group = e.target?.closest?.("[data-chat-about-group]");
      if (!group) setIsAboutOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [isAboutOpen]);

  useEffect(() => {
    if (!debug) return;
    const last = thread[thread.length - 1];
    if (last?.role !== "ai") return;
    const len = String(last.text ?? "").length;
    if (len === lastRenderedAiLenRef.current) return;
    lastRenderedAiLenRef.current = len;
    // eslint-disable-next-line no-console
    console.log("[chat] render commit", {
      isStreaming,
      threadLen: thread.length,
      lastRole: last.role,
      lastKind: last.kind,
      lastTextLen: len,
      preview: String(last.text ?? "").slice(-80),
    });
  }, [thread, isStreaming, debug]);

  const canSend = useMemo(() => {
    const t = (draft ?? "").trim();
    return t.length > 0 && !isStreaming;
  }, [draft, isStreaming]);

  const scrollIntoPlace = useMemo(() => {
    return () => {
      // Only do this on mobile-ish widths; desktop scrolling into view is usually undesired.
      if (typeof window === "undefined") return;
      if (!window.matchMedia?.("(max-width: 767px)")?.matches) return;

      const el = rootRef.current;
      if (!el) return;

      const navEl = document.querySelector("nav");
      const navHeight = navEl?.offsetHeight ?? 0;
      const extraOffset = 12;

      const rect = el.getBoundingClientRect();
      const top = rect.top + window.scrollY - navHeight - extraOffset;

      window.scrollTo({ top: Math.max(0, top), left: 0, behavior: "smooth" });
    };
  }, []);

  async function sendMessage(rawPrompt) {
    const prompt = (rawPrompt ?? "").trim();
    if (!prompt || isStreaming || sendInFlightRef.current) return;

    if (debug) {
      // eslint-disable-next-line no-console
      console.log("[chat] sendMessage", { promptLen: prompt.length });
    }

    // Guard against double-trigger (e.g., rapid Enter + click) before React state updates land.
    sendInFlightRef.current = true;

    // Cancel any previous stream + spoof loop
    abortRef.current?.abort?.();
    stopSpoofTimer();

    // Reset spoof state for this response
    targetAiTextRef.current = "";
    shownLenRef.current = 0;
    streamDoneRef.current = false;

    const controller = new AbortController();
    abortRef.current = controller;

    setIsStreaming(true);
    setDraft("");

    setThread((prev) => [
      ...prev,
      { role: "user", text: prompt, kind: "message" },
      { role: "ai", text: "", kind: "message" }, // this bubble gets progressively filled
    ]);

    try {
      const user_id = userIdRef.current || "anonymous";

      if (!sessionIdRef.current) {
        try {
          const created = await createAgentSession({
            user_id,
            signal: controller.signal,
          });

          const nextSessionId = created?.session_id;
          if (typeof nextSessionId === "string" && nextSessionId.trim()) {
            sessionIdRef.current = nextSessionId;
            setSessionId(nextSessionId);
            try {
              window.sessionStorage.setItem(
                SP_AGENT_SESSION_ID_KEY,
                nextSessionId
              );
            } catch {
              // ignore
            }
          }
        } catch (e) {
          if (debug) {
            // eslint-disable-next-line no-console
            console.warn("[chat] session create failed", {
              message: e?.message,
            });
          }
        }
      }

      const streamBody = { message: prompt, user_id };
      if (sessionIdRef.current) streamBody.session_id = sessionIdRef.current;

      await streamSsePost({
        url: withApiBase("/agent/stream"),
        body: streamBody,
        signal: controller.signal,
        onEvent: ({ event, data }) => {
          if (debug) {
            // eslint-disable-next-line no-console
            console.log("[chat] onEvent", {
              event,
              dataLen: String(data ?? "").length,
              preview: String(data ?? "").slice(0, 80),
            });
          }

          if (event === "error") {
            stopSpoofTimer();
            streamDoneRef.current = true;

            setThread((prev) => {
              const next = [...prev];
              const last = next[next.length - 1];
              if (last?.role === "ai") {
                last.kind = "error";
                last.text = data || "";
              } else {
                next.push({ role: "ai", text: data || "", kind: "error" });
              }
              return next;
            });

            setIsStreaming(false);
            sendInFlightRef.current = false;
            return;
          }

          if (event === "done") {
            // Backend is finished sending; UI may still be “typing”
            streamDoneRef.current = true;
            ensureSpoofTypingRunning();
            return;
          }

          // Normal message payload: update the TARGET buffer (not the UI bubble directly)
          const incoming = String(data ?? "");
          const currentTarget = String(targetAiTextRef.current ?? "");

          // Handle both “delta streaming” and “full-so-far” streaming
          if (!currentTarget) {
            targetAiTextRef.current = incoming;
          } else if (incoming.startsWith(currentTarget)) {
            targetAiTextRef.current = incoming; // replace with full-so-far
          } else {
            targetAiTextRef.current = currentTarget + incoming; // append delta
          }

          ensureSpoofTypingRunning();
        },
      });

      // If the fetch/stream ends naturally without a 'done' event, still finish typing.
      streamDoneRef.current = true;
      ensureSpoofTypingRunning();
    } catch (e) {
      // Any exception: mark done and show error bubble
      streamDoneRef.current = true;
      stopSpoofTimer();

      const msg = e?.message || "Request failed";
      setThread((prev) => {
        const next = [...prev];
        const last = next[next.length - 1];
        if (last?.role === "ai") {
          last.kind = "error";
          last.text = msg;
        } else {
          next.push({ role: "ai", text: msg, kind: "error" });
        }
        return next;
      });

      setIsStreaming(false);
      sendInFlightRef.current = false;
    }
  }

  async function handleSend() {
    await sendMessage(draft);
  }

  useImperativeHandle(
    ref,
    () => ({
      sendMessage,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [sendMessage]
  );

  return (
    <div
      ref={rootRef}
      className={
        "bg-white rounded-2xl overflow-hidden relative" +
        (borderless
          ? " border border-slate-200"
          : " shadow-xl border border-slate-200")
      }
    >
      <div className="absolute top-3 right-3 z-10">
        <div className="group relative" data-chat-about-group>
          <button
            type="button"
            aria-label="About this chat"
            aria-expanded={isAboutOpen}
            onClick={() => setIsAboutOpen((v) => !v)}
            className="inline-flex h-10 w-10 sm:h-8 sm:w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 hover:text-slate-900 transition-colors"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 sm:h-4 sm:w-4"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-5" />
              <path d="M12 8h.01" />
            </svg>
          </button>

          <div
            role="tooltip"
            className={
              "absolute right-0 mt-2 w-72 sm:w-80 max-w-[calc(100vw-2rem)] rounded-lg border border-slate-200 bg-white p-3 text-xs text-slate-700 transition-all " +
              (isAboutOpen
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 translate-y-1 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0")
            }
          >
            <p className="text-slate-900 font-medium">About this chat</p>
            <p className="mt-2">
              This assistant is automated and provides general information only.
            </p>
            <p className="mt-2">
              It can’t make binding commitments, guarantees, or provide
              professional advice.
            </p>
            <p className="mt-2">
              Final details are always confirmed directly with a human and in
              writing.
            </p>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="h-[55vh] min-h-64 max-h-[70vh] sm:h-112 sm:max-h-none overflow-y-auto p-4 sm:p-6 space-y-4"
      >
        {thread.map((m, idx) =>
          m.role === "ai" ? (
            <div key={idx} className="flex items-start">
              {m.kind === "error" ? (
                <div className="bg-slate-100 rounded-lg p-3 max-w-[85%] sm:max-w-xl">
                  <AgentErrorMessage />
                </div>
              ) : m.text ? (
                <div className="bg-slate-100 rounded-lg p-3 max-w-[85%] sm:max-w-xl">
                  <FormattedAiText text={m.text} />
                </div>
              ) : isStreaming && idx === thread.length - 1 ? (
                <div className="max-w-[85%] sm:max-w-xl px-1 py-1">
                  <TypingIndicator />
                </div>
              ) : null}
            </div>
          ) : (
            <div key={idx} className="flex items-start justify-end">
              <div className="bg-brand-900 rounded-lg p-3 max-w-[85%] sm:max-w-xl">
                <p className="text-white text-sm">{m.text}</p>
              </div>
            </div>
          )
        )}
      </div>

      <div
        className={
          "bg-slate-50 p-4 sm:p-6" +
          (borderless ? "" : " border-t border-slate-200")
        }
      >
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            placeholder={inputPlaceholder}
            className="w-full flex-1 bg-white text-slate-900 text-base rounded-lg px-4 py-3 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300 transition-all border border-slate-200"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onFocus={() => {
              // First scroll attempt before keyboard animates.
              scrollIntoPlace();
              // Second pass after viewport/keyboard settles.
              window.setTimeout(() => scrollIntoPlace(), 180);
            }}
            onKeyDown={(e) => {
              if (e.key !== "Enter") return;
              if (e.repeat) return;
              if (!canSend) return;
              e.preventDefault();
              handleSend();
            }}
          />
          <button
            className="w-full sm:w-auto bg-brand-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-brand-800 transition-colors disabled:opacity-50"
            disabled={!canSend}
            onClick={handleSend}
          >
            {sendLabel}
          </button>
        </div>
        {previewNote ? (
          <p className="text-slate-500 text-xs mt-2">{previewNote}</p>
        ) : null}
      </div>
    </div>
  );
});

AiChatPreviewCard.displayName = "AiChatPreviewCard";

export default AiChatPreviewCard;
