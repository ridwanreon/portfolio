import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    GraduationCap,
    Briefcase,
    Calendar,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import "../Education.css";


const education = [
    {
        title: "SSC",
        subtitle: "Science",
        institute: "Pirganj Pilot High School",
        date: "Session 2019–20 · Completed 2021",
        side: "left",
    },

    {
        title: "Diploma in Engineering",
        subtitle: "Computer Science & Technology (CST)",
        institute: "Rangpur City Institure of Technology",
        date: "Session 2021–22 · Completed 2026",
        side: "left",
    },
];


const experience = [
    {
        title: "Python Programming Internship",
        subtitle:
            "Daffodil International Professional Training Institute (DIPTI)",
        date: "2026",
        side: "left",
    },
];


const itemVariants = {
    hidden: {
        opacity: 0,
        y: 25,
    },

    visible: (index) => ({
        opacity: 1,
        y: 0,

        transition: {
            delay: index * 0.2,
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};


export default function Education() {
    const [activeTab, setActiveTab] = useState("education");

    const { isDark } = useTheme();

    const data =
        activeTab === "education"
            ? education
            : experience;


    return (
        <section
            id="qualification"
            className={`qualification-section ${isDark ? "dark-mode" : "light-mode"
                }`}
        >

            {/* ================= BACKGROUND GLOW ================= */}

            <motion.div
                className={`background-glow ${isDark ? "dark-glow" : "light-glow"
                    }`}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.25, 0.45, 0.25],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />


            {/* ================= SECONDARY GLOW ================= */}

            <motion.div
                className={`secondary-glow ${isDark
                        ? "dark-secondary-glow"
                        : "light-secondary-glow"
                    }`}
                animate={{
                    x: [0, 25, 0],
                    y: [0, -15, 0],
                    opacity: [0.2, 0.45, 0.2],
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />


            {/* ================= HEADING ================= */}

            <motion.div
                initial={{
                    opacity: 0,
                    y: -25,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                viewport={{
                    once: true,
                    amount: 0.3,
                }}
                transition={{
                    duration: 0.7,
                    ease: "easeOut",
                }}
                className="qualification-heading"
            >

                <motion.h2
                    initial={{
                        opacity: 0,
                        scale: 0.92,
                    }}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: 0.5,
                    }}
                >
                    Qualification
                </motion.h2>


                <motion.p
                    initial={{
                        opacity: 0,
                    }}
                    whileInView={{
                        opacity: 1,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: 0.5,
                        delay: 0.2,
                    }}
                >
                    My personal journey
                </motion.p>

            </motion.div>


            {/* ================= TABS ================= */}

            <motion.div
                initial={{
                    opacity: 0,
                    y: 15,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                viewport={{
                    once: true,
                }}
                transition={{
                    duration: 0.5,
                    delay: 0.15,
                }}
                className="qualification-tabs"
            >

                {/* EXPERIENCE */}

                <button
                    onClick={() => setActiveTab("experience")}
                    className={`qualification-tab ${activeTab === "experience"
                            ? "active"
                            : ""
                        }`}
                >

                    <Briefcase
                        size={17}
                        className="tab-icon"
                    />

                    Experience

                    {activeTab === "experience" && (
                        <motion.span
                            layoutId="activeTab"
                            className="active-tab-line"
                            transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 30,
                            }}
                        />
                    )}

                </button>


                {/* EDUCATION */}

                <button
                    onClick={() => setActiveTab("education")}
                    className={`qualification-tab ${activeTab === "education"
                            ? "active"
                            : ""
                        }`}
                >

                    <GraduationCap
                        size={18}
                        className="tab-icon"
                    />

                    Education

                    {activeTab === "education" && (
                        <motion.span
                            layoutId="activeTab"
                            className="active-tab-line"
                            transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 30,
                            }}
                        />
                    )}

                </button>

            </motion.div>


            {/* ================= TIMELINE ================= */}

            <div className="timeline-container">

                <div className="timeline-wrapper">

                    {/* Timeline Line */}

                    <motion.div
                        key={`line-${activeTab}-${isDark}`}
                        initial={{
                            height: 0,
                        }}
                        animate={{
                            height: "100%",
                        }}
                        transition={{
                            duration: 0.8,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className={`timeline-line ${isDark
                                ? "dark-timeline"
                                : "light-timeline"
                            }`}
                    />


                    <AnimatePresence mode="wait">

                        <motion.div
                            key={activeTab}
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            exit={{
                                opacity: 0,
                            }}
                            transition={{
                                duration: 0.3,
                            }}
                        >

                            {data.map((item, index) => (

                                <motion.div
                                    key={item.title}
                                    custom={index}
                                    variants={itemVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{
                                        once: true,
                                        amount: 0.5,
                                    }}
                                    className="timeline-item"
                                >

                                    {/* ================= LEFT ================= */}

                                    <div className="timeline-left">

                                        {item.side === "left" && (
                                            <TimelineContent
                                                item={item}
                                                align="right"
                                                isDark={isDark}
                                            />
                                        )}

                                    </div>


                                    {/* ================= CENTER DOT ================= */}

                                    <div className="timeline-dot-container">

                                        <motion.div
                                            initial={{
                                                scale: 0,
                                            }}
                                            whileInView={{
                                                scale: 1,
                                            }}
                                            viewport={{
                                                once: true,
                                            }}
                                            transition={{
                                                delay: 0.25,
                                                type: "spring",
                                                stiffness: 250,
                                                damping: 12,
                                            }}
                                            className="timeline-dot-wrapper"
                                        >

                                            {/* Pulse */}

                                            <motion.span
                                                animate={{
                                                    scale: [1, 2.5, 1],
                                                    opacity: [0.6, 0, 0.6],
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    ease: "easeOut",
                                                }}
                                                className={`timeline-pulse ${isDark
                                                        ? "dark-dot"
                                                        : "light-dot"
                                                    }`}
                                            />


                                            {/* Dot */}

                                            <span
                                                className={`timeline-dot ${isDark
                                                        ? "dark-main-dot"
                                                        : "light-main-dot"
                                                    }`}
                                            />

                                        </motion.div>

                                    </div>


                                    {/* ================= RIGHT ================= */}

                                    <div className="timeline-right">

                                        {item.side === "right" && (
                                            <TimelineContent
                                                item={item}
                                                align="left"
                                                isDark={isDark}
                                            />
                                        )}

                                    </div>

                                </motion.div>

                            ))}

                        </motion.div>

                    </AnimatePresence>

                </div>

            </div>

        </section>
    );
}


/* ================= TIMELINE CONTENT ================= */

function TimelineContent({
    item,
    align,
    isDark,
}) {

    return (

        <motion.div
            whileHover={{
                y: -4,
                scale: 1.01,
            }}
            transition={{
                duration: 0.2,
            }}
            className={`timeline-content ${align === "right"
                    ? "text-right"
                    : "text-left"
                }`}
        >

            {/* Title */}

            <motion.h3
                whileHover={{
                    letterSpacing: "0.02em",
                }}
            >
                {item.title}
            </motion.h3>


            {/* Subtitle */}

            <p className="timeline-subtitle">
                {item.subtitle}
            </p>


            {/* Institute */}

            {item.institute && (
                <p className="timeline-institute">
                    {item.institute}
                </p>
            )}


            {/* Date */}

            <div className="timeline-date">

                <Calendar size={11} />

                {item.date}

            </div>

        </motion.div>
    );
}