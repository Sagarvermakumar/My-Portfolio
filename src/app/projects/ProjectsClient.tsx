"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import ProjectCard from "@/components/ProjectCard";
import Banner from "@/components/Banner";
import { projects } from "@/constants/projects";

const ProjectsClient = () => {
    const router = useRouter();

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
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    return (
        <div className="min-h-screen bg-transparent text-foreground py-20 px-4 md:px-8 relative">
            <div className="fixed top-0 left-0 w-full h-full -z-10">
                <Banner />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <button
                    onClick={() => router.push('/#projects')}
                    className="flex items-center gap-2 mb-8 text-muted-foreground hover:text-primary transition-colors bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm"
                >
                    <ArrowLeft className="w-5 h-5" /> Back to Home
                </button>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="text-center mb-16">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">All Projects</h1>
                        <p className="text-muted-foreground text-sm sm:text-base max-w-lg mx-auto">
                            Exploring production web systems, real-time automation tools, and full-stack software built by Sagar Verma.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <motion.div
                                key={project.id}
                                variants={itemVariants}
                                whileHover={{ y: -5 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ProjectCard project={project} />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ProjectsClient;
