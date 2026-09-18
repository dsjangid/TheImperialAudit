'use client';

import React, { useEffect, useState } from 'react';

export const LiveClock: React.FC = () =>{
 const [timeStr, setTimeStr] = useState('00:00:00');
 const [tzStr, setTzStr] = useState('LOCAL');

 useEffect(() =>{
 const updateTime = () =>{
 const now = new Date();
 const hrs = String(now.getHours()).padStart(2, '0');
 const mins = String(now.getMinutes()).padStart(2, '0');
 const secs = String(now.getSeconds()).padStart(2, '0');
 setTimeStr(`${hrs}:${mins}:${secs}`);
 
 const tz = Intl.DateTimeFormat().resolvedOptions().timeZone.split('/').pop()?.replace('_', ' ') || 'LOCAL';
 setTzStr(tz.toUpperCase());
 };

 updateTime();
 const interval = setInterval(updateTime, 1000);
 return () =>clearInterval(interval);
 }, []);

  return (
    <div className="flex items-center gap-1.5 font-mono text-[13px] tracking-[0.15em] select-none">
      <span className="w-1.5 h-1.5 rounded-full bg-[#C62828] inline-block"></span>
      <span className="font-bold text-[#E53935] tabular-nums">{timeStr}</span>
      <span className="text-[13px] text-[#A3A39D] uppercase">{tzStr}</span>
    </div>
  );
};
