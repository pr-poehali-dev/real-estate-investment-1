import Icon from '@/components/ui/icon';
import { reachGoal } from '@/lib/metrika';

const TELEGRAM_URL = 'https://max.ru/channel_ybk';

const InvitationSectionMax = () => {
  return (
    <div className="py-14 md:py-20 px-6 md:px-12" style={{ backgroundColor: '#18352e' }}>
      <div className="max-w-3xl mx-auto text-center">
        <div className="reveal">
          <div className="section-label-white justify-center">Присоединяйтесь</div>
          <h2 className="text-heading mb-5" style={{ color: '#ffffff' }}>
            Курортная недвижимость — это не про квадратные метры
          </h2>
          <p className="text-body-lg mb-4" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Большинство считает только цифры. Мы в канале показываем то, что действительно влияет на успех: локации, концепцию комплексов, логистику для туристов, юридические нюансы и перспективы роста.
          </p>
          <p className="text-body-lg mb-10" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Еженедельные разборы объектов, обзоры районов и ответы на ваши вопросы. Без воды, но с погружением в детали. Подпишитесь сейчас — чтобы не пропускать новые разборы и изменения на рынке.
          </p>
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => reachGoal('max_invitation_channel_click')}
            className="inline-flex items-center gap-3 font-bold px-10 py-4 rounded-xl transition-all duration-200 hover:opacity-90"
            style={{ backgroundColor: '#ffe1a2', color: '#18352e', fontSize: '0.95rem' }}
          >
            <Icon name="Send" size={16} />
            Подписаться на канал
          </a>
        </div>
      </div>
    </div>
  );
};

export default InvitationSectionMax;
