import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden" style={{ backgroundColor: '#18352e' }}>
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://cdn.poehali.dev/projects/f9871ff2-932e-47eb-b9a4-ce2b9c4f26a9/files/6c6a1881-f056-4b5c-a7fb-1fc0043c5541.jpg')`,
        }}
      />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(#2a221861 0%, #2a2218bf 100%)' }} />

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
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-20 pb-8 pt-4">
        <div className="max-w-3xl">
          <h1 className="hero-title text-display mb-5" style={{ color: '#ffffff' }}>
            Инвестиции в недвижимость{' '}
            <span style={{ color: '#ffe1a2' }}>на юге России</span>
          </h1>

          <p className="hero-sub text-body-lg mb-10 max-w-xl" style={{ color: '#ffffff' }}>
            Честный разбор. Реальные цифры, кейсы, налоговые лайфхаки.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://t.me/+Oikjo-gGhtxiZjZi"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn-1 inline-flex items-center justify-center gap-2 font-bold px-8 py-4 rounded-lg transition-all duration-200 hover:opacity-90"
              style={{ backgroundColor: '#ffe1a2', color: '#18352e', fontSize: '0.95rem' }}
            >
              <Icon name="Send" size={16} />
              Перейти в TG-канал
            </a>
            <a
              href="https://t.me/+T_max_channel"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn-2 inline-flex items-center justify-center gap-2 font-bold px-8 py-4 rounded-lg transition-all duration-200 hover:bg-white/10"
              style={{ border: '2px solid rgba(255,255,255,0.5)', color: '#ffffff', fontSize: '0.95rem' }}
            >
              <Icon name="Zap" size={16} />
              Перейти в Max
            </a>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;