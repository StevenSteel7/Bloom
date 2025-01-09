'use client';
import splitStringUsingRegex from '@/utils/splitStringUsingRegex'
import { motion } from 'framer-motion'

const heading = `Introducing`;

const charVariants = {
  hidden: { 
    opacity: 0,
    y: 20 
  },
  reveal: { 
    opacity: 1,
    y: 0 
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.5
    }
  }
};

const Introducing = () => {
  const headingChars = splitStringUsingRegex(heading);

  return (
    <div className='flex flex-col items-center justify-center text-9xl font-bold h-[200vh] mt-[-80vh]'>
      <motion.h1
        initial="hidden"
        whileInView="reveal"
        viewport={{ 
          margin: "0px 0px -200px 0px",
          once: false 
        }}
        transition={{ staggerChildren: 0.05 }}
      >
        {headingChars.map((char, index) => (
          <motion.span
            key={index}
            variants={charVariants}
            transition={{ duration: 0.5 }}
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  )
}

export default Introducing;   