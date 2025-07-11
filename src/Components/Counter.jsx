import { useState, useEffect, useRef } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [mala, setMala] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    if (count === 108) {
      setMala((prev) => prev + 1);
      setCount(0);
    }

    if (count > 108) {
      const newM = Math.floor(count / 108);
      const remM = count % 108;
      setMala((prev) => prev + newM);
      setCount(remM);
    }
  }, [count]);

  const increment = () => setCount((prev) => prev + 1);
  const incrementAll = () => setCount((prev) => prev + 106);
  const decrement = () => setCount((prev) => Math.max(prev - 1, 0));
  const reset = () => setCount(0);
  const resetAll = () => {
    setCount(0);
    setMala(0);
  };

  return (
    <div className="bg-[#1a1a2e] text-white min-h-screen flex flex-col items-center justify-center px-4 pt-10">
      <h2 className="text-4xl font-bold text-yellow-400 mb-6">📿 Counter Mala</h2>

      <div className="text-center mb-6 space-y-2">
        <p className="text-2xl text-cyan-400 font-semibold">
          Count: <span className="text-white">{count}</span>
        </p>
        <p className="text-2xl text-cyan-400 font-semibold">
          Mala: <span className="text-white">{mala}</span>
        </p>
      </div>

      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={increment}
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-full transition duration-300"
          >
            🔘 Click
          </button>

          <button
            onClick={incrementAll}
            className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-3 px-6 rounded-full transition duration-300"
          >
            ➕ +106
          </button>

          <button
            onClick={reset}
            className="bg-[#0f0f1c] hover:bg-[#20203a] text-white border border-cyan-400 font-bold py-3 px-6 rounded-full transition duration-300"
          >
            🌺 Reset Count
          </button>
        </div>

        <button
          onClick={resetAll}
          className="bg-red-600 hover:bg-red-500 text-white font-bold py-3 px-8 rounded-full border border-red-400 transition duration-300"
        >
          🔄 Reset All
        </button>
      </div>
    </div>
  );
}

export default Counter;
