'use client';
import splitStringUsingRegex from '@/utils/splitStringUsingRegex'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const texts = {
  first: `Stop DoomScrolling 📱`,
  second: `Start BloomScrolling 🌸`
};

const charVariants = {
  hidden: { 
    opacity: 0,
    y: 20,
    scale: 0.9
  },
  reveal: { 
    opacity: 1,
    y: 0,
    scale: 1
  }
};

const DoomScrolling = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6],
    [1, 1.2, 0.8, 1]
  );

  const firstTextOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.4],
    [1, 1, 0]
  );

  const secondTextOpacity = useTransform(
    scrollYProgress,
    [0.3, 0.4, 0.6],
    [0, 1, 1]
  );

  const firstChars = splitStringUsingRegex(texts.first);
  const secondChars = splitStringUsingRegex(texts.second);

  return (
    <div ref={containerRef} className="h-[400vh] w-full">
      <div className="sticky top-0 flex h-screen w-full items-center justify-center">
        <div className="relative flex items-center justify-center min-h-screen w-full">
          <motion.h1
            style={{ 
              opacity: firstTextOpacity,
              scale,
              color: '#ff4d4d'
            }}
            initial="hidden"
            animate="reveal"
            transition={{ staggerChildren: 0.05 }}
            className="absolute text-8xl font-bold whitespace-nowrap"
          >
            {firstChars.map((char, index) => (
              <motion.span key={index} variants={charVariants}>
                {char}
              </motion.span>
            ))}
          </motion.h1>

          <motion.h1
            style={{ 
              opacity: secondTextOpacity,
              scale,
              color: '#50ff50'
            }}
            initial="hidden"
            animate="reveal"
            transition={{ staggerChildren: 0.05 }}
            className="absolute text-8xl font-bold whitespace-nowrap"
          >
            {secondChars.map((char, index) => (
              <motion.span key={index} variants={charVariants}>
                {char}
              </motion.span>
            ))}
          </motion.h1>
        </div>
      </div>
    </div>
  );
};

export default DoomScrolling;