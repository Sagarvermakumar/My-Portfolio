
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { theDev } from "../assets";
import { Briefcase, Calendar, CheckCircle2, Code2, Sparkles } from "lucide-react";

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    const imageVariants = {
        hidden: { scale: 0.85, opacity: 0, rotateY: -10 },
        visible: {
            scale: 1,
            opacity: 1,
            rotateY: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    };

    const skills = [
        "JavaScript", "TypeScript", "React", "Node.js", "Express",
        "MongoDB", "PostgreSQL", "Prisma", "Redux Toolkit", "Next.js",
        "Tailwind CSS", "REST APIs", "Docker", "Git",
    ];

    const experiences = [
        {
            period: "Present",
            role: "Full Stack Developer",
            company: "Current Production Projects",
            badge: "Active Development",
            type: "Flagship Engineering",
            points: [
                "Developing URMS (University Result Management System) with PostgreSQL, Prisma ORM, and Express, handling complex multi-course grading algorithms and secure exam workflows.",
                "Architecting NewsDesk CMS using Next.js App Router, SSR, dynamic category routing, and a modern responsive reader interface.",
                "Engineering WhatsApp Automation Suite featuring multi-device session management and automated messaging queues.",
            ],
            technologies: ["Next.js", "React", "Node.js", "Express", "Prisma", "PostgreSQL", "Tailwind CSS"],
        },
        {
            period: "Jan 2024 – Present",
            role: "Freelance Full Stack Developer",
            company: "Self-Employed",
            badge: "Client Solutions",
            type: "Freelance & Consulting",
            points: [
                "Delivered multiple end-to-end full-stack web applications for clients using React, Node.js, Express, and MongoDB.",
                "Implemented secure authentication pipelines (JWT, OAuth, Firebase) and scalable RESTful API architectures.",
                "Managed client communications, technical specifications, and end-to-end deployment pipelines.",
            ],
            technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "Firebase", "REST APIs"],
        },
        {
            period: "Mar 2024 – Apr 2024",
            role: "Full Stack Developer",
            company: "Zayka Express",
            badge: "Food Delivery Platform",
            type: "Client Project",
            points: [
                "Engineered an on-demand food delivery web application with customer ordering flows and an operations dashboard.",
                "Integrated real-time order status tracking, interactive menu catalog, and responsive shopping cart management.",
                "Optimized database schemas in MongoDB for fast menu queries and order history retrieval.",
            ],
            technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
        },
        {
            period: "May 2024 – Jun 2024",
            role: "MERN Developer",
            company: "JobConnect Portal",
            badge: "Recruitment Portal",
            type: "Client Project",
            points: [
                "Developed a complete recruitment platform with role-based portals for jobseekers, employers, and system admins.",
                "Built advanced search and filtering criteria for job listings, applicant pipeline tracking, and resume management.",
                "Maintained robust global state management across complex multi-step forms using Redux Toolkit.",
            ],
            technologies: ["React", "Node.js", "Express", "MongoDB", "Redux Toolkit", "JWT Auth"],
        },
    ];

    return (
        <section id="about" className="py-24 md:py-36 bg-transparent relative overflow-hidden">
            {/* Ambient Background Glows for About & Experience */}
            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/10 dark:bg-primary/15 rounded-full blur-[140px] pointer-events-none -z-10" />
            <div className="absolute top-1/2 -left-20 w-[450px] h-[450px] bg-purple-500/10 dark:bg-purple-500/15 rounded-full blur-[130px] pointer-events-none -z-10" />
            <div className="absolute bottom-10 -right-20 w-[500px] h-[500px] bg-pink-500/10 dark:bg-pink-500/15 rounded-full blur-[140px] pointer-events-none -z-10" />

            <div className="container max-w-6xl mx-auto px-4 relative z-10">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {/* Section Header */}
                    <div className="flex flex-col items-center gap-3 mb-16 text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                            <Sparkles className="w-3.5 h-3.5" /> Get To Know Me
                        </div>
                        <motion.h2
                            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight"
                            variants={itemVariants}
                        >
                            About Me
                        </motion.h2>
                        <motion.p
                            className="text-sm sm:text-base text-muted-foreground max-w-[620px]"
                            variants={itemVariants}
                        >
                            Passionate Full Stack Developer with a track record of building reliable, user-centric web applications and scalable backends.
                        </motion.p>
                    </div>

                    {/* Main Content (Bio & Photo) */}
                    <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
                        {/* Profile Image */}
                        <motion.div
                            variants={imageVariants}
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="relative"
                        >
                            <div className="relative rounded-2xl overflow-hidden bg-white/90 dark:bg-white/[0.04] border border-slate-200/90 dark:border-white/15 shadow-[0_10px_35px_rgba(0,0,0,0.06)] dark:shadow-none backdrop-blur-xl p-3 sm:p-4 group">
                                <div className="relative w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] rounded-xl overflow-hidden shadow-md group-hover:scale-[1.02] transition-transform duration-500">
                                    <Image
                                        src={theDev}
                                        alt="Sagar Verma - Full Stack & MERN Developer"
                                        title="Sagar Verma - Full Stack & MERN Developer"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            </div>
                        </motion.div>

                        {/* About Text */}
                        <div className="flex flex-col items-center md:items-start flex-1 gap-5 text-center md:text-left">
                            <motion.p className="text-base sm:text-lg text-foreground/90 leading-relaxed" variants={itemVariants}>
                                I am a dedicated <strong className="text-primary font-semibold">Full Stack Developer</strong> specializing in the MERN stack and Next.js ecosystem. I build clean, high-performance web applications with modular backends and intuitive user interfaces.
                            </motion.p>
                            <motion.p className="text-sm sm:text-base text-muted-foreground leading-relaxed" variants={itemVariants}>
                                From managing complex databases in PostgreSQL & MongoDB to building seamless client portals and real-time automation tools, I bring hands-on experience across every phase of software development.
                            </motion.p>

                            {/* Skills Pills */}
                            <motion.div
                                className="flex flex-wrap gap-2 justify-center md:justify-start pt-2"
                                variants={itemVariants}
                            >
                                {skills.map((skill, index) => (
                                    <motion.span
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                        transition={{ delay: index * 0.04 }}
                                        className="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-white/10 hover:border-primary/50 transition-colors"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </div>
                    </div>

                    {/* Connected Timeline Experience Section */}
                    <div className="relative pt-8">
                        <div className="flex flex-col items-center gap-3 mb-16 text-center">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                                <Briefcase className="w-3.5 h-3.5" /> Career Journey
                            </div>
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground">
                                Experience & Milestones
                            </h3>
                            <p className="text-sm sm:text-base text-muted-foreground max-w-md">
                                A timeline of roles, freelance client delivery, and systems I've built.
                            </p>
                        </div>

                        {/* Connected Vertical Timeline */}
                        <div className="relative max-w-4xl mx-auto">
                            {/* Glowing Gradient Vertical Spine */}
                            <div className="absolute top-4 bottom-4 left-4 sm:left-6 md:left-8 w-[2px] bg-gradient-to-b from-primary via-purple-500 to-pink-500/40 rounded-full" />

                            <div className="flex flex-col gap-8 sm:gap-10">
                                {experiences.map((exp, index) => (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        className="relative flex items-start group"
                                    >
                                        {/* Milestone Node Icon */}
                                        <div className="absolute left-4 sm:left-6 md:left-8 -translate-x-1/2 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white dark:bg-slate-900 border-2 border-primary shadow-[0_0_12px_rgba(var(--primary),0.35)] z-10 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(var(--primary),0.6)] transition-all duration-300">
                                            <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                                        </div>

                                        {/* Timeline Content Card */}
                                        <div className="ml-11 sm:ml-16 md:ml-20 w-full">
                                            <div className="relative overflow-hidden rounded-2xl bg-white/90 dark:bg-white/[0.04] border border-slate-200/90 dark:border-white/10 p-5 sm:p-7 backdrop-blur-xl shadow-[0_4px_25px_rgba(0,0,0,0.04)] dark:shadow-none hover:shadow-xl hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300">
                                                {/* Top Glowing Accent on Hover */}
                                                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                                {/* Header: Role, Badges, Period */}
                                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-4">
                                                    <div>
                                                        <div className="flex items-center gap-2 flex-wrap mb-1">
                                                            <h4 className="text-base sm:text-lg md:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                                                                {exp.role}
                                                            </h4>
                                                            <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                                                                {exp.badge}
                                                            </span>
                                                        </div>
                                                        <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                                                            <span className="font-semibold text-foreground/80">{exp.company}</span>
                                                            <span>•</span>
                                                            <span>{exp.type}</span>
                                                        </div>
                                                    </div>

                                                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-white/10 shrink-0 self-start sm:self-center">
                                                        <Calendar className="w-3.5 h-3.5 text-primary" />
                                                        {exp.period}
                                                    </div>
                                                </div>

                                                {/* Bullet Points */}
                                                <ul className="space-y-2 mb-5">
                                                    {exp.points.map((pt, pIdx) => (
                                                        <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                                                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                                            <span>{pt}</span>
                                                        </li>
                                                    ))}
                                                </ul>

                                                {/* Tech Stack Pills */}
                                                <div className="pt-4 border-t border-slate-100 dark:border-white/5 flex flex-wrap gap-1.5 sm:gap-2 items-center">
                                                    <span className="text-xs font-semibold text-muted-foreground mr-1 flex items-center gap-1">
                                                        <Code2 className="w-3 h-3 text-primary" /> Tech Stack:
                                                    </span>
                                                    {exp.technologies.map((tech) => (
                                                        <span
                                                            key={tech}
                                                            className="text-[11px] sm:text-xs px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200/70 dark:border-white/10 font-medium"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
