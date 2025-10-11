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
    size: "row-span-2 col-span-2",
    background: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&h=1080&fit=crop&crop=center&q=80&auto=format&fm=webp"
  },
  {
    id: 2,
    title: "AI Master",
    subtitle: "Machine Learning Project",
    owner: "Emma Johnson",
    tags: ["Python", "TensorFlow", "Data Science"],
    image: "/portfolio2.png",
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
    image: "/portfolio3.png",
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
    image: "/portfolio4.png",
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
    image: "/portfolio5.png",
    color: "from-anime-purple to-anime-blue",
    size: "row-span-1 col-span-1",
    background: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1920&h=1080&fit=crop&crop=center&q=80&auto=format&fm=webp"
  },
];

// Card component with MagicBento-style animation
const BentoCard = ({ portfolio, index }: { portfolio: any, index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });
  const controls = useAnimation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0, lightX: 50, lightY: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const relativeX = (x - centerX) / centerX; // -1 ~ 1
    const relativeY = (y - centerY) / centerY; // -1 ~ 1

    // 단순한 계산 (원본 CSS 코드 패턴 참고)
    const rotateX = -relativeY * 10; // Y축 마우스 → X축 회전 (음수)
    const rotateY = relativeX * 5;  // X축 마우스 → Y축 회전 (양수)

    // 광원 위치 계산 (마우스 정확한 위치)
    const lightX = (x / rect.width) * 100; // 0 ~ 100%
    const lightY = (y / rect.height) * 100; // 0 ~ 100%

    setMousePosition({
      x: rotateX,
      y: rotateY,
      lightX: lightX,
      lightY: lightY
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // 광원 위치는 그대로 유지하고 회전만 초기화
    setMousePosition(prev => ({ ...prev, x: 0, y: 0 }));
  };
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);
  
  return (
    <motion.div
      ref={ref}
      className={`${portfolio.size} relative overflow-hidden group cursor-pointer`}
      onMouseMove = {handleMouseMove}
      onMouseEnter = {handleMouseEnter}
      onMouseLeave = {handleMouseLeave}
      style = {{
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
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
        rotateX: mousePosition.x,
        rotateY: mousePosition.y,
        transition: { duration: 0.1 }
      }}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${portfolio.background})`,
          imageRendering: 'high-quality',
          WebkitImageRendering: 'high-quality',
        }}
      ></div>
      
      {/* Semi-transparent colored overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${portfolio.color} opacity-20`}></div>
      
      {/* 3D 그림자 효과 */}
      <div 
        className="absolute inset-0 bg-white/70 dark:bg-[#111]/70 backdrop-blur-sm border border-gray-200/30 dark:border-gray-700/30 dark:shadow-[0_0_20px_rgba(255,20,147,0.3)]"
        style={{
          boxShadow: `
            ${mousePosition.x * 2}px ${mousePosition.y * 2}px 20px rgba(0, 0, 0, 0.1),
            ${mousePosition.x * 4}px ${mousePosition.y * 4}px 40px rgba(0, 0, 0, 0.05)
          `,
          transform: `translateZ(20px)`,
        }}
      ></div>
      
      {/* 광원 효과 (마우스 포인터 정확한 위치) - hover 시에만 표시 */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-200"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(
            circle at ${mousePosition.lightX}% ${mousePosition.lightY}%,
            rgba(255, 20, 147, 0.2) 0%,
            rgba(255, 105, 180, 0.1) 15%,
            transparent 40%
          )`,
          transform: `translateZ(25px)`,
        }}
      ></div>
      
      {/* 보조 광원 효과 - hover 시에만 표시 */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-200"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(
            circle at ${mousePosition.lightX}% ${mousePosition.lightY}%,
            rgba(255, 255, 255, 0.15) 0%,
            transparent 30%
          )`,
          transform: `translateZ(30px)`,
        }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10 p-6 h-full flex flex-col justify-between"
      style = {{
        transform: 'translateZ(40px)',
        textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
      }}
      >
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
                style={{
                  transform: 'translateZ(10px)',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
                }}
              >
                {tag}
              </span>
            ))}
          </div>
          
          {/* Hover effect - view details */}
          <div 
            className="absolute bottom-6 right-6 flex items-center opacity-0 group-hover:opacity-100 transition-opacity"
            style={{
              transform: 'translateZ(15px)',
              textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'
            }}
          >
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