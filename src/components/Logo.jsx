import React from 'react';

export default function Logo() {
  return (
    <a
      href="#home"
      aria-label="Ridwan Reon Portfolio Home"
      className="flex items-center gap-2.5 group select-none cursor-pointer"
    >
      {/* Geometric RR Monogram Emblem */}
      <div className="relative w-9 h-9 rounded-xl flex items-center justify-center glass-badge border border-white/10 dark:border-white/15 group-hover:border-blue-500/40 transition-all duration-300 shadow-sm overflow-hidden group-hover:scale-105">
        {/* Subtle accent glow inside logo */}
        <div className="absolute inset-0 bg-blue-600/10 dark:bg-blue-500/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <svg
          className="w-5 h-5 text-slate-800 dark:text-white transition-colors duration-300"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* First R - Bold Geometric Structure */}
          <path
            d="M6 7H14C16.2091 7 18 8.79086 18 11C18 13.2091 16.2091 15 14 15H8V25H6V7Z"
            fill="currentColor"
            className="dark:fill-white fill-slate-900"
          />
          <path
            d="M12.5 15L17.5 25H14.5L10 15H12.5Z"
            fill="#3B82F6"
          />

          {/* Second R - Slightly Offset Futuristic Partner */}
          <path
            d="M17 11H23.5C25.433 11 27 12.567 27 14.5C27 16.433 25.433 18 23.5 18H19V25H17V11Z"
            fill="currentColor"
            className="dark:fill-slate-200 fill-slate-700 opacity-90"
          />
          <path
            d="M21.5 18L26.5 25H24L19.5 18H21.5Z"
            fill="#60A5FA"
          />
        </svg>
      </div>

      {/* Brand Text: Ridwan Reon */}
      <div className="flex flex-col text-left">
        <span className="text-sm font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex items-center gap-1.5">
          <span>Ridwan</span>
          <span className="text-blue-600 dark:text-blue-400 font-semibold">Reon</span>
        </span>
        <span className="text-[10px] tracking-widest uppercase font-medium text-slate-500 dark:text-zinc-400 -mt-0.5 hidden sm:inline-block">
          Portfolio
        </span>
      </div>
    </a>
  );
}
