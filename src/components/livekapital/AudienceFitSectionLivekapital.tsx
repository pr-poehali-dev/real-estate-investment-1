import Icon from '@/components/ui/icon';

const fitItems = [
  'Вы планируете покупку в Крыму для жизни, сезона или инвестиций.',
  'Ищете объект, который будет расти в цене и радовать вас.',
  'Ваш бюджет — от 9 млн.',
  'Вы цените море, историю и статус.',
];

const notFitItems = [
  'Вы ищете бюджетное жильё до 4 млн.',
  'Вам не важны локация и атмосфера.',
  'Вы планируете быструю перепродажу без анализа.',
];

const AudienceFitSectionLivekapital = () => {
  return (
    <section className="py-14 md:py-20 px-6 md:px-12" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-4xl mx-auto">
        <div className="reveal text-center mb-12">
          <div className="section-label justify-center">Кому этот канал</div>
          <h2 className="text-heading" style={{ color: '#18352e' }}>
            Кому подойдёт этот канал
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="reveal rounded-2xl p-8 md:p-10 border" style={{ backgroundColor: '#f9f8f9', borderColor: '#e8f0f1' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#18352e' }}>
                <Icon name="Check" size={20} style={{ color: '#ffe1a2' }} />
              </div>
              <h3 className="font-bold" style={{ color: '#18352e', fontSize: '1.15rem' }}>Для вас, если:</h3>
            </div>
            <ul className="space-y-4">
              {fitItems.map((text, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: '#f0f5f4' }}>
                    <Icon name="Check" size={14} style={{ color: '#18352e' }} />
                  </div>
                  <span className="text-body-lg" style={{ color: '#1a3336' }}>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal reveal-d2 rounded-2xl p-8 md:p-10 border" style={{ backgroundColor: '#f9f8f9', borderColor: '#e8f0f1' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#18352e' }}>
                <Icon name="X" size={20} style={{ color: '#ffe1a2' }} />
              </div>
              <h3 className="font-bold" style={{ color: '#18352e', fontSize: '1.15rem' }}>Не для вас, если:</h3>
            </div>
            <ul className="space-y-4">
              {notFitItems.map((text, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: '#f0f5f4' }}>
                    <Icon name="X" size={14} style={{ color: '#18352e' }} />
                  </div>
                  <span className="text-body-lg" style={{ color: '#1a3336' }}>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudienceFitSectionLivekapital;
