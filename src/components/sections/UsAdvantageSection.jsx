import React from "react";

// Import SVGs as raw markup for Vite prod builds
import securitySvg from "../../assets/svg/secure.svg?raw";
import executionSvg from "../../assets/svg/engineering.svg?raw";
import velocitySvg from "../../assets/svg/fast.svg?raw";

const US_ADVANTAGE = [
  {
    id: "security",
    title: "Data Security & Compliance",
    iconSvg: securitySvg,
    iconAlt: "Security",
    // Adding the color and recolor logic to the data objects
    iconColorClassName: "text-green-500",
    recolorPurpleAccent: true,
    description:
      "Your data never leaves our hands. By operating 100% domestic and in-house, we handle confidential information within the same legal framework as your business.",
  },
  {
    id: "quality",
    title: "Direct Execution",
    iconSvg: executionSvg,
    iconAlt: "Execution",
    iconColorClassName: "text-brand-800",
    recolorPurpleAccent: false,
    description:
      "We don't sell strategy then hand off to offshore teams. The people who understand your business goals are the same people building the solution.",
  },
  {
    id: "velocity",
    title: "High-Velocity",
    iconSvg: velocitySvg,
    iconAlt: "Velocity",
    iconColorClassName: "text-orange-600",
    recolorPurpleAccent: true,
    description:
      "The fastest way to finish a project is to never explain it twice. We skip the hand-offs, moving in a straight line from problem to solution.",
  },
];

export default function UsAdvantageSection() {
  const COPY = {
    title: "Total Ownership. Zero Outsourcing.",
    subtitle:
      "We provide the assurance that 100% of your development is handled in-house, ensuring total accountability and data security.",
  };

  return (
    <section
      id="advantage"
      className="py-24 bg-slate-50 border-y border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold tracking-widest text-brand-800 uppercase mb-4">
            The SoulPoint Advantage
          </h2>
          <p className="text-4xl font-extrabold tracking-tight text-brand-950 sm:text-5xl mb-6">
            {COPY.title}
          </p>
          <p className="max-w-2xl mx-auto text-xl text-brand-900 leading-relaxed">
            {COPY.subtitle}
          </p>
        </div>

        {/* Advantage Cards */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {US_ADVANTAGE.map((item) => (
            <div
              key={item.id}
              className="group relative flex flex-col bg-white p-10 rounded-[2rem] border border-slate-200 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-950/5 hover:border-brand-800/30"
            >
              {/* Illustration Container */}
              <div className="relative h-48 w-full mb-8 flex items-center justify-center overflow-visible">
                {/* Subtle Brand-tinted glow behind SVG */}
                <div className="absolute inset-0 bg-brand-800 rounded-full blur-[60px] opacity-0 group-hover:opacity-10 transition-opacity duration-700" />

                {/* SVG Wrapper with injected color logic */}
                <div
                  role="img"
                  aria-label={item.iconAlt}
                  className={
                    "relative w-[90%] h-[90%] flex items-center justify-center transition-transform duration-500 group-hover:scale-105" +
                    " [&_svg]:h-full [&_svg]:w-full [&_svg]:block " +
                    (item.iconColorClassName ? item.iconColorClassName : "") +
                    (item.recolorPurpleAccent
                      ? " [&_[fill='#6c63ff']]:fill-current [&_[fill='#6C63FF']]:fill-current"
                      : "")
                  }
                  dangerouslySetInnerHTML={{ __html: item.iconSvg }}
                />
              </div>

              {/* Text content - Properly aligned across cards */}
              <div className="flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-brand-950 mb-4 tracking-tight leading-tight min-h-[4rem] flex items-start">
                  {item.title}
                </h3>

                <p className="text-lg leading-relaxed text-brand-900">
                  {item.description}
                </p>
              </div>

              {/* Bottom accent bar using brand-800 */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-brand-800 transition-all duration-500 group-hover:w-1/3 rounded-t-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
