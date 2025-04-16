// src/components/Title.tsx
'use client';

import { motion } from 'framer-motion';
import { titleVariants } from '@/styles/animations';

interface TitleProps {
  text: string;
  className?: string;
  description?: string;
}

export default function Title({ text, className = '', description }: TitleProps) {
  return (
    <motion.div
      className={`text-center mb-10 ${className}`}
      variants={titleVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-2">{text}</h2>
      {description && (
        <motion.p 
          className="text-xl text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}