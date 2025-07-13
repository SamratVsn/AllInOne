  import React, { useState } from "react";
  import { Link } from "react-router-dom";
  import Logo from "../assets/Logoo.png";

  export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => setIsOpen(false);

    return (
      <nav className="bg-[#1a1a2e] fixed top-0 left-0 w-full z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center">
              <img src={Logo} alt="AllInOneVsn Logo" className="h-10 w-auto" />
            </div>

            <div className="hidden md:flex space-x-8 font-medium text-white text-sm md:text-base">
              <Link
                to="/"
                className="hover:text-yellow-400 transition"
              >
                Home
              </Link>
              <Link
                to="/Jokes"
                className="hover:text-yellow-400 transition"
              >
                Jokes
              </Link>
              <Link
                to="/Clock"
                className="hover:text-yellow-400 transition"
              >
                Clock
              </Link>
              <Link
                to="/ToDo"
                className="hover:text-yellow-400 transition"
              >
                ToDo
              </Link>
              <Link
                to="/Counter"
                className="hover:text-yellow-400 transition"
              >
                Counter
              </Link>
              <Link
                to="/More"
                className="hover:text-yellow-400 transition"
              >
                More
              </Link>
              <Link
                to="/Contact"
                className="hover:text-yellow-400 transition"
              >
                Contact
              </Link>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
                className="text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded"
              >
                {isOpen ? (
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                ) : (
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <div
          className={`md:hidden fixed top-16 left-0 w-full bg-[#1a1a2e] border-t border-yellow-400 shadow-lg transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="flex flex-col space-y-4 py-6 px-6 text-white font-medium text-lg">
            <Link onClick={handleLinkClick} to="/" className="hover:text-yellow-400">
              Home
            </Link>
            <Link onClick={handleLinkClick} to="/Jokes" className="hover:text-yellow-400">
              Jokes
            </Link>
            <Link onClick={handleLinkClick} to="/Clock" className="hover:text-yellow-400">
              Clock
            </Link>
            <Link onClick={handleLinkClick} to="/ToDo" className="hover:text-yellow-400">
              ToDo
            </Link>
            <Link onClick={handleLinkClick} to="/Counter" className="hover:text-yellow-400">
              Counter
            </Link>
            <Link onClick={handleLinkClick} to="/More" className="hover:text-yellow-400">
              More
            </Link>
            <Link onClick={handleLinkClick} to="/Contact" className="hover:text-yellow-400">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    );
  }
