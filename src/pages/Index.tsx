import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import InvestorLevels from '@/components/InvestorLevels';
import ChannelContent from '@/components/ChannelContent';
import AboutSection from '@/components/AboutSection';
import FooterSection from '@/components/FooterSection';
import useScrollReveal from '@/hooks/useScrollReveal';

const Index = () => {
  useScrollReveal();

  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <InvestorLevels />
      <ChannelContent />
      <AboutSection />
      <FooterSection />
    </main>
  );
};

export default Index;