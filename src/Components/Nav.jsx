import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logoo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Jokes", path: "/Jokes" },
    { name: "Clock", path: "/Clock" },
    { name: "ToDo", path: "/ToDo" },
    { name: "Counter", path: "/Counter" },
    { name: "More", path: "/More" },
    { name: "Contact", path: "/Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-tr from-[#0f172a] to-[#1e293b] shadow-md text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img src={Logo} alt="Logo" className="h-10 w-auto" />
            <span className="text-indigo-300 font-semibold text-lg hidden sm:inline">AllInOneVsn</span>
          </Link>

          <div className="hidden md:flex space-x-6 text-sm font-medium">
            {navLinks.map(({ name, path }) => (
              <Link
                key={name}
                to={path}
                className="hover:text-sky-300 transition"
              >
                {name}
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-sky-200 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <line x1="6" y1="6" x2="18" y2="18" strokeWidth="2" strokeLinecap="round" />
                  <line x1="6" y1="18" x2="18" y2="6" strokeWidth="2" strokeLinecap="round" />
                </svg>
              ) : (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <line x1="4" y1="6" x2="20" y2="6" strokeWidth="2" strokeLinecap="round" />
                  <line x1="4" y1="12" x2="20" y2="12" strokeWidth="2" strokeLinecap="round" />
                  <line x1="4" y1="18" x2="20" y2="18" strokeWidth="2" strokeLinecap="round" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#1e293b] border-t border-sky-700">
          <div className="flex flex-col px-6 py-4 space-y-3 text-base font-medium">
            {navLinks.map(({ name, path }) => (
              <Link
                key={name}
                to={path}
                onClick={closeMenu}
                className="text-sky-200 hover:text-white transition"
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
