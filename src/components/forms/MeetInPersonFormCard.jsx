import { useId, useState } from "react";

import { submitMeetInPersonLead } from "../../api";

function toObject(formData) {
  return Object.fromEntries(formData.entries());
}

export default function MeetInPersonFormCard({
  title = "Meet in person in Indianapolis",
  subtitle = "Prefer face-to-face? We can meet at your office (or a convenient public spot) to talk through scope, timelines, and next steps.",
  whereLabel = "Where would you like to meet?",
  whereOptions = ["Your office", "Public Space", "I'm not sure yet"],
  whenLabel = "When are you hoping to meet?",
  whenPlaceholder = "e.g. Next week, weekday mornings, flexible",
  addressLabel = "Address / location details",
  addressPlaceholder = "If you have a specific address or venue in mind, add it here.",
  notesLabel = "What should we prepare for?",
  notesPlaceholder = "What are you trying to build, key stakeholders, timelines, or anything we should know before we meet.",
  submitLabel = "Request In-Person Meeting",
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
            await submitMeetInPersonLead(values);
          } catch (err) {
            apiOk = false;
            console.error("Failed posting meet-in-person lead", err);
          }

          try {
            await onSubmit?.(values);
          } catch (err) {
            console.error("Meet-in-person onSubmit handler threw", err);
          }

          if (apiOk) {
            formEl.reset();
          }

          setSubmitStatus(
            apiOk
              ? {
                  kind: "success",
                  message:
                    "Thanks — we received your request and will follow up to confirm details.",
                }
              : {
                  kind: "error",
                  message:
                    "Something went wrong sending your request. Please try again, or use the booking option above.",
                }
          );
          setIsSubmitting(false);
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor={`${id}-meet-name`}
              className="block text-sm font-medium text-slate-700"
            >
              Name
            </label>
            <input
              id={`${id}-meet-name`}
              name="name"
              autoComplete="name"
              required
              className={inputClassName}
              placeholder="Jane Smith"
            />
          </div>

          <div>
            <label
              htmlFor={`${id}-meet-email`}
              className="block text-sm font-medium text-slate-700"
            >
              Email
            </label>
            <input
              id={`${id}-meet-email`}
              name="email"
              type="email"
              autoComplete="email"
              required
              className={inputClassName}
              placeholder="jane@company.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor={`${id}-meet-phone`}
              className="block text-sm font-medium text-slate-700"
            >
              Phone
            </label>
            <input
              id={`${id}-meet-phone`}
              name="phone"
              type="tel"
              autoComplete="tel"
              className={inputClassName}
              placeholder="(555) 123-4567"
            />
          </div>

          <div>
            <label
              htmlFor={`${id}-meet-where`}
              className="block text-sm font-medium text-slate-700"
            >
              {whereLabel}
            </label>
            <select
              id={`${id}-meet-where`}
              name="where"
              required
              defaultValue=""
              className={inputClassName}
            >
              <option value="" disabled>
                Select an option
              </option>
              {whereOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label
            htmlFor={`${id}-meet-when`}
            className="block text-sm font-medium text-slate-700"
          >
            {whenLabel}
          </label>
          <input
            id={`${id}-meet-when`}
            name="when"
            className={inputClassName}
            placeholder={whenPlaceholder}
          />
        </div>

        <div>
          <label
            htmlFor={`${id}-meet-address`}
            className="block text-sm font-medium text-slate-700"
          >
            {addressLabel}
          </label>
          <input
            id={`${id}-meet-address`}
            name="address"
            className={inputClassName}
            placeholder={addressPlaceholder}
          />
        </div>

        <div>
          <label
            htmlFor={`${id}-meet-notes`}
            className="block text-sm font-medium text-slate-700"
          >
            {notesLabel}
          </label>
          <textarea
            id={`${id}-meet-notes`}
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
