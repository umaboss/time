'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { Heart, Code, Zap } from 'lucide-react';

export default function Footer() {
  const footerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    // Animate footer elements
    if (footer && footer.children) {
      gsap.fromTo(Array.from(footer.children),
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: footer,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }, []);

  const footerLinks = [
    {
      title: 'Services',
      links: [
        { name: 'Resturant', href: '#' },
        { name: 'Pleses', href: '#' },
        { name: 'Traval', href: '#' },
        { name: 'Consulting', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#about' },
        { name: 'Our Team', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Contact', href: '#contact' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '#' },
        { name: 'Case Studies', href: '#' },
        { name: 'Documentation', href: '#' },
        { name: 'Support', href: '#' },
      ],
    },
  ];

  return (
    <footer
      ref={footerRef}
      className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 border-t border-white/10 overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00ff88]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#ff0080]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company info */}
          <div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-3xl font-bold bg-gradient-to-r from-[#00ff88] to-[#ff0080] bg-clip-text text-transparent mb-4"
            >
              Tim Digital
            </motion.div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Crafting the future of digital experiences through innovative design 
              and cutting-edge technology.
            </p>
          </div>

          {/* Footer links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-bold text-white mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5, color: '#00ff88' }}
                      className="text-gray-400 hover:text-[#00ff88] transition-colors"
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-500 text-sm">
              © 2025 Studio Parallax. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <motion.a
                href="#"
                whileHover={{ color: '#00ff88' }}
                className="hover:text-[#00ff88] transition-colors"
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ color: '#00ff88' }}
                className="hover:text-[#00ff88] transition-colors"
              >
                Terms of Service
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ color: '#00ff88' }}
                className="hover:text-[#00ff88] transition-colors"
              >
                Cookies
              </motion.a>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Zap className="w-4 h-4 text-yellow-500" />
              <span>Powered by Innovation</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}