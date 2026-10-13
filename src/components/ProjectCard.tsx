
"use client";

import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";
import { MessageSquare, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const ProjectCard = ({ project }: any) => {
    const demoUrl = `https://wa.me/918434131226?text=${encodeURIComponent(
        project.demoRequestText || `Hi Sagar, I would like to request a live demo for ${project.title}.`
    )}`;

    return (
        <div className="block h-full">
            <motion.div
                className="relative h-full bg-white/70 dark:bg-white/5 border border-white/20 backdrop-blur-md shadow-lg rounded-2xl overflow-hidden group flex flex-col justify-between"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{
                    y: -8,
                    boxShadow: "0 20px 40px rgba(255, 0, 128, 0.2)",
                    borderColor: "#ff0080",
                }}
            >
                <Link href={`/projects/${project.id}`} className="block">
                    <div className="relative overflow-hidden h-[210px] w-full cursor-pointer">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-pink-600/80 to-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="flex flex-col items-center gap-2 text-white">
                                <FaCode className="w-8 h-8" />
                                <span className="font-bold">View Full Project Details</span>
                            </div>
                        </div>

                        {/* Featured Badge */}
                        {project.featured && (
                            <div className="absolute top-3 right-3">
                                <Badge className="bg-pink-500 hover:bg-pink-600 text-white border-0 shadow-md">
                                    Featured
                                </Badge>
                            </div>
                        )}
                    </div>
                </Link>

                <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                    <div className="flex flex-col gap-2">
                        <Link href={`/projects/${project.id}`}>
                            <h3 className="text-xl font-bold text-foreground hover:text-primary transition-colors cursor-pointer line-clamp-2">
                                {project.title}
                            </h3>
                        </Link>
                        <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-2">
                            {project.technologies.slice(0, 4).map((tech: string) => (
                                <span
                                    key={tech}
                                    className="text-xs px-2.5 py-0.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-muted-foreground font-medium"
                                >
                                    {tech}
                                </span>
                            ))}
                            {project.technologies.length > 4 && (
                                <span className="text-xs px-2 py-0.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-muted-foreground font-medium">
                                    +{project.technologies.length - 4} More
                                </span>
                            )}
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-between pt-4 border-t border-border/40 gap-2 mt-auto">
                        <a
                            href={demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-pink-500 hover:bg-pink-600 text-white text-xs font-semibold shadow-sm transition-all duration-200"
                        >
                            <MessageSquare className="w-3.5 h-3.5" /> Request Demo
                        </a>

                        <Link
                            href={`/projects/${project.id}`}
                            className="text-sm font-semibold text-pink-500 hover:text-pink-600 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1"
                        >
                            Details <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ProjectCard;
