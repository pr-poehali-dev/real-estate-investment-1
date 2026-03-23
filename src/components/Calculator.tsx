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

  const sliderProgress = ((budget - 6_000_000) / (100_000_000 - 6_000_000)) * 100;

  return (
    <section id="calculator" className="py-10 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-12">
        <div className="text-center mb-6 md:mb-10">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="section-divider" />
            <span className="text-[#9d8857] font-sans text-sm tracking-[0.15em] uppercase">Инструмент</span>
            <div className="w-14 h-0.5 bg-gradient-to-l from-[#9d8857] to-transparent" />
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-[#2a2218] font-light">
            Калькулятор доходности
          </h2>
          <p className="font-sans text-[#2a2218]/60 mt-2 text-sm max-w-md mx-auto">
            Рассчитайте реальную доходность вашей инвестиции с учётом роста стоимости и налогов
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 md:gap-6 items-start">
          {/* Inputs */}
          <div className="lg:col-span-3 space-y-4">
            {/* Budget */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="font-sans text-sm text-[#2a2218]/80 font-medium">Бюджет инвестиции</label>
                <span className="font-serif text-[#9d8857] text-lg">{formatMoney(budget)}</span>
              </div>
              <input
                type="range"
                min={6_000_000}
                max={100_000_000}
                step={500_000}
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #9d8857 ${sliderProgress}%, #e3dad2 0%)`,
                }}
              />
              <div className="flex justify-between mt-1.5">
                <span className="font-sans text-xs text-[#2a2218]/40">6 млн</span>
                <span className="font-sans text-xs text-[#2a2218]/40">100 млн</span>
              </div>
            </div>

            {/* Property type */}
            <div>
              <label className="font-sans text-sm text-[#2a2218]/80 font-medium block mb-2">Тип объекта</label>
              <div className="grid grid-cols-3 gap-2">
                {propertyTypes.map((pt) => (
                  <button
                    key={pt.value}
                    onClick={() => setPropType(pt.value)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-left transition-all duration-200 ${
                      propType === pt.value
                        ? 'border-[#9d8857] bg-[#9d8857]/8 shadow-sm'
                        : 'border-[#e3dad2] bg-[#f7f3ef] hover:border-[#9d8857]/40'
                    }`}
                  >
                    <Icon name={pt.icon} size={14} className={`flex-shrink-0 ${propType === pt.value ? 'text-[#9d8857]' : 'text-[#2a2218]/50'}`} />
                    <div className="min-w-0">
                      <div className={`font-sans text-xs leading-tight truncate ${propType === pt.value ? 'text-[#9d8857] font-medium' : 'text-[#2a2218]/60'}`}>
                        {pt.label}
                      </div>
                      <div className={`font-sans text-xs ${propType === pt.value ? 'text-[#9d8857]' : 'text-[#2a2218]/40'}`}>
                        ~{pt.yield}%/год
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Location */}
            <div>
              <label className="font-sans text-sm text-[#2a2218]/80 font-medium block mb-2">Локация</label>
              <div className="flex flex-wrap gap-2">
                {locations.map((loc) => (
                  <button
                    key={loc.value}
                    onClick={() => setLocation(loc.value)}
                    className={`font-sans text-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full border transition-all duration-200 ${
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
              <div className="flex items-center justify-between mb-2">
                <label className="font-sans text-sm text-[#2a2218]/80 font-medium">Горизонт инвестирования</label>
                <span className="font-serif text-[#9d8857] text-lg">{years} {years === 1 ? 'год' : years < 5 ? 'года' : 'лет'}</span>
              </div>
              <div className="flex gap-2">
                {[1, 3, 5, 7, 10].map((y) => (
                  <button
                    key={y}
                    onClick={() => setYears(y)}
                    className={`flex-1 py-2 md:py-2.5 rounded-lg font-sans text-sm border transition-all duration-200 ${
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
          <div className="lg:col-span-2 lg:sticky lg:top-6">
            <div className="bg-[#2a2218] rounded-2xl p-5 md:p-7 text-white">
              <div className="flex items-center gap-2 mb-5 md:mb-6">
                <Icon name="Calculator" size={18} className="text-[#9d8857]" />
                <span className="font-sans text-sm text-white/60 uppercase tracking-wider">Результат</span>
              </div>

              {/* Main metric */}
              <div className="bg-[#9d8857]/15 rounded-xl p-4 md:p-5 mb-5 md:mb-6 text-center border border-[#9d8857]/20">
                <div className="font-sans text-white/50 text-xs mb-2">Общая доходность за {years} лет</div>
                <div className="font-serif text-4xl md:text-5xl text-[#9d8857]">{results.totalReturn}%</div>
                <div className="font-sans text-white/60 text-xs mt-1">{formatMoney(results.totalAfterTax)} чистый доход</div>
              </div>

              {/* Breakdown */}
              <div className="space-y-2.5 md:space-y-3">
                {[
                  { label: 'Пассивный доход в месяц', value: formatMoney(results.monthlyRental), icon: 'Wallet' },
                  { label: 'Аренда за период', value: formatMoney(results.totalRental), icon: 'CalendarDays' },
                  { label: 'Рост стоимости объекта', value: `+${formatMoney(results.capitalGain)}`, icon: 'TrendingUp' },
                  ...(taxOptimize ? [{ label: 'Экономия на налогах', value: `+${formatMoney(results.taxSaved)}`, icon: 'BadgePercent' }] : []),
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-white/8">
                    <div className="flex items-center gap-2">
                      <Icon name={item.icon} size={13} className="text-[#9d8857]/70" />
                      <span className="font-sans text-white/55 text-xs">{item.label}</span>
                    </div>
                    <span className="font-sans text-white text-sm font-medium">{item.value}</span>
                  </div>
                ))}
              </div>

              {taxOptimize && (
                <div className="mt-4 bg-[#3e563f]/30 rounded-lg p-3 flex items-start gap-2">
                  <Icon name="Info" size={13} className="text-[#9d8857] mt-0.5 flex-shrink-0" />
                  <p className="font-sans text-white/60 text-xs leading-relaxed">
                    Налоговый режим ИП (УСН 6%) снижает ставку с 13% до 6%. Экономия за {years} лет: {formatMoney(results.taxSaved)}
                  </p>
                </div>
              )}

              <a
                href="https://t.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full mt-5 md:mt-6 bg-[#9d8857] text-white font-sans text-sm px-6 py-3.5 rounded-full hover:bg-[#b8a06e] transition-colors duration-300"
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

        {/* Note about 1M entry */}
        <div className="mt-8 md:mt-10 bg-[#f7f3ef] border border-[#e3dad2] rounded-2xl p-5 md:p-6 flex gap-4 items-start">
          <div className="w-9 h-9 rounded-xl bg-[#9d8857]/12 flex items-center justify-center flex-shrink-0 mt-0.5">
            <Icon name="Lightbulb" size={18} className="text-[#9d8857]" />
          </div>
          <div>
            <div className="font-sans text-sm font-medium text-[#2a2218] mb-1">Начать можно и с 1 млн рублей</div>
            <p className="font-sans text-sm text-[#2a2218]/65 leading-relaxed">
              При небольшом стартовом взносе пассивный доход будет символическим или нулевым — ипотечный платёж съедает аренду.
              Но через 15–20 лет вы становитесь полноправным владельцем недвижимости стоимостью до 15 млн рублей,
              вложив в покупку всего 1 млн. Это стратегия долгосрочного накопления, а не текущего дохода.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;