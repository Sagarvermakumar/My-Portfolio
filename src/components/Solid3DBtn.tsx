
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Solid3DBtnProps {
    label: string;
    onClick?: () => void;
    icon?: ReactNode;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    className?: string;
}

const Solid3DBtn = ({ label, onClick, icon, type = "button", disabled = false, className = "" }: Solid3DBtnProps) => {
    const primary = "#ff0080";

    return (
        <motion.button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={`group relative px-6 py-3 md:px-8 md:py-3.5 text-white font-bold rounded-xl flex items-center justify-center gap-2 text-lg disabled:opacity-60 disabled:cursor-not-allowed ${className}`}
            style={{
                background: `linear-gradient(to bottom, ${primary}, ${primary}90)`,
                border: `2px solid ${primary}aa`,
                boxShadow: `0 4px 0 ${primary}aa, 0 8px 15px ${primary}55, inset 0 2px 6px rgba(255,255,255,0.25)`,
                transformPerspective: 1000,
            }}
            whileHover={{
                y: -4,
                scale: 1.06,
                rotateX: 5,
                rotateY: -5,
                boxShadow: `0 6px 0 ${primary}, 0 10px 20px ${primary}66, inset 0 2px 6px rgba(255,255,255,0.3)`,
                backgroundImage: `linear-gradient(to bottom, ${primary}, ${primary}bb)`,
            }}
            whileTap={{
                y: 2,
                scale: 0.98,
                rotateX: 0,
                rotateY: 0,
                boxShadow: `0 2px 0 ${primary}99, 0 6px 12px ${primary}44, inset 0 2px 4px rgba(255,255,255,0.2)`,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
        >
            <span className="relative z-10 flex items-center gap-2">
                {icon && <span className="text-xl">{icon}</span>}
                {label}
            </span>
        </motion.button>
    );
};

export default Solid3DBtn;
