'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const hotelData = [
  {
    id: 1,
    title: "Luxury Palace",
    subtitle: "5-Star Hotel in Paris",
    description:
      "Enjoy your stay in the heart of Paris with stunning Eiffel Tower views, spa facilities, and gourmet dining.",
    technologies: ["Free WiFi", "Spa", "City View", "Breakfast Included"],
    image: "/assests/r1.jpg",
  },
  {
    id: 2,
    title: "Escape Resort",
    subtitle: "Nature Stay in Switzerland",
    description:
      "A peaceful retreat surrounded by snowy mountains. Perfect for honeymoon and nature lovers.",
    technologies: ["Hot Tub", "Mountain View", "Skiing", "Private Balcony"],
    image: "/assests/r2.jpg",
  },
  {
    id: 3,
    title: "Beachside Bliss",
    subtitle: "Maldives Overwater Villa",
    description:
      "Crystal clear waters, private beach access, and breathtaking sunsets await you.",
    technologies: ["Private Pool", "Ocean View", "Snorkeling", "Luxury Spa"],
    image: "/assests/r3.jpg",
  },
];

const ServiceNew = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    const cards = cardsRef.current;

    if (!section || !container || !cards.length) return;

    const scrollLength = cards.length * 100;

    gsap.to(container, {
      x: `-${scrollLength - 100}vw`,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: `+=${scrollLength * 10}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { rotationY: 30, opacity: 0.7, scale: 0.9 },
        {
          rotationY: 0,
          opacity: 1,
          scale: 1,
          scrollTrigger: {
            trigger: section,
            start: `${index * 20}% center`,
            end: `${(index + 1) * 20}% center`,
            scrub: 1,
          },
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden bg-black">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-purple-900/20 to-gray-900" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-black bg-[length:100px_100px]" />
      </div>

      {/* Header */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[42px] font-bold text-white mb-4">
            Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Hotels
            </span>
          </h2>
          <p className="text-white/60 text-lg">Scroll horizontally to explore hotels</p>
        </motion.div>
      </div>

      {/* Scroll Container */}
      <div className="absolute top-[40%] bottom-[80px] h-[40%] inset-0 flex items-center">
        <div ref={containerRef} className="flex gap-10 px-10 w-fit">
          {hotelData.map((hotel, index) => (
            <div
              key={hotel.id}
              ref={(el) => el && (cardsRef.current[index] = el)}
              className="w-[100vw] flex justify-center"
            >
              <div className=" w-full h-[350px] mb-[50px] mx-auto">
                <div className="bg-white/5 backdrop-blur-xl  rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
                  <div className="flex justify-between gap-8 items-center">
                    {/* Text Content */}
                    <div className="space-y-6">
                      <p className="text-purple-400 text-sm uppercase tracking-wider font-medium">
                        {hotel.subtitle}
                      </p>
                      <h3 className="text-[38px] font-bold text-white leading-tight">
                        {hotel.title}
                      </h3>
                      <p className="text-white/70 text-lg leading-relaxed">
                        {hotel.description}
                      </p>

                      <div className="flex flex-wrap gap-2 pt-4">
                        {hotel.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <button className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                        Book Now
                      </button>
                    </div>

                    {/* Image */}
                    <div className="relative">
                      <div className="aspect-[4/3] h-[300px] rounded-2xl overflow-hidden bg-gradient-to-br from-purple-500/20 to-cyan-500/20 backdrop-blur-sm">
                        <img
                          src={hotel.image}
                          alt={hotel.title}
                          className="w-full h-[300px] object-cover opacity-80 mix-blend-overlay"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      </div>
                      <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceNew;
