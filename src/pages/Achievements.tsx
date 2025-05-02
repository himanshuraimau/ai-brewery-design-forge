
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, Award, Trophy } from 'lucide-react';

interface AchievementProps {
  title: string;
  description: string;
  date: string;
  tags: string[];
  image: string;
}

interface AwardProps {
  name: string;
  organization: string;
  date: string;
  description: string;
}

const achievements: AchievementProps[] = [
  {
    title: "First Place at National Collegiate AI Hackathon",
    description: "Our team developed a real-time ASL translation model that won first place. The project combined computer vision and transformer models to translate American Sign Language into text with unprecedented accuracy.",
    date: "November 2024",
    tags: ["Competition", "Computer Vision", "NLP"],
    image: "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRyb3BoeXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    title: "Published Research Paper in Student AI Journal",
    description: "Our research on 'Low-Resource Neural Machine Translation for Regional Languages' was published in the prestigious Student AI Journal, highlighting our work in making machine translation accessible for less-commonly taught languages.",
    date: "March 2024",
    tags: ["Research", "NLP", "Publication"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    title: "University Innovation Grant for AI Ethics Project",
    description: "Received a $10,000 grant to develop an AI ethics curriculum for high school students, focusing on responsible AI development and algorithmic fairness. The project will reach 15+ schools in our region.",
    date: "January 2024",
    tags: ["Grant", "AI Ethics", "Education"],
    image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
];

const awards: AwardProps[] = [
  {
    name: "Outstanding Student Organization",
    organization: "University Student Senate",
    date: "April 2024",
    description: "Recognized for exceptional contribution to campus technical education and community outreach."
  },
  {
    name: "Innovation in Technology Award",
    organization: "State Tech Council",
    date: "March 2024",
    description: "Awarded for developing accessible AI tools for non-technical users."
  },
  {
    name: "Community Impact Award",
    organization: "Local Tech Alliance",
    date: "November 2023",
    description: "Recognized for AI literacy workshops conducted in underserved communities."
  }
];

const Achievements: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-radial from-brewery-secondary/10 to-transparent">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-space mb-4">
            Our Milestones & Impact
          </h1>
          <p className="text-brewery-text-light max-w-3xl mx-auto">
            Since our founding in 2023, AI Brewery has grown from a small group of passionate students to a thriving community of innovators. Explore our journey and achievements.
          </p>
        </div>
      </section>
      
      {/* Major Achievements Section */}
      <section className="py-16 bg-brewery-background">
        <div className="section-container">
          <h2 className="section-heading text-center mb-16">
            Major Achievements
            <div className="h-1 w-24 bg-gradient-to-r from-brewery-primary-purple to-brewery-secondary-pink rounded-full mx-auto mt-4"></div>
          </h2>
          
          <div className="space-y-20">
            {achievements.map((achievement, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 md:gap-12`}>
                <div className="flex-1">
                  <div className="glass-card h-full overflow-hidden group">
                    <img 
                      src={achievement.image} 
                      alt={achievement.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <div className="inline-block px-3 py-1 rounded-full bg-brewery-primary-purple/20 text-sm mb-3 w-fit">
                    {achievement.date}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-brewery-primary-purple to-brewery-secondary-pink bg-clip-text text-transparent">
                    {achievement.title}
                  </h3>
                  <p className="text-brewery-text-light mb-4">
                    {achievement.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {achievement.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-glassmorphic-primary rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-12">
            <button className="cta-secondary inline-flex items-center gap-2">
              View All Projects
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
      
      {/* Awards & Recognition */}
      <section className="py-16 bg-gradient-radial from-brewery-secondary/5 to-transparent">
        <div className="section-container">
          <h2 className="section-heading text-center mb-12">
            Awards & Recognition
            <div className="h-1 w-24 bg-gradient-to-r from-brewery-primary-purple to-brewery-secondary-pink rounded-full mx-auto mt-4"></div>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <div key={index} className="glass-card p-6 hover:translate-y-[-5px] transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div className="inline-block px-3 py-1 rounded-full bg-brewery-secondary-pink/20 text-sm">
                    {award.date}
                  </div>
                  {index === 0 ? (
                    <Trophy size={24} className="text-yellow-400" />
                  ) : (
                    <Award size={24} className="text-brewery-primary-purple" />
                  )}
                </div>
                <h3 className="text-xl font-bold mb-2">{award.name}</h3>
                <p className="text-sm text-brewery-text-light mb-3">by {award.organization}</p>
                <p className="text-brewery-text-light">{award.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Impact Metrics */}
      <section className="py-16 bg-brewery-background">
        <div className="section-container">
          <h2 className="section-heading text-center mb-12">
            Our Impact
            <div className="h-1 w-24 bg-gradient-to-r from-brewery-primary-purple to-brewery-secondary-pink rounded-full mx-auto mt-4"></div>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card p-6 text-center">
              <div className="text-4xl font-bold text-brewery-primary-purple mb-2">500+</div>
              <p className="text-brewery-text-light">Workshop Attendees</p>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="text-4xl font-bold text-brewery-primary-purple mb-2">15+</div>
              <p className="text-brewery-text-light">Projects Completed</p>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="text-4xl font-bold text-brewery-secondary-pink mb-2">3</div>
              <p className="text-brewery-text-light">Hackathon Wins</p>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="text-4xl font-bold text-brewery-accent-blue mb-2">12</div>
              <p className="text-brewery-text-light">Partnered Organizations</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Achievements;
