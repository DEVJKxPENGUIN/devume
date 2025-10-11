import { motion } from 'framer-motion';

const FeaturesSection = () => {
  const features = [
    {
      title: 'Stunning Design',
      description: 'Create a unique portfolio with various themes and templates that showcase your personal style.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Tech Stack Integration',
      description: 'Easily manage and display your technology stack, projects, and experience all in one place.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      title: 'Real-time Updates',
      description: 'Update your portfolio in real-time with our simple editor and share it instantly with your network.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-3xl md:text-5xl font-mono font-bold mb-4 inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-light-primary dark:text-dark-primary">
              FEATURES
            </span>
          </motion.h2>
          <p className="max-w-2xl mx-auto text-lg font-title text-gray-600 dark:text-gray-400">
            Experience the ultimate portfolio platform for developers
          </p>
          
          {/* Horizontal line */}
          <motion.div 
            className="w-40 h-[1px] bg-light-primary dark:bg-dark-primary mx-auto mt-4"
            initial={{ width: 0 }}
            whileInView={{ width: 160 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-light-primary/20 dark:border-dark-primary/20 p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="relative z-10">
                <div className="text-light-primary dark:text-dark-primary mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 font-mono">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 font-title">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;