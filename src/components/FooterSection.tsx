import Icon from '@/components/ui/icon';
import { reachGoal } from '@/lib/metrika';

const FooterSection = () => {
  return (
    <footer style={{ backgroundColor: '#f9f8f9', borderTop: '2px solid #e8f0f1' }}>
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-10">
        <div className="reveal flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#18352e' }}>
              <Icon name="TrendingUp" size={15} style={{ color: '#ffe1a2' }} />
            </div>
            <span className="font-bold" style={{ color: '#18352e', fontSize: '1.05rem' }}>
              Южный Берег Капитала
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <a
              href="https://max.ru/join/YEB9k3x3YAkcN6J9w4P8YSyXXbBnDPt-7So2wL1UZGc"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => reachGoal('footer_chat_click')}
              className="inline-flex items-center gap-2 font-bold text-sm px-5 py-2.5 rounded-lg border-2 transition-all duration-200 hover:opacity-80"
              style={{ borderColor: '#18352e', color: '#18352e' }}
            >
              <Icon name="MessageCircle" size={14} />
              Чат в Мах
            </a>
            <a
              href="https://max.ru/id631181836803_biz"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => reachGoal('footer_channel_click')}
              className="inline-flex items-center gap-2 font-bold text-sm px-5 py-2.5 rounded-lg transition-all duration-200 hover:opacity-90"
              style={{ backgroundColor: '#18352e', color: '#ffe1a2' }}
            >
              <Icon name="Zap" size={14} />
              Перейти в канал Мах
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3" style={{ borderTop: '1px solid #e8f0f1' }}>
          <p className="font-medium text-sm text-center md:text-left" style={{ color: '#1a3336' }}>
            © 2026 ЮгИнвест. Все права защищены.
          </p>
          <p className="font-medium text-sm text-center" style={{ color: '#1a3336' }}>
            Информация носит ознакомительный характер и не является инвестиционной рекомендацией.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;