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

          {/* Team photos — mobile: center first, then 2 below; desktop: 3 in a row */}
          <div className="reveal mb-8">
            {/* Mobile layout */}
            <div className="block sm:hidden">
              {/* Center person — full width row */}
              {[{ src: 'https://cdn.poehali.dev/projects/f9871ff2-932e-47eb-b9a4-ce2b9c4f26a9/bucket/ef64867a-ae7c-416c-9a0c-5f84e39963a9.jpg', name: 'Михаил Корабельщиков', role: 'Эксперт по недвижимости, сооснователь проекта, блогер' }].map((person, i) => (
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
                  { src: 'https://cdn.poehali.dev/projects/f9871ff2-932e-47eb-b9a4-ce2b9c4f26a9/bucket/f5c71ae0-b209-4949-947c-6c672426de1b.jpg', name: 'Оксана Орлова', role: 'Эксперт по курортной недвижимости' },
                  { src: 'https://cdn.poehali.dev/projects/f9871ff2-932e-47eb-b9a4-ce2b9c4f26a9/bucket/a2d4a102-a256-417e-958d-3f019bb13a4b.jpg', name: 'Александр Аверьянов', role: 'Организатор туристических проектов, сооснователь проекта' },
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
                { src: 'https://cdn.poehali.dev/projects/f9871ff2-932e-47eb-b9a4-ce2b9c4f26a9/bucket/f5c71ae0-b209-4949-947c-6c672426de1b.jpg', name: 'Оксана Орлова', role: 'Эксперт по курортной недвижимости', center: false },
                { src: 'https://cdn.poehali.dev/projects/f9871ff2-932e-47eb-b9a4-ce2b9c4f26a9/bucket/ef64867a-ae7c-416c-9a0c-5f84e39963a9.jpg', name: 'Михаил Корабельщиков', role: 'Эксперт по недвижимости, сооснователь проекта, блогер', center: true },
                { src: 'https://cdn.poehali.dev/projects/f9871ff2-932e-47eb-b9a4-ce2b9c4f26a9/bucket/a2d4a102-a256-417e-958d-3f019bb13a4b.jpg', name: 'Александр Аверьянов', role: 'Организатор туристических проектов, сооснователь проекта', center: false },
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