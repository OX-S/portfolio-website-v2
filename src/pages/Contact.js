// src/pages/Contact.js

import React, { useState } from "react";

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
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-base-200">
            <div className="w-full max-w-lg p-8 bg-base-100 shadow-md rounded-lg">
                <h2 className="mb-6 text-2xl font-bold text-center">Contact Me</h2>
                {submitted && (
                    <div className="mb-4 text-green-600">
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
    );
}

export default Contact;
