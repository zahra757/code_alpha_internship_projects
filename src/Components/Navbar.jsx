import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="bg-black text-white h-[5rem] w-full fixed top-0 z-10 border-b-2 border-yellow-400">
      <div className="flex justify-between items-center px-4 mt-5">
        {/* Logo */}
        <h2 className="text-2xl font-bold">ZAHRA</h2>

        {/* Hamburger Menu for Mobile */}
        <button
          className="block lg:hidden text-yellow-400 focus:outline-none"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Desktop Navbar */}
        <nav className="hidden lg:flex">
          <ul className="flex justify-evenly gap-6 w-full">
            <li className="hover:underline decoration-yellow-400">
              <Link to="#HOME" smooth>
                HOME
              </Link>
            </li>
            <li className="hover:underline decoration-yellow-400">
              <Link to="#ABOUTME" smooth>
                ABOUT ME
              </Link>
            </li>
            <li className="hover:underline decoration-yellow-400">
              <Link to="#SERVICES" smooth>
                SERVICES
              </Link>
            </li>
            <li className="hover:underline decoration-yellow-400">
              <Link to="#SKILLS" smooth>
                SKILLS
              </Link>
            </li>
            <li className="hover:underline decoration-yellow-400">
              <Link to="#PROJECTS" smooth>
                PROJECTS
              </Link>
            </li>
            <li className="hover:underline decoration-yellow-400">
              <Link to="#CONTACT" smooth>
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="lg:hidden bg-black p-4 w-fit float-right rounded-md ">
          <ul className="flex flex-col space-y-4">
            <li className="hover:underline decoration-yellow-400">
              <Link to="#HOME" smooth onClick={() => setIsDropdownOpen(false)}>
                HOME
              </Link>
            </li>
            <li className="hover:underline decoration-yellow-400">
              <Link to="#ABOUTME" smooth onClick={() => setIsDropdownOpen(false)}>
                ABOUT ME
              </Link>
            </li>
            <li className="hover:underline decoration-yellow-400">
              <Link to="#SERVICES" smooth onClick={() => setIsDropdownOpen(false)}>
                SERVICES
              </Link>
            </li>
            <li className="hover:underline decoration-yellow-400">
              <Link to="#SKILLS" smooth onClick={() => setIsDropdownOpen(false)}>
                SKILLS
              </Link>
            </li>
            <li className="hover:underline decoration-yellow-400">
              <Link to="#PROJECTS" smooth onClick={() => setIsDropdownOpen(false)}>
                PROJECTS
              </Link>
            </li>
            <li className="hover:underline decoration-yellow-400">
              <Link to="#CONTACT" smooth onClick={() => setIsDropdownOpen(false)}>
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
