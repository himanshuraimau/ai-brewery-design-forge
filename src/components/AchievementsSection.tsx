
import React, { useRef, useEffect } from 'react';

interface StatCounterProps {
  value: number;
  label: string;
  duration?: number;
  delay?: number;
}

const StatCounter: React.FC<StatCounterProps> = ({ value, label, duration = 2000, delay = 0 }) => {
  const counterRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setTimeout(() => {
            let startTime: number;
            let startValue = 0;
            
            const updateCounter = (timestamp: number) => {
              if (!startTime) startTime = timestamp;
              const progress = Math.min((timestamp - startTime) / duration, 1);
              const currentValue = Math.floor(progress * value);
              
              if (counterRef.current) {
                counterRef.current.textContent = `${currentValue}+`;
                
                if (progress < 1) {
                  requestAnimationFrame(updateCounter);
                }
              }
            };
            
            requestAnimationFrame(updateCounter);
          }, delay);
          
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );
    
    if (counterRef.current) {
      observer.observe(counterRef.current);
    }
    
    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [value, duration, delay]);
  
  return (
    <div className="text-center">
      <div ref={counterRef} className="text-4xl md:text-5xl font-bold text-brewery-primary-purple">
        0+
      </div>
      <p className="text-brewery-text-light mt-2">{label}</p>
    </div>
  );
};

const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="relative">
      <div className="section-container">
        <div className="glass-panel p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatCounter value={500} label="Workshop Attendees" delay={0} />
            <StatCounter value={15} label="Projects Completed" delay={200} />
            <StatCounter value={3} label="Hackathon Wins" delay={400} />
          </div>
          
          {/* Right: Highlight */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-brewery-primary-purple to-brewery-secondary-pink text-transparent bg-clip-text">
                First Place at Collegiate AI Hackathon
              </span>
            </h3>
            <p className="text-brewery-text-light mb-6">
              Our team developed a real-time ASL translation model that won first place at the National Collegiate AI Hackathon. The project combined computer vision and transformer models to translate American Sign Language into text with unprecedented accuracy.
            </p>
            <a href="#" className="cta-secondary inline-flex">View All Achievements</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
