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

const AboutSection = () => {
  return (
    <section>
      {/* About — white bg */}
      <div className="py-14 md:py-20 px-6 md:px-12" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left */}
            <div>
              <div className="section-label">О нас</div>
              <h2 className="text-heading mb-6" style={{ color: '#074952' }}>
                Команда экспертов с{' '}
                <span style={{ color: '#074952' }}>10-летним опытом</span>
              </h2>
              <p className="text-body-lg mb-4" style={{ color: '#5a7a7e' }}>
                Мы — команда экспертов по инвестициям в недвижимость на юге России. Помогаем нашим клиентам создать актив, который приносит стабильный доход с минимальными рисками.
              </p>
              <p className="text-body-lg mb-6" style={{ color: '#5a7a7e' }}>
                Осуществляем полное сопровождение на каждом этапе: от подбора объекта до организации сдачи в аренду в самых перспективных курортных локациях.
              </p>
              <div className="rounded-xl p-5 border-l-4" style={{ backgroundColor: '#f9f8f9', borderLeftColor: '#074952' }}>
                <p className="font-semibold text-body-lg" style={{ color: '#074952' }}>
                  Инвестиции в курортную недвижимость — это не просто покупка, а стратегия по созданию капитала и пассивного дохода. В канале делимся цифрами, инсайдами и лотами, которые не найти в открытых источниках.
                </p>
              </div>
            </div>

            {/* Right — locations */}
            <div className="rounded-2xl p-7 border-2" style={{ backgroundColor: '#f9f8f9', borderColor: '#e8f0f1' }}>
              <div className="flex items-center gap-3 mb-6 pb-5" style={{ borderBottom: '1px solid #e8f0f1' }}>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#074952' }}>
                  <Icon name="MapPin" size={16} style={{ color: '#ffe1a2' }} />
                </div>
                <span className="font-bold" style={{ color: '#074952', fontSize: '1rem' }}>Наши локации</span>
              </div>
              <div className="space-y-1 mb-6">
                {locations.map((loc) => (
                  <div key={loc} className="flex items-center gap-3 py-2.5" style={{ borderBottom: '1px solid #f0f4f4' }}>
                    <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#074952' }} />
                    <span className="font-medium text-body-lg" style={{ color: '#2d4a4d' }}>{loc}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '10+', label: 'лет на рынке' },
                  { value: '200+', label: 'сделок закрыто' },
                ].map((s) => (
                  <div key={s.label} className="rounded-xl p-4 text-center" style={{ backgroundColor: '#074952' }}>
                    <div className="font-extrabold" style={{ color: '#ffe1a2', fontSize: '1.8rem', fontFamily: 'Mulish, sans-serif' }}>{s.value}</div>
                    <div className="font-medium text-sm mt-1" style={{ color: 'rgba(255,255,255,0.6)' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bonuses — teal bg */}
      <div className="py-14 md:py-20 px-6 md:px-12" style={{ backgroundColor: '#074952' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div className="section-label-white justify-center">Материалы</div>
            <h3 className="text-heading" style={{ color: '#ffffff' }}>Что ещё важно знать?</h3>
            <p className="text-body-lg mt-3 max-w-sm mx-auto" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Рекомендуем ознакомиться с этими материалами, прежде чем принимать решение о покупке
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {bonuses.map((b) => (
              <div
                key={b.num}
                className="rounded-2xl p-6 border transition-all duration-200 hover:border-yellow-200/40"
                style={{ backgroundColor: 'rgba(255,255,255,0.07)', borderColor: 'rgba(255,225,162,0.18)' }}
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#ffe1a2' }}>
                    <Icon name={b.icon} size={18} style={{ color: '#074952' }} />
                  </div>
                  <span className="font-extrabold" style={{ color: 'rgba(255,225,162,0.25)', fontSize: '2rem', fontFamily: 'Mulish, sans-serif' }}>+{b.num}</span>
                </div>
                <h4 className="font-bold mb-3" style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.5' }}>{b.title}</h4>
                <span
                  className="font-bold text-sm px-3 py-1 rounded-full"
                  style={{ backgroundColor: 'rgba(255,225,162,0.15)', color: '#ffe1a2' }}
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
              className="inline-flex items-center gap-3 font-bold px-10 py-4 rounded-xl transition-all duration-200 hover:opacity-90"
              style={{ backgroundColor: '#ffe1a2', color: '#074952', fontSize: '0.95rem' }}
            >
              <Icon name="Send" size={16} />
              Перейти в TG-канал
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
