import { useState } from "react";
import logo from "../assets/logo-text.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white">
      <nav className="mx-auto max-w-7xl px-6 py-4 md:px-10 lg:px-16">

        <div className="flex items-center justify-between">

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-gray-800 md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? "✕" : "☰"}
          </button>

          {/* Logo */}
          <a href="#" className="flex items-center">
            <img
              src={logo}
              alt="Dev Stack"
              className="w-28 md:w-32"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-7 md:flex">

            <a
              href="#"
              className="font-medium text-[#D91B7E]"
            >
              Home
            </a>

            <a
              href="#technologies"
              className="font-medium text-gray-600 transition hover:text-[#D91B7E]"
            >
              Technologies
            </a>

            <a
              href="#projects"
              className="font-medium text-gray-600 transition hover:text-[#D91B7E]"
            >
              Projects
            </a>

            <a
              href="#about"
              className="font-medium text-gray-600 transition hover:text-[#D91B7E]"
            >
              About
            </a>

            <a
              href="#contact"
              className="font-medium text-gray-600 transition hover:text-[#D91B7E]"
            >
              Contact
            </a>

          </div>

          {/* Desktop Buttons */}
          <div className="hidden items-center gap-5 md:flex">

            <button className="font-medium text-gray-700 hover:text-[#D91B7E]">
              Sign In
            </button>

            <button className="brand-gradient rounded-full px-5 py-2.5 font-medium text-white transition hover:opacity-90">
              Sign Up
            </button>

          </div>

          {/* Mobile Right Buttons */}
          <div className="flex items-center gap-2 md:hidden">

            <button className="text-sm font-medium text-gray-700">
              Sign In
            </button>

            <button className="brand-gradient rounded-full px-3 py-2 text-xs font-medium text-white">
              Sign Up
            </button>

          </div>

        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="mt-4 border-t border-gray-100 pt-4 md:hidden">

            <div className="flex flex-col gap-4">

              <a
                href="#"
                onClick={() => setIsOpen(false)}
                className="font-medium text-[#D91B7E]"
              >
                Home
              </a>

              <a
                href="#technologies"
                onClick={() => setIsOpen(false)}
                className="font-medium text-gray-600"
              >
                Technologies
              </a>

              <a
                href="#projects"
                onClick={() => setIsOpen(false)}
                className="font-medium text-gray-600"
              >
                Projects
              </a>

              <a
                href="#about"
                onClick={() => setIsOpen(false)}
                className="font-medium text-gray-600"
              >
                About
              </a>

              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="font-medium text-gray-600"
              >
                Contact
              </a>

            </div>

          </div>
        )}

      </nav>
    </header>
  );
};

export default Navbar;