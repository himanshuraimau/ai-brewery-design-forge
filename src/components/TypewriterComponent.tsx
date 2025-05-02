
import React, { useState, useEffect } from 'react';

interface TypewriterComponentProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

const TypewriterComponent: React.FC<TypewriterComponentProps> = ({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 1500,
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isDeleting) {
      if (currentText === '') {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        timeout = setTimeout(() => {}, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setCurrentText((prev) => prev.slice(0, -1));
        }, deletingSpeed);
      }
    } else {
      const fullText = texts[currentTextIndex];
      if (currentText === fullText) {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      } else {
        timeout = setTimeout(() => {
          setCurrentText((prev) => fullText.slice(0, prev.length + 1));
        }, typingSpeed);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isDeleting, texts, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <div className="text-xl sm:text-2xl md:text-3xl font-medium text-brewery-text-light font-inter">
      {currentText}
      <span className="inline-block w-0.5 h-6 sm:h-8 bg-brewery-primary-purple animate-pulse-glow ml-1"></span>
    </div>
  );
};

export default TypewriterComponent;
