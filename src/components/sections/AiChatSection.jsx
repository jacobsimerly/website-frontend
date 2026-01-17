import { useMemo, useRef, useState } from "react";
import AiChatPreviewCard from "../ai/AiChatPreviewCard";

export default function AiChatSection({
  sectionId = "ai-chat",
  sectionClassName = "py-20 sm:py-24 md:py-28 bg-white relative z-10 border-t border-slate-200",
  borderless = false,
  titleLine1 = "Want to know more about SoulPoint?",
  titleLine2 = "Just Ask.",
  subtitleLine1 = "We'll answer your questions about our business without the guess-work of a FAQ.",
  subtitleLine2 = "Just ask our AI below.",
  assistantName = "SoulPoint AI Assistant",
  assistantStatus = "Online • Ready to help",
  inputPlaceholder = "Ask me anything about our services...",
  sendLabel = "Send",
  previewNote = "",
  suggestedPrompts = [
    '"What services do you offer?"',
    '"How can AI help my business?"',
    '"How do we meet?"',
  ],
  messages = {
    ai1: "Hello! I'm here to help you learn about SoulPoint's services. What would you like to know?",
    user1: "What kind of web development services do you offer?",
    ai2: "We specialize in modern web applications using React, Next.js, and Node.js. Our services include custom websites, e-commerce platforms, web apps, and API development. Would you like to know more about any specific service?",
  },
}) {
  const [draft, setDraft] = useState("");
  const chatRef = useRef(null);

  const normalizedPrompts = useMemo(
    () =>
      suggestedPrompts.map((p) => {
        const t = String(p);
        if (
          (t.startsWith('"') && t.endsWith('"')) ||
          (t.startsWith("'") && t.endsWith("'"))
        ) {
          return t.slice(1, -1);
        }
        return t;
      }),
    [suggestedPrompts]
  );

  return (
    <section id={sectionId} className={sectionClassName}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {titleLine1}
            <br />
            {titleLine2}
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {subtitleLine1}
            <br />
            {subtitleLine2}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <AiChatPreviewCard
            ref={chatRef}
            assistantName={assistantName}
            assistantStatus={assistantStatus}
            inputPlaceholder={inputPlaceholder}
            sendLabel={sendLabel}
            previewNote={previewNote}
            messages={messages}
            borderless={borderless}
            draft={draft}
            setDraft={setDraft}
          />

          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            {normalizedPrompts.map((p) => (
              <button
                key={p}
                className={
                  "bg-white hover:bg-slate-50 text-slate-900 px-4 py-2 rounded-lg text-sm transition-colors border border-slate-200"
                }
                onClick={() => {
                  chatRef.current?.sendMessage?.(p);
                }}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
