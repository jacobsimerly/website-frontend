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
  return `${prefix}_${Math.random()
    .toString(16)
    .slice(2)}_${Date.now().toString(16)}`;
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
  const abortRef = useRef(null);
  const sendInFlightRef = useRef(false);
  const scrollRef = useRef(null);
  const debug =
    Boolean(import.meta?.env?.DEV) || Boolean(import.meta?.env?.VITE_DEBUG_SSE);
  const lastRenderedAiLenRef = useRef(0);

  const persistTimerRef = useRef(null);

  const userIdRef = useRef(null);
  const sessionIdRef = useRef(null);

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

  async function sendMessage(rawPrompt) {
    const prompt = (rawPrompt ?? "").trim();
    if (!prompt || isStreaming || sendInFlightRef.current) return;

    if (debug) {
      // eslint-disable-next-line no-console
      console.log("[chat] sendMessage", { promptLen: prompt.length });
    }

    // Guard against double-trigger (e.g., rapid Enter + click) before React state updates land.
    sendInFlightRef.current = true;

    // Cancel any previous stream
    abortRef.current?.abort?.();
    const controller = new AbortController();
    abortRef.current = controller;

    setIsStreaming(true);
    setDraft("");

    setThread((prev) => [
      ...prev,
      { role: "user", text: prompt, kind: "message" },
      { role: "ai", text: "", kind: "message" },
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
            return;
          }
          if (event === "done") return;

          setThread((prev) => {
            const next = [...prev];
            const last = next[next.length - 1];
            if (last?.role === "ai") {
              const incoming = String(data ?? "");
              const current = String(last.text ?? "");

              // Upstreams differ: some stream *deltas* (append), others stream the
              // *full-so-far* text each time (replace). Handle both.
              if (!current) {
                last.text = incoming;
              } else if (incoming.startsWith(current)) {
                // Cumulative/full-so-far update (or exact repeat)
                last.text = incoming;
              } else {
                // Delta update
                last.text = current + incoming;
              }

              if (debug) {
                // eslint-disable-next-line no-console
                console.log("[chat] state update", {
                  currentLen: current.length,
                  incomingLen: incoming.length,
                  nextLen: String(last.text ?? "").length,
                });
              }
            }
            return next;
          });
        },
      });
    } catch (e) {
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
    } finally {
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
    [sendMessage]
  );

  return (
    <div
      className={
        "bg-white rounded-2xl overflow-hidden relative" +
        (borderless
          ? " border border-slate-200"
          : " shadow-xl border border-slate-200")
      }
    >
      <div className="absolute top-3 right-3 z-10">
        <div className="group relative">
          <button
            type="button"
            aria-label="About this chat"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 hover:text-slate-900 transition-colors"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-5" />
              <path d="M12 8h.01" />
            </svg>
          </button>

          <div
            role="tooltip"
            className="pointer-events-none absolute right-0 mt-2 w-80 max-w-[calc(100vw-2rem)] rounded-lg border border-slate-200 bg-white p-3 text-xs text-slate-700 opacity-0 translate-y-1 transition-all group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:translate-y-0"
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
        className="h-96 sm:h-112 overflow-y-auto p-4 sm:p-6 space-y-4"
      >
        {thread.map((m, idx) =>
          m.role === "ai" ? (
            <div key={idx} className="flex items-start">
              {m.kind === "error" ? (
                <div className="bg-slate-100 rounded-lg p-3 max-w-sm sm:max-w-xl">
                  <AgentErrorMessage />
                </div>
              ) : m.text ? (
                <div className="bg-slate-100 rounded-lg p-3 max-w-sm sm:max-w-xl">
                  <FormattedAiText text={m.text} />
                </div>
              ) : isStreaming && idx === thread.length - 1 ? (
                <div className="max-w-sm sm:max-w-xl px-1 py-1">
                  <TypingIndicator />
                </div>
              ) : null}
            </div>
          ) : (
            <div key={idx} className="flex items-start justify-end">
              <div className="bg-brand-900 rounded-lg p-3 max-w-sm sm:max-w-xl">
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
        <div className="flex gap-3">
          <input
            type="text"
            placeholder={inputPlaceholder}
            className={
              "flex-1 bg-white text-slate-900 rounded-lg px-4 py-3 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300 transition-all border border-slate-200"
            }
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => {
              if (e.key !== "Enter") return;
              if (e.repeat) return;
              if (!canSend) return;
              e.preventDefault();
              handleSend();
            }}
          />
          <button
            className="bg-brand-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-brand-800 transition-colors disabled:opacity-50"
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
