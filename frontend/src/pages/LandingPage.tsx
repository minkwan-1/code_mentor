import { PageContainer } from "../components/layout/common";
import HeroSection from "../components/landing/HeroSection";
import FeaturesSection from "../components/landing/FeaturesSection";
import TestimonialSection from "../components/landing/TestimonialSection";
import CallToActionSection from "../components/landing/CallToActionSection";

function LandingPage() {
  return (
    <PageContainer>
      <HeroSection />
      <FeaturesSection />
      <TestimonialSection />
      <CallToActionSection />
    </PageContainer>
  );
}

export default LandingPage;
