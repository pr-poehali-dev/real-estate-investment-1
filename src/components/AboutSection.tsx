import Icon from '@/components/ui/icon';
import { reachGoal } from '@/lib/metrika';

const locations = [
  'Краснодар', 'Сочи', 'Анапа', 'Южный берег Крыма',
  'Севастополь', 'Горнолыжные курорты',
];

const reasons = [
  {
    icon: 'TrendingUp',
    title: 'Крым — единственный растущий рынок юга',
    text: 'Пока Сочи стагнирует (-11% по апартаментам), в Ялте цены на сделки выросли на 25%, в Евпатории — на 26%. Мы покажем локации с потенциалом, а не перегретые.',
  },
  {
    icon: 'Building2',
    title: '65% сделок — сервисные апартаменты под управлением',
    text: 'Пассивный доход — тренд. Но слабая УК убивает доходность. В канале учим проверять операторов.',
  },
  {
    icon: 'Brain',
    title: 'Психология инвестора: вы не один такой',
    text: 'Да, вы хотите и доход, и красивый вид. Это нормально. Мы поможем найти баланс, чтобы не переплатить за эмоции в ущерб прибыли.',
  },
];

const AboutSection = () => {
  return (
    <section>
      {/* About — white bg */}
      <div className="py-14 md:py-20 px-6 md:px-12" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left */}
            <div className="reveal">
              <div className="section-label">О нас</div>
              <h2 className="text-heading mb-8" style={{ color: '#18352e' }}>
                Команда экспертов с{' '}
                <span style={{ color: '#18352e' }}>10-летним опытом</span>
              </h2>

              {/* Team photos — mobile: center first, then 2 below; desktop: 3 in a row */}
              <div className="mb-8">
                {/* Mobile layout */}
                <div className="block sm:hidden">
                  {/* Center person — full width row */}
                  {[{ src: 'https://cdn.poehali.dev/projects/f9871ff2-932e-47eb-b9a4-ce2b9c4f26a9/bucket/ef64867a-ae7c-416c-9a0c-5f84e39963a9.jpg', name: 'Михаил Корабельщиков', role: 'Эксперт и основатель проекта' }].map((person, i) => (
                    <div key={i} className="flex flex-col mb-3 mx-auto" style={{ maxWidth: '60%' }}>
                      <div className="rounded-2xl overflow-hidden aspect-[3/4]" style={{ borderColor: 'transparent', borderWidth: '2px', boxShadow: '0 0 0 2px #ffe1a2, 0 8px 40px rgba(255,225,162,0.45), 0 4px 20px rgba(24,53,46,0.2)' }}>
                        <img src={person.src} alt={person.name} className="w-full h-full object-cover object-top" />
                      </div>
                      <div className="mt-3 text-center px-1">
                        <div className="font-bold text-sm" style={{ color: '#18352e' }}>{person.name}</div>
                        <div className="text-xs mt-0.5" style={{ color: '#6b8e8a' }}>{person.role}</div>
                      </div>
                    </div>
                  ))}
                  {/* Two others — side by side */}
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { src: 'https://cdn.poehali.dev/projects/f9871ff2-932e-47eb-b9a4-ce2b9c4f26a9/bucket/f5c71ae0-b209-4949-947c-6c672426de1b.jpg', name: 'Оксана Орлова', role: 'Эксперт по инвестиционной недвижимости' },
                      { src: 'https://cdn.poehali.dev/projects/f9871ff2-932e-47eb-b9a4-ce2b9c4f26a9/bucket/a2d4a102-a256-417e-958d-3f019bb13a4b.jpg', name: 'Александр Аверьянов', role: 'Эксперт по оптимизации, сооснователь проекта' },
                    ].map((person, i) => (
                      <div key={i} className="flex flex-col">
                        <div className="rounded-2xl overflow-hidden aspect-[3/4] border" style={{ borderColor: '#e8f0f1', borderWidth: '1px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                          <img src={person.src} alt={person.name} className="w-full h-full object-cover object-top" />
                        </div>
                        <div className="mt-3 text-center px-1">
                          <div className="font-bold text-xs" style={{ color: '#18352e' }}>{person.name}</div>
                          <div className="text-xs mt-0.5" style={{ color: '#6b8e8a' }}>{person.role}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Desktop layout — 3 columns */}
                <div className="hidden sm:grid grid-cols-3 gap-3">
                  {[
                    { src: 'https://cdn.poehali.dev/projects/f9871ff2-932e-47eb-b9a4-ce2b9c4f26a9/bucket/f5c71ae0-b209-4949-947c-6c672426de1b.jpg', name: 'Оксана Орлова', role: 'Эксперт по инвестиционной недвижимости', center: false },
                    { src: 'https://cdn.poehali.dev/projects/f9871ff2-932e-47eb-b9a4-ce2b9c4f26a9/bucket/ef64867a-ae7c-416c-9a0c-5f84e39963a9.jpg', name: 'Михаил Корабельщиков', role: 'Эксперт и основатель проекта', center: true },
                    { src: 'https://cdn.poehali.dev/projects/f9871ff2-932e-47eb-b9a4-ce2b9c4f26a9/bucket/a2d4a102-a256-417e-958d-3f019bb13a4b.jpg', name: 'Александр Аверьянов', role: 'Эксперт по оптимизации, сооснователь проекта', center: false },
                  ].map((person, i) => (
                    <div key={i} className="flex flex-col">
                      <div
                        className="rounded-2xl overflow-hidden aspect-[3/4] border"
                        style={person.center
                          ? { borderColor: 'transparent', borderWidth: '2px', boxShadow: '0 0 0 2px #ffe1a2, 0 8px 40px rgba(255,225,162,0.45), 0 4px 20px rgba(24,53,46,0.2)' }
                          : { borderColor: '#e8f0f1', borderWidth: '1px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }
                        }
                      >
                        <img src={person.src} alt={person.name} className="w-full h-full object-cover object-top" />
                      </div>
                      <div className="mt-3 text-center px-1">
                        <div className="font-bold text-xs" style={{ color: '#18352e' }}>{person.name}</div>
                        <div className="text-xs mt-0.5" style={{ color: '#6b8e8a' }}>{person.role}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-body-lg mb-4" style={{ color: '#1a3336' }}>Мы эксперты по инвестиционной недвижимости.
Не продаём вторичку и квартиры для жизни. Работаем только с доходными апартаментами и сервисными отелями.

</p>
              <p className="text-body-lg mb-6 font-normal" style={{ color: '#1a3336' }}>Нас признают крымские застройщики — мы помогаем инвесторам не ошибиться там, где другие агенты просто «продают красивую картинку».</p>

            </div>

            {/* Right — mission */}
            <div className="reveal reveal-d2 flex flex-col gap-5">
              {/* История */}
              <div className="rounded-2xl p-7 border" style={{ backgroundColor: '#18352e', borderColor: '#18352e' }}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(255,225,162,0.15)' }}>
                    <Icon name="Landmark" size={16} style={{ color: '#ffe1a2' }} />
                  </div>
                  <span className="font-bold text-xs uppercase tracking-widest" style={{ color: '#ffe1a2' }}>Наша миссия</span>
                </div>
                <p className="text-body-lg mb-4" style={{ color: 'rgba(255,255,255,0.85)', lineHeight: '1.7' }}>Инвестиции в курортную недвижимость — это не просто покупка, а стратегия по созданию капитала и пассивного дохода. В канале делимся цифрами, инсайдами и лотами, которые не найти в открытых источниках.</p>
                <p className="text-body-lg" style={{ color: 'rgba(255,255,255,0.85)', lineHeight: '1.7' }}>
                  Сегодня вы можете чувствовать себя так же. Вкладывая в современные апартаменты и отели на ЮБК, вы не просто получаете доход. Вы становитесь частью новой истории Крыма — возрождения его инвестиционной привлекательности и статуса.
                </p>
              </div>

              {/* Итоговый тезис */}
              <div className="rounded-2xl p-7 border" style={{ backgroundColor: '#f9f8f9', borderColor: '#e8f0f1' }}>
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: '#18352e' }}>
                    <Icon name="Target" size={16} style={{ color: '#ffe1a2' }} />
                  </div>
                  <p className="font-bold" style={{ color: '#18352e', fontSize: 'clamp(1rem, 2vw, 1.2rem)', lineHeight: '1.5' }}>
                    Инвестируйте с пониманием миссии. И с холодным расчётом.
                  </p>
                </div>
              </div>

              {/* Статистика */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '10+', label: 'лет на рынке' },
                  { value: '200+', label: 'сделок закрыто' },
                ].map((s) => (
                  <div key={s.label} className="rounded-xl p-5 text-center" style={{ backgroundColor: '#18352e' }}>
                    <div className="font-extrabold" style={{ color: '#ffe1a2', fontSize: '1.8rem', fontFamily: 'Mulish, sans-serif' }}>{s.value}</div>
                    <div className="font-medium text-sm mt-1" style={{ color: 'rgba(255,255,255,0.6)' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bonuses — teal bg */}
      <div className="py-14 md:py-20 px-6 md:px-12" style={{ backgroundColor: '#18352e' }}>
        <div className="max-w-6xl mx-auto">
          <div className="reveal text-center mb-10">
            <div className="section-label-white justify-center">Подписка</div>
            <h3 className="text-heading" style={{ color: '#ffffff' }}>Почему стоит подписаться именно сейчас</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {reasons.map((r, i) => (
              <div
                key={i}
                className={`reveal reveal-d${i + 1} rounded-2xl p-6 border`}
                style={{ backgroundColor: 'rgba(255,255,255,0.07)', borderColor: 'rgba(255,225,162,0.18)' }}
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: '#ffe1a2' }}>
                  <Icon name={r.icon} size={20} style={{ color: '#18352e' }} />
                </div>
                <h4 className="font-bold mb-3" style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.5' }}>{r.title}</h4>
                <p className="text-body-lg" style={{ color: 'rgba(255,255,255,0.75)' }}>{r.text}</p>
              </div>
            ))}
          </div>

          <div className="text-center flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://max.ru/id631181836803_biz"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => reachGoal('about_channel_click')}
              className="inline-flex items-center gap-3 font-bold px-10 py-4 rounded-xl transition-all duration-200 hover:opacity-90"
              style={{ backgroundColor: '#ffe1a2', color: '#18352e', fontSize: '0.95rem' }}
            >
              <Icon name="Send" size={16} />
              Перейти в канал Мах
            </a>
            <a
              href="https://max.ru/join/YEB9k3x3YAkcN6J9w4P8YSyXXbBnDPt-7So2wL1UZGc"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => reachGoal('about_chat_click')}
              className="inline-flex items-center gap-3 font-bold px-10 py-4 rounded-xl border-2 transition-all duration-200 hover:opacity-80"
              style={{ borderColor: '#ffe1a2', color: '#ffe1a2', fontSize: '0.95rem' }}
            >
              <Icon name="Zap" size={16} />
              Перейти в Мах чат
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;