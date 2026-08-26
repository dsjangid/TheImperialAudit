'use client';

import React, { useEffect, useState } from 'react';

interface LiveSpendCounterProps {
  lang?: 'en' | 'ru';
  ratePerSecondUsd?: number;
  ratePerSecondRub?: number;
}

export const LiveSpendCounter: React.FC<LiveSpendCounterProps> = ({
  lang = 'en',
  ratePerSecondUsd = 5868,
  ratePerSecondRub = 534000,
}) => {
  const [elapsedSeconds, setElapsedSeconds] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const totalSpentUsd = elapsedSeconds * ratePerSecondUsd;
  const totalSpentRub = elapsedSeconds * ratePerSecondRub;

  const formattedUsd = new Intl.NumberFormat('en-US').format(totalSpentUsd);
  const formattedRub = new Intl.NumberFormat('ru-RU').format(totalSpentRub);
  const millionUsd = (totalSpentUsd / 1_000_000).toFixed(1);

  if (lang === 'ru') {
    return (
      <div>
        <div
          className="font-serif text-text text-[clamp(44px,10vw,140px)] tracking-[-0.01em] leading-none whitespace-nowrap tabular-nums"
          style={{ fontVariationSettings: '"opsz" 60', fontWeight: 900 }}
        >
          ₽{formattedRub}
        </div>
        <p className="font-mono text-[14px] text-[#F4F2EE]/50 mt-3 tracking-[0.1em] tabular-nums">
          ≈  · ≈ {millionUsd} млн $
        </p>
      </div>
    );
  }

  return (
    <div>
      <div
        className="font-serif text-text text-[clamp(44px,10vw,140px)] tracking-[-0.01em] leading-none whitespace-nowrap tabular-nums"
        style={{ fontVariationSettings: '"opsz" 60', fontWeight: 900 }}
      >
        
      </div>
      <p className="font-mono text-[14px] text-[#F4F2EE]/50 mt-3 tracking-[0.1em] tabular-nums">
        ≈ {millionUsd} MN $ · ≈ ₽{formattedRub}
      </p>
    </div>
  );
};
