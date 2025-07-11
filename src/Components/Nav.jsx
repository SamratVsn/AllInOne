import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logoo.png';

function Navbar() {
  return (
    <nav className="bg-[#1a1a2e] w-full px-6 py-4 flex justify-around items-center shadow-lg fixed top-0 left-0 z-50">
      <div className="flex items-center">
        <img src={Logo} alt="AllInOneVsn Logo" className="h-10 w-auto mr-2" />
        <span className="text-xl text-white font-semibold">AllInOneVsn</span>
      </div>

      <div className="space-x-6 text-sm md:text-base font-medium">
        <Link to="/" className="text-white hover:text-yellow-400 transition">
          Home
        </Link>
        <Link to="/Jokes" className="text-white hover:text-yellow-400 transition">
          Jokes
        </Link>
        <Link to="/Clock" className="text-white hover:text-yellow-400 transition">
          Clock
        </Link>
        <Link to="/ToDo" className="text-white hover:text-yellow-400 transition">
          ToDo
        </Link>
        <Link to="/Counter" className="text-white hover:text-yellow-400 transition">
          Counter
        </Link>
        <Link to="/More" className="text-white hover:text-yellow-400 transition">
          More
        </Link>
        <Link to="/Contact" className="text-white hover:text-yellow-400 transition">
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
