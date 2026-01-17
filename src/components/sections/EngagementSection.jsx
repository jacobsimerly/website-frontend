import { EngagementPicker } from "../engagements";

// Updated imports to use ?raw for SVG manipulation
import quickWinSvg from "../../assets/svg/quickwin.svg?raw";
import projectSvg from "../../assets/svg/project.svg?raw";
import partnerSvg from "../../assets/svg/partnership.svg?raw";

const DEFAULT_ENGAGEMENTS = [
  {
    id: "quick",
    tabLabel: "Quick Wins",
    illustration: quickWinSvg,
    headline: "High Impact, Fixed Scope, Low Risk.",
    subhead: "Perfect for proving value without a massive contract.",
    description:
      "A low-risk way to test our capabilities while solving a real business problem. We tackle a specific issue: like a messy Excel process, a broken PDF workflow, or manual work that's taking too much time. It’s the fastest way to prove ROI before scaling to a larger project.",
    bestFor: ["Excel/PDF Automation", "Basic AI Agents", "Proof of Concept"],
    timeline: "2-4 Weeks",
    cta: "Identify Your Quick Win",
    // Color logic
    iconColorClassName: "text-cyan-500",
    recolorPurpleAccent: true,
  },
  {
    id: "project",
    tabLabel: "Project Engagements",
    illustration: projectSvg,
    headline: "End-to-End Custom Solutions.",
    subhead: "The standard consulting model for transforming operations.",
    description:
      "A full lifecycle engagement for any Data or AI initiative. Whether we’re taking full ownership of the process or filling critical gaps in your existing team, we cover every angle: from initial discovery and strategy to data engineering, secure AI implementation, and full-team training.",
    bestFor: ["Custom AI Agents", "Internal Tools", "Data Warehouse Build"],
    timeline: "1-12 Months",
    cta: "Scope Your Project",
    iconColorClassName: "text-pink-500",
    recolorPurpleAccent: true,
  },
  {
    id: "partner",
    tabLabel: "Partnerships",
    illustration: partnerSvg,
    headline: "Your Managed Data & AI Team.",
    subhead: "Continuous improvement and long-term support.",
    description:
      "For businesses that need ongoing support. We act as your dedicated data and AI team. We handle continuous improvement, maintenance, and support while keeping our finger on the pulse of the industry to ensure you're always using the best tech for the business.",
    bestFor: [
      "Continuous Improvement",
      "Scaling Operations",
      "Industry Trends",
    ],
    timeline: "Ongoing",
    cta: "Discuss Partnership",
    iconColorClassName: "text-green-800",
    recolorPurpleAccent: true,
  },
];

export default function EngagementSection({
  sectionId = "engagements",
  title = "We'll Meet You Where You Work",
  subtitle = "Whether you need a specific problem fixed this week or a long-term technical partner, we have an engagement model that fits.",
  engagements = DEFAULT_ENGAGEMENTS,
  initialEngagementId,
  onCtaClick,
}) {
  return (
    <section id={sectionId} className="py-20 sm:py-24 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER SECTION */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <EngagementPicker
          engagements={engagements}
          initialEngagementId={initialEngagementId}
          onCtaClick={onCtaClick}
        />
      </div>
    </section>
  );
}
