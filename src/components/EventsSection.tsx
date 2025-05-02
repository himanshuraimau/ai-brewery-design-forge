
import React from 'react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

interface EventProps {
  date: string;
  title: string;
  description: string;
  location: string;
  daysLeft: number;
}

const EventsSection: React.FC = () => {
  // Example featured event
  const featuredEvent: EventProps = {
    date: "May 15, 2025",
    title: "Spring AI Hackathon",
    description: "Join us for a 48-hour hackathon focused on creating innovative solutions with generative AI. Open to all skill levels with mentorship available.",
    location: "Tech Building, Room 301",
    daysLeft: 13
  };

  return (
    <section id="events" className="relative">
      <div className="section-container">
        <h2 className="section-heading text-center">
          Upcoming Events
          <div className="h-1 w-24 bg-gradient-to-r from-brewery-primary-purple to-brewery-secondary-pink rounded-full mx-auto mt-4"></div>
        </h2>
        
        {/* Featured event card */}
        <div className="glass-panel p-8 md:p-10 max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between md:items-center mb-6 gap-4">
            {/* Date and countdown */}
            <div className="flex items-center gap-2 text-brewery-text-light">
              <Calendar size={18} className="text-brewery-primary-purple" />
              <span>{featuredEvent.date}</span>
              <span className="ml-2 px-3 py-1 text-sm bg-brewery-primary-purple/20 rounded-full">
                {featuredEvent.daysLeft} days left
              </span>
            </div>
            
            {/* Location */}
            <div className="flex items-center gap-2 text-brewery-text-light">
              <MapPin size={18} className="text-brewery-secondary-pink" />
              <span>{featuredEvent.location}</span>
            </div>
          </div>
          
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            {featuredEvent.title}
          </h3>
          
          <p className="text-brewery-text-light mb-6">
            {featuredEvent.description}
          </p>
          
          <button className="cta-primary">Register</button>
        </div>
        
        <div className="flex justify-center mt-10">
          <a href="#" className="cta-secondary inline-flex items-center gap-2">
            View All Events
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
