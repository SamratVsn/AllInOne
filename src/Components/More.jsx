import React from 'react';
import { Link } from 'react-router-dom';

function More() {
  const projects = [
    // { name: "Typing Speed Test", path: "/Typing" },
    // {name: "Rock Paper Scissor", path: "/RPS"},
    {name: "Tic Tac Toe", path: "/TicTacToe"},
    // { name: "Weather App", path: "/Weather" },
    {name: "Work In Progress", path: "/"},
    {name: "Work In Progress", path: "/More"},
    {name: "Work In Progress", path: "/More"},
    {name: "Work In Progress", path: "/More"},
    {name: "Work In Progress", path: "/More"},
  ];

  return (
    <div className="bg-[#1a1a2e] text-white min-h-screen flex flex-col items-center pt-28 px-6">
      <h1 className="text-4xl font-bold text-yellow-400 mb-4">🧠 More Projects</h1>
      <p className="text-gray-400 text-center max-w-lg mb-10">
        Explore more projects as I continue my journey learning React. These projects are for fun, growth, and hands-on experience!
      </p>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 w-full max-w-5xl">
        {projects.map((proj, idx) => (
          <Link
            key={idx}
            to={proj.path}
            className="bg-[#0f0f1c] hover:bg-[#20203a] border border-yellow-500 text-white rounded-xl p-6 text-center transition duration-300 shadow-md hover:shadow-yellow-400/30"
          >
            {proj.name}
          </Link>
        ))}
      </div>

      <footer className="mt-16 text-xs text-gray-500">
        &copy; 2025 AllInOneVsn. Made with ❤️ by Samrat.
      </footer>
    </div>
  );
}

export default More;
