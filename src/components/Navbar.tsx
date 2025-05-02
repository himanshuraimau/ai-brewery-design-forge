
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 glass-panel bg-brewery-background/80' : 'py-5 bg-transparent'
      } ${isOpen ? 'bg-brewery-background' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-space font-bold bg-gradient-to-r from-brewery-primary-purple to-brewery-secondary-pink text-transparent bg-clip-text">
              AI Brewery
            </span>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="nav-link">Home</a>
            <a href="#achievements" className="nav-link">Achievements</a>
            <a href="#team" className="nav-link">Our Team</a>
            <a href="#timeline" className="nav-link">Timeline</a>
            <a href="#events" className="nav-link">Upcoming Events</a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 glass-panel animate-fade-in-up">
            <div className="flex flex-col space-y-4 px-4">
              <a href="#home" className="nav-link block py-2" onClick={() => setIsOpen(false)}>Home</a>
              <a href="#achievements" className="nav-link block py-2" onClick={() => setIsOpen(false)}>Achievements</a>
              <a href="#team" className="nav-link block py-2" onClick={() => setIsOpen(false)}>Our Team</a>
              <a href="#timeline" className="nav-link block py-2" onClick={() => setIsOpen(false)}>Timeline</a>
              <a href="#events" className="nav-link block py-2" onClick={() => setIsOpen(false)}>Upcoming Events</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
