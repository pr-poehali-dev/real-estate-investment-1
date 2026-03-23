const FooterSection = () => {
  return (
    <footer className="bg-[#1e1a12] py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full border border-[#9d8857] flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-[#9d8857]" />
            </div>
            <span className="font-serif text-white text-lg tracking-wide">ЮгИнвест</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {['Аналитика', 'Налоги', 'Калькулятор', 'О нас'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-sans text-white/40 text-sm hover:text-white/70 transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>

          <a
            href="https://t.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-[#9d8857]/50 text-[#9d8857] font-sans text-sm px-5 py-2.5 rounded-full hover:bg-[#9d8857]/15 transition-all duration-200"
          >
            Telegram-канал
          </a>
        </div>

        <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-sans text-white/25 text-xs text-center md:text-left">
            © 2026 ЮгИнвест. Все права защищены.
          </p>
          <p className="font-sans text-white/25 text-xs text-center">
            Информация носит ознакомительный характер и не является инвестиционной рекомендацией.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
