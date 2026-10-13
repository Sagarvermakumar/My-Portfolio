"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/constants/projects";
import Solid3DBtn from "@/components/Solid3DBtn";
import Link from "next/link";

const Projects = () => {
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

    return (
        <section id="projects" className="py-12 md:py-20 bg-transparent">
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
                            Featured Projects
                        </motion.h2>
                        <motion.p
                            className="text-lg text-muted-foreground max-w-[600px]"
                            variants={itemVariants}
                        >
                            A showcase of my recent work and personal projects
                        </motion.p>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.slice(0, 3).map((project, index) => (
                            <motion.div
                                key={project.id}
                                variants={itemVariants}
                                whileHover={{ y: -5 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ProjectCard
                                    project={project}
                                />
                            </motion.div>
                        ))}
                    </div>

                    {/* View More Button */}
                    <motion.div
                        className="text-center mt-12"
                        variants={itemVariants}
                    >
                        <Link href="/projects">
                            <Solid3DBtn label="View All Projects" icon={<ArrowRight className="w-5 h-5" />} />
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
