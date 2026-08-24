import Icon from '@/components/ui/icon';

const items = [
  {
    num: '01',
    icon: 'Gem',
    title: 'Вы хотите актив, которым можно гордиться.',
    text: 'Крым — это не просто метры. Это вид на море, уникальная природа, культура и история. Мы покажем, где переплата за эмоции оправдана, а где — нет.',
  },
  {
    num: '02',
    icon: 'BarChart2',
    title: 'Вы говорите «нужна математика», но смотрите на этаж и вид.',
    text: 'Понимаем. В канале будут и сухие расчёты доходности, и разборы того, как красивый вид влияет на ликвидность через 5 лет.',
  },
  {
    num: '03',
    icon: 'ShieldCheck',
    title: 'Вы устали от агентов, которые продают квартиры «как для жизни».',
    text: 'Инвестиции — стратегия входа, налоги, выход. Мы не обещаем золотых гор, а показываем реальные риски и доходность.',
  },
];

const InvestorLevels = () => {
  return (
    <section className="py-14 md:py-20 px-6 md:px-12" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-4xl mx-auto">
        <div className="reveal text-center mb-12">
          <div className="section-label justify-center">Кому этот канал</div>
          <h2 className="text-heading" style={{ color: '#18352e' }}>
            Сообщество для тех, кто хочет<br />
            <span style={{ color: '#18352e' }}>сохранить и приумножить капитал</span>
          </h2>
        </div>

        <div className="flex flex-col gap-5">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="reveal relative rounded-2xl p-8 md:p-10 border overflow-hidden"
              style={{ backgroundColor: '#f9f8f9', borderColor: '#e8f0f1' }}
            >
              {/* Декоративный номер */}
              <span
                className="absolute right-8 top-1/2 -translate-y-1/2 font-extrabold select-none pointer-events-none"
                style={{
                  fontSize: 'clamp(5rem, 12vw, 9rem)',
                  lineHeight: '1',
                  color: 'rgba(24,53,46,0.06)',
                  fontFamily: 'Mulish, sans-serif',
                }}
              >
                {item.num}
              </span>

              <div className="relative z-10 flex items-start gap-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 mt-1"
                  style={{ backgroundColor: '#18352e' }}
                >
                  <Icon name={item.icon} size={22} style={{ color: '#ffe1a2' }} />
                </div>
                <div>
                  <h3
                    className="font-bold mb-3"
                    style={{ color: '#18352e', fontSize: 'clamp(1.05rem, 2vw, 1.25rem)', lineHeight: '1.4' }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-body-lg" style={{ color: '#1a3336' }}>{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestorLevels;