import blueprintHeaderSvg from "../../../assets/svg/services/data_strategy/blueprint_header.svg?raw";
import businessGoalsSvg from "../../../assets/svg/services/data_strategy/businessgoals_1.svg?raw";
import frameworkSvg from "../../../assets/svg/services/data_strategy/framework_2.svg?raw";
import roadSvg from "../../../assets/svg/services/data_strategy/road_3.svg?raw";
import dataInformedSvg from "../../../assets/svg/services/data_strategy/datainformed_4.svg?raw";
import ServiceSection from "../ui/ServiceSection";
import SerpentineRoadmap from "../roadmap/SerpentineRoadmap";
import { svgToCurrentColor } from "../utils/svg";

export default function DataStrategySection() {
  const styled = (raw) => svgToCurrentColor(raw);

  const roadmapPhases = [
    {
      phase: "1",
      title: "Data and Operations Review",
      detail:
        "We map every app and database you use to find where your data is hidden and how it flows.",
    },
    {
      phase: "2",
      title: "Opportunities Evalution",
      detail:
        "We rank potential Data, AI, and Automation projects by how much money they save you versus how hard they are to buy, build, or implement.",
    },
    {
      phase: "3",
      title: "Technical Blueprint",
      detail:
        "We draw a technical diagram of the exact servers and software needed to support your future AI goals.",
    },
    {
      phase: "4",
      title: "Execution Plan",
      detail:
        "We hand you a calendar showing exactly when each project starts and what it will cost to get you where you need to go.",
    },
  ];

  return (
    <ServiceSection>
      {/* Mini-Hero Section */}
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7 sm:p-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7">
            <p className="text-sm font-bold tracking-widest text-brand-800 uppercase">
              Data Strategy
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-900">
              A Blueprint for Data with Direction
            </h2>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              Most companies know data matters, but they lack the "how" and the
              "why." We help you move beyond "collecting everything" to
              architecting a strategy that treats data as a competitive
              advantage. We define the destination first, so the foundation
              actually supports where you're going.
            </p>
          </div>

          <div className="md:col-span-5 flex justify-center md:justify-end">
            <div className="w-56 sm:w-64">
              <div
                role="img"
                aria-label="Data strategy blueprint"
                className="w-full h-auto text-sky-500 drop-shadow-md [&_svg]:h-full [&_svg]:w-full [&_svg]:block"
                dangerouslySetInnerHTML={{ __html: styled(blueprintHeaderSvg) }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 1. Strategic Alignment & Audit */}
      <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-7 sm:p-10 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-8">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-900 text-white text-sm font-bold">
                1
              </span>
              <p className="text-sm font-bold tracking-widest text-brand-800 uppercase">
                Strategic Alignment &amp; Audit
              </p>
            </div>
            <h3 className="mt-3 text-2xl sm:text-3xl font-bold text-slate-900">
              Bridging the gap between business goals and technical capability.
            </h3>
            <p className="mt-4 text-slate-600 leading-relaxed">
              We begin by ensuring every data initiative is directly tied to a
              business outcome. We don't look at your servers; we look at your
              spreadsheets, your KPIs, and your vision. How does the work we're
              doing now affect your business down the line, how does it allign
              with your goals?
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-center lg:justify-end lg:self-center">
            <div className="w-full max-w-xs">
              <div
                role="img"
                aria-label="Audit and alignment"
                className="w-full h-auto text-amber-500 drop-shadow-md [&_svg]:h-full [&_svg]:w-full [&_svg]:block"
                dangerouslySetInnerHTML={{ __html: styled(businessGoalsSvg) }}
              />
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h4 className="text-lg font-bold text-slate-900">
              Maturity Assessment
            </h4>
            <p className="mt-2 text-slate-600 leading-relaxed">
              A deep dive into your current data literacy, quality, and usage.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h4 className="text-lg font-bold text-slate-900">
              “North Star” Definition
            </h4>
            <p className="mt-2 text-slate-600 leading-relaxed">
              Identifying the top 3–5 business objectives that data must solve
              for first.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h4 className="text-lg font-bold text-slate-900">Gap Analysis</h4>
            <p className="mt-2 text-slate-600 leading-relaxed">
              Pinpointing exactly where your current strategy fails to support
              your long-term goals.
            </p>
          </div>
        </div>
      </div>

      {/* 2. The Architectural Blueprint (The "Technical" Strategy) */}
      <div className="mt-8 rounded-2xl border-2 border-brand-800 bg-slate-50 p-7 sm:p-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-8">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-900 text-sm font-bold">
                2
              </span>
              <p className="text-sm font-bold tracking-widest text-brand-800 uppercase">
                The Architectural Blueprint (The "Technical" Strategy)
              </p>
            </div>

            <h3 className="mt-3 text-2xl sm:text-3xl font-bold text-slate-900">
              Designing the framework before the first line of code is written.
            </h3>
            <p className="mt-4 text-slate-600 leading-relaxed max-w-3xl">
              This is where we translate business needs into a technical vision.
              We select the right "Modern Data Stack" and design an architecture
              that is scalable, cost-effective, and future-proof.
            </p>
          </div>

          <div className="md:col-span-4 flex justify-center md:justify-end md:self-center">
            <div className="w-full max-w-xs">
              <div
                role="img"
                aria-label="Architectural blueprint"
                className="w-full h-auto text-violet-500 drop-shadow-md [&_svg]:h-full [&_svg]:w-full [&_svg]:block"
                dangerouslySetInnerHTML={{ __html: styled(frameworkSvg) }}
              />
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h4 className="text-lg font-bold text-slate-900">
              Stack Evaluation &amp; Selection
            </h4>
            <p className="mt-2 text-slate-600 leading-relaxed">
              Neutral, expert advice on choosing the right tools (e.g.,
              Databricks vs SQL Servers, Azure vs On-prem).
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h4 className="text-lg font-bold text-slate-900">
              High-Level Design
            </h4>
            <p className="mt-2 text-slate-600 leading-relaxed">
              Mapping out how data flows from source to usage. Identifying what
              data is a priority.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h4 className="text-lg font-bold text-slate-900">
              Build vs. Buy Analysis
            </h4>
            <p className="mt-2 text-slate-600 leading-relaxed">
              Helping you decide which components of your stack should be
              custom-built and which should be off-the-shelf.
            </p>
          </div>
        </div>
      </div>

      {/* 3. Governance, Trust & Ethics */}
      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-7 sm:p-10">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 text-sm font-bold">
            3
          </span>
          <p className="text-sm font-bold tracking-widest text-brand-800 uppercase">
            Governance, Trust &amp; Ethics
          </p>
        </div>

        <h3 className="mt-3 text-2xl sm:text-3xl font-bold text-slate-900">
          Defining the “Rules of the Road” for your data ecosystem.
        </h3>
        <p className="mt-4 text-slate-600 leading-relaxed max-w-3xl">
          Foundations build the security; Strategy defines the policy. We create
          the framework that ensures your data remains clean, compliant, and
          trustworthy.
        </p>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 flex justify-center lg:justify-start lg:self-center">
            <div className="w-full max-w-xs">
              <div
                role="img"
                aria-label="Governance and trust"
                className="w-full h-auto text-teal-500 drop-shadow-md [&_svg]:h-full [&_svg]:w-full [&_svg]:block"
                dangerouslySetInnerHTML={{ __html: styled(roadSvg) }}
              />
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 gap-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h4 className="text-lg font-bold text-slate-900">
                  Ownership Models
                </h4>
                <p className="mt-2 text-slate-600 leading-relaxed">
                  Defining who owns, manages, and protects specific data
                  domains.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h4 className="text-lg font-bold text-slate-900">
                  Ethical AI Frameworks
                </h4>
                <p className="mt-2 text-slate-600 leading-relaxed">
                  Establishing guidelines for bias mitigation and transparency
                  in automated decision-making.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h4 className="text-lg font-bold text-slate-900">
                  Compliance Strategy
                </h4>
                <p className="mt-2 text-slate-600 leading-relaxed">
                  Navigating the roadmap for GDPR, CCPA, and industry-specific
                  regulatory requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Data Culture & Literacy */}
      <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-7 sm:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white text-sm font-bold">
                4
              </span>
              <p className="text-sm font-bold tracking-widest text-brand-800 uppercase">
                Data Culture &amp; Literacy
              </p>
            </div>

            <h3 className="mt-5 text-2xl sm:text-3xl font-bold text-slate-900">
              Transforming your team from “Intuition-Led” to “Data-Informed.”
            </h3>
            <p className="mt-4 text-slate-600 leading-relaxed">
              The best data architecture in the world fails if the team doesn't
              know how to use it. We focus on the human element of the digital
              transition.
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-center lg:justify-end lg:self-center">
            <div className="w-full max-w-xs">
              <div
                role="img"
                aria-label="Data culture and adoption"
                className="w-full h-auto text-pink-500 drop-shadow-md [&_svg]:h-full [&_svg]:w-full [&_svg]:block"
                dangerouslySetInnerHTML={{ __html: styled(dataInformedSvg) }}
              />
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h4 className="text-lg font-bold text-slate-900">
              Change Management
            </h4>
            <p className="mt-2 text-slate-600 leading-relaxed">
              Designing the internal communication plan to drive adoption of new
              data tools.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h4 className="text-lg font-bold text-slate-900">
              Literacy Roadmaps
            </h4>
            <p className="mt-2 text-slate-600 leading-relaxed">
              Tailored training plans to help non-technical stakeholders
              interpret and act on data.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h4 className="text-lg font-bold text-slate-900">
              Organizational Design
            </h4>
            <p className="mt-2 text-slate-600 leading-relaxed">
              Advising on the structure of your data teams (Centralized vs.
              Federated vs. Mesh).
            </p>
          </div>
        </div>
      </div>

      {/* 5. The Prioritized Roadmap */}
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
          What Data Strategy might look like for your business.
        </h3>
        <p className="mt-4 text-slate-600 leading-relaxed max-w-4xl">
          Data and AI Readiness Review and Roadmap
        </p>

        <SerpentineRoadmap
          items={roadmapPhases}
          markerIdPrefix="arrowhead-data-strategy"
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
