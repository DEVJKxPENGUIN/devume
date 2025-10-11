import { useState, useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

// Sample portfolio data
const portfolios = [
  {
    id: 1,
    title: "Code Studio",
    subtitle: "Front-end Development",
    owner: "John Smith",
    tags: ["React", "TypeScript", "Node.js"],
    image: "/portfolio1.png",
    color: "from-anime-pink to-anime-purple",
    size: "row-span-2 col-span-2"
  },
  {
    id: 2,
    title: "AI Master",
    subtitle: "Machine Learning Project",
    owner: "Emma Johnson",
    tags: ["Python", "TensorFlow", "Data Science"],
    image: "/portfolio2.png",
    color: "from-anime-blue to-anime-cyan",
    size: "row-span-1 col-span-1"
  },
  {
    id: 3,
    title: "Game Creator",
    subtitle: "Game Development Portfolio",
    owner: "Michael Brown",
    tags: ["Unity", "3D Modeling", "Game Dev"],
    image: "/portfolio3.png",
    color: "from-anime-green to-anime-yellow",
    size: "row-span-1 col-span-1"
  },
  {
    id: 4,
    title: "Mobile Ninja",
    subtitle: "Mobile App Development",
    owner: "Sarah Davis",
    tags: ["Swift", "Kotlin", "Flutter"],
    image: "/portfolio4.png",
    color: "from-anime-red to-anime-pink",
    size: "row-span-1 col-span-1"
  },
  {
    id: 5,
    title: "Web Explorer",
    subtitle: "Full-stack Web Development",
    owner: "Alex Chen",
    tags: ["React", "Express", "MongoDB"],
    image: "/portfolio5.png",
    color: "from-anime-purple to-anime-blue",
    size: "row-span-1 col-span-1"
  },
];

// Card component with MagicBento-style animation
const BentoCard = ({ portfolio, index }: { portfolio: any, index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });
  const controls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);
  
  return (
    <motion.div
      ref={ref}
      className={`${portfolio.size} relative overflow-hidden group cursor-pointer`}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { 
          opacity: 1, 
          y: 0, 
          transition: { 
            duration: 0.5, 
            delay: index * 0.1,
            ease: [0.25, 0.1, 0.25, 1]
          } 
        }
      }}
      initial="hidden"
      animate={controls}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.3 } 
      }}
    >
      {/* Semi-transparent colored backdrop */}
      <div className={`absolute inset-0 bg-gradient-to-br ${portfolio.color} opacity-5`}></div>
      
      {/* Glass effect background */}
      <div className="absolute inset-0 bg-white/70 dark:bg-[#111]/70 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20"></div>
      
      {/* Content */}
      <div className="relative z-10 p-6 h-full flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-xl font-mono font-bold text-gray-900 dark:text-white">
              {portfolio.title}
            </h3>
            <span className="text-xs font-mono text-light-primary dark:text-dark-primary">
              #{portfolio.id.toString().padStart(2, '0')}
            </span>
          </div>
          
          <p className="text-sm font-title text-gray-600 dark:text-gray-300 mb-3">
            {portfolio.subtitle}
          </p>
          
          <p className="text-sm font-title">
            by <span className="text-light-primary dark:text-dark-primary">{portfolio.owner}</span>
          </p>
        </div>
        
        {/* Tags */}
        <div className="mt-4">
          <div className="flex flex-wrap gap-2">
            {portfolio.tags.map((tag: string) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs font-mono bg-white/50 dark:bg-[#1a1a2e]/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 text-gray-800 dark:text-gray-200"
              >
                {tag}
              </span>
            ))}
          </div>
          
          {/* Hover effect - view details */}
          <div className="absolute bottom-6 right-6 flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-sm font-mono text-light-primary dark:text-dark-primary mr-1">View</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="text-light-primary dark:text-dark-primary"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ResumeShowcaseSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="relative inline-block">
            <h2 className="text-3xl md:text-5xl font-mono font-bold mb-2 tracking-wider">
              <span className="text-light-primary dark:text-dark-primary">RESUMES & POSTINGS</span>
            </h2>
            
            {/* Horizontal line */}
            <motion.div 
              className="w-40 h-[1px] bg-light-primary dark:bg-dark-primary mx-auto mt-4"
              initial={{ width: 0 }}
              whileInView={{ width: 160 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            />
          </div>
          
          <p className="max-w-2xl mx-auto mt-6 text-lg font-title text-gray-600 dark:text-gray-300">
            Discover professional developer resumes and get inspired!
          </p>
        </motion.div>
        
        {/* Magic Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {portfolios.map((portfolio, index) => (
            <BentoCard key={portfolio.id} portfolio={portfolio} index={index} />
          ))}
        </div>
        
        {/* View more button */}
        <div className="mt-16 text-center">
          <motion.button 
            className="px-6 py-3 border border-light-primary dark:border-dark-primary font-mono text-sm bg-white/70 dark:bg-[#111]/70 backdrop-blur-sm hover:bg-light-primary/10 dark:hover:bg-dark-primary/10 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Resumes
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default ResumeShowcaseSection;