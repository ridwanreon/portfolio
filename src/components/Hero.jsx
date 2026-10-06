import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import RotatingTitle from './RotatingTitle';
import StatBadge from './StatBadge';
import portfioimage from '../assets/WhatsApp Image 2026-10-06 at 6.43.06 PM.jpeg'
gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const salutationRef = useRef(null);
  const descRef = useRef(null);
  const ctaRef = useRef(null);
  const profileContainerRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = {
    damping: 32,
    stiffness: 55,
  };

  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const profileParallaxX = useTransform(
    smoothX,
    [-0.5, 0.5],
    [-4, 4]
  );

  const profileParallaxY = useTransform(
    smoothY,
    [-0.5, 0.5],
    [-4, 4]
  );

  const card1ParallaxX = useTransform(
    smoothX,
    [-0.5, 0.5],
    [6, -6]
  );

  const card1ParallaxY = useTransform(
    smoothY,
    [-0.5, 0.5],
    [5, -5]
  );

  const card2ParallaxX = useTransform(
    smoothX,
    [-0.5, 0.5],
    [-6, 6]
  );

  const card2ParallaxY = useTransform(
    smoothY,
    [-0.5, 0.5],
    [-5, 5]
  );

  const card3ParallaxX = useTransform(
    smoothX,
    [-0.5, 0.5],
    [5, -5]
  );

  const card3ParallaxY = useTransform(
    smoothY,
    [-0.5, 0.5],
    [-6, 6]
  );

  useEffect(() => {
    const mediaTouch = window.matchMedia('(pointer: coarse)');
    const mediaReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    );

    if (!mediaTouch.matches && !mediaReduced.matches) {
      const handleMouseMove = (e) => {
        const x = e.clientX / window.innerWidth - 0.5;
        const y = e.clientY / window.innerHeight - 0.5;

        mouseX.set(x);
        mouseY.set(y);
      };

      window.addEventListener('mousemove', handleMouseMove, {
        passive: true,
      });

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, [mouseX, mouseY]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const isReduced = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;

      if (!isReduced) {
        gsap.set(salutationRef.current, {
          opacity: 0,
          y: 16,
        });

        gsap.set('.name-word', {
          opacity: 0,
          y: 22,
          filter: 'blur(8px)',
        });

        gsap.set('.waving-hand-badge', {
          opacity: 0,
          scale: 0.5,
        });

        gsap.set(descRef.current, {
          opacity: 0,
          y: 14,
        });

        gsap.set(ctaRef.current, {
          opacity: 0,
          y: 14,
        });

        gsap.set(profileContainerRef.current, {
          opacity: 0,
          scale: 0.96,
        });

        gsap.set('.stat-badge-wrapper', {
          opacity: 0,
          scale: 0.8,
          y: 12,
        });

        const tl = gsap.timeline({
          defaults: {
            ease: 'power3.out',
          },
        });

        tl.to(salutationRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.15,
        })
          .to(
            '.name-word',
            {
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
              duration: 0.8,
              stagger: 0.12,
            },
            '-=0.35'
          )
          .to(
            '.waving-hand-badge',
            {
              opacity: 1,
              scale: 1,
              duration: 0.5,
              ease: 'back.out(1.7)',
            },
            '-=0.4'
          )
          .to(
            descRef.current,
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
            },
            '-=0.3'
          )
          .to(
            ctaRef.current,
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
            },
            '-=0.4'
          )
          .to(
            profileContainerRef.current,
            {
              opacity: 1,
              scale: 1,
              duration: 0.85,
              ease: 'power2.out',
            },
            '-=0.6'
          )
          .to(
            '.stat-badge-wrapper',
            {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.15,
              ease: 'back.out(1.4)',
            },
            '-=0.5'
          );

        const scrollTl = gsap.timeline();

        scrollTl
          .to(
            textRef.current,
            {
              y: -30,
              ease: 'none',
            },
            0
          )
          .to(
            profileContainerRef.current,
            {
              y: -20,
              ease: 'none',
            },
            0
          );

        ScrollTrigger.create({
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2,
          animation: scrollTl,
          onEnterBack: () => {
            gsap.set(profileContainerRef.current, {
              opacity: 1,
            });
          },
        });
      } else {
        gsap.set(
          [
            salutationRef.current,
            '.name-word',
            '.waving-hand-badge',
            descRef.current,
            ctaRef.current,
            profileContainerRef.current,
            '.stat-badge-wrapper',
          ],
          {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: 'none',
          }
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={heroRef}
      className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center py-2 sm:py-4"
    >
      <section
        ref={textRef}
        className="lg:col-span-7 flex flex-col items-start pl-0 sm:pl-10 md:pl-14"
        data-purpose="hero-typography"
      >
        <span
          ref={salutationRef}
          className="text-slate-500 dark:text-zinc-400 font-medium text-sm md:text-base mb-1 tracking-wide"
        >
          Hey, I'm
        </span>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center gap-3 py-1">
          <span className="flex items-center gap-2.5">
            <span className="name-word inline-block">
              Ridwan
            </span>

            <span className="name-word inline-block text-blue-600 dark:text-blue-400">
              Reon
            </span>
          </span>

          <span
            aria-label="Waving hand"
            className="waving-hand-badge inline-flex items-center justify-center select-none"
          >
            <span
              className="animate-wave-hi cursor-pointer text-3xl sm:text-4xl md:text-5xl"
              role="img"
            >
              👋
            </span>
          </span>
        </h1>

        <div className="w-full mt-1 mb-3">
          <RotatingTitle />
        </div>

        <div
          ref={descRef}
          className="space-y-1 text-slate-600 dark:text-zinc-300 text-xs sm:text-sm md:text-[15px] font-normal mb-6"
        >
          <p className="flex items-center gap-2">
            <span>🚀</span>

            <span>
              Turning ideas into{' '}
              <span className="font-semibold text-slate-900 dark:text-white">
                scalable applications &amp; clean code
              </span>{' '}
              💻
            </span>
          </p>

          <p className="flex items-center gap-2 text-slate-500 dark:text-zinc-400">
            <span className="text-slate-400 dark:text-zinc-600 font-light">
              |
            </span>

            <span>
              Available for projects and collaborations
            </span>

            <span>🌟</span>
          </p>
        </div>

        <div
          ref={ctaRef}
          className="pt-0.5"
        >
          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.025,
              y: -2,
            }}
            whileTap={{
              scale: 0.96,
            }}
            transition={{
              type: 'spring',
              stiffness: 450,
              damping: 25,
            }}
            className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 rounded-full glass-badge text-slate-900 dark:text-white font-medium text-xs sm:text-sm md:text-base border border-slate-200/80 dark:border-white/15 hover:border-blue-500/40 dark:hover:border-white/30 shadow-xl group cursor-pointer transition-colors duration-200"
          >
            <span>Say Hello</span>

            <svg
              className="w-4 h-4 text-slate-500 dark:text-zinc-300 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </motion.a>
        </div>
      </section>

      <section
        ref={profileContainerRef}
        className="lg:col-span-5 flex justify-center items-center relative py-4 sm:py-6"
        data-purpose="hero-visual-card"
        style={{
          willChange: 'transform',
        }}
      >
        <div className="absolute w-64 h-64 sm:w-72 sm:h-72 avatar-glow rounded-full -z-10 blur-xl opacity-90" />

        <motion.div
          style={{
            x: profileParallaxX,
            y: profileParallaxY,
          }}
          className="relative w-56 h-72 sm:w-64 sm:h-80 md:w-68 md:h-84 group select-none"
        >
          <motion.div
            animate={{
              y: [-3, 3, -3],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute inset-0"
          >
            <div className="absolute -inset-[3px] rounded-[46%_54%_48%_52%/42%_44%_56%_58%] overflow-hidden">
              <div className="absolute inset-[-100%] animate-spin-slow bg-[conic-gradient(from_0deg,transparent_0deg,transparent_70deg,rgba(37,99,235,0.12)_105deg,rgba(59,130,246,0.9)_145deg,rgba(34,211,238,0.95)_180deg,rgba(168,85,247,0.85)_220deg,rgba(59,130,246,0.12)_270deg,transparent_310deg,transparent_360deg)]" />
            </div>

            <div className="absolute -inset-[2px] rounded-[46%_54%_48%_52%/42%_44%_56%_58%] bg-gradient-to-br from-blue-500/70 via-cyan-400/25 to-purple-500/70 blur-[3px] opacity-60 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="absolute -inset-[7px] rounded-[46%_54%_48%_52%/42%_44%_56%_58%] border border-blue-400/10 dark:border-cyan-400/10 animate-pulse-slow pointer-events-none" />

            <div className="absolute -inset-[12px] rounded-[46%_54%_48%_52%/42%_44%_56%_58%] border border-blue-500/[0.05] dark:border-blue-400/[0.05] animate-pulse-slow-delayed pointer-events-none" />

            <div className="relative w-full h-full rounded-[46%_54%_48%_52%/42%_44%_56%_58%] overflow-hidden bg-slate-100/60 dark:bg-slate-900/60 shadow-[0_0_35px_rgba(37,99,235,0.16)] group-hover:shadow-[0_0_55px_rgba(37,99,235,0.3)] transition-shadow duration-700">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-200/80 dark:from-[#060A14] via-transparent to-transparent z-10 pointer-events-none" />

              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 dark:from-blue-900/30 via-transparent to-transparent z-[1] pointer-events-none" />

              <img
                alt="Portrait of Ridwan Reon - Software & Backend Developer"
                className="relative w-full h-full object-cover object-top brightness-95 contrast-105 z-0 transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
                src={portfioimage}
                loading="eager"
                decoding="async"
              />

              <div className="absolute inset-0 z-[11] pointer-events-none bg-[linear-gradient(120deg,transparent_35%,rgba(255,255,255,0.03)_45%,rgba(255,255,255,0.18)_50%,rgba(255,255,255,0.03)_55%,transparent_65%)] bg-[length:250%_100%] animate-border-shine" />

              <div className="absolute inset-0 rounded-[46%_54%_48%_52%/42%_44%_56%_58%] ring-1 ring-white/20 dark:ring-white/10 z-20 pointer-events-none" />
            </div>

            <div className="absolute top-[8%] left-[12%] w-1 h-1 rounded-full bg-cyan-300/60 shadow-[0_0_8px_rgba(34,211,238,0.7)] animate-particle-one pointer-events-none" />

            <div className="absolute top-[28%] right-[7%] w-1 h-1 rounded-full bg-blue-400/50 shadow-[0_0_10px_rgba(59,130,246,0.7)] animate-particle-two pointer-events-none" />

            <div className="absolute bottom-[18%] left-[6%] w-1 h-1 rounded-full bg-purple-400/50 shadow-[0_0_8px_rgba(168,85,247,0.7)] animate-particle-three pointer-events-none" />
          </motion.div>
        </motion.div>

        <motion.div
          style={{
            x: card1ParallaxX,
            y: card1ParallaxY,
          }}
          className="stat-badge-wrapper absolute -top-1 sm:top-2 right-2 sm:-right-2 z-20"
        >
          <StatBadge
            positionClasses="relative"
            iconColorClasses="text-amber-500 dark:text-amber-400 bg-amber-400/10 border-amber-400/20"
            icon={
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
            value="120"
            label="Problem Solving"
            floatDuration={5.2}
            floatDistance={6}
            floatDelay={0.2}
          />
        </motion.div>

        <motion.div
          style={{
            x: card2ParallaxX,
            y: card2ParallaxY,
          }}
          className="stat-badge-wrapper absolute top-1/2 -left-3 sm:-left-8 -translate-y-1/2 z-20"
        >
          <StatBadge
            positionClasses="relative"
            iconColorClasses="text-cyan-500 dark:text-cyan-400 bg-cyan-400/10 border-cyan-400/20"
            icon={
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <rect
                  height="14"
                  rx="2"
                  ry="2"
                  width="20"
                  x="2"
                  y="7"
                />

                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
            }
            value="10+"
            label="Technologies"
            floatDuration={6.5}
            floatDistance={8}
            floatDelay={0.8}
          />
        </motion.div>

        <motion.div
          style={{
            x: card3ParallaxX,
            y: card3ParallaxY,
          }}
          className="stat-badge-wrapper absolute -bottom-2 right-3 sm:right-1 z-20"
        >
          <StatBadge
            positionClasses="relative"
            iconColorClasses="text-orange-500 dark:text-orange-400 bg-orange-400/10 border-orange-400/20"
            icon={
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.75 11.25a.75.75 0 00-.75.75 7.5 7.5 0 0013.25 4.875 7.472 7.472 0 00-1.89-5.187 11.458 11.458 0 00-4.397-9.402zM12 14.25a3 3 0 00-3 3c0 .894.39 1.698 1.01 2.25a3.75 3.75 0 003.98 0c.62-.552 1.01-1.356 1.01-2.25a3 3 0 00-3-3z"
                />
              </svg>
            }
            value="3"
            label="Finished Projects"
            floatDuration={4.8}
            floatDistance={6}
            floatDelay={0.4}
          />
        </motion.div>
      </section>
    </div>
  );
}