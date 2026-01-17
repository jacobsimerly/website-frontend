export default function ServicesProcessSection() {
  return (
    <section className="py-16 sm:py-20 bg-slate-50 relative z-10 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold tracking-widest text-brand-800 uppercase">
            How We Work
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-900">
            A clear process that removes the guesswork.
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-7">
            <p className="text-sm font-bold tracking-widest text-brand-800 uppercase">
              Discovery
            </p>
            <h3 className="mt-2 text-xl font-bold text-slate-900">The Audit</h3>
            <p className="mt-3 text-slate-600 leading-relaxed">
              We map your current data silos and identify your highest-value
              “Low Hanging Fruit.”
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-7">
            <p className="text-sm font-bold tracking-widest text-brand-800 uppercase">
              Architecture
            </p>
            <h3 className="mt-2 text-xl font-bold text-slate-900">The Build</h3>
            <p className="mt-3 text-slate-600 leading-relaxed">
              We set up your secure Microsoft Fabric or GCS environment.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-7">
            <p className="text-sm font-bold tracking-widest text-brand-800 uppercase">
              Deployment
            </p>
            <h3 className="mt-2 text-xl font-bold text-slate-900">The Agent</h3>
            <p className="mt-3 text-slate-600 leading-relaxed">
              We build and ground your custom AI tools.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-7">
            <p className="text-sm font-bold tracking-widest text-brand-800 uppercase">
              Governance
            </p>
            <h3 className="mt-2 text-xl font-bold text-slate-900">
              The Hand-off
            </h3>
            <p className="mt-3 text-slate-600 leading-relaxed">
              We train your team and set up permissions so you stay in total
              control.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
