'use client';
import { motion,useInView } from "framer-motion";
import TypewriterEffect from "../../utils/Typewriter";
import { useRef } from "react";

const emojis = ["📱", "🎯", "🌟", "🤝", "⚡", "💭"];

const content = [
    {
      emoji: emojis[0],
      title: "Mindful Engagement",
      text: "Experience social media that promotes meaningful connections while reducing digital anxiety and stress.",
    },
    {
      emoji: emojis[1],
      title: "Focus Mode",
      text: "Stay present and engaged with content that matters, filtering out unnecessary distractions.",
    },
    {
      emoji: emojis[2],
      title: "Authentic Connections",
      text: "Build genuine relationships without the pressure of likes, followers, or social metrics.",
    },
    {
      emoji: emojis[3],
      title: "Community First",
      text: "Join communities that share your interests and values, fostering meaningful discussions.",
    },
    {
      emoji: emojis[4],
      title: "Digital Wellbeing",
      text: "Track and manage your social media usage with built-in wellness features.",
    },
    {
      emoji: emojis[5],
      title: "Mindful Notifications",
      text: "Stay informed without feeling overwhelmed, with smart notification filtering.",
    },
];

const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
};
  
const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
};

export const MoreFeatures = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    
    return (
      <motion.section 
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div  ref={ref} className="text-center mb-16 pt-24">
        <h2 className="text-5xl font-bold text-white mb-4">
          { isInView&& (
            <TypewriterEffect 
              firstText="Social Media"
              secondText="Reemigmnaggnined!"
              delay={100}
              secondDelay={1000}
            />
          )}
        </h2>
            <p className="text-gray-400 text-xl">
                A more mindful approach to staying connected
            </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16 py-24"
        >
          {content.map(({ emoji, title, text }) => (
            <motion.div
              key={title}
              variants={cardVariants}
              className="flex flex-col items-start p-6"
            >
              <span className="mb-6 flex h-24 w-24 items-center justify-center rounded-2xl bg-[#151515]">
                <span className="text-4xl">{emoji}</span>
              </span>
              <h3 className="mb-3 text-xl font-semibold text-white">{title}</h3>
              <p className="text-sm text-gray-400">{text}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    );
};

export default MoreFeatures;