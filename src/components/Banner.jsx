"use client";

import { Box, useColorModeValue } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { motion } from "framer-motion";
import { BlueBubble } from "../assets/Bubbles/BlueBubble";
import GreenBubble from "../assets/Bubbles/GreenBubble";
import PurpleBubble from "../assets/Bubbles/PurpleBubble";
import RedBubble from "../assets/Bubbles/RedBubble";
import StarsCanvas from "./canvas/Stars";

const MotionBox = motion(Box);
const move = keyframes`
  0% { background-position: 0 0; }
  100% { background-position: 200px 0; }
`;

const Banner = () => {
  const gridLineColor = useColorModeValue(
    "rgba(0,0,0,0.04)",
    "rgba(255,255,255,0.05)"
  );
  const bgColor = useColorModeValue("#fff", "#000000d3");

  return (
    <Box
      as="section"
      position="relative"
      w="100%"
      h="100vh"
      bg={bgColor}
      overflow="hidden"
    >
      {/* Background Bubbles */}
      <BlueBubble />
      <GreenBubble />
      <PurpleBubble />
      <RedBubble />

      {/* Stars Canvas */}
      <Box position="absolute" top={0} left={0} w="100%" h="100%" zIndex={0}>
        <StarsCanvas />
      </Box>

      {/* Grid Overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        w="100%"
        h="100%"
        zIndex={1} // overlay above stars
        bg="transparent"
        _before={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          w: "200%",
          h: "200%",
          bgImage: `linear-gradient(to right, ${gridLineColor} 1px, transparent 1px), linear-gradient(to bottom, ${gridLineColor} 1px, transparent 1px)`,
          bgSize: "50px 50px",
          animation: `${move} 10s linear infinite`,
        }}
      ></Box>


    </Box>
  );
};

export default Banner;
