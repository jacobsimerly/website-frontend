import { Link } from "react-router-dom";

export default function Footer() {
  const COPY = {
    brand: {
      name: "SoulPoint",
    },
    blurb:
      "Data and AI consulting for teams in Indianapolis. Strategy, implementation, and governance; built to ship real outcomes.",
    columns: {
      navTitle: "Navigate",
      nav: [
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
      ],
      servicesTitle: "Services",
      services: [
        { label: "Data Strategy", href: "/services/data-strategy" },
        {
          label: "Data and AI Foundations",
          href: "/services/data-ai-foundations",
        },
        {
          label: "Workflow & Process Automation",
          href: "/services/workflow-and-process",
        },
        {
          label: "Governance and Safety",
          href: "/services/data-ai-governance",
        },
      ],
      engagementsTitle: "Engagements",
      engagements: [
        { label: "Engagement Models", href: "/#engagements" },
        { label: "Quick Wins", href: "/#engagements" },
        { label: "Project Engagements", href: "/#engagements" },
        { label: "Partnerships", href: "/#engagements" },
      ],
      ctaTitle: "Get Started",
      cta: [
        { label: "Book Now", href: "/contact#contact" },
        { label: "Contact Us", href: "/contact#contact" },
      ],
    },
    copyright: "© 2025 SoulPoint. All rights reserved.",
  };

  return (
    <footer className="bg-brand-900 border-t border-white/10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="text-lg font-bold text-white tracking-tight">
              {COPY.brand.name}
            </div>
            <p className="mt-4 text-slate-300/80 text-sm sm:text-base leading-relaxed">
              {COPY.blurb}
            </p>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">
                {COPY.columns.navTitle}
              </h4>
              <ul className="space-y-2 text-sm">
                {COPY.columns.nav.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.href}
                      className="text-slate-300/80 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white mb-4">
                {COPY.columns.servicesTitle}
              </h4>
              <ul className="space-y-2 text-sm">
                {COPY.columns.services.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.href}
                      className="text-slate-300/80 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white mb-4">
                {COPY.columns.engagementsTitle}
              </h4>
              <ul className="space-y-2 text-sm">
                {COPY.columns.engagements.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.href}
                      className="text-slate-300/80 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white mb-4">
                {COPY.columns.ctaTitle}
              </h4>
              <ul className="space-y-2 text-sm">
                {COPY.columns.cta.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.href}
                      className="text-slate-300/80 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-8 text-center">
          <p className="text-slate-300/60 text-sm">{COPY.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
