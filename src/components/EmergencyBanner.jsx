import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, X } from 'lucide-react';

const EmergencyBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    let timeoutId;

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setHasScrolled(true);
        // Reappear after 30 seconds of scrolling if dismissed
        if (!isVisible) {
          timeoutId = setTimeout(() => {
            setIsVisible(true);
          }, 30000);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isVisible]);

  const handleDismiss = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && hasScrolled && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-primary to-accent text-white shadow-2xl"
        >
          <div className="container-custom">
            <div className="flex items-center justify-between py-4">
              <div className="flex items-center space-x-4">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="bg-white/20 p-3 rounded-full"
                >
                  <Phone className="w-6 h-6 md:w-7 md:h-7" />
                </motion.div>
                <div>
                  <p className="text-sm md:text-base font-semibold">FIRE EMERGENCY?</p>
                  <a
                    href="tel:+919313624114"
                    className="text-lg md:text-2xl font-bold hover:text-white/90 transition-colors"
                  >
                    CALL NOW: +91-9313624114
                  </a>
                </div>
              </div>

              <button
                onClick={handleDismiss}
                className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-colors"
                aria-label="Dismiss emergency banner"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Animated Border */}
          <motion.div
            className="h-1 bg-white"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5 }}
            style={{ transformOrigin: 'left' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EmergencyBanner;
