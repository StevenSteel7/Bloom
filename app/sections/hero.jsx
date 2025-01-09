
'use client';
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef } from "react";

export const Hero = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const position = useTransform(scrollYProgress, (pos) =>
    pos >= 1 ? "relative" : "fixed"
  );


  useEffect(() => {
    const handleMouseMove = (e ) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.section
  style={{ opacity: opacity }}
  ref={targetRef}
  className="relative mb-[8rem] h-screen pb-16 justify-center items-center flex flex-col text-4xl 
  text-white 
  before:pointer-events-none before:fixed 
  before:inset-0  before:bg-[radial-gradient(circle_farthest-side_at_var(--mouse-x,_100px)_var(--mouse-y,_100px),_var(--color-secondary)_0%,_transparent_100%)] 
  before:opacity-40"
>
      <motion.div
      /*  taken from position variable 
          if we reach bottom , make it relative*/
        style={{ position, scale}}
        className="flex z-10 flex-col items-center absolute"
      >
 
          <div className="relative">
            <h1 className="text-6xl font-bold text-white mb-4 relative z-10 text-left">
              Tired of Doom Scrolling?
            </h1>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl"></div>
          </div>
          <p className="text-2xl text-gray-400 font-light tracking-wide text-left">
           Want to break free from the endless cycle of negative content?
          </p>
          <div className="grid gap-4 mt-8">
            <div className="flex items-center space-x-2 bg-gray-800/50 p-4 rounded-lg backdrop-blur-sm border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300">
              <p className="text-gray-300 text-sm text-left">Average person spends 7 hours daily on their phone</p>
            </div>
            <div className="flex items-center space-x-2 bg-gray-800/50 p-4 rounded-lg backdrop-blur-sm border border-gray-700/50 hover:border-pink-500/50 transition-all duration-300">
              <p className="text-gray-300 text-sm text-left">47% report increased anxiety from social media</p>
            </div>
            <div className="flex items-center space-x-2 bg-gray-800/50 p-4 rounded-lg backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
              <p className="text-gray-300 text-sm text-left">68% check their phone within 5 minutes of waking up</p>
            </div>
          </div>
      </motion.div>
   
      {/* Your content here */}
    </motion.section>
  );
};

