import {
  HeroSection,
  AiChatSection,
  FeaturesSection,
  EngagementSection,
  UsAdvantageSection,
  CtaSection,
} from "../components/sections";
import BrainStormSection from "../components/sections/BrainStormSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AiChatSection borderless />
      <FeaturesSection />
      <EngagementSection />
      <UsAdvantageSection />
      <BrainStormSection />
      <CtaSection borderless />
    </>
  );
}
