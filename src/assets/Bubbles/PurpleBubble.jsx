import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";


const MotionBox = motion(Box)

const PurpleBubble = () => {
  return (
  <MotionBox
        position="absolute"
        bottom="10%"
        right="-2%"
        w="150px"
        h="150px"
        bg="purple"
        borderRadius="full"
        filter="blur(60px)"
        opacity={0.3}
        animate={{ x: [0, 20, -20, 0], y: [0, -30, 30, 0] }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        zIndex={0}
      />
  )
}

export default PurpleBubble