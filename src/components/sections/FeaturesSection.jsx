import workflowsSvg from "../../assets/svg/Workflows.svg?raw";
import dataSvg from "../../assets/svg/data.svg?raw";
import securitySvg from "../../assets/svg/Security.svg?raw";

const FEATURES = [
  {
    iconSvg: workflowsSvg,
    iconAlt: "Workflow automation",
    iconClassName: "h-40 w-40",
    iconColorClassName: "text-emerald-600",
    recolorPurpleAccent: true,
    title: "Workflow Automation",
    description:
      "Compress years of human workload into hours. We deploy intelligent agents and tools to handle complex tasks allowing you to scale without adding headcount.",
    ctaLabel: "Learn More",
  },
  {
    iconSvg: dataSvg,
    iconAlt: "Data integrity and engineering",
    iconClassName: "h-48 w-48",
    recolorPurpleAccent: false,
    title: "Data Integrity & Engineering",
    description:
      "Automation & AI are only as good as the data you put into it. Data leads the AI conversation. And we'll ensure that your data is clean, well-structured, properly governed, and ready for whatever tools need to use it.",
    ctaLabel: "Learn More",
  },
  {
    iconSvg: securitySvg,
    iconAlt: "Compliance and governance",
    iconClassName: "h-40 w-40",
    iconColorClassName: "text-yellow-600",
    recolorPurpleAccent: true,
    title: "Compliance & Governance",
    description:
      "The rules and regulations around AI are changing daily. Proper governance is essential to maintain compliance. We keep our finger on the pulse of the data and AI world to implement the technical guardrails that help keep your operations within industry standards.",
    ctaLabel: "Learn More",
  },
];

export default function FeaturesSection() {
  const COPY = {
    title: "Everyone is talking about AI, but we are building it.",
    subtitle:
      "We don't just talk about AI and roadmaps.  We design the strategy, manage the data, write the code and then implement security to make AI work for your business.",
  };

  return (
    <section
      id="services"
      className="py-20 sm:py-24 md:py-28 bg-slate-50 relative z-10 border-t border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
            {COPY.title}
          </h2>
          <p className="text-sm sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {COPY.subtitle}
          </p>
        </div>

        <div className="space-y-50 sm:space-y-16 md:space-y-20">
          {FEATURES.map((feature, idx) => {
            const isReversed = idx % 2 === 1;

            return (
              <div
                key={feature.title}
                className={
                  "grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-10 items-center" +
                  (isReversed ? " md:[&>div:first-child]:order-2" : "")
                }
              >
                {/* Image placeholder */}
                <div
                  className={
                    "bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-10 flex items-center justify-center aspect-square w-full max-w-xs sm:max-w-sm mx-auto" +
                    (isReversed ? " md:mx-0 md:ml-auto" : " md:mx-0 md:mr-auto")
                  }
                >
                  <div
                    role="img"
                    aria-label={feature.iconAlt}
                    className={
                      (feature.iconColorClassName
                        ? feature.iconColorClassName + " "
                        : "") +
                      feature.iconClassName +
                      " [&_svg]:h-full [&_svg]:w-full [&_svg]:block" +
                      (feature.recolorPurpleAccent
                        ? " **:[[fill='#6c63ff']]:fill-current **:[[fill='#6C63FF']]:fill-current"
                        : "")
                    }
                    // Safe: local, static SVG assets.
                    dangerouslySetInnerHTML={{ __html: feature.iconSvg }}
                  />
                </div>

                {/* Copy */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="mt-6">
                    <button className="w-full sm:w-auto bg-brand-900 text-white px-6 py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-brand-800 transition-colors">
                      {feature.ctaLabel}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
