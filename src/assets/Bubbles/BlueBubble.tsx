
"use client";

import { motion } from "framer-motion";

export const BlueBubble = () => {
    return (
        <motion.div
            className="absolute top-[1%] left-[12%] w-[120px] h-[120px] bg-blue-500 rounded-full opacity-25 -z-0 blur-[60px]"
            animate={{ x: [0, 1400, 0, 0], y: [0, 0, 20, 0] }}
            transition={{
                duration: 100,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
            }}
        />
    );
};
