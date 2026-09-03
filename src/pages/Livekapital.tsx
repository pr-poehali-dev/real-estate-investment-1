import HeroSectionLivekapital from '@/components/livekapital/HeroSectionLivekapital';
import CapitalSectionLivekapital from '@/components/livekapital/CapitalSectionLivekapital';
import FeaturesSectionLivekapital from '@/components/livekapital/FeaturesSectionLivekapital';
import CitiesSectionLivekapital from '@/components/livekapital/CitiesSectionLivekapital';
import AudienceFitSectionLivekapital from '@/components/livekapital/AudienceFitSectionLivekapital';
import AboutSectionLivekapital from '@/components/livekapital/AboutSectionLivekapital';
import FooterSection from '@/components/FooterSection';
import useScrollReveal from '@/hooks/useScrollReveal';

const Livekapital = () => {
  useScrollReveal();

  return (
    <main className="min-h-screen">
      <HeroSectionLivekapital />
      <CapitalSectionLivekapital />
      <FeaturesSectionLivekapital />
      <CitiesSectionLivekapital />
      <AudienceFitSectionLivekapital />
      <AboutSectionLivekapital />
      <FooterSection />
    </main>
  );
};

export default Livekapital;
