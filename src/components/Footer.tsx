
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const Footer = () => {
    return (
        <div className="bg-white/70 dark:bg-white/20 backdrop-blur-3xl text-foreground py-10 px-6 border-t border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)]">
            <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-start gap-6">
                {/* About / Name */}
                <div className="flex flex-col gap-2">
                    <p className="font-bold text-xl">Sagar Verma</p>
                    <p className="text-sm max-w-[300px] text-muted-foreground">
                        MERN Stack Developer building scalable web & mobile applications with React, Node.js, Express, and MongoDB.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="flex flex-col gap-2">
                    <p className="font-bold">Quick Links</p>
                    <Link href="/#home" className="hover:text-primary transition-colors">Home</Link>
                    <Link href="/#about" className="hover:text-primary transition-colors">About</Link>
                    <Link href="/#skills" className="hover:text-primary transition-colors">Skills</Link>
                    <Link href="/#projects" className="hover:text-primary transition-colors">Projects</Link>
                    <Link href="/#contact" className="hover:text-primary transition-colors">Contact</Link>
                </div>

                {/* Social & Contact */}
                <div className="flex flex-col gap-2">
                    <p className="font-bold">Connect</p>
                    <div className="flex gap-3">
                        <Button asChild variant="ghost" size="icon" className="hover:bg-white/10 hover:text-primary">
                            <Link href="https://github.com/Sagarvermakumar" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <FaGithub size={20} />
                            </Link>
                        </Button>
                        <Button asChild variant="ghost" size="icon" className="hover:bg-white/10 hover:text-primary">
                            <Link href="https://www.linkedin.com/in/sagar-kumar-479a92219/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <FaLinkedin size={20} />
                            </Link>
                        </Button>
                        <Button asChild variant="ghost" size="icon" className="hover:bg-white/10 hover:text-primary">
                            <Link href="mailto:sksagarkumarverma@gmail.com" aria-label="Email">
                                <FaEnvelope size={20} />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <p className="text-center pt-10 text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} Sagar Verma. All rights reserved.
            </p>
        </div>
    );
};

export default Footer;
