import React, { useState, useEffect } from 'react';
import { Search, MapPin, Calendar, Users, Sparkles, Globe, Zap, ChevronLeft, ChevronRight, Play, Pause, Volume2, Plane, UtensilsCrossed, Camera, Star, Crown, Shield } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  
  const robotSlides = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'AI Travel Assistant',
      subtitle: 'Your Personal Robot Guide',
      description: 'Advanced neural networks analyze millions of travel data points to create your perfect journey',
      color: 'from-cyan-400 to-blue-600'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Quantum Navigation',
      subtitle: 'Future of Travel Planning',
      description: 'Holographic mapping and real-time destination analysis powered by quantum computing',
      color: 'from-purple-400 to-pink-600'
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/8386427/pexels-photo-8386427.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Neural Recommendations',
      subtitle: 'Machine Learning Excellence',
      description: 'Deep learning algorithms understand your preferences to suggest perfect destinations',
      color: 'from-blue-400 to-cyan-600'
    }
  ];

  const leftButtons = [
    {
      id: 'destinations',
      label: 'Destinations',
      icon: MapPin,
      description: 'Explore Amazing Places',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      id: 'restaurants',
      label: 'Restaurants',
      icon: UtensilsCrossed,
      description: 'Culinary Adventures',
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 'places',
      label: 'Places',
      icon: Camera,
      description: 'Hidden Gems',
      color: 'from-blue-500 to-cyan-600'
    }
  ];

  const rightButtons = [
    {
      id: 'free',
      label: 'Free Plan',
      icon: Star,
      description: 'Basic AI Features',
      color: 'from-green-500 to-teal-600',
      price: '$0/month'
    },
    {
      id: 'premium',
      label: 'Premium',
      icon: Crown,
      description: 'Advanced AI Power',
      color: 'from-yellow-500 to-orange-600',
      price: '$29/month'
    },
    {
      id: 'enterprise',
      label: 'Enterprise',
      icon: Shield,
      description: 'Ultimate AI Suite',
      color: 'from-purple-500 to-indigo-600',
      price: '$99/month'
    }
  ];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % robotSlides.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, robotSlides.length]);

  const currentRobot = robotSlides[currentSlide];

  const getRobotTransform = () => {
    if (!hoveredButton) return 'translateX(0) rotate(0deg)';
    
    if (leftButtons.some(btn => btn.id === hoveredButton)) {
      return 'translateX(-20px) rotate(-15deg)';
    }
    if (rightButtons.some(btn => btn.id === hoveredButton)) {
      return 'translateX(20px) rotate(15deg)';
    }
    return 'translateX(0) rotate(0deg)';
  };

  const getRobotEyePosition = () => {
    if (!hoveredButton) return { left: '45%', top: '35%' };
    
    if (leftButtons.some(btn => btn.id === hoveredButton)) {
      return { left: '35%', top: '32%' };
    }
    if (rightButtons.some(btn => btn.id === hoveredButton)) {
      return { left: '55%', top: '32%' };
    }
    return { left: '45%', top: '35%' };
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Advanced Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Circuit Board Pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1000 1000">
            <defs>
              <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M10,10 L90,10 L90,90 L10,90 Z" fill="none" stroke="url(#circuitGradient)" strokeWidth="1"/>
                <circle cx="10" cy="10" r="3" fill="url(#circuitGradient)"/>
                <circle cx="90" cy="90" r="3" fill="url(#circuitGradient)"/>
              </pattern>
              <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4"/>
                <stop offset="100%" stopColor="#8b5cf6"/>
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)"/>
          </svg>
        </div>

        {/* Matrix Rain Effect */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-green-400 font-mono text-sm animate-matrix-rain"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            >
              {Math.random().toString(36).substring(7)}
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-12 gap-8 items-center min-h-screen py-20">
          
          {/* Left Side Buttons */}
          <div className="col-span-3 space-y-6">
            {leftButtons.map((button) => {
              const Icon = button.icon;
              return (
                <div
                  key={button.id}
                  onMouseEnter={() => setHoveredButton(button.id)}
                  onMouseLeave={() => setHoveredButton(null)}
                  className={`group relative cursor-pointer transform transition-all duration-500 ${
                    hoveredButton === button.id ? 'scale-110 translate-x-4' : 'hover:scale-105'
                  }`}
                >
                  <div className={`bg-gradient-to-r ${button.color} p-6 rounded-2xl border border-white/20 backdrop-blur-xl shadow-2xl ${
                    hoveredButton === button.id ? 'shadow-cyan-500/50' : ''
                  }`}>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{button.label}</h3>
                        <p className="text-white/80 text-sm">{button.description}</p>
                      </div>
                    </div>
                    
                    {/* Hover Effect Arrow */}
                    <div className={`absolute -right-2 top-1/2 transform -translate-y-1/2 transition-all duration-300 ${
                      hoveredButton === button.id ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
                    }`}>
                      <div className="w-0 h-0 border-l-8 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
                    </div>
                  </div>
                  
                  {/* Scanning Line Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 transition-all duration-700 ${
                    hoveredButton === button.id ? 'translate-x-full' : '-translate-x-full'
                  }`}></div>
                </div>
              );
            })}
          </div>

          {/* Center - Robot Display */}
          <div className="col-span-6 flex flex-col items-center space-y-8">
            {/* AI Status Panel */}
            <div className="w-full bg-black/30 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-cyan-400 font-medium">NEURAL SYSTEM: ACTIVE</span>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-2 bg-cyan-500/20 border border-cyan-500/30 rounded-lg hover:bg-cyan-500/30 transition-all duration-300"
                  >
                    {isPlaying ? <Pause className="w-4 h-4 text-cyan-400" /> : <Play className="w-4 h-4 text-cyan-400" />}
                  </button>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-white/70">Processing Power</span>
                  <span className="text-cyan-400">98.7%</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2 rounded-full w-[98.7%] animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Main Robot Display */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-3xl blur-xl animate-pulse"></div>
              
              <div className="relative bg-black/40 backdrop-blur-xl rounded-3xl p-8 border border-cyan-500/30 overflow-hidden">
                {/* Robot Container with Transform */}
                <div 
                  className="relative h-96 w-80 mx-auto overflow-hidden rounded-2xl transition-all duration-700 ease-out"
                  style={{ transform: getRobotTransform() }}
                >
                  <img
                    src={currentRobot.image}
                    alt={currentRobot.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Robot Eyes/Face Tracking */}
                  <div 
                    className="absolute w-4 h-4 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50 transition-all duration-500 ease-out animate-pulse"
                    style={getRobotEyePosition()}
                  ></div>
                  <div 
                    className="absolute w-4 h-4 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50 transition-all duration-500 ease-out animate-pulse"
                    style={{ 
                      left: `calc(${getRobotEyePosition().left} + 40px)`, 
                      top: getRobotEyePosition().top 
                    }}
                  ></div>
                  
                  {/* Scanning Effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent animate-pulse"></div>
                  
                  {/* HUD Overlay */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between">
                    <div className="bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-cyan-400 text-sm font-mono">
                      UNIT-{currentRobot.id.toString().padStart(3, '0')}
                    </div>
                    <div className="bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-green-400 text-sm font-mono">
                      {hoveredButton ? 'TRACKING' : 'STANDBY'}
                    </div>
                  </div>
                  
                  {/* Bottom Info */}
                  <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-sm rounded-xl p-4">
                    <div className="text-white font-bold text-lg">{currentRobot.title}</div>
                    <div className="text-cyan-400 text-sm">{currentRobot.subtitle}</div>
                  </div>
                </div>

                {/* Navigation Controls */}
                <div className="flex items-center justify-center mt-6 space-x-4">
                  {robotSlides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-600 scale-125'
                          : 'bg-white/30 hover:bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Enhanced Search Interface */}
            <div className="w-full bg-black/40 backdrop-blur-xl rounded-3xl p-6 border border-cyan-500/30">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="relative group">
                  <MapPin className="absolute left-4 top-4 w-5 h-5 text-cyan-400 z-10" />
                  <input
                    type="text"
                    placeholder="Destination coordinates..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-white/10 border border-cyan-500/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300"
                  />
                </div>
                
                <div className="relative group">
                  <Calendar className="absolute left-4 top-4 w-5 h-5 text-cyan-400 z-10" />
                  <input
                    type="date"
                    className="w-full pl-12 pr-4 py-3 bg-white/10 border border-cyan-500/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300"
                  />
                </div>
              </div>
              
              <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-3 transform hover:scale-105 shadow-lg shadow-cyan-500/25 group">
                <Search className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span className="font-semibold">INITIATE SCAN</span>
                <Sparkles className="w-4 h-4 animate-pulse" />
              </button>
            </div>
          </div>

          {/* Right Side Buttons - Pricing */}
          <div className="col-span-3 space-y-6">
            {rightButtons.map((button) => {
              const Icon = button.icon;
              return (
                <div
                  key={button.id}
                  onMouseEnter={() => setHoveredButton(button.id)}
                  onMouseLeave={() => setHoveredButton(null)}
                  className={`group relative cursor-pointer transform transition-all duration-500 ${
                    hoveredButton === button.id ? 'scale-110 -translate-x-4' : 'hover:scale-105'
                  }`}
                >
                  <div className={`bg-gradient-to-r ${button.color} p-6 rounded-2xl border border-white/20 backdrop-blur-xl shadow-2xl ${
                    hoveredButton === button.id ? 'shadow-purple-500/50' : ''
                  }`}>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{button.label}</h3>
                        <p className="text-white/80 text-sm">{button.description}</p>
                        <p className="text-white font-bold text-lg">{button.price}</p>
                      </div>
                    </div>
                    
                    {/* Hover Effect Arrow */}
                    <div className={`absolute -left-2 top-1/2 transform -translate-y-1/2 transition-all duration-300 ${
                      hoveredButton === button.id ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                    }`}>
                      <div className="w-0 h-0 border-r-8 border-r-white border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
                    </div>
                  </div>
                  
                  {/* Scanning Line Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-l from-transparent via-white/20 to-transparent transform skew-x-12 transition-all duration-700 ${
                    hoveredButton === button.id ? '-translate-x-full' : 'translate-x-full'
                  }`}></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Advanced Particle System */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${2 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;