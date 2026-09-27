import Icon from '@/components/ui/icon';
import { reachGoal } from '@/lib/metrika';
import purchaseOption1 from '@/assets/livekapital/purchase-option-1.jpg';
import purchaseOption2 from '@/assets/livekapital/purchase-option-2.jpg';
import purchaseOption3 from '@/assets/livekapital/purchase-option-3.jpg';
import purchaseOption4 from '@/assets/livekapital/purchase-option-4.jpg';

const TELEGRAM_URL = 'https://max.ru/channel_ybk';

const options = [
  {
    img: purchaseOption1,
    imgFit: 'contain' as const,
    icon: 'Home',
    title: 'Квартира под семейную ипотеку',
    price: 'от 6 млн ₽',
    terms: 'первый взнос от 2 млн ₽',
    text: 'Покупка квартиры для личного пользования и пассивного дохода. Подходит для тех, кто хочет совмещать отдых у моря с сдачей в аренду.',
  },
  {
    img: purchaseOption2,
    icon: 'KeyRound',
    title: 'Квартира под самостоятельное управление',
    price: 'от 9 млн ₽',
    terms: 'рассрочка до 3 лет, первый взнос от 3 млн ₽',
    text: 'Покупка квартиры, которую вы сдаёте сами (посуточно / долгосрочно) или используете для себя. Можно подключить УК для управления — мы подскажем проверенных.',
  },
  {
    img: purchaseOption3,
    icon: 'CalendarClock',
    title: 'Апартаменты со свободным графиком использования',
    price: 'от 10 млн ₽',
    terms: 'рассрочка до 3 лет',
    text: 'Покупка апартаментов в комплексе. Вы сами решаете, сколько дней жить. В остальное время объект сдаётся через управляющую компанию и приносит доход.',
  },
  {
    img: purchaseOption4,
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
              <div
                className="aspect-[16/9] overflow-hidden relative"
                style={{ backgroundColor: '#e8f0f1' }}
              >
                {o.imgFit === 'contain' && (
                  <img
                    src={o.img}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-70"
                  />
                )}
                <img
                  src={o.img}
                  alt={o.title}
                  className={`relative w-full h-full ${o.imgFit === 'contain' ? 'object-contain' : 'object-cover'}`}
                />
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