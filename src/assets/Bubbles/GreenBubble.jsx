import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";


const MotionBox = motion(Box)



const GreenBubble = () => {
  return (
   
      <MotionBox
        position="absolute"
        top="30%"
        left="55%"
        w="150px"
        h="150px"
        bg="green"
        borderRadius="full"
        filter="blur(70px)"
        opacity={0.5}
        animate={{ x: [0, -40, 40, 0], y: [0, 40, -20, 0] }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        zIndex={0}
      />
  )
}

export default GreenBubble