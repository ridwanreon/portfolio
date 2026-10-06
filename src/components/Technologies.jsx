import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import "../Technologies.css";

const technologies = [
    { icon: "⚡", name: "FastAPI" },
    { icon: "⚛", name: "React" },
    { icon: "🐘", name: "PostgreSQL" },
    { icon: "🎨", name: "Tailwind CSS" },
    { icon: "☁", name: "Render" },
    { icon: "◆", name: "Netlify" },
    { icon: "◈", name: "Supabase" },
    { icon: "🐍", name: "Python" },
    { icon: "🐬", name: "MySQL" },
    { icon: "📮", name: "Postman" }
];

const frontendSkills = [
    ["HTML5", "Advanced"],
    ["JavaScript", "Intermediate"],
    ["React", "Intermediate"],
    ["Tailwind CSS", "Intermediate"],
    ["CSS", "Advanced"],
    ["Responsive UI", "Advanced"]
];

const backendSkills = [
    ["Python", "Advanced"],
    ["FastAPI", "Intermediate"],
    ["MySQL", "Intermediate"],
    ["PostgreSQL", "Intermediate"],
    ["REST API", "Intermediate"],
    ["Authentication", "Intermediate"]
];

const coreSkills = [
    ["DSA", "Intermediate"],
    ["OOP", "Intermediate"],
    ["DB", "Intermediate"],
    ["C", "Advanced"],
    ["C++", "Intermediate"],
    ["Problem Solving", "Intermediate"]
];

const sectionVariants = {
    hidden: {
        opacity: 0,
        y: 60
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
};

const headingVariants = {
    hidden: {
        opacity: 0,
        y: 30
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7
        }
    }
};

const gridVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.08
        }
    }
};

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 35,
        scale: 0.92
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

function SkillCard({ title, skills }) {
    return (
        <motion.div
            className="skill-card"
            variants={cardVariants}
            whileHover={{
                y: -8,
                transition: { duration: 0.25 }
            }}
        >
            <h3>{title}</h3>

            <motion.div
                className="skills-grid"
                variants={gridVariants}
            >
                {skills.map(([name, level]) => (
                    <motion.div
                        className="skill-item"
                        key={name}
                        variants={cardVariants}
                        whileHover={{
                            x: 5,
                            transition: { duration: 0.2 }
                        }}
                    >
                        <div className="skill-icon">✓</div>

                        <div className="skill-info">
                            <span className="skill-name">{name}</span>
                            <span className="skill-level">{level}</span>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
}

export default function Technologies() {
    const { isDark } = useTheme();

    return (
        <motion.section
            id="tech"
            className={`technologies-section ${isDark ? "dark-theme" : "light-theme"}`}
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
        >
            <div className="tech-background">
                <span className="tech-orb orb-one"></span>
                <span className="tech-orb orb-two"></span>
                <span className="tech-orb orb-three"></span>
            </div>
            <motion.div
                className="tech-heading"
                variants={headingVariants}
            >
                <span className="section-tag">MY STACK</span>

                <h2 className="text-3xl font-semibold tracking-tight transition-colors duration-500 md:text-4xl">
                    Technologies
                </h2>

                <p>Tools and technologies I use to build modern applications.</p>
            </motion.div>

            <motion.div
                className="technology-grid"
                variants={gridVariants}
            >
                {technologies.map((technology, index) => (
                    <motion.div
                        className="technology-item"
                        key={technology.name}
                        variants={cardVariants}
                        whileHover={{
                            y: -10,
                            scale: 1.04,
                            transition: { duration: 0.25 }
                        }}
                        whileTap={{ scale: 0.97 }}
                    >
                        <motion.div
                            className="technology-icon"
                            animate={{
                                y: [0, -5, 0]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: index * 0.15
                            }}
                        >
                            {technology.icon}
                        </motion.div>

                        <span>{technology.name}</span>
                    </motion.div>
                ))}
            </motion.div>

            <motion.div
                className="skills-heading"
                variants={headingVariants}
            >
                <span className="section-tag">WHAT I KNOW</span>
                <h2>Skills</h2>
                <p>My technical level and development capabilities.</p>
            </motion.div>

            <motion.div
                className="skills-container"
                variants={gridVariants}
            >
                <SkillCard
                    title="Frontend Developer"
                    skills={frontendSkills}
                />

                <SkillCard
                    title="Backend Developer"
                    skills={backendSkills}
                />

                <SkillCard
                    title="Core CS"
                    skills={coreSkills}
                />
            </motion.div>
        </motion.section>
    );
}