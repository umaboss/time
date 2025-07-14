'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Monitor, Smartphone, Palette, Rocket, Database, Shield } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const services = [
    {
      icon: <Monitor className="w-12 h-12" />,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern frameworks and cutting-edge technologies for optimal performance.',
      gradient: 'from-[#00ff88] to-[#00cc6a]',
      bgColor: '#001a0d',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: 'Mobile Experience',
      description: 'Responsive designs that work flawlessly across all devices and screen sizes with native-like performance.',
      gradient: 'from-[#ff0080] to-[#cc0066]',
      bgColor: '#1a0010',
      image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: 'UI/UX Design',
      description: 'Intuitive interfaces designed with user experience at the forefront, creating memorable digital interactions.',
      gradient: 'from-[#0080ff] to-[#0066cc]',
      bgColor: '#001a1a',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: <Rocket className="w-12 h-12" />,
      title: 'Performance',
      description: 'Lightning-fast loading times optimized for peak performance and seamless user experiences.',
      gradient: 'from-[#ff8000] to-[#cc6600]',
      bgColor: '#1a1000',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: 'Backend Systems',
      description: 'Robust server-side solutions and database architectures that scale with your business needs.',
      gradient: 'from-[#8000ff] to-[#6600cc]',
      bgColor: '#100a1a',
      image: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Security',
      description: 'Enterprise-grade security measures to protect your digital assets and user data with confidence.',
      gradient: 'from-[#ff0040] to-[#cc0033]',
      bgColor: '#1a0008',
      image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;

    if (!section || !container) return;

    // Pin the section during scroll
    ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: `+=${window.innerHeight * services.length}`,
      pin: true,
      pinSpacing: true,
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        const activeIndex = Math.floor(progress * services.length);
        
        cardsRef.current.forEach((card, index) => {
          if (!card) return;
          
          const cardProgress = (progress * services.length) - index;
          
          if (cardProgress >= 0 && cardProgress <= 1) {
            // Card is active
            gsap.set(card, {
              opacity: 1,
              y: 0,
              rotationY: 0,
              scale: 1,
              zIndex: 10,
            });
            
            // Change background color
            gsap.to(document.body, {
              backgroundColor: services[index].bgColor,
              duration: 0.5,
            });
          } else if (cardProgress < 0) {
            // Card hasn't appeared yet
            gsap.set(card, {
              opacity: 0,
              y: 100,
              rotationY: -45,
              scale: 0.8,
              zIndex: 1,
            });
          } else {
            // Card has passed
            gsap.set(card, {
              opacity: 0,
              y: -100,
              rotationY: 45,
              scale: 0.8,
              zIndex: 1,
            });
          }
        });
      },
    });

    // Initial setup
    cardsRef.current.forEach((card, index) => {
      if (!card) return;
      
      gsap.set(card, {
        opacity: index === 0 ? 1 : 0,
        y: index === 0 ? 0 : 100,
        rotationY: index === 0 ? 0 : -45,
        scale: index === 0 ? 1 : 0.8,
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00ff88]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#ff0080]/10 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 text-center z-20">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          <span className="block text-white">Our</span>
          <span className="block bg-gradient-to-r from-[#00ff88] via-[#ff0080] to-[#0080ff] bg-clip-text text-transparent">
            Services
          </span>
        </motion.h2>
      </div>

      <div
        ref={containerRef}
        className="max-w-6xl mx-auto px-6 relative z-10"
      >
        {services.map((service, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) cardsRef.current[index] = el;
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <motion.div
              className="grid lg:grid-cols-2 gap-12 items-center w-full"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {/* Content */}
              <div className="space-y-8">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.gradient} mb-6`}>
                  {service.icon}
                </div>
                
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {service.title}
                </h3>
                
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  {service.description}
                </p>

                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: `0 0 30px ${service.gradient.includes('00ff88') ? 'rgba(0, 255, 136, 0.5)' : 'rgba(255, 0, 128, 0.5)'}` }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-8 py-4 bg-gradient-to-r ${service.gradient} text-black font-bold rounded-full text-lg transition-all`}
                >
                  Learn More
                </motion.button>
              </div>

              {/* Image */}
              <motion.div
                className="relative group"
                whileHover={{ rotateY: 10, rotateX: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
                  
                  {/* Floating particles */}
                  <div className="absolute inset-0">
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`absolute w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full opacity-0 group-hover:opacity-60`}
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

                {/* Service number */}
                <motion.div
                  className="absolute -top-4 -right-4 w-16 h-16 bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20"
                  whileHover={{ scale: 1.2, rotate: 180 }}
                >
                  <span className={`text-2xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        ))}

        {/* Progress indicator */}
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-3">
          {services.map((_, index) => (
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