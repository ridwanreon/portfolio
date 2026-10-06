import React from 'react';
import { motion } from 'framer-motion';

export default function FooterScroll() {
  const handleScrollDown = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth',
      });
    } else {
      window.scrollBy({
        top: window.innerHeight * 0.75,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer
      className="relative z-20 w-full pb-5 pt-1 px-6 md:px-16 flex items-center justify-start text-xs text-slate-500 dark:text-zinc-400"
      data-purpose="scroll-indicator-container"
    >
      <motion.div
        onClick={handleScrollDown}
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.96 }}
        className="flex items-center gap-2.5 group cursor-pointer pl-0 sm:pl-10 md:pl-14 select-none"
      >
        {/* Mouse scroll icon container */}
        <div className="w-4 h-7 rounded-full border border-slate-400/70 dark:border-zinc-500/70 flex justify-center pt-1 group-hover:border-slate-800 dark:group-hover:border-white transition-colors duration-200">
          <span className="w-1 h-1.5 bg-slate-600 dark:bg-zinc-300 rounded-full animate-mouse-dot group-hover:bg-slate-900 dark:group-hover:bg-white transition-colors duration-200"></span>
        </div>
        <span className="tracking-wider uppercase font-semibold text-[11px] text-slate-500 dark:text-zinc-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-200">
          Scroll Down ↓
        </span>
      </motion.div>
    </footer>
  );
}
