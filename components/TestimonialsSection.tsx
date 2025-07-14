import React from 'react';
import { Star, Quote, User, Zap } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'Digital Nomad',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'TravelBot\'s AI recommendations were spot-on! It found hidden gems in Tokyo that I never would have discovered on my own. The holographic guides made the experience unforgettable.',
      location: 'Tokyo, Japan'
    },
    {
      id: 2,
      name: 'Marcus Rodriguez',
      role: 'Adventure Photographer',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'The AI-powered weather predictions and optimal photography timing suggestions helped me capture the perfect northern lights shots in Iceland. Revolutionary technology!',
      location: 'Reykjavik, Iceland'
    },
    {
      id: 3,
      name: 'Elena Volkov',
      role: 'Food Blogger',
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'The restaurant recommendations were incredible! The AI understood my dietary preferences and cultural interests perfectly. Every meal was a culinary adventure.',
      location: 'Barcelona, Spain'
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'Tech Executive',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'The seamless integration of AR experiences and real-time translations made navigating foreign cities effortless. This is the future of travel technology.',
      location: 'Seoul, South Korea'
    },
    {
      id: 5,
      name: 'Isabella Santos',
      role: 'Travel Influencer',
      avatar: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'TravelBot\'s AI created the perfect itinerary that balanced my love for history and adventure. The virtual reality previews helped me choose the best experiences.',
      location: 'Rome, Italy'
    },
    {
      id: 6,
      name: 'Ahmed Hassan',
      role: 'Cultural Researcher',
      avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'The cultural insights and historical context provided by the AI enhanced my understanding of each destination. It\'s like having a personal cultural expert.',
      location: 'Cairo, Egypt'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
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
            Real experiences from travelers who've used our AI-powered platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-xl rounded-3xl p-8 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Quote className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-white/90 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* User Info */}
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-cyan-500/50"
                  />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Zap className="w-2 h-2 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-cyan-300 text-sm">{testimonial.role}</p>
                  <p className="text-white/60 text-xs">{testimonial.location}</p>
                </div>
              </div>

              {/* Holographic border effect */}
              <div className="absolute inset-0 border border-transparent group-hover:border-cyan-500/30 rounded-3xl transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">98%</div>
            <div className="text-cyan-400">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">50K+</div>
            <div className="text-cyan-400">Happy Travelers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">195</div>
            <div className="text-cyan-400">Countries Covered</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-cyan-400">AI Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;