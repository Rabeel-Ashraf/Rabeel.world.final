import React from 'react';
import { motion } from 'framer-motion';
import { 
  RocketLaunchIcon, 
  CpuChipIcon, 
  GlobeAltIcon,
  ShieldCheckIcon,
  BeakerIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

const GallerySection = () => {
  const projects = [
    {
      title: 'AI Agent Creator',
      description: 'Advanced AI-powered agent creation platform with natural language processing and machine learning capabilities for automated workflow optimization.',
      tech: ['Python', 'TensorFlow', 'React', 'Node.js', 'OpenAI'],
      icon: CpuChipIcon,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'MERN Stack Analytics',
      description: 'Full-stack data analytics dashboard with real-time visualization, automated reporting features, and comprehensive business intelligence tools.',
      tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Chart.js'],
      icon: ChartBarIcon,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Eco-Safety App',
      description: 'Climate change awareness platform with environmental impact tracking and safety protocol management for sustainable business practices.',
      tech: ['React Native', 'Firebase', 'Three.js', 'TypeScript'],
      icon: ShieldCheckIcon,
      color: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Web3 Portfolio',
      description: 'Decentralized portfolio platform with blockchain integration and NFT showcase capabilities for modern digital asset management.',
      tech: ['Solidity', 'Web3.js', 'React', 'IPFS', 'Ethereum'],
      icon: GlobeAltIcon,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Mechanical Design Suite',
      description: 'CAD-integrated web application for mechanical engineering calculations and 3D visualization with advanced simulation capabilities.',
      tech: ['Three.js', 'WebGL', 'TypeScript', 'CAD API'],
      icon: BeakerIcon,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Space Tech Simulator',
      description: 'Interactive space mission planning tool with orbital mechanics and trajectory optimization for aerospace engineering applications.',
      tech: ['JavaScript', 'WebGL', 'Physics Engine', 'NASA API'],
      icon: RocketLaunchIcon,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="w-full max-w-screen overflow-x-hidden">
      {/* Navigation Bar */}
      <motion.nav 
        className="w-full max-w-none bg-gray-900/80 backdrop-blur-md border-b border-purple-500/20 sticky top-0 z-50 overflow-x-hidden"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 overflow-x-hidden">
          <div className="flex flex-wrap items-center justify-between gap-4 w-full">
            {/* Logo */}
            <motion.div 
              className="flex items-center space-x-2 flex-shrink-0"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">R</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Portfolio
              </span>
            </motion.div>
            
            {/* Navigation Links */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 overflow-x-hidden">
              {['Profile', 'Gallery', 'Work'].map((item, index) => (
                <motion.button
                  key={item}
                  className={`px-3 py-2 sm:px-4 sm:py-2 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 flex-shrink-0 ${
                    item === 'Gallery'
                      ? 'bg-purple-600/20 text-purple-400 border border-purple-500/30'
                      : 'text-gray-300 hover:text-purple-400 hover:bg-purple-600/10'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 overflow-x-hidden">
        <motion.div 
          className="w-full space-y-8 sm:space-y-12 overflow-x-hidden"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header Section */}
          <motion.div 
            className="text-center space-y-4 sm:space-y-6 w-full max-w-4xl mx-auto px-2"
            variants={itemVariants}
          >
            <motion.h1 
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Project Gallery
            </motion.h1>
            
            <motion.p 
              className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-2"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Explore my collection of innovative projects spanning AI, web development, 
              mechanical engineering, and climate technology. Each project showcases 
              cutting-edge solutions and modern development practices.
            </motion.p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 overflow-x-hidden"
            variants={containerVariants}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="w-full bg-gray-800/50 backdrop-blur-md rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 overflow-hidden"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                  boxShadow: '0 20px 40px rgba(147, 51, 234, 0.3)'
                }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              >
                <div className="w-full space-y-4 sm:space-y-6 overflow-hidden">
                  {/* Project Header */}
                  <div className="flex items-start space-x-3 sm:space-x-4 w-full">
                    <div className={`p-3 sm:p-4 rounded-lg sm:rounded-xl bg-gradient-to-r ${project.color} flex-shrink-0`}>
                      <project.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                    </div>
                    <div className="flex-1 min-w-0 overflow-hidden">
                      <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight break-words">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Project Description */}
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed break-words">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="w-full overflow-hidden">
                    <h4 className="text-sm font-semibold text-purple-400 mb-3">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2 w-full">
                      {project.tech.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="px-2 py-1 sm:px-3 sm:py-1 bg-gradient-to-r from-purple-600/30 to-pink-600/30 text-purple-300 rounded-full text-xs sm:text-sm border border-purple-500/30 backdrop-blur-sm flex-shrink-0"
                          whileHover={{ 
                            scale: 1.05,
                            boxShadow: '0 0 15px rgba(147, 51, 234, 0.5)'
                          }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: techIndex * 0.1 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                  
                  {/* View Project Button */}
                  <motion.button
                    className="w-full py-3 sm:py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 relative overflow-hidden group"
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: '0 10px 30px rgba(147, 51, 234, 0.4)'
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Button Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                    
                    {/* Button Content */}
                    <div className="relative flex items-center justify-center space-x-2">
                      <span>View Project</span>
                      <motion.div
                        className="w-4 h-4 sm:w-5 sm:h-5"
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.div>
                    </div>

                    {/* Hover Particles */}
                    <motion.div
                      className="absolute inset-0 pointer-events-none overflow-hidden"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-white rounded-full"
                          style={{
                            left: `${20 + i * 10}%`,
                            top: '50%',
                          }}
                          animate={{
                            y: [-10, -30, -10],
                            opacity: [0, 1, 0],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: i * 0.1,
                          }}
                        />
                      ))}
                    </motion.div>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA Section */}
          <motion.div
            className="w-full text-center space-y-6 pt-8 sm:pt-12 border-t border-purple-500/20"
            variants={itemVariants}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto px-4">
              Let's collaborate on your next project and bring your ideas to life with cutting-edge technology.
            </p>
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full text-base sm:text-lg transition-all duration-300 relative overflow-hidden group"
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 15px 35px rgba(6, 182, 212, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              <span className="relative">Get In Touch</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default GallerySection;