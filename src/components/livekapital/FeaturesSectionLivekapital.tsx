import Icon from '@/components/ui/icon';

const features = [
  {
    icon: 'Landmark',
    title: 'История городов и районов',
    desc: 'Характер локации, который определяет её цену и душу.',
  },
  {
    icon: 'BarChart3',
    title: 'Разборы доходности',
    desc: 'Честные цифры: аренда, перепродажа, налоги, управление.',
  },
  {
    icon: 'FileCheck2',
    title: 'Конкретные офферы',
    desc: 'Готовые объекты с ценами, фото и полными расчётами.',
  },
  {
    icon: 'Video',
    title: 'Видео со строек',
    desc: 'Репортажи изнутри, чтобы вы видели всё своими глазами.',
  },
  {
    icon: 'KeyRound',
    title: 'Управление арендой',
    desc: 'Отельеры, УК, самостоятельное управление — что выгоднее и на каких условиях.',
  },
  {
    icon: 'ShieldAlert',
    title: 'Как отличить тренд от хайпа',
    desc: 'Чёткие критерии, чтобы не купить пустой шум вместо актива.',
  },
];

const checklist = [
  'Какие ЖК реально строятся, а какие — нет.',
  'Как выбрать район, который вырастет в цене.',
  'Какие застройщики надёжны, а кому доверять не стоит.',
  'Что будет с ценами после СВО и как считать доходность от аренды.',
];

const FeaturesSectionLivekapital = () => {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="reveal text-center mb-12">
          <h2 className="text-heading" style={{ color: '#18352e' }}>Что вас ждёт на канале</h2>
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

        <div
          className="reveal rounded-2xl p-8 border"
          style={{ backgroundColor: '#18352e', borderColor: '#18352e' }}
        >
          <p className="font-bold mb-5" style={{ color: '#ffe1a2', fontSize: '1.1rem' }}>
            А ещё в канале мы уже разобрали:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {checklist.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <div
                  className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: 'rgba(255,225,162,0.15)' }}
                >
                  <Icon name="Check" size={14} style={{ color: '#ffe1a2' }} />
                </div>
                <span className="text-body-lg" style={{ color: 'rgba(255,255,255,0.85)' }}>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSectionLivekapital;
