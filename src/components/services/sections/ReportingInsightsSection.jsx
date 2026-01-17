import dataHeaderSvg from "../../../assets/svg/services/reporting/data_header.svg?raw";
import importantSvg from "../../../assets/svg/services/reporting/important_1.svg?raw";
import businessSvg from "../../../assets/svg/services/reporting/business_2.svg?raw";
import inboxSvg from "../../../assets/svg/services/reporting/inbox_3.svg?raw";
import productSvg from "../../../assets/svg/services/reporting/product_4.svg?raw";
import SerpentineRoadmap from "../roadmap/SerpentineRoadmap";
import ServiceSection from "../ui/ServiceSection";
import { svgToCurrentColor } from "../utils/svg";

export default function ReportingInsightsSection() {
  const styled = (raw) => svgToCurrentColor(raw);

  const roadmapPhases = [
    {
      phase: "1",
      title: "Establish Utilization Metric",
      detail:
        "We standardize the math for billable vs. non-billable time across all practice groups to ensure your 'Utilization Rate' is always calculated the same.",
    },
    {
      phase: "2",
      title: "Semantic Modeling",
      detail:
        "We engineer the backend data logic to calculate utilization and forecasted revenue based on your live time-tracking data.",
    },
    {
      phase: "3",
      title: "Reporting & Insight",
      detail:
        "We design Power BI dashboards and reports that visualize attorney performance, matter profitability, and historical trends.",
    },
    {
      phase: "4",
      title: "Secure Governance & Automated Distribution",
      detail:
        "We configure Role-Based Access Control so partners and managers see exactly (and only) the data relevant to their specific teams.",
    },
  ];

  return (
    <ServiceSection>
      {/* Mini-Hero Section */}
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7 sm:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <p className="text-sm font-bold tracking-widest text-brand-800 uppercase">
              Reporting &amp; Insights
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-900">
              From Data Points to Decisions
            </h2>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              Data is a cost until it becomes an insight. We transform raw
              information into intuitive, visual narratives that help you make
              decisions. We don&apos;t just build dashboards; we create the
              &quot;Single Source of Truth&quot; that aligns your with goals and
              questions.
            </p>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end lg:self-center">
            <div className="w-full max-w-xs sm:max-w-sm">
              <div
                role="img"
                aria-label="Reporting and insights"
                className="w-full h-auto text-amber-500 drop-shadow-md [&_svg]:h-full [&_svg]:w-full [&_svg]:block"
                dangerouslySetInnerHTML={{ __html: styled(dataHeaderSvg) }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 1. Strategic KPI & Metric Design */}
      <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-7 sm:p-10 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-900 text-white text-sm font-bold">
                1
              </span>
              <p className="text-sm font-bold tracking-widest text-brand-800 uppercase">
                Strategic KPI &amp; Metric Design
              </p>
            </div>
            <h3 className="mt-3 text-2xl sm:text-3xl font-bold text-slate-900">
              Measuring what matters, ignoring what doesn&apos;t.
            </h3>
            <p className="mt-4 text-slate-600 leading-relaxed">
              The biggest mistake in reporting is tracking too much. We work
              with your leaders to define the North Star metrics that actually
              correlate with business success.
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-center lg:justify-end lg:self-center">
            <div className="w-full max-w-xs">
              <div
                role="img"
                aria-label="KPI design"
                className="w-full h-auto text-teal-500 drop-shadow-md [&_svg]:h-full [&_svg]:w-full [&_svg]:block"
                dangerouslySetInnerHTML={{ __html: styled(importantSvg) }}
              />
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h4 className="text-lg font-bold text-slate-900">
              KPI Discovery Workshops
            </h4>
            <p className="mt-2 text-slate-600 leading-relaxed">
              Moving beyond vanity metrics to identify leading indicators of
              revenue and efficiency.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h4 className="text-lg font-bold text-slate-900">
              Balanced Scorecards
            </h4>
            <p className="mt-2 text-slate-600 leading-relaxed">
              Holistic views across Finance, Customer Success, Operations, and
              Innovation.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h4 className="text-lg font-bold text-slate-900">
              Metric Standardization
            </h4>
            <p className="mt-2 text-slate-600 leading-relaxed">
              Ensuring revenue, churn, and other core metrics are calculated
              consistently across departments.
            </p>
          </div>
        </div>
      </div>

      {/* 2. Next-Gen Dashboard Engineering */}
      <div className="mt-8 rounded-2xl border-2 border-brand-800 bg-slate-50 p-7 sm:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-900 text-sm font-bold">
                2
              </span>
              <p className="text-sm font-bold tracking-widest text-brand-800 uppercase">
                Next-Gen Dashboard Engineering
              </p>
            </div>
            <h3 className="mt-3 text-2xl sm:text-3xl font-bold text-slate-900">
              Visualizations that speak the language of your business.
            </h3>
            <p className="mt-4 text-slate-600 leading-relaxed max-w-3xl">
              We build fast, interactive, and mobile-responsive dashboards using
              the modern BI stack. Our goal is to design dashboards that answer
              your questions in seconds.
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-center lg:justify-end lg:self-center">
            <div className="w-full max-w-xs">
              <div
                role="img"
                aria-label="Dashboard engineering"
                className="w-full h-auto text-violet-500 drop-shadow-md [&_svg]:h-full [&_svg]:w-full [&_svg]:block"
                dangerouslySetInnerHTML={{ __html: styled(businessSvg) }}
              />
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h4 className="text-lg font-bold text-slate-900">
              Command Centers
            </h4>
            <p className="mt-2 text-slate-600 leading-relaxed">
              High-level overviews for the C-suite to monitor health at a
              glance.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h4 className="text-lg font-bold text-slate-900">
              Operational Dashboards
            </h4>
            <p className="mt-2 text-slate-600 leading-relaxed">
              Real-time views for managers to identify bottlenecks as they
              happen.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h4 className="text-lg font-bold text-slate-900">Expert Tooling</h4>
            <p className="mt-2 text-slate-600 leading-relaxed">
              Implementation in Power BI, Tableau, or Looker.
            </p>
          </div>
        </div>
      </div>

      {/* 3. Automated Executive Storytelling */}
      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-7 sm:p-10 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white text-sm font-bold">
                3
              </span>
              <p className="text-sm font-bold tracking-widest text-brand-800 uppercase">
                Automated Executive Storytelling
              </p>
            </div>
            <h3 className="mt-3 text-2xl sm:text-3xl font-bold text-slate-900">
              Insights delivered directly to your inbox.
            </h3>
            <p className="mt-4 text-slate-600 leading-relaxed max-w-3xl">
              A chart without a why is just a picture. We implement automated
              reporting that uses AI to summarize the so-what behind the
              numbers.
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-center lg:justify-end lg:self-center">
            <div className="w-full max-w-xs">
              <div
                role="img"
                aria-label="Automated storytelling"
                className="w-full h-auto text-cyan-500 drop-shadow-md [&_svg]:h-full [&_svg]:w-full [&_svg]:block"
                dangerouslySetInnerHTML={{ __html: styled(inboxSvg) }}
              />
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h4 className="text-lg font-bold text-slate-900">
              Automated Briefings
            </h4>
            <p className="mt-2 text-slate-600 leading-relaxed">
              Weekly or monthly summaries via Slack or email highlighting the
              three things you need to know.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h4 className="text-lg font-bold text-slate-900">
              Exception Reporting
            </h4>
            <p className="mt-2 text-slate-600 leading-relaxed">
              Alerts that trigger only when metrics fall outside expected
              ranges.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h4 className="text-lg font-bold text-slate-900">
              Natural Language Querying (NLQ)
            </h4>
            <p className="mt-2 text-slate-600 leading-relaxed">
              Ask questions in plain English and get instant visual answers.
            </p>
          </div>
        </div>
      </div>

      {/* 4. Embedded & Customer-Facing Analytics */}
      <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-7 sm:p-10">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 text-sm font-bold">
            4
          </span>
          <p className="text-sm font-bold tracking-widest text-brand-800 uppercase">
            Embedded &amp; Customer-Facing Analytics
          </p>
        </div>

        <h3 className="mt-3 text-2xl sm:text-3xl font-bold text-slate-900">
          Turning your data into a product feature.
        </h3>
        <p className="mt-4 text-slate-600 leading-relaxed max-w-3xl">
          We help you monetize your data by embedding beautiful, secure
          analytics directly into your customer-facing applications.
        </p>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 flex justify-center lg:justify-start lg:self-center">
            <div className="w-full max-w-xs">
              <div
                role="img"
                aria-label="Embedded analytics"
                className="w-full h-auto text-pink-500 drop-shadow-md [&_svg]:h-full [&_svg]:w-full [&_svg]:block"
                dangerouslySetInnerHTML={{ __html: styled(productSvg) }}
              />
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 gap-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h4 className="text-lg font-bold text-slate-900">
                  External Portals
                </h4>
                <p className="mt-2 text-slate-600 leading-relaxed">
                  Giving clients access to their own data via secure, branded
                  dashboards.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h4 className="text-lg font-bold text-slate-900">
                  White-Labeled Reporting
                </h4>
                <p className="mt-2 text-slate-600 leading-relaxed">
                  Integrating BI tools so analytics look and feel like your own
                  brand.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h4 className="text-lg font-bold text-slate-900">
                  Monetization Strategy
                </h4>
                <p className="mt-2 text-slate-600 leading-relaxed">
                  Designing premium data tiers that create new revenue streams.
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
          What Reporting and Insights might look like for your business.
        </h3>
        <p className="mt-4 text-slate-600 leading-relaxed max-w-4xl">
          Utilization Reporting
        </p>

        <SerpentineRoadmap
          items={roadmapPhases}
          markerIdPrefix="arrowhead-reporting"
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
