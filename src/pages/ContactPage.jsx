import contactHeroSvg from "../assets/svg/booking.svg?raw";

import { AiChatSection, CtaSection } from "../components/sections";

export default function ContactPage() {
  const contactHeroSvgOrange = contactHeroSvg
    .replaceAll("#6c63ff", "currentColor")
    .replaceAll("#6C63FF", "currentColor");

  return (
    <>
      <div className="h-16" />

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                Let’s make this real.
                <br />
                Book Now!
              </h1>
              <p className="mt-5 text-lg sm:text-xl text-slate-600 leading-relaxed">
                If you’re serious about improving your data, workflows, or want
                to implement AI, we can help. We're happy to meet you however
                you prefer, phone, video, or in-person.
                <span className="block mt-6">
                  Just use the tool below to schedule some time or contact us
                  with any questions.
                </span>
              </p>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-sm lg:max-w-md">
                <div
                  role="img"
                  aria-label="Contact"
                  className="w-full h-auto text-orange-500 drop-shadow-md [&_svg]:h-full [&_svg]:w-full [&_svg]:block"
                  dangerouslySetInnerHTML={{ __html: contactHeroSvgOrange }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-10 bg-white relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-slate-50 p-5 sm:p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h2 className="text-base font-semibold text-slate-900">
                  What this session is
                </h2>
                <ul className="mt-3 space-y-2 text-sm sm:text-base text-slate-600">
                  <li className="flex gap-2">
                    <span className="shrink-0">✅</span>
                    <span>Quick review of your business and goals</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="shrink-0">✅</span>
                    <span>
                      Clarifying the problems and bottlenecks you’re facing
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="shrink-0">✅</span>
                    <span>
                      Defining the outcomes you want from an engagement
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="shrink-0">✅</span>
                    <span>First thoughts on how we can help</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-base font-semibold text-slate-900">
                  What this session isn’t
                </h2>
                <ul className="mt-3 space-y-2 text-sm sm:text-base text-slate-600">
                  <li className="flex gap-2">
                    <span className="shrink-0">❌</span>
                    <span>A full audit or deep technical assessment</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="shrink-0">❌</span>
                    <span>Hands-on implementation during the call</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="shrink-0">❌</span>
                    <span>A sales pitch, we want to learn how we can help</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="shrink-0">❌</span>
                    <span>
                      A commitment, you’ll leave with clarity either way
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        showHeader={false}
        showAiChatLink={false}
        borderless
        sectionClassName="pt-10 pb-3 sm:pt-12 sm:pb-4 bg-white relative z-10"
        contactMethodTabsProps={{
          tabListClassName: "flex flex-wrap justify-center gap-4 mb-6",
          panelBaseClassName: "mb-2 sm:mb-3",
        }}
      />

      <div className="bg-white relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 py-2 sm:py-3" aria-hidden>
            <div className="h-px flex-1 bg-slate-200" />
            <div className="text-xs sm:text-sm font-semibold tracking-wide text-slate-500">
              FAQ / Questions
            </div>
            <div className="h-px flex-1 bg-slate-200" />
          </div>
        </div>
      </div>

      <AiChatSection
        titleLine1="Still have questions?"
        titleLine2=""
        subtitleLine1="Ask anything about services, engagement models, or what a first project might look like for your business."
        subtitleLine2=""
        borderless
        sectionClassName="pt-3 pb-10 sm:pt-4 sm:pb-12 bg-white relative z-10"
      />
    </>
  );
}
