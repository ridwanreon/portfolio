import React from 'react';
import { motion } from 'framer-motion';

export default function StatBadge({
  positionClasses,
  iconColorClasses,
  icon,
  value,
  label,
  floatDuration = 5.5,
  floatDistance = 6,
  floatDelay = 0,
}) {
  return (
    <motion.div
      animate={{
        y: [-floatDistance, floatDistance, -floatDistance],
      }}
      transition={{
        duration: floatDuration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: floatDelay,
      }}
      whileHover={{ scale: 1.04, y: 0 }}
      className={`absolute glass-badge rounded-xl px-3 sm:px-3.5 py-2 flex items-center gap-2.5 z-20 shadow-xl border border-slate-200/60 dark:border-white/10 hover:border-blue-500/30 dark:hover:border-white/30 transition-colors duration-200 select-none ${positionClasses}`}
    >
      <div className={`p-1.5 rounded-lg border ${iconColorClasses}`}>
        {icon}
      </div>
      <div className="leading-tight text-left">
        <div className="text-slate-900 dark:text-white font-bold text-sm tracking-wide flex items-center gap-1">
          {value}
        </div>
        <div className="text-[10px] text-slate-500 dark:text-zinc-400 font-medium leading-3">
          {label}
        </div>
      </div>
    </motion.div>
  );
}
