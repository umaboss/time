// AboutSection.jsx
'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Plane, Compass, Camera } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef   = useRef<HTMLElement | null>(null);
  const titleRef     = useRef<HTMLHeadingElement | null>(null);
  const contentRef   = useRef<HTMLDivElement | null>(null);

  /* ───────────────────────── GSAP PIN + FADE IN ───────────────────────── */
  useEffect(() => {
    const section = sectionRef.current;
    const title   = titleRef.current;
    const content = contentRef.current;
    if (!section || !title || !content) return;

    // pin whole section
    ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: '+=100%',
      pin: true,
      pinSpacing: false,
    });

    // animate title
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

    // animate each feature card
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

  /* ───────────────────────── TRAVEL‑FOCUSED FEATURES ───────────────────────── */
  const features = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: 'Curated Destinations',
      description: 'Hand‑picked places reviewed by travel experts worldwide.',
    },
    {
      icon: <Plane className="w-8 h-8" />,
      title: 'Seamless Booking',
      description: 'Flights, hotels & experiences—confirmed in a single tap.',
    },
    {
      icon: <Compass className="w-8 h-8" />,
      title: 'Smart Itineraries',
      description: 'AI plans trips around your mood, budget and timeline.',
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: 'Live Memories',
      description: 'Capture & share moments with fellow travellers in real time.',
    },
  ];

  /* ───────────────────────── JSX ───────────────────────── */
  return (
    <section
      ref={sectionRef}
      id="about"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center relative overflow-hidden"
    >
      {/* floating radial highlights */}
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
        {/* LEFT: Copy & CTA */}
        <div>
          <h2
            ref={titleRef}
            className="text-4xl md:text-6xl font-bold mb-8 leading-tight"
          >
            <span className="block text-white">Turning Journeys into</span>
            <span className="block bg-gradient-to-r from-[#00ff88] to-[#ff0080] bg-clip-text text-transparent">
              Lifetime Memories
            </span>
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
            <p>
              Pack your bags—let’s map out moments you’ll talk about for years
              to come.
            </p>
          </div>

          <motion.div
            className="mt-12"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button className="px-8 py-4 bg-gradient-to-r from-[#00ff88] to-[#ff0080] text-black font-bold rounded-full text-lg shadow-lg hover:shadow-xl transition-all">
              Discover Our Story
            </button>
          </motion.div>
        </div>

        {/* RIGHT: Feature cards */}
        <div
          ref={contentRef}
          className="grid grid-cols-1 sm:grid-cols-2 gap-8"
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#00ff88]/50 transition-all"
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="text-[#00ff88] mb-4 group-hover:scale-110 transition-transform">
                {f.icon}
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
