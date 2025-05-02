
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';

interface EventProps {
  date: string;
  time: string;
  title: string;
  description: string;
  location: string;
  daysLeft: number;
  category: string;
  image?: string;
  registerLink?: string;
}

const upcomingEvents: EventProps[] = [
  {
    date: "May 15, 2025",
    time: "10:00 AM - 6:00 PM",
    title: "Spring AI Hackathon",
    description: "Join us for a 48-hour hackathon focused on creating innovative solutions with generative AI. Open to all skill levels with mentorship available.",
    location: "Tech Building, Room 301",
    daysLeft: 13,
    category: "Hackathons & Competitions",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?&w=500&h=300&fit=crop&q=80",
    registerLink: "#"
  },
  {
    date: "May 20, 2025",
    time: "4:00 PM - 5:30 PM",
    title: "Workshop: Introduction to Large Language Models",
    description: "Learn about the fundamentals of Large Language Models (LLMs) and how they're revolutionizing AI applications. This workshop will cover the basics of transformer architecture, fine-tuning, and prompt engineering.",
    location: "Science Center, Room 105",
    daysLeft: 18,
    category: "Workshops & Training",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?&w=500&h=300&fit=crop&q=80",
    registerLink: "#"
  },
  {
    date: "May 25, 2025",
    time: "6:00 PM - 7:30 PM",
    title: "Guest Lecture: The Future of AI in Healthcare",
    description: "Dr. Sarah Johnson, leading researcher in AI applications for healthcare, will discuss the latest advancements and ethical considerations in medical AI. Q&A session to follow.",
    location: "Medical Sciences Building, Auditorium",
    daysLeft: 23,
    category: "Guest Lectures",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?&w=500&h=300&fit=crop&q=80",
    registerLink: "#"
  },
  {
    date: "June 2, 2025",
    time: "5:00 PM - 7:00 PM",
    title: "End-of-Semester Social",
    description: "Join us to celebrate the end of the semester with food, games, and networking. Open to all members and those interested in joining next semester.",
    location: "Student Union, North Lounge",
    daysLeft: 31,
    category: "Social Gatherings",
    registerLink: "#"
  },
  {
    date: "June 10, 2025",
    time: "12:00 PM - 1:30 PM",
    title: "Workshop: Computer Vision with PyTorch",
    description: "A hands-on workshop covering the basics of computer vision using PyTorch. Learn how to build and train models for image classification, object detection, and more.",
    location: "Engineering Building, Lab 204",
    daysLeft: 39,
    category: "Workshops & Training",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?&w=500&h=300&fit=crop&q=80",
    registerLink: "#"
  }
];

const pastEvents: EventProps[] = [
  {
    date: "April 15, 2025",
    time: "3:00 PM - 5:00 PM",
    title: "Workshop: Reinforcement Learning Fundamentals",
    description: "An introduction to reinforcement learning concepts and applications with Python demos.",
    location: "Virtual Event",
    daysLeft: 0,
    category: "Workshops & Training"
  },
  {
    date: "April 5, 2025",
    time: "1:00 PM - 3:00 PM",
    title: "AI Project Showcase",
    description: "Members presented their ongoing projects and received feedback from peers and faculty advisors.",
    location: "Innovation Center, Main Hall",
    daysLeft: 0,
    category: "Member Meetings"
  },
  {
    date: "March 20, 2025",
    time: "5:00 PM - 6:30 PM",
    title: "Guest Lecture: Ethics in AI Development",
    description: "Industry expert discussion on ethical considerations in AI development and deployment.",
    location: "Philosophy Building, Room 101",
    daysLeft: 0,
    category: "Guest Lectures"
  }
];

