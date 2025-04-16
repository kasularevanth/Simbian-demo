// src/styles/animations.ts

import { Variants } from 'framer-motion';

export const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

export const alertVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.3 }
  },
  exit: { 
    opacity: 0, 
    x: 20,
    transition: { duration: 0.3 } 
  }
};

export const counterVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  pulse: {
    scale: [1, 1.1, 1],
    color: ['#ffffff', '#ff8a8a', '#ffffff'],
    transition: { duration: 0.5 }
  },
  pulseDown: {
    scale: [1, 1.1, 1],
    color: ['#ffffff', '#8aff8a', '#ffffff'],
    transition: { duration: 0.5 }
  }
};

export const stepVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.5 }
  })
};

export const pathVariants: Variants = {
  hidden: { pathLength: 0 },
  visible: { 
    pathLength: 1,
    transition: { duration: 1, ease: "easeInOut" }
  }
};

export const checkmarkVariants: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { 
    pathLength: 1, 
    opacity: 1,
    transition: { 
      pathLength: { delay: 0.2, duration: 0.8, ease: "easeInOut" },
      opacity: { delay: 0.2, duration: 0.3 }
    }
  }
};

export const titleVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};