import HeroSection from '@/components/HeroSection';
import TargetAudienceSection from '@/components/TargetAudienceSection';
import FeaturesSection from '@/components/FeaturesSection';
import InvestorLevels from '@/components/InvestorLevels';
import AboutSection from '@/components/AboutSection';
import FooterSection from '@/components/FooterSection';
import useScrollReveal from '@/hooks/useScrollReveal';

const Index = () => {
  useScrollReveal();

  return (
    <main className="min-h-screen">
      <HeroSection />
      <TargetAudienceSection />
      <FeaturesSection />
      <InvestorLevels />
      <AboutSection />
      <FooterSection />
    </main>
  );
};

export default Index;