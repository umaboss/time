'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const content = contentRef.current;
    if (!section || !title || !content) return;

    // Pin section
    ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: '+=100%',
      pin: true,
      pinSpacing: false,
    });

    // Title animation
    gsap.fromTo(
      title,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'top 20%',
          scrub: true,
        },
      }
    );

    // Animate feature cards
    if (content && content.children) {
      gsap.fromTo(
        Array.from(content.children),
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: content,
            start: 'top 80%',
            end: 'top 20%',
            scrub: true,
          },
        }
      );
    }

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  // Features with images instead of Lucide icons
  const features = [
    {
      icon: '/assests/location.png',
      title: 'Curated Destinations',
      description: 'Hand‑picked places reviewed by travel experts worldwide.',
    },
    {
      icon: '/assests/airplane.png',
      title: 'Seamless Booking',
      description: 'Flights, hotels & experiences—confirmed in a single tap.',
    },
    {
      icon: '/assests/compass.png',
      title: 'Smart Itineraries',
      description: 'AI plans trips around your mood, budget and timeline.',
    },
    {
      icon: '/assests/photo.png',
      title: 'Live Memories',
      description: 'Capture & share moments with fellow travellers in real time.',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center relative overflow-hidden"
    >
      {/* Floating radial gradients */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, rgba(0,255,136,0.3) 0%, transparent 50%),
                              radial-gradient(circle at 80% 20%, rgba(255,0,128,0.3) 0%, transparent 50%),
                              radial-gradient(circle at 40% 40%, rgba(0,128,255,0.3) 0%, transparent 50%)`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT: Text and CTA */}
        <div>
          <h2 ref={titleRef} className="mb-8 leading-tight">
            <strong className="block mb-[10px] text-[18px] text-white">Turning Journeys into</strong>
            <h2 className="block text-bold text-[42px] bg-gradient-to-r from-[#00ff88] to-[#ff0080] bg-clip-text">
              Lifetime Memories
            </h2>
          </h2>

          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              Welcome to our travel hub where curious explorers meet cutting‑edge
              tech. We make wandering the world effortless, inspiring and secure.
            </p>
            <p>
              Whether you’re chasing northern lights or beach sunsets, our
              platform blends AI smarts with local insights so every trip feels
              tailor‑made.
            </p>
          </div>

          <motion.div
            className="mt-12"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button className="px-8 py-4 bg-gradient-to-r from-[#00cfff] to-[#0044ff] text-black font-bold rounded-full text-lg shadow-lg hover:shadow-xl transition-all">
              Discover Our Story
            </button>
          </motion.div>
        </div>

        {/* RIGHT: Feature cards with images */}
        <div ref={contentRef} className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#00ff88]/50 transition-all"
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="mb-4 group-hover:scale-110 transition-transform">
                <img
                  src={f.icon}
                  alt={f.title}
                  className="w-10 h-10"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
              <p className="text-gray-400 leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
