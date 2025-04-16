// src/components/Header.tsx
'use client';

import { motion } from 'framer-motion';

export default function Header() {
  return (
    <header className="relative h-screen flex items-center justify-center overflow-hidden bg-navy-900">
      {/* Background animation */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-900 to-indigo-900 opacity-70"
          animate={{
            background: [
              'linear-gradient(to right, #1e3a8a, #312e81)',
              'linear-gradient(to right, #1e40af, #3730a3)',
              'linear-gradient(to right, #1e3a8a, #312e81)'
            ],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        
        {/* Abstract network pattern */}
        <svg width="100%" height="100%" className="absolute inset-0 opacity-10">
          <pattern id="network" width="100" height="100" patternUnits="userSpaceOnUse">
            <circle cx="50" cy="50" r="2" fill="white" />
            <circle cx="0" cy="0" r="2" fill="white" />
            <circle cx="0" cy="100" r="2" fill="white" />
            <circle cx="100" cy="0" r="2" fill="white" />
            <circle cx="100" cy="100" r="2" fill="white" />
            <line x1="50" y1="50" x2="0" y2="0" stroke="white" strokeWidth="0.5" />
            <line x1="50" y1="50" x2="100" y2="0" stroke="white" strokeWidth="0.5" />
            <line x1="50" y1="50" x2="0" y2="100" stroke="white" strokeWidth="0.5" />
            <line x1="50" y1="50" x2="100" y2="100" stroke="white" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#network)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Security Operations <br/> 
            <motion.span
              className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
              animate={{ 
                backgroundImage: [
                  'linear-gradient(to right, #60a5fa, #c084fc)',
                  'linear-gradient(to right, #3b82f6, #a855f7)',
                  'linear-gradient(to right, #60a5fa, #c084fc)'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Transformed
            </motion.span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8"
          >
            Discover the future of security operations with AI-powered automation that reduces false positives,
            increases detection accuracy, and lets your analysts focus on what matters.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-6 py-3 border border-white rounded-md shadow-sm text-base font-medium text-white bg-transparent hover:bg-white/10"
            >
              Watch Demo
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-8 left-0 right-0 flex justify-center"
        >
          <div className="animate-bounce p-2 bg-white/10 rounded-full">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 14L12 21M12 21L5 14M12 21V3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </motion.div>
      </div>
    </header>
  );
}