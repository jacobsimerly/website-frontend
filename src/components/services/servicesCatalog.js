export const SERVICES = [
  {
    slug: "data-strategy",
    label: "Data Strategy",
  },
  {
    slug: "data-ai-foundations",
    label: "Data and AI Foundations",
  },
  {
    slug: "workflow-and-process",
    label: "Workflow & Process Automation",
  },
  {
    slug: "custom-ai-tooling",
    label: "Custom AI Tooling",
  },
  {
    slug: "software-procurement-management",
    label: "Software Procurement and Management",
  },
  {
    slug: "managed-support",
    label: "Managed Support",
  },
  {
    slug: "data-ai-governance",
    label: "Governance and Safety",
  },
  {
    slug: "reporting-insights",
    label: "Reporting and Insights",
  },
];

export const DEFAULT_SERVICE_SLUG = SERVICES[0].slug;

export function isValidServiceSlug(serviceSlug) {
  return SERVICES.some((service) => service.slug === serviceSlug);
}

export function getServiceBySlug(serviceSlug) {
  return SERVICES.find((service) => service.slug === serviceSlug) ?? null;
}
