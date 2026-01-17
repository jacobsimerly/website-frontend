import jacobHeadshot from "../assets/images/jacob_headshot.png";

export default function AboutPage() {
  const logo = {
    src: null,
    alt: "SoulPoint logo",
  };

  const founder = {
    name: "Jacob Simerly",
    title: "Founder",
    subtitle: "Data Nerd by Nature. Process Architect by Trade.",
    bio: [
      "I’ve always been a builder. On nights and weekends, you’ll usually find me deep in a passion project; whether I’m developing custom apps for my friends or building a machine learning model to gain an edge in my dynasty fantasy football league. I am, and have always been, a data and development nerd.",
      "But my career has taught me that technology is only half the battle.",
      'Before diving into the world of Big Law, I spent years as a Consultant and Team Lead in the HR software space. My job wasn\'t just to implement software; it was to act as a bridge between complex systems and the non-technical people who had to use them. I learned how to lead teams through the friction of change and how to simplify the "scary" parts of digital transformation.',
      "I later transitioned into building end-to-end automation, where I developed a eye for identifying 'broken' business processes. I realized that most processes aren't actually broken, but instead are simply artifacts of the time they were created. They were built before you scaled and before we had the tools we have today. My goal is to bridge that gap, using software and AI to handle the legacy heavy-lifting so employees can finally focus on the work that actually matters to them.",
      "Why trust me with your AI journey?",
      "Currently, I serve as the Lead Data Engineer for an AM 100 law firm. I spend my days managing data and AI readiness at the highest level; building the massive data lakes and warehouses that power sophisticated AI systems in one of the most regulated industries in the world.",
      'I founded SoulPoint because I realized that the data and AI strategies used by the large companies shouldn\'t be a secret or impossible to implement. I’ve seen what’s possible at the top of the market, and I have the unique blend of technical expertise and "human-first" consulting experience to help your business implement AI safely, effectively, and with a soul.',
    ],
    headshotSrc: jacobHeadshot,
    headshotAlt: "Headshot",
  };

  return (
    <>
      <div className="h-16" />

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            <div className="lg:col-span-7">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                The Why
              </h1>
              <p className="mt-4 text-base sm:text-lg font-semibold text-slate-900">
                Bridging the Gap in the Intelligence Revolution
              </p>

              <div className="mt-5 space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed">
                <p>
                  We are currently at a crossroads similar to the dawn of the
                  internet in the early 2000s. Generative AI is not just a new
                  tool; it is a fundamental shift in how work gets done.
                  However, a gap is forming: while large corporations can spend
                  millions on custom AI infrastructure, many small to medium
                  sized businesses are being left to wonder how to adopt this
                  technology without compromising safety or breaking the bank.
                </p>
                <p>
                  SoulPoint was founded to ensure no business has to be left
                  behind.
                </p>
                <p>
                  We believe that the future of work isn't about replacing
                  people; it’s about finding the "Soul in the Loop." Our mission
                  is to identify the points in your process that require human
                  intuition, empathy, and judgment—the "soul" of your
                  practice—and use AI, software, and data to obfuscate the
                  repetitive, soul-crushing tasks that sit in the way.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="w-72 sm:w-80 lg:w-96 aspect-square rounded-3xl border border-slate-200 p-6 sm:p-8 flex items-center justify-center">
                {logo.src ? (
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-h-full max-w-full h-auto w-auto"
                  />
                ) : (
                  <div aria-label="SoulPoint" className="text-center">
                    <div className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none bg-gradient-to-r from-brand-900 to-brand-800 bg-clip-text text-transparent">
                      SoulPoint
                    </div>
                    <div className="mt-3 text-base sm:text-lg font-semibold tracking-wide text-brand-900">
                      Data, AI, and Automation
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Meet the Founder
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
              {founder.subtitle}
            </p>
          </div>

          <div className="mt-10">
            <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-start">
              <div className="shrink-0">
                {founder.headshotSrc ? (
                  <img
                    src={founder.headshotSrc}
                    alt={founder.headshotAlt}
                    className="w-72 sm:w-80 md:w-96 h-auto rounded-3xl object-contain"
                  />
                ) : (
                  <div className="w-72 sm:w-80 md:w-96 aspect-[4/5] flex items-center justify-center">
                    <span className="text-base text-slate-400">Headshot</span>
                  </div>
                )}
              </div>

              <div className="min-w-0">
                <div className="flex flex-col">
                  <p className="text-xl font-semibold text-slate-900">
                    {founder.name}
                  </p>
                  <p className="mt-1 text-sm sm:text-base text-slate-600">
                    {founder.title}
                  </p>
                </div>

                <div className="mt-4 space-y-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                  {founder.bio.map((paragraph, index) => {
                    const isInlineHeading = paragraph.endsWith("?");
                    return isInlineHeading ? (
                      <h3
                        key={index}
                        className="text-base sm:text-lg font-semibold text-slate-900"
                      >
                        {paragraph}
                      </h3>
                    ) : (
                      <p key={index}>{paragraph}</p>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
