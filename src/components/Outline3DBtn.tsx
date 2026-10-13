
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Outline3DBtnProps {
    label: string;
    onClick?: () => void;
    icon?: ReactNode;
}

const Outline3DBtn = ({ label, onClick, icon }: Outline3DBtnProps) => {
    return (
        <motion.button
            onClick={onClick}
            className="group relative px-6 py-3 md:px-8 md:py-3.5 bg-white dark:bg-[#121212] text-[#ff0080] font-bold border-2 border-[#ff0080] rounded-2xl shadow-[0_6px_0_#99004d] active:shadow-none active:translate-y-[6px] transition-all flex items-center justify-center gap-2 text-lg hover:bg-pink-50 dark:hover:bg-[#1a000e]"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
        >
            <span className="relative z-10 flex items-center gap-2">
                {icon && <span className="text-xl">{icon}</span>}
                {label}
            </span>
        </motion.button>
    );
};

export default Outline3DBtn;
