// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const CircleButton = () => {
  const [hovered, setHovered] = useState(false);

  const scrollToContact = () => {
    const contact = document.getElementById('contact');
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50 cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={scrollToContact}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 }}
    >
      {/* Outer rotating shell */}
      <motion.div
        className="relative w-24 h-24 rounded-full border-[3px] border-yellow-400 bg-gradient-to-br from-gray-800 to-black shadow-lg"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
        style={{
          boxShadow: 'inset 0 0 6px #facc15, 0 0 20px rgba(255,255,255,0.1)',
        }}
      >
        {/* Inner dot BELOW everything */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="w-4 h-4 bg-yellow-400 rounded-full" />
        </div>

        {/* Rohan / Down icon ABOVE everything */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <AnimatePresence mode="wait">
            {hovered ? (
              <motion.div
                key="down"
                className="text-yellow-400 text-2xl"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
              >
                <FiChevronDown />
              </motion.div>
            ) : (
              <motion.div
                key="rohan"
                className="text-yellow-400 font-bold text-sm"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
              >
                Rohan
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CircleButton;
