import React from 'react';
import { Link } from 'react-router-dom';

function More() {
  const projects = [
    { name: "Tic Tac Toe", path: "/TicTacToe" },
    { name: "Weather App", path: "/Weather" },
    { name: "Work In Progress", path: "/" },
    { name: "Work In Progress", path: "/More" },
    { name: "Work In Progress", path: "/More" },
    { name: "Work In Progress", path: "/More" },
  ];

  return (
    <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white min-h-screen flex flex-col items-center pt-28 px-6">
      <h1 className="text-4xl font-bold text-sky-300 mb-4">🧠 More Projects</h1>
      <p className="text-slate-300 text-center max-w-lg mb-10">
        Explore more projects as I continue my journey learning React. These projects are for fun, growth, and hands-on experience!
      </p>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 w-full max-w-5xl">
        {projects.map((proj, idx) => (
          <Link
            key={idx}
            to={proj.path}
            className="bg-white/10 border border-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-2xl p-6 text-center font-medium shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
          >
            <div className="text-xl">{proj.name}</div>
          </Link>
        ))}
      </div>

      <footer className="mt-16 text-xs text-slate-400 border-t border-slate-700 pt-4">
        &copy; 2025 <span className="text-sky-300 font-medium">AllInOneVsn</span>. Made with ❤️ by Samrat.
      </footer>
    </div>
  );
}

export default More;
