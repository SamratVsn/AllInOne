import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Krishna from '../assets/Krishna.png';
import { Laugh, Mail } from 'lucide-react';

function Home() {
  return (
    <div className="bg-gradient-to-br from-[#1e1e2f] to-[#151522] text-white min-h-screen flex flex-col items-center justify-center px-4 py-10 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl"
      >
        <motion.img
          src={Krishna}
          alt="3D Avatar"
          className="w-44 h-44 mx-auto mb-6 rounded-full border-4 border-indigo-400 shadow-xl"
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ type: "spring", stiffness: 200 }}
        />

        <h1 className="text-lg text-slate-300">
          Hi, I am <span className="text-indigo-400 font-semibold">Samrat</span>, and this is
        </h1>
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-indigo-300 mt-2 tracking-wide"
          whileInView={{ scale: [0.9, 1], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
        >
          AllInOneVsn 🚀
        </motion.h2>

        <p className="text-md text-slate-400 mt-4">
          A space to <span className="text-sky-300 font-medium">learn</span>, <span className="text-sky-300 font-medium">test</span> & <span className="text-sky-300 font-medium">grow</span>.
        </p>
        <p className="text-sm text-slate-500 mt-3">
          A curated bundle of beginner-friendly web projects built with ❤️
        </p>

        <motion.div
          className="mt-8 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Link
            to="/Jokes"
            className="flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-black font-medium py-2 px-6 rounded-xl transition duration-300 shadow-md"
          >
            <Laugh size={18} />
            Try Joke Generator
          </Link>
          <Link
            to="/Contact"
            className="flex items-center gap-2 border border-indigo-400 text-indigo-300 hover:bg-indigo-400 hover:text-black font-medium py-2 px-6 rounded-xl transition duration-300 shadow-md"
          >
            <Mail size={18} />
            Contact Me
          </Link>
        </motion.div>
      </motion.div>

      {/* Decorative Glow */}
      <motion.div
        className="absolute top-[-100px] right-[-100px] w-72 h-72 bg-indigo-500 opacity-10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <footer className="absolute bottom-4 text-xs text-slate-500">
        &copy; 2025 <span className="text-indigo-300 font-medium">AllInOneVsn</span>. Built with ❤️ by Samrat.
      </footer>
    </div>
  );
}

export default Home;
