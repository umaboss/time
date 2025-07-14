// PlacesSectionSticky.jsx
'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, MapPin, Eye } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function PlacesSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  /* ---------- PLACE DATA ---------- */
  const places = [
    {
      id: 1,
      title: 'Eiffel Tower',
      category: 'city',
      description:
        'Iconic Paris landmark offering 360‑degree city views, romantic vibes, and nightly light shows.',
      image:
        '/assests/p1.jpg',
      tags: ['Landmark', 'Photo Spot', 'Night View'],
    },
    {
      id: 2,
      title: 'Santorini Cliffs',
      category: 'nature',
      description:
        'White‑washed villages perched over the Aegean Sea, famous for sunsets and blue‑domed churches.',
      image:
        '/assests/p2.jpg',
      tags: ['Sunset', 'Sea View', 'Honeymoon'],
    },
    {
      id: 3,
      title: 'Great Wall of China',
      category: 'historic',
      description:
        'Ancient series of fortifications stretching thousands of miles across northern China.',
      image:
        '/assests/p3.jpg',
      tags: ['UNESCO', 'Hiking', 'Architecture'],
    },
    {
      id: 4,
      title: 'Banff National Park',
      category: 'nature',
      description:
        'Turquoise lakes, towering peaks, and abundant wildlife in the Canadian Rockies.',
      image:
        '/assests/p4.jpg',
      tags: ['Lakes', 'Wildlife', 'Camping'],
    },
    {
      id: 5,
      title: 'Colosseum',
      category: 'historic',
      description:
        'Ancient Roman amphitheater famed for gladiator battles and timeless architecture.',
      image:
        '/assests/p5.jpg',
      tags: ['Roman', 'UNESCO', 'Guided Tours'],
    },
  ];

  /* ---------- GSAP STICKY ZOOM ---------- */
  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.sticky-card') as HTMLElement[];
      cards.forEach(card => {
        gsap.fromTo(
          card,
          { scale: 0.95 },
          {
            scale: 1,
            scrollTrigger: {
              trigger: card,
              start: 'top center',
              end: 'bottom center',
              scrub: true,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /* ---------- JSX ---------- */
  return (
    <section
      ref={sectionRef}
      id="places"
      className="relative w-screen bg-black text-white"
    >
      {/* Sticky Heading */}
      <div className="sticky top-10 z-50 flex justify-center pt-16 bg-black/80 backdrop-blur">
        <h2 className="text-3xl md:text-4xl font-bold">
          Popular{' '}
          <span className="bg-gradient-to-r from-[#00ff88] to-[#ff0080] bg-clip-text text-transparent">
            Places
          </span>
        </h2>
      </div>

      {/* Place Cards */}
      <div className="pt-10">
        {places.map(p => (
          <motion.div
            key={p.id}
            className="sticky-card relative w-full max-w-4xl mx-auto h-[80vh] my-[10vh] overflow-hidden rounded-xl shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative h-full w-full">
              <img
                src={p.image}
                alt={p.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-60"
              />
              <div className="absolute inset-0 bg-black/60" />

              <div className="relative z-10 flex flex-col justify-between h-full p-8">
                {/* Content */}
                <div>
                  <h3 className="text-5xl font-bold mb-4 drop-shadow-lg">
                    {p.title}
                  </h3>
                  <p className="max-w-xl text-lg text-white/80 leading-relaxed mb-6">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {p.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-4 py-2 text-sm bg-white/10 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-4 mt-8">
                  <button className="p-4 bg-white/10 rounded-full hover:bg-white/20">
                    <Eye size={20} />
                  </button>
                  <button className="p-4 bg-white/10 rounded-full hover:bg-white/20">
                    <MapPin size={20} />
                  </button>
                  <button className="p-4 bg-white/10 rounded-full hover:bg-white/20">
                    <ExternalLink size={20} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
