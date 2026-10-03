import HeroSectionKrimekurort from '@/components/krimekurort/HeroSectionKrimekurort';
import TargetAudienceSection from '@/components/TargetAudienceSection';
import FeaturesSection from '@/components/FeaturesSection';
import InvestorLevels from '@/components/InvestorLevels';
import AboutSectionKrimekurort from '@/components/krimekurort/AboutSectionKrimekurort';
import FooterSectionKrimekurort from '@/components/krimekurort/FooterSectionKrimekurort';
import useScrollReveal from '@/hooks/useScrollReveal';

const Krimekurort = () => {
  useScrollReveal();

  return (
    <main className="min-h-screen">
      <HeroSectionKrimekurort />
      <TargetAudienceSection />
      <FeaturesSection />
      <InvestorLevels />
      <AboutSectionKrimekurort />
      <FooterSectionKrimekurort />
    </main>
  );
};

export default Krimekurort;
