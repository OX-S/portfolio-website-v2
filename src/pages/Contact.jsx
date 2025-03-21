// src/pages/Contact.js

import React, { useState } from "react";
import contactInfo from "../content/contactInfo";
import { Helmet } from "react-helmet";
import ContactHeading from "../components/headers/ContactHeading";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = "Name is required";
        if (!formData.email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid";
        }
        if (!formData.subject) newErrors.subject = "Subject is required";
        if (!formData.message) newErrors.message = "Message is required";
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            try {
                const webhook_payload = {
                    content: `**New Contact Form Submission**\n**Name:** ${formData.name}\n**Email:** ${formData.email}\n**Subject:** ${formData.subject}\n**Message:** ${formData.message}`
                };

                const response = await fetch(process.env.REACT_APP_WEBHOOK_LINK, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(webhook_payload),
                });
                if (response.ok) {
                    console.log("Form Data:", formData);
                    setSubmitted(true);
                    setFormData({
                        name: "",
                        email: "",
                        subject: "",
                        message: "",
                    });
                    setErrors({});
                } else {
                    console.error("Failed to submit form");
                }
            } catch (error) {
                console.error("Error submitting form", error);
            }
        } else {
            setErrors(validationErrors);
        }
    };



    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">

            <Helmet>
                <title>Contact Me - Finn Kliewer</title>
                <meta
                    name="Contact Me - Finn Kliewer"
                    content="Get in touch with me through my contact form or reach out via email, phone, LinkedIn, or GitHub."
                />
                <meta property="og:title" content="Contact Me - Finn Kliewer" />
            </Helmet>
            <ContactHeading />
            <div className="flex flex-col lg:flex-row w-full max-w-5xl bg-base-100 shadow-md rounded-lg overflow-hidden">
                <div className="lg:w-1/2 bg-primary text-white p-8 flex flex-col justify-center">
                    <h2 className="mb-6 text-3xl font-bold text-center">Get in Touch</h2>

                    <div className="flex flex-row lg:flex-col justify-center items-center lg:justify-start lg:items-start space-x-4 lg:space-x-0 lg:space-y-6">
                        {contactInfo.map((contact) => (
                            <div
                                key={contact.id}
                                className="flex items-center justify-center lg:items-start lg:justify-start"
                            >
                                <a
                                    href={contact.href}
                                    target={
                                        contact.label === "LinkedIn" || contact.label === "GitHub"
                                            ? "_blank"
                                            : "_self"
                                    }
                                    rel={
                                        contact.label === "LinkedIn" || contact.label === "GitHub"
                                            ? "noopener noreferrer"
                                            : undefined
                                    }
                                    className="flex flex-col items-center lg:flex-row lg:items-center space-y-2 lg:space-y-0 lg:space-x-4 hover:text-gray-200 transition-colors duration-300"
                                    aria-label={contact.label}
                                    title={contact.title}
                                >
                                    <div className="w-16 h-16 flex items-center justify-center bg-white text-primary rounded-full shadow-lg hover:bg-blue-400 transform hover:scale-105 transition-all duration-300">
                                        {contact.icon}
                                    </div>
                                    <span className="text-lg hidden lg:block">{contact.text}</span>
                                </a>
                            </div>
                        ))}
                    </div>

                </div>

                <div className="lg:w-1/2 p-8">
                    <h2 className="mb-6 text-2xl font-bold text-center">Contact Me</h2>
                    {submitted && (
                        <div className="mb-4 text-green-600 text-center">
                            Thank you for your message! I'll get back to you soon.
                        </div>
                    )}
                    <form onSubmit={handleSubmit} noValidate>
                        <div className="mb-4">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={`input input-bordered w-full bg-white text-black ${
                                    errors.name ? "input-error" : ""
                                }`}
                                placeholder="Your Name"
                            />
                            {errors.name && (
                                <span className="text-red-500 text-sm">{errors.name}</span>
                            )}
                        </div>
                        <div className="mb-4">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`input input-bordered w-full bg-white text-black ${
                                    errors.email ? "input-error" : ""
                                }`}
                                placeholder="you@example.com"
                            />
                            {errors.email && (
                                <span className="text-red-500 text-sm">{errors.email}</span>
                            )}
                        </div>
                        <div className="mb-4">
                            <label className="label">
                                <span className="label-text">Subject</span>
                            </label>
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className={`input input-bordered w-full bg-white text-black ${
                                    errors.subject ? "input-error" : ""
                                }`}
                                placeholder="Subject"
                            />
                            {errors.subject && (
                                <span className="text-red-500 text-sm">{errors.subject}</span>
                            )}
                        </div>
                        <div className="mb-4">
                            <label className="label">
                                <span className="label-text">Message</span>
                            </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className={`textarea textarea-bordered w-full h-32 bg-white text-black ${
                                    errors.message ? "textarea-error" : ""
                                }`}
                                placeholder="Your message..."
                            ></textarea>
                            {errors.message && (
                                <span className="text-red-500 text-sm">{errors.message}</span>
                            )}
                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                className="btn btn-primary w-full"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );

}

export default Contact;
