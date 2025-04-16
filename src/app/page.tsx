// src/app/page.tsx
'use client';

import Header from '@/components/Header';
import SimBianNavbar from '@/components/SimBianNavbar';
import WithoutSimbian from '@/components/WithoutSimbian';
import WithSimbian from '@/components/WithSimbian';

export default function Home() {
  return (
    <main className="bg-navy-900 min-h-screen">
      <SimBianNavbar />
      <Header />
      <WithoutSimbian />
      <WithSimbian />
      
      <footer className="bg-navy-800 py-12 text-white border-t border-blue-800">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center mb-6">
            <div className="text-white text-2xl font-bold flex items-center">
              <div className="mr-2 bg-blue-600 p-1 rounded">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 16V12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 8H12.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              Simbian
            </div>
          </div>
          <p className="text-gray-400">© {new Date().getFullYear()} Simbian. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}