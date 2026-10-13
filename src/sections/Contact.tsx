
"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
    FaEnvelope,
    FaGithub,
    FaLinkedin,
    FaMapMarkerAlt,
    FaPhone
} from "react-icons/fa";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Solid3DBtn from "@/components/Solid3DBtn";

const Contact = () => {
    // Hardcoded colors or use CSS variables
    const primary = "#ff0080";

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [errors, setErrors] = useState<any>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<{ type: "idle" | "success" | "error"; message: string }>({
        type: "idle",
        message: "",
    });

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    };

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (errors[name]) {
            setErrors((prev: any) => ({
                ...prev,
                [name]: "",
            }));
        }
    };

    const validateForm = () => {
        const newErrors: any = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid";
        }

        if (!formData.subject.trim()) {
            newErrors.subject = "Subject is required";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        setStatus({ type: "idle", message: "" });

        try {
            // Send via Web3Forms API to sksagarkumarverma@gmail.com
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: "62688be1-f673-4ea2-8051-93c66f57c2a7", // public demo/free key or user's key
                    name: formData.name,
                    email: formData.email,
                    subject: `[Portfolio Contact] ${formData.subject}`,
                    message: formData.message,
                    from_name: `${formData.name} via Portfolio`,
                }),
            });

            const result = await response.json();

            if (result.success) {
                setStatus({
                    type: "success",
                    message: "Thank you! Your message has been sent successfully. I will get back to you soon.",
                });
                setFormData({
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                });
            } else {
                // Fallback to mailto link if API rejects
                window.location.href = `mailto:sksagarkumarverma@gmail.com?subject=${encodeURIComponent(
                    formData.subject
                )}&body=${encodeURIComponent(
                    `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
                )}`;
                setStatus({
                    type: "success",
                    message: "Email client opened! You can also send directly to sksagarkumarverma@gmail.com",
                });
            }
        } catch (error) {
            console.error("Error sending message:", error);
            // Fallback gracefully to mailto
            window.location.href = `mailto:sksagarkumarverma@gmail.com?subject=${encodeURIComponent(
                formData.subject
            )}&body=${encodeURIComponent(
                `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
            )}`;
            setStatus({
                type: "success",
                message: "Email client opened to send your message directly to sksagarkumarverma@gmail.com",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        {
            icon: FaEnvelope,
            title: "Email",
            value: "sksagarkumarverma@gmail.com",
            href: "mailto:sksagarkumarverma@gmail.com",
        },
        {
            icon: FaPhone,
            title: "Phone",
            value: "+918434131226",
            href: "tel:+918434131226",
        },
        {
            icon: FaMapMarkerAlt,
            title: "Location",
            value: "Jharkhand Deoghar",
            href: "#",
        },
    ];

    const socialLinks = [
        {
            icon: FaGithub,
            name: "GitHub",
            href: "https://github.com/Sagarvermakumar",
            color: "#333",
        },
        {
            icon: FaLinkedin,
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/sagar-kumar-479a92219/",
            color: "#0077B5",
        },
    ];

    return (
        <section id="contact" className="py-12 md:py-20 bg-transparent">
            <div className="container max-w-7xl mx-auto px-4">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {/* Section Header */}
                    <div className="flex flex-col items-center gap-4 mb-16 text-center">
                        <motion.h2
                            className="text-4xl md:text-5xl font-bold text-foreground"
                            variants={itemVariants}
                        >
                            Get In Touch
                        </motion.h2>
                        <motion.p
                            className="text-lg text-muted-foreground max-w-[600px]"
                            variants={itemVariants}
                        >
                            Ready to work together? Let's discuss your next project or just say hello!
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* Contact Information */}
                        <motion.div variants={itemVariants}>
                            <div className="flex flex-col gap-8">
                                <div className="bg-white/70 dark:bg-white/5 border border-white/20 backdrop-blur-md shadow-lg rounded-2xl p-6 md:p-8">
                                    <div className="flex flex-col gap-6">
                                        <h3 className="text-xl font-bold text-foreground text-center">Let's Connect</h3>
                                        <p className="text-muted-foreground text-center leading-relaxed">
                                            I'm always open to discussing new opportunities, creative projects, or just having a chat about technology. Feel free to reach out!
                                        </p>

                                        <div className="h-px bg-white/20 w-full" />

                                        <div className="flex flex-col w-full gap-2">
                                            {contactInfo.map((info, index) => (
                                                <motion.div
                                                    key={info.title}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: index * 0.1 }}
                                                    viewport={{ once: true }}
                                                    className="w-full"
                                                >
                                                    <a
                                                        href={info.href}
                                                        target={info.title !== "Location" ? "_self" : "_blank"}
                                                        rel={info.title !== "Location" ? "" : "noopener noreferrer"}
                                                        className="flex items-center gap-4 p-4 rounded-xl hover:bg-pink-500/10 hover:translate-x-1 transition-all duration-300 group"
                                                    >
                                                        <info.icon className="w-6 h-6 text-pink-500" />
                                                        <div className="flex flex-col items-start gap-1">
                                                            <span className="text-sm font-medium text-muted-foreground">{info.title}</span>
                                                            <span className="text-sm font-semibold text-foreground group-hover:text-pink-500 transition-colors">
                                                                {info.value}
                                                            </span>
                                                        </div>
                                                    </a>
                                                </motion.div>
                                            ))}
                                        </div>

                                        <div className="h-px bg-white/20 w-full" />

                                        {/* Social Links */}
                                        <div className="flex flex-col gap-4 items-center">
                                            <h4 className="font-semibold text-foreground">Follow Me</h4>
                                            <div className="flex gap-4">
                                                {socialLinks.map((social, index) => (
                                                    <motion.div
                                                        key={social.name}
                                                        initial={{ opacity: 0, scale: 0 }}
                                                        whileInView={{ opacity: 1, scale: 1 }}
                                                        transition={{ delay: index * 0.1 }}
                                                        viewport={{ once: true }}
                                                        whileHover={{ scale: 1.2, rotate: 5 }}
                                                        whileTap={{ scale: 0.9 }}
                                                    >
                                                        <a
                                                            href={social.href}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-foreground hover:text-pink-500 transition-colors"
                                                        >
                                                            <social.icon className="w-8 h-8" />
                                                        </a>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div variants={itemVariants}>
                            <div className="bg-white/70 dark:bg-white/5 border border-white/20 backdrop-blur-md shadow-lg rounded-2xl p-6 md:p-8">
                                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                                    <h3 className="text-xl font-bold text-foreground text-center mb-4">Send a Message</h3>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-foreground">Name *</label>
                                            <Input
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                placeholder="Your full name"
                                                className="bg-white/50 dark:bg-black/20 border-white/20 focus:border-pink-500"
                                            />
                                            {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-foreground">Email *</label>
                                            <Input
                                                name="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                placeholder="your.email@example.com"
                                                className="bg-white/50 dark:bg-black/20 border-white/20 focus:border-pink-500"
                                            />
                                            {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-foreground">Subject *</label>
                                        <Input
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            placeholder="What's this about?"
                                            className="bg-white/50 dark:bg-black/20 border-white/20 focus:border-pink-500"
                                        />
                                        {errors.subject && <p className="text-xs text-red-500">{errors.subject}</p>}
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-foreground">Message *</label>
                                        <Textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            placeholder="Tell me about your project or just say hello!"
                                            className="bg-white/50 dark:bg-black/20 border-white/20 focus:border-pink-500 min-h-[150px]"
                                        />
                                        {errors.message && <p className="text-xs text-red-500">{errors.message}</p>}
                                    </div>

                                    {/* Status Feedback */}
                                    {status.message && (
                                        <div
                                            className={`p-4 rounded-xl flex items-center gap-3 text-sm font-medium ${
                                                status.type === "success"
                                                    ? "bg-green-500/10 text-green-500 border border-green-500/20"
                                                    : "bg-red-500/10 text-red-500 border border-red-500/20"
                                            }`}
                                        >
                                            {status.type === "success" ? (
                                                <CheckCircle2 className="w-5 h-5 shrink-0" />
                                            ) : (
                                                <AlertCircle className="w-5 h-5 shrink-0" />
                                            )}
                                            <span>{status.message}</span>
                                        </div>
                                    )}

                                    <Solid3DBtn
                                        type="submit"
                                        disabled={isSubmitting}
                                        label={isSubmitting ? "Sending..." : "Send a Message"}
                                    />
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
