import React, { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-transparent text-white py-6 z-50 shadow-md transition-all duration-300 ${
        scrolled ? 'transform -translate-y-full' : 'transform translate-y-0'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        <h1
          className={`text-4xl font-extrabold ${scrolled ? 'text-primary' : 'text-white'} transition-colors duration-300 ease-in-out`}
        >
          MALEPATI CHAITANYA
        </h1>

        {/* Mobile Hamburger Menu */}
        <button
          className="lg:hidden text-3xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '×' : '≡'}
        </button>

        {/* Desktop Navigation */}
        <nav className={`lg:flex space-x-8 text-lg ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
          <ul className="flex space-x-8 text-lg">
            <li><a href="#about" className="hover:text-secondary">About</a></li>
            <li><a href="#skills" className="hover:text-secondary">Skills</a></li>
            <li><a href="#projects" className="hover:text-secondary">Projects</a></li>
            <li><a href="#experience" className="hover:text-secondary">Experience</a></li>
            <li><a href="#contact" className="hover:text-secondary">Contact</a></li>
          </ul>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-black bg-opacity-50 absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center ${
          isMenuOpen ? 'block' : 'hidden'
        }`}
      >
        <ul className="space-y-4 text-2xl text-white">
          <li><a href="#about" className="hover:text-secondary">About</a></li>
          <li><a href="#skills" className="hover:text-secondary">Skills</a></li>
          <li><a href="#projects" className="hover:text-secondary">Projects</a></li>
          <li><a href="#experience" className="hover:text-secondary">Experience</a></li>
          <li><a href="#contact" className="hover:text-secondary">Contact</a></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;