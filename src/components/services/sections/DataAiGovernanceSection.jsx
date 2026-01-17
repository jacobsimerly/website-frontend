import innovationHeaderSvg from "../../../assets/svg/services/governance/innovation_header.svg?raw";
import ethicsSvg from "../../../assets/svg/services/governance/ethics_1.svg?raw";
import privacySvg from "../../../assets/svg/services/governance/privacy_2.svg?raw";
import defineSvg from "../../../assets/svg/services/governance/define_3.svg?raw";
import safetySvg from "../../../assets/svg/services/governance/saftey_4.svg?raw";
import ServiceSection from "../ui/ServiceSection";
import SerpentineRoadmap from "../roadmap/SerpentineRoadmap";
import { svgToCurrentColor } from "../utils/svg";

export default function DataAiGovernanceSection() {
  const styled = (raw) => svgToCurrentColor(raw);

  const roadmapPhases = [
    {
      phase: "1",
      title: "Goal & Risk Alignment",
      detail:
        "We collaborate with your leadership to define business-specific AI goals and establish your firm's risk tolerance for data privacy and automation.",
    },
    {
      phase: "2",
      title: "Governance Policy Framework",
      detail:
        "We develop and refine formal governance policies that dictate how staff interact with AI, evolving the rules as new technologies and use cases emerge.",
    },
    {
      phase: "3",
      title: "Implement Guardrails",
      detail:
        "We implement automated filters and access controls that physically prevent sensitive client data from leaving your secure firm environment.",
    },
    {
      phase: "4",
      title: "Compliance Monitoring",
      detail:
        "We establish an oversight system to track employee usage and monitor shifting AI regulations, ensuring your firm remains ahead of legal requirements.",
    },
  ];

  return (
    <ServiceSection>
      {/* Mini-Hero Section */}
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7 sm:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <p className="text-sm font-bold tracking-widest text-brand-800 uppercase">
              Governance &amp; Safety
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-900">
              Innovation Without Liability
            </h2>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              The faster you move, the better your brakes need to be. We build
              the frameworks that allow your organization to innovate with Data
              and AI while staying secure, ethical, and aligned to industry
              standards. We've worked in some of the most regulated industries
              and know how to operate within real-world constraints.
            </p>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end lg:self-center">
            <div className="w-full max-w-xs sm:max-w-sm">
              <div
                role="img"
                aria-label="Governance and safety"
                className="w-full h-auto text-amber-500 drop-shadow-md [&_svg]:h-full [&_svg]:w-full [&_svg]:block"
                dangerouslySetInnerHTML={{
                  __html: styled(innovationHeaderSvg),
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 1. Ethical AI Frameworks & Risk Mitigation */}
      <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-7 sm:p-10 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-900 text-white text-sm font-bold">
                1
              </span>
              <p className="text-sm font-bold tracking-widest text-brand-800 uppercase">
                Ethical AI Frameworks &amp; Risk Mitigation
              </p>
            </div>
            <h3 className="mt-3 text-2xl sm:text-3xl font-bold text-slate-900">
              Ensuring your AI aligns with your values and industry
              expectations.
            </h3>
            <p className="mt-4 text-slate-600 leading-relaxed">
              As AI moves into production, the risks of bias, hallucinations,
              and opaque decision-making grow. We implement the guardrails that
              keep outcomes accurate and explainable.
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-center lg:justify-end lg:self-center">
            <div className="w-full max-w-xs">
              <div
                role="img"
                aria-label="Ethical AI"
                className="w-full h-auto text-pink-500 drop-shadow-md [&_svg]:h-full [&_svg]:w-full [&_svg]:block"
                dangerouslySetInnerHTML={{ __html: styled(ethicsSvg) }}
              />
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h4 className="text-lg font-bold text-slate-900">
              Bias &amp; Fairness Audits
            </h4>
            <p className="mt-2 text-slate-600 leading-relaxed">
              Identifying and mitigating hidden biases in training data and
              model outputs.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h4 className="text-lg font-bold text-slate-900">
              Explainability (XAI) Strategy
            </h4>
            <p className="mt-2 text-slate-600 leading-relaxed">
              Designing systems where AI decisions can be traced, understood,
              and audited by humans.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h4 className="text-lg font-bold text-slate-900">
              Red-Teaming &amp; Stress Testing
            </h4>
            <p className="mt-2 text-slate-600 leading-relaxed">
              Testing models to find breaking points before they reach the
              public or your employees.
            </p>
          </div>
        </div>
      </div>

      {/* 2. Data Privacy & Compliance Readiness */}
      <div className="mt-8 rounded-2xl border-2 border-brand-800 bg-slate-50 p-7 sm:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-900 text-sm font-bold">
                2
              </span>
              <p className="text-sm font-bold tracking-widest text-brand-800 uppercase">
                Data Privacy &amp; Compliance Readiness
              </p>
            </div>
            <h3 className="mt-3 text-2xl sm:text-3xl font-bold text-slate-900">
              Privacy-by-design that stands up to scrutiny.
            </h3>
            <p className="mt-4 text-slate-600 leading-relaxed max-w-3xl">
              We engineer privacy-by-design controls, documentation, and
              operating practices to help you satisfy privacy obligations like
              GDPR, CCPA/CPRA, HIPAA, and industry mandates. The result is an
              audit-defensible posture with clear evidence, not hand-wavy
              policies.
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-center lg:justify-end lg:self-center">
            <div className="w-full max-w-xs">
              <div
                role="img"
                aria-label="Data privacy and compliance"
                className="w-full h-auto text-sky-500 drop-shadow-md [&_svg]:h-full [&_svg]:w-full [&_svg]:block"
                dangerouslySetInnerHTML={{ __html: styled(privacySvg) }}
              />
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h4 className="text-lg font-bold text-slate-900">
              Regulatory Readiness Mapping
            </h4>
            <p className="mt-2 text-slate-600 leading-relaxed">
              Mapping data flows, retention, consent, and access controls to
              applicable requirements.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h4 className="text-lg font-bold">
              Data Sovereignty &amp; Localization
            </h4>
            <p className="mt-2 text-slate-600 leading-relaxed">
              Implementing data controls that match your customers, contracts,
              and risk posture.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h4 className="text-lg font-bold text-slate-900">
              Sensitive Data Handling
            </h4>
            <p className="mt-2 text-slate-600 leading-relaxed">
              Discovery, classification, and masking/tokenization patterns for
              PII and other sensitive data across your stack.
            </p>
          </div>
        </div>
      </div>

      {/* 3. Data Sovereignty & Access Governance */}
      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-7 sm:p-10 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white text-sm font-bold">
                3
              </span>
              <p className="text-sm font-bold tracking-widest text-brand-800 uppercase">
                Data Sovereignty &amp; Access Governance
              </p>
            </div>
            <h3 className="mt-3 text-2xl sm:text-3xl font-bold text-slate-900">
              Defining exactly who sees what and why.
            </h3>
            <p className="mt-4 text-slate-600 leading-relaxed max-w-3xl">
              Security isn&apos;t just about keeping hackers out; it&apos;s
              about managing internal access. We design policies that prevent
              data leaks within your own organization.
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-center lg:justify-end lg:self-center">
            <div className="w-full max-w-xs">
              <div
                role="img"
                aria-label="Access governance"
                className="w-full h-auto text-teal-500 drop-shadow-md [&_svg]:h-full [&_svg]:w-full [&_svg]:block"
                dangerouslySetInnerHTML={{ __html: styled(defineSvg) }}
              />
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h4 className="text-lg font-bold text-slate-900">
              Role-Based Access Control (RBAC)
            </h4>
            <p className="mt-2 text-slate-600 leading-relaxed">
              Granular permissions so employees only access the data they need.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h4 className="text-lg font-bold text-slate-900">
              Data Lineage Tracking
            </h4>
            <p className="mt-2 text-slate-600 leading-relaxed">
              A paper trail showing where data came from and how it was
              transformed.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h4 className="text-lg font-bold text-slate-900">
              Master Data Management (MDM)
            </h4>
            <p className="mt-2 text-slate-600 leading-relaxed">
              Establishing a single source of truth to prevent operational
              errors from conflicting data.
            </p>
          </div>
        </div>
      </div>

      {/* 4. Corporate AI Policy & Literacy */}
      <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-7 sm:p-10">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 text-sm font-bold">
            4
          </span>
          <p className="text-sm font-bold tracking-widest text-brand-800 uppercase">
            Corporate AI Policy &amp; Literacy
          </p>
        </div>

        <h3 className="mt-3 text-2xl sm:text-3xl font-bold text-slate-900">
          Building a culture of responsible AI usage.
        </h3>
        <p className="mt-4 text-slate-600 leading-relaxed max-w-3xl">
          Safety isn&apos;t just a technical problem; it&apos;s a human one. We
          help draft the internal rules of the road so your team knows how to
          use AI safely.
        </p>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 flex justify-center lg:justify-start lg:self-center">
            <div className="w-full max-w-xs">
              <div
                role="img"
                aria-label="AI policy and literacy"
                className="w-full h-auto text-green-800 drop-shadow-md [&_svg]:h-full [&_svg]:w-full [&_svg]:block"
                dangerouslySetInnerHTML={{ __html: styled(safetySvg) }}
              />
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 gap-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h4 className="text-lg font-bold text-slate-900">
                  Acceptable Use Policies
                </h4>
                <p className="mt-2 text-slate-600 leading-relaxed">
                  Clear guidelines for using Generative AI without leaking
                  corporate secrets.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h4 className="text-lg font-bold text-slate-900">
                  AI Oversight Committees
                </h4>
                <p className="mt-2 text-slate-600 leading-relaxed">
                  Establishing internal boards to review and approve high-stakes
                  use cases.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h4 className="text-lg font-bold text-slate-900">
                  Crisis Response Planning
                </h4>
                <p className="mt-2 text-slate-600 leading-relaxed">
                  Developing kill-switch protocols and communication plans for
                  unexpected behavior.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Implementation Roadmap */}
      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-7 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-900 text-white text-sm font-bold">
            5
          </span>
          <p className="text-sm font-bold tracking-widest text-brand-800 uppercase">
            An Example
          </p>
        </div>

        <h3 className="mt-3 text-2xl sm:text-3xl font-bold text-slate-900">
          What Governance and Safety might look like for your business.
        </h3>
        <p className="mt-4 text-slate-600 leading-relaxed max-w-4xl">
          AI Security and Compliance Framework
        </p>

        <SerpentineRoadmap
          items={roadmapPhases}
          markerIdPrefix="arrowhead-governance"
          mobilePhaseRingClassName="ring-4 ring-white"
          mobileCardClassName="rounded-2xl border border-slate-200 bg-slate-50 p-6"
          desktopCardClassName="relative z-10 rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
          renderItemBody={(row) => (
            <p className="text-slate-600 leading-relaxed">{row.detail}</p>
          )}
        />
      </div>
    </ServiceSection>
  );
}
