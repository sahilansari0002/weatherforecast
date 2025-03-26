import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from './ui/button';

export function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h2 
        className="text-4xl font-bold text-white text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Contact Us
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="backdrop-blur-xl bg-white/10 rounded-2xl p-8 border border-white/20"
        >
          <h3 className="text-2xl font-semibold text-white mb-6">Get in Touch</h3>
          
          <div className="space-y-6">
            <div className="flex items-center text-white">
              <Mail className="w-6 h-6 mr-4" />
              <span>Sahilali57254@gmail.com</span>
            </div>
            <div className="flex items-center text-white">
              <Phone className="w-6 h-6 mr-4" />
              <span>+91 8956741978</span>
            </div>
            <div className="flex items-center text-white">
              <MapPin className="w-6 h-6 mr-4" />
              <span>Smt. Maherbanu College, Akola.</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="backdrop-blur-xl bg-white/10 rounded-2xl p-8 border border-white/20"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-white mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-white mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                placeholder="Your email"
              />
            </div>
            <div>
              <label className="block text-white mb-2">Message</label>
              <textarea
                className="w-full px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 h-32"
                placeholder="Your message"
              />
            </div>
            <Button 
              type="submit"
              className="w-full bg-white/20 hover:bg-white/30 text-white"
            >
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}