import teamHeaderSvg from "../../../assets/svg/services/managed/team_header.svg?raw";
import issuesSvg from "../../../assets/svg/services/managed/issues_1.svg?raw";
import hallucinationsSvg from "../../../assets/svg/services/managed/hallucinations_2.svg?raw";
import engineSvg from "../../../assets/svg/services/managed/engine_3.svg?raw";
import guideSvg from "../../../assets/svg/services/managed/guide_4.svg?raw";
import SerpentineRoadmap from "../roadmap/SerpentineRoadmap";
import ServiceSection from "../ui/ServiceSection";
import { svgToCurrentColor } from "../utils/svg";

export default function ManagedSupportSection() {
  const styled = (raw) => svgToCurrentColor(raw);

  const roadmapPhases = [
    {
      phase: "1",
      title: "Active System Monitoring",
      detail:
        "We use automated alerts to catch and fix broken data pipelines before your team even notices a problem.",
    },
    {
      phase: "2",
      title: "Monthly Prompt Tuning",
      detail:
        "We review your AI's logs every 30 days and update its instructions to keep it accurate as your business changes.",
    },
    {
      phase: "3",
      title: "Technical Helpdesk Access",
      detail:
        "You get a direct line to our engineers for fast fixes or small changes to your reports and agents.",
    },
    {
      phase: "4",
      title: "Quarterly Optimization Review",
      detail:
        "Every 90 days, we meet to review system costs and adjust your tech plan for the next quarter.",
    },
  ];

  return (
    <ServiceSection>
      {/* Mini-Hero Section */}
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7 sm:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <p className="text-sm font-bold tracking-widest text-brand-800 uppercase">
              Managed Support
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-900">
              Managed Data and AI without hiring a full team.
            </h2>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              The most advanced data systems are living organisms; they require
              constant monitoring, tuning, and evolution. Our Managed Support
              services ensure your Data, AI, and Automation ecosystems
              don&apos;t just stay online, but continue to improve as your
              business grows. We handle the complexity.
            </p>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end lg:self-center">
            <div className="w-full max-w-xs sm:max-w-sm">
              <div
                role="img"
                aria-label="Managed support"
                className="w-full h-auto text-teal-500 drop-shadow-md [&_svg]:h-full [&_svg]:w-full [&_svg]:block"
                dangerouslySetInnerHTML={{ __html: styled(teamHeaderSvg) }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 1. Proactive Data Observability & Monitoring */}
      <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-7 sm:p-10 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-900 text-white text-sm font-bold">
                1
              </span>
              <p className="text-sm font-bold tracking-widest text-brand-800 uppercase">
                Proactive Data Observability &amp; Monitoring
              </p>
            </div>
            <h3 className="mt-3 text-2xl sm:text-3xl font-bold text-slate-900">
              Catching issues before they reach your dashboards.
            </h3>
            <p className="mt-4 text-slate-600 leading-relaxed">
              We don&apos;t wait for your team to report a &quot;broken
              chart.&quot; We implement automated smoke tests and monitoring
              across your entire data stack to identify anomalies in real-time.
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-center lg:justify-end lg:self-center">
            <div className="w-full max-w-xs">
              <div
                role="img"
                aria-label="Observability and monitoring"
                className="w-full h-auto text-cyan-500 drop-shadow-md [&_svg]:h-full [&_svg]:w-full [&_svg]:block"
                dangerouslySetInnerHTML={{ __html: styled(issuesSvg) }}
              />
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h4 className="text-lg font-bold text-slate-900">
              Pipeline Health Monitoring
            </h4>
            <p className="mt-2 text-slate-600 leading-relaxed">
              Tracking the flow of data to ensure zero downtime in your ETL/ELT
              processes.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h4 className="text-lg font-bold text-slate-900">
              Data Quality Alerts
            </h4>
            <p className="mt-2 text-slate-600 leading-relaxed">
              Automated checks for stale data, schema changes, or missing values
              that could skew business decisions.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h4 className="text-lg font-bold text-slate-900">
              Infrastructure Uptime
            </h4>
            <p className="mt-2 text-slate-600 leading-relaxed">
              24/7 monitoring of your cloud environment (Snowflake, AWS, Azure)
              to ensure high availability.
            </p>
          </div>
        </div>
      </div>

      {/* 2. AI Model & Agent Maintenance */}
      <div className="mt-8 rounded-2xl border-2 border-brand-800 bg-slate-50 p-7 sm:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-900 text-sm font-bold">
                2
              </span>
              <p className="text-sm font-bold tracking-widest text-brand-800 uppercase">
                AI Model &amp; Agent Maintenance
              </p>
            </div>
            <h3 className="mt-3 text-2xl sm:text-3xl font-bold text-slate-900">
              Protecting your AI from drift and hallucinations.
            </h3>
            <p className="mt-4 text-slate-600 leading-relaxed max-w-3xl">
              AI models aren&apos;t static; performance can degrade as the world
              changes. We provide the eyes and ears for your custom AI
              solutions.
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-center lg:justify-end lg:self-center">
            <div className="w-full max-w-xs">
              <div
                role="img"
                aria-label="AI maintenance"
                className="w-full h-auto text-amber-500 drop-shadow-md [&_svg]:h-full [&_svg]:w-full [&_svg]:block"
                dangerouslySetInnerHTML={{ __html: styled(hallucinationsSvg) }}
              />
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h4 className="text-lg font-bold text-slate-900">
              Model Drift Monitoring
            </h4>
            <p className="mt-2 text-slate-600 leading-relaxed">
              Tracking accuracy over time as new data patterns emerge.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h4 className="text-lg font-bold text-slate-900">
              Hallucination Audits
            </h4>
            <p className="mt-2 text-slate-600 leading-relaxed">
              Periodic reviews of outputs for safety, accuracy, and brand
              alignment.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h4 className="text-lg font-bold text-slate-900">
              Token &amp; Cost Management
            </h4>
            <p className="mt-2 text-slate-600 leading-relaxed">
              Continuous tuning of prompts and routing to keep costs low.
            </p>
          </div>
        </div>
      </div>

      {/* 3. Continuous Optimization & Evolution */}
      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-7 sm:p-10 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white text-sm font-bold">
                3
              </span>
              <p className="text-sm font-bold tracking-widest text-brand-800 uppercase">
                Continuous Optimization &amp; Evolution
              </p>
            </div>
            <h3 className="mt-3 text-2xl sm:text-3xl font-bold text-slate-900">
              Refining the engine while it&apos;s running.
            </h3>
            <p className="mt-4 text-slate-600 leading-relaxed max-w-3xl">
              Business requirements change. Our support goes beyond fixing bugs
              to include small-scale development that keeps your systems aligned
              with current goals.
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-center lg:justify-end lg:self-center">
            <div className="w-full max-w-xs">
              <div
                role="img"
                aria-label="Continuous optimization"
                className="w-full h-auto text-pink-500 drop-shadow-md [&_svg]:h-full [&_svg]:w-full [&_svg]:block"
                dangerouslySetInnerHTML={{ __html: styled(engineSvg) }}
              />
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h4 className="text-lg font-bold text-slate-900">
              Performance Tuning
            </h4>
            <p className="mt-2 text-slate-600 leading-relaxed">
              Optimizing slow SQL queries or heavy transformations to reduce
              latency and cloud compute costs.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h4 className="text-lg font-bold text-slate-900">
              Incremental Feature Requests
            </h4>
            <p className="mt-2 text-slate-600 leading-relaxed">
              Adding new data sources, updating dashboards, or tweaking
              workflows as your needs evolve.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h4 className="text-lg font-bold text-slate-900">
              Security Patching
            </h4>
            <p className="mt-2 text-slate-600 leading-relaxed">
              Regular updates to stay ahead of vulnerabilities and maintain
              compliance (SOC2/GDPR).
            </p>
          </div>
        </div>
      </div>

      {/* 4. Strategic Advisory & vCTO Services */}
      <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-7 sm:p-10">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 text-sm font-bold">
            4
          </span>
          <p className="text-sm font-bold tracking-widest text-brand-800 uppercase">
            Strategic Advisory &amp; vCTO Services
          </p>
        </div>

        <h3 className="mt-3 text-2xl sm:text-3xl font-bold text-slate-900">
          Expert guidance at a fraction of the cost.
        </h3>
        <p className="mt-4 text-slate-600 leading-relaxed max-w-3xl">
          Managed support isn&apos;t just about maintenance; it&apos;s strategic
          oversight. We act as your fractional data leadership.
        </p>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 flex justify-center lg:justify-start lg:self-center">
            <div className="w-full max-w-xs">
              <div
                role="img"
                aria-label="Strategic advisory"
                className="w-full h-auto text-green-800 drop-shadow-md [&_svg]:h-full [&_svg]:w-full [&_svg]:block"
                dangerouslySetInnerHTML={{ __html: styled(guideSvg) }}
              />
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 gap-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h4 className="text-lg font-bold text-slate-900">
                  Quarterly Strategic Reviews
                </h4>
                <p className="mt-2 text-slate-600 leading-relaxed">
                  Working with leadership to show ROI and plan the next phase of
                  your roadmap.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h4 className="text-lg font-bold text-slate-900">
                  Architecture Advisory
                </h4>
                <p className="mt-2 text-slate-600 leading-relaxed">
                  Expert second opinions on new tools and technologies your team
                  is considering.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h4 className="text-lg font-bold text-slate-900">
                  Cloud Spend Governance
                </h4>
                <p className="mt-2 text-slate-600 leading-relaxed">
                  Monthly reviews to ensure you aren&apos;t paying for ghost
                  resources or idle compute.
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
          What Managed Support might look like for your business.
        </h3>
        <p className="mt-4 text-slate-600 leading-relaxed max-w-4xl">
          AI Tool Management
        </p>

        <SerpentineRoadmap
          items={roadmapPhases}
          markerIdPrefix="arrowhead-managed-support"
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
