
export const projects = [
    {
        id: 1,
        title: "URMS - University Result Management & Examination System",
        description: "Enterprise examination, marksheet generation, and student result processing system with QR security.",
        fullDescription: "A high-concurrency University Result Management System (URMS) designed to automate examination operations across colleges and departments. Built with an event-driven architecture using Express 5, TypeScript, Prisma ORM, and PostgreSQL. Features BullMQ background workers with Redis for non-blocking grade computations, Socket.io for live calculation tracking, and Puppeteer + pdf-lib for dynamic, cryptographic QR-coded marksheets and digital certificates.",
        category: "Enterprise Full Stack",
        date: "2024",
        featured: true,
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=500&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200",
            "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200",
            "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200",
            "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200"
        ],
        technologies: ["Node.js", "Express 5", "TypeScript", "Prisma ORM", "PostgreSQL", "Redis & BullMQ", "Socket.io", "Puppeteer & pdf-lib", "ExcelJS", "Docker"],
        features: [
            "Dynamic formula-based grading engine (expr-eval) supporting relative/absolute GPA & CGPA",
            "High-throughput asynchronous batch processing with BullMQ and Redis queues",
            "Real-time socket notifications for exam moderation and result computation progress",
            "Tamper-proof PDF marksheet & certificate generation with encrypted QR & Barcode verification (bwip-js)",
            "Bulk student registration & marks entry via Excel/CSV with strict data validation",
            "Granular Role-Based Access Control (Super Admin, Examination Controller, Faculty Evaluators, Students)"
        ],
        github: "https://github.com/Sagarvermakumar",
        demoRequestText: "Hi Sagar, I would like to request a live demo for URMS (University Result Management System).",
        challenges: "Processing tens of thousands of student exam marks concurrently while preventing race conditions, long HTTP timeouts, and ensuring 100% calculation accuracy across complex grading schemes.",
        solution: "Decoupled computation from the HTTP cycle using BullMQ workers over Redis, handled database writes with PostgreSQL atomic transactions, and pushed real-time progress updates via Socket.io."
    },
    {
        id: 2,
        title: "WhatsApp Suite - Multi-Device Automation & Marketing CRM",
        description: "Scalable multi-device WhatsApp automation, bulk campaign scheduler, and contact notebook CRM.",
        fullDescription: "A complete WhatsApp marketing and CRM suite engineered with Node.js, Express, and Baileys Multi-Device API. Supports equal round-robin message distribution across multiple connected sessions, scheduled campaign dispatching via background cron workers, multi-media broadcasting (images, videos, documents, audio up to 50MB), Excel contact bulk import with automatic 1-day reminder scheduling, and an interactive contact notebook CRM with real-time delivery reports.",
        category: "Automation & CRM",
        date: "2024",
        featured: true,
        image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&h=500&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=1200",
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200",
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200"
        ],
        technologies: ["Node.js", "Express", "TypeScript", "Baileys API", "Prisma ORM", "PostgreSQL", "React", "Tailwind CSS", "Multer", "Cron"],
        features: [
            "Equal round-robin load distribution across multiple active WhatsApp device sessions",
            "Excel contact bulk import with automatic 1-day meeting/call reminder generation",
            "Multi-format media broadcasting (text, images, videos, PDFs/docs, audio up to 50MB)",
            "Background campaign scheduler supporting daily, weekly, and monthly automated cycles",
            "Contact CRM notebook with customer interaction history, horizontal tabs, and notes",
            "Granular employee management with Administrator, Manager, Operator, and Viewer roles",
            "Accurate delivery reports showing real-time sent vs failed message metrics"
        ],
        github: "https://github.com/Sagarvermakumar",
        demoRequestText: "Hi Sagar, I would like to request a live demo for WhatsApp Suite (Automation & Marketing CRM).",
        challenges: "Preventing account bans and maintaining persistent WebSocket connections across multiple phone sessions during large-volume broadcasts.",
        solution: "Implemented smart message throttling with randomized delays, device session health checking, automatic re-connection handlers, and round-robin message distribution."
    },
    {
        id: 3,
        title: "NewsDesk CMS - Dynamic Digital News & Publishing Platform",
        description: "High-performance digital news portal and editorial CMS with Redis caching and Cloudinary media.",
        fullDescription: "An enterprise-grade news publication platform built for high-traffic media outlets using Express 5, TypeScript, Prisma ORM 7, and PostgreSQL. Features a dual-module architecture: a rich administrative CMS for journalists to draft, edit, tag, and publish multimedia articles, and an ultra-fast, SEO-optimized public portal with Redis in-memory caching, automated RSS feeds (xmlbuilder2), Cloudinary image delivery, and Resend newsletter broadcasting.",
        category: "Media & CMS",
        date: "2024",
        featured: true,
        image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=500&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200",
            "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?w=1200",
            "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=1200"
        ],
        technologies: ["Express 5", "Node.js", "Prisma 7", "PostgreSQL", "Redis (ioredis)", "Cloudinary CDN", "Resend", "Winston", "Docker", "Next.js"],
        features: [
            "Full-featured Editorial CMS with draft, review, scheduling, and live publishing workflows",
            "High-speed article retrieval with Redis in-memory caching for breaking news spikes",
            "Optimized cloud media pipeline via Cloudinary & Multer with automatic compression",
            "Automated subscriber newsletter broadcasting powered by Resend API",
            "Dynamic RSS/XML feed generation (xmlbuilder2) for Google News and syndication",
            "Comprehensive security suite with Helmet, express-rate-limit, and Winston audit logging",
            "Interactive reader engagement with category filtering, search, comments, and bookmarks"
        ],
        github: "https://github.com/Sagarvermakumar",
        demoRequestText: "Hi Sagar, I would like to request a live demo for NewsDesk CMS (Digital News & Publishing Platform).",
        challenges: "Handling sudden traffic spikes when breaking news goes viral without database exhaustion or slow First Contentful Paint.",
        solution: "Designed a multi-tier caching architecture with Redis for trending and category feeds, offloaded media delivery to Cloudinary CDN, and containerized the backend with Docker."
    }
];
