export default function ServicesStateSection() {
  return (
    <section className="py-16 sm:py-20 bg-white relative z-10 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <div>
            <p className="text-sm font-bold tracking-widest text-brand-800 uppercase">
              The State of the Firm
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
              You’ve got the data, but you don’t have the answers.
            </h2>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              Most law firms are sitting on a goldmine of past matters, rate
              sheets, and client files. But it’s siloed, unstructured, and
              inaccessible to AI.
            </p>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              We solve the three biggest barriers to firm-wide intelligence:
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-lg font-bold text-slate-900">
                Data Fragmentation
              </h3>
              <p className="mt-2 text-slate-600 leading-relaxed">
                Info is scattered across SharePoint, legacy SQL, and local
                drives.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-lg font-bold text-slate-900">
                Security Fears
              </h3>
              <p className="mt-2 text-slate-600 leading-relaxed">
                You want AI, but you can’t risk your “Private Client” data
                training a public model.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-lg font-bold text-slate-900">
                The “Hype” Gap
              </h3>
              <p className="mt-2 text-slate-600 leading-relaxed">
                You’ve tried generic AI tools, and they aren’t saving you
                billable hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
