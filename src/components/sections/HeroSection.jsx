import ShaderBackground from "../background/ShaderBackground";

export default function HeroSection() {
  const COPY = {
    title: (
      <div>
        Data & AI Consulting <br /> for Indianapolis
      </div>
    ),
    subtitle:
      "Data & AI for your toughest workflows. We build the strategy, the tools, and the governance to ensure your operations are compliant and efficient.",
    primaryCta: "Schedule Consultation",
    secondaryCta: "View Our Services",
  };

  return (
    <section
      id="home"
      className="min-h-svh relative overflow-hidden bg-brand-900"
    >
      {/* Background (hero-only) */}
      <ShaderBackground enabled variant="medium" />

      {/* Content */}
      <div className="relative z-10 flex min-h-svh items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 sm:pt-0 pb-16 sm:pb-0">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 leading-tight drop-shadow-lg">
              <span className="text-white">{COPY.title}</span>
            </h1>
            <p className="text-sm sm:text-lg md:text-xl text-slate-200/90 mb-26 sm:mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              {COPY.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center">
              <a
                href="/contact#contact"
                className="relative w-full sm:w-64 bg-white text-black px-6 sm:px-8 py-5 sm:py-6 rounded-lg text-base sm:text-lg font-semibold hover:bg-gray-200 transition-colors shadow-lg hover:shadow-xl hover:cursor-pointer"
              >
                <span className="block text-center leading-tight">
                  {COPY.primaryCta}
                </span>
              </a>
              <a
                href="/services"
                className="w-full sm:w-64 border border-white/25 bg-white/10 backdrop-blur-sm text-white px-6 sm:px-8 py-4 sm:py-5 rounded-lg text-base sm:text-lg font-semibold hover:bg-white/15 transition-colors hover:cursor-pointer"
              >
                {COPY.secondaryCta}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
