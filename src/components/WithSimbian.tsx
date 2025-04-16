// src/components/WithSimbian.tsx
'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AlwaysZeroCard from './AlwaysZeroCard';
import Title from './Title';
import { steps } from '@/data/stepData';
import { stepVariants, pathVariants } from '@/styles/animations';

export default function WithSimbian() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStepIndex(prevIndex => (prevIndex + 1) % steps.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <Title 
          text="With Simbian" 
          description="Relax. Our AI Agents will take it from here."
          className="text-white"
        />
        
        <div className="my-16 relative">
          {/* Center vertical line */}
          <div className="absolute left-1/2 top-0 h-full -translate-x-1/2 w-px bg-blue-700 z-0">
            <motion.div 
              className="absolute top-0 h-full w-full bg-blue-400"
              initial={{ height: 0 }}
              animate={{ height: '100%' }}
              transition={{ duration: 5, repeat: Infinity }}
            />
          </div>
          
          {/* Steps along the line */}
          <div className="flex flex-col items-center space-y-24 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                custom={index}
                variants={stepVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className={`flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col items-center w-full`}
              >
                <div className={`md:w-5/12 w-full ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'} mb-6 md:mb-0`}>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-blue-200">{step.description}</p>
                </div>
                
                <div className="md:w-2/12 flex justify-center">
                  <motion.div 
                    className={`w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center
                    ${currentStepIndex === index ? 'ring-4 ring-blue-300' : ''}`}
                    animate={currentStepIndex === index ? 
                      { scale: [1, 1.2, 1], backgroundColor: ['#2563eb', '#60a5fa', '#2563eb'] } : 
                      {}}
                    transition={{ duration: 1, repeat: currentStepIndex === index ? Infinity : 0 }}
                  >
                    <span className="text-xl">{step.icon}</span>
                  </motion.div>
                </div>
                
                <div className={`md:w-5/12 w-full ${index % 2 === 0 ? 'md:text-left md:pl-8' : 'md:text-right md:pr-8'}`}>
                  {index !== steps.length - 1 && index === currentStepIndex && (
                    <motion.svg 
                      width="40" 
                      height="40" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      className={`${index % 2 === 0 ? 'md:ml-0' : 'md:ml-auto'} mb-4`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1, rotate: index % 2 === 0 ? 0 : 180 }}
                    >
                      <motion.path 
                        d="M5 12H19M19 12L12 5M19 12L12 19" 
                        stroke="#60A5FA" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        variants={pathVariants}
                        initial="hidden"
                        animate="visible"
                      />
                    </motion.svg>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          <AlwaysZeroCard
            title="Ignored Alerts"
            iconSvg={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.73 21C13.5542 21.3031 13.3018 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
          />
          
          <AlwaysZeroCard
            title="Wrongly Closed"
            iconSvg={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 14L12 12M12 12L14 10M12 12L10 10M12 12L14 14M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
          />
          
          <AlwaysZeroCard
            title="Active Threats"
            iconSvg={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 9V11M12 15H12.01M5.07183 19H18.9282C20.4678 19 21.4301 17.3333 20.6603 16L13.7321 4C12.9623 2.66667 11.0378 2.66667 10.268 4L3.33978 16C2.56998 17.3333 3.53223 19 5.07183 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
}