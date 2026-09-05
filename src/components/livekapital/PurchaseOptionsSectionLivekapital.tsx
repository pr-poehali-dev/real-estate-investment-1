import Icon from '@/components/ui/icon';
import { reachGoal } from '@/lib/metrika';

const TELEGRAM_URL = 'https://max.ru/channel_ybk';

const options = [
  {
    img: 'https://cdn.poehali.dev/projects/f9871ff2-932e-47eb-b9a4-ce2b9c4f26a9/files/5f5f3b14-f64b-4450-a9c5-be720855f1d0.jpg',
    icon: 'Home',
    title: 'Квартира под семейную ипотеку',
    price: 'от 9 млн ₽',
    terms: 'первый взнос от 3 млн ₽',
    text: 'Покупка квартиры для личного пользования и пассивного дохода. Подходит для тех, кто хочет совмещать отдых у моря с сдачей в аренду.',
  },
  {
    img: 'https://cdn.poehali.dev/projects/f9871ff2-932e-47eb-b9a4-ce2b9c4f26a9/files/11d4c309-7686-4107-a878-4c9e687b96f2.jpg',
    icon: 'KeyRound',
    title: 'Квартира под самостоятельное управление',
    price: 'от 9 млн ₽',
    terms: 'рассрочка до 3 лет, первый взнос от 3 млн ₽',
    text: 'Покупка квартиры, которую вы сдаёте сами (посуточно / долгосрочно) или используете для себя. Можно подключить УК для управления — мы подскажем проверенных.',
  },
  {
    img: 'https://cdn.poehali.dev/projects/f9871ff2-932e-47eb-b9a4-ce2b9c4f26a9/files/e87e5d8a-b330-41c8-adc6-ec0b59837e2e.jpg',
    icon: 'CalendarClock',
    title: 'Апартаменты со свободным графиком использования',
    price: 'от 10 млн ₽',
    terms: 'рассрочка до 3 лет',
    text: 'Покупка апартаментов в комплексе. Вы сами решаете, сколько дней жить. В остальное время объект сдаётся через управляющую компанию и приносит доход.',
  },
  {
    img: 'https://cdn.poehali.dev/projects/f9871ff2-932e-47eb-b9a4-ce2b9c4f26a9/files/3a4793e6-b1e9-4de1-b006-395db3932138.jpg',
    icon: 'Building2',
    title: 'Апартаменты с федеральным оператором',
    price: 'от 12 млн ₽',
    terms: 'рассрочка до 3 лет',
    text: 'Покупка апартаментов в сети федерального оператора. Личное использование — до 30 дней в году. Остальное время — стабильный пассивный доход по котловому методу (без риска простоя).',
  },
];

const PurchaseOptionsSectionLivekapital = () => {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12" style={{ backgroundColor: '#f9f8f9' }}>
      <div className="max-w-6xl mx-auto">
        <div className="reveal text-center mb-12">
          <div className="section-label justify-center">Форматы</div>
          <h2 className="text-heading" style={{ color: '#18352e' }}>
            Варианты покупки курортной недвижимости в Крыму
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {options.map((o, i) => (
            <div
              key={i}
              className={`reveal reveal-d${(i % 4) + 1} rounded-2xl overflow-hidden border transition-all duration-200 hover:shadow-lg flex flex-col`}
              style={{ backgroundColor: '#ffffff', borderColor: '#e8f0f1' }}
            >
              <div className="aspect-[16/9] overflow-hidden relative">
                <img src={o.img} alt={o.title} className="w-full h-full object-cover" />
                <div
                  className="absolute top-4 left-4 w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: '#ffe1a2' }}
                >
                  <Icon name={o.icon} size={20} style={{ color: '#18352e' }} />
                </div>
              </div>
              <div className="p-6 md:p-7 flex flex-col flex-1">
                <h3 className="font-bold mb-3" style={{ color: '#18352e', fontSize: '1.15rem' }}>
                  {o.title}
                </h3>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-4">
                  <span className="font-bold" style={{ color: '#c98a1f', fontSize: '1.15rem' }}>{o.price}</span>
                  <span
                    className="text-xs font-medium px-2.5 py-1 rounded-full"
                    style={{ backgroundColor: 'rgba(24,53,46,0.06)', color: '#18352e' }}
                  >
                    {o.terms}
                  </span>
                </div>
                <p className="text-body-lg flex-1" style={{ color: '#1a3336' }}>{o.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal flex justify-center mt-10">
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => reachGoal('variant_channel_click')}
            className="inline-flex items-center justify-center gap-2 font-bold px-8 py-4 rounded-lg transition-all duration-200 hover:opacity-90"
            style={{ backgroundColor: '#18352e', color: '#ffe1a2', fontSize: '0.95rem' }}
          >
            <Icon name="Send" size={16} />
            Подписаться на канал
          </a>
        </div>
      </div>
    </section>
  );
};

export default PurchaseOptionsSectionLivekapital;