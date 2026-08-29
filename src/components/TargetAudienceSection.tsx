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

const TargetAudienceSection = () => {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: '#18352e' }}>
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="reveal text-center mb-12">
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

export default TargetAudienceSection;
