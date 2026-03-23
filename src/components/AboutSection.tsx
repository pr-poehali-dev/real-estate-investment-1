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
    <section className="py-20 md:py-28 bg-[#f7f3ef] texture-bg">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="section-divider" />
              <span className="text-[#9d8857] font-sans text-sm tracking-[0.15em] uppercase">О нас</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-[#2a2218] font-light leading-tight mb-6">
              Команда экспертов с
              <span className="italic text-[#9d8857]"> 10-летним опытом</span>
            </h2>
            <p className="font-sans text-[#2a2218]/70 text-sm leading-relaxed mb-5">
              Мы — команда экспертов по инвестициям в недвижимость на юге России. Помогаем нашим клиентам создать актив, который приносит стабильный доход с минимальными рисками.
            </p>
            <p className="font-sans text-[#2a2218]/70 text-sm leading-relaxed mb-5">
              Осуществляем полное сопровождение на каждом этапе: от подбора объекта до организации сдачи в аренду в самых перспективных курортных локациях.
            </p>
            <p className="font-sans text-[#2a2218]/80 text-sm leading-relaxed font-medium bg-white rounded-xl p-4 border border-[#e3dad2]">
              Инвестиции в курортную недвижимость — это не просто покупка, а стратегия по созданию капитала и пассивного дохода. В канале делимся цифрами, инсайдами и лотами, которые не найти в открытых источниках.
            </p>
          </div>

          {/* Right — locations */}
          <div className="bg-white rounded-2xl p-8 border border-[#e3dad2]">
            <div className="flex items-center gap-3 mb-6">
              <Icon name="MapPin" size={18} className="text-[#9d8857]" />
              <span className="font-sans text-sm text-[#2a2218]/70 font-medium">Наши локации</span>
            </div>
            <div className="space-y-3">
              {locations.map((loc) => (
                <div key={loc} className="flex items-center gap-3 py-2.5 border-b border-[#e3dad2]/60 last:border-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#9d8857] flex-shrink-0" />
                  <span className="font-sans text-[#2a2218]/80 text-sm">{loc}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              {[
                { value: '10+', label: 'лет на рынке' },
                { value: '200+', label: 'сделок закрыто' },
              ].map((s) => (
                <div key={s.label} className="bg-[#f7f3ef] rounded-xl p-4 text-center">
                  <div className="font-serif text-[#9d8857] text-2xl">{s.value}</div>
                  <div className="font-sans text-[#2a2218]/55 text-xs mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bonuses */}
        <div className="bg-[#2a2218] rounded-2xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h3 className="font-serif text-3xl md:text-4xl text-white font-light mb-3">
              Материалы в подарок
            </h3>
            <p className="font-sans text-white/50 text-sm">Бесплатно при подписке на канал</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {bonuses.map((b) => (
              <div key={b.num} className="bg-white/6 rounded-xl p-6 border border-white/10 hover:border-[#9d8857]/40 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#9d8857]/20 flex items-center justify-center">
                    <Icon name={b.icon} size={18} className="text-[#9d8857]" />
                  </div>
                  <span className="font-serif text-[#9d8857] text-sm">+{b.num}</span>
                </div>
                <h4 className="font-sans text-white/85 text-sm leading-relaxed mb-3">{b.title}</h4>
                <span className="font-sans text-white/35 text-xs bg-white/8 px-3 py-1 rounded-full">{b.who}</span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a
              href="https://t.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#9d8857] text-white font-sans text-sm px-10 py-4 rounded-full hover:bg-[#b8a06e] transition-colors duration-300 shadow-lg"
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
