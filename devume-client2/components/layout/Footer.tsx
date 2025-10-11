import { motion } from 'framer-motion';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="w-full border-t-2 border-light-primary/30 dark:border-dark-primary/30 transition-colors duration-300 py-10 mt-16 relative overflow-hidden">
      {/* Grid pattern background */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:20px_20px] opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo and description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-title mb-4 relative inline-block italic">
              <span className="text-light-primary dark:text-dark-primary tracking-wider">DEVUME</span>
              <span className="absolute -top-1 -right-6 text-[8px] font-mono opacity-80">v2.0</span>
            </h3>
            
            <p className="text-sm text-light-muted dark:text-dark-muted mb-4 font-sans">
              A portfolio platform for developers.
              Share your projects, tech stack, and introduce yourself.
            </p>
            
            {/* Code-style decoration */}
            <div className="font-mono text-xs text-light-muted dark:text-dark-muted opacity-50">
              <div>{'console.log("Hello, World!");'}</div>
              <div>{'// Connect with the world through code'}</div>
            </div>
          </motion.div>
          
          {/* Links and information */}
          <motion.div 
            className="md:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Links section */}
            <div>
              <h4 className="text-lg font-mono text-light-primary dark:text-dark-primary mb-4">
                <span className="opacity-50">{'{'}</span> Links <span className="opacity-50">{'}'}</span>
              </h4>
              <ul className="space-y-2">
                <li><a href="/" className="text-sm hover:text-light-primary dark:hover:text-dark-primary transition-colors font-sans">Home</a></li>
                <li><a href="/about" className="text-sm hover:text-light-primary dark:hover:text-dark-primary transition-colors font-sans">About</a></li>
                <li><a href="/portfolios" className="text-sm hover:text-light-primary dark:hover:text-dark-primary transition-colors font-sans">Portfolios</a></li>
              </ul>
            </div>
            
            {/* Contact section */}
            <div>
              <h4 className="text-lg font-mono text-light-primary dark:text-dark-primary mb-4">
                <span className="opacity-50">{'{'}</span> Contact <span className="opacity-50">{'}'}</span>
              </h4>
              <ul className="space-y-2">
                <li className="text-sm font-mono">
                  <span className="text-light-muted dark:text-dark-muted">email:</span> contact@devume.com
                </li>
                <li className="text-sm font-mono">
                  <span className="text-light-muted dark:text-dark-muted">tel:</span> 02-123-4567
                </li>
              </ul>
            </div>
            
            {/* Social section */}
            <div>
              <h4 className="text-lg font-mono text-light-primary dark:text-dark-primary mb-4">
                <span className="opacity-50">{'{'}</span> Social <span className="opacity-50">{'}'}</span>
              </h4>
              <div className="flex space-x-4">
                {/* GitHub icon */}
                <a href="#" aria-label="GitHub" className="hover:text-light-primary dark:hover:text-dark-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                
                {/* Twitter icon */}
                <a href="#" aria-label="Twitter" className="hover:text-light-primary dark:hover:text-dark-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
                
                {/* Instagram icon */}
                <a href="#" aria-label="Instagram" className="hover:text-light-primary dark:hover:text-dark-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Copyright information */}
        <motion.div 
          className="mt-10 pt-6 border-t border-light-primary/20 dark:border-dark-primary/20 text-center font-mono text-xs"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-light-muted dark:text-dark-muted">
            <span className="text-light-primary dark:text-dark-primary">/*</span> &copy; {year} Devume. All rights reserved. <span className="text-light-primary dark:text-dark-primary">*/</span>
          </div>
          
          {/* Terminal-style log */}
          <div className="mt-2 opacity-50">
            <span className="text-anime-green dark:text-anime-yellow">$</span> <span className="text-anime-blue dark:text-anime-red">exit</span> <span className="text-light-primary dark:text-dark-primary">0</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;