import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  EnvelopeIcon, 
  CodeBracketIcon, 
  CogIcon, 
  GlobeAltIcon
} from '@heroicons/react/24/outline';
import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import RealisticEarth from './RealisticEarth';

const ProfileSection = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  
  const animatedTitles = [
    'AI-Powered Web Creator',
    'Prompt Engineer & Workflow Designer',
    'No-Code Developer',
    'Future Full Stack Developer',
    'Backend Engineer (In Progress)',
    'Visionary Digital Builder',
    'Product Idea Machine 💡'
  ];

  const personalInfo = {
    name: 'Rabeel Ashraf',
    email: 'mrperfect6ft@gmail.com',
    whatsapp: 'https://wa.me/971501359046',
    otherTitles: [
      'AI Agent Creator',
      'Mechanical & Safety Engineer',
      'Climate Change Advocate'
    ],
    languages: ['JavaScript', 'Python', 'React', 'Node.js', 'Tailwind CSS', 'Three.js']
  };

  // Rotate titles every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % animatedTitles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [animatedTitles.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const titleVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    exit: {
      y: -20,
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 1, 1]
      }
    }
  };

  return (
    <div className="w-full max-w-screen overflow-x-hidden">
      <div className="w-full max-w-6xl mx-auto px-4 py-12 md:px-8 md:py-20">
        <motion.div 
          className="w-full space-y-8 md:space-y-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ 
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden'
          }}
        >
          {/* Hero Section */}
          <motion.div 
            className="text-center space-y-6 md:space-y-8"
            variants={itemVariants}
          >
            {/* Name Header */}
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight px-2"
              variants={itemVariants}
            >
              {personalInfo.name}
            </motion.h1>
            
            {/* Animated Rotating Titles */}
            <div className="h-16 md:h-20 flex items-center justify-center px-4">
              <motion.div
                key={currentTitleIndex}
                variants={titleVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-purple-400 font-semibold text-center leading-relaxed"
              >
                {animatedTitles[currentTitleIndex]}
              </motion.div>
            </div>
            
            {/* Social Links */}
            <motion.div 
              className="flex justify-center items-center space-x-4 sm:space-x-6 py-4"
              variants={itemVariants}
            >
              <motion.a
                href="https://github.com/Rabeel-Ashraf"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800/50 rounded-full border border-purple-500/30 hover:border-purple-500 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="h-5 w-5 sm:h-6 sm:w-6 text-gray-300 hover:text-purple-400" />
              </motion.a>
              
              <motion.a
                href="https://linkedin.com/in/rabeel-ashraf-721105204"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800/50 rounded-full border border-purple-500/30 hover:border-purple-500 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="h-5 w-5 sm:h-6 sm:w-6 text-gray-300 hover:text-purple-400" />
              </motion.a>
              
              <motion.a
                href="mailto:mrperfect6ft@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800/50 rounded-full border border-purple-500/30 hover:border-purple-500 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-gray-300 hover:text-purple-400" />
              </motion.a>
            </motion.div>

            {/* Email with Icon */}
            <motion.div 
              className="flex items-center justify-center space-x-2 px-4" 
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <EnvelopeIcon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 flex-shrink-0" />
              <a 
                href={`mailto:${personalInfo.email}`}
                className="text-sm sm:text-base text-gray-300 hover:text-purple-400 transition-colors break-all"
              >
                {personalInfo.email}
              </a>
            </motion.div>

            {/* WhatsApp Contact Button */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center pt-4"
            >
              <motion.a
                href={personalInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-green-600 to-green-500 text-white font-semibold rounded-full hover:from-green-700 hover:to-green-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="h-5 w-5" />
                <span className="text-sm sm:text-base">Contact on WhatsApp</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* About Me Card */}
          <motion.div 
            className="w-full bg-gradient-to-r from-purple-900/20 to-indigo-900/20 backdrop-blur-md rounded-xl p-6 md:p-8 lg:p-10 border border-purple-500/20"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Section: About Me */}
            <motion.h3 
              className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8 flex items-center justify-center md:justify-start"
              variants={itemVariants}
            >
              <CodeBracketIcon className="h-6 w-6 md:h-7 md:w-7 mr-3 text-purple-400 flex-shrink-0" />
              About Me
            </motion.h3>
            
            <div className="w-full space-y-6 md:space-y-8">
              {/* Subsection: Other Titles */}
              <motion.div variants={itemVariants}>
                <h4 className="text-base sm:text-lg md:text-xl font-semibold text-purple-400 mb-4 text-center md:text-left">
                  Other Titles
                </h4>
                <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3">
                  {personalInfo.otherTitles.map((title, index) => (
                    <motion.span
                      key={index}
                      className="px-3 py-2 bg-purple-600/20 text-purple-300 rounded-full text-xs sm:text-sm md:text-base border border-purple-500/30 text-center whitespace-nowrap"
                      whileHover={{ scale: 1.05 }}
                      variants={itemVariants}
                    >
                      {title}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Subsection: Languages & Technologies */}
              <motion.div variants={itemVariants}>
                <h4 className="text-base sm:text-lg md:text-xl font-semibold text-purple-400 mb-4 text-center md:text-left">
                  Languages & Technologies
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
                  {personalInfo.languages.map((lang, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center justify-center space-x-2 p-3 md:p-4 bg-gray-700/50 rounded-lg text-center hover:bg-purple-600/10 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      variants={itemVariants}
                    >
                      <CogIcon className="h-4 w-4 text-green-400 flex-shrink-0" />
                      <span className="text-xs sm:text-sm md:text-base text-gray-300 truncate">
                        {lang}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* 3D Vision Section */}
          <motion.div
            className="w-full bg-gradient-to-r from-purple-900/20 to-indigo-900/20 backdrop-blur-md rounded-xl p-6 md:p-8 lg:p-10 border border-purple-500/20"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <motion.h3 
              className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6 flex items-center justify-center md:justify-start"
              variants={itemVariants}
            >
              <GlobeAltIcon className="h-6 w-6 md:h-7 md:w-7 mr-3 text-purple-400 flex-shrink-0" />
              My 3D Vision
            </motion.h3>
            
            <motion.p 
              className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 md:mb-8 leading-relaxed text-center md:text-left"
              variants={itemVariants}
            >
              Exploring the intersection of identity and interactivity through motion and 3D.
              This rotating Earth demonstrates my ability to integrate advanced 3D graphics with modern web technologies.
            </motion.p>

            {/* Floating Profile Image */}
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="relative mx-auto mb-6 md:mb-8 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48"
              variants={itemVariants}
            >
              {/* Outer Glowing Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 animate-pulse opacity-30 blur-xl"></div>

              {/* Profile Image with glow border */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 md:border-6 border-purple-500 shadow-[0_0_30px_#a855f7] hover:scale-105 transition duration-700 ease-in-out">
                <img
                  src="/rabeel.jpg"
                  alt="Rabeel Ashraf"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    console.log('Image failed to load');
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face';
                  }}
                  onLoad={() => console.log('Image loaded successfully')}
                />
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <RealisticEarth />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProfileSection;