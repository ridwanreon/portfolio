import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import "../Footer.css";

export default function Footer() {
    const { isDark } = useTheme();

    const currentYear = new Date().getFullYear();

    // Container animation
    const containerVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.7,
                staggerChildren: 0.15,
            },
        },
    };

    // Individual item animation
    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 35,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    // Social icon animation
    const socialVariants = {
        hidden: {
            opacity: 0,
            scale: 0.7,
            y: 15,
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    return (
        <footer
            className={`footer ${isDark ? "footer-dark" : "footer-light"
                }`}
        >
            {/* Animated background glow */}
            <motion.div
                className="footer-glow footer-glow-one"
                animate={{
                    x: [0, 25, 0],
                    y: [0, -15, 0],
                    scale: [1, 1.08, 1],
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <motion.div
                className="footer-glow footer-glow-two"
                animate={{
                    x: [0, -20, 0],
                    y: [0, 15, 0],
                    scale: [1, 1.06, 1],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <motion.div
                className="footer-container"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                    once: true,
                    amount: 0.2,
                }}
            >
                {/* ================= LEFT ================= */}

                <motion.div
                    className="footer-about"
                    variants={itemVariants}
                >
                    <motion.h2
                        whileHover={{
                            x: 4,
                        }}
                        transition={{
                            duration: 0.2,
                        }}
                    >
                        Md. Ridwan Rahaman Reon
                    </motion.h2>

                    <p>
                        Full Stack Developer passionate about creating
                        beautiful and functional web experiences.
                    </p>
                </motion.div>


                {/* ================= QUICK LINKS ================= */}

                <motion.div
                    className="footer-links"
                    variants={itemVariants}
                >
                    <h3>Quick Links</h3>

                    <motion.a
                        href="#about"
                        whileHover={{
                            x: 5,
                        }}
                    >
                        About
                    </motion.a>

                    <motion.a
                        href="#projects"
                        whileHover={{
                            x: 5,
                        }}
                    >
                        Projects
                    </motion.a>

                    <motion.a
                        href="#contact"
                        whileHover={{
                            x: 5,
                        }}
                    >
                        Contact
                    </motion.a>
                </motion.div>


                {/* ================= SOCIAL ================= */}

                <motion.div
                    className="footer-social"
                    variants={itemVariants}
                >
                    <h3>Connect With Me</h3>

                    <div className="social-icons">

                        {/* GitHub */}

                        <motion.a
                            href="#"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                            variants={socialVariants}
                            whileHover={{
                                y: -5,
                                scale: 1.15,
                            }}
                            whileTap={{
                                scale: 0.9,
                            }}
                        >
                            <svg
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.37-3.37-1.37-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1.01.08 1.54 1.06 1.54 1.06.9 1.59 2.36 1.13 2.94.86.09-.67.35-1.13.64-1.39-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05A9.16 9.16 0 0 1 12 6.89c.85 0 1.71.12 2.51.36 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9v2.81c0 .27.18.59.69.49A10.28 10.28 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"
                                />
                            </svg>
                        </motion.a>


                        {/* LinkedIn */}

                        <motion.a
                            href="#"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                            variants={socialVariants}
                            whileHover={{
                                y: -5,
                                scale: 1.15,
                            }}
                            whileTap={{
                                scale: 0.9,
                            }}
                        >
                            <svg
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A2.05 2.05 0 1 0 5.25 7.1 2.05 2.05 0 0 0 5.25 3ZM20.44 13.41c0-3.47-1.85-5.09-4.32-5.09-1.99 0-2.88 1.09-3.38 1.86V8.5H9.36V20h3.38v-5.7c0-1.5.28-2.95 2.14-2.95 1.83 0 1.85 1.72 1.85 3.05V20h3.38l.33-6.59Z"
                                />
                            </svg>
                        </motion.a>


                        {/* Email */}

                        <motion.a
                            href="mailto:reonrahman8@gmail.com"
                            aria-label="Email"
                            variants={socialVariants}
                            whileHover={{
                                y: -5,
                                scale: 1.15,
                            }}
                            whileTap={{
                                scale: 0.9,
                            }}
                        >
                            <svg
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm9 7.2L20.2 7H3.8L12 12.2ZM4 17h16V8.8l-7.46 4.75a1 1 0 0 1-1.08 0L4 8.8V17Z"
                                />
                            </svg>
                        </motion.a>

                    </div>
                </motion.div>

            </motion.div>


            {/* ================= BOTTOM ================= */}

            <motion.div
                className="footer-bottom"
                initial={{
                    opacity: 0,
                    y: 20,
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
                    delay: 0.3,
                }}
            >

                <p>
                    © {currentYear} Md. Ridwan Rahaman Reon.
                    All rights reserved.
                </p>


                {/* Back To Top */}

                <motion.button
                    className="back-to-top"
                    onClick={() =>
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                        })
                    }
                    aria-label="Back to top"
                    whileHover={{
                        y: -5,
                        scale: 1.1,
                    }}
                    whileTap={{
                        scale: 0.9,
                    }}
                >
                    ↑
                </motion.button>

            </motion.div>

        </footer>
    );
}