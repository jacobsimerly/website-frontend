import scalingHeaderSvg from "../../../assets/svg/services/workflows/scaling_header.svg?raw";
import mapSvg from "../../../assets/svg/services/workflows/map_1.svg?raw";
import siloSvg from "../../../assets/svg/services/workflows/silo_2.svg?raw";
import semanticSvg from "../../../assets/svg/services/workflows/semantic_3.svg?raw";
import breakSvg from "../../../assets/svg/services/workflows/break_4.svg?raw";
import ServiceSection from "../ui/ServiceSection";
import SerpentineRoadmap from "../roadmap/SerpentineRoadmap";
import { svgToCurrentColor } from "../utils/svg";

export default function WorkflowProcessAutomationSection() {
  const styled = (raw) => svgToCurrentColor(raw);

  const roadmapPhases = [
    {
      phase: "1",
      title: "Process Logic Mapping",
      detail:
        "We document every manual step in your current invoice process, from opening the email to typing data into your accounting tool.",
    },
    {
      phase: "2",
      title: "Automation Build",
      detail:
        'We use Power Automate and multimodal AI models to automatically "read" incoming emails and extract the vendor, amount, and due date.',
    },
    {
      phase: "3",
      title: "Exception Handling",
      detail:
        "We create a safety step that pings a staff member via Teams if an invoice is blurry or the math doesn't add up.",
    },
    {
      phase: "4",
      title: "Accounting System Integration",
      detail:
        "We connect the automation to Quickbooks to automatically create the bill and file the digital copy.",
    },
  ];

  return (
    <ServiceSection>
      {/* Mini-Hero Section */}
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7 sm:p-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7">
            <p className="text-sm font-bold tracking-widest text-brand-800 uppercase">
              Workflow &amp; Process Automation
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-900">
              Scaling Without the Headcount
            </h2>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              Data is only valuable if it moves. We design and deploy
              intelligent workflows that connect your tech stack, automate
              repetitive logic, and free your team for high-value work. We
              don&apos;t just automate tasks; we re-engineer how your business
              breathes.
            </p>
          </div>

          <div className="md:col-span-5 flex justify-center md:justify-end md:self-center">
            <div className="w-56 sm:w-64">
              <div
                role="img"
                aria-label="Workflow and process automation"
                className="w-full h-auto text-pink-500 drop-shadow-md [&_svg]:h-full [&_svg]:w-full [&_svg]:block"
                dangerouslySetInnerHTML={{ __html: styled(scalingHeaderSvg) }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 1. Process Discovery & Bottleneck Audit */}
      <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-7 sm:p-10 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-8">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-900 text-white text-sm font-bold">
                1
              </span>
              <p className="text-sm font-bold tracking-widest text-brand-800 uppercase">
                Process Discovery &amp; Bottleneck Audit
              </p>
            </div>
            <h3 className="mt-3 text-2xl sm:text-3xl font-bold text-slate-900">
              You can&apos;t automate what you haven&apos;t mapped.
            </h3>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Before we touch a single automation tool, we look for the
              friction. We identify the high-frequency, low to medium-complexity
              tasks that are currently draining your team&apos;s time.
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-center lg:justify-end lg:self-center">
            <div className="w-full max-w-xs">
              <div
                role="img"
                aria-label="Process discovery"
                className="w-full h-auto text-violet-500 drop-shadow-md [&_svg]:h-full [&_svg]:w-full [&_svg]:block"
                dangerouslySetInnerHTML={{ __html: styled(mapSvg) }}
              />
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h4 className="text-lg font-bold text-slate-900">
              Value Stream Mapping
            </h4>
            <p className="mt-2 text-slate-600 leading-relaxed">
              Visualizing the journey of a task from &quot;Trigger&quot; to
              &quot;Done.&quot;
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h4 className="text-lg font-bold text-slate-900">ROI Modeling</h4>
            <p className="mt-2 text-slate-600 leading-relaxed">
              Calculating the hours and dollars saved before implementation
              begins.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h4 className="text-lg font-bold text-slate-900">
              Redundancy Elimination
            </h4>
            <p className="mt-2 text-slate-600 leading-relaxed">
              Often, we find that a some parts of a process shouldn&apos;t be
              automated; it should be moved or deleted.
            </p>
          </div>
        </div>
      </div>

      {/* 2. Intelligent Integration (The Connected Stack) */}
      <div className="mt-8 rounded-2xl border-2 border-brand-800 bg-slate-50 p-7 sm:p-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-8">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-900 text-sm font-bold">
                2
              </span>
              <p className="text-sm font-bold tracking-widest text-brand-800 uppercase">
                Intelligent Integration (The Connected Stack)
              </p>
            </div>
            <h3 className="mt-3 text-2xl sm:text-3xl font-bold text-slate-900">
              Eliminating the &quot;Data Silo&quot; tax.
            </h3>
            <p className="mt-4 text-slate-600 leading-relaxed max-w-3xl">
              We build bridges between your favorite tools (Salesforce, Slack,
              Hubspot, ERPs) so data flows seamlessly without manual entry.
            </p>
          </div>

          <div className="md:col-span-4 flex justify-center md:justify-end md:self-center">
            <div className="w-full max-w-xs">
              <div
                role="img"
                aria-label="Connected stack"
                className="w-full h-auto text-amber-500 drop-shadow-md [&_svg]:h-full [&_svg]:w-full [&_svg]:block"
                dangerouslySetInnerHTML={{ __html: styled(siloSvg) }}
              />
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h4 className="text-lg font-bold">Automation Implementation</h4>
            <p className="mt-2 text-slate-600 leading-relaxed">
              Deployment of platforms like Power Automate, Zapier, or Custom
              Pipelines.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h4 className="text-lg font-bold">Custom API Development</h4>
            <p className="mt-2 text-slate-600 leading-relaxed">
              When off-the-shelf connectors aren&apos;t enough, we build custom
              webhooks and API endpoints.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h4 className="text-lg font-bold">Synchronized Ecosystems</h4>
            <p className="mt-2 text-slate-600 leading-relaxed">
              Ensuring changes in your CRM reflect in your Project Management
              tools in real-time.
            </p>
          </div>
        </div>
      </div>

      {/* 3. AI-Enhanced Workflows (Agentic Automation) */}
      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-7 sm:p-10 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white text-sm font-bold">
                3
              </span>
              <p className="text-sm font-bold tracking-widest text-brand-800 uppercase">
                AI-Enhanced Workflows (Agentic Automation)
              </p>
            </div>
            <h3 className="mt-3 text-2xl sm:text-3xl font-bold text-slate-900">
              Moving beyond &quot;If-This-Then-That.&quot;
            </h3>
            <p className="mt-4 text-slate-600 leading-relaxed max-w-3xl">
              Traditional automation follows rigid rules. We implement
              AI-augmented workflows that can reason, categorize, and make
              decisions within the process.
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-center lg:justify-end lg:self-center">
            <div className="w-full max-w-xs">
              <div
                role="img"
                aria-label="AI-enhanced workflows"
                className="w-full h-auto text-cyan-500 drop-shadow-md [&_svg]:h-full [&_svg]:w-full [&_svg]:block"
                dangerouslySetInnerHTML={{ __html: styled(semanticSvg) }}
              />
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h4 className="text-lg font-bold text-slate-900">
              Unstructured Data Processing
            </h4>
            <p className="mt-2 text-slate-600 leading-relaxed">
              Using LLMs to read incoming emails, invoices, or legal docs and
              extract key data points automatically.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h4 className="text-lg font-bold text-slate-900">Smart Routing</h4>
            <p className="mt-2 text-slate-600 leading-relaxed">
              Agents that read a customer ticket and decide whether to solve it
              instantly or escalate it to a specific specialist.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h4 className="text-lg font-bold text-slate-900">
              Dynamic Content Generation
            </h4>
            <p className="mt-2 text-slate-600 leading-relaxed">
              Automating the creation of personalized reports, outreach, or
              internal summaries based on real-time data.
            </p>
          </div>
        </div>
      </div>

      {/* 4. Reliability, Error Handling & Governance */}
      <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-7 sm:p-10">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 text-sm font-bold">
            4
          </span>
          <p className="text-sm font-bold tracking-widest text-brand-800 uppercase">
            Reliability, Error Handling &amp; Governance
          </p>
        </div>

        <h3 className="mt-3 text-2xl sm:text-3xl font-bold text-slate-900">
          Automations that don&apos;t break in the middle of the night.
        </h3>
        <p className="mt-4 text-slate-600 leading-relaxed max-w-3xl">
          The biggest fear of automation is the silent failure. We build
          enterprise-grade flows with built-in safety nets and full visibility.
        </p>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 flex justify-center lg:justify-start lg:self-center">
            <div className="w-full max-w-xs">
              <div
                role="img"
                aria-label="Reliability and governance"
                className="w-full h-auto text-teal-500 drop-shadow-md [&_svg]:h-full [&_svg]:w-full [&_svg]:block"
                dangerouslySetInnerHTML={{ __html: styled(breakSvg) }}
              />
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 gap-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h4 className="text-lg font-bold text-slate-900">
                  Automated Error Recovery
                </h4>
                <p className="mt-2 text-slate-600 leading-relaxed">
                  Self-healing workflows that retry when an API is down or alert
                  a human when a logic gap is found.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h4 className="text-lg font-bold text-slate-900">
                  Audit Logs &amp; Transparency
                </h4>
                <p className="mt-2 text-slate-600 leading-relaxed">
                  Full visibility into every run, so you can track exactly how
                  and why a decision was made.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h4 className="text-lg font-bold text-slate-900">
                  Version Control
                </h4>
                <p className="mt-2 text-slate-600 leading-relaxed">
                  Managing your automations like code, allowing for easy
                  rollbacks and testing.
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
          What Workflow &amp; Process Automation might look like for your
          business.
        </h3>
        <p className="mt-4 text-slate-600 leading-relaxed max-w-4xl">
          Automated Invoice Processing
        </p>

        <SerpentineRoadmap
          items={roadmapPhases}
          markerIdPrefix="arrowhead-workflow"
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
