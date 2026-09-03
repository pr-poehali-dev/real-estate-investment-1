import HeroSectionKurort from '@/components/kurort/HeroSectionKurort';
import TargetAudienceSectionKurort from '@/components/kurort/TargetAudienceSectionKurort';
import FeaturesSectionKurort from '@/components/kurort/FeaturesSectionKurort';
import InvestorLevelsKurort from '@/components/kurort/InvestorLevelsKurort';
import AboutSectionKurort from '@/components/kurort/AboutSectionKurort';
import FooterSectionKurort from '@/components/kurort/FooterSectionKurort';
import useScrollReveal from '@/hooks/useScrollReveal';

const Kurort = () => {
  useScrollReveal();

  return (
    <main className="min-h-screen">
      <HeroSectionKurort />
      <TargetAudienceSectionKurort />
      <FeaturesSectionKurort />
      <InvestorLevelsKurort />
      <AboutSectionKurort />
      <FooterSectionKurort />
    </main>
  );
};

export default Kurort;
