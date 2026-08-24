import HeroSectionVse from '@/components/vse/HeroSectionVse';
import FeaturesSectionVse from '@/components/vse/FeaturesSectionVse';
import InvestorLevelsVse from '@/components/vse/InvestorLevelsVse';
import AboutSectionVse from '@/components/vse/AboutSectionVse';
import FooterSectionVse from '@/components/vse/FooterSectionVse';
import useScrollReveal from '@/hooks/useScrollReveal';

const Vse = () => {
  useScrollReveal();

  return (
    <main className="min-h-screen">
      <HeroSectionVse />
      <FeaturesSectionVse />
      <InvestorLevelsVse />
      <AboutSectionVse />
      <FooterSectionVse />
    </main>
  );
};

export default Vse;
