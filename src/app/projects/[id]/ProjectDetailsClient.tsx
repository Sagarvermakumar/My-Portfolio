"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Layers, Code2, AlertCircle, CheckCircle, MessageSquare } from "lucide-react";
import { projects } from "@/constants/projects";
import Solid3DBtn from "@/components/Solid3DBtn";
import Outline3DBtn from "../../../components/Outline3DBtn";
import Banner from "@/components/Banner";

interface ProjectDetailsClientProps {
    id: string;
}

const ProjectDetailsClient = ({ id }: ProjectDetailsClientProps) => {
    const router = useRouter();
    const [project, setProject] = useState<any>(null);

    useEffect(() => {
        if (id) {
            const foundProject = projects.find((p) => p.id === Number(id));
            if (foundProject) {
                setProject(foundProject);
            }
        }
    }, [id]);

    if (!project) return <div className="min-h-screen flex items-center justify-center text-lg">Loading project details...</div>;

    const demoUrl = `https://wa.me/918434131226?text=${encodeURIComponent(
        project.demoRequestText || `Hi Sagar, I would like to request a live demo for ${project.title}.`
    )}`;

    const cardStyle = "bg-white/80 dark:bg-white/5 border border-white/20 dark:border-white/10 backdrop-blur-md shadow-md rounded-2xl p-6 md:p-8";

    return (
        <div className="min-h-screen bg-transparent text-foreground py-12 md:py-16 px-4 md:px-8 relative">
            <div className="fixed top-0 left-0 w-full h-full -z-10">
                <Banner />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <button
                    onClick={() => router.push('/#projects')}
                    className="flex items-center gap-2 mb-6 text-sm font-medium text-muted-foreground hover:text-primary transition-colors bg-white/10 dark:bg-white/5 px-3.5 py-1.5 rounded-lg backdrop-blur-sm border border-border/40"
                >
                    <ArrowLeft className="w-4 h-4" /> Back to Projects
                </button>

                {/* Hero Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold tracking-wider uppercase text-xs mb-2">
                            {project.category}
                        </span>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mt-1 mb-4 leading-snug tracking-tight text-foreground">
                            {project.title}
                        </h1>
                        <p className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed max-w-xl">
                            {project.fullDescription}
                        </p>

                        <div className="flex flex-wrap gap-3.5">
                            <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                                <Solid3DBtn label="Request Live Demo" icon={<MessageSquare className="w-4 h-4" />} />
                            </a>
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <Outline3DBtn label="Source Code" icon={<Github className="w-4 h-4" />} />
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative h-[280px] sm:h-[350px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl border border-white/20 dark:border-white/10"
                    >
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                </div>

                {/* Tech Stack */}
                <div className="mb-14">
                    <h2 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-2 text-foreground">
                        <Code2 className="w-5 h-5 text-primary" /> Technologies Used
                    </h2>
                    <div className="flex flex-wrap gap-2.5">
                        {project.technologies.map((tech: string) => (
                            <span
                                key={tech}
                                className="px-3 py-1.5 bg-white/70 dark:bg-white/5 border border-white/20 dark:border-white/10 backdrop-blur-md rounded-lg text-xs md:text-sm font-medium shadow-sm"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Features & Challenges Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <div className={cardStyle}>
                        <h2 className="text-lg md:text-xl font-bold mb-4 flex items-center gap-2 text-foreground">
                            <Layers className="w-5 h-5 text-primary" /> Key Features
                        </h2>
                        <ul className="space-y-3">
                            {project.features.map((feature: string, index: number) => (
                                <li key={index} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col gap-6">
                        <div className={cardStyle}>
                            <h3 className="text-base md:text-lg font-bold mb-2 flex items-center gap-2 text-orange-500">
                                <AlertCircle className="w-5 h-5" /> Challenge
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {project.challenges || "One of the main challenges was ensuring scalability while maintaining high performance under load."}
                            </p>
                        </div>
                        <div className={cardStyle}>
                            <h3 className="text-base md:text-lg font-bold mb-2 flex items-center gap-2 text-green-500">
                                <CheckCircle className="w-5 h-5" /> Solution
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {project.solution || "Implemented efficient caching strategies and optimized database queries to resolve the bottlenecks."}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Image Gallery */}
                <div className="mb-16">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-center text-foreground">Project Gallery</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {(project.gallery && project.gallery.length > 0 ? project.gallery : Array(6).fill(project.image)).map((img: string, idx: number) => (
                            <motion.div
                                key={idx}
                                whileHover={{ scale: 1.02 }}
                                className="relative aspect-video rounded-xl overflow-hidden shadow-md border border-white/20 dark:border-white/10 cursor-pointer"
                            >
                                <Image
                                    src={img}
                                    alt={`Gallery ${idx + 1}`}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className={`text-center py-12 ${cardStyle}`}>
                    <h2 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">Interested in a Live Walkthrough?</h2>
                    <p className="text-sm sm:text-base text-muted-foreground mb-6 max-w-lg mx-auto leading-relaxed">
                        Experience the complete system in action. Schedule a personal demo or discuss custom tailoring for your institution or business.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3.5">
                        <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                            <Solid3DBtn label="Request Demo on WhatsApp" icon={<MessageSquare className="w-4 h-4" />} />
                        </a>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Outline3DBtn label="View Source Code" icon={<Github className="w-4 h-4" />} />
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProjectDetailsClient;
