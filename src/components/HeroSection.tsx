import { useEffect, useRef } from 'react';
import Icon from '@/components/ui/icon';
import { reachGoal } from '@/lib/metrika';

const HeroSection = () => {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const updateParallax = () => {
      if (bgRef.current) {
        const offset = window.scrollY * 0.35;
        bgRef.current.style.transform = `translate3d(0, ${offset}px, 0)`;
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden" style={{ backgroundColor: '#18352e' }}>
      {/* Background image */}
      <div
        ref={bgRef}
        className="absolute -inset-x-0 -top-20 -bottom-20 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{
          backgroundImage: `url('https://cdn.poehali.dev/projects/f9871ff2-932e-47eb-b9a4-ce2b9c4f26a9/bucket/2c1ad30d-b169-4dec-8d01-f7f5b1cd2f7c.jpg')`,
        }}
      />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, rgba(24,53,46,0.55) 0%, rgba(24,53,46,0.7) 30%, rgba(24,53,46,0.93) 60%, #18352e 85%)' }}
      />

      {/* Nav */}
      <nav className="hero-nav relative z-10 flex items-center justify-between px-6 md:px-12 py-6">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#ffe1a2' }}>
            <Icon name="TrendingUp" size={16} style={{ color: '#18352e' }} />
          </div>
          <span className="font-bold text-white" style={{ fontSize: '1.05rem' }}>
            Южный Берег Капитала
          </span>
        </div>

      </nav>

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex items-end lg:items-center px-6 md:px-12 lg:px-20 pb-12 lg:pb-8 pt-4">
        <div className="w-full">
          <div className="max-w-3xl">
            <h1 className="hero-title text-display mb-5" style={{ color: '#ffffff' }}>
              Max канал о недвижимости для отдыха, жизни и инвестиций{' '}
              <span style={{ color: '#ffe1a2' }}>в Крыму.</span>
            </h1>

            <p className="hero-sub text-body-lg mb-10 max-w-xl" style={{ color: '#ffffff' }}>Для тех, кто хочет принять взвешенное решение, разобравшись в локациях, форматах заработка на недвижимости и особенностях Крыма.</p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://max.ru/id631181836803_biz"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => reachGoal('hero_channel_click')}
                className="hero-btn-1 inline-flex items-center justify-center gap-2 font-bold px-8 py-4 rounded-lg transition-all duration-200 hover:opacity-90"
                style={{ backgroundColor: '#ffe1a2', color: '#18352e', fontSize: '0.95rem' }}
              >
                <Icon name="Send" size={16} />
                Перейти в канал Мах
              </a>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;