
"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
    FaAws,
    FaCss3Alt,
    FaDocker,
    FaGitAlt,
    FaHtml5,
    FaJs,
    FaNodeJs,
    FaNpm,
    FaPython,
    FaReact,
} from 'react-icons/fa';
import { FaGithub } from "react-icons/fa6";
import {
    SiChakraui,
    SiExpress,
    SiFirebase,
    SiFramer,
    SiNextdotjs,
    SiRedux,
    SiTailwindcss,
    SiTypescript
} from 'react-icons/si';
import { TbBrandMongodb } from "react-icons/tb"; // Replacement for WatchmanMonitoring which was likely an error/placeholder or rare icon
import TiltCard from '../components/TiltCard';

const Skills = () => {
    // Assuming primary color #ff0080
    const primary = "#ff0080";
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

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

    const skillCategories = [
        {
            title: "Frontend",
            skills: [
                { name: "React", icon: FaReact, level: 95, color: "#61DAFB" },
                { name: "Next.js", icon: SiNextdotjs, level: 90, color: "#000000" },
                { name: "TypeScript", icon: SiTypescript, level: 88, color: "#3178C6" },
                { name: "JavaScript", icon: FaJs, level: 95, color: "#F7DF1E" },
                { name: "HTML5", icon: FaHtml5, level: 98, color: "#E34F26" },
                { name: "CSS3", icon: FaCss3Alt, level: 92, color: "#1572B6" },
            ]
        },
        {
            title: "Backend",
            skills: [
                { name: "Node.js", icon: FaNodeJs, level: 93, color: "#339933" },
                { name: "Express", icon: SiExpress, level: 90, color: "#000000" },
                { name: "MongoDB", icon: TbBrandMongodb, level: 88, color: "#47A248" },
                { name: "Python", icon: FaPython, level: 78, color: "#3776AB" },
            ]
        },
        {
            title: "Tools & Cloud",
            skills: [
                { name: "Git", icon: FaGitAlt, level: 92, color: "#F05032" },
                { name: "Docker", icon: FaDocker, level: 85, color: "#2496ED" },
                { name: "AWS", icon: FaAws, level: 80, color: "#FF9900" },
                { name: "Firebase", icon: SiFirebase, level: 75, color: "#FFCA28" },
                { name: "GitHub", icon: FaGithub, level: 90, color: "#181717" },
                { name: "NPM", icon: FaNpm, level: 88, color: "#CB3837" },
            ]
        },
        {
            title: "UI/UX",
            skills: [
                { name: "Chakra UI", icon: SiChakraui, level: 95, color: "#319795" },
                { name: "Tailwind CSS", icon: SiTailwindcss, level: 90, color: "#06B6D4" },
                { name: "Redux", icon: SiRedux, level: 85, color: "#764ABC" },
                { name: "Framer Motion", icon: SiFramer, level: 88, color: "#0055FF" },
            ]
        }
    ];

    return (
        <section id="skills" className="py-12 md:py-20 bg-transparent">
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
                            Skills & Technologies
                        </motion.h2>
                        <motion.p
                            className="text-lg text-muted-foreground max-w-[600px]"
                            variants={itemVariants}
                        >
                            A comprehensive overview of my technical expertise and proficiency levels
                        </motion.p>
                    </div>

                    {/* Skills Grid */}
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div key={category.title} variants={itemVariants} className="mb-12">
                            <div className="relative mb-8 text-center">
                                <h3 className="text-2xl font-bold text-primary inline-block pb-2">
                                    {category.title}
                                </h3>
                                <motion.div
                                    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] bg-primary rounded-full"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: '60px' }}
                                    transition={{ duration: 0.8, delay: 0.5 }}
                                    viewport={{ once: true }}
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.6,
                                            delay: (categoryIndex * 0.2) + (skillIndex * 0.1)
                                        }}
                                        viewport={{ once: true }}
                                    >
                                        <TiltCard
                                            icon={skill.icon}
                                            title={skill.name}
                                            level={skill.level}
                                            color={skill.color}
                                        />
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}

                    {/* Additional Skills */}
                    <motion.div variants={itemVariants}>
                        <div className="bg-transparent border-2 border-primary rounded-2xl p-8 text-center">
                            <h3 className="text-xl font-bold text-foreground mb-4">Additional Skills</h3>
                            <div className="flex flex-wrap justify-center gap-3">
                                {[
                                    "Agile/Scrum", "RESTful APIs", "Microservices", "CI/CD",
                                    "Responsive Design", "Performance Optimization", "Testing",
                                    "Code Review", "Mentoring", "Technical Writing"
                                ].map((skill, index) => (
                                    <motion.div
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: index * 0.1,
                                            type: "spring",
                                            stiffness: 100
                                        }}
                                        viewport={{ once: true }}
                                    >
                                        <span className="inline-block px-4 py-2 text-sm text-muted-foreground rounded-full bg-pink-500/10 border border-pink-500/20 hover:bg-primary hover:text-primary-foreground hover:-translate-y-0.5 transition-all duration-300 cursor-default">
                                            {skill}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
