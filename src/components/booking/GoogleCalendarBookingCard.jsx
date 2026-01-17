export default function GoogleCalendarBookingCard({
  calendarUrl,
  borderless = false,
  title = "Book time on my calendar",
  subtitle = "Pick a time that works for you. You'll get a confirmation email and an invite automatically.",
  openLabel = "Open in Google Calendar",
  iframeTitle = "Book a call",
}) {
  return (
    <div
      className={
        "rounded-2xl bg-white p-5 sm:p-6 text-left overflow-hidden" +
        (borderless ? "" : " shadow-sm") +
        (borderless ? "" : " border border-slate-200")
      }
    >
      <div className="text-sm font-semibold text-slate-900">{title}</div>
      <div className="mt-1 text-sm text-slate-600">{subtitle}</div>

      <div className="mt-4 flex flex-wrap gap-3 items-center justify-between">
        <a
          href={calendarUrl}
          target="_blank"
          rel="noreferrer"
          className="text-xs font-semibold text-slate-600 hover:text-slate-900 underline underline-offset-4"
        >
          {openLabel}
        </a>
      </div>

      <div className="mt-5 -mx-5 sm:-mx-6">
        <iframe
          src={calendarUrl}
          title={iframeTitle}
          className="w-full h-250"
          style={{ border: 0 }}
          frameBorder="0"
        />
      </div>
    </div>
  );
}
