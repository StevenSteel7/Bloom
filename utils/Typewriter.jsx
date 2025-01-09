'use client';
import { useState, useEffect } from 'react';

const TypewriterEffect = ({ firstText, secondText, delay = 100, secondDelay = 1000 }) => {
  const [firstPart, setFirstPart] = useState('');
  const [secondPart, setSecondPart] = useState('');
  const [firstDone, setFirstDone] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < firstText.length) {
      const timeout = setTimeout(() => {
        setFirstPart(prev => prev + firstText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    } else if (!firstDone) {
      setTimeout(() => {
        setFirstDone(true);
        setCurrentIndex(0);
      }, secondDelay);
    }
  }, [currentIndex, firstText, delay, firstDone, secondDelay]);

  useEffect(() => {
    if (firstDone && currentIndex < secondText.length) {
      const timeout = setTimeout(() => {
        setSecondPart(prev => prev + secondText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, secondText, delay, firstDone]);

  return (
    <span className="inline-block">
      {firstDone ? secondPart : firstPart}
      <span className="animate-blink">|</span>
    </span>
  );
};

export default TypewriterEffect;