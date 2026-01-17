import buildingHeaderSvg from "../../../assets/svg/services/foundations/building_header.svg?raw";
import securitySvg from "../../../assets/svg/services/foundations/security_4.svg?raw";
import silosSvg from "../../../assets/svg/services/foundations/silos_1.svg?raw";
import foundationsSvg from "../../../assets/svg/services/foundations/foundations_3.svg?raw";
import unifiedSvg from "../../../assets/svg/services/foundations/unified_2.svg?raw";
import ServiceSection from "../ui/ServiceSection";
import SerpentineRoadmap from "../roadmap/SerpentineRoadmap";
import { svgToCurrentColor } from "../utils/svg";

export default function DataAiFoundationsSection() {
  const styled = (raw) => svgToCurrentColor(raw);

  const roadmapPhases = [
    {
      phase: "1",
      title: "Environment Provisioning",
      detail:
        "We set up your secure cloud environment in Microsoft Fabric professional-grade security and logins.",
    },
    {
      phase: "2",
      title: "Automated Data Ingestion",
      detail:
        'We build automated "pipes" that pull raw data from your CRM and ERP into a central storage area.',
    },
    {
      phase: "3",
      title: "Data Transformation",
      detail:
        "We write code to clean your raw data, fixing errors and deduplicating records so the data is trustworthy.",
    },
    {
      phase: "4",
      title: "Semantic Layer Modeling",
      detail:
        "We organize the clean data into a useable formats so AI and BI tools can easily understand and query it.",
    },
  ];

  return (
    <ServiceSection>
      {/* Mini-Hero Section */}
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7 sm:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <p className="text-sm font-bold tracking-widest text-brand-800 uppercase">
              Data &amp; AI Foundations
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-900">
              Engineering the Engine Room
            </h2>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              A strategy is only as good as the infrastructure supporting it. We
              build the robust, scalable, and secure data environments that
              power your teams' analytics and AI. From raw ingestion to
              production-ready models, we turn blueprints into reality.
            </p>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end lg:self-center">
            <div className="w-full max-w-xs sm:max-w-sm">
              <div
                role="img"
                aria-label="Data and AI foundations"
                className="w-full h-auto text-violet-500 drop-shadow-md [&_svg]:h-full [&_svg]:w-full [&_svg]:block"
                dangerouslySetInnerHTML={{ __html: styled(buildingHeaderSvg) }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 1. Modern Data Stack Implementation */}
      <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-7 sm:p-10 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-900 text-white text-sm font-bold">
                1
              </span>
              <p className="text-sm font-bold tracking-widest text-brand-800 uppercase">
                Modern Data Stack Implementation
              </p>
            </div>
            <h3 className="mt-3 text-2xl sm:text-3xl font-bold text-slate-900">
              Turning legacy silos into a unified data ecosystem.
            </h3>
            <p className="mt-4 text-slate-600 leading-relaxed">
              We don't just "install" software; we engineer a cohesive stack
              tailored to your volume and velocity. We specialize in deploying
              the industry's leading cloud-native technologies.
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-center lg:justify-end lg:self-center">
            <div className="w-full max-w-xs">
              <div
                role="img"
                aria-label="Modern data stack"
                className="w-full h-auto text-sky-500 drop-shadow-md [&_svg]:h-full [&_svg]:w-full [&_svg]:block"
                dangerouslySetInnerHTML={{ __html: styled(silosSvg) }}
              />
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h4 className="text-lg font-bold text-slate-900">
              Warehouse &amp; Lakehouse Deployment
            </h4>
            <p className="mt-2 text-slate-600 leading-relaxed">
              Expert configuration of platforms like Snowflake, Databricks,
              BigQuery, and Fabric.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h4 className="text-lg font-bold text-slate-900">
              Cloud Infrastructure as Code
            </h4>
            <p className="mt-2 text-slate-600 leading-relaxed">
              Setting up secure, scalable environments on AWS, Azure, or GCP
              using CI/CD and IaaC.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h4 className="text-lg font-bold text-slate-900">
              Storage Optimization
            </h4>
            <p className="mt-2 text-slate-600 leading-relaxed">
              Organizing data into Bronze/Silver/Gold layers to balance cost and
              performance.
            </p>
          </div>
        </div>
      </div>

      {/* 2. High-Performance Data Engineering */}
      <div className="mt-8 rounded-2xl border-2 border-brand-800 bg-slate-50 p-7 sm:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-900 text-sm font-bold">
                2
              </span>
              <p className="text-sm font-bold tracking-widest text-brand-800 uppercase">
                High-Performance Data Engineering
              </p>
            </div>
            <h3 className="mt-3 text-2xl sm:text-3xl font-bold text-slate-900">
              The pipelines that move your business forward.
            </h3>
            <p className="mt-4 text-slate-600 leading-relaxed max-w-3xl">
              We build the "plumbing" that ensures data is delivered where it’s
              needed, when it’s needed, without errors.
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-center lg:justify-end lg:self-center">
            <div className="w-full max-w-xs">
              <div
                role="img"
                aria-label="High-performance pipelines"
                className="w-full h-auto text-teal-500 drop-shadow-md [&_svg]:h-full [&_svg]:w-full [&_svg]:block"
                dangerouslySetInnerHTML={{ __html: styled(unifiedSvg) }}
              />
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h4 className="text-lg font-bold text-slate-900">
              ETL/ELT Pipeline Development
            </h4>
            <p className="mt-2 text-slate-600 leading-relaxed">
              Building resilient pipelines using tools like Python, Spark, and
              Airflow.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h4 className="text-lg font-bold text-slate-900">
              Efficient Data Modeling
            </h4>
            <p className="mt-2 text-slate-600 leading-relaxed">
              We architect clean, structured data models using Kimball, Semantic
              and OBT methodologies.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h4 className="text-lg font-bold text-slate-900">
              Data Integration
            </h4>
            <p className="mt-2 text-slate-600 leading-relaxed">
              Connecting disparate APIs, CRM data, ERPs, and legacy databases
              into a single source of truth.
            </p>
          </div>
        </div>
      </div>

      {/* 3. AI & ML Ops (Machine Learning Readiness) */}
      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-7 sm:p-10 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white text-sm font-bold">
                3
              </span>
              <p className="text-sm font-bold tracking-widest text-brand-800 uppercase">
                AI Readiness & Operations
              </p>
            </div>
            <h3 className="mt-3 text-2xl sm:text-3xl font-bold text-slate-900">
              Foundations designed for Intelligence.
            </h3>
            <p className="mt-4 text-slate-600 leading-relaxed max-w-3xl">
              A foundation isn't just for dashboards; it's for models. We
              prepare your environment to host, train, and scale Artificial
              Intelligence.
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-center lg:justify-end lg:self-center">
            <div className="w-full max-w-xs">
              <div
                role="img"
                aria-label="Machine learning readiness"
                className="w-full h-auto text-orange-500 drop-shadow-md [&_svg]:h-full [&_svg]:w-full [&_svg]:block"
                dangerouslySetInnerHTML={{ __html: styled(foundationsSvg) }}
              />
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h4 className="text-lg font-bold text-slate-900">
              Data & Metadata Tagging
            </h4>
            <p className="mt-2 text-slate-600 leading-relaxed">
              Tag your datasets so they are usable by AI and LLMs, maintaining
              strict compliance and governance.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h4 className="text-lg font-bold text-slate-900">
              Vector Database Implementation
            </h4>
            <p className="mt-2 text-slate-600 leading-relaxed">
              Setting up the infrastructure needed for LLMs and Generative AI
              (e.g., Pinecone, Weaviate).
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h4 className="text-lg font-bold text-slate-900">
              AI Data Governance
            </h4>
            <p className="mt-2 text-slate-600 leading-relaxed">
              Establishing the standards and controls ensuring your data remains
              compliant while staying accessible to your models.
            </p>
          </div>
        </div>
      </div>

      {/* 4. Data Security & Observability */}
      <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-7 sm:p-10">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 text-sm font-bold">
            4
          </span>
          <p className="text-sm font-bold tracking-widest text-brand-800 uppercase">
            Data Security &amp; Observability
          </p>
        </div>

        <h3 className="mt-3 text-2xl sm:text-3xl font-bold text-slate-900">
          Protecting your most valuable asset from day one.
        </h3>
        <p className="mt-4 text-slate-600 leading-relaxed max-w-3xl">
          We bake security and monitoring into the foundation so you never have
          to worry about data "going dark" or falling into the wrong hands.
        </p>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 flex justify-center lg:justify-start lg:self-center">
            <div className="w-full max-w-xs">
              <div
                role="img"
                aria-label="Security and observability"
                className="w-full h-auto text-green-800 drop-shadow-md [&_svg]:h-full [&_svg]:w-full [&_svg]:block"
                dangerouslySetInnerHTML={{ __html: styled(securitySvg) }}
              />
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 gap-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h4 className="text-lg font-bold text-slate-900">
                  Identity &amp; Access Management (IAM)
                </h4>
                <p className="mt-2 text-slate-600 leading-relaxed">
                  Granular permission controls to ensure the right people see
                  the right data.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h4 className="text-lg font-bold text-slate-900">
                  Data Observability
                </h4>
                <p className="mt-2 text-slate-600 leading-relaxed">
                  Implementing automated alerts (e.g., Monte Carlo or Great
                  Expectations) that catch "broken" data before it hits your
                  dashboards.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h4 className="text-lg font-bold text-slate-900">
                  Encryption &amp; Masking
                </h4>
                <p className="mt-2 text-slate-600 leading-relaxed">
                  Ensuring PII (Personally Identifiable Information) is handled
                  with enterprise-grade security.
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
          What Data and AI Foundations might look like for your business.
        </h3>
        <p className="mt-4 text-slate-600 leading-relaxed max-w-4xl">
          Cloud Data Lakehouse Implementation
        </p>

        <SerpentineRoadmap
          items={roadmapPhases}
          markerIdPrefix="arrowhead-foundations"
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
