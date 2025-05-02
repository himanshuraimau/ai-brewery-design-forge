
import React from 'react';
import { Github, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative border-t border-white/10 bg-black/30 backdrop-blur-sm">
      <div className="section-container py-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo and tagline */}
          <div className="md:col-span-4">
            <div className="text-2xl font-space font-bold bg-gradient-to-r from-brewery-primary-purple to-brewery-secondary-pink text-transparent bg-clip-text mb-2">
              AI Brewery
            </div>
            <p className="text-brewery-text-light mb-4">
              Building AI. Brewing Ideas.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white/70 hover:text-brewery-primary-purple transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-white/70 hover:text-brewery-primary-purple transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-white/70 hover:text-brewery-primary-purple transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="text-white/70 hover:text-brewery-primary-purple transition-colors">
                <Github size={18} />
              </a>
            </div>
          </div>
          
          {/* Links */}
          <div className="md:col-span-2">
            <h4 className="text-white font-medium mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-brewery-text-light hover:text-white transition-colors">Home</a></li>
              <li><a href="#achievements" className="text-brewery-text-light hover:text-white transition-colors">Achievements</a></li>
              <li><a href="#team" className="text-brewery-text-light hover:text-white transition-colors">Our Team</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="text-white font-medium mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#timeline" className="text-brewery-text-light hover:text-white transition-colors">Timeline</a></li>
              <li><a href="#events" className="text-brewery-text-light hover:text-white transition-colors">Events</a></li>
              <li><a href="#" className="text-brewery-text-light hover:text-white transition-colors">Gallery</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-4">
            <h4 className="text-white font-medium mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-brewery-text-light">Tech Building, Room 205</li>
              <li className="text-brewery-text-light">contact@aibrewery.edu</li>
              <li><a href="#join" className="text-brewery-primary-purple hover:text-brewery-primary-purple/80 transition-colors">Subscribe to Updates</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-brewery-text-light text-sm">
          © 2025 AI Brewery · Powered by students. Inspired by intelligence.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
