import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import InvestorLevels from '@/components/InvestorLevels';
import Calculator from '@/components/Calculator';
import AboutSection from '@/components/AboutSection';
import FooterSection from '@/components/FooterSection';
import useScrollReveal from '@/hooks/useScrollReveal';

const Index = () => {
  useScrollReveal();

  return (
    <main className="min-h-screen">
      <div className="page-load" style={{ animationDelay: '0s' }}>
        <HeroSection />
      </div>
      <div className="reveal reveal-delay-1">
        <FeaturesSection />
      </div>
      <div className="reveal reveal-delay-1">
        <InvestorLevels />
      </div>
      <div className="reveal reveal-delay-1">
        <Calculator />
      </div>
      <div className="reveal reveal-delay-1">
        <AboutSection />
      </div>
      <div className="reveal reveal-delay-1">
        <FooterSection />
      </div>
    </main>
  );
};

export default Index;
