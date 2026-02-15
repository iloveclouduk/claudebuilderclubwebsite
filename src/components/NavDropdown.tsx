'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface DropdownItem {
  label: string;
  href: string;
  description: string;
}

interface NavDropdownProps {
  label: string;
  href: string;
  items: DropdownItem[];
}

export default function NavDropdown({ label, href, items }: NavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150); // Small delay to prevent accidental closures
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setIsOpen(!isOpen);
    } else if (event.key === 'Escape') {
      setIsOpen(false);
    }
  };

  return (
    <div
      className="nav-item relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a
        href={href}
        className="button button-compact flex items-center bg-transparent text-[#45474d] hover:text-black hover:bg-[#eff0f3] transition-all"
        style={{
          fontSize: '14px',
          fontWeight: 450,
          padding: '6px 16px',
          borderRadius: '999px'
        }}
        onKeyDown={handleKeyDown}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {label}
        <motion.span
          className="google-symbols ml-1"
          style={{ fontSize: '20px' }}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          keyboard_arrow_down
        </motion.span>
      </a>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden z-50"
            style={{
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
            }}
          >
            <div className="py-2">
              {items.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block px-4 py-3 hover:bg-gray-50 transition-colors group"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="font-medium text-[#121317] group-hover:text-black transition-colors">
                    {item.label}
                  </div>
                  <div className="text-sm text-[#45474d] mt-1">
                    {item.description}
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}