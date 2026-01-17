import {
  ServicesHeroSection,
  ServicesTrustCtaSection,
} from "../components/sections";

import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import ServiceContentRenderer from "../components/services/ServiceContentRenderer";
import ServiceNextNavSection from "../components/services/ServiceNextNavSection";
import {
  DEFAULT_SERVICE_SLUG,
  isValidServiceSlug,
} from "../components/services/servicesCatalog";

export default function ServicesPage() {
  const navigate = useNavigate();
  const { serviceSlug } = useParams();

  const resolvedServiceSlug = serviceSlug ?? DEFAULT_SERVICE_SLUG;
  const isValid = isValidServiceSlug(resolvedServiceSlug);

  useEffect(() => {
    if (!serviceSlug) {
      navigate(`/services/${DEFAULT_SERVICE_SLUG}`, { replace: true });
      return;
    }

    if (!isValid) {
      navigate(`/services/${DEFAULT_SERVICE_SLUG}`, { replace: true });
    }
  }, [isValid, navigate, serviceSlug]);

  return (
    <>
      <div className="h-16" />

      <ServicesHeroSection />
      {isValid ? (
        <>
          <ServiceContentRenderer serviceSlug={resolvedServiceSlug} />
          <ServiceNextNavSection currentServiceSlug={resolvedServiceSlug} />
        </>
      ) : null}
      <ServicesTrustCtaSection />
    </>
  );
}
