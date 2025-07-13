import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { RefreshCcw, Plus, Target } from "lucide-react";

function Counter() {
  const [count, setCount] = useState(0);
  const [mala, setMala] = useState(0);

  useEffect(() => {
    if (count >= 108) {
      const newM = Math.floor(count / 108);
      const remM = count % 108;
      setMala((prev) => prev + newM);
      setCount(remM);
    }
  }, [count]);

  const increment = () => setCount((prev) => prev + 1);
  const incrementAll = () => setCount((prev) => prev + 108);
  const reset = () => setCount(0);
  const resetAll = () => {
    setCount(0);
    setMala(0);
  };

  return (
    <div className="bg-gradient-to-br from-[#1e1e2f] to-[#151522] text-white min-h-screen flex flex-col items-center justify-center px-4 pt-24">
      <motion.h2
        className="text-4xl font-bold text-indigo-300 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Tally Counter
      </motion.h2>

      <motion.div
        className="text-center mb-10 space-y-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <p className="text-2xl text-sky-400 font-semibold">
          Count: <span className="text-white font-bold">{count}</span>
        </p>
        <p className="text-2xl text-sky-400 font-semibold">
          Mala: <span className="text-white font-bold">{mala}</span>
        </p>
      </motion.div>

      <motion.div
        className="flex flex-col items-center gap-8"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <div className="flex flex-wrap justify-center gap-5">
          <motion.button
            onClick={increment}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-gradient-to-tr from-sky-500 to-sky-400 hover:from-sky-400 hover:to-sky-300 text-black font-bold py-3 px-6 rounded-xl shadow-lg shadow-sky-500/30 transition duration-300"
          >
            <Target size={18} />
            Count +1
          </motion.button>

          <motion.button
            onClick={incrementAll}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-gradient-to-tr from-indigo-500 to-indigo-400 hover:from-indigo-400 hover:to-indigo-300 text-black font-bold py-3 px-6 rounded-xl shadow-lg shadow-indigo-500/30 transition duration-300"
          >
            <Plus size={18} />
            Count +108
          </motion.button>

          <motion.button
            onClick={reset}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-sky-400 text-white font-semibold py-3 px-6 rounded-xl backdrop-blur-md shadow-sm transition duration-300"
          >
            <RefreshCcw size={18} />
            Reset Count
          </motion.button>
        </div>

        <motion.button
          onClick={resetAll}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 bg-gradient-to-tr from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-bold py-3 px-10 rounded-xl border border-red-400 shadow-md transition duration-300"
        >
          <RefreshCcw size={18} />
          Reset All
        </motion.button>
      </motion.div>

      <footer className="mt-12 text-slate-500 text-xs border-t border-slate-700 pt-4">
        &copy; 2025 <span className="text-indigo-300 font-medium">AllInOneVsn</span>. Made with 💙 by Samrat.
      </footer>
    </div>
  );
}

export default Counter;
