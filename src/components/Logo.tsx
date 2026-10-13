
"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const Logo3D = () => {
    return (
        <motion.div
            className="text-lg md:text-xl font-bold cursor-pointer inline-block"
            style={{
                transformStyle: "preserve-3d",
                perspective: "1000px",
            }}
            whileHover={{
                rotateY: 15,
                rotateX: 5,
                scale: 1.1,
                textShadow: "0 5px 10px rgba(0,0,0,0.3)",
                transition: { type: "spring", stiffness: 200, damping: 15 },
            }}
        >
            <span className="text-primary font-bold">{"<"}</span>
            <span className="text-foreground">DevSagar</span>
            <span className="text-primary font-bold">{"/>"}</span>
        </motion.div>
    );
};

export default Logo3D;