const EventCard: React.FC<EventProps> = ({ 
  date, 
  time,
  title, 
  description, 
  location, 
  daysLeft, 
  category,
  image,
  registerLink
}) => {
  return (
    <div className="glass-card overflow-hidden group hover:translate-y-[-5px] transition-all duration-300">
      {image && (
        <div className="h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          <div className="inline-block px-3 py-1 rounded-full bg-brewery-primary-purple/20 text-sm flex items-center gap-2">
            <Calendar size={14} />
            <span>{date}</span>
          </div>
          {daysLeft > 0 && (
            <div className="inline-block px-3 py-1 rounded-full bg-brewery-secondary-pink/20 text-sm">
              {daysLeft} days left
            </div>
          )}
          <div className="inline-block px-3 py-1 rounded-full bg-glassmorphic-secondary text-sm flex items-center gap-2">
            <Clock size={14} />
            <span>{time}</span>
          </div>
        </div>
        
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        
        <p className="text-brewery-text-light mb-4 line-clamp-3">{description}</p>
        
        <div className="flex items-center gap-2 text-brewery-text-light mb-4">
          <MapPin size={16} className="text-brewery-secondary-pink" />
          <span>{location}</span>
        </div>
        
        {registerLink && (
          <button className="cta-primary mt-2 w-full">Register</button>
        )}
      </div>
    </div>
  );
};

const Events: React.FC = () => {
  const [filter, setFilter] = useState<string | null>(null);
  const [showPast, setShowPast] = useState(false);
  
  const categories = [
    "Workshops & Training",
    "Hackathons & Competitions",
    "Guest Lectures",
    "Social Gatherings",
    "Member Meetings"
  ];
  
  const filteredEvents = filter 
    ? upcomingEvents.filter(event => event.category === filter)
    : upcomingEvents;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-radial from-brewery-secondary/10 to-transparent">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-space mb-4">
            Upcoming Events
          </h1>
          <p className="text-brewery-text-light max-w-3xl mx-auto">
            Join us for workshops, hackathons, guest lectures, and social gatherings. All events are open to members and interested students.
          </p>
        </div>
      </section>
      
      {/* Featured Event */}
      <section className="py-16 bg-brewery-background">
        <div className="section-container">
          <h2 className="section-heading text-center mb-12">
            Featured Event
            <div className="h-1 w-24 bg-gradient-to-r from-brewery-primary-purple to-brewery-secondary-pink rounded-full mx-auto mt-4"></div>
          </h2>
          
          <div className="glass-panel p-8 md:p-10 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-2/5">
                <img 
                  src={upcomingEvents[0].image || "https://images.unsplash.com/photo-1531482615713-2afd69097998?&w=500&h=300&fit=crop&q=80"} 
                  alt={upcomingEvents[0].title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              
              <div className="md:w-3/5">
                <div className="flex flex-col md:flex-row justify-between md:items-center mb-6 gap-4">
                  {/* Date and countdown */}
                  <div className="flex items-center gap-2 text-brewery-text-light">
                    <Calendar size={18} className="text-brewery-primary-purple" />
                    <span>{upcomingEvents[0].date}</span>
                    <span className="ml-2 px-3 py-1 text-sm bg-brewery-primary-purple/20 rounded-full">
                      {upcomingEvents[0].daysLeft} days left
                    </span>
                  </div>
                  
                  {/* Location */}
                  <div className="flex items-center gap-2 text-brewery-text-light">
                    <MapPin size={18} className="text-brewery-secondary-pink" />
                    <span>{upcomingEvents[0].location}</span>
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-3">
                  {upcomingEvents[0].title}
                </h3>
                
                <p className="text-brewery-text-light mb-6">
                  {upcomingEvents[0].description}
                </p>
                
                <div className="flex gap-2">
                  <button className="cta-primary">Register</button>
                  <button className="cta-secondary">Add to Calendar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Event Categories */}
      <section className="py-16 bg-gradient-radial from-brewery-secondary/5 to-transparent">
        <div className="section-container">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <h2 className="section-heading mb-6 md:mb-0">
              All Events
              <div className="h-1 w-24 bg-gradient-to-r from-brewery-primary-purple to-brewery-secondary-pink rounded-full mt-2"></div>
            </h2>
            
            {/* View toggle */}
            <div className="flex gap-2">
              <button
                onClick={() => setShowPast(false)}
                className={`px-4 py-2 rounded-full ${
                  !showPast ? 'bg-brewery-primary-purple text-white' : 'bg-white/10 hover:bg-white/20'
                }`}
              >
                Upcoming
              </button>
              <button
                onClick={() => setShowPast(true)}
                className={`px-4 py-2 rounded-full ${
                  showPast ? 'bg-brewery-primary-purple text-white' : 'bg-white/10 hover:bg-white/20'
                }`}
              >
                Past Events
              </button>
            </div>
          </div>
          
          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <button
              onClick={() => setFilter(null)}
              className={`px-3 py-1 rounded-full text-sm ${
                filter === null 
                  ? 'bg-brewery-primary-purple text-white' 
                  : 'bg-white/10 hover:bg-white/20'
              }`}
            >
              All Categories
            </button>
            
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-3 py-1 rounded-full text-sm ${
                  filter === category 
                    ? 'bg-brewery-primary-purple text-white' 
                    : 'bg-white/10 hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Events grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {!showPast && filteredEvents.slice(1).map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
            
            {showPast && pastEvents.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
          
          {((showPast && pastEvents.length === 0) || (!showPast && filteredEvents.length <= 1)) && (
            <p className="text-center text-brewery-text-light mt-8">No events found in this category.</p>
          )}
        </div>
      </section>
      
      {/* Registration Info */}
      <section className="py-16 bg-brewery-background">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-heading text-center mb-12">
              How to Register
              <div className="h-1 w-24 bg-gradient-to-r from-brewery-primary-purple to-brewery-secondary-pink rounded-full mx-auto mt-4"></div>
            </h2>
            
            <div className="glass-panel p-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-brewery-primary-purple flex items-center justify-center flex-shrink-0">
                    <span className="font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Find an Event</h3>
                    <p className="text-brewery-text-light">
                      Browse our upcoming events and find one that interests you. Check the event details for prerequisites and requirements.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-brewery-primary-purple flex items-center justify-center flex-shrink-0">
                    <span className="font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Register</h3>
                    <p className="text-brewery-text-light">
                      Click the "Register" button and fill out the registration form. For workshops, be sure to note any preparation work needed.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-brewery-primary-purple flex items-center justify-center flex-shrink-0">
                    <span className="font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Confirm Your Spot</h3>
                    <p className="text-brewery-text-light">
                      You'll receive a confirmation email with event details. For some events with limited capacity, you may be placed on a waitlist.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-brewery-primary-purple flex items-center justify-center flex-shrink-0">
                    <span className="font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Attend & Enjoy</h3>
                    <p className="text-brewery-text-light">
                      Come to the event and don't forget to bring any required materials. Most events have a sign-in process at the start.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-brewery-primary-purple/10 rounded-lg">
                <h4 className="font-bold mb-2">Note:</h4>
                <p className="text-brewery-text-light">
                  Most events are open to all students, but some workshops and hackathons may have limited capacity. Early registration is encouraged!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Events;
