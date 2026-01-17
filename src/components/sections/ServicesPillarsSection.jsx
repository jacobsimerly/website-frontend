export default function ServicesPillarsSection() {
  return (
    <section className="py-16 sm:py-20 bg-white relative z-10 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold tracking-widest text-brand-800 uppercase">
            Core Offerings
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-900">
            Three pillars that turn data into leverage.
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="rounded-4xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900">
              Data Foundations &amp; Engineering
            </h3>
            <div className="mt-6 space-y-5 text-slate-600 leading-relaxed">
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  What we do
                </p>
                <p className="mt-1">
                  Modern Data Stack (Fabric/PySpark) architecture.
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  The value
                </p>
                <p className="mt-1">
                  We don’t just “move” data; we architect it. We build Type 2
                  SCD (Slowly Changing Dimensions) for your rates and matters so
                  you can track historical performance with 100% accuracy.
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Objection swap
                </p>
                <p className="mt-1">
                  “Our data is too messy to use.” → SoulPoint Solution: We
                  specialize in the “Dirty Work.” We clean and unify your
                  disparate sources into a single, high-performance Silver/Gold
                  Lakehouse.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-4xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900">
              Secure Copilot &amp; Agent Implementation
            </h3>
            <div className="mt-6 space-y-5 text-slate-600 leading-relaxed">
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  What we do
                </p>
                <p className="mt-1">
                  Custom-grounded AI agents for SharePoint and Private Folders.
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  The value
                </p>
                <p className="mt-1">
                  We build “Private-First” Copilot agents. Imagine an AI that
                  has read every file in your “Matter Research” folder and can
                  draft a summary in seconds—without that data ever leaving your
                  tenant.
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Objection swap
                </p>
                <p className="mt-1">
                  “I’m worried about data leaks.” → SoulPoint Solution: We use
                  RAG (Retrieval-Augmented Generation). Your data stays in your
                  SharePoint; the AI only visits to find answers. We never train
                  on your proprietary IP.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-4xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900">
              Strategic Automation &amp; Governance
            </h3>
            <div className="mt-6 space-y-5 text-slate-600 leading-relaxed">
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  What we do
                </p>
                <p className="mt-1">AI Roadmap &amp; Governance Frameworks.</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  The value
                </p>
                <p className="mt-1">
                  We help you decide what to automate first. We create the
                  “Legal Front Door”—automated intake and matter management that
                  saves your partners 5+ hours of administrative overhead per
                  week.
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Objection swap
                </p>
                <p className="mt-1">
                  “This feels like a massive, expensive project.” → SoulPoint
                  Solution: We start with a Technical POC. We prove the ROI on a
                  single high-value workflow before you commit to a firm-wide
                  rollout.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
