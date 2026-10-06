
import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import cartoon_image from "../assets/cartoon_image.jpg";
const AboutSection = () => {
    const { isDark } = useTheme();

    const portfolioConfig = {
        title: "About",
        subtitle: "My Introduction",
        biography:
            "Proficient in React.js, Next.js, Redux, Node.js, and Docker, I build scalable, high-performance applications. Skilled in Prisma, Socket.IO, and Kubernetes, with expertise in MongoDB, PostgreSQL, and CI/CD pipelines, I deliver innovative real-time systems and impactful solutions.",
        buttonLabel: "Download Resume",
        resumeUrl:
            "https://drive.google.com/file/d/1iesmJWvCbgaY2YyNtUC7VuKz7-PkC5Jd/view",
        profileImage:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuB0RqkU4JSKJk8o4BcFJT0vdY5KoIxYC32tg19AMNmkfiCLSjHeFTpKoTUEnRGpy7LTUu4rBo3rz5cRWmzy0dh8OQj6MUKDf5dE0KuXmJuKmFmE2LMxVOGfJScZf1P11-WI0NbdF5ajVtNb5z0ka_uEqLGmMuzrwwgyz_wJ24Vgb-nADAptD8uYZXIeDXtSUwxw4Rd3g463ld8evbN-0JiTt1s0N9DF4akmex7bX5P_U4ABAFX64sgmWiq7DGbJz7pxYw",
    };

    const sectionVariants = {
        hidden: {
            opacity: 0,
            y: 28,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    const imageVariants = {
        hidden: {
            opacity: 0,
            scale: 0.94,
            y: 24,
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
            },
        },
    };

    const contentVariants = {
        hidden: {
            opacity: 0,
            x: 28,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    const statsContainerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.25,
            },
        },
    };

    const statVariants = {
        hidden: {
            opacity: 0,
            y: 18,
            scale: 0.96,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    return (
        <motion.section
            id="about"
            initial="hidden"
            whileInView="visible"
            viewport={{
                once: true,
                amount: 0.18,
            }}
            className={`relative w-full min-h-screen overflow-hidden px-4 py-16 transition-colors duration-500 sm:px-6 sm:py-20 md:px-8 lg:py-24 ${isDark ? "text-white" : "bg-white text-[#111111]"
                }`}
        >
            <main className="relative z-10 mx-auto flex w-full max-w-[1100px] flex-col items-center justify-center">
                <motion.header
                    variants={sectionVariants}
                    className="mb-10 text-center sm:mb-12 md:mb-16"
                >
                    <motion.h2
                        className={`text-[30px] font-semibold leading-tight tracking-[-0.02em] transition-colors duration-500 sm:text-[34px] md:text-[38px] ${isDark ? "text-white" : "text-[#111111]"
                            }`}
                    >
                        {portfolioConfig.title}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.6,
                            delay: 0.2,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className={`mt-2 text-[11px] font-normal tracking-[0.08em] transition-colors duration-500 sm:text-xs ${isDark ? "text-zinc-400" : "text-gray-500"
                            }`}
                    >
                        {portfolioConfig.subtitle}
                    </motion.p>
                </motion.header>

                <div className="grid w-full grid-cols-1 items-center gap-12 md:grid-cols-12 md:gap-8 lg:gap-12">
                    <motion.section
                        variants={imageVariants}
                        className="flex w-full items-center justify-center md:col-span-5"
                    >
                        <motion.div
                            animate={{
                                y: [-5, 5, -5],
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="flex w-full max-w-[420px] items-center justify-center"
                        >
                            <motion.img
                                src={cartoon_image}
                                alt="Portrait of developer"
                                loading="eager"
                                decoding="async"
                                draggable="false"
                                whileHover={{
                                    scale: 1.015,
                                }}
                                transition={{
                                    duration: 0.4,
                                    ease: "easeOut",
                                }}
                                className="block h-80 w-full max-w-[420px] select-none object-contain"
                            />
                        </motion.div>
                    </motion.section>

                    <motion.section
                        variants={contentVariants}
                        className="flex w-full flex-col items-center text-center md:col-span-7 md:items-start md:text-left"
                    >
                        <motion.div
                            variants={statsContainerVariants}
                            className="mb-6 grid w-full max-w-[430px] grid-cols-3 gap-2.5 sm:gap-3.5"
                        >
                            <motion.div
                                variants={statVariants}
                                whileHover={{
                                    y: -5,
                                    scale: 1.025,
                                }}
                                transition={{
                                    duration: 0.25,
                                    ease: "easeOut",
                                }}
                                className={`flex min-h-[82px] cursor-default flex-col items-center justify-center rounded-xl px-2 py-3 text-center transition-all duration-300 ${isDark
                                    ? "border border-white/[0.08] bg-white/[0.045] hover:border-white/[0.14] hover:bg-white/[0.07]"
                                    : "border border-black/[0.08] bg-gray-50 hover:border-black/[0.14] hover:bg-gray-100"
                                    }`}
                            >
                                <motion.svg
                                    animate={{
                                        y: [0, -2, 0],
                                    }}
                                    transition={{
                                        duration: 2.8,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    className={`mb-2 h-5 w-5 ${isDark
                                        ? "text-cyan-400"
                                        : "text-cyan-600"
                                        }`}
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
                                </motion.svg>

                                <span
                                    className={`text-[10px] font-medium sm:text-[11px] ${isDark
                                        ? "text-zinc-300"
                                        : "text-gray-600"
                                        }`}
                                >
                                    Experience
                                </span>

                                <span
                                    className={`mt-1 text-[10px] font-semibold sm:text-[11px] ${isDark
                                        ? "text-white"
                                        : "text-gray-900"
                                        }`}
                                >
                                    3 Years Working
                                </span>
                            </motion.div>

                            <motion.div
                                variants={statVariants}
                                whileHover={{
                                    y: -5,
                                    scale: 1.025,
                                }}
                                transition={{
                                    duration: 0.25,
                                    ease: "easeOut",
                                }}
                                className={`flex min-h-[82px] cursor-default flex-col items-center justify-center rounded-xl px-2 py-3 text-center transition-all duration-300 ${isDark
                                    ? "border border-white/[0.08] bg-white/[0.045] hover:border-white/[0.14] hover:bg-white/[0.07]"
                                    : "border border-black/[0.08] bg-gray-50 hover:border-black/[0.14] hover:bg-gray-100"
                                    }`}
                            >
                                <motion.svg
                                    animate={{
                                        y: [0, -2, 0],
                                    }}
                                    transition={{
                                        duration: 3.1,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 0.2,
                                    }}
                                    className={`mb-2 h-5 w-5 ${isDark
                                        ? "text-orange-400"
                                        : "text-orange-600"
                                        }`}
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </motion.svg>

                                <span
                                    className={`text-[10px] font-medium sm:text-[11px] ${isDark
                                        ? "text-zinc-300"
                                        : "text-gray-600"
                                        }`}
                                >
                                    Completed
                                </span>

                                <span
                                    className={`mt-1 text-[10px] font-semibold sm:text-[11px] ${isDark
                                        ? "text-white"
                                        : "text-gray-900"
                                        }`}
                                >
                                    150+ Projects
                                </span>
                            </motion.div>

                            <motion.div
                                variants={statVariants}
                                whileHover={{
                                    y: -5,
                                    scale: 1.025,
                                }}
                                transition={{
                                    duration: 0.25,
                                    ease: "easeOut",
                                }}
                                className={`flex min-h-[82px] cursor-default flex-col items-center justify-center rounded-xl px-2 py-3 text-center transition-all duration-300 ${isDark
                                    ? "border border-white/[0.08] bg-white/[0.045] hover:border-white/[0.14] hover:bg-white/[0.07]"
                                    : "border border-black/[0.08] bg-gray-50 hover:border-black/[0.14] hover:bg-gray-100"
                                    }`}
                            >
                                <motion.svg
                                    animate={{
                                        y: [0, -2, 0],
                                    }}
                                    transition={{
                                        duration: 2.6,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 0.4,
                                    }}
                                    className={`mb-2 h-5 w-5 ${isDark
                                        ? "text-amber-400"
                                        : "text-amber-600"
                                        }`}
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </motion.svg>

                                <span
                                    className={`text-[10px] font-medium sm:text-[11px] ${isDark
                                        ? "text-zinc-300"
                                        : "text-gray-600"
                                        }`}
                                >
                                    Support
                                </span>

                                <span
                                    className={`mt-1 text-[10px] font-semibold sm:text-[11px] ${isDark
                                        ? "text-white"
                                        : "text-gray-900"
                                        }`}
                                >
                                    Online 24/7
                                </span>
                            </motion.div>
                        </motion.div>

                        <motion.p
                            initial={{
                                opacity: 0,
                                y: 16,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                duration: 0.7,
                                delay: 0.45,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className={`mb-7 w-full max-w-[520px] text-[12px] leading-6 transition-colors duration-500 sm:text-[13px] md:text-sm ${isDark
                                ? "text-zinc-400"
                                : "text-gray-600"
                                }`}
                        >
                            {portfolioConfig.biography}
                        </motion.p>

                        <motion.a
                            href={portfolioConfig.resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{
                                opacity: 0,
                                y: 14,
                                scale: 0.97,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                            }}
                            viewport={{
                                once: true,
                            }}
                            whileHover={{
                                y: -3,
                                scale: 1.025,
                            }}
                            whileTap={{
                                scale: 0.97,
                            }}
                            transition={{
                                duration: 0.55,
                                delay: 0.55,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[11px] font-medium transition-colors duration-300 sm:px-6 sm:py-3 sm:text-xs ${isDark
                                ? "bg-white text-slate-900 shadow-lg shadow-black/20 hover:bg-zinc-100"
                                : "bg-slate-900 text-white shadow-lg shadow-slate-900/15 hover:bg-slate-800"
                                }`}
                        >
                            <span>{portfolioConfig.buttonLabel}</span>

                            <motion.svg
                                animate={{
                                    y: [0, 2, 0],
                                }}
                                transition={{
                                    duration: 1.8,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="h-4 w-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M12 3v12m0 0l4-4m-4 4l-4-4M5 21h14"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                />
                            </motion.svg>
                        </motion.a>
                    </motion.section>
                </div>
            </main>
        </motion.section>
    );
};

export default AboutSection;

