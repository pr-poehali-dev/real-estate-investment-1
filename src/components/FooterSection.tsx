const FooterSection = () => {
  return (
    <footer style={{ backgroundColor: '#080806', borderTop: '1px solid rgba(201,169,110,0.15)' }}>
      <div className="max-w-6xl mx-auto px-8 md:px-16 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full border flex items-center justify-center" style={{ borderColor: '#c9a96e' }}>
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#c9a96e' }} />
            </div>
            <span className="font-serif tracking-widest" style={{ color: '#f0e6d0', fontSize: '1rem', letterSpacing: '0.06em' }}>
              Южный Берег Капитала
            </span>
          </div>

          <a
            href="https://t.me/+Oikjo-gGhtxiZjZi"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-xs tracking-[0.15em] uppercase px-6 py-2.5 transition-all duration-300"
            style={{ border: '1px solid rgba(201,169,110,0.35)', color: '#c9a96e', letterSpacing: '0.12em' }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = '#c9a96e')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(201,169,110,0.35)')}
          >
            Telegram-канал
          </a>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-3" style={{ borderTop: '1px solid rgba(201,169,110,0.1)' }}>
          <p className="font-sans text-xs text-center md:text-left" style={{ color: 'rgba(232,220,200,0.2)' }}>
            © 2026 ЮгИнвест. Все права защищены.
          </p>
          <p className="font-sans text-xs text-center" style={{ color: 'rgba(232,220,200,0.2)' }}>
            Информация носит ознакомительный характер и не является инвестиционной рекомендацией.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
