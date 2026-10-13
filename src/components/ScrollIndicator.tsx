
"use client"

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const ScrollIndicator = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [currentSection, setCurrentSection] = useState('home');

    const sections = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'contact', label: 'Contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;

            // Show indicator when scrolled past hero section
            setIsVisible(scrollPosition > windowHeight * 0.5);

            // Determine current section based on scroll position
            sections.forEach((section) => {
                const element = document.getElementById(section.id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
                        setCurrentSection(section.id);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const getNextSection = () => {
        const currentIndex = sections.findIndex(s => s.id === currentSection);
        return currentIndex < sections.length - 1 ? sections[currentIndex + 1] : null;
    };

    const currentSectionIndex = sections.findIndex(s => s.id === currentSection);
    // Unused logic for prev section kept but not rendered as per original code

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed right-4 top-1/2 -translate-y-1/2 z-[1000]"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className={cn(
                        "flex flex-col gap-2 p-2 rounded-full",
                        "bg-white/10 backdrop-blur-md border border-white/20 shadow-lg"
                    )}>
                        {/* Scroll to Top */}
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Button
                                size="icon"
                                variant="ghost"
                                className="rounded-full text-foreground hover:bg-primary hover:text-white w-8 h-8"
                                onClick={scrollToTop}
                            >
                                <ChevronUp className="h-4 w-4" />
                                <span className="sr-only">Scroll to top</span>
                            </Button>
                        </motion.div>

                        {/* Section Indicators */}
                        {sections.map((section) => (
                            <motion.div
                                key={section.id}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Link
                                    to={section.id}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    <div
                                        title={section.label}
                                        className={cn(
                                            "w-3 h-3 rounded-full cursor-pointer transition-all duration-300 relative mx-auto",
                                            currentSection === section.id
                                                ? "bg-primary scale-125"
                                                : "bg-gray-400 hover:bg-primary hover:scale-125"
                                        )}
                                    />
                                </Link>
                            </motion.div>
                        ))}

                        {/* Scroll Down */}
                        {getNextSection() && (
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Link
                                    to={getNextSection()?.id || ''}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    <Button
                                        size="icon"
                                        variant="ghost"
                                        className="rounded-full text-foreground hover:bg-primary hover:text-white w-8 h-8"
                                    >
                                        <ChevronDown className="h-4 w-4" />
                                        <span className="sr-only">Next section</span>
                                    </Button>
                                </Link>
                            </motion.div>
                        )}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ScrollIndicator;
