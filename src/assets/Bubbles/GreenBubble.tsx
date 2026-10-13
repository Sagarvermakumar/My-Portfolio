
"use client";

import { motion } from "framer-motion";

const GreenBubble = () => {
    return (
        <motion.div
            className="absolute top-[30%] left-[80%] w-[150px] h-[150px] bg-green-500 rounded-full opacity-25 -z-0 blur-[60px]"
            animate={{ x: [0, -400, 0], y: [0, 100, 0] }}
            transition={{
                duration: 80,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
            }}
        />
    );
};
export default GreenBubble;
