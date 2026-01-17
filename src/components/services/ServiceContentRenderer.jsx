import DataStrategySection from "./sections/DataStrategySection";
import DataAiFoundationsSection from "./sections/DataAiFoundationsSection";
import WorkflowProcessAutomationSection from "./sections/WorkflowProcessAutomationSection";
import SoftwareProcurementManagementSection from "./sections/SoftwareProcurementManagementSection";
import CustomAiToolingSection from "./sections/CustomAiToolingSection";
import ManagedSupportSection from "./sections/ManagedSupportSection";
import DataAiGovernanceSection from "./sections/DataAiGovernanceSection";
import ReportingInsightsSection from "./sections/ReportingInsightsSection";

export default function ServiceContentRenderer({ serviceSlug }) {
  switch (serviceSlug) {
    case "data-strategy":
      return <DataStrategySection />;
    case "data-ai-foundations":
      return <DataAiFoundationsSection />;
    case "workflow-and-process":
      return <WorkflowProcessAutomationSection />;
    case "software-procurement-management":
      return <SoftwareProcurementManagementSection />;
    case "custom-ai-tooling":
      return <CustomAiToolingSection />;
    case "managed-support":
      return <ManagedSupportSection />;
    case "data-ai-governance":
      return <DataAiGovernanceSection />;
    case "reporting-insights":
      return <ReportingInsightsSection />;
    default:
      return null;
  }
}
