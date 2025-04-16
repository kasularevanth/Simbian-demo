// src/types/index.ts

export interface Alert {
    id: string;
    title: string;
    type: 'ignored' | 'wronglyClosed' | 'activeThreat';
    timestamp: Date;
  }
  
  export interface CardProps {
    title: string;
    count: number;
    icon: React.ReactNode;
    alerts: Alert[];
    color: string;
  }
  
  export interface Step {
    id: string;
    title: string;
    description: string;
    icon: string;
  }