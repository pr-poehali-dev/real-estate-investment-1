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
    <section className="md:py-28 bg-cream texture-bg py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="section-divider" />
            <span className="text-[#9d8857] font-sans text-sm tracking-[0.15em] uppercase">Что вы получаете</span>
            <div className="w-14 h-0.5 bg-gradient-to-l from-[#9d8857] to-transparent" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-[#2a2218] font-light">Честный канал об инвестициях в недвижимость</h2>
          <p className="font-sans text-[#2a2218]/60 mt-4 text-base max-w-xl mx-auto">
            Только реальные цифры, проверенные кейсы и работающие стратегии
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl p-8 border border-[#e3dad2] hover:border-[#9d8857]/40 hover:shadow-xl transition-all duration-400"
            >
              <div className="w-12 h-12 rounded-xl bg-[#9d8857]/10 flex items-center justify-center mb-6 group-hover:bg-[#9d8857]/20 transition-colors duration-300">
                <Icon name={f.icon} size={22} className="text-[#9d8857]" />
              </div>
              <h3 className="font-serif text-xl text-[#2a2218] mb-3 font-light leading-snug">{f.title}</h3>
              <p className="font-sans text-[#2a2218]/60 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;