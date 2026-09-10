import Icon from '@/components/ui/icon';
import { reachGoal } from '@/lib/metrika';

const TELEGRAM_URL = 'https://max.ru/channel_ybk';

const features = [
  {
    icon: 'Calculator',
    title: 'Реальная доходность',
    desc: 'Чистая прибыль с вычетом комиссий, налогов, коммуналки и амортизации. По каждому формату и локации.',
  },
  {
    icon: 'Building2',
    title: 'Форматы недвижимости',
    desc: 'Квартира, апартаменты, гостиничный номер: для кого, риски и как их минимизировать.',
  },
  {
    icon: 'MapPinned',
    title: 'Локации и их потенциал',
    desc: 'Где выше доходность, где статус, где лучше для семейного отдыха.',
  },
  {
    icon: 'Smartphone',
    title: 'Управление удалённо',
    desc: 'Как работают УК, как контролировать сдачу и получать отчёты.',
  },
  {
    icon: 'KeyRound',
    title: 'Что после покупки',
    desc: 'Приёмка, ремонт, меблировка, передача в управление: пошагово.',
  },
  {
    icon: 'FileBarChart',
    title: 'Только факты',
    desc: 'Статистика Росстата, данные по рынку и реальные расчёты. Без «воздушных» прогнозов.',
  },
];

const FeaturesSectionMax = () => {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="reveal text-center mb-12">
          <h2 className="text-heading" style={{ color: '#18352e' }}>
            На канале разбираем то, о чём молчат застройщики
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {features.map((f, i) => (
            <div
              key={i}
              className={`reveal reveal-d${(i % 4) + 1} rounded-xl p-7 border-2 transition-all duration-200 hover:shadow-lg`}
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

        <p className="reveal text-center font-bold mb-10" style={{ color: '#18352e', fontSize: '1.05rem' }}>
          Экспертно, но без сложных терминов. Для новичков и опытных инвесторов.
        </p>

        <div className="reveal flex justify-center">
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => reachGoal('crimea_max_features_click')}
            className="inline-flex items-center justify-center gap-2 font-bold px-8 py-4 rounded-lg transition-all duration-200 hover:opacity-90"
            style={{ backgroundColor: '#ffe1a2', color: '#18352e', fontSize: '0.95rem' }}
          >
            <Icon name="Send" size={16} />
            Подписаться на канал
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSectionMax;