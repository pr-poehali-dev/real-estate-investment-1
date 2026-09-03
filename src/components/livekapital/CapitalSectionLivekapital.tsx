import Icon from '@/components/ui/icon';

const items = [
  { icon: 'TrendingUp', title: 'Финансовый', text: 'рост цены, доходность' },
  { icon: 'HeartHandshake', title: 'Эмоциональный', text: 'место силы, покой' },
  { icon: 'Crown', title: 'Социальный', text: 'статус, престиж' },
  { icon: 'Landmark', title: 'Культурный', text: 'история, наследие' },
  { icon: 'Clock', title: 'Временной', text: 'жить здесь, а не владеть' },
];

const CapitalSectionLivekapital = () => {
  return (
    <section className="relative pt-16 pb-16 md:pt-24 md:pb-24" style={{ backgroundColor: '#122720' }}>
      {/* Волна-разделитель со стороны Hero-блока */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none" style={{ transform: 'translateY(-99%)' }}>
        <svg viewBox="0 0 1440 100" className="w-full h-14 md:h-20" preserveAspectRatio="none">
          <path d="M0,30 C280,90 480,0 760,35 C1040,70 1220,10 1440,45 L1440,100 L0,100 Z" fill="#122720" />
        </svg>
      </div>
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="reveal text-center mb-6">
          <div className="section-label-white justify-center">Капитал</div>
          <h2 className="text-heading mb-4" style={{ color: '#ffffff' }}>
            Канал для тех, кто вкладывает в свой капитал
          </h2>
          <p className="text-body-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Капитал — это не только деньги. Это статус, впечатления и право жить в месте, которое выбирают сердцем.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-5 mt-10 mb-8">
          {items.map((item, i) => (
            <div
              key={i}
              className={`reveal reveal-d${(i % 4) + 1} rounded-2xl p-6 border text-center flex flex-col items-center`}
              style={{ backgroundColor: 'rgba(255,255,255,0.07)', borderColor: 'rgba(255,225,162,0.18)' }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: '#ffe1a2' }}
              >
                <Icon name={item.icon} size={22} style={{ color: '#18352e' }} />
              </div>
              <h3 className="font-bold mb-1" style={{ color: '#ffffff', fontSize: '1rem' }}>{item.title}</h3>
              <p className="text-body-lg" style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.9rem' }}>{item.text}</p>
            </div>
          ))}
        </div>

        <p className="reveal text-center font-bold" style={{ color: '#ffe1a2', fontSize: '1.1rem' }}>
          Именно такие объекты мы ищем и показываем.
        </p>
      </div>
    </section>
  );
};

export default CapitalSectionLivekapital;
