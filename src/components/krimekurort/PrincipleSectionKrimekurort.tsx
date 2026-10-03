import Icon from '@/components/ui/icon';
import ButtonsKrimekurort from './ButtonsKrimekurort';

const PrincipleSectionKrimekurort = () => {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-4xl mx-auto">
        <div className="reveal text-center mb-10">
          <h2 className="text-heading mb-4" style={{ color: '#18352e' }}>Честно, без обещаний сверх доходности</h2>
          <p className="text-body-lg" style={{ color: '#1a3336' }}>
            Никаких маркетинговых сказок и заоблачных перспектив. Только честные разборы от экспертов и участников сообщества.
          </p>
        </div>

        <div className="reveal rounded-2xl p-7 md:p-8 mb-8" style={{ backgroundColor: '#18352e' }}>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(255,225,162,0.15)' }}>
              <Icon name="Target" size={18} style={{ color: '#ffe1a2' }} />
            </div>
            <p className="text-body-lg" style={{ color: '#ffffff', lineHeight: '1.7' }}>
              <span className="font-bold" style={{ color: '#ffe1a2' }}>Главный принцип:</span> мы говорим только о курортной недвижимости, которая имеет потенциал роста и доходности. Поэтому в чате не обсуждаем устаревший фонд, квартиры за 5 млн и ЖК вне курортных локаций.
            </p>
          </div>
        </div>

        <p className="reveal text-center font-bold mb-8" style={{ color: '#18352e', fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}>
          Объединяем единомышленников, которые хотят формировать пассивный доход и менять жизнь к лучшему.
        </p>

        <div className="flex justify-center">
          <ButtonsKrimekurort prefix="block4" />
        </div>
      </div>
    </section>
  );
};

export default PrincipleSectionKrimekurort;
