import filterHeaderSvg from "../../../assets/svg/services/software/filter_header.svg?raw";
import inventorySvg from "../../../assets/svg/services/software/inventory_1.svg?raw";
import realSvg from "../../../assets/svg/services/software/real_2.svg?raw";
import savingsSvg from "../../../assets/svg/services/software/savings_3.svg?raw";
import runningSvg from "../../../assets/svg/services/software/running_4.svg?raw";
import SerpentineRoadmap from "../roadmap/SerpentineRoadmap";
import ServiceSection from "../ui/ServiceSection";
import { svgToCurrentColor } from "../utils/svg";

export default function SoftwareProcurementManagementSection() {
  const styled = (raw) => svgToCurrentColor(raw);

  const roadmapPhases = [
    {
      phase: "1",
      title: "Drafting Workflow Discovery",
      detail:
        "We audit your current contract lifecycle to identify exactly how many attorney hours are wasted on manual redlining and repetitive drafting.",
    },
    {
      phase: "2",
      title: "Vendor Vetting",
      detail:
        "We benchmark high-tier tools like Spellbook and Everlaw against your specific legal documents to evaluate accuracy, speed, and feature fit.",
    },
    {
      phase: "3",
      title: "Option Evaluation",
      detail:
        "We perform a full cost-benefit analysis of all available routes, including off-the-shelf software and custom-engineered agents, to recommend the highest ROI path.",
    },
    {
      phase: "4",
      title: "System Implementation",
      detail:
        "We lead the rollout of your chosen platform (e.g., Spellbook), configuring custom firm libraries and training staff to ensure seamless, day-one adoption.",
    },
  ];

  return (
    <ServiceSection>
      {/* Mini-Hero Section */}
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7 sm:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <p className="text-sm font-bold tracking-widest text-brand-800 uppercase">
              Software Procurement and Management
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-900">
              Filter the Hype. Find the Signal.
            </h2>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              The market is currently flooded with "Data & AI" tools; half are
              amazing, half are absolute junk. We'll act as filter, using
              cross-customer performance to find the products that actually
              work, all while saving you the cost of a full-time application
              admin.
            </p>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end lg:self-center">
            <div className="w-full max-w-xs sm:max-w-sm">
              <div
                role="img"
                aria-label="Software procurement and management"
                className="w-full h-auto text-cyan-500 drop-shadow-md [&_svg]:h-full [&_svg]:w-full [&_svg]:block"
                dangerouslySetInnerHTML={{ __html: styled(filterHeaderSvg) }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 1. Current Stack Baseline */}
      <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-7 sm:p-10 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-900 text-white text-sm font-bold">
                1
              </span>
              <p className="text-sm font-bold tracking-widest text-brand-800 uppercase">
                The Stack Baseline
              </p>
            </div>
            <h3 className="mt-3 text-2xl sm:text-3xl font-bold text-slate-900">
              Get clarity on what you have.
            </h3>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Before we recommend anything new, we baseline your current tools
              against real business needs. For SMBs, the goal isn’t just to buy
              software; it’s to make sure you’re buying what you actually need,
              that it’s secure and supportable, and that the product delivers
              what the vendor claims.
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-center lg:justify-end lg:self-center">
            <div className="w-full max-w-xs">
              <div
                role="img"
                aria-label="Discovery and audit"
                className="w-full h-auto text-violet-500 drop-shadow-md [&_svg]:h-full [&_svg]:w-full [&_svg]:block"
                dangerouslySetInnerHTML={{ __html: styled(inventorySvg) }}
              />
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h4 className="text-lg font-bold text-slate-900">
              Current Tool Inventory
            </h4>
            <p className="mt-2 text-slate-600 leading-relaxed">
              Getting a clean map of what you’re paying for, who owns it, what
              it integrates with, and where it fits in the workflow.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h4 className="text-lg font-bold text-slate-900">
              Needs & Gap Mapping
            </h4>
            <p className="mt-2 text-slate-600 leading-relaxed">
              Aligning tools to the jobs your team is trying to do, and
              identifying capability gaps (or overlap) before you buy anything.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h4 className="text-lg font-bold text-slate-900">
              Governance & Renewals
            </h4>
            <p className="mt-2 text-slate-600 leading-relaxed">
              Tightening purchasing, approvals, and renewal visibility so you
              don’t get surprised by hidden spend or risky one-off tools.
            </p>
          </div>
        </div>
      </div>

      {/* 2. AI & Data Vetting */}
      <div className="mt-8 rounded-2xl border-2 border-brand-800 bg-slate-50 p-7 sm:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-900 text-sm font-bold">
                2
              </span>
              <p className="text-sm font-bold tracking-widest text-brand-800 uppercase">
                Vaporware Detection
              </p>
            </div>
            <h3 className="mt-3 text-2xl sm:text-3xl font-bold text-slate-900">
              Is the AI even real?
            </h3>
            <p className="mt-4 text-slate-600 leading-relaxed max-w-3xl">
              We look past the flashy demos. We use cross-industry data to see
              which AI and Data products actually deliver ROI vs. which ones are
              just thin wrappers over ChatGPT. We find the tools that actually
              scale.
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-center lg:justify-end lg:self-center">
            <div className="w-full max-w-xs">
              <div
                role="img"
                aria-label="Vendor selection"
                className="w-full h-auto text-amber-500 drop-shadow-md [&_svg]:h-full [&_svg]:w-full [&_svg]:block"
                dangerouslySetInnerHTML={{ __html: styled(realSvg) }}
              />
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h4 className="text-lg font-bold text-slate-900">
              Cross-Customer Insight
            </h4>
            <p className="mt-2 text-slate-600 leading-relaxed">
              We see what’s working (and crashing) for other teams, so you don't
              have to be the guinea pig.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h4 className="text-lg font-bold text-slate-900">
              True Capability Vetting
            </h4>
            <p className="mt-2 text-slate-600 leading-relaxed">
              Testing API limits, data privacy, and model performance before you
              sign the check.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h4 className="text-lg font-bold text-slate-900">
              Future-Proofing
            </h4>
            <p className="mt-2 text-slate-600 leading-relaxed">
              Avoiding lock-in with vendors that won't exist in 18 months.
            </p>
          </div>
        </div>
      </div>

      {/* 3. Negotiation & Hard Leveraging */}
      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-7 sm:p-10 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white text-sm font-bold">
                3
              </span>
              <p className="text-sm font-bold tracking-widest text-brand-800 uppercase">
                Expert Negotiation
              </p>
            </div>
            <h3 className="mt-3 text-2xl sm:text-3xl font-bold text-slate-900">
              Stop paying the "Hype Tax."
            </h3>
            <p className="mt-4 text-slate-600 leading-relaxed max-w-3xl">
              Vendors are charging a premium for anything with "AI" in the name.
              We use real-market benchmarks to bring those prices down to
              reality and lock in enterprise-grade protections.
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-center lg:justify-end lg:self-center">
            <div className="w-full max-w-xs">
              <div
                role="img"
                aria-label="Negotiation and contract management"
                className="w-full h-auto text-teal-500 drop-shadow-md [&_svg]:h-full [&_svg]:w-full [&_svg]:block"
                dangerouslySetInnerHTML={{ __html: styled(savingsSvg) }}
              />
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h4 className="text-lg font-bold text-slate-900">
              Benchmark Leveraging
            </h4>
            <p className="mt-2 text-slate-600 leading-relaxed">
              We know what the vendor’s bottom line is. We make sure you get it.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h4 className="text-lg font-bold text-slate-900">SLA Hardening</h4>
            <p className="mt-2 text-slate-600 leading-relaxed">
              Ensuring AI uptime and support responses are legally guaranteed,
              not just promised.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h4 className="text-lg font-bold text-slate-900">
              No Missed Renewals
            </h4>
            <p className="mt-2 text-slate-600 leading-relaxed">
              We manage the lifecycle so you're never auto-renewed into a tool
              you hate.
            </p>
          </div>
        </div>
      </div>

      {/* 4. Full-Utility & Admin-as-a-Service */}
      <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-7 sm:p-10">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 text-sm font-bold">
            4
          </span>
          <p className="text-sm font-bold tracking-widest text-brand-800 uppercase">
            Admin-as-a-Service
          </p>
        </div>

        <h3 className="mt-3 text-2xl sm:text-3xl font-bold text-slate-900">
          We keep the winners running.
        </h3>
        <p className="mt-4 text-slate-600 leading-relaxed max-w-3xl">
          Finding the tool is only half the battle. We handle the configuration,
          user seat management, and ongoing performance tuning so your team can
          actually use the software, not just manage it.
        </p>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 flex justify-center lg:justify-start lg:self-center">
            <div className="w-full max-w-xs">
              <div
                role="img"
                aria-label="Spend governance"
                className="w-full h-auto text-orange-500 drop-shadow-md [&_svg]:h-full [&_svg]:w-full [&_svg]:block"
                dangerouslySetInnerHTML={{ __html: styled(runningSvg) }}
              />
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 gap-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h4 className="text-lg font-bold text-slate-900">
                  Continuous Configuration
                </h4>
                <p className="mt-2 text-slate-600 leading-relaxed">
                  Keeping your Data/AI stack integrated and updated as the tech
                  evolves weekly.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h4 className="text-lg font-bold text-slate-900">
                  Headcount Offset
                </h4>
                <p className="mt-2 text-slate-600 leading-relaxed">
                  We do the work of a specialized app admin for a fraction of
                  the salary + benefits.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h4 className="text-lg font-bold text-slate-900">
                  Usage-Based Optimization
                </h4>
                <p className="mt-2 text-slate-600 leading-relaxed">
                  Continuously shifting seats and tiers based on who is actually
                  productive.
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
          What Software Procurement and Management might look like for your
          business.
        </h3>
        <p className="mt-4 text-slate-600 leading-relaxed max-w-4xl">
          Legal Team Redlining
        </p>

        <SerpentineRoadmap
          items={roadmapPhases}
          markerIdPrefix="arrowhead-procurement"
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
