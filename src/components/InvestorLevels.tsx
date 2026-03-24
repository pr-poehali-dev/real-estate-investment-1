import Icon from '@/components/ui/icon';

const levels = [
  {
    num: '01',
    tag: 'Начинающие',
    budget: 'Бюджет 1–15 млн ₽',
    icon: 'Sprout',
    dark: false,
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
    dark: true,
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
    dark: false,
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
      {/* Section header — light bg */}
      <div className="py-14 md:py-20 px-6 md:px-12" style={{ backgroundColor: '#f9f8f9' }}>
        <div className="max-w-6xl mx-auto text-center">
          <div className="section-label justify-center">Кому будет полезен канал</div>
          <h2 className="text-heading" style={{ color: '#18352e' }}>
            Сообщество для тех, кто хочет<br />
            <span style={{ color: '#18352e' }}>сохранить и приумножить капитал</span>
          </h2>
          <p className="text-body-lg mt-4 max-w-lg mx-auto" style={{ color: '#1a2e30' }}>
            На квартирах, коммерции и отелях в Сочи, Краснодаре, Анапе и Крыму
          </p>
        </div>
      </div>

      {/* Three level blocks — alternating bg */}
      {levels.map((level, idx) => {
        const bg = level.dark ? '#18352e' : '#ffffff';
        const textMain = level.dark ? '#ffffff' : '#18352e';
        const textMuted = level.dark ? '#ffffff' : '#1a3336';
        const cardBg = level.dark ? 'rgba(255,255,255,0.07)' : '#f9f8f9';
        const cardBorder = level.dark ? 'rgba(255,225,162,0.2)' : '#e8f0f1';
        const iconBg = level.dark ? '#ffe1a2' : '#18352e';
        const iconColor = level.dark ? '#18352e' : '#ffe1a2';
        const pillBg = level.dark ? 'rgba(255,225,162,0.18)' : '#e8f0f1';
        const pillColor = level.dark ? '#ffe1a2' : '#18352e';
        const labelColor = level.dark ? '#ffe1a2' : '#18352e';
        const postBg = level.dark ? 'rgba(255,255,255,0.05)' : '#f9f8f9';
        const postBorder = level.dark ? 'rgba(255,255,255,0.12)' : '#e8f0f1';
        const postHover = level.dark ? 'rgba(255,255,255,0.1)' : '#edf4f5';
        const btnBg = level.dark ? '#ffe1a2' : '#18352e';
        const btnColor = level.dark ? '#18352e' : '#ffffff';

        return (
          <div key={idx} className="py-12 md:py-16 px-6 md:px-12" style={{ backgroundColor: bg }}>
            <div className="max-w-6xl mx-auto">
              {/* Level header */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
                <div className="flex items-center gap-4">
                  <span className="font-extrabold" style={{ color: level.dark ? 'rgba(255,225,162,0.2)' : 'rgba(24,53,46,0.12)', fontSize: '3.5rem', lineHeight: '1', fontFamily: 'Mulish, sans-serif' }}>
                    {level.num}
                  </span>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ backgroundColor: iconBg }}>
                        <Icon name={level.icon} size={14} style={{ color: iconColor }} />
                      </div>
                      <span className="font-bold text-sm" style={{ color: level.dark ? '#ffe1a2' : '#18352e', letterSpacing: '0.04em' }}>
                        {level.tag}
                      </span>
                    </div>
                    <h3 className="font-bold" style={{ color: textMain, fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)' }}>
                      {level.headline}
                    </h3>
                  </div>
                </div>
                <div
                  className="sm:ml-auto font-bold text-xs px-4 py-1.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: pillBg, color: pillColor, letterSpacing: '0.04em' }}
                >
                  {level.budget}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Left: pains + cta */}
                <div className="rounded-xl p-6 border" style={{ backgroundColor: cardBg, borderColor: cardBorder }}>
                  <p className="font-bold text-xs uppercase tracking-wider mb-5" style={{ color: labelColor }}>
                    Это про вас?
                  </p>
                  <ul className="space-y-3 mb-6">
                    {level.pains.map((p, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ backgroundColor: level.dark ? 'rgba(255,225,162,0.18)' : 'rgba(24,53,46,0.1)' }}
                        >
                          <Icon name="Check" size={11} style={{ color: level.dark ? '#ffe1a2' : '#18352e' }} />
                        </div>
                        <span className="text-body-lg" style={{ color: textMuted }}>{p}</span>
                      </li>
                    ))}
                  </ul>
                  <div style={{ height: '1px', backgroundColor: level.dark ? 'rgba(255,255,255,0.1)' : '#e8f0f1', marginBottom: '20px' }} />
                  <p className="text-body-lg" style={{ color: textMuted }}>{level.cta}</p>
                </div>

                {/* Right: posts */}
                <div>
                  <p className="font-bold text-xs uppercase tracking-wider mb-5" style={{ color: labelColor }}>
                    Начните с материалов в канале:
                  </p>
                  <div className="space-y-3 mb-5">
                    {level.posts.map((post, i) => (
                      <a
                        key={i}
                        href="https://t.me/+Oikjo-gGhtxiZjZi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-4 rounded-xl p-4 border transition-all duration-200 group"
                        style={{ backgroundColor: postBg, borderColor: postBorder }}
                        onMouseEnter={e => (e.currentTarget.style.backgroundColor = postHover)}
                        onMouseLeave={e => (e.currentTarget.style.backgroundColor = postBg)}
                      >
                        <div
                          className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-sm"
                          style={{ backgroundColor: level.dark ? 'rgba(255,225,162,0.18)' : 'rgba(24,53,46,0.08)', color: level.dark ? '#ffe1a2' : '#18352e' }}
                        >
                          {i + 1}
                        </div>
                        <span className="text-body-lg flex-1" style={{ color: textMuted }}>{post}</span>
                        <Icon name="ArrowRight" size={15} style={{ color: level.dark ? 'rgba(255,225,162,0.5)' : 'rgba(24,53,46,0.3)', flexShrink: 0, marginTop: '3px' }} />
                      </a>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="https://t.me/+Oikjo-gGhtxiZjZi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 flex-1 font-bold px-6 py-4 rounded-xl transition-all duration-200 hover:opacity-90"
                      style={{ backgroundColor: btnBg, color: btnColor, fontSize: '0.95rem' }}
                    >
                      <Icon name="Send" size={15} />
                      Перейти в TG-канал
                    </a>
                    <a
                      href="https://t.me/+Oikjo-gGhtxiZjZi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 flex-1 font-bold px-6 py-4 rounded-xl border-2 transition-all duration-200 hover:opacity-80"
                      style={{ borderColor: btnBg, color: btnBg, backgroundColor: 'transparent', fontSize: '0.95rem', ...(level.dark ? { borderColor: '#ffe1a2', color: '#ffe1a2' } : { borderColor: '#18352e', color: '#18352e' }) }}
                    >
                      <Icon name="Zap" size={15} />
                      Перейти в Max
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