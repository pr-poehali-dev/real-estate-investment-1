import Icon from '@/components/ui/icon';

const items = [
  {
    icon: 'Building2',
    text: 'Для тех, кто планирует покупку курортной и туристической недвижимости в Крыму от 10 млн.р.',
  },
  {
    icon: 'Wallet',
    text: 'Для тех, кто хочет сформировать пассивный доход от недвижимости, полностью делегировав управление',
  },
  {
    icon: 'Umbrella',
    text: 'Для тех, кто хочет совмещать личное использование недвижимости и пассивный доход',
  },
];

const TargetAudienceSectionKurort = () => {
  return (
    <section className="relative pt-16 pb-16 md:pt-24 md:pb-24" style={{ backgroundColor: '#122720' }}>
      {/* Волна-разделитель со стороны Hero-блока */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none" style={{ transform: 'translateY(-99%)' }}>
        <svg viewBox="0 0 1440 100" className="w-full h-14 md:h-20" preserveAspectRatio="none">
          <path d="M0,30 C280,90 480,0 760,35 C1040,70 1220,10 1440,45 L1440,100 L0,100 Z" fill="#122720" />
        </svg>
      </div>
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="reveal text-center mb-12">
          <div className="section-label-white justify-center">Аудитория</div>
          <h2 className="text-heading" style={{ color: '#ffffff' }}>Для кого канал будет полезен</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className={`reveal reveal-d${i + 1} rounded-2xl p-8 border`}
              style={{ backgroundColor: 'rgba(255,255,255,0.07)', borderColor: 'rgba(255,225,162,0.18)' }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{ backgroundColor: '#ffe1a2' }}
              >
                <Icon name={item.icon} size={22} style={{ color: '#18352e' }} />
              </div>
              <p className="text-body-lg font-medium" style={{ color: '#ffffff', lineHeight: '1.6' }}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSectionKurort;
