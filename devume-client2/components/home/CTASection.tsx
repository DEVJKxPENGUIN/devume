import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Main content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="border border-light-primary dark:border-dark-primary p-10 max-w-4xl mx-auto bg-white/70 dark:bg-dark-background/70 backdrop-blur-sm"
        >
          <motion.h2 
            className="text-3xl md:text-5xl font-mono font-bold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-light-primary dark:text-dark-primary">
              GET STARTED NOW
            </span>
          </motion.h2>
          
          {/* Horizontal line */}
          <motion.div 
            className="w-40 h-[1px] bg-light-primary dark:bg-dark-primary mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 160 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />
          
          <motion.p 
            className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300 mb-8 font-title"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Create your portfolio and join the developer community.
            <br />Take the first step toward a better career!
          </motion.p>
          
          <motion.div 
            className="flex flex-col md:flex-row gap-4 justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="px-8 py-4 border border-light-primary dark:border-dark-primary font-display bg-light-primary dark:bg-dark-primary text-white dark:text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start For Free
            </motion.button>
            <motion.button
              className="px-8 py-4 border border-light-primary dark:border-dark-primary font-display bg-white/50 dark:bg-dark-background/50 backdrop-blur-sm hover:bg-light-primary/10 dark:hover:bg-dark-primary/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Demo
            </motion.button>
          </motion.div>
          
          {/* Stats */}
          <motion.div 
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {[
              { label: 'Developers', value: '1,200+' },
              { label: 'Portfolios', value: '5,000+' },
              { label: 'Companies', value: '150+' },
              { label: 'Hires', value: '500+' }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="border border-light-primary/30 dark:border-dark-primary/30 p-4 bg-white/50 dark:bg-dark-background/50 backdrop-blur-xs"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-2xl md:text-3xl font-bold text-light-primary dark:text-dark-primary font-display">{stat.value}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-title">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;