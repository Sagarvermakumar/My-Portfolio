
"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";

interface TiltCardProps {
    icon: IconType;
    title: string;
    level: number;
    color: string;
}

const TiltCard = ({ icon: Icon, title, level, color }: TiltCardProps) => {
    return (
        <motion.div
            className="relative p-6 rounded-2xl bg-white/70 dark:bg-white/5 border border-white/20 backdrop-blur-md shadow-lg overflow-hidden flex flex-col items-center justify-center gap-4 group hover:shadow-xl transition-all duration-300"
            whileHover={{ y: -5, rotateX: 5, rotateY: 5 }}
            style={{ perspective: 1000 }}
        >
            <div
                className="text-5xl drop-shadow-md transition-transform duration-300 group-hover:scale-110"
                style={{ color: color }}
            >
                <Icon />
            </div>

            <div className="flex flex-col items-center gap-2 w-full">
                <h3 className="text-lg font-bold text-foreground">{title}</h3>

                <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full rounded-full shadow-sm"
                        style={{ backgroundColor: color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${level}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                    />
                </div>
                <span className="text-xs font-medium text-muted-foreground self-end">{level}%</span>
            </div>
        </motion.div>
    );
};

export default TiltCard;
