import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import "../Project.css";

const projects = [
    {
        title: "MediMate",
        category: "Doctor & Patient Management",
        description:
            "A healthcare platform for managing doctors, patients and medical services with secure authentication.",
        image:
            "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
        technologies: ["FastAPI", "React", "SQLAlchemy", "SQLite"],
        live: "#",
        github: "#",
    },

    {
        title: "Housing & Roommate",
        category: "Full-Stack Application",
        description:
            "A housing platform for room listings, rental requests and property management with role-based access.",
        image:
            "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
        technologies: ["FastAPI", "React", "PostgreSQL", "JWT"],
        live: "https://housing-and-roommate-management-platform.onrender.com/",
        github: "#",
    },

    {
        title: "Library Management",
        category: "Management System",
        description:
            "A complete library system for books, reservations, issued books and fines with member and librarian roles.",
        image:
            "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1200&q=80",
        technologies: ["FastAPI", "React", "PostgreSQL", "JWT"],
        live: "https://library-management-project-again.onrender.com/",
        github: "#",
    },
];


const containerVariants = {
    hidden: {},

    visible: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};


const cardVariants = {
    hidden: {
        opacity: 0,
        y: 35,
    },

    visible: {
        opacity: 1,
        y: 0,

        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};


export default function Project() {

    const { isDark } = useTheme();


    return (
        <section
            id="projects"
            className={`projects-section ${isDark ? "dark-mode" : "light-mode"
                }`}
        >

            {/* ================= BACKGROUND GLOW ================= */}

            <div
                className={`background-glow ${isDark ? "dark-glow" : "light-glow"
                    }`}
            />


            <div className="projects-container">

                {/* ================= SECTION HEADING ================= */}

                <motion.div
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
                        duration: 0.6,
                    }}
                    className="project-heading"
                >

                    <span className="section-tag">
                        Selected Work
                    </span>


                    <h2>
                        Featured Projects
                    </h2>


                    <p>
                        A selection of applications I have built using
                        modern frontend and backend technologies.
                    </p>

                </motion.div>


                {/* ================= PROJECT CARDS ================= */}

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.1,
                    }}
                    className="projects-grid"
                >

                    {projects.map((project, index) => (

                        <motion.article
                            key={project.title}
                            variants={cardVariants}
                            whileHover={{
                                y: -5,
                            }}
                            className="project-card"
                        >

                            {/* ================= IMAGE ================= */}

                            <div className="project-image">

                                <img
                                    src={project.image}
                                    alt={project.title}
                                />


                                <div className="image-overlay" />


                                {/* Number */}

                                <div className="project-number">
                                    0{index + 1}
                                </div>

                            </div>


                            {/* ================= CONTENT ================= */}

                            <div className="project-content">

                                {/* Category */}

                                <span className="project-category">
                                    {project.category}
                                </span>


                                {/* Title */}

                                <div className="project-title-row">

                                    <h3>
                                        {project.title}
                                    </h3>


                                    <ArrowUpRight
                                        size={18}
                                        className="project-arrow"
                                    />

                                </div>


                                {/* Description */}

                                <p className="project-description">
                                    {project.description}
                                </p>


                                {/* Technologies */}

                                <div className="project-technologies">

                                    {project.technologies.map((tech) => (

                                        <span key={tech}>
                                            {tech}
                                        </span>

                                    ))}

                                </div>


                                {/* ================= BUTTONS ================= */}

                                <div className="project-buttons">

                                    {/* Live Demo */}

                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="live-button"
                                    >

                                        <ExternalLink size={13} />

                                        Live Demo

                                    </a>


                                    {/* GitHub */}

                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="github-button"
                                    >
                                        GitHub
                                    </a>

                                </div>

                            </div>

                        </motion.article>

                    ))}

                </motion.div>

            </div>

        </section>
    );
}