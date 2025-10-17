import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";


const MotionBox = motion(Box)


const RedBubble = () => {
  return (
   

    
      <MotionBox
        position="absolute"
        bottom="8%"
        left="15%"
        w="150px"
        h="150px"
        bg="red"
        borderRadius="full"
        filter="blur(60px)"
        opacity={0.3}
        animate={{ x: [0, 10, -10, 0], y: [0, -350, 200, 0] }}
        transition={{
          duration: 40,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        zIndex={0}
      />
  )
}

export default RedBubble