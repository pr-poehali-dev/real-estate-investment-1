const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://cdn.poehali.dev/projects/f9871ff2-932e-47eb-b9a4-ce2b9c4f26a9/files/6c6a1881-f056-4b5c-a7fb-1fc0043c5541.jpg')`,
        }}
      />
      {/* Warm overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2a2218]/60 via-[#2a2218]/40 to-[#2a2218]/75" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#2a2218]/30 to-transparent" />

      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between px-6 md:px-12 py-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full border border-[#9d8857] flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-[#9d8857]" />
          </div>
          <span className="font-serif text-white text-lg tracking-wide">Южный Берег Капитала</span>
        </div>
        <a
          href="https://t.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 border border-white/30 text-white text-sm px-5 py-2 rounded-full hover:bg-white/10 transition-all duration-300"
        >
          Telegram-канал
        </a>
      </nav>

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-20 pb-20 pt-8">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="section-divider" />
            <span className="font-sans text-sm tracking-[0.15em] uppercase text-orange-100">Краснодар · Сочи · Анапа · Крым</span>
          </div>

          <h1 className="font-serif text-white mb-6">
            <span className="block text-5xl md:text-6xl lg:text-7xl font-light leading-tight">
              Инвестиции в
            </span>
            <span className="block text-5xl md:text-6xl lg:text-7xl font-light leading-tight">
              недвижимость
            </span>
            <span className="block text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-[#9d8857] italic mt-1">
              на юге
            </span>
          </h1>

          <p className="font-sans text-white/80 text-base md:text-lg mb-4 max-w-xl leading-relaxed">
            Честный разбор. Реальные цифры, кейсы, налоговые лайфхаки.
          </p>
          <p className="font-sans text-white/60 text-sm md:text-base mb-10 max-w-lg leading-relaxed"></p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://t.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#9d8857] text-white font-sans text-sm tracking-wide px-8 py-4 rounded-full hover:bg-[#b8a06e] transition-all duration-300 shadow-lg"
            >
              Перейти в TG-канал
            </a>
            <a
              href="#calculator"
              className="inline-flex items-center justify-center gap-2 border border-white/40 text-white font-sans text-sm tracking-wide px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300"
            >
              Рассчитать доходность
            </a>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-10 bg-white/10 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-6 grid grid-cols-3 gap-4">
          {[
            { value: '10 лет', label: 'на рынке юга' },
            { value: '15–29%', label: 'экономия на налогах' },
            { value: '1 млн/мес', label: 'пассивный доход' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-serif text-[#9d8857] text-2xl md:text-3xl font-light">{stat.value}</div>
              <div className="font-sans text-white/60 text-xs md:text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;