import { Link } from "react-router-dom";

export default function ServicesTrustCtaSection() {
  return (
    <section className="py-16 sm:py-20 bg-white relative z-10 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-brand-900 p-8 sm:p-10 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold">
                Ready to see what your data can actually do?
              </h2>
            </div>
            <div className="flex lg:justify-end">
              <Link
                to="/contact#contact"
                className="inline-flex items-center justify-center w-full sm:w-auto bg-white text-black px-6 py-4 rounded-lg text-base font-semibold hover:bg-gray-200 transition-colors"
              >
                Book Your Data Foundation Audit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
