'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Send,
  Github,
  Twitter,
  Linkedin,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    const form = formRef.current;
    if (!form) return;

    gsap.fromTo(
      form,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: form,
          start: 'top 85%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.table(formData);
  };

  const contactInfo = [
    {
      icon: '/assests/email.png',
      label: 'Email',
      value: 'hello@studioparallax.com',
      href: 'mailto:hello@studioparallax.com',
    },
    {
      icon: '/assests/phone.png',
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: '/assests/location.png',
      label: 'Location',
      value: 'San Francisco, CA',
      href: '#',
    },
  ];

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative overflow-hidden bg-[#0f0f0f] py-24"
    >
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-1/3 top-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-[#00ff88]/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 h-96 w-96 translate-x-1/2 rounded-full bg-[#ff0080]/10 blur-3xl" />
        <div className="absolute left-1/2 top-3/4 h-64 w-64 -translate-x-1/2 rounded-full bg-[#0080ff]/10 blur-2xl" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-20 text-center">
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-white leading-tight"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex text-center justify-center items-center">
              <span className="">Get In</span>
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent ml-2">
                Touch
              </span>
            </div>
          </motion.h2>
          <p className="mt-4 max-w-xl mx-auto text-lg text-gray-400">
            Let’s build something amazing together. Drop us a message below!
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Contact Info + Social */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Let’s Connect</h3>
              <p className="text-gray-400 max-w-md">
                We're here to collaborate and innovate. Let’s talk and see how we can help you.
              </p>
            </div>

            {/* Contact Info Cards with Images */}
            <div className="space-y-4">
              {contactInfo.map(({ icon, label, value, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#00ff88]/60 transition-all"
                  whileHover={{ scale: 1.03, x: 8 }}
                >
                  <img src={icon} alt={label} className="w-8 h-8 object-contain" />
                  <div>
                    <p className="text-sm text-gray-400">{label}</p>
                    <p className="text-white font-medium">{value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Icons */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Follow Us</h4>
              <div className="flex gap-4">
                {socialLinks.map(({ icon: Icon, href, label }, i) => (
                  <motion.a
                    key={i}
                    href={href}
                    aria-label={label}
                    className="p-3 rounded-lg bg-white/5 border border-white/10 text-white hover:text-[#00ff88] hover:border-[#00ff88] transition-all"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 rounded-2xl bg-white/5 p-8 shadow-lg backdrop-blur-md ring-1 ring-white/10"
          >
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-lg bg-white/5 border border-white/20 text-white px-4 py-3 placeholder-gray-400 focus:outline-none focus:border-[#00ff88] focus:ring-2 focus:ring-[#00ff88]"
                placeholder="John Doe"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-lg bg-white/5 border border-white/20 text-white px-4 py-3 placeholder-gray-400 focus:outline-none focus:border-[#00ff88] focus:ring-2 focus:ring-[#00ff88]"
                placeholder="you@example.com"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                required
                className="w-full rounded-lg bg-white/5 border border-white/20 text-white px-4 py-3 placeholder-gray-400 focus:outline-none focus:border-[#00ff88] focus:ring-2 focus:ring-[#00ff88] resize-none"
                placeholder="Tell us about your idea..."
              />
            </div>

            {/* Submit */}
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 20px rgba(0, 255, 136, 0.5)',
              }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#00cfff] to-[#0044ff] py-3 text-black font-semibold text-lg rounded-lg transition-all"
            >
              Send Message <Send size={20} />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
