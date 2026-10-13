
"use client"

import { useState, useEffect } from 'react';
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';
import { cn } from '@/lib/utils';

interface NavLinkProps {
    children: React.ReactNode;
    to: string;
    isHome: boolean;
    onClose?: () => void;
}

const NavLink = ({ children, to, isHome, onClose }: NavLinkProps) => {
    const className = "px-3 py-1.5 rounded-md cursor-pointer hover:text-primary transition-colors font-medium text-inherit text-sm md:text-base";

    if (isHome) {
        return (
            <ScrollLink
                activeClass="text-primary font-semibold"
                to={to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={onClose}
                className={className}
            >
                {children}
            </ScrollLink>
        );
    }

    return (
        <NextLink
            href={to === 'home' ? '/' : `/#${to}`}
            onClick={onClose}
            className={className}
        >
            {children}
        </NextLink>
    );
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === "/";

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleColorMode = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { label: 'Home', to: 'home' },
        { label: 'About', to: 'about' },
        { label: 'Skills', to: 'skills' },
        { label: 'Projects', to: 'projects' },
        { label: 'Contact', to: 'contact' },
    ];

    return (
        <motion.div
            className={cn(
                "fixed top-0 w-full z-[1000] transition-all duration-300",
                scrolled ? "bg-white/80 dark:bg-black/60 backdrop-blur-md border-b border-white/20 dark:border-white/10 shadow-sm" : "bg-transparent"
            )}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="px-4">
                <div className="h-16 flex items-center justify-between max-w-7xl mx-auto">
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {isHome ? (
                            <ScrollLink to="home" spy={true} smooth={true} duration={500} className="cursor-pointer">
                                <Logo />
                            </ScrollLink>
                        ) : (
                            <NextLink href="/" className="cursor-pointer">
                                <Logo />
                            </NextLink>
                        )}
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-2">
                        {navItems.map((item) => (
                            <NavLink key={item.to} to={item.to} isHome={isHome}>
                                {item.label}
                            </NavLink>
                        ))}
                    </div>

                    {/* Theme Toggle & Mobile Menu Button */}
                    <div className="flex items-center gap-2">
                        <Button
                            size="icon"
                            variant="ghost"
                            onClick={toggleColorMode}
                            className="hover:bg-white/10 hover:text-primary"
                            aria-label="Toggle theme"
                        >
                            {mounted && (theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) ? <Sun size={20} /> : <Moon size={20} />}
                        </Button>

                        <div className="md:hidden">
                            <Button
                                size="icon"
                                variant="ghost"
                                onClick={() => setIsOpen(!isOpen)}
                                className="hover:bg-white/10 hover:text-primary"
                                aria-label="Toggle Menu"
                            >
                                {isOpen ? <X size={24} /> : <Menu size={24} />}
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className="md:hidden pb-4 overflow-hidden bg-background/95 backdrop-blur-xl border-b border-border rounded-b-2xl p-4 shadow-lg"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="flex flex-col space-y-3">
                                {navItems.map((item) => (
                                    <NavLink key={item.to} to={item.to} isHome={isHome} onClose={() => setIsOpen(false)}>
                                        {item.label}
                                    </NavLink>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

export default Navbar;
