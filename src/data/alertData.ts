// src/data/alertData.ts

import { Alert } from '@/types';

export const generateRandomAlert = (type: 'ignored' | 'wronglyClosed' | 'activeThreat'): Alert => {
  const alertTitles = {
    ignored: [
      'Suspicious Login Attempt',
      'Malware Detection',
      'Unusual Network Traffic',
      'Password Reset Attempt',
      'Unauthorized Access Attempt',
      'Firewall Violation',
      'Unrecognized Device Connected',
      'Multiple Failed Logins',
      'System Configuration Change',
      'Potential Phishing Email'
    ],
    wronglyClosed: [
      'Potential Data Exfiltration',
      'Command and Control Communication',
      'Privilege Escalation Attempt',
      'API Key Exposure',
      'Suspicious Script Execution',
      'Admin Account Activity',
      'DNS Tunneling Detected',
      'Cross-Site Scripting Attempt',
      'SQL Injection Attempt',
      'Credential Stuffing Attack'
    ],
    activeThreat: [
      'Ransomware Activity Detected',
      'Critical Data Breach',
      'Zero-Day Exploit',
      'APT Campaign Detected',
      'Live Backdoor Access',
      'Data Encryption in Progress',
      'Supply Chain Compromise',
      'Persistent Threat Actor',
      'Network Infrastructure Attack',
      'Internal System Compromise'
    ]
  };

  return {
    id: Math.random().toString(36).substring(2, 15),
    title: alertTitles[type][Math.floor(Math.random() * alertTitles[type].length)],
    type,
    timestamp: new Date()
  };
};

export const initialAlerts: Alert[] = [];