
"use client";


import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-scroll";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Outline3DBtn from "../components/Outline3DBtn";
import Solid3DBtn from "../components/Solid3DBtn";
import { Globe, Plug, Download } from "lucide-react";

const EarthCanvas = dynamic(() => import("../components/canvas/Earth"), {
    ssr: false,
    loading: () => (
        <div className="w-full h-full flex items-center justify-center">
            <div className="w-12 h-12 rounded-full border-4 border-primary border-t-transparent animate-spin" />
        </div>
    ),
});

const Hero = () => {
    const roles = [
        "MERN Stack Developer",
        "AI Automation Engineer",
        "React Native App Developer",
        "Next.js Frontend Developer",
        "Node.js Backend Developer",
    ];

    const [textRole] = useTypewriter({
        words: roles,
        loop: 0,
        delaySpeed: 2000,
        typeSpeed: 100,
        deleteSpeed: 50,
    });

    // Scroll animation
    const { scrollYProgress } = useScroll();

    // left slides left, right slides right, opacity decreases
    const leftX = useTransform(scrollYProgress, [0, 0.2], ["0%", "-100%"]);
    const rightX = useTransform(scrollYProgress, [0, 0.2], ["0%", "100%"]);
    const sectionOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    return (
        <div id="home" className="min-h-screen relative overflow-hidden px-4 sm:px-6 flex items-center pt-20 md:pt-0">
            <div className="max-w-[1200px] w-full mx-auto flex flex-col md:flex-row items-center justify-between min-h-screen md:min-h-[unset] gap-8 md:gap-12 py-10 md:py-0">
                {/* Left Content */}
                <motion.div
                    style={{ x: leftX, opacity: sectionOpacity }}
                    className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left z-10"
                >
                    <div className="flex flex-col items-center md:items-start gap-4 md:gap-6 w-full">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                            Hi, I'm{" "}
                            <span className="block sm:inline bg-clip-text text-transparent bg-gradient-to-r from-primary via-orange-500 to-pink-600">
                                Sagar Kumar
                            </span>
                        </h1>

                        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-orange-500 h-[30px] sm:h-[40px]">
                            <span>{textRole}</span>
                            <Cursor cursorStyle="|" />
                        </h2>

                        <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-[500px] md:max-w-[600px] leading-relaxed px-2 md:px-0">
                            I build modern web and mobile applications using MERN, Next.js, and React Native,
                            and create scalable backend systems with AI automation to solve real-world problems.
                        </p>

                        <div className="flex flex-wrap gap-4 w-full pt-4 items-center justify-center md:justify-start">
                            <Link to="projects" spy={true} smooth={true} duration={500} className="cursor-pointer">
                                <Solid3DBtn label="View My Work" icon={<Globe className="w-5 h-5" />} />
                            </Link>
                            <a href="/resume.pdf" download="Sagar_Kumar_Resume.pdf" target="_blank" rel="noopener noreferrer">
                                <Outline3DBtn label="Download CV" icon={<Download className="w-5 h-5" />} />
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Right Earth Canvas */}
                <motion.div
                    style={{ x: rightX, opacity: sectionOpacity }}
                    className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[600px] h-[300px] sm:h-[400px] md:h-[600px] relative mt-0 md:mt-0"
                >
                    <EarthCanvas />
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
