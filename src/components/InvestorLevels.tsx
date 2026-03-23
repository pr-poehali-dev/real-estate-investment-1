import { useState } from 'react';
import Icon from '@/components/ui/icon';

const levels = [
  {
    tag: 'Начинающие',
    budget: '1–15 млн ₽',
    icon: 'Sprout',
    color: '#9d8857',
    colorLight: '#9d885715',
    headline: 'Для начинающих и семейных инвестиций',
    pains: [
      'Мечтаете о квартире у моря?',
      'Хотите обеспечить будущее ребёнка, но боитесь ипотеки?',
      'Хотите сформировать пассивный доход?',
    ],
    cta: 'Сформируйте пассивный доход с минимальными рисками и полным сопровождением на каждом этапе.',
    posts: [
      'Как купить квартиру с первоначальным взносом 1 млн, а ипотеку закрывать арендой',
      'Как выбрать первую квартиру под сдачу, чтобы не прогореть на ремонтах и налогах',
      'Реальная доходность без прикрас: Краснодар, Анапа, Новороссийск — что выбрать под ваш бюджет',
    ],
  },
  {
    tag: 'Опытные',
    budget: '15–30 млн ₽',
    icon: 'TrendingUp',
    color: '#3e563f',
    colorLight: '#3e563f15',
    headline: 'Для опытных инвесторов',
    pains: [
      'Квартиры есть, доходность 5–7% перестала радовать?',
      'Коммерция? Страшно: «знакомый год сдать не может».',
      'Отели? «Только для миллионеров».',
    ],
    cta: 'Делимся опытом и знаниями, как увеличить пассивный доход уже сейчас. Поможем сформировать первый инвестиционный портфель из недвижимости на Юге.',
    posts: [
      'Квартира vs коммерция: что выгоднее в 2026?',
      'Как купить номер в отеле и не потерять деньги',
      'Как купить недвижимость и сэкономить на налогах до 29% от стоимости объекта?',
    ],
  },
  {
    tag: 'Крупные',
    budget: 'от 30 млн ₽',
    icon: 'Gem',
    color: '#7a6040',
    colorLight: '#7a604015',
    headline: 'Для крупных инвесторов',
    pains: [
      'Капитал есть, но инфляция съедает?',
      'Хотите статусный актив с доходом и репутацией?',
      'Или собрать портфель под 1 млн/мес пассивного дохода?',
    ],
    cta: 'Формируем инвест-портфели из недвижимости, которые пройдут через любые кризисы за счёт продуманной диверсификации.',
    posts: [
      'Премиальные резиденции у моря: доход и статус',
      'Как собрать портфель под 1 млн/мес пассива',
      'Диверсификация: квартиры + отели + коммерция',
    ],
  },
];

const InvestorLevels = () => {
  const [active, setActive] = useState(0);
  const level = levels[active];

  return (
    <section className="py-20 md:py-28 bg-[#f7f3ef] texture-dots">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="section-divider" />
            <span className="text-[#9d8857] font-sans text-sm tracking-[0.15em] uppercase">Кому будет полезен канал</span>
            <div className="w-14 h-0.5 bg-gradient-to-l from-[#9d8857] to-transparent" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-[#2a2218] font-light leading-tight">
            Сообщество для тех, кто хочет
            <br />
            <span className="italic text-[#9d8857]">сохранить и приумножить капитал</span>
          </h2>
          <p className="font-sans text-[#2a2218]/60 mt-4 text-sm max-w-lg mx-auto">
            На квартирах, коммерции и отелях в Сочи, Краснодаре, Анапе и Крыму
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-col sm:flex-row gap-3 mb-10 justify-center">
          {levels.map((l, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`flex items-center gap-3 px-6 py-3 rounded-full font-sans text-sm transition-all duration-300 border ${
                active === i
                  ? 'bg-[#9d8857] text-white border-[#9d8857] shadow-md'
                  : 'bg-white text-[#2a2218]/70 border-[#e3dad2] hover:border-[#9d8857]/40'
              }`}
            >
              <Icon name={l.icon} size={16} />
              <span>{l.tag}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${active === i ? 'bg-white/20 text-white' : 'bg-[#e3dad2] text-[#9d8857]'}`}>
                {l.budget}
              </span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left: pains + cta */}
          <div className="bg-white rounded-2xl p-8 md:p-10 border border-[#e3dad2] shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: level.colorLight }}
              >
                <Icon name={level.icon} size={20} style={{ color: level.color }} />
              </div>
              <h3 className="font-serif text-xl text-[#2a2218] font-light">{level.headline}</h3>
            </div>

            <ul className="space-y-3 mb-8">
              {level.pains.map((p, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full border border-[#9d8857]/40 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#9d8857]" />
                  </div>
                  <span className="font-sans text-[#2a2218]/70 text-sm leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>

            <p className="font-sans text-[#2a2218]/80 text-sm leading-relaxed bg-[#f7f3ef] rounded-xl p-4 border border-[#e3dad2]">
              {level.cta}
            </p>
          </div>

          {/* Right: posts */}
          <div className="space-y-4">
            <p className="font-sans text-[#2a2218]/50 text-xs tracking-[0.12em] uppercase mb-5">
              Начните с материалов в канале:
            </p>
            {level.posts.map((post, i) => (
              <a
                key={i}
                href="https://t.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 bg-white rounded-xl p-5 border border-[#e3dad2] hover:border-[#9d8857]/50 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#9d8857]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#9d8857]/20 transition-colors">
                  <span className="font-serif text-[#9d8857] text-sm font-light">0{i + 1}</span>
                </div>
                <span className="font-sans text-[#2a2218]/75 text-sm leading-relaxed group-hover:text-[#2a2218] transition-colors">{post}</span>
                <Icon name="ArrowRight" size={16} className="text-[#9d8857]/40 group-hover:text-[#9d8857] transition-colors flex-shrink-0 mt-0.5" />
              </a>
            ))}

            <a
              href="https://t.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full mt-6 bg-[#9d8857] text-white font-sans text-sm px-6 py-4 rounded-full hover:bg-[#b8a06e] transition-colors duration-300 shadow-md"
            >
              Перейти в TG-канал
              <Icon name="ArrowRight" size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorLevels;
