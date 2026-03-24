import { useState, useMemo } from 'react';
import Icon from '@/components/ui/icon';
import ContactModal from '@/components/ContactModal';

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

const Calculator = () => {
  const [budget, setBudget] = useState(6_000_000);
  const [propType, setPropType] = useState<PropertyType>('apartment');
  const [location, setLocation] = useState('sochi');
  const [years, setYears] = useState(5);
  const [taxOptimize, setTaxOptimize] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

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
    return { monthlyRental, totalRental, capitalGain, totalAfterTax, totalReturn, taxSaved };
  }, [budget, propType, location, years, taxOptimize]);

  const sliderProgress = ((budget - 6_000_000) / (100_000_000 - 6_000_000)) * 100;

  return (
    <section id="calculator" className="py-10 md:py-14" style={{ backgroundColor: '#f9f8f9' }}>
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="reveal text-center mb-7">
          <div className="section-label justify-center">Инструмент</div>
          <h2 className="text-heading" style={{ color: '#18352e' }}>Калькулятор доходности</h2>
          <p className="text-body-lg mt-2 max-w-md mx-auto" style={{ color: '#1a2e30' }}>
            Рассчитайте реальную доходность с учётом роста стоимости и налогов
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 items-start">
          {/* Inputs */}
          <div className="reveal reveal-d1 lg:col-span-3 space-y-3">

            {/* Budget */}
            <div className="rounded-xl p-4 border-2" style={{ backgroundColor: '#ffffff', borderColor: '#e8f0f1' }}>
              <div className="flex items-center justify-between mb-2">
                <label className="font-bold text-sm" style={{ color: '#18352e' }}>Бюджет инвестиции</label>
                <span className="font-extrabold" style={{ color: '#18352e', fontSize: '1.1rem' }}>{formatMoney(budget)}</span>
              </div>
              <input
                type="range"
                min={6_000_000}
                max={100_000_000}
                step={500_000}
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full cursor-pointer"
                style={{ background: `linear-gradient(to right, #18352e ${sliderProgress}%, #d0e5de 0%)` }}
              />
              <div className="flex justify-between mt-1">
                <span className="font-medium text-xs" style={{ color: '#1a3336' }}>6 млн</span>
                <span className="font-medium text-xs" style={{ color: '#1a3336' }}>100 млн</span>
              </div>
            </div>

            {/* Property type — horizontal pill buttons */}
            <div className="rounded-xl p-4 border-2" style={{ backgroundColor: '#ffffff', borderColor: '#e8f0f1' }}>
              <label className="font-bold text-sm block mb-2" style={{ color: '#18352e' }}>Тип объекта</label>
              <div className="grid grid-cols-3 gap-2">
                {propertyTypes.map((pt) => (
                  <button
                    key={pt.value}
                    onClick={() => setPropType(pt.value)}
                    className="flex flex-col items-center justify-center gap-1 py-3 px-1 rounded-lg border-2 transition-all duration-200 text-center"
                    style={{
                      borderColor: propType === pt.value ? '#18352e' : '#e8f0f1',
                      backgroundColor: propType === pt.value ? '#18352e' : '#f9f8f9',
                    }}
                  >
                    <Icon name={pt.icon} size={18} style={{ color: propType === pt.value ? '#ffe1a2' : '#18352e' }} />
                    <div className="font-bold" style={{ color: propType === pt.value ? '#ffffff' : '#18352e', fontSize: '0.75rem', lineHeight: '1.3' }}>{pt.label}</div>
                    <div className="font-medium" style={{ color: propType === pt.value ? '#ffe1a2' : '#1a3336', fontSize: '0.7rem' }}>~{pt.yield}%</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="rounded-xl p-4 border-2" style={{ backgroundColor: '#ffffff', borderColor: '#e8f0f1' }}>
              <label className="font-bold text-sm block mb-2" style={{ color: '#18352e' }}>Локация</label>
              <div className="flex flex-wrap gap-2">
                {locations.map((loc) => (
                  <button
                    key={loc.value}
                    onClick={() => setLocation(loc.value)}
                    className="font-bold text-sm px-3 py-1.5 rounded-lg border-2 transition-all duration-200"
                    style={{
                      borderColor: location === loc.value ? '#18352e' : '#e8f0f1',
                      backgroundColor: location === loc.value ? '#18352e' : '#f9f8f9',
                      color: location === loc.value ? '#ffffff' : '#1a3336',
                    }}
                  >
                    {loc.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Horizon + Tax — two columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="rounded-xl p-4 border-2" style={{ backgroundColor: '#ffffff', borderColor: '#e8f0f1' }}>
                <div className="flex items-center justify-between mb-2">
                  <label className="font-bold text-sm" style={{ color: '#18352e' }}>Горизонт</label>
                  <span className="font-extrabold text-sm" style={{ color: '#18352e' }}>
                    {years} {years === 1 ? 'год' : years < 5 ? 'года' : 'лет'}
                  </span>
                </div>
                <div className="flex gap-1.5">
                  {[1, 3, 5, 7, 10].map((y) => (
                    <button
                      key={y}
                      onClick={() => setYears(y)}
                      className="flex-1 py-2 rounded-lg font-bold text-sm border-2 transition-all duration-200"
                      style={{
                        borderColor: years === y ? '#18352e' : '#e8f0f1',
                        backgroundColor: years === y ? '#18352e' : '#f9f8f9',
                        color: years === y ? '#ffffff' : '#1a3336',
                      }}
                    >
                      {y}
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-4 border-2 flex items-center justify-between gap-3" style={{ backgroundColor: '#ffffff', borderColor: '#e8f0f1' }}>
                <div>
                  <div className="font-bold text-sm" style={{ color: '#18352e' }}>Налог. оптимизация</div>
                  <div className="font-medium text-xs mt-0.5" style={{ color: '#1a3336' }}>13% → 6% (ИП/УСН)</div>
                </div>
                <button
                  onClick={() => setTaxOptimize(!taxOptimize)}
                  className="w-12 h-6 rounded-full transition-all duration-300 relative flex-shrink-0"
                  style={{ backgroundColor: taxOptimize ? '#18352e' : '#dde8ea' }}
                >
                  <div
                    className="w-5 h-5 bg-white rounded-full shadow absolute top-0.5 transition-all duration-300"
                    style={{ left: taxOptimize ? '26px' : '2px' }}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="reveal reveal-d2 lg:col-span-2 lg:sticky lg:top-6">
            <div className="rounded-2xl p-5" style={{ backgroundColor: '#18352e' }}>
              <div className="flex items-center gap-2 mb-4 pb-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.12)' }}>
                <Icon name="Calculator" size={16} style={{ color: '#ffe1a2' }} />
                <span className="font-bold text-sm uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.65)' }}>Результат</span>
              </div>

              {/* Main metric */}
              <div className="text-center mb-4 pb-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.12)' }}>
                <div className="font-medium text-sm mb-1" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  Общая доходность за {years} лет
                </div>
                <div className="font-extrabold" style={{ color: '#ffe1a2', fontSize: '3.2rem', lineHeight: '1', fontFamily: 'Mulish, sans-serif' }}>
                  {results.totalReturn}%
                </div>
                <div className="font-medium text-sm mt-1.5" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  {formatMoney(results.totalAfterTax)} чистый доход
                </div>
              </div>

              {/* Breakdown */}
              <div className="space-y-3">
                {[
                  { label: 'Пассивный доход в месяц', value: formatMoney(results.monthlyRental), icon: 'Wallet' },
                  { label: 'Аренда за период', value: formatMoney(results.totalRental), icon: 'CalendarDays' },
                  { label: 'Рост стоимости объекта', value: `+${formatMoney(results.capitalGain)}`, icon: 'TrendingUp' },
                  ...(taxOptimize ? [{ label: 'Экономия на налогах', value: `+${formatMoney(results.taxSaved)}`, icon: 'BadgePercent' }] : []),
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between pb-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                    <div className="flex items-center gap-2">
                      <Icon name={item.icon} size={13} style={{ color: '#ffe1a2', opacity: 0.7 }} />
                      <span className="font-medium text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>{item.label}</span>
                    </div>
                    <span className="font-bold text-sm" style={{ color: '#ffffff' }}>{item.value}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setModalOpen(true)}
                className="flex items-center justify-center gap-2 w-full mt-4 font-bold rounded-xl py-3.5 transition-all duration-200 hover:opacity-90"
                style={{ backgroundColor: '#ffe1a2', color: '#18352e', fontSize: '0.9rem' }}
              >
                Получить персональный разбор
                <Icon name="ArrowRight" size={14} />
              </button>

              <p className="font-medium text-xs text-center mt-2" style={{ color: 'rgba(255,255,255,0.3)' }}>
                * Расчёт ориентировочный. Уточняйте у эксперта.
              </p>
            </div>
          </div>
        </div>

        {/* Note */}
        <div className="mt-4 rounded-xl p-4 border-2 flex gap-3 items-start" style={{ backgroundColor: '#ffffff', borderColor: '#e8f0f1' }}>
          <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: '#18352e' }}>
            <Icon name="Lightbulb" size={15} style={{ color: '#ffe1a2' }} />
          </div>
          <div>
            <div className="font-bold text-sm mb-1" style={{ color: '#18352e' }}>Начать можно и с 1 млн рублей</div>
            <p className="font-medium text-sm" style={{ color: '#1a3336', lineHeight: '1.6' }}>
              Пассивный доход в этом случае будет символическим или нулевым — ипотечный платёж съедает аренду. Но через 15–20 лет вы станете владельцем недвижимости стоимостью до 15 млн рублей, вложив в покупку всего 1 млн.
            </p>
          </div>
        </div>
      </div>
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
};

export default Calculator;