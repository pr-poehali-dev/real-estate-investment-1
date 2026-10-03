import HeroSectionKrimekurort from '@/components/krimekurort/HeroSectionKrimekurort';
import FeaturesSectionKrimekurort from '@/components/krimekurort/FeaturesSectionKrimekurort';
import AudienceSectionKrimekurort from '@/components/krimekurort/AudienceSectionKrimekurort';
import PrincipleSectionKrimekurort from '@/components/krimekurort/PrincipleSectionKrimekurort';
import useScrollReveal from '@/hooks/useScrollReveal';

const Krimekurort = () => {
  useScrollReveal();

  return (
    <main className="min-h-screen">
      <HeroSectionKrimekurort />
      <FeaturesSectionKrimekurort />
      <AudienceSectionKrimekurort />
      <PrincipleSectionKrimekurort />
    </main>
  );
};

export default Krimekurort;
