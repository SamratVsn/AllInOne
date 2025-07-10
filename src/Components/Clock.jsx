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
    <div className="flex justify-center items-center min-h-screen bg-[#1a1a2e] text-[#f1f1f1] font-mono">
      <div className="text-6xl px-10 py-5 bg-[#16213e] border-2 border-yellow-400 rounded-lg shadow-[0_0_10px_#e4d804]">
        {time}
      </div>
    </div>
  );
}
