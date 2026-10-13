import { siteConfig } from "@/constants/site";

export default function JsonLd() {
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: siteConfig.name,
        url: siteConfig.url,
        image: `${siteConfig.url}/profile.png`,
        jobTitle: siteConfig.author.role,
        email: siteConfig.author.email,
        telephone: siteConfig.author.phone,
        sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
        knowsAbout: [
            "React.js",
            "Next.js",
            "Node.js",
            "Express.js",
            "Prisma ORM",
            "PostgreSQL",
            "MongoDB",
            "TypeScript",
            "JavaScript",
            "REST APIs",
            "Tailwind CSS",
            "Full Stack Web Development",
            "Database Architecture",
        ],
        address: {
            "@type": "PostalAddress",
            addressCountry: siteConfig.author.addressLocality,
        },
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: `${siteConfig.name} - Full Stack Developer Portfolio`,
        url: siteConfig.url,
        description: siteConfig.description,
        author: {
            "@type": "Person",
            name: siteConfig.name,
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
        </>
    );
}
