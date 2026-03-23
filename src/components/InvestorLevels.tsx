import Icon from '@/components/ui/icon';

const levels = [
  {
    num: '01',
    tag: 'Начинающие',
    budget: 'Бюджет 1–15 млн ₽',
    icon: 'Sprout',
    bg: 'bg-[#f7f3ef]',
    accentColor: '#9d8857',
    headline: 'Для начинающих и семейных инвестиций',
    pains: [
      'Мечтаете о квартире у моря?',
      'Хотите обеспечить будущее ребёнка, но боитесь ипотеки?',
      'Хотите сформировать пассивный доход?',
    ],
    cta: 'Сформируйте пассивный доход с минимальными рисками и полным сопровождением на каждом этапе.',
    posts: [
      'Как купить квартиру с первоначальным взносом 1 млн, а ипотеку закрывать арендой',
      'Как выбрать первую квартиру под сдачу, чтобы не прогореть на ремонтах и налогах',
      'Реальная доходность без прикрас: Краснодар, Анапа, Новороссийск — что выбрать под ваш бюджет',
    ],
  },
  {
    num: '02',
    tag: 'Опытные',
    budget: 'Бюджет 15–30 млн ₽',
    icon: 'TrendingUp',
    bg: 'bg-[#eef2ee]',
    accentColor: '#3e563f',
    headline: 'Для опытных инвесторов',
    pains: [
      'Квартиры есть, доходность 5–7% перестала радовать?',
      'Коммерция? Страшно: «знакомый год сдать не может».',
      'Отели? «Только для миллионеров».',
    ],
    cta: 'Делимся опытом и знаниями, как увеличить пассивный доход уже сейчас. Поможем сформировать первый инвестиционный портфель из недвижимости на Юге.',
    posts: [
      'Квартира vs коммерция: что выгоднее в 2026?',
      'Как купить номер в отеле и не потерять деньги',
      'Как купить недвижимость и сэкономить на налогах до 29% от стоимости объекта?',
    ],
  },
  {
    num: '03',
    tag: 'Крупные',
    budget: 'Бюджет от 30 млн ₽',
    icon: 'Gem',
    bg: 'bg-[#3d2e1e]',
    accentColor: '#c4a96a',
    headline: 'Для крупных инвесторов',
    pains: [
      'Капитал есть, но инфляция съедает?',
      'Хотите статусный актив с доходом и репутацией?',
      'Или собрать портфель под 1 млн/мес пассивного дохода?',
    ],
    cta: 'Формируем инвест-портфели из недвижимости, которые пройдут через любые кризисы за счёт продуманной диверсификации.',
    posts: [
      'Премиальные резиденции у моря: доход и статус',
      'Как собрать портфель под 1 млн/мес пассива',
      'Диверсификация: квартиры + отели + коммерция',
    ],
  },
];

