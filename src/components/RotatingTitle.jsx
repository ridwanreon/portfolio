import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const titles = [
  { text: 'I am a Software Developer', highlight: 'Software Developer' },
  { text: 'I am a Backend Developer', highlight: 'Backend Developer' },
  { text: 'I build FastAPI Applications', highlight: 'FastAPI Applications' },
  { text: 'I build REST APIs', highlight: 'REST APIs' },
  { text: 'I turn ideas into real-world applications', highlight: 'real-world applications' },
];

export default function RotatingTitle() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % titles.length);
    }, 2800); // Visible for ~2.8 seconds

    return () => clearInterval(interval);
  }, []);

  const currentItem = titles[currentIndex];
  const parts = currentItem.text.split(currentItem.highlight);

  return (
    <div
      className="relative h-9 sm:h-10 md:h-11 flex items-center overflow-hidden w-full select-none"
      aria-live="polite"
      aria-atomic="true"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={currentItem.text}
          initial={{ opacity: 0, y: 15, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -15, filter: 'blur(4px)' }}
          transition={{
            duration: 0.45,
            ease: [0.16, 1, 0.3, 1], // Apple-style smooth cubic bezier
          }}
          className="absolute inset-0 flex items-center"
        >
          <h2 className="text-lg sm:text-xl md:text-[23px] font-semibold text-slate-700 dark:text-zinc-300 tracking-tight leading-normal">
            {parts[0]}
            <span className="text-slate-900 dark:text-white font-bold underline decoration-blue-500/30 decoration-2 underline-offset-4">
              {currentItem.highlight}
            </span>
            {parts[1] || ''}
          </h2>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
