'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Bloom = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 1],
    [0, 1.5, 1, 0.5, 0.4]
  );

  const rotate = useTransform(
    scrollYProgress,
    [0.2, 0.6],
    [0, 360]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.8, 1],
    [0, 1, 1, 0]
  );

  const textOpacity = useTransform(
    scrollYProgress,
    [0.55, 0.65],
    [0, 1]
  );

  const logoX = useTransform(
    scrollYProgress,
    [0, 0.6, 0.7],
    ['-85%', '-85%', '-78%']
  );

  return (
    <div ref={targetRef} className="h-[200vh] w-full">
      <div className="sticky top-[20vh] flex items-center justify-center">
        <div className="relative w-full max-w-4xl mx-auto">
          <motion.div className="flex items-center gap-8">
            <motion.div
              style={{ opacity: textOpacity }}
              className="text-8xl z-10 pl-60 font-bold tracking-wider text-white"
            >
              BLO
            </motion.div>
            <motion.div
              style={{ opacity: textOpacity }}
              className="text-8xl z-10 pl-[7vh] font-bold tracking-wider text-white"
            >
              M
            </motion.div>
            <motion.img
              style={{
                scale,
                rotate,
                opacity,
                x: logoX
              }}
              className="w-2/3 h-2/3 "
              src="/Bloom.svg"
              alt="Bloom Icon"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Bloom;