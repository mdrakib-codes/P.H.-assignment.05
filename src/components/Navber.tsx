import { useState } from 'react'
import logo from '../assets/logo-text.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white">
      <nav className="max-w-7xl mx-auto px-6 md:px-20 py-4">

        {/* Main Navbar */}
        <div className="flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={logo}
              alt=""
            />
          </div>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <a href="" className="text-[#D91B7E]">Home</a>
            <a href="">Technologies</a>
            <a href="">Projects</a>
            <a href="">About</a>
            <a href="">Contact</a>
          </div>


          {/* Desktop Right Side */}
          <div className="hidden md:flex items-center gap-6">
            <button className="font-medium">
              Sign In
            </button>

            <button className="rounded-full bg-[#D91B7E] px-5 py-2 font-medium text-white">
              Sign Up
            </button>
          </div>


          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl"
          >
            {isOpen ? '✕' : '☰'}
          </button>

        </div>


        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-4 border-t pt-4">

            <a href="" className="text-[#D91B7E]">Home</a>
            <a href="">Technologies</a>
            <a href="">Projects</a>
            <a href="">About</a>
            <a href="">Contact</a>

            <div className="flex items-center gap-4 pt-2">
              <button className="font-medium">
                Sign In
              </button>

              <button className="rounded-full bg-[#D91B7E] px-5 py-2 font-medium text-white">
                Sign Up
              </button>
            </div>

          </div>
        )}

      </nav>
    </header>
  )
}

export default Navbar;