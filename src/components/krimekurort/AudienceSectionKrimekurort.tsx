import Icon from '@/components/ui/icon';

const items = [
  { icon: 'Building2', text: 'Планируете купить курортную недвижимость в Крыму от 6 млн — для жизни у моря или сезонного отдыха' },
  { icon: 'Wallet', text: 'Хотите получать пассивный доход, полностью делегировав управление' },
  { icon: 'Umbrella', text: 'Хотите совмещать личное использование и сдачу в аренду' },
];

const AudienceSectionKrimekurort = () => {
  return (
    <section className="relative pt-16 pb-16 md:pt-24 md:pb-24" style={{ backgroundColor: '#122720' }}>
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="reveal text-center mb-12">
          <div className="section-label-white justify-center">Аудитория</div>
          <h2 className="text-heading mb-3" style={{ color: '#ffffff' }}>Для кого канал будет полезен</h2>
          <p className="text-body-lg" style={{ color: 'rgba(255,255,255,0.8)' }}>Канал будет полезен, если вы:</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className={`reveal reveal-d${i + 1} rounded-2xl p-8 border`}
              style={{ backgroundColor: 'rgba(255,255,255,0.07)', borderColor: 'rgba(255,225,162,0.18)' }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: '#ffe1a2' }}>
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

export default AudienceSectionKrimekurort;
