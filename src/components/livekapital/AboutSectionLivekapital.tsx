import Icon from '@/components/ui/icon';
import { reachGoal } from '@/lib/metrika';

const TELEGRAM_URL = 'https://max.ru/channel_ybk';

const AboutSectionLivekapital = () => {
  return (
    <section>
      {/* Кто мы — white bg */}
      <div className="py-14 md:py-20 px-6 md:px-12" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-4xl mx-auto">
          <div className="reveal text-center mb-10">
            <div className="section-label justify-center">О нас</div>
            <h2 className="text-heading" style={{ color: '#18352e' }}>Кто мы</h2>
          </div>

          <div className="reveal reveal-d2 rounded-2xl p-8 md:p-10 border" style={{ backgroundColor: '#f9f8f9', borderColor: '#e8f0f1' }}>
            <p className="text-body-lg mb-4" style={{ color: '#1a3336' }}>
              Мы — команда профессионалов, объединивших опыт в недвижимости и организации туризма в Крыму.
            </p>
            <p className="text-body-lg mb-4" style={{ color: '#1a3336' }}>
              Знаем всех застройщиков полуострова, но рекомендуем только то, что купили бы сами для своих семей и инвестиций.
            </p>
            <p className="text-body-lg" style={{ color: '#1a3336' }}>
              Наша экспертиза — не просто знание рынка, а понимание того, как живут и дышат курортные города Крыма.
            </p>
          </div>
        </div>
      </div>

      {/* Приглашение — teal bg */}
      <div className="py-14 md:py-20 px-6 md:px-12" style={{ backgroundColor: '#18352e' }}>
        <div className="max-w-3xl mx-auto text-center">
          <div className="reveal">
            <div className="section-label-white justify-center">Присоединяйтесь</div>
            <h2 className="text-heading mb-5" style={{ color: '#ffffff' }}>
              Начните свой вход в Крым уже сегодня
            </h2>
            <p className="text-body-lg mb-10" style={{ color: 'rgba(255,255,255,0.75)' }}>
              Подпишитесь на канал «Южный берег капитала», чтобы получать свежие объекты, аналитику и личные ответы на ваши вопросы.
            </p>
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => reachGoal('about_channel_click')}
              className="inline-flex items-center gap-3 font-bold px-10 py-4 rounded-xl transition-all duration-200 hover:opacity-90"
              style={{ backgroundColor: '#ffe1a2', color: '#18352e', fontSize: '0.95rem' }}
            >
              <Icon name="Send" size={16} />
              Подписаться на канал
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionLivekapital;
