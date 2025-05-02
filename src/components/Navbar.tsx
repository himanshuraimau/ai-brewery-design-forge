
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

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

  // Determine if a nav link is active
  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

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
            <Link to="/" className="text-2xl font-space font-bold bg-gradient-to-r from-brewery-primary-purple to-brewery-secondary-pink text-transparent bg-clip-text">
              AI Brewery
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`nav-link ${isActive('/') ? 'text-brewery-primary-purple' : ''}`}>Home</Link>
            <Link to="/achievements" className={`nav-link ${isActive('/achievements') ? 'text-brewery-primary-purple' : ''}`}>Achievements</Link>
            <Link to="/team" className={`nav-link ${isActive('/team') ? 'text-brewery-primary-purple' : ''}`}>Our Team</Link>
            <Link to="/timeline" className={`nav-link ${isActive('/timeline') ? 'text-brewery-primary-purple' : ''}`}>Timeline</Link>
            <Link to="/events" className={`nav-link ${isActive('/events') ? 'text-brewery-primary-purple' : ''}`}>Upcoming Events</Link>
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
              <Link to="/" className={`nav-link block py-2 ${isActive('/') ? 'text-brewery-primary-purple' : ''}`} onClick={() => setIsOpen(false)}>Home</Link>
              <Link to="/achievements" className={`nav-link block py-2 ${isActive('/achievements') ? 'text-brewery-primary-purple' : ''}`} onClick={() => setIsOpen(false)}>Achievements</Link>
              <Link to="/team" className={`nav-link block py-2 ${isActive('/team') ? 'text-brewery-primary-purple' : ''}`} onClick={() => setIsOpen(false)}>Our Team</Link>
              <Link to="/timeline" className={`nav-link block py-2 ${isActive('/timeline') ? 'text-brewery-primary-purple' : ''}`} onClick={() => setIsOpen(false)}>Timeline</Link>
              <Link to="/events" className={`nav-link block py-2 ${isActive('/events') ? 'text-brewery-primary-purple' : ''}`} onClick={() => setIsOpen(false)}>Upcoming Events</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
