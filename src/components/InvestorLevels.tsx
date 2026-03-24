import Icon from '@/components/ui/icon';

const levels = [
  {
    num: '01',
    tag: 'Начинающие',
    budget: 'Бюджет 1–15 млн ₽',
    icon: 'Sprout',
    accentColor: '#c9a96e',
    bgColor: '#0f0e0c',
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
    accentColor: '#7aaa8a',
    bgColor: '#0c100d',
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
    accentColor: '#c9a96e',
    bgColor: '#0d0b08',
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
      <div className="py-24 md:py-32 px-8 md:px-16 texture-dots" style={{ backgroundColor: '#0d0d0b' }}>
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div style={{ width: '32px', height: '1px', backgroundColor: '#c9a96e' }} />
            <span className="font-sans text-xs tracking-[0.25em] uppercase" style={{ color: '#c9a96e' }}>Кому будет полезен канал</span>
            <div style={{ width: '32px', height: '1px', backgroundColor: '#c9a96e' }} />
          </div>
          <h2 className="font-serif font-light" style={{ color: '#f0e6d0', fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: '1.2' }}>
            Сообщество для тех, кто хочет
            <br />
            <span className="italic" style={{ color: '#c9a96e' }}>сохранить и приумножить капитал</span>
          </h2>
          <p className="font-sans font-light mt-5 max-w-md mx-auto" style={{ color: 'rgba(232,220,200,0.45)', fontSize: '0.85rem', lineHeight: '1.8' }}>
            На квартирах, коммерции и отелях в Сочи, Краснодаре, Анапе и Крыму
          </p>
        </div>
      </div>

      {/* Three level blocks */}
      {levels.map((level, idx) => (
        <div key={idx}>
          {/* Separator */}
          <div style={{ height: '1px', background: `linear-gradient(90deg, transparent, ${level.accentColor}40, transparent)` }} />

          <div className="py-16 md:py-20 px-8 md:px-16" style={{ backgroundColor: level.bgColor }}>
            <div className="max-w-6xl mx-auto">

              {/* Level header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-10">
                <div className="flex items-start gap-6">
                  {/* Big number */}
                  <span
                    className="font-serif leading-none select-none flex-shrink-0"
                    style={{ color: level.accentColor, opacity: 0.12, fontSize: '5rem', lineHeight: '1' }}
                  >
                    {level.num}
                  </span>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name={level.icon} size={14} style={{ color: level.accentColor }} />
                      <span
                        className="font-sans text-xs tracking-[0.2em] uppercase"
                        style={{ color: level.accentColor }}
                      >
                        {level.tag}
                      </span>
                    </div>
                    <h3
                      className="font-serif font-light"
                      style={{ color: '#f0e6d0', fontSize: 'clamp(1.4rem, 3vw, 2.2rem)', lineHeight: '1.2' }}
                    >
                      {level.headline}
                    </h3>
                  </div>
                </div>

                {/* Budget pill */}
                <div
                  className="font-sans text-xs px-5 py-2 flex-shrink-0 self-start sm:self-center"
                  style={{
                    border: `1px solid ${level.accentColor}50`,
                    color: level.accentColor,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}
                >
                  {level.budget}
                </div>
              </div>

              {/* Content grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left: pains + cta */}
                <div
                  className="p-8 border"
                  style={{ borderColor: `${level.accentColor}18`, backgroundColor: 'rgba(255,255,255,0.02)' }}
                >
                  <p
                    className="font-sans text-xs tracking-[0.2em] uppercase mb-6"
                    style={{ color: `${level.accentColor}80` }}
                  >
                    Это про вас?
                  </p>
                  <ul className="space-y-4 mb-8">
                    {level.pains.map((p, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <div
                          className="flex-shrink-0 mt-1.5"
                          style={{ width: '4px', height: '4px', backgroundColor: level.accentColor, borderRadius: '50%' }}
                        />
                        <span
                          className="font-sans font-light"
                          style={{ color: 'rgba(232,220,200,0.65)', fontSize: '0.9rem', lineHeight: '1.7' }}
                        >
                          {p}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div style={{ height: '1px', backgroundColor: `${level.accentColor}15`, marginBottom: '24px' }} />
                  <p
                    className="font-sans font-light"
                    style={{ color: 'rgba(232,220,200,0.55)', fontSize: '0.85rem', lineHeight: '1.8' }}
                  >
                    {level.cta}
                  </p>
                </div>

                {/* Right: posts */}
                <div>
                  <p
                    className="font-sans text-xs tracking-[0.2em] uppercase mb-6"
                    style={{ color: `${level.accentColor}80` }}
                  >
                    Начните с материалов в канале:
                  </p>
                  <div className="space-y-3">
                    {level.posts.map((post, i) => (
                      <a
                        key={i}
                        href="https://t.me/+Oikjo-gGhtxiZjZi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-5 p-5 border transition-all duration-300 group"
                        style={{ borderColor: `${level.accentColor}18`, backgroundColor: 'transparent' }}
                        onMouseEnter={e => {
                          e.currentTarget.style.borderColor = `${level.accentColor}45`;
                          e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.02)';
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.borderColor = `${level.accentColor}18`;
                          e.currentTarget.style.backgroundColor = 'transparent';
                        }}
                      >
                        <span
                          className="font-serif flex-shrink-0 leading-none"
                          style={{ color: level.accentColor, fontSize: '1.1rem', opacity: 0.6, marginTop: '2px' }}
                        >
                          {i + 1}
                        </span>
                        <span
                          className="font-sans font-light flex-1"
                          style={{ color: 'rgba(232,220,200,0.6)', fontSize: '0.85rem', lineHeight: '1.7' }}
                        >
                          {post}
                        </span>
                        <Icon
                          name="ArrowRight"
                          size={13}
                          className="flex-shrink-0 mt-1 opacity-0 group-hover:opacity-60 transition-opacity"
                          style={{ color: level.accentColor }}
                        />
                      </a>
                    ))}
                  </div>

                  <a
                    href="https://t.me/+Oikjo-gGhtxiZjZi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full mt-6 font-sans text-xs tracking-[0.15em] uppercase px-8 py-4 transition-all duration-300"
                    style={{ backgroundColor: level.accentColor, color: '#0d0d0b', letterSpacing: '0.12em' }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
                    onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                  >
                    Перейти в TG-канал
                    <Icon name="ArrowRight" size={13} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default InvestorLevels;
