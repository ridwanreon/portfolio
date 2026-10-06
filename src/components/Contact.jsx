import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import "../Contact.css";

// Animation variants – consistent with the rest of the portfolio
const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
};

const headingVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
    },
};

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
};

export default function Contact() {
    const { isDark } = useTheme();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        project: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const subject = `Project Inquiry from ${formData.name}`;

        const body = `
Hello Ridwan,

Name: ${formData.name}
Email: ${formData.email}

Project Details:
${formData.project}
        `;

        const mailtoLink = `mailto:reonrahman8@gmail.com?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoLink;
    };

    return (
        <motion.section
            className={`contact-section ${isDark ? "contact-dark" : "contact-light"}`}
            id="contact"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
            <div className="contact-container">

                {/* Heading */}
                <motion.div
                    className="contact-heading"
                    variants={headingVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h2>Get in Touch</h2>
                    <p>Contact Me</p>
                </motion.div>

                <motion.div
                    className="contact-content"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >

                    {/* ================= LEFT ================= */}
                    <motion.div className="contact-left" variants={itemVariants}>

                        <h3>Talk to me</h3>

                        {/* Email */}
                        <motion.div className="contact-card" variants={itemVariants}>
                            <div className="contact-icon email-icon">
                                ✉
                            </div>

                            <span className="contact-label">
                                EMAIL
                            </span>

                            <p>
                                reonrahman8@gmail.com
                            </p>

                            <a
                                href="mailto:reonrahman8@gmail.com"
                                className="contact-link"
                            >
                                Write me
                                <span>→</span>
                            </a>
                        </motion.div>

                        {/* LinkedIn */}
                        <motion.div className="contact-card" variants={itemVariants}>
                            <div className="contact-icon linkedin-icon">
                                in
                            </div>

                            <span className="contact-label">
                                LINKEDIN
                            </span>

                            <p>
                                Connect with me
                            </p>

                            <a
                                href="https://www.linkedin.com/in/ridwanreon"
                                target="_blank"
                                rel="noreferrer"
                                className="contact-link"
                            >
                                Write me
                                <span>→</span>
                            </a>
                        </motion.div>

                    </motion.div>

                    {/* ================= RIGHT ================= */}
                    <motion.div className="contact-right" variants={itemVariants}>

                        <h3>Write me your project</h3>

                        <form onSubmit={handleSubmit}>

                            {/* Name */}
                            <motion.div className="form-group" variants={itemVariants}>
                                <label htmlFor="name">
                                    Name
                                </label>

                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Insert your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </motion.div>

                            {/* Email */}
                            <motion.div className="form-group" variants={itemVariants}>
                                <label htmlFor="email">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Insert your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </motion.div>

                            {/* Project */}
                            <motion.div className="form-group" variants={itemVariants}>
                                <label htmlFor="project">
                                    Project
                                </label>

                                <textarea
                                    id="project"
                                    name="project"
                                    placeholder="Write your project"
                                    value={formData.project}
                                    onChange={handleChange}
                                    required
                                />
                            </motion.div>

                            {/* Send */}
                            <motion.button
                                type="submit"
                                className="send-button"
                                variants={itemVariants}
                            >
                                <span>Send Message</span>
                                <span className="send-icon">
                                    ◇
                                </span>
                            </motion.button>

                        </form>
                    </motion.div>

                </motion.div>
            </div>

            {/* Decorative elements */}
            <div className="contact-glow glow-one"></div>
            <div className="contact-glow glow-two"></div>

            <div className="contact-dot dot-one"></div>
            <div className="contact-dot dot-two"></div>
        </motion.section>
    );
}