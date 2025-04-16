// src/components/AlertCard.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Alert } from '@/types';
import { cardVariants, alertVariants, counterVariants } from '@/styles/animations';
import { generateRandomAlert } from '@/data/alertData';

interface AlertCardProps {
  title: string;
  initialCount: number;
  maxAlerts: number;
  iconSvg: React.ReactNode;
  alertType: 'ignored' | 'wronglyClosed' | 'activeThreat';
  interval?: number;
}

export default function AlertCard({ 
  title, 
  initialCount, 
  maxAlerts,
  iconSvg,
  alertType,
  interval = 3000
}: AlertCardProps) {
  const [count, setCount] = useState(initialCount);
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [animateCount, setAnimateCount] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Add a new alert
      const newAlert = generateRandomAlert(alertType);
      setAlerts(prev => {
        const updated = [newAlert, ...prev.slice(0, maxAlerts - 1)];
        return updated;
      });
      
      // Increment count
      setCount(prev => prev + 1);
      setAnimateCount(true);
      
      // Reset animation state
      setTimeout(() => setAnimateCount(false), 500);
    }, interval);

    return () => clearInterval(intervalId);
  }, [alertType, interval, maxAlerts]);

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
        <motion.div 
          variants={counterVariants}
          animate={animateCount ? "pulse" : "visible"}
          className="text-2xl font-bold text-white"
        >
          {count}
        </motion.div>
      </div>
      <div className="h-64 overflow-y-auto p-4">
        <AnimatePresence mode="popLayout">
          {alerts.map(alert => (
            <motion.div
              key={alert.id}
              variants={alertVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-navy-700 p-3 rounded mb-2 border border-blue-900 flex justify-between items-center"
            >
              <div className="text-sm text-white">{alert.title}</div>
              <div className="text-xs text-gray-400">
                {new Date(alert.timestamp).toLocaleTimeString()}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}