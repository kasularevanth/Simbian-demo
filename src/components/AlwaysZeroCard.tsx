// src/components/AlwaysZeroCard.tsx
'use client';

import { motion } from 'framer-motion';
import { cardVariants, counterVariants, checkmarkVariants } from '@/styles/animations';

interface AlwaysZeroCardProps {
  title: string;
  iconSvg: React.ReactNode;
}

export default function AlwaysZeroCard({ title, iconSvg }: AlwaysZeroCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-navy-800 rounded-lg shadow-lg overflow-hidden border border-blue-800 w-full max-w-md"
    >
      <div className="px-6 py-4 bg-navy-700 border-b border-blue-800 flex justify-between items-center">
        <div className="flex items-center">
          <div className="mr-3 text-white">
            {iconSvg}
          </div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
        <div className="flex items-center">
          <motion.div 
            variants={counterVariants}
            animate="pulseDown"
            transition={{ repeat: Infinity, repeatType: "reverse", duration: 2 }}
            className="text-2xl font-bold text-green-400 mr-2"
          >
            0
          </motion.div>
          <motion.svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M20 6L9 17L4 12"
              stroke="#4ADE80"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={checkmarkVariants}
              initial="hidden"
              animate="visible"
            />
          </motion.svg>
        </div>
      </div>
      <div className="h-64 flex items-center justify-center p-4">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            className="mb-4"
          >
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 11.0857V12.0057C21.9988 14.1621 21.3005 16.2604 20.0093 17.9875C18.7182 19.7147 16.9033 20.9782 14.8354 21.5896C12.7674 22.201 10.5573 22.1276 8.53447 21.3803C6.51168 20.633 4.78465 19.2518 3.61096 17.4428C2.43727 15.6338 1.87979 13.4938 2.02168 11.342C2.16356 9.19029 2.99721 7.14205 4.39828 5.5028C5.79935 3.86354 7.69279 2.72111 9.79619 2.24587C11.8996 1.77063 14.1003 1.98806 16.07 2.86572" stroke="#4ADE80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M22 4L12 14.01L9 11.01" stroke="#4ADE80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-lg text-gray-300"
          >
            All clear! No issues to report.
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}