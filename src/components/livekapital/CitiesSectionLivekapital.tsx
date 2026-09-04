const belts = [
  {
    img: 'https://cdn.poehali.dev/projects/f9871ff2-932e-47eb-b9a4-ce2b9c4f26a9/files/356d9cbd-b87d-4c22-8cef-ff665300d0b1.jpg',
    name: 'Южный берег Крыма (ЮБК)',
    cities: 'Ялта, Алушта, Гурзуф, Форос',
    text: 'Статус, субтропики, лучшие виды. Самый тёплый и престижный пояс Крыма. Объекты — премиальные ЖК и апартаменты с видом на море.',
  },
  {
    img: 'https://cdn.poehali.dev/projects/f9871ff2-932e-47eb-b9a4-ce2b9c4f26a9/files/e19fe877-5a2d-4230-916e-f5daa376ec3c.jpg',
    name: 'Западный берег',
    cities: 'Евпатория, Саки, Черноморское',
    text: 'Песчаные пляжи, лечебные грязи, семейный отдых. Более доступный вход, мягкий климат, высокий туристический потенциал.',
  },
  {
    img: 'https://cdn.poehali.dev/projects/f9871ff2-932e-47eb-b9a4-ce2b9c4f26a9/files/be97f207-307f-4348-9f6a-c5a97a192195.jpg',
    name: 'Восточный берег',
    cities: 'Феодосия, Судак, Коктебель, Керчь',
    text: 'История, крепости, аутентичная атмосфера. Сочетание моря и степного воздуха. Растущий интерес инвесторов к новым проектам.',
  },
  {
    img: 'https://cdn.poehali.dev/projects/f9871ff2-932e-47eb-b9a4-ce2b9c4f26a9/files/70c799fb-b45a-4e31-ac4a-da0fa2d3a692.jpg',
    name: 'Юго-Западный Крым (Севастополь)',
    cities: 'Севастополь, Балаклава',
    text: 'Город-герой, морская столица, уникальные бухты. Статус, надёжность, порядок. Объекты — как для жизни, так и для инвестиций.',
  },
];

const CitiesSectionLivekapital = () => {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12" style={{ backgroundColor: '#f9f8f9' }}>
      <div className="max-w-6xl mx-auto">
        <div className="reveal text-center mb-12">
          <div className="section-label justify-center">География</div>
          <h2 className="text-heading mb-4" style={{ color: '#18352e' }}>Четыре пояса курортной недвижимости Крыма</h2>
          <p className="text-body-lg max-w-2xl mx-auto" style={{ color: '#1a3336' }}>
            Каждый пояс — свой климат, своя атмосфера и свои сценарии для жизни, отдыха и дохода. В канале разбираем объекты во всех четырёх направлениях.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          {belts.map((b, i) => (
            <div
              key={i}
              className={`reveal reveal-d${(i % 4) + 1} rounded-2xl overflow-hidden border transition-all duration-200 hover:shadow-lg`}
              style={{ backgroundColor: '#ffffff', borderColor: '#e8f0f1' }}
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img src={b.img} alt={b.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 md:p-7">
                <h3 className="font-bold mb-1" style={{ color: '#18352e', fontSize: '1.15rem' }}>{b.name}</h3>
                <p className="text-sm font-medium mb-3" style={{ color: '#c98a1f' }}>{b.cities}</p>
                <p className="text-body-lg" style={{ color: '#1a3336' }}>{b.text}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="reveal text-center text-body-lg font-medium" style={{ color: '#1a3336' }}>
          В канале — свежие объекты во всех четырёх поясах с ценами, фото и расчётами. Подписывайтесь, чтобы выбрать свой пояс.
        </p>
      </div>
    </section>
  );
};

export default CitiesSectionLivekapital;
