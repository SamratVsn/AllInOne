import React, { useEffect, useState } from 'react';

export default function Clock() {
  const [time, setTime] = useState('00:00:00');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      setTime(`${hours}:${minutes}:${seconds}`);
    };

    updateClock();
    const intervalId = setInterval(updateClock, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] to-[#1e293b] p-4">
      <div className="text-white font-mono text-5xl sm:text-6xl md:text-7xl px-10 py-6 rounded-2xl shadow-xl border border-white/10 backdrop-blur-md bg-white/10">
        {time}
      </div>
    </div>
  );
}
