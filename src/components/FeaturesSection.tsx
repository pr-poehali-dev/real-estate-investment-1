import Icon from '@/components/ui/icon';

const features = [
  {
    icon: 'BarChart3',
    title: 'Аналитика объектов 2026',
    desc: 'Анализ локаций, застройщиков. Сравнение инвестиционной привлекательности объектов на юге России.',
  },
  {
    icon: 'Percent',
    title: 'Налоговые лайфхаки',
    desc: 'Легальные способы оптимизации налогов при покупке инвестиционной недвижимости. Экономия до 29%.',
  },
  {
    icon: 'MessageCircle',
    title: 'Эксперты на связи',
    desc: 'Задавайте вопросы в комментариях или сообщениях канала. Отвечаем на каждый.',
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <div className="section-label justify-center">Что вы получаете</div>
          <h2 className="text-heading" style={{ color: '#18352e' }}>
            Честный канал об инвестициях<br className="hidden md:block" /> в недвижимость
          </h2>
          <p className="text-body-lg mt-4 max-w-md mx-auto" style={{ color: '#1a2e30' }}>
            Только реальные цифры, проверенные кейсы и работающие стратегии
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="rounded-xl p-7 border-2 transition-all duration-200 hover:shadow-lg"
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
      </div>
    </section>
  );
};

export default FeaturesSection;