const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden" style={{ backgroundColor: '#0d0d0b' }}>
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://cdn.poehali.dev/projects/f9871ff2-932e-47eb-b9a4-ce2b9c4f26a9/files/6c6a1881-f056-4b5c-a7fb-1fc0043c5541.jpg')`,
        }}
      />
      {/* Dark overlay — deep and moody */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(13,13,11,0.75) 0%, rgba(13,13,11,0.45) 40%, rgba(13,13,11,0.85) 100%)' }} />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(13,13,11,0.6) 0%, transparent 60%)' }} />

      {/* Top gold line */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #c9a96e, transparent)' }} />

      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between px-8 md:px-16 py-8">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full border flex items-center justify-center" style={{ borderColor: '#c9a96e' }}>
            <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#c9a96e' }} />
          </div>
          <span className="font-serif text-lg tracking-widest" style={{ color: '#f0e6d0', letterSpacing: '0.08em' }}>Южный Берег Капитала</span>
        </div>
        <a
          href="https://t.me/+Oikjo-gGhtxiZjZi"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 text-sm px-6 py-2.5 transition-all duration-300"
          style={{ 
            border: '1px solid rgba(201,169,110,0.4)', 
            color: '#c9a96e',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            fontSize: '0.7rem'
          }}
          onMouseEnter={e => (e.currentTarget.style.borderColor = '#c9a96e')}
          onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(201,169,110,0.4)')}
        >
          Telegram-канал
        </a>
      </nav>

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 pb-28 pt-8">
        <div className="max-w-4xl">
          {/* Label */}
          <div className="flex items-center gap-4 mb-10">
            <div style={{ width: '32px', height: '1px', backgroundColor: '#c9a96e' }} />
            <span className="font-sans text-xs tracking-[0.25em] uppercase" style={{ color: '#c9a96e' }}>
              Краснодар · Сочи · Анапа · Крым
            </span>
          </div>

          <h1 className="font-serif font-light mb-8" style={{ color: '#f0e6d0' }}>
            <span className="block leading-tight" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}>
              Инвестиции в
            </span>
            <span className="block leading-tight" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}>
              недвижимость
            </span>
            <span className="block leading-tight italic" style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', color: '#c9a96e' }}>
              на юге России
            </span>
          </h1>

          <p className="font-sans font-light mb-12 max-w-xl" style={{ color: 'rgba(232, 220, 200, 0.65)', fontSize: '1rem', lineHeight: '1.8', letterSpacing: '0.02em' }}>
            Честный разбор. Реальные цифры, кейсы, налоговые лайфхаки.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://t.me/+Oikjo-gGhtxiZjZi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 font-sans text-xs tracking-[0.15em] uppercase px-10 py-4 transition-all duration-300"
              style={{ backgroundColor: '#c9a96e', color: '#0d0d0b', letterSpacing: '0.12em' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#dfc090')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#c9a96e')}
            >
              Перейти в TG-канал
            </a>
            <a
              href="#calculator"
              className="inline-flex items-center justify-center gap-3 font-sans text-xs tracking-[0.15em] uppercase px-10 py-4 transition-all duration-300"
              style={{ 
                border: '1px solid rgba(201,169,110,0.4)', 
                color: '#c9a96e',
                letterSpacing: '0.12em'
              }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgba(201,169,110,0.08)'; e.currentTarget.style.borderColor = '#c9a96e'; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.borderColor = 'rgba(201,169,110,0.4)'; }}
            >
              Рассчитать доходность
            </a>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-10 border-t" style={{ borderColor: 'rgba(201,169,110,0.2)', backgroundColor: 'rgba(13,13,11,0.7)', backdropFilter: 'blur(20px)' }}>
        <div className="max-w-5xl mx-auto px-8 md:px-16 py-6 grid grid-cols-3 gap-4">
          {[
            { value: '10 лет', label: 'на рынке юга' },
            { value: '15–29%', label: 'экономия на налогах' },
            { value: '1 млн/мес', label: 'пассивный доход' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-serif font-light" style={{ color: '#c9a96e', fontSize: '1.6rem' }}>{stat.value}</div>
              <div className="font-sans text-xs tracking-wider mt-1" style={{ color: 'rgba(232,220,200,0.45)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gold line */}
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,169,110,0.4), transparent)' }} />
    </section>
  );
};

export default HeroSection;
