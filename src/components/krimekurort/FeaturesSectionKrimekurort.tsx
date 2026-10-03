import Icon from '@/components/ui/icon';
import ButtonsKrimekurort from './ButtonsKrimekurort';

const items = [
  { icon: 'MapPin', title: 'Разборы курортных локаций Крыма', text: 'Какие лучше подходят для жизни, какие для отдыха, а какие для инвестиций и пассивного дохода.' },
  { icon: 'Building2', title: 'Модели управления недвижимостью', text: 'Самостоятельная сдача, УК, котловой метод, федеральный оператор — что выбрать именно вам. Просто и понятно о моделях заработка.' },
  { icon: 'AlertTriangle', title: 'Ловушки хайпа', text: 'Научитесь отличать хайп от долгосрочных трендов. Защитите свои нервы и деньги от необдуманных вложений.' },
  { icon: 'MessageCircle', title: 'Ответы на вопросы', text: 'Задайте свои вопросы экспертам в чате. Читайте ответы на вопросы других подписчиков.' },
  { icon: 'Users', title: 'Нетворкинг', text: 'Общение с единомышленниками, которые планируют или уже купили курортную недвижимость в Крыму.' },
];

const FeaturesSectionKrimekurort = () => {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="reveal text-center mb-12">
          <h2 className="text-heading" style={{ color: '#18352e' }}>Что вас ждёт внутри сообщества</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {items.map((f, i) => (
            <div
              key={i}
              className="reveal rounded-xl p-7 border-2"
              style={{ borderColor: '#e8f0f1', backgroundColor: '#f9f8f9' }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: '#18352e' }}>
                <Icon name={f.icon} size={22} style={{ color: '#ffe1a2' }} />
              </div>
              <h3 className="font-bold mb-3" style={{ color: '#18352e', fontSize: '1.15rem' }}>{f.title}</h3>
              <p className="text-body-lg" style={{ color: '#1a3336' }}>{f.text}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <ButtonsKrimekurort prefix="block2" />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSectionKrimekurort;
