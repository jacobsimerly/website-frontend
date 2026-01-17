import { GoogleCalendarBookingCard } from "../booking";
import { ContactMethodTabs } from "../cta";
import { ContactFormCard, MeetInPersonFormCard } from "../forms";

export default function CtaSection({
  title = "Ready to Get Started?",
  subtitle = "Join thousands of satisfied clients who have transformed their business with our solutions.",
  showHeader = true,
  borderless = false,
  tabs = {
    book: "Book Now",
    meet: "Meet in Person",
    contact: "Contact Us",
  },
  calendarUrl = "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0GRbrsHgxNMJyQ_G3l7sIdaFVa_vGzyueNcj1Kly7ly7HZ5Uvvr-EgszO8ZFPpjcf2IA1ue4Uy?gv=true",
  bookingTitle,
  bookingSubtitle,
  bookingOpenLabel,
  meetTitle,
  meetSubtitle,
  meetWhereLabel,
  meetWhereOptions,
  meetWhenLabel,
  meetWhenPlaceholder,
  meetAddressLabel,
  meetAddressPlaceholder,
  meetNotesLabel,
  meetNotesPlaceholder,
  meetSubmitLabel,
  contactTitle,
  contactSubtitle,
  contactNotesLabel,
  contactNotesPlaceholder,
  contactSubmitLabel,
  onMeetSubmit,
  onContactSubmit,
  showAiChatLink = true,
  sectionClassName = "py-20 sm:py-24 md:py-28 bg-white relative z-10 border-t border-slate-200",
  contactMethodTabsProps,
}) {
  const methodTabs = [
    {
      id: "book",
      label: tabs.book,
      panelWrapperClassName: "max-w-3xl mx-auto text-center",
      content: (
        <GoogleCalendarBookingCard
          calendarUrl={calendarUrl}
          borderless={borderless}
          title={bookingTitle}
          subtitle={bookingSubtitle}
          openLabel={bookingOpenLabel}
          iframeTitle="Book a call"
        />
      ),
    },
    {
      id: "meet",
      label: tabs.meet,
      panelWrapperClassName: "max-w-3xl mx-auto text-center",
      content: (
        <MeetInPersonFormCard
          borderless={borderless}
          title={meetTitle}
          subtitle={meetSubtitle}
          whereLabel={meetWhereLabel}
          whereOptions={meetWhereOptions}
          whenLabel={meetWhenLabel}
          whenPlaceholder={meetWhenPlaceholder}
          addressLabel={meetAddressLabel}
          addressPlaceholder={meetAddressPlaceholder}
          notesLabel={meetNotesLabel}
          notesPlaceholder={meetNotesPlaceholder}
          submitLabel={meetSubmitLabel}
          onSubmit={onMeetSubmit}
        />
      ),
    },
    {
      id: "contact",
      label: tabs.contact,
      panelWrapperClassName: "max-w-3xl mx-auto text-center",
      content: (
        <ContactFormCard
          borderless={borderless}
          title={contactTitle}
          subtitle={contactSubtitle}
          notesLabel={contactNotesLabel}
          notesPlaceholder={contactNotesPlaceholder}
          submitLabel={contactSubmitLabel}
          onSubmit={onContactSubmit}
        />
      ),
    },
  ];

  return (
    <section id="contact" className={sectionClassName}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeader ? (
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 sm:mb-6">
              {title}
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 mb-6 sm:mb-8 leading-relaxed">
              {subtitle}
            </p>
          </div>
        ) : null}

        <ContactMethodTabs
          tabs={methodTabs}
          defaultTabId="book"
          tabListWrapperClassName="max-w-3xl mx-auto"
          {...contactMethodTabsProps}
        />

        {showAiChatLink ? (
          <div className="text-center">
            <a
              href="#ai-chat"
              className="inline-flex items-center justify-center w-full sm:w-auto underline px-6 py-3 rounded-lg text-base font-semibold hover:text-brand-800 transition-colors"
            >
              Still have questions? Let’s Answer Them Right Now!
            </a>
          </div>
        ) : null}
      </div>
    </section>
  );
}
