import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const titleLetters = 'DEVUME'.split('');
  const [particles, setParticles] = useState([]);

  // Generate random particles for buttons
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 20; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: 1 + Math.random() * 3,
          duration: 2 + Math.random() * 3,
          delay: Math.random() * 1.5
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };
  
  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 10 },
    },
  };

  // Border fade animation for buttons
  const borderVariants = {
    initial: { opacity: 0 },
    hover: { 
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-20">
      {/* Background image or pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-b from-light-primary/10 to-transparent dark:from-dark-primary/10 dark:to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-[70%] bg-gradient-to-t from-light-primary/5 to-transparent dark:from-dark-primary/5 dark:to-transparent"></div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        {/* Main title */}
        <motion.h1
          className="text-6xl md:text-9xl font-display mb-6 tracking-wider"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          {titleLetters.map((letter, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className={`inline-block ${
                letter === 'V'
                ? 'text-light-primary dark:text-dark-primary' 
                : 'text-black dark:text-white'
              }`}
            >
              {letter}
            </motion.span>
          ))}
        </motion.h1>
        
        {/* Subtitle */}
        <motion.p
          className="text-xl md:text-2xl font-title max-w-2xl mx-auto mb-10 text-light-muted dark:text-dark-muted"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          The Ultimate Portfolio Platform for Developers
        </motion.p>
        
        {/* Horizontal line */}
        <motion.div 
          className="w-40 h-[1px] bg-light-primary dark:bg-dark-primary mx-auto mb-10"
          initial={{ width: 0 }}
          animate={{ width: 160 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        />
        
        {/* CTA buttons */}
        <motion.div 
          className="flex flex-col md:flex-row justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          {/* View Resumes button */}
          <motion.div
            className="relative"
            initial="initial"
            whileHover="hover"
            whileTap={{ scale: 0.98 }}
          >
            {/* Hover border animation */}
            <motion.div 
              className="absolute inset-0 border border-light-primary dark:border-dark-primary"
              variants={borderVariants}
            ></motion.div>
            
            <motion.button
              className="flex overflow-hidden items-center font-mono text-xl bg-black dark:bg-black text-white h-12 px-8 py-2 w-full justify-center group"
            >
              {/* Particle animations */}
              <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {particles.map(particle => (
                  <motion.span
                    key={particle.id}
                    className="absolute rounded-full bg-black dark:bg-white"
                    style={{
                      left: `${particle.x}%`,
                      top: `${particle.y}%`,
                      width: `${particle.size}px`,
                      height: `${particle.size}px`,
                    }}
                    animate={{
                      x: [0, (Math.random() - 0.5) * 50],
                      y: [0, (Math.random() - 0.5) * 50],
                      opacity: [0, 0.8, 0]
                    }}
                    transition={{
                      duration: particle.duration,
                      delay: particle.delay,
                      repeat: Infinity,
                      repeatType: "loop"
                    }}
                  />
                ))}
              </div>
              
              {/* Button text */}
              <span className="relative z-10 tracking-wider">VIEW RESUMES</span>
            </motion.button>
          </motion.div>
          
          {/* Write Now button */}
          <motion.div
            className="relative"
            initial="initial"
            whileHover="hover"
            whileTap={{ scale: 0.98 }}
          >
            {/* Hover border animation */}
            <motion.div 
              className="absolute inset-0 border border-light-primary dark:border-dark-primary"
              variants={borderVariants}
            ></motion.div>
            
            <motion.button
              className="flex overflow-hidden items-center font-mono text-xl bg-black dark:bg-black text-white h-12 px-8 py-2 w-full justify-center group"
            >
              {/* Particle animations */}
              <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {particles.map(particle => (
                  <motion.span
                    key={particle.id}
                    className="absolute rounded-full bg-black dark:bg-white"
                    style={{
                      left: `${particle.x}%`,
                      top: `${particle.y}%`,
                      width: `${particle.size}px`,
                      height: `${particle.size}px`,
                    }}
                    animate={{
                      x: [0, (Math.random() - 0.5) * 50],
                      y: [0, (Math.random() - 0.5) * 50],
                      opacity: [0, 0.8, 0]
                    }}
                    transition={{
                      duration: particle.duration,
                      delay: particle.delay,
                      repeat: Infinity,
                      repeatType: "loop"
                    }}
                  />
                ))}
              </div>
              
              {/* Button text */}
              <span className="relative z-10 tracking-wider">WRITE NOW</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator - repositioned to bottom center */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-light-primary dark:text-dark-primary"
        >
          <path d="M7 13l5 5 5-5"></path>
          <path d="M7 6l5 5 5-5"></path>
        </svg>
      </motion.div>
    </div>
  );
};

export default HeroSection;