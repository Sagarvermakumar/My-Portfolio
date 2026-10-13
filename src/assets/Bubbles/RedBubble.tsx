
"use client";

import { motion } from "framer-motion";

const RedBubble = () => {
    return (
        <motion.div
            className="absolute bottom-[10%] right-[20%] w-[220px] h-[220px] bg-red-500 rounded-full opacity-25 -z-0 blur-[60px]"
            animate={{ x: [0, -100, 0], y: [0, 100, 0] }}
            transition={{
                duration: 90,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
            }}
        />
    );
};
export default RedBubble;
