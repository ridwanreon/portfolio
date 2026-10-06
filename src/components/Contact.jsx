import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import "../Contact.css";

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
        <section
            className={`contact-section ${isDark ? "contact-dark" : "contact-light"}`}
            id="contact"
        >
            <div className="contact-container">

                {/* Heading */}
                <div className="contact-heading">
                    <h2>Get in Touch</h2>
                    <p>Contact Me</p>
                </div>

                <div className="contact-content">

                    {/* ================= LEFT ================= */}
                    <div className="contact-left">

                        <h3>Talk to me</h3>

                        {/* Email */}
                        <div className="contact-card">
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
                        </div>

                        {/* LinkedIn */}
                        <div className="contact-card">
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
                                href="#"
                                target="_blank"
                                rel="noreferrer"
                                className="contact-link"
                            >
                                Write me
                                <span>→</span>
                            </a>
                        </div>

                    </div>

                    {/* ================= RIGHT ================= */}
                    <div className="contact-right">

                        <h3>Write me your project</h3>

                        <form onSubmit={handleSubmit}>

                            {/* Name */}
                            <div className="form-group">
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
                            </div>

                            {/* Email */}
                            <div className="form-group">
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
                            </div>

                            {/* Project */}
                            <div className="form-group">
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
                            </div>

                            {/* Send */}
                            <button
                                type="submit"
                                className="send-button"
                            >
                                <span>Send Message</span>
                                <span className="send-icon">
                                    ◇
                                </span>
                            </button>

                        </form>
                    </div>

                </div>
            </div>

            {/* Decorative elements */}
            <div className="contact-glow glow-one"></div>
            <div className="contact-glow glow-two"></div>

            <div className="contact-dot dot-one"></div>
            <div className="contact-dot dot-two"></div>
        </section>
    );
}