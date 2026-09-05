import Icon from '@/components/ui/icon';
import { reachGoal } from '@/lib/metrika';

const TELEGRAM_URL = 'https://max.ru/channel_ybk';

const HeroSectionLivekapital = () => {
  return (
    <section className="relative min-h-[90svh] lg:min-h-screen flex flex-col overflow-hidden" style={{ backgroundColor: '#18352e' }}>
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://cdn.poehali.dev/projects/f9871ff2-932e-47eb-b9a4-ce2b9c4f26a9/files/b0cd1e65-4b7d-4f57-81fa-97e6bfdfff57.jpg')`,
        }}
      />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, rgba(24,53,46,0.55) 0%, rgba(24,53,46,0.7) 30%, rgba(24,53,46,0.93) 60%, #18352e 85%)' }}
      />

      {/* Nav */}
      <nav className="hero-nav relative z-10 flex items-center justify-between px-6 md:px-12 py-4 md:py-6">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#ffe1a2' }}>
            <Icon name="Gem" size={16} style={{ color: '#18352e' }} />
          </div>
          <span className="font-bold text-white" style={{ fontSize: '1.05rem' }}>
            Южный берег капитала
          </span>
        </div>
      </nav>

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex items-center px-6 md:px-12 lg:px-20 pb-8 lg:pb-8 pt-2">
        <div className="w-full">
          <div className="max-w-3xl">
            <h1 className="hero-title text-display mb-4 md:mb-5" style={{ color: '#ffffff' }}>
              Канал о курортной недвижимости Крыма:{' '}
              <span style={{ color: '#ffe1a2' }}>для жизни и инвестиций</span>
            </h1>

            <p className="hero-sub font-bold mb-3 md:mb-4" style={{ color: '#ffe1a2', fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)' }}>
              Бюджет: от 9 млн. Первый взнос: от 3 млн.
            </p>

            <p className="hero-sub text-body-lg mb-6 md:mb-10 max-w-xl" style={{ color: '#ffffff' }}>Аналитика, обзоры ЖК, кейсы, история и личные ответы на вопросы. Помогаем зарабатывать на курортной недвижимости Крыма — от выбора объекта до прибыльного управления</p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => reachGoal('hero_channel_click2')}
                className="hero-btn-1 inline-flex items-center justify-center gap-2 font-bold px-8 py-4 rounded-lg transition-all duration-200 hover:opacity-90"
                style={{ backgroundColor: '#ffe1a2', color: '#18352e', fontSize: '0.95rem' }}
              >
                <Icon name="Send" size={16} />
                Подписаться на канал
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionLivekapital;