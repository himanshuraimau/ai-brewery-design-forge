
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Filter } from 'lucide-react';

interface TimelineEntryProps {
  date: string;
  title: string;
  description: string;
  category: string;
  image?: string;
}

const timelineData: TimelineEntryProps[] = [
  {
    date: "January 2023",
    title: "Club Foundation",
    description: "AI Brewery was founded with 15 founding members from various departments including Computer Science, Data Science, and Design. The club was created to explore the latest in AI technology and bring together students with a shared passion.",
    category: "Milestone",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    date: "February 2023",
    title: "First General Meeting",
    description: "We held our first general meeting with over 50 attendees, introducing our mission and vision for the club. This meeting set the foundation for our community and established key areas of focus.",
    category: "Event",
  },
  {
    date: "March 2023",
    title: "AI Fundamentals Workshop Series",
    description: "Launched our first AI fundamentals workshop series with over 100 attendees across 4 sessions. Topics covered included neural networks, computer vision, NLP, and ethical AI development.",
    category: "Workshop",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    date: "April 2023",
    title: "First Collaborative Project",
    description: "Initiated our first collaborative project: an AI-powered campus navigation assistant. The project brought together 12 members working on different aspects from data collection to frontend development.",
    category: "Project",
  },
  {
    date: "June 2023",
    title: "Summer Hackathon",
    description: "Organized our inaugural summer hackathon focusing on generative AI applications. The event attracted 75 participants who built projects ranging from art generators to code assistants.",
    category: "Event",
    image: "https://images.unsplash.com/photo-1603354350317-6f7aaa5911c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    date: "August 2023",
    title: "Website Launch",
    description: "Launched our official club website to showcase our projects, events, and resources. The site was designed and developed entirely by club members.",
    category: "Milestone",
  },
  {
    date: "September 2023",
    title: "Industry Partnership",
    description: "Secured partnership with a leading AI research lab for student mentorship. This partnership provided our members with access to industry experts and potential internship opportunities.",
    category: "Milestone",
    image: "https://images.unsplash.com/photo-1559233657-1498019ef6c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    date: "October 2023",
    title: "AI Ethics Panel Discussion",
    description: "Hosted a panel discussion on ethical considerations in AI development featuring professors and industry professionals. The event sparked important conversations about responsible innovation.",
    category: "Event",
  },
  {
    date: "November 2023",
    title: "National Collegiate AI Challenge",
    description: "Represented our university at the National Collegiate AI Challenge, competing against teams from 25 other institutions. Our team placed in the top 5 with our project on sustainable energy optimization.",
    category: "Event",
  },
  {
    date: "January 2024",
    title: "First Anniversary Celebration",
    description: "Celebrated our first year as a club with a special event featuring project demos, guest speakers, and a look back at our achievements and growth.",
    category: "Milestone",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    date: "February 2024",
    title: "First Place Win at Regional AI Hackathon",
    description: "Won first place at Regional AI Hackathon with our ASL translation project that used computer vision to translate sign language in real-time with high accuracy.",
    category: "Event",
    image: "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    date: "April 2024",
    title: "Expanded Workshop Series",
    description: "Launched an expanded workshop series covering advanced topics like reinforcement learning, GANs, and MLOps. The series was recorded and made available as a resource for all students.",
    category: "Workshop",
  },
];

const Timeline: React.FC = () => {
  const [filter, setFilter] = useState<string | null>(null);
  
  const filteredEvents = filter 
    ? timelineData.filter(event => event.category === filter)
    : timelineData;
  
  const categories = Array.from(
    new Set(timelineData.map(event => event.category))
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-radial from-brewery-secondary/10 to-transparent">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-space mb-4">
            Our Journey
          </h1>
          <p className="text-brewery-text-light max-w-3xl mx-auto">
            From our founding to today, explore the key moments that have shaped AI Brewery and our community.
          </p>
        </div>
      </section>
      
      {/* Timeline Section */}
      <section className="py-16 bg-brewery-background">
        <div className="section-container">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <h2 className="section-heading mb-6 md:mb-0">
              Timeline
              <div className="h-1 w-24 bg-gradient-to-r from-brewery-primary-purple to-brewery-secondary-pink rounded-full mt-2"></div>
            </h2>
            
            {/* Filter controls */}
            <div className="flex flex-wrap justify-center gap-2">
              <button
                onClick={() => setFilter(null)}
                className={`px-3 py-1 rounded-full text-sm ${
                  filter === null 
                    ? 'bg-brewery-primary-purple text-white' 
                    : 'bg-white/10 hover:bg-white/20'
                }`}
              >
                All
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
          </div>
          
          {/* Timeline entries */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-brewery-primary-purple to-brewery-secondary-pink md:left-1/2"></div>
            
            <div className="space-y-12">
              {filteredEvents.map((event, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-3 h-3 bg-brewery-primary-purple rounded-full transform -translate-x-1.5 md:left-1/2"></div>
                  
                  <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? '' : 'md:flex-row-reverse'} md:items-center`}>
                    {/* Date column */}
                    <div className="pl-12 md:pl-0 md:w-1/2 md:pr-12 md:text-right md:py-6">
                      <div className="inline-block px-3 py-1 rounded-full bg-glassmorphic-primary text-sm">
                        {event.date}
                      </div>
                      <h3 className="text-xl font-bold mt-2 mb-1">{event.title}</h3>
                      <span className="text-brewery-text-light text-sm">{event.category}</span>
                    </div>
                    
                    {/* Content column */}
                    <div className={`pl-12 pt-3 md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:pl-0'}`}>
                      <div className="glass-card overflow-hidden">
                        {event.image && (
                          <div className="h-48 overflow-hidden">
                            <img
                              src={event.image}
                              alt={event.title}
                              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            />
                          </div>
                        )}
                        <div className="p-5">
                          <p className="text-brewery-text-light">{event.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Growth Metrics */}
      <section className="py-16 bg-gradient-radial from-brewery-secondary/5 to-transparent">
        <div className="section-container">
          <h2 className="section-heading text-center mb-12">
            Our Growth
            <div className="h-1 w-24 bg-gradient-to-r from-brewery-primary-purple to-brewery-secondary-pink rounded-full mx-auto mt-4"></div>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card p-6 text-center">
              <div className="text-4xl font-bold text-brewery-primary-purple mb-2">15 → 100+</div>
              <p className="text-brewery-text-light">Active Members</p>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="text-4xl font-bold text-brewery-primary-purple mb-2">0 → 15+</div>
              <p className="text-brewery-text-light">Projects Completed</p>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="text-4xl font-bold text-brewery-secondary-pink mb-2">0 → 20+</div>
              <p className="text-brewery-text-light">Events Hosted</p>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="text-4xl font-bold text-brewery-accent-blue mb-2">0 → 12</div>
              <p className="text-brewery-text-light">Partnered Organizations</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Timeline;
