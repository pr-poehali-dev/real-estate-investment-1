import Icon from '@/components/ui/icon';

const features = [
  {
    icon: 'BarChart3',
    title: 'Аналитика объектов 2026',
    desc: 'Сравнительный анализ инвестиционной привлекательности разных апарт-комплексов и локаций Крыма',
  },
  {
    icon: 'Percent',
    title: 'Недвижимость для инвестиций и личного отдыха',
    desc: 'В каких районах и комплексах в Крыму купить недвижимость, чтобы совмещать личное использование и пассивный доход',
  },
  {
    icon: 'MessageCircle',
    title: 'Эксперты на связи',
    desc: 'Обеспечиваем профессиональный подбор объектов, реализуем проект под ключ. От покупки до сдачи в управление. Формируем стабильный доход и увеличение капитала без участия инвестора.',
  },
];

const sections = [
  {
    icon: 'BarChart2',
    title: 'Аналитика и цифры',
    items: [
      { icon: 'TrendingUp', text: 'Реальная доходность апартаментов в Крыму (без рекламных 20%)' },
      { icon: 'Search', text: 'Как проверить управляющую компанию отеля' },
      { icon: 'Receipt', text: 'Налоговые схемы: физлицо, ИП, ООО. Экономия до 29%' },
      { icon: 'Waves', text: 'Кейс: окупается ли переплата за вид на море?' },
    ],
  },
  {
    icon: 'Landmark',
    title: 'Три пояса доходности в Крыму',
    items: [
      { icon: 'Waves', text: 'ЮБК — Ялта и Алушта' },
      { icon: 'Sun', text: 'Западный берег — Евпатория' },
      { icon: 'Landmark', text: 'Город федерального значения — Севастополь' },
      { icon: 'BarChart2', text: 'Сравнение локаций и аналитика недвижимости' },
    ],
  },
  {
    icon: 'Building2',
    title: 'Экспертный разбор: инвестиции и управление',
    wide: true,
    items: [
      { icon: 'TrendingUp', text: 'Капитализация недвижимости в Крыму. На что обратить внимание, чтобы не потерять деньги?' },
      { icon: 'Volume2', text: 'Деньги любят тишину: как не отличить хайп от долгосрочного тренда?' },
      { icon: 'Building2', text: 'Отельные операторы. Чем отличается франшиза от прямого управления?' },
      { icon: 'Star', text: 'Отели 4* звезды — выбор инвесторов, кто смотрит на перспективы 5-10 лет' },
      { icon: 'CalendarClock', text: 'Какие концепции отелей работают на вас даже в низкий сезон' },
      { icon: 'AlertTriangle', text: 'Ловушка дисконта: почему «дешёвый» вход в проект на Юге — это очень дорогой способ потерять деньги' },
      { icon: 'Calculator', text: 'Окупаемость 7 лет недвижимости. Что скрывается за этой цифрой и как посчитать реальные цифры самому?' },
    ],
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="reveal text-center mb-12">
          <h2 className="text-heading" style={{ color: '#18352e' }}>Что вы узнаете в канале?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {features.map((f, i) => (
            <div
              key={i}
              className={`reveal reveal-d${i + 1} rounded-xl p-7 border-2 transition-all duration-200 hover:shadow-lg`}
              style={{ borderColor: '#e8f0f1', backgroundColor: '#f9f8f9' }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: '#18352e' }}
              >
                <Icon name={f.icon} size={22} style={{ color: '#ffe1a2' }} />
              </div>
              <h3 className="font-bold mb-3" style={{ color: '#18352e', fontSize: '1.15rem' }}>{f.title}</h3>
              <p className="text-body-lg" style={{ color: '#1a3336' }}>{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {sections.map((section, idx) => (
            <div
              key={idx}
              className={`reveal rounded-2xl p-8 border ${section.wide ? 'md:col-span-2' : ''}`}
              style={{ backgroundColor: '#f9f8f9', borderColor: '#e8f0f1' }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#18352e' }}
                >
                  <Icon name={section.icon} size={18} style={{ color: '#ffe1a2' }} />
                </div>
                <h3 className="font-bold" style={{ color: '#18352e', fontSize: '1.1rem' }}>
                  {section.title}
                </h3>
              </div>
              <ul className="space-y-4">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: '#f0f5f4' }}
                    >
                      <Icon name={item.icon} size={14} style={{ color: '#18352e' }} />
                    </div>
                    <span className="text-body-lg" style={{ color: '#1a3336' }}>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="reveal rounded-2xl p-8 border flex items-start gap-6"
          style={{ backgroundColor: '#18352e', borderColor: '#18352e' }}
        >
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: 'rgba(255,225,162,0.15)' }}
          >
            <Icon name="Gift" size={22} style={{ color: '#ffe1a2' }} />
          </div>
          <div>
            <p className="font-bold mb-2" style={{ color: '#ffe1a2', fontSize: '0.8rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Бонус сразу после подписки
            </p>
            <p className="font-bold mb-1" style={{ color: '#ffffff', fontSize: '1.1rem', lineHeight: '1.4' }}>
              Чек-лист «5 вопросов застройщику, которые не задают 90% инвесторов»
            </p>
            <p className="text-body-lg" style={{ color: 'rgba(255,255,255,0.7)' }}>
              И ответы, которые спасут ваши деньги.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;