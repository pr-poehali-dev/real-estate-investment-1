import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden" style={{ backgroundColor: '#074952' }}>
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://cdn.poehali.dev/projects/f9871ff2-932e-47eb-b9a4-ce2b9c4f26a9/files/6c6a1881-f056-4b5c-a7fb-1fc0043c5541.jpg')`,
        }}
      />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(7,73,82,0.82) 0%, rgba(7,73,82,0.65) 50%, rgba(7,73,82,0.92) 100%)' }} />

      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between px-6 md:px-12 py-6">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#ffe1a2' }}>
            <Icon name="TrendingUp" size={16} style={{ color: '#074952' }} />
          </div>
          <span className="font-bold text-white" style={{ fontSize: '1.05rem' }}>
            Южный Берег Капитала
          </span>
        </div>
        <a
          href="https://t.me/+Oikjo-gGhtxiZjZi"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 font-bold text-sm px-5 py-2.5 rounded-lg transition-all duration-200"
          style={{ backgroundColor: 'rgba(255,225,162,0.15)', color: '#ffe1a2', border: '1.5px solid rgba(255,225,162,0.4)' }}
        >
          <Icon name="Send" size={14} />
          Telegram-канал
        </a>
      </nav>

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-20 pb-8 pt-4">
        <div className="max-w-3xl">
          <div className="section-label-white">Краснодар · Сочи · Анапа · Крым</div>

          <h1 className="text-display mb-5" style={{ color: '#ffffff' }}>
            Инвестиции в недвижимость{' '}
            <span style={{ color: '#ffe1a2' }}>на юге России</span>
          </h1>

          <p className="text-body-lg mb-10 max-w-xl" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Честный разбор. Реальные цифры, кейсы, налоговые лайфхаки.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://t.me/+Oikjo-gGhtxiZjZi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 font-bold px-8 py-4 rounded-lg transition-all duration-200 hover:opacity-90"
              style={{ backgroundColor: '#ffe1a2', color: '#074952', fontSize: '0.95rem' }}
            >
              <Icon name="Send" size={16} />
              Перейти в TG-канал
            </a>
            <a
              href="#calculator"
              className="inline-flex items-center justify-center gap-2 font-bold px-8 py-4 rounded-lg transition-all duration-200 hover:bg-white/10"
              style={{ border: '2px solid rgba(255,255,255,0.5)', color: '#ffffff', fontSize: '0.95rem' }}
            >
              <Icon name="Calculator" size={16} />
              Рассчитать доходность
            </a>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-10" style={{ backgroundColor: 'rgba(5,56,64,0.95)', borderTop: '1px solid rgba(255,225,162,0.2)' }}>
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-5 grid grid-cols-3 gap-4">
          {[
            { value: '10 лет', label: 'на рынке юга' },
            { value: '15–29%', label: 'экономия на налогах' },
            { value: '1 млн/мес', label: 'пассивный доход' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-extrabold" style={{ color: '#ffe1a2', fontSize: '1.35rem' }}>{stat.value}</div>
              <div className="font-medium mt-0.5" style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.72rem', letterSpacing: '0.04em' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
