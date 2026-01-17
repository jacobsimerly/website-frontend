import { Link, useParams } from "react-router-dom";

import servicesHeroSvg from "../../assets/svg/services.svg?raw";
import {
  DEFAULT_SERVICE_SLUG,
  SERVICES,
  isValidServiceSlug,
} from "../services/servicesCatalog";

export default function ServicesHeroSection() {
  const { serviceSlug } = useParams();
  const resolvedServiceSlug =
    serviceSlug && isValidServiceSlug(serviceSlug)
      ? serviceSlug
      : DEFAULT_SERVICE_SLUG;

  const servicesHeroSvgStyled = servicesHeroSvg
    .replaceAll("#6c63ff", "currentColor")
    .replaceAll("#6C63FF", "currentColor");

  return (
    <section className="pt-16 sm:pt-20 pb-8 sm:pb-10 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Turn Your Firm’s Data Into a Action.
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-slate-600 leading-relaxed">
              We bridge the gap between messy SharePoint folders and actionable
              AI insights. SoulPoint AI builds secure, scalable data foundations
              for legal firms who are ready to move beyond “basic chat” and into
              true workflow automation.
            </p>

            <div className="mt-8">
              <Link
                to="/contact#contact"
                className="inline-flex items-center justify-center w-full sm:w-auto bg-brand-900 text-white px-6 py-4 rounded-lg text-base font-semibold hover:bg-brand-800 transition-colors"
              >
                Schedule a 30-Minute Strategy Audit
              </Link>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-sm lg:max-w-md">
              <div
                role="img"
                aria-label="Services"
                className="w-full h-auto text-orange-500 drop-shadow-md [&_svg]:h-full [&_svg]:w-full [&_svg]:block"
                dangerouslySetInnerHTML={{ __html: servicesHeroSvgStyled }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-slate-200" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="service-selector" className="pt-8">
          <div className="text-sm font-bold tracking-widest text-brand-800 uppercase">
            Choose a service
          </div>

          <div
            id="service-selector-pills"
            className="mt-4 flex flex-wrap justify-center lg:justify-start gap-4"
          >
            {SERVICES.map((service) => {
              const isActive = service.slug === resolvedServiceSlug;

              return (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}#service-selector-pills`}
                  aria-current={isActive ? "page" : undefined}
                  className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 border ${
                    isActive
                      ? "bg-brand-800 text-white border-brand-800 shadow-lg scale-105"
                      : "bg-white text-slate-600 border-slate-200 hover:border-slate-400 hover:bg-slate-50"
                  }`}
                >
                  {service.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
