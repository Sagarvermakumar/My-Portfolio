
"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { BlueBubble } from "../assets/Bubbles/BlueBubble";
import GreenBubble from "../assets/Bubbles/GreenBubble";
import PurpleBubble from "../assets/Bubbles/PurpleBubble";
import RedBubble from "../assets/Bubbles/RedBubble";

const StarsCanvas = dynamic(() => import("./canvas/Stars"), {
    ssr: false,
});

const Banner = () => {
    return (
        <section className="relative w-full h-full min-h-screen bg-slate-50/60 dark:bg-black overflow-hidden perspective-1000">
            {/* Luminous Ambient Glow Orbs for both Light and Dark mode */}
            <div className="absolute -top-[10%] left-[5%] w-[500px] h-[500px] bg-blue-400/25 dark:bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-[25%] right-[5%] w-[450px] h-[450px] bg-purple-400/25 dark:bg-purple-600/15 rounded-full blur-[130px] pointer-events-none" />
            <div className="absolute top-[60%] left-[10%] w-[550px] h-[550px] bg-pink-400/20 dark:bg-pink-600/10 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-[5%] right-[20%] w-[450px] h-[450px] bg-emerald-400/20 dark:bg-emerald-600/10 rounded-full blur-[130px] pointer-events-none" />

            {/* Dynamic Animated Bubbles */}
            <BlueBubble />
            <GreenBubble />
            <PurpleBubble />
            <RedBubble />

            {/* Stars Canvas (shines in dark mode) */}
            <div className="absolute top-0 left-0 w-full h-full z-0">
                <StarsCanvas />
            </div>

            {/* Crisp Modern Dot Grid Overlay (visible in light and dark mode) */}
            <div className="absolute top-0 left-0 w-full h-full z-[1] pointer-events-none">
                <div
                    className="absolute top-0 left-0 w-full h-full opacity-60 dark:opacity-20"
                    style={{
                        backgroundImage: `radial-gradient(currentColor 1px, transparent 1px)`,
                        backgroundSize: "28px 28px",
                        color: "rgba(100, 116, 139, 0.4)",
                    }}
                />
            </div>
        </section>
    );
};

export default Banner;
