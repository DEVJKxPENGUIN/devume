import { useState } from 'react';

// Sample portfolio data
const portfolios = [
  {
    id: 1,
    title: "Code Studio",
    subtitle: "Front-end Development",
    owner: "John Smith",
    tags: ["React", "TypeScript", "Node.js"],
    color: "from-anime-pink to-anime-purple",
    size: "row-span-2 col-span-2",
    background: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&h=1080&fit=crop&crop=center&q=80&auto=format&fm=webp"
  },
  {
    id: 2,
    title: "AI Master",
    subtitle: "Machine Learning Project",
    owner: "Emma Johnson",
    tags: ["Python", "TensorFlow", "Data Science"],
    color: "from-anime-blue to-anime-cyan",
    size: "row-span-1 col-span-1",
    background: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&h=1080&fit=crop&crop=center&q=80&auto=format&fm=webp"
  },
  {
    id: 3,
    title: "Game Creator",
    subtitle: "Game Development Portfolio",
    owner: "Michael Brown",
    tags: ["Unity", "3D Modeling", "Game Dev"],
    color: "from-anime-green to-anime-yellow",
    size: "row-span-1 col-span-1",
    background: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1920&h=1080&fit=crop&crop=center&q=80&auto=format&fm=webp"
  },
  {
    id: 4,
    title: "Mobile Ninja",
    subtitle: "Mobile App Development",
    owner: "Sarah Davis",
    tags: ["Swift", "Kotlin", "Flutter"],
    color: "from-anime-red to-anime-pink",
    size: "row-span-1 col-span-1",
    background: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1920&h=1080&fit=crop&crop=center&q=80&auto=format&fm=webp"
  },
  {
    id: 5,
    title: "Web Explorer",
    subtitle: "Full-stack Web Development",
    owner: "Alex Chen",
    tags: ["React", "Express", "MongoDB"],
    color: "from-anime-purple to-anime-blue",
    size: "row-span-1 col-span-1",
    background: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1920&h=1080&fit=crop&crop=center&q=80&auto=format&fm=webp"
  },
];

// Simple Card component
const BentoCard = ({ portfolio }: { portfolio: any }) => {
  return (
    <div className={`${portfolio.size} relative overflow-hidden rounded-lg group cursor-pointer`}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover rounded-lg"
        style={{
          backgroundImage: `url(${portfolio.background})`,
        }}
      ></div>
     
      {/* Card background */}
      <div className="absolute inset-0 border border-black/60 dark:border-white/50 rounded-lg
      bg-gradient-to-r from-white via-white via-20% to-transparent dark:from-black dark:via-black dark:via-20% dark:to-transparent
      " style={{ borderWidth: '0.5px' }}></div>
      
      {/* Content */}
      <div className="relative z-10 p-6 h-full flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-xl font-mono font-bold text-black dark:text-white">
              {portfolio.title}
            </h3>
            <span className="text-xs font-mono text-light-primary dark:text-dark-primary">
              #{portfolio.id.toString().padStart(2, '0')}
            </span>
          </div>
          
          <p className="text-sm font-title text-gray-700 dark:text-gray-300 mb-3">
            {portfolio.subtitle}
          </p>
          
          <p className="text-sm font-title text-gray-800 dark:text-gray-200">
            by <span className="text-light-primary dark:text-dark-primary">{portfolio.owner}</span>
          </p>
        </div>
        
        {/* Tags */}
        <div className="mt-4">
          <div className="flex flex-wrap gap-2">
            {portfolio.tags.map((tag: string) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs font-mono bg-black text-white dark:bg-[#1a1a2e]/50 dark:text-gray-200 backdrop-blur-sm border border-gray-800 dark:border-gray-700/50"
              >
                {tag}
              </span>
            ))}
          </div>
          
          {/* View details */}
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
    </div>
  );
};

const ResumeShowcaseSection2 = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <h2 className="text-3xl md:text-5xl font-mono font-bold mb-2 tracking-wider">
              <span className="text-light-primary dark:text-dark-primary">RESUMES & POSTINGS</span>
            </h2>
            
            {/* Horizontal line */}
            <div className="w-40 h-[1px] bg-light-primary dark:bg-dark-primary mx-auto mt-4"></div>
          </div>
          
          <p className="max-w-2xl mx-auto mt-6 text-lg font-title text-gray-600 dark:text-gray-300">
            Discover professional developer resumes and get inspired!
          </p>
        </div>
        
        {/* Magic Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {portfolios.map((portfolio) => (
            <BentoCard key={portfolio.id} portfolio={portfolio} />
          ))}
        </div>
        
        {/* View more button */}
        <div className="mt-16 text-center">
          <button className="px-6 py-3 border border-light-primary dark:border-dark-primary font-mono text-sm bg-white/70 dark:bg-[#111]/70 backdrop-blur-sm hover:bg-light-primary/10 dark:hover:bg-dark-primary/10 transition-colors">
            View All Resumes
          </button>
        </div>
      </div>
    </section>
  );
};

export default ResumeShowcaseSection2;
