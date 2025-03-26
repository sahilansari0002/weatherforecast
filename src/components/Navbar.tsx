import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onPageChange: (page: string) => void;
  currentPage: string;
}

export function Navbar({ onPageChange, currentPage }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'weather', label: 'Weather Forecast' },
    { id: 'team', label: 'Our Team' },
    { id: 'contact', label: 'Contact Us' },
  ];

  return (
    <nav className="relative z-50">
      <div className="backdrop-blur-xl bg-white/10 border-b border-white/20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <motion.h1 
              className="text-2xl font-bold text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Weather Forecast
            </motion.h1>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onPageChange(item.id)}
                  className={`text-white hover:text-blue-200 transition-colors ${
                    currentPage === item.id ? 'border-b-2 border-blue-300' : ''
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute w-full md:hidden"
          >
            <div className="backdrop-blur-xl bg-white/10 border-b border-white/20 py-4">
              <div className="container mx-auto px-4">
                <div className="flex flex-col space-y-4">
                  {menuItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        onPageChange(item.id);
                        setIsOpen(false);
                      }}
                      className={`text-white hover:text-blue-200 transition-colors text-left ${
                        currentPage === item.id ? 'text-blue-300' : ''
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}