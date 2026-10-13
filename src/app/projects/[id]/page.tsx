import { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/constants/projects";
import { siteConfig } from "@/constants/site";
import ProjectDetailsClient from "./ProjectDetailsClient";

interface PageProps {
    params: {
        id: string;
    };
}

export async function generateStaticParams() {
    return projects.map((p) => ({
        id: p.id.toString(),
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const project = projects.find((p) => p.id === Number(params.id));

    if (!project) {
        return {
            title: "Project Not Found",
            description: "The requested project details could not be found.",
        };
    }

    const title = `${project.title} | ${siteConfig.name}`;
    const description = project.description || project.fullDescription.slice(0, 160);
    const url = `${siteConfig.url}/projects/${project.id}`;

    return {
        title,
        description,
        alternates: {
            canonical: url,
        },
        openGraph: {
            title,
            description,
            url,
            type: "article",
            images: [
                {
                    url: project.image,
                    width: 1200,
                    height: 630,
                    alt: project.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [project.image],
        },
    };
}

export default function ProjectPage({ params }: PageProps) {
    const project = projects.find((p) => p.id === Number(params.id));

    if (!project) {
        notFound();
    }

    return <ProjectDetailsClient id={params.id} />;
}

