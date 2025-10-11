import { motion, useAnimation } from 'framer-motion';
import Link from 'next/link';
import ThemeToggle from '../ThemeToggle';
import { useEffect, useState } from 'react';
import StarBorder from '../effects/StarBorder';

const Header = () => {
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Resumes', href: '/resume' },
    { name: 'Contact', href: '/contact' },
  ];

  const [scrollY, setScrollY] = useState(0);
  const headerControls = useAnimation();
  
  const MAX_WIDTH = 1280; // Max width for the project (equivalent to container class)
  const NARROW_WIDTH = 672; // max-w-2xl equivalent
  
  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Animate header width based on scroll position
  useEffect(() => {
    const scrollDownThreshold = 100; // Threshold for scrolling down
    const scrollUpThreshold = 30; // Threshold for scrolling up
    
    if (scrollY <= 0) {
      // At the very top - use container width
      headerControls.start({
        maxWidth: `${MAX_WIDTH}px`,
        width: '100%',
        transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
      });
    } else if (scrollY < scrollDownThreshold) {
      // Scrolling down - gradually reduce width
      const progress = Math.min(scrollY / scrollDownThreshold, 1);
      const maxWidthValue = MAX_WIDTH - (progress * (MAX_WIDTH - NARROW_WIDTH));
      
      headerControls.start({
        maxWidth: `${maxWidthValue}px`,
        width: '100%',
        transition: { duration: 0.1 }
      });
    } else if (scrollY < scrollUpThreshold) {
      // Scrolling up near the top - start expanding
      const progress = Math.max(0, (scrollUpThreshold - scrollY) / scrollUpThreshold);
      const maxWidthValue = (progress * (MAX_WIDTH - NARROW_WIDTH)) + NARROW_WIDTH;
      
      headerControls.start({
        maxWidth: `${maxWidthValue}px`,
        width: '100%',
        transition: { duration: 0.1 }
      });
    } else {
      // Normal scrolling state - compact width
      headerControls.start({
        maxWidth: `${NARROW_WIDTH}px`, // max-w-2xl equivalent
        width: '100%',
        transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
      });
    }
  }, [scrollY, headerControls]);

  // Nav item animation variants
  const navItemVariants = {
    initial: { opacity: 0, y: -10 },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, delay: 0.3 + i * 0.1 }
    }),
    hover: { y: -2, transition: { duration: 0.2 } }
  };

  return (
    <header className="fixed top-4 left-0 w-full z-40 flex justify-center">
      {/* Header container with animated width */}
      <motion.div 
        animate={headerControls}
        className="backdrop-filter backdrop-blur-sm mx-4 sm:mx-6 lg:mx-8"
      >
        {/* Inner header content */}
        <div className="w-full py-1 flex justify-between items-center 
                       px-4 border rounded-full border-black/50 dark:border-white/50">
          {/* Logo */}
          <div className="flex items-center cursor-default">
            <span className="font-display text-2xl sm:text-3xl font-bold tracking-wide">
              DE<span className="text-light-primary dark:text-dark-primary">V</span>UME
            </span>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, i) => (
              <motion.div 
                key={item.name} 
                custom={i}
                variants={navItemVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
              >
                <Link 
                  href={item.href} 
                  className="font-mono text-sm relative group px-1"
                >
                  <span className="text-gray-800 dark:text-gray-200 group-hover:text-light-primary dark:group-hover:text-dark-primary transition-colors">
                    {item.name}
                  </span>
                  <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-light-primary dark:bg-dark-primary group-hover:w-full transition-all duration-300 ease-out"></span>
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Right side controls */}
          <div className="flex items-center">
            {/* Mobile menu button */}
            <motion.button
              className="md:hidden text-gray-800 dark:text-gray-200 mr-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </motion.button>

            {/* Theme toggle */}
            <ThemeToggle />
          </div>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;