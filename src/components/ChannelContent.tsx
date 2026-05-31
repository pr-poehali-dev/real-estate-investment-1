import Icon from '@/components/ui/icon';

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
    title: 'Эмоции, история, коллекция',
    items: [
      { icon: 'MapPin', text: 'Обзоры локаций с историей (ЮБК, Севастополь, Евпатория)' },
      { icon: 'Image', text: 'Виды, рендеры, атмосферные фото' },
      { icon: 'Star', text: '«Коллекционная недвижимость» — объекты как семейные реликвии' },
      { icon: 'AlertTriangle', text: 'Разбор проектов, где котловой метод убивает ценность вида' },
    ],
  },
];

const ChannelContent = () => {
  return (
    <section className="py-14 md:py-20 px-6 md:px-12" style={{ backgroundColor: '#f9f8f9' }}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="reveal text-center mb-12">
          <div className="section-label justify-center">Контент</div>
          <h2 className="text-heading" style={{ color: '#18352e' }}>
            Что вы получите в канале
          </h2>
        </div>

        {/* Two content blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {sections.map((section, idx) => (
            <div
              key={idx}
              className="reveal rounded-2xl p-8 border"
              style={{ backgroundColor: '#ffffff', borderColor: '#e8f0f1' }}
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

        {/* Bonus block */}
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

export default ChannelContent;
