
"use client"

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import Navbar from './Navbar';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
import Contact from '../sections/Contact';
import ScrollIndicator from './ScrollIndicator';
import Banner from './Banner';
import Footer from './Footer';

const MotionBox = motion.div;

const HomeClient = () => {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const isDark = !mounted || resolvedTheme === "dark";

    return (
        <>
            <MotionBox
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="min-h-screen flex flex-col"
            >
                <div
                    className="fixed top-0 left-0 w-full h-full -z-10 transition-colors duration-500"
                    style={{
                        background: isDark ? "rgba(0, 153, 51, 0.05)" : "#f8fafc"
                    }}
                >
                    <Banner />
                </div>

                {/* Navigation */}
                <Navbar />

                {/* Main Content */}
                <MotionBox
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Hero Section */}
                    <Hero />

                    {/* About Section */}
                    <About />

                    {/* Skills Section */}
                    <Skills />

                    {/* Projects Section */}
                    <Projects />

                    {/* Contact Section */}
                    <Contact />

                    <Footer />
                </MotionBox>

                {/* Floating Scroll Indicator */}
                <ScrollIndicator />
            </MotionBox>
        </>
    );
};

export default HomeClient;
