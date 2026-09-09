import HeroSectionMax from '@/components/max/HeroSectionMax';
import FeaturesSectionMax from '@/components/max/FeaturesSectionMax';
import AboutSectionMax from '@/components/max/AboutSectionMax';
import AudienceFitSectionMax from '@/components/max/AudienceFitSectionMax';
import InvitationSectionMax from '@/components/max/InvitationSectionMax';
import FooterSection from '@/components/FooterSection';
import useScrollReveal from '@/hooks/useScrollReveal';

const CrimeaMax = () => {
  useScrollReveal();

  return (
    <main className="min-h-screen">
      <HeroSectionMax />
      <FeaturesSectionMax />
      <AboutSectionMax />
      <AudienceFitSectionMax />
      <InvitationSectionMax />
      <FooterSection />
    </main>
  );
};

export default CrimeaMax;
