import { useState, useMemo } from 'react';
import Icon from '@/components/ui/icon';

type PropertyType = 'apartment' | 'commercial' | 'hotel';

const propertyTypes: { value: PropertyType; label: string; icon: string; yield: number }[] = [
  { value: 'apartment', label: 'Квартира', icon: 'Home', yield: 8 },
  { value: 'commercial', label: 'Коммерция', icon: 'Store', yield: 12 },
  { value: 'hotel', label: 'Отельный номер', icon: 'BedDouble', yield: 15 },
];

const locations = [
  { value: 'krasnodar', label: 'Краснодар', growth: 8 },
  { value: 'sochi', label: 'Сочи', growth: 12 },
  { value: 'anapa', label: 'Анапа', growth: 10 },
  { value: 'crimea', label: 'Крым', growth: 9 },
  { value: 'novorossiysk', label: 'Новороссийск', growth: 7 },
];

const formatMoney = (n: number) => {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(2)} млн ₽`;
  return `${Math.round(n).toLocaleString('ru')} ₽`;
};

const Calculator = () => {
  const [budget, setBudget] = useState(5_000_000);
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

    return {
      monthlyRental,
      annualRental,
      totalRental,
      capitalGain,
      propertyValueAfter,
      totalAfterTax,
      totalReturn,
      taxSaved,
      taxRate: Math.round(taxRate * 100),
    };
  }, [budget, propType, location, years, taxOptimize]);

  return (
    <section id="calculator" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="section-divider" />
            <span className="text-[#9d8857] font-sans text-sm tracking-[0.15em] uppercase">Инструмент</span>
            <div className="w-14 h-0.5 bg-gradient-to-l from-[#9d8857] to-transparent" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-[#2a2218] font-light">
            Калькулятор доходности
          </h2>
          <p className="font-sans text-[#2a2218]/60 mt-4 text-sm max-w-md mx-auto">
            Рассчитайте реальную доходность вашей инвестиции с учётом роста стоимости и налогов
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Inputs */}
          <div className="lg:col-span-3 space-y-7">
            {/* Budget */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="font-sans text-sm text-[#2a2218]/80 font-medium">Бюджет инвестиции</label>
                <span className="font-serif text-[#9d8857] text-lg">{formatMoney(budget)}</span>
              </div>
              <input
                type="range"
                min={1_000_000}
                max={100_000_000}
                step={500_000}
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #9d8857 ${((budget - 1_000_000) / 99_000_000) * 100}%, #e3dad2 0%)`,
                }}
              />
              <div className="flex justify-between mt-1.5">
                <span className="font-sans text-xs text-[#2a2218]/40">1 млн</span>
                <span className="font-sans text-xs text-[#2a2218]/40">100 млн</span>
              </div>
            </div>

            {/* Property type */}
            <div>
              <label className="font-sans text-sm text-[#2a2218]/80 font-medium block mb-3">Тип объекта</label>
              <div className="grid grid-cols-3 gap-3">
                {propertyTypes.map((pt) => (
                  <button
                    key={pt.value}
                    onClick={() => setPropType(pt.value)}
                    className={`flex flex-col items-center gap-2 p-4 rounded-xl border text-center transition-all duration-200 ${
                      propType === pt.value
                        ? 'border-[#9d8857] bg-[#9d8857]/8 shadow-sm'
                        : 'border-[#e3dad2] bg-[#f7f3ef] hover:border-[#9d8857]/40'
                    }`}
                  >
                    <Icon name={pt.icon} size={18} className={propType === pt.value ? 'text-[#9d8857]' : 'text-[#2a2218]/50'} />
                    <span className={`font-sans text-xs leading-tight ${propType === pt.value ? 'text-[#9d8857] font-medium' : 'text-[#2a2218]/60'}`}>
                      {pt.label}
                    </span>
                    <span className={`font-sans text-xs ${propType === pt.value ? 'text-[#9d8857]' : 'text-[#2a2218]/40'}`}>
                      ~{pt.yield}%/год
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Location */}
            <div>
              <label className="font-sans text-sm text-[#2a2218]/80 font-medium block mb-3">Локация</label>
              <div className="flex flex-wrap gap-2">
                {locations.map((loc) => (
                  <button
                    key={loc.value}
                    onClick={() => setLocation(loc.value)}
                    className={`font-sans text-sm px-4 py-2 rounded-full border transition-all duration-200 ${
                      location === loc.value
                        ? 'bg-[#9d8857] text-white border-[#9d8857]'
                        : 'border-[#e3dad2] text-[#2a2218]/70 hover:border-[#9d8857]/40 bg-white'
                    }`}
                  >
                    {loc.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Horizon */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="font-sans text-sm text-[#2a2218]/80 font-medium">Горизонт инвестирования</label>
                <span className="font-serif text-[#9d8857] text-lg">{years} {years === 1 ? 'год' : years < 5 ? 'года' : 'лет'}</span>
              </div>
              <div className="flex gap-2">
                {[1, 3, 5, 7, 10].map((y) => (
                  <button
                    key={y}
                    onClick={() => setYears(y)}
                    className={`flex-1 py-2.5 rounded-lg font-sans text-sm border transition-all duration-200 ${
                      years === y
                        ? 'bg-[#9d8857] text-white border-[#9d8857]'
                        : 'border-[#e3dad2] text-[#2a2218]/60 hover:border-[#9d8857]/40 bg-white'
                    }`}
                  >
                    {y}
                  </button>
                ))}
              </div>
            </div>

            {/* Tax optimization */}
            <div className="flex items-center justify-between bg-[#f7f3ef] rounded-xl p-4 border border-[#e3dad2]">
              <div>
                <div className="font-sans text-sm text-[#2a2218]/80 font-medium">Налоговая оптимизация</div>
                <div className="font-sans text-xs text-[#2a2218]/50 mt-0.5">Переход с 13% НДФЛ на 6% УСН (ИП)</div>
              </div>
              <button
                onClick={() => setTaxOptimize(!taxOptimize)}
                className={`w-12 h-6 rounded-full transition-all duration-300 relative flex-shrink-0 ${taxOptimize ? 'bg-[#3e563f]' : 'bg-[#e3dad2]'}`}
              >
                <div className={`w-5 h-5 rounded-full bg-white shadow absolute top-0.5 transition-all duration-300 ${taxOptimize ? 'left-6' : 'left-0.5'}`} />
              </button>
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-2 sticky top-6">
            <div className="bg-[#2a2218] rounded-2xl p-7 text-white">
              <div className="flex items-center gap-2 mb-6">
                <Icon name="Calculator" size={18} className="text-[#9d8857]" />
                <span className="font-sans text-sm text-white/60 uppercase tracking-wider">Результат</span>
              </div>

              {/* Main metric */}
              <div className="bg-[#9d8857]/15 rounded-xl p-5 mb-6 text-center border border-[#9d8857]/20">
                <div className="font-sans text-white/50 text-xs mb-2">Общая доходность за {years} лет</div>
                <div className="font-serif text-5xl text-[#9d8857]">{results.totalReturn}%</div>
                <div className="font-sans text-white/60 text-xs mt-1">{formatMoney(results.totalAfterTax)} чистый доход</div>
              </div>

              {/* Breakdown */}
              <div className="space-y-3">
                {[
                  { label: 'Пассивный доход в месяц', value: formatMoney(results.monthlyRental), icon: 'Wallet' },
                  { label: 'Аренда за период', value: formatMoney(results.totalRental), icon: 'CalendarDays' },
                  { label: 'Рост стоимости объекта', value: `+${formatMoney(results.capitalGain)}`, icon: 'TrendingUp' },
                  ...(taxOptimize ? [{ label: 'Экономия на налогах', value: `+${formatMoney(results.taxSaved)}`, icon: 'BadgePercent' }] : []),
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between py-2.5 border-b border-white/8">
                    <div className="flex items-center gap-2.5">
                      <Icon name={item.icon} size={14} className="text-[#9d8857]/70" />
                      <span className="font-sans text-white/55 text-xs">{item.label}</span>
                    </div>
                    <span className="font-sans text-white text-sm font-medium">{item.value}</span>
                  </div>
                ))}
              </div>

              {taxOptimize && (
                <div className="mt-4 bg-[#3e563f]/30 rounded-lg p-3 flex items-start gap-2">
                  <Icon name="Info" size={14} className="text-[#9d8857] mt-0.5 flex-shrink-0" />
                  <p className="font-sans text-white/60 text-xs leading-relaxed">
                    Налоговый режим ИП (УСН 6%) снижает ставку с 13% до 6%. Экономия за {years} лет: {formatMoney(results.taxSaved)}
                  </p>
                </div>
              )}

              <a
                href="https://t.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full mt-6 bg-[#9d8857] text-white font-sans text-sm px-6 py-3.5 rounded-full hover:bg-[#b8a06e] transition-colors duration-300"
              >
                Получить персональный разбор
                <Icon name="ArrowRight" size={15} />
              </a>

              <p className="font-sans text-white/30 text-xs text-center mt-3">
                * Расчёт ориентировочный. Уточняйте у эксперта.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
