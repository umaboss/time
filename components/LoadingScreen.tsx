import React from 'react';
import { Plane, Zap } from 'lucide-react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 flex items-center justify-center z-50">
      <div className="text-center">
        {/* Robot-style loading animation */}
        <div className="relative mb-8">
          <div className="w-32 h-32 border-4 border-cyan-500 rounded-full animate-spin border-t-transparent"></div>
          <div className="absolute inset-0 w-32 h-32 border-4 border-purple-500 rounded-full animate-spin-reverse border-b-transparent"></div>
          <div className="absolute inset-4 w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center animate-pulse">
            <Plane className="w-8 h-8 text-white animate-bounce" />
          </div>
        </div>
        
        {/* Loading text with typewriter effect */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-white mb-2 animate-fade-in">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              TravelBot
            </span>
          </h1>
          <div className="flex items-center justify-center space-x-2 text-cyan-400">
            <Zap className="w-5 h-5 animate-pulse" />
            <span className="text-lg font-medium typewriter">Initializing Travel Matrix...</span>
          </div>
          
          {/* Progress bar */}
          <div className="w-64 h-2 bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full animate-loading-bar"></div>
          </div>
        </div>
        
        {/* Holographic effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
          <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping animation-delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-blue-400 rounded-full animate-ping animation-delay-2000"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;