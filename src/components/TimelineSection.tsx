
import React, { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

interface TimelineEntryProps {
  date: string;
  title: string;
  description: string;
}

const timelineData: TimelineEntryProps[] = [
  {
    date: "Jan 2023",
    title: "Club Foundation",
    description: "AI Brewery was founded with 15 founding members from various departments."
  },
  {
    date: "Mar 2023",
    title: "First Workshop Series",
    description: "Launched our first AI fundamentals workshop series with over 100 attendees."
  },
  {
    date: "Jun 2023",
    title: "Summer Hackathon",
    description: "Organized our inaugural summer hackathon focusing on generative AI applications."
  },
  {
    date: "Sep 2023",
    title: "Industry Partnership",
    description: "Secured partnership with leading AI research lab for student mentorship."
  },
  {
    date: "Nov 2023",
    title: "National Competition",
    description: "Represented our university at the National Collegiate AI Challenge."
  },
  {
    date: "Feb 2024",
    title: "First Place Win",
    description: "Won first place at Regional AI Hackathon with our ASL translation project."
  }
];

const TimelineEntry: React.FC<TimelineEntryProps> = ({ date, title, description }) => {
  return (
    <div className="glass-card p-6 min-w-[280px] sm:min-w-[320px]">
      <div className="inline-block px-3 py-1 rounded-full bg-glassmorphic-primary text-sm mb-4">
        {date}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-brewery-text-light line-clamp-2">{description}</p>
    </div>
  );
};

const TimelineSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    
    const scrollAmount = 340;
    const currentScroll = scrollRef.current.scrollLeft;
    
    scrollRef.current.scrollTo({
      left: direction === 'right' ? currentScroll + scrollAmount : currentScroll - scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <section id="timeline" className="relative">
      <div className="section-container">
        <h2 className="section-heading text-center">
          Our Journey
          <div className="h-1 w-24 bg-gradient-to-r from-brewery-primary-purple to-brewery-secondary-pink rounded-full mx-auto mt-4"></div>
        </h2>
        
        {/* Desktop Timeline (horizontal scroll) */}
        <div className="relative hidden md:block">
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-6 scrollbar-none"
          >
            {timelineData.map((item, index) => (
              <TimelineEntry
                key={index}
                date={item.date}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
          
          {/* Navigation buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={() => scroll('left')}
              className="p-2 rounded-full glass-panel hover:bg-white/10 transition-all"
            >
              <ArrowRight size={20} className="rotate-180" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-2 rounded-full glass-panel hover:bg-white/10 transition-all"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
        
        {/* Mobile Timeline (vertical stack) */}
        <div className="md:hidden space-y-4">
          {timelineData.slice(0, 3).map((item, index) => (
            <TimelineEntry
              key={index}
              date={item.date}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
        
        <div className="flex justify-center mt-10">
          <a href="#" className="cta-secondary inline-flex items-center gap-2">
            See Full Timeline
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
