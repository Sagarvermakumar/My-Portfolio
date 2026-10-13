
"use client";

import { motion } from "framer-motion";

const PurpleBubble = () => {
    return (
        <motion.div
            className="absolute top-[60%] left-[10%] w-[180px] h-[180px] bg-purple-500 rounded-full opacity-25 -z-0 blur-[60px]"
            animate={{ x: [0, 200, 0], y: [0, -50, 0] }}
            transition={{
                duration: 60,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
            }}
        />
    );
};
export default PurpleBubble;
