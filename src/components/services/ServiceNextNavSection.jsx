import { Link } from "react-router-dom";

import { DEFAULT_SERVICE_SLUG, SERVICES } from "./servicesCatalog";

export default function ServiceNextNavSection({ currentServiceSlug }) {
  const currentIndex = SERVICES.findIndex(
    (service) => service.slug === currentServiceSlug
  );

  const safeIndex = currentIndex >= 0 ? currentIndex : 0;
  const nextService = SERVICES[(safeIndex + 1) % SERVICES.length];

  const nextHref = `/services/${
    nextService?.slug ?? DEFAULT_SERVICE_SLUG
  }#services`;

  return (
    <section className="py-10 sm:py-12 bg-slate-50 relative z-10 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div>
              <p className="text-sm font-bold tracking-widest text-brand-800 uppercase">
                Next
              </p>
              <h3 className="mt-3 text-2xl sm:text-3xl font-bold text-slate-900">
                Learn about our {nextService.label}
              </h3>
              <p className="mt-3 text-slate-600 leading-relaxed">
                Keep going to see how we approach{" "}
                {nextService.label.toLowerCase()}.
              </p>
            </div>

            <div className="flex lg:justify-end">
              <Link
                to={nextHref}
                className="inline-flex items-center justify-center w-full sm:w-auto bg-brand-900 text-white px-6 py-4 rounded-lg text-base font-semibold hover:bg-brand-800 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
