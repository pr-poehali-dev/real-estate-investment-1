import Icon from '@/components/ui/icon';

const locations = [
  'Краснодар', 'Сочи', 'Анапа', 'Южный берег Крыма',
  'Севастополь', 'Горнолыжные курорты',
];

const bonuses = [
  {
    num: '01',
    title: 'Чек-лист «5 шагов к первой инвестиционной квартире»',
    who: 'Для начинающих',
    icon: 'ListChecks',
  },
  {
    num: '02',
    title: 'Сравнение доходности: квартира vs коммерция vs отель',
    who: 'Для опытных',
    icon: 'BarChart2',
  },
  {
    num: '03',
    title: 'Как сэкономить на налогах при покупке отельного номера',
    who: 'Для крупных инвесторов',
    icon: 'Receipt',
  },
];

const GOLD = '#c9a96e';
const DARK_BG = '#0d0d0b';
const SURFACE = '#141210';
const SURFACE2 = '#1c1916';
const TEXT = '#f0e6d0';
const TEXT_MUTED = 'rgba(232,220,200,0.5)';
const TEXT_DIM = 'rgba(232,220,200,0.3)';
const BORDER = 'rgba(201,169,110,0.18)';

const AboutSection = () => {
  return (
    <section className="py-24 md:py-32 texture-bg" style={{ backgroundColor: DARK_BG }}>
      <div className="max-w-6xl mx-auto px-8 md:px-16">

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          {/* Left */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div style={{ width: '32px', height: '1px', backgroundColor: GOLD }} />
              <span className="font-sans text-xs tracking-[0.25em] uppercase" style={{ color: GOLD }}>О нас</span>
            </div>
            <h2 className="font-serif font-light mb-8" style={{ color: TEXT, fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', lineHeight: '1.2' }}>
              Команда экспертов с
              <span className="italic" style={{ color: GOLD }}> 10-летним опытом</span>
            </h2>
            <p className="font-sans font-light mb-5" style={{ color: TEXT_MUTED, fontSize: '0.9rem', lineHeight: '1.8' }}>
              Мы — команда экспертов по инвестициям в недвижимость на юге России. Помогаем нашим клиентам создать актив, который приносит стабильный доход с минимальными рисками.
            </p>
            <p className="font-sans font-light mb-8" style={{ color: TEXT_MUTED, fontSize: '0.9rem', lineHeight: '1.8' }}>
              Осуществляем полное сопровождение на каждом этапе: от подбора объекта до организации сдачи в аренду в самых перспективных курортных локациях.
            </p>
            <div className="p-6 border" style={{ borderColor: BORDER, backgroundColor: SURFACE }}>
              <div className="mb-3" style={{ width: '20px', height: '1px', backgroundColor: GOLD }} />
              <p className="font-serif font-light italic" style={{ color: TEXT, fontSize: '1.05rem', lineHeight: '1.7' }}>
                Инвестиции в курортную недвижимость — это не просто покупка, а стратегия по созданию капитала и пассивного дохода.
              </p>
              <p className="font-sans font-light mt-4" style={{ color: TEXT_MUTED, fontSize: '0.8rem', lineHeight: '1.7' }}>
                В канале делимся цифрами, инсайдами и лотами, которые не найти в открытых источниках.
              </p>
            </div>
          </div>

          {/* Right — locations */}
          <div className="p-8 border" style={{ borderColor: BORDER, backgroundColor: SURFACE }}>
            <div className="flex items-center gap-3 mb-8 pb-6" style={{ borderBottom: `1px solid ${BORDER}` }}>
              <Icon name="MapPin" size={14} style={{ color: GOLD }} />
              <span className="font-sans text-xs tracking-[0.2em] uppercase" style={{ color: TEXT_MUTED }}>Наши локации</span>
            </div>
            <div className="space-y-1 mb-8">
              {locations.map((loc) => (
                <div key={loc} className="flex items-center gap-4 py-3" style={{ borderBottom: `1px solid rgba(201,169,110,0.08)` }}>
                  <div style={{ width: '3px', height: '3px', backgroundColor: GOLD, borderRadius: '50%', flexShrink: 0 }} />
                  <span className="font-sans font-light" style={{ color: TEXT_MUTED, fontSize: '0.9rem' }}>{loc}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '10+', label: 'лет на рынке' },
                { value: '200+', label: 'сделок закрыто' },
              ].map((s) => (
                <div key={s.label} className="p-5 text-center border" style={{ borderColor: BORDER, backgroundColor: SURFACE2 }}>
                  <div className="font-serif" style={{ color: GOLD, fontSize: '2rem' }}>{s.value}</div>
                  <div className="font-sans text-xs mt-2 tracking-wider" style={{ color: TEXT_DIM, textTransform: 'uppercase' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Separator */}
        <div style={{ height: '1px', background: `linear-gradient(90deg, transparent, ${GOLD}30, transparent)`, marginBottom: '64px' }} />

        {/* Bonuses */}
        <div>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div style={{ width: '32px', height: '1px', backgroundColor: GOLD }} />
              <span className="font-sans text-xs tracking-[0.25em] uppercase" style={{ color: GOLD }}>Материалы</span>
              <div style={{ width: '32px', height: '1px', backgroundColor: GOLD }} />
            </div>
            <h3 className="font-serif font-light mb-4" style={{ color: TEXT, fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
              Что ещё важно знать?
            </h3>
            <p className="font-sans font-light max-w-sm mx-auto" style={{ color: TEXT_MUTED, fontSize: '0.85rem', lineHeight: '1.8' }}>
              Рекомендуем ознакомиться с этими материалами, прежде чем принимать решение о покупке
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px mb-12" style={{ backgroundColor: BORDER }}>
            {bonuses.map((b) => (
              <div
                key={b.num}
                className="p-8 transition-all duration-300 group"
                style={{ backgroundColor: SURFACE }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = SURFACE2)}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = SURFACE)}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-9 h-9 flex items-center justify-center border" style={{ borderColor: `${GOLD}30` }}>
                    <Icon name={b.icon} size={15} style={{ color: GOLD }} />
                  </div>
                  <span className="font-serif" style={{ color: `${GOLD}40`, fontSize: '2.5rem', lineHeight: '1' }}>
                    +{b.num}
                  </span>
                </div>
                <h4 className="font-sans font-light mb-4" style={{ color: TEXT, fontSize: '0.9rem', lineHeight: '1.7' }}>
                  {b.title}
                </h4>
                <span
                  className="font-sans text-xs px-3 py-1 tracking-wider"
                  style={{ color: GOLD, border: `1px solid ${GOLD}30`, textTransform: 'uppercase', fontSize: '0.65rem', letterSpacing: '0.15em' }}
                >
                  {b.who}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://t.me/+Oikjo-gGhtxiZjZi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-sans text-xs tracking-[0.15em] uppercase px-12 py-4 transition-all duration-300"
              style={{ backgroundColor: GOLD, color: DARK_BG, letterSpacing: '0.12em' }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              <Icon name="Send" size={13} />
              Перейти в TG-канал
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
