import intelligenceHeaderSvg from "../../../assets/svg/services/custom/intelligence_header.svg?raw";
import chatSvg from "../../../assets/svg/services/custom/chat_1.svg?raw";
import predictSvg from "../../../assets/svg/services/custom/predict_2.svg?raw";
import worksSvg from "../../../assets/svg/services/custom/works_3.svg?raw";
import targetSvg from "../../../assets/svg/services/custom/target_4.svg?raw";
import SerpentineRoadmap from "../roadmap/SerpentineRoadmap";
import ServiceSection from "../ui/ServiceSection";
import { svgToCurrentColor } from "../utils/svg";

export default function CustomAiToolingSection() {
  const styled = (raw) => svgToCurrentColor(raw);

  const roadmapPhases = [
    {
      phase: "1",
      title: "Archive Ingestion",
      detail:
        "We ingest your thousands of legacy PDFs and scanned contracts, using advanced OCR and multimodal AI to 'read' every clause and signature.",
    },
    {
      phase: "2",
      title: "Metadata Schema Development",
      detail:
        "We define the specific data points (like renewal dates, termination clauses, terms, and dollar amounts) that the AI will hunt for across every document.",
    },
    {
      phase: "3",
      title: "Structured Data Creation",
      detail:
        "Our AI agents process the entire archive in parallel, converting dense legal text into a clean, searchable database of structured records.",
    },
    {
      phase: "4",
      title: "Useful Contract Reporting",
      detail:
        "We push this data into a dashboard to visualize expiring revenue and hidden legal risks, turning static contracts into a forecasting tool.",
    },
  ];

  return (
    <ServiceSection>
      {/* Mini-Hero Section */}
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7 sm:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <p className="text-sm font-bold tracking-widest text-brand-800 uppercase">
              Custom AI Solutions
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-900">
              Purpose-Built Intelligence
            </h2>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              Off-the-shelf AI can only take you so far. We build proprietary AI
              applications, bespoke models, and intelligent agents designed
              specifically for your unique business logic, data, and users.
            </p>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end lg:self-center">
            <div className="w-full max-w-xs sm:max-w-sm">
              <div
                role="img"
                aria-label="Custom AI solutions"
                className="w-full h-auto text-teal-500 drop-shadow-md [&_svg]:h-full [&_svg]:w-full [&_svg]:block"
                dangerouslySetInnerHTML={{
                  __html: styled(intelligenceHeaderSvg),
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 1. Bespoke Generative AI Applications */}
      <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-7 sm:p-10 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-900 text-white text-sm font-bold">
                1
              </span>
              <p className="text-sm font-bold tracking-widest text-brand-800 uppercase">
                Gen AI Applications
              </p>
            </div>
            <h3 className="mt-3 text-2xl sm:text-3xl font-bold text-slate-900">
              Moving beyond the chat box to functional business tools.
            </h3>
            <p className="mt-4 text-slate-600 leading-relaxed">
              We design and develop custom interfaces and applications powered
              by Large Language Models (LLMs) and Retrieval Augmented Generation
              (RAG) that solve specific internal or customer-facing challenges.
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-center lg:justify-end lg:self-center">
            <div className="w-full max-w-xs">
              <div
                role="img"
                aria-label="Generative AI applications"
                className="w-full h-auto text-amber-500 drop-shadow-md [&_svg]:h-full [&_svg]:w-full [&_svg]:block"
                dangerouslySetInnerHTML={{ __html: styled(chatSvg) }}
              />
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h4 className="text-lg font-bold text-slate-900">
              Proprietary Knowledge Bases
            </h4>
            <p className="mt-2 text-slate-600 leading-relaxed">
              AI applications that read your documentation to provide instant,
              sourced answers.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h4 className="text-lg font-bold text-slate-900">
              Content &amp; Creative Engines
            </h4>
            <p className="mt-2 text-slate-600 leading-relaxed">
              Custom tools for automated legal drafting, marketing localization,
              or technical documentation.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h4 className="text-lg font-bold text-slate-900">
              Specialized LLM Fine-Tuning
            </h4>
            <p className="mt-2 text-slate-600 leading-relaxed">
              Taking open-source models and training them on your industry
              jargon and data.
            </p>
          </div>
        </div>
      </div>

      {/* 2. Predictive Analytics & Machine Learning */}
      <div className="mt-8 rounded-2xl border-2 border-brand-800 bg-slate-50 p-7 sm:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-900 text-sm font-bold">
                2
              </span>
              <p className="text-sm font-bold tracking-widest text-brand-800 uppercase">
                Predictive Analytics &amp; Machine Learning
              </p>
            </div>
            <h3 className="mt-3 text-2xl sm:text-3xl font-bold text-slate-900">
              Stop reacting to the past and start anticipating the future.
            </h3>
            <p className="mt-4 text-slate-600 leading-relaxed max-w-3xl">
              We build traditional ML models that find patterns in your data to
              help you make better high-stakes decisions.
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-center lg:justify-end lg:self-center">
            <div className="w-full max-w-xs">
              <div
                role="img"
                aria-label="Predictive analytics"
                className="w-full h-auto text-sky-500 drop-shadow-md [&_svg]:h-full [&_svg]:w-full [&_svg]:block"
                dangerouslySetInnerHTML={{ __html: styled(predictSvg) }}
              />
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h4 className="text-lg font-bold text-slate-900">
              Churn Prediction
            </h4>
            <p className="mt-2 text-slate-600 leading-relaxed">
              Identifying at-risk customers before they leave.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h4 className="text-lg font-bold text-slate-900">
              Demand Forecasting
            </h4>
            <p className="mt-2 text-slate-600 leading-relaxed">
              Optimizing inventory and staffing based on seasonal and market
              trends.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h4 className="text-lg font-bold text-slate-900">
              Anomaly Detection
            </h4>
            <p className="mt-2 text-slate-600 leading-relaxed">
              Real-time monitoring for fraud, equipment failure, or
              cybersecurity threats.
            </p>
          </div>
        </div>
      </div>

      {/* 3. Agentic Co-pilots & Specialized Assistants */}
      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-7 sm:p-10 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white text-sm font-bold">
                3
              </span>
              <p className="text-sm font-bold tracking-widest text-brand-800 uppercase">
                Agentic Co-pilots &amp; Specialized Assistants
              </p>
            </div>
            <h3 className="mt-3 text-2xl sm:text-3xl font-bold text-slate-900">
              AI that doesn&apos;t just talk; it works.
            </h3>
            <p className="mt-4 text-slate-600 leading-relaxed max-w-3xl">
              We develop co-pilots that live inside your existing software to
              assist employees in real-time, acting as a force multiplier for
              your experts.
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-center lg:justify-end lg:self-center">
            <div className="w-full max-w-xs">
              <div
                role="img"
                aria-label="Agentic copilots"
                className="w-full h-auto text-cyan-500 drop-shadow-md [&_svg]:h-full [&_svg]:w-full [&_svg]:block"
                dangerouslySetInnerHTML={{ __html: styled(worksSvg) }}
              />
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h4 className="text-lg font-bold text-slate-900">
              Sales Co-pilots
            </h4>
            <p className="mt-2 text-slate-600 leading-relaxed">
              Real-time coaching and data retrieval during live prospect calls.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h4 className="text-lg font-bold text-slate-900">
              Research Agents
            </h4>
            <p className="mt-2 text-slate-600 leading-relaxed">
              Autonomous agents that produce comprehensive market reports.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h4 className="text-lg font-bold text-slate-900">
              Model Context Protocol
            </h4>
            <p className="mt-2 text-slate-600 leading-relaxed">
              With MCP, we can give your agents the ability to take action, not
              just talk.
            </p>
          </div>
        </div>
      </div>

      {/* 4. AI Performance Tuning & Optimization */}
      <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-7 sm:p-10">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 text-sm font-bold">
            4
          </span>
          <p className="text-sm font-bold tracking-widest text-brand-800 uppercase">
            AI Performance Tuning &amp; Optimization
          </p>
        </div>

        <h3 className="mt-3 text-2xl sm:text-3xl font-bold text-slate-900">
          Ensuring your AI is accurate, ethical, and cost-effective.
        </h3>
        <p className="mt-4 text-slate-600 leading-relaxed max-w-3xl">
          Building a model is easy; making it enterprise-ready is hard. We focus
          on the last mile of AI development.
        </p>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 flex justify-center lg:justify-start lg:self-center">
            <div className="w-full max-w-xs">
              <div
                role="img"
                aria-label="AI performance and reliability"
                className="w-full h-auto text-violet-500 drop-shadow-md [&_svg]:h-full [&_svg]:w-full [&_svg]:block"
                dangerouslySetInnerHTML={{ __html: styled(targetSvg) }}
              />
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 gap-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h4 className="text-lg font-bold text-slate-900">
                  Hallucination Mitigation
                </h4>
                <p className="mt-2 text-slate-600 leading-relaxed">
                  Rigorous RAG and evaluation frameworks to ensure accuracy.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h4 className="text-lg font-bold text-slate-900">
                  Cost Optimization
                </h4>
                <p className="mt-2 text-slate-600 leading-relaxed">
                  Engineering prompts and routing so you aren&apos;t
                  overspending on tokens.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h4 className="text-lg font-bold text-slate-900">
                  Model Observability
                </h4>
                <p className="mt-2 text-slate-600 leading-relaxed">
                  Dashboards to monitor drift, bias, and performance over time.
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
          What Custom AI Tooling might look like for your business.
        </h3>
        <p className="mt-4 text-slate-600 leading-relaxed max-w-4xl">
          Structuring Unstructured Data
        </p>

        <SerpentineRoadmap
          items={roadmapPhases}
          markerIdPrefix="arrowhead-custom-ai"
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
