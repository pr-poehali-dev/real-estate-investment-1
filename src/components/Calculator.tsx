import { useState, useMemo } from 'react';
import Icon from '@/components/ui/icon';

type PropertyType = 'apartment' | 'commercial' | 'hotel';

const propertyTypes: { value: PropertyType; label: string; icon: string; yield: number }[] = [
  { value: 'apartment', label: 'Квартира', icon: 'Home', yield: 8 },
  { value: 'commercial', label: 'Коммерция', icon: 'Store', yield: 12 },
  { value: 'hotel', label: 'Отельный номер', icon: 'BedDouble', yield: 15 },
];

const locations = [
  { value: 'krasnodar', label: 'Краснодар', growth: 4 },
  { value: 'sochi', label: 'Сочи', growth: 6 },
  { value: 'anapa', label: 'Анапа', growth: 5 },
  { value: 'crimea', label: 'Крым', growth: 4.5 },
  { value: 'novorossiysk', label: 'Новороссийск', growth: 3.5 },
];

const formatMoney = (n: number) => {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(2)} млн ₽`;
  return `${Math.round(n).toLocaleString('ru')} ₽`;
};

const GOLD = '#c9a96e';
const DARK_BG = '#0d0d0b';
const SURFACE = '#141210';
const SURFACE2 = '#1c1916';
const TEXT = '#f0e6d0';
const TEXT_MUTED = 'rgba(232,220,200,0.5)';
const TEXT_DIM = 'rgba(232,220,200,0.3)';
const BORDER = 'rgba(201,169,110,0.18)';

const Calculator = () => {
  const [budget, setBudget] = useState(6_000_000);
  const [propType, setPropType] = useState<PropertyType>('apartment');
  const [location, setLocation] = useState('sochi');
  const [years, setYears] = useState(5);
  const [taxOptimize, setTaxOptimize] = useState(false);

  const results = useMemo(() => {
    const pt = propertyTypes.find((p) => p.value === propType)!;
    const loc = locations.find((l) => l.value === location)!;

    const annualRental = (budget * pt.yield) / 100;
    const monthlyRental = annualRental / 12;
    const totalRental = annualRental * years;

    const annualGrowthRate = loc.growth / 100;
    const propertyValueAfter = budget * Math.pow(1 + annualGrowthRate, years);
    const capitalGain = propertyValueAfter - budget;

    const taxRate = taxOptimize ? 0.06 : 0.13;
    const taxSaved = taxOptimize ? annualRental * (0.13 - 0.06) * years : 0;
    const totalIncome = totalRental + capitalGain;
    const totalAfterTax = totalIncome - totalIncome * taxRate + taxSaved;
    const totalReturn = ((totalAfterTax / budget) * 100).toFixed(1);

    return { monthlyRental, annualRental, totalRental, capitalGain, propertyValueAfter, totalAfterTax, totalReturn, taxSaved, taxRate: Math.round(taxRate * 100) };
  }, [budget, propType, location, years, taxOptimize]);

  const sliderProgress = ((budget - 6_000_000) / (100_000_000 - 6_000_000)) * 100;

  return (
    <section id="calculator" className="py-24 md:py-32" style={{ backgroundColor: DARK_BG }}>
      {/* Top border */}
      <div style={{ height: '1px', background: `linear-gradient(90deg, transparent, ${GOLD}30, transparent)`, marginBottom: '64px' }} />

      <div className="max-w-6xl mx-auto px-8 md:px-16">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div style={{ width: '32px', height: '1px', backgroundColor: GOLD }} />
            <span className="font-sans text-xs tracking-[0.25em] uppercase" style={{ color: GOLD }}>Инструмент</span>
            <div style={{ width: '32px', height: '1px', backgroundColor: GOLD }} />
          </div>
          <h2 className="font-serif font-light mb-4" style={{ color: TEXT, fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
            Калькулятор доходности
          </h2>
          <p className="font-sans font-light max-w-md mx-auto" style={{ color: TEXT_MUTED, fontSize: '0.9rem', lineHeight: '1.8' }}>
            Рассчитайте реальную доходность вашей инвестиции с учётом роста стоимости и налогов
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Inputs */}
          <div className="lg:col-span-3 space-y-6">

            {/* Budget */}
            <div className="p-6 border" style={{ borderColor: BORDER, backgroundColor: SURFACE }}>
              <div className="flex items-center justify-between mb-4">
                <label className="font-sans text-xs tracking-[0.15em] uppercase" style={{ color: TEXT_MUTED }}>Бюджет инвестиции</label>
                <span className="font-serif" style={{ color: GOLD, fontSize: '1.4rem' }}>{formatMoney(budget)}</span>
              </div>
              <input
                type="range"
                min={6_000_000}
                max={100_000_000}
                step={500_000}
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full cursor-pointer"
                style={{ background: `linear-gradient(to right, ${GOLD} ${sliderProgress}%, #2a2218 0%)`, height: '2px' }}
              />
              <div className="flex justify-between mt-2">
                <span className="font-sans text-xs" style={{ color: TEXT_DIM }}>6 млн</span>
                <span className="font-sans text-xs" style={{ color: TEXT_DIM }}>100 млн</span>
              </div>
            </div>

            {/* Property type */}
            <div className="p-6 border" style={{ borderColor: BORDER, backgroundColor: SURFACE }}>
              <label className="font-sans text-xs tracking-[0.15em] uppercase block mb-4" style={{ color: TEXT_MUTED }}>Тип объекта</label>
              <div className="grid grid-cols-3 gap-3">
                {propertyTypes.map((pt) => (
                  <button
                    key={pt.value}
                    onClick={() => setPropType(pt.value)}
                    className="flex flex-col items-start gap-1.5 p-4 border text-left transition-all duration-200"
                    style={{
                      borderColor: propType === pt.value ? GOLD : BORDER,
                      backgroundColor: propType === pt.value ? 'rgba(201,169,110,0.08)' : 'transparent',
                    }}
                  >
                    <Icon name={pt.icon} size={15} style={{ color: propType === pt.value ? GOLD : TEXT_MUTED }} />
                    <div className="font-sans text-xs" style={{ color: propType === pt.value ? TEXT : TEXT_MUTED }}>{pt.label}</div>
                    <div className="font-sans text-xs" style={{ color: GOLD, opacity: propType === pt.value ? 1 : 0.5 }}>~{pt.yield}%/год</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="p-6 border" style={{ borderColor: BORDER, backgroundColor: SURFACE }}>
              <label className="font-sans text-xs tracking-[0.15em] uppercase block mb-4" style={{ color: TEXT_MUTED }}>Локация</label>
              <div className="flex flex-wrap gap-2">
                {locations.map((loc) => (
                  <button
                    key={loc.value}
                    onClick={() => setLocation(loc.value)}
                    className="font-sans text-xs px-4 py-2 border transition-all duration-200"
                    style={{
                      borderColor: location === loc.value ? GOLD : BORDER,
                      backgroundColor: location === loc.value ? GOLD : 'transparent',
                      color: location === loc.value ? DARK_BG : TEXT_MUTED,
                      letterSpacing: '0.05em',
                    }}
                  >
                    {loc.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Horizon */}
            <div className="p-6 border" style={{ borderColor: BORDER, backgroundColor: SURFACE }}>
              <div className="flex items-center justify-between mb-4">
                <label className="font-sans text-xs tracking-[0.15em] uppercase" style={{ color: TEXT_MUTED }}>Горизонт инвестирования</label>
                <span className="font-serif" style={{ color: GOLD, fontSize: '1.2rem' }}>{years} {years === 1 ? 'год' : years < 5 ? 'года' : 'лет'}</span>
              </div>
              <div className="flex gap-2">
                {[1, 3, 5, 7, 10].map((y) => (
                  <button
                    key={y}
                    onClick={() => setYears(y)}
                    className="flex-1 py-3 font-sans text-sm border transition-all duration-200"
                    style={{
                      borderColor: years === y ? GOLD : BORDER,
                      backgroundColor: years === y ? GOLD : 'transparent',
                      color: years === y ? DARK_BG : TEXT_MUTED,
                    }}
                  >
                    {y}
                  </button>
                ))}
              </div>
            </div>

            {/* Tax optimization */}
            <div className="flex items-center justify-between p-6 border" style={{ borderColor: BORDER, backgroundColor: SURFACE }}>
              <div>
                <div className="font-sans text-xs tracking-[0.1em] uppercase mb-1" style={{ color: TEXT_MUTED }}>Налоговая оптимизация</div>
                <div className="font-sans text-xs" style={{ color: TEXT_DIM }}>Переход с 13% НДФЛ на 6% УСН (ИП)</div>
              </div>
              <button
                onClick={() => setTaxOptimize(!taxOptimize)}
                className="w-12 h-6 relative flex-shrink-0 transition-all duration-300"
                style={{ backgroundColor: taxOptimize ? GOLD : '#2a2218', borderRadius: '12px' }}
              >
                <div
                  className="w-5 h-5 bg-white absolute top-0.5 transition-all duration-300"
                  style={{ borderRadius: '50%', left: taxOptimize ? '26px' : '2px', boxShadow: '0 1px 4px rgba(0,0,0,0.4)' }}
                />
              </button>
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-2 lg:sticky lg:top-6">
            <div className="border p-8" style={{ borderColor: `${GOLD}30`, backgroundColor: SURFACE2 }}>
              {/* Header */}
              <div className="flex items-center gap-3 mb-8 pb-6" style={{ borderBottom: `1px solid ${BORDER}` }}>
                <Icon name="Calculator" size={16} style={{ color: GOLD }} />
                <span className="font-sans text-xs tracking-[0.2em] uppercase" style={{ color: TEXT_MUTED }}>Результат расчёта</span>
              </div>

              {/* Main metric */}
              <div className="text-center mb-8 pb-8" style={{ borderBottom: `1px solid ${BORDER}` }}>
                <div className="font-sans text-xs mb-3" style={{ color: TEXT_DIM, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  Общая доходность за {years} лет
                </div>
                <div className="font-serif font-light" style={{ color: GOLD, fontSize: '4.5rem', lineHeight: '1' }}>
                  {results.totalReturn}%
                </div>
                <div className="font-sans text-xs mt-3" style={{ color: TEXT_MUTED }}>
                  {formatMoney(results.totalAfterTax)} чистый доход
                </div>
              </div>

              {/* Breakdown */}
              <div className="space-y-4">
                {[
                  { label: 'Пассивный доход в месяц', value: formatMoney(results.monthlyRental), icon: 'Wallet' },
                  { label: 'Аренда за период', value: formatMoney(results.totalRental), icon: 'CalendarDays' },
                  { label: 'Рост стоимости объекта', value: `+${formatMoney(results.capitalGain)}`, icon: 'TrendingUp' },
                  ...(taxOptimize ? [{ label: 'Экономия на налогах', value: `+${formatMoney(results.taxSaved)}`, icon: 'BadgePercent' }] : []),
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between pb-4" style={{ borderBottom: `1px solid ${BORDER}` }}>
                    <div className="flex items-center gap-2">
                      <Icon name={item.icon} size={12} style={{ color: `${GOLD}70` }} />
                      <span className="font-sans text-xs" style={{ color: TEXT_MUTED }}>{item.label}</span>
                    </div>
                    <span className="font-sans text-sm" style={{ color: TEXT }}>{item.value}</span>
                  </div>
                ))}
              </div>

              {taxOptimize && (
                <div className="mt-5 p-4 flex items-start gap-3" style={{ backgroundColor: 'rgba(201,169,110,0.06)', border: `1px solid ${GOLD}25` }}>
                  <Icon name="Info" size={12} style={{ color: GOLD, marginTop: '2px', flexShrink: 0 }} />
                  <p className="font-sans text-xs leading-relaxed" style={{ color: TEXT_DIM }}>
                    Налоговый режим ИП (УСН 6%) снижает ставку с 13% до 6%. Экономия за {years} лет: {formatMoney(results.taxSaved)}
                  </p>
                </div>
              )}

              <a
                href="https://t.me/+Oikjo-gGhtxiZjZi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full mt-8 font-sans text-xs tracking-[0.15em] uppercase px-6 py-4 transition-all duration-300"
                style={{ backgroundColor: GOLD, color: DARK_BG, letterSpacing: '0.12em' }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                Получить персональный разбор
                <Icon name="ArrowRight" size={13} />
              </a>

              <p className="font-sans text-xs text-center mt-4" style={{ color: TEXT_DIM }}>
                * Расчёт ориентировочный. Уточняйте у эксперта.
              </p>
            </div>
          </div>
        </div>

        {/* Note */}
        <div className="mt-8 p-6 border flex gap-5 items-start" style={{ borderColor: BORDER, backgroundColor: SURFACE }}>
          <div className="w-8 h-8 flex items-center justify-center border flex-shrink-0" style={{ borderColor: `${GOLD}30` }}>
            <Icon name="Lightbulb" size={14} style={{ color: GOLD }} />
          </div>
          <div>
            <div className="font-sans text-sm mb-2" style={{ color: TEXT }}>Начать можно и с 1 млн рублей</div>
            <p className="font-sans text-sm font-light leading-relaxed" style={{ color: TEXT_MUTED }}>
              При небольшом стартовом взносе пассивный доход будет символическим или нулевым — ипотечный платёж съедает аренду.
              Но через 15–20 лет вы становитесь полноправным владельцем недвижимости стоимостью до 15 млн рублей,
              вложив в покупку всего 1 млн. Это стратегия долгосрочного накопления, а не текущего дохода.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom border */}
      <div style={{ height: '1px', background: `linear-gradient(90deg, transparent, ${GOLD}30, transparent)`, marginTop: '64px' }} />
    </section>
  );
};

export default Calculator;
