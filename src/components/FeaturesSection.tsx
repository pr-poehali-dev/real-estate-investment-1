import Icon from '@/components/ui/icon';

const features = [
  {
    icon: 'BarChart3',
    num: '01',
    title: 'Аналитика объектов 2026',
    desc: 'Анализ локаций, застройщиков. Сравнение инвестиционной привлекательности объектов на юге России.',
  },
  {
    icon: 'Percent',
    num: '02',
    title: 'Налоговые лайфхаки',
    desc: 'Легальные способы оптимизации налогов при покупке инвестиционной недвижимости. Экономия до 29%.',
  },
  {
    icon: 'MessageCircle',
    num: '03',
    title: 'Эксперты на связи',
    desc: 'Задавайте вопросы в комментариях или сообщениях канала. Отвечаем на каждый.',
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-28 md:py-36 texture-bg" style={{ backgroundColor: '#0f0e0c' }}>
      {/* Top border */}
      <div className="mb-20 md:mb-28">
        <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(201,169,110,0.25), transparent)' }} />
      </div>

      <div className="max-w-6xl mx-auto px-8 md:px-16">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div style={{ width: '32px', height: '1px', backgroundColor: '#c9a96e' }} />
            <span className="font-sans text-xs tracking-[0.25em] uppercase" style={{ color: '#c9a96e' }}>Что вы получаете</span>
            <div style={{ width: '32px', height: '1px', backgroundColor: '#c9a96e' }} />
          </div>
          <h2 className="font-serif font-light mb-5" style={{ color: '#f0e6d0', fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
            Честный канал об инвестициях
            <br />
            <span className="italic" style={{ color: '#c9a96e' }}>в недвижимость</span>
          </h2>
          <p className="font-sans font-light max-w-md mx-auto" style={{ color: 'rgba(232,220,200,0.5)', fontSize: '0.9rem', lineHeight: '1.8' }}>
            Только реальные цифры, проверенные кейсы и работающие стратегии
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ backgroundColor: 'rgba(201,169,110,0.12)' }}>
          {features.map((f, i) => (
            <div
              key={i}
              className="group p-10 transition-all duration-500"
              style={{ backgroundColor: '#0f0e0c' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#141210')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#0f0e0c')}
            >
              {/* Number */}
              <div className="font-serif mb-8" style={{ color: 'rgba(201,169,110,0.15)', fontSize: '4rem', lineHeight: '1' }}>
                {f.num}
              </div>

              {/* Icon */}
              <div className="mb-6 w-10 h-10 flex items-center justify-center border" style={{ borderColor: 'rgba(201,169,110,0.25)' }}>
                <Icon name={f.icon} size={18} style={{ color: '#c9a96e' }} />
              </div>

              <h3 className="font-serif font-light mb-4" style={{ color: '#f0e6d0', fontSize: '1.4rem', lineHeight: '1.3' }}>
                {f.title}
              </h3>
              <p className="font-sans font-light" style={{ color: 'rgba(232,220,200,0.45)', fontSize: '0.85rem', lineHeight: '1.8' }}>
                {f.desc}
              </p>

              {/* Bottom accent line */}
              <div
                className="mt-8 transition-all duration-500"
                style={{ height: '1px', backgroundColor: 'rgba(201,169,110,0)', width: '0' }}
                ref={el => {
                  if (!el) return;
                  const parent = el.closest('.group');
                  if (parent) {
                    parent.addEventListener('mouseenter', () => {
                      el.style.backgroundColor = 'rgba(201,169,110,0.5)';
                      el.style.width = '40px';
                    });
                    parent.addEventListener('mouseleave', () => {
                      el.style.backgroundColor = 'rgba(201,169,110,0)';
                      el.style.width = '0';
                    });
                  }
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom border */}
      <div className="mt-20 md:mt-28">
        <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(201,169,110,0.25), transparent)' }} />
      </div>
    </section>
  );
};

export default FeaturesSection;
