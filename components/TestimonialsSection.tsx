'use client';

import React from 'react';
import { Star, Quote, User, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const TestimonialsSection = () => {
  /* ────────── Data ────────── */
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'Digital Nomad',
      avatar:
        'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: `TravelBot's AI recommendations were spot‑on! It found hidden gems in Tokyo that I never would have discovered on my own. The holographic guides made the experience unforgettable.`,
      location: 'Tokyo, Japan',
    },
    {
      id: 2,
      name: 'Marcus Rodriguez',
      role: 'Adventure Photographer',
      avatar:
        'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'The AI‑powered weather predictions and optimal photography timing suggestions helped me capture the perfect northern lights shots in Iceland. Revolutionary technology!',
      location: 'Reykjavik, Iceland',
    },
    {
      id: 3,
      name: 'Elena Volkov',
      role: 'Food Blogger',
      avatar:
        'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'The restaurant recommendations were incredible! The AI understood my dietary preferences and cultural interests perfectly. Every meal was a culinary adventure.',
      location: 'Barcelona, Spain',
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'Tech Executive',
      avatar:
        'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'The seamless integration of AR experiences and real‑time translations made navigating foreign cities effortless. This is the future of travel technology.',
      location: 'Seoul, South Korea',
    },
    {
      id: 5,
      name: 'Isabella Santos',
      role: 'Travel Influencer',
      avatar:
        'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: "TravelBot's AI created the perfect itinerary that balanced my love for history and adventure. The virtual‑reality previews helped me choose the best experiences.",
      location: 'Rome, Italy',
    },
    {
      id: 6,
      name: 'Ahmed Hassan',
      role: 'Cultural Researcher',
      avatar:
        'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: "The cultural insights and historical context provided by the AI enhanced my understanding of each destination. It's like having a personal cultural expert.",
      location: 'Cairo, Egypt',
    },
  ];

  /* ────────── Animation helpers ────────── */
  const directions = ['x', '-x', 'y', '-y'] as const;
  type Direction = typeof directions[number];

  const initialVariants: Record<
    Direction,
    { x?: number; y?: number; opacity: number }
  > = {
    x: { x: 100, opacity: 0 },
    '-x': { x: -100, opacity: 0 },
    y: { y: 100, opacity: 0 },
    '-y': { y: -100, opacity: 0 },
  };

  /* ────────── JSX ────────── */
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border border-cyan-500/30 rounded-full px-6 py-2 mb-6">
            <User className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 font-medium">Traveler Experiences</span>
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">
            What{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Travelers Say
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Real experiences from travelers who've used our AI‑powered platform
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => {
            const direction: Direction = directions[index % directions.length];
            return (
              <motion.div
                key={t.id}
                initial={initialVariants[direction]}
                whileInView={{ x: 0, y: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                  ease: 'easeOut',
                }}
                className="group bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-xl rounded-3xl p-8 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 relative"
              >
                {/* Quote icon */}
                <div className="mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Quote className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Stars */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-white/90 mb-6 leading-relaxed italic">"{t.text}"</p>

                {/* User info */}
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-cyan-500/50"
                    />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                      <Zap className="w-2 h-2 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{t.name}</h4>
                    <p className="text-cyan-300 text-sm">{t.role}</p>
                    <p className="text-white/60 text-xs">{t.location}</p>
                  </div>
                </div>

                {/* Hover border */}
                <div className="absolute inset-0 border border-transparent group-hover:border-cyan-500/30 rounded-3xl transition-all duration-500 pointer-events-none" />
              </motion.div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { value: '98%', label: 'Satisfaction Rate' },
            { value: '50K+', label: 'Happy Travelers' },
            { value: '195', label: 'Countries Covered' },
            { value: '24/7', label: 'AI Support' },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-cyan-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
