import Icon from '@/components/ui/icon';

const HeroSectionKrimekurort = () => {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden" style={{ backgroundColor: '#18352e' }}>
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://cdn.poehali.dev/projects/f9871ff2-932e-47eb-b9a4-ce2b9c4f26a9/bucket/2c1ad30d-b169-4dec-8d01-f7f5b1cd2f7c.jpg')`,
        }}
      />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, rgba(24,53,46,0.55) 0%, rgba(24,53,46,0.7) 30%, rgba(24,53,46,0.93) 60%, #18352e 85%)' }}
      />

      {/* Nav */}
      <nav className="hero-nav relative z-10 flex items-center justify-between px-6 md:px-12 py-6">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#ffe1a2' }}>
            <Icon name="TrendingUp" size={16} style={{ color: '#18352e' }} />
          </div>
          <span className="font-bold text-white" style={{ fontSize: '1.05rem' }}>
            Южный Берег Капитала
          </span>
        </div>

      </nav>

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex items-end lg:items-center px-6 md:px-12 lg:px-20 pb-12 lg:pb-8 pt-4">
        <div className="w-full">
          <div className="max-w-3xl">
            <h1 className="hero-title text-display mb-5" style={{ color: '#ffffff' }}>
              Чат и сообщество для тех, кто планирует покупку курортной недвижимости{' '}
              <span style={{ color: '#ffe1a2' }}>в Крыму</span>
            </h1>

            <p className="hero-sub text-body-lg max-w-xl" style={{ color: '#ffffff' }}>Здесь вы сможете изучить локации и недвижимость Крыма, задать вопросы экспертам в чате и принять взвешенное решение о покупке — без давления и навязывания.</p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSectionKrimekurort;