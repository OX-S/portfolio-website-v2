// src/pages/Contact.js

import React, { useState } from "react";
import contactInfo from "../content/contactInfo"; // Adjust the path if necessary
import { Helmet } from "react-helmet";

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

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            // Handle form submission (e.g., send data to API)
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
            setErrors(validationErrors);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-base-200 p-4">
            {/* Helmet for SEO Optimization */}
            <Helmet>
                <title>Contact Us - Finn Kliewer</title>
                <meta
                    name="description"
                    content="Get in touch with us through our contact form or reach out via email, phone, LinkedIn, or GitHub."
                />
                <meta property="og:title" content="Contact Us - Finn Kliewer" />
                <meta
                    property="og:description"
                    content="Reach out to us through our contact form or connect with us on LinkedIn and GitHub."
                />
                <meta property="og:type" content="website" />
                {/* Add more meta tags as needed */}
            </Helmet>

            {/* Large H1 Above the Layout */}
            <h1 className="text-5xl font-bold text-center mb-8">Contact Us</h1>

            <div className="flex flex-col lg:flex-row w-full max-w-5xl bg-base-100 shadow-md rounded-lg overflow-hidden">
                {/* Left Side - Contact Icons */}
                <div className="lg:w-1/2 bg-primary text-white p-8 flex flex-col justify-center">
                    <h2 className="mb-6 text-3xl font-bold text-center">Get in Touch</h2>

                    {/* Icons Container */}
                    <div className="flex flex-row lg:flex-col lg:space-y-6 justify-evenly lg:justify-start w-full">
                        {contactInfo.map((contact) => (
                            <div key={contact.id} className="flex flex-col items-center lg:items-start">
                                <a
                                    href={contact.href}
                                    className="flex flex-col items-center lg:flex-row lg:items-center space-y-2 lg:space-y-0 lg:space-x-4 hover:text-gray-200 transition-colors duration-300"
                                    aria-label={contact.label}
                                    title={contact.title}
                                >
                                    <div className="w-16 h-16 flex items-center justify-center bg-white text-primary rounded-full shadow-lg hover:bg-blue-400 transform hover:scale-105 transition-all duration-300">
                                        {contact.icon}
                                    </div>
                                    <span className="text-lg lg:text-left">{contact.text}</span>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side - Contact Form */}
                <div className="lg:w-1/2 p-8">
                    <h2 className="mb-6 text-2xl font-bold text-center">Contact Me</h2>
                    {submitted && (
                        <div className="mb-4 text-green-600 text-center">
                            Thank you for your message! We'll get back to you soon.
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
                                className={`input input-bordered w-full bg-white ${
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
                                className={`input input-bordered w-full bg-white ${
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
                                className={`input input-bordered w-full bg-white ${
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
                                className={`textarea textarea-bordered w-full h-32 bg-white ${
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
