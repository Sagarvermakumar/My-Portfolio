import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";


const MotionBox = motion(Box)


export const BlueBubble = () => {
  return (
    <>
      {/* 🔮 Neon Glow Background Shapes */}
      <MotionBox
        position="absolute"
        top="1%"
        left="12%"
        w="200px"
        h="200px"
        bg="blue"
        borderRadius="full"
        filter="blur(60px)"
        opacity={0.25}
        animate={{ x: [0, 1400, 0, 0], y: [0, 0, 20, 0] }}
        transition={{
          duration: 100,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        zIndex={0}
      />
    </>
  );
};