const InvestorLevels = () => {
  return (
    <section>
      {/* Section header */}
      <div className="bg-[#f7f3ef] texture-dots pt-20 md:pt-28 pb-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="section-divider" />
            <span className="text-[#9d8857] font-sans text-sm tracking-[0.15em] uppercase">Кому будет полезен канал</span>
            <div className="w-14 h-0.5 bg-gradient-to-l from-[#9d8857] to-transparent" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-[#2a2218] font-light leading-tight">
            Сообщество для тех, кто хочет
            <br />
            <span className="italic text-[#9d8857]">сохранить и приумножить капитал</span>
          </h2>
          <p className="font-sans text-[#2a2218]/60 mt-4 text-sm max-w-lg mx-auto">
            На квартирах, коммерции и отелях в Сочи, Краснодаре, Анапе и Крыму
          </p>
        </div>
      </div>

      {/* Three level blocks */}
      {levels.map((level, idx) => {
        const isDark = idx === 2;
        const textMain = isDark ? 'text-white' : 'text-[#2a2218]';
        const textMuted = isDark ? 'text-white/55' : 'text-[#2a2218]/55';
        const textSub = isDark ? 'text-white/75' : 'text-[#2a2218]/75';
        const cardBg = isDark ? 'bg-white/8 border-white/12' : 'bg-white border-[#e3dad2]';
        const cardHover = isDark ? 'hover:border-[#9d8857]/50' : 'hover:border-[#9d8857]/50 hover:shadow-md';
        const pillBg = isDark ? 'bg-white/10 text-white/60' : 'bg-[#e3dad2]/70 text-[#2a2218]/60';
        const ctaBg = isDark ? 'bg-white/10 border-white/15' : 'bg-white border-[#e3dad2]';
        const dotBorder = isDark ? 'border-[#9d8857]/60' : 'border-[#9d8857]/40';

        return (
          <div key={idx}>
          <div
            className={`${level.bg} py-14 md:py-20 px-6 md:px-12`}
            style={idx === 1 ? { background: 'linear-gradient(to bottom, #eef2ee 70%, #3d2e1e 100%)' } : undefined}
          >
            <div className="max-w-6xl mx-auto">

              {/* Level header */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-10">
                <div className="flex items-center gap-4">
                  <span className="font-serif text-6xl md:text-7xl leading-none" style={{ color: level.accentColor, opacity: 0.2 }}>
                    {level.num}
                  </span>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Icon name={level.icon} size={18} style={{ color: level.accentColor }} />
                      <span className="font-sans text-sm font-medium" style={{ color: level.accentColor }}>
                        {level.tag}
                      </span>
                    </div>
                    <h3 className={`font-serif text-2xl md:text-3xl font-light leading-tight ${textMain}`}>
                      {level.headline}
                    </h3>
                  </div>
                </div>
                <div className={`sm:ml-auto font-sans text-xs px-4 py-1.5 rounded-full flex-shrink-0 ${pillBg}`}>
                  {level.budget}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {/* Left: pains + cta */}
                <div className={`rounded-2xl p-7 border ${ctaBg}`}>
                  <p className={`font-sans text-xs tracking-[0.12em] uppercase mb-5 ${textMuted}`}>Это про вас?</p>
                  <ul className="space-y-4 mb-7">
                    {level.pains.map((p, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center mt-0.5 flex-shrink-0 ${dotBorder}`}>
                          <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: level.accentColor }} />
                        </div>
                        <span className={`font-sans text-sm leading-relaxed ${textSub}`}>{p}</span>
                      </li>
                    ))}
                  </ul>
                  <p className={`font-sans text-sm leading-relaxed ${textSub} border-t pt-5 ${isDark ? 'border-white/10' : 'border-[#e3dad2]'}`}>
                    {level.cta}
                  </p>
                </div>

                {/* Right: posts */}
                <div>
                  <p className={`font-sans text-xs tracking-[0.12em] uppercase mb-5 ${textMuted}`}>
                    Начните с материалов в канале:
                  </p>
                  <div className="space-y-3">
                    {level.posts.map((post, i) => (
                      <a
                        key={i}
                        href="https://t.me/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-start gap-4 rounded-xl p-4 border transition-all duration-300 group ${cardBg} ${cardHover}`}
                      >
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors"
                          style={{ backgroundColor: `${level.accentColor}18` }}
                        >
                          <span className="font-serif text-sm font-light" style={{ color: level.accentColor }}>
                            {i + 1}
                          </span>
                        </div>
                        <span className={`font-sans text-sm leading-relaxed flex-1 ${textSub} group-hover:${isDark ? 'text-white' : 'text-[#2a2218]'} transition-colors`}>
                          {post}
                        </span>
                        <Icon
                          name="ArrowRight"
                          size={15}
                          className="flex-shrink-0 mt-0.5 opacity-30 group-hover:opacity-80 transition-opacity"
                          style={{ color: level.accentColor }}
                        />
                      </a>
                    ))}
                  </div>

                  <a
                    href="https://t.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full mt-5 font-sans text-sm px-6 py-3.5 rounded-full transition-colors duration-300"
                    style={{ backgroundColor: level.accentColor, color: 'white' }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                  >
                    Перейти в TG-канал
                    <Icon name="ArrowRight" size={15} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          </div>
        );

      })}
    </section>
  );
};

export default InvestorLevels;