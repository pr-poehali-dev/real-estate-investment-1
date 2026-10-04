import HeroSectionKrimekurort from '@/components/krimekurort/HeroSectionKrimekurort';
import FeaturesSectionKrimekurort from '@/components/krimekurort/FeaturesSectionKrimekurort';
import AudienceSectionKrimekurort from '@/components/krimekurort/AudienceSectionKrimekurort';
import PrincipleSectionKrimekurort from '@/components/krimekurort/PrincipleSectionKrimekurort';
import { useEffect } from 'react';
import useScrollReveal from '@/hooks/useScrollReveal';

const Krimekurort = () => {
  useScrollReveal();

  useEffect(() => {
    const title = 'Принимайте взвешенное решение о покупке недвижимости в Крыму';
    const description = 'Здесь вы сможете изучить локации и недвижимость Крыма';
    const prevTitle = document.title;
    const targets: [string, string, string][] = [
      ['name', 'description', description],
      ['property', 'og:title', title],
      ['property', 'og:description', description],
    ];
    const prev = targets.map(([attr, key]) => document.head.querySelector(`meta[${attr}="${key}"]`)?.getAttribute('content') ?? '');
    document.title = title;
    targets.forEach(([attr, key, value]) => {
      document.head.querySelector(`meta[${attr}="${key}"]`)?.setAttribute('content', value);
    });
    return () => {
      document.title = prevTitle;
      targets.forEach(([attr, key], i) => {
        document.head.querySelector(`meta[${attr}="${key}"]`)?.setAttribute('content', prev[i]);
      });
    };
  }, []);

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
