import React from 'react';
import Krishna from '../assets/Krishna.png'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="bg-[#1a1a2e] text-white min-h-screen flex flex-col items-center justify-center px-4 py-8">
      <div className="text-center">
        <img
          src={Krishna}
          alt="3D Avatar"
          className="w-48 h-48 mx-auto mb-4"
        />
        <h1 className="text-lg text-gray-300 mb-1">HI, I AM SAMRAT, I BUILD</h1>
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-400">
          THE PERFECT PROJECT HUB
        </h2>
        <p className="text-sm text-gray-400 mt-2">
          For learning, testing & growing!
        </p>
        <p className="text-xs text-gray-500 mt-6">
          A collection of beginner projects bundled into one place.
        </p>
      </div>

      <div className="mt-10 space-x-4">
        <Link
          path="/Jokes"
          className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-2 px-6 rounded-xl transition duration-300"
        >
          Try Joke Generator
        </Link>
        <Link
          path="/Contact"
          className="border border-yellow-400 text-yellow-400 hover:bg-yellow-500 hover:text-black font-semibold py-2 px-6 rounded-xl transition duration-300"
        >
          Contact Me
        </Link>
      </div>

      <footer className="absolute bottom-4 text-xs text-gray-500">
        &copy; 2025 AllInOneVsn. Made with ❤️ by Samrat.
      </footer>
    </div>
  );
}

export default Home;
