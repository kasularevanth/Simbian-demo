// src/data/stepData.ts

import { Step } from '@/types';

export const steps: Step[] = [
  {
    id: 'triaged',
    title: 'Triaged & Reported',
    description: 'The SOC Agent handled investigation and reporting.',
    icon: '🔍'
  },
  {
    id: 'lessNoise',
    title: 'Less noise',
    description: '90% of alerts resolved automatically, 24/7',
    icon: '🔔'
  },
  {
    id: 'holisticInsight',
    title: 'Holistic insight',
    description: 'Correlate alerts and your environment into the big picture',
    icon: '🧩'
  },
  {
    id: 'adaptsAutomatically',
    title: 'Adapts automatically',
    description: 'No SOAR needed. Investigate every alert, including new ones, with best of Simbians knowledge and yours.',
    icon: '⚙️'
  }
];