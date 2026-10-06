import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

// Stable particle data – defined outside component so it doesn't re-generate on re-render
const PARTICLES = [
  { id: 1, cx: '12%', cy: '18%', r: 1.2, dur: 18, delay: 0 },
  { id: 2, cx: '78%', cy: '8%',  r: 1,   dur: 22, delay: 2 },
  { id: 3, cx: '55%', cy: '72%', r: 1.5, dur: 20, delay: 4 },
  { id: 4, cx: '90%', cy: '55%', r: 1,   dur: 25, delay: 1 },
  { id: 5, cx: '35%', cy: '90%', r: 1.3, dur: 17, delay: 3 },
  { id: 6, cx: '8%',  cy: '62%', r: 0.9, dur: 23, delay: 5 },
  { id: 7, cx: '65%', cy: '35%', r: 1.1, dur: 19, delay: 6 },
  { id: 8, cx: '22%', cy: '45%', r: 0.8, dur: 26, delay: 2.5 },
];

export default function AmbientBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth physical spring settling
  const springConfig = { damping: 35, stiffness: 50 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Very subtle 2-5px parallax ranges
  const orb1X = useTransform(smoothX, [-0.5, 0.5], [-5, 5]);
  const orb1Y = useTransform(smoothY, [-0.5, 0.5], [-5, 5]);

  const orb2X = useTransform(smoothX, [-0.5, 0.5], [4, -4]);
  const orb2Y = useTransform(smoothY, [-0.5, 0.5], [4, -4]);

  const orb3X = useTransform(smoothX, [-0.5, 0.5], [-3, 3]);
  const orb3Y = useTransform(smoothY, [-0.5, 0.5], [3, -3]);

  useEffect(() => {
    // Only enable mouse parallax on non-touch devices and if motion is preferred
    const mediaTouch = window.matchMedia('(pointer: coarse)');
    const mediaReduced = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (mediaTouch.matches || mediaReduced.matches) return;

    const handleMouseMove = (e) => {
      const normalizedX = e.clientX / window.innerWidth - 0.5;
      const normalizedY = e.clientY / window.innerHeight - 0.5;
      mouseX.set(normalizedX);
      mouseY.set(normalizedY);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Orb 1: Soft deep blue/cyan glow - Left / Top-Center */}
      <motion.div
        style={{ x: orb1X, y: orb1Y }}
        className="absolute -top-[10%] left-[5%] w-[45vw] h-[45vw] max-w-[650px] max-h-[650px] rounded-full ambient-glow-left blur-3xl opacity-75 animate-orb-1"
      />

      {/* Orb 2: Soft navy/blue glow - Right / Center */}
      <motion.div
        style={{ x: orb2X, y: orb2Y }}
        className="absolute top-[20%] -right-[10%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] rounded-full ambient-glow-right blur-3xl opacity-80 animate-orb-2"
      />

      {/* Orb 3: Very faint purple radial light - Bottom Center */}
      <motion.div
        style={{ x: orb3X, y: orb3Y }}
        className="absolute -bottom-[15%] left-[25%] w-[55vw] h-[55vw] max-w-[750px] max-h-[750px] rounded-full ambient-glow-center blur-3xl opacity-60 animate-orb-3"
      />

      {/* Subtle floating particles */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {PARTICLES.map((p) => (
          <circle
            key={p.id}
            cx={p.cx}
            cy={p.cy}
            r={p.r}
            className="ambient-particle"
            style={{ animationDuration: `${p.dur}s`, animationDelay: `${p.delay}s` }}
          />
        ))}
      </svg>

      {/* Subtle micro-texture overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>
    </div>
  );
}
