'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function StickyScrollCards() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const cards = [
    {
      id: 1,
      title: "Places",
      subtitle: "Popular Places",
      description: "Discover the best places to visit, eat, and explore in the city. From iconic landmarks to hidden gems, find out what’s trending and loved by locals and travelers alike.",
      image: "/assests/pace.jpg",
      gradient: "from-[#00ff88] to-[#00cc6a]",
      bgColor: "#001a0d",
    },
    {
      id: 2,
      title: "Popular resturant",
      subtitle: "Resturant",
      description: "Find the best places to eat around you! From local street food to top-rated fine dining, explore restaurants that satisfy every taste and mood.",
      image: "/assests/resturn.jpg",
      gradient: "from-[#ff0080] to-[#cc0066]",
      bgColor: "#1a0010",
    },
    {
      id: 3,
      title: "Travel",
      subtitle: "Travel",
      description: "Plan your perfect trip with top travel spots, scenic destinations, and must-see attractions. Discover new places and create unforgettable memories",
      image: "/assests/travel.jpg",
      gradient: "from-[#ff8000] to-[#cc6600]",
      bgColor: "#1a1000",
    },
    {
      id: 4,
      title: "Data Analytics",
      subtitle: "Business Intelligence",
      description: "Transforming raw data into actionable insights that drive business growth and informed decision-making.",
      image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-[#8000ff] to-[#6600cc]",
      bgColor: "#100a1a",
    },
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Set up the sticky scroll animation
    const totalCards = cards.length;
    const cardHeight = window.innerHeight;
    
    // Pin the container
    ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: `+=${cardHeight * totalCards}`,
      pin: true,
      pinSpacing: true,
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        const activeIndex = Math.floor(progress * totalCards);
        
        cardsRef.current.forEach((card, index) => {
          if (!card) return;
          
          const cardProgress = (progress * totalCards) - index;
          
          if (cardProgress >= 0 && cardProgress <= 1) {
            // Card is active
            gsap.set(card, {
              opacity: 1,
              y: 0,
              rotationX: 0,
              scale: 1,
              zIndex: 10,
            });
            
            // Change background color
            gsap.to(document.body, {
              backgroundColor: cards[index].bgColor,
              duration: 0.5,
            });
          } else if (cardProgress < 0) {
            // Card hasn't appeared yet
            gsap.set(card, {
              opacity: 0,
              y: 100,
              rotationX: 15,
              scale: 0.9,
              zIndex: 1,
            });
          } else {
            // Card has passed
            gsap.set(card, {
              opacity: 0,
              y: -100,
              rotationX: -15,
              scale: 0.9,
              zIndex: 1,
            });
          }
        });
      },
    });

    // Individual card animations
    cardsRef.current.forEach((card, index) => {
      if (!card) return;
      
      gsap.set(card, {
        opacity: index === 0 ? 1 : 0,
        y: index === 0 ? 0 : 100,
        rotationX: index === 0 ? 0 : 15,
        scale: index === 0 ? 1 : 0.9,
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="relative">
      <div
        ref={containerRef}
        className="h-screen flex items-center justify-center relative overflow-hidden"
      >
        {/* Background particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Cards */}
        {cards.map((card, index) => (
          <div
            key={card.id}
            ref={(el) => {
              if (el) cardsRef.current[index] = el;
            }}
            className="absolute inset-0 flex items-center justify-center p-8"
          >
            <motion.div
              className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center sticky-card"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Content */}
              <div className="space-y-8">
                <div>
                  <motion.span
                    className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${card.gradient} text-black text-sm font-medium mb-4`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {card.subtitle}
                  </motion.span>
                  
                  <motion.h2
                    className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    {card.title}
                  </motion.h2>
                  
                  <motion.p
                    className="text-xl text-gray-300 leading-relaxed mb-8"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    {card.description}
                  </motion.p>
                </div>

                <motion.div
                  className="flex gap-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: `0 0 30px ${card.gradient.includes('00ff88') ? 'rgba(0, 255, 136, 0.5)' : 'rgba(255, 0, 128, 0.5)'}` }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-3 px-8 py-4 bg-gradient-to-r ${card.gradient} text-black font-bold rounded-full text-lg transition-all`}
                  >
                    Learn More
                    <ArrowRight size={20} />
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-3 px-8 py-4 border-2 border-white/20 text-white font-bold rounded-full text-lg hover:border-white/40 transition-all"
                  >
                    View Project
                    <ExternalLink size={20} />
                  </motion.button>
                </motion.div>
              </div>

              {/* Image */}
              <motion.div
                className="relative group"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${card.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
                  
                  {/* Floating elements */}
                  <div className="absolute inset-0">
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`absolute w-2 h-2 bg-gradient-to-r ${card.gradient} rounded-full opacity-0 group-hover:opacity-60`}
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                          y: [0, -30, 0],
                          opacity: [0, 0.6, 0],
                        }}
                        transition={{
                          duration: 2 + Math.random(),
                          repeat: Infinity,
                          delay: Math.random() * 2,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Card number */}
                <motion.div
                  className="absolute -top-4 -right-4 w-16 h-16 bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20"
                  whileHover={{ scale: 1.1, rotate: 180 }}
                >
                  <span className={`text-2xl font-bold bg-gradient-to-r ${card.gradient} bg-clip-text text-transparent`}>
                    {String(card.id).padStart(2, '0')}
                  </span>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        ))}

        {/* Progress indicator */}
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-3">
          {cards.map((_, index) => (
            <motion.div
              key={index}
              className="w-2 h-8 bg-white/20 rounded-full overflow-hidden"
              whileHover={{ scale: 1.2 }}
            >
              <motion.div
                className="w-full bg-gradient-to-t from-[#00ff88] to-[#ff0080] rounded-full"
                initial={{ height: '0%' }}
                style={{ height: index === 0 ? '100%' : '0%' }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}