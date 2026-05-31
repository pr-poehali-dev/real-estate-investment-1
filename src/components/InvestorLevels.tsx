const items = [
  {
    text: 'Вы хотите актив, которым можно гордиться. Крым — это не просто метры. Это вид на море, старая Ялта, дача Стамболи. Мы покажем, где переплата за эмоции оправдана, а где — нет.',
  },
  {
    text: 'Вы говорите «нужна математика», но смотрите на этаж и вид. Понимаем. В канале будут и сухие расчёты доходности, и разборы того, как красивый вид влияет на ликвидность через 5 лет.',
  },
  {
    text: 'Вы устали от агентов, которые продают квартиры «как для жизни». Инвестиции — стратегия входа, налоги, выход. Мы не обещаем золотых гор, а показываем реальные риски и доходность.',
  },
];

const InvestorLevels = () => {
  return (
    <section className="py-14 md:py-20 px-6 md:px-12" style={{ backgroundColor: '#f9f8f9' }}>
      <div className="max-w-4xl mx-auto">
        <div className="reveal text-center mb-12">
          <div className="section-label justify-center">Кому этот канал</div>
          <h2 className="text-heading" style={{ color: '#18352e' }}>
            Сообщество для тех, кто хочет<br />
            <span style={{ color: '#18352e' }}>сохранить и приумножить капитал</span>
          </h2>
        </div>

        <div className="reveal rounded-2xl overflow-hidden border" style={{ borderColor: '#e8f0f1', backgroundColor: '#ffffff' }}>
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-5 p-7"
              style={{
                borderBottom: idx < items.length - 1 ? '1px solid #e8f0f1' : 'none',
              }}
            >
              <span className="text-2xl flex-shrink-0 mt-0.5">🔹</span>
              <p className="text-body-lg" style={{ color: '#1a3336' }}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestorLevels;
