import { useId, useState } from "react";

import { submitContactLead } from "../../api";

function toObject(formData) {
  return Object.fromEntries(formData.entries());
}

export default function ContactFormCard({
  title = "Tell us a little about you",
  subtitle = "Fill this out and we’ll get back to you shortly (usually same day).",
  notesLabel = "Notes",
  notesPlaceholder = "What are you looking to build? Any deadlines or details we should know?",
  submitLabel = "Send Message",
  borderless = false,
  onSubmit,
}) {
  const id = useId();
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const inputClassName =
    "mt-1 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/20";

  return (
    <div
      className={
        "rounded-2xl bg-white p-5 sm:p-6 text-left" +
        (borderless ? "" : " shadow-sm border border-slate-200")
      }
    >
      <div className="text-sm font-semibold text-slate-900">{title}</div>
      <div className="mt-1 text-sm text-slate-600">{subtitle}</div>

      <form
        className="mt-5 space-y-4"
        onSubmit={async (e) => {
          e.preventDefault();
          const formEl = e.currentTarget;
          const values = toObject(new FormData(formEl));

          if (isSubmitting) return;
          setIsSubmitting(true);
          setSubmitStatus(null);

          let apiOk = true;
          try {
            await submitContactLead(values);
          } catch (err) {
            apiOk = false;
            console.error("Failed posting contact lead", err);
          }

          try {
            await onSubmit?.(values);
          } catch (err) {
            console.error("Contact onSubmit handler threw", err);
          }

          if (apiOk) {
            formEl.reset();
          }

          setSubmitStatus(
            apiOk
              ? {
                  kind: "success",
                  message:
                    "Thanks — we received your message and will respond shortly.",
                }
              : {
                  kind: "error",
                  message:
                    "Something went wrong sending your message. Please try again, or use the booking option above.",
                }
          );
          setIsSubmitting(false);
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor={`${id}-name`}
              className="block text-sm font-medium text-slate-700"
            >
              Name
            </label>
            <input
              id={`${id}-name`}
              name="name"
              autoComplete="name"
              required
              className={inputClassName}
              placeholder="Jane Smith"
            />
          </div>

          <div>
            <label
              htmlFor={`${id}-email`}
              className="block text-sm font-medium text-slate-700"
            >
              Email
            </label>
            <input
              id={`${id}-email`}
              name="email"
              type="email"
              autoComplete="email"
              required
              className={inputClassName}
              placeholder="jane@company.com"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor={`${id}-phone`}
            className="block text-sm font-medium text-slate-700"
          >
            Phone
          </label>
          <input
            id={`${id}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            className={inputClassName}
            placeholder="(555) 123-4567"
          />
        </div>

        <div>
          <label
            htmlFor={`${id}-notes`}
            className="block text-sm font-medium text-slate-700"
          >
            {notesLabel}
          </label>
          <textarea
            id={`${id}-notes`}
            name="notes"
            rows={4}
            className={inputClassName.replace("w-full ", "w-full resize-none ")}
            placeholder={notesPlaceholder}
          />
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            aria-busy={isSubmitting}
            className={
              "w-full sm:w-auto bg-brand-900 text-white px-6 py-3 rounded-lg text-base font-semibold transition-colors " +
              (isSubmitting
                ? "opacity-80 cursor-not-allowed"
                : "hover:bg-brand-800")
            }
          >
            <span className="inline-flex items-center justify-center gap-2">
              {isSubmitting ? (
                <span
                  className="inline-block h-4 w-4 rounded-full border-2 border-white/40 border-t-white animate-spin"
                  aria-hidden
                />
              ) : null}
              <span>{isSubmitting ? "Sending…" : submitLabel}</span>
            </span>
          </button>

          {submitStatus ? (
            <div
              className={
                "mt-3 text-sm " +
                (submitStatus.kind === "error"
                  ? "text-red-600"
                  : "text-slate-600")
              }
              role={submitStatus.kind === "error" ? "alert" : undefined}
              aria-live={submitStatus.kind === "error" ? "assertive" : "polite"}
            >
              {submitStatus.message}
            </div>
          ) : null}
        </div>
      </form>
    </div>
  );
}
