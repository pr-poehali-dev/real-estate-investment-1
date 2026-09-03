const cities = [
  {
    img: 'https://cdn.poehali.dev/projects/f9871ff2-932e-47eb-b9a4-ce2b9c4f26a9/files/a5051173-7e8f-4306-a4b0-4d7d8e93d883.jpg',
    name: 'Ялта',
    text: 'Статус, светская жизнь, лучшие виды. Дорого, но оправданно.',
  },
  {
    img: 'https://cdn.poehali.dev/projects/f9871ff2-932e-47eb-b9a4-ce2b9c4f26a9/files/d3a18485-873d-4760-a171-e213e8aa3c32.jpg',
    name: 'Севастополь',
    text: 'Морская столица, порядок, надёжность.',
  },
  {
    img: 'https://cdn.poehali.dev/projects/f9871ff2-932e-47eb-b9a4-ce2b9c4f26a9/files/587ffa87-08e9-4180-9a3f-9707daec2940.jpg',
    name: 'Алушта',
    text: 'Семейная, уютная, мягкий климат.',
  },
  {
    img: 'https://cdn.poehali.dev/projects/f9871ff2-932e-47eb-b9a4-ce2b9c4f26a9/files/2bbb554d-e4ea-4f10-877c-0533367935b9.jpg',
    name: 'Судак',
    text: 'История, крепость, природа.',
  },
  {
    img: 'https://cdn.poehali.dev/projects/f9871ff2-932e-47eb-b9a4-ce2b9c4f26a9/files/fe30a919-a8e5-4947-9073-796a3d2a9972.jpg',
    name: 'Евпатория',
    text: 'Курорт с мелким песком, лёгкость и доступность.',
  },
];

const CitiesSectionLivekapital = () => {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12" style={{ backgroundColor: '#f9f8f9' }}>
      <div className="max-w-6xl mx-auto">
        <div className="reveal text-center mb-12">
          <div className="section-label justify-center">География</div>
          <h2 className="text-heading" style={{ color: '#18352e' }}>Где именно мы показываем объекты</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {cities.map((c, i) => (
            <div
              key={i}
              className={`reveal reveal-d${(i % 4) + 1} rounded-2xl overflow-hidden border transition-all duration-200 hover:shadow-lg`}
              style={{ backgroundColor: '#ffffff', borderColor: '#e8f0f1' }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={c.img} alt={c.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-bold mb-2" style={{ color: '#18352e', fontSize: '1.15rem' }}>{c.name}</h3>
                <p className="text-body-lg" style={{ color: '#1a3336' }}>{c.text}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="reveal text-center text-body-lg font-medium" style={{ color: '#1a3336' }}>
          В канале — свежие объекты в каждом городе с ценами, фото и расчётами. Подписывайтесь, чтобы не пропустить.
        </p>
      </div>
    </section>
  );
};

export default CitiesSectionLivekapital;
