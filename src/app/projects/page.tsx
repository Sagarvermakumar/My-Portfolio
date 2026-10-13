import { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
    title: "All Projects | Sagar Verma - Full Stack Developer",
    description:
        "Explore full-stack web applications, database architectures, and real-time systems engineered by Sagar Verma, including URMS, WhatsApp CRM Suite, and NewsDesk CMS.",
    openGraph: {
        title: "All Projects | Sagar Verma - Full Stack Developer",
        description:
            "Explore full-stack web applications, database architectures, and real-time systems engineered by Sagar Verma.",
    },
};

export default function AllProjectsPage() {
    return <ProjectsClient />;
}

