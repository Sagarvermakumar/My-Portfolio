"use client";
import { Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useColors } from "../hooks/useColors";

const MotionText = motion(Text);

const Logo3D = () => {
  const { text, primary } = useColors();

  return (
      <MotionText
        fontSize={{ base: "lg", md: "xl" }}
        fontWeight="bold"
        color={text}
        cursor="pointer"
        style={{
          transformStyle: "preserve-3d",
          perspective: "1000px",
          display: "inline-block",
        }}
        whileHover={{
          rotateY: 15,  // tilt effect
          rotateX: 5,
          scale: 1.1,
          textShadow: `0 5px 10px rgba(0,0,0,0.3)`,
          transition: { type: "spring", stiffness: 200, damping: 15 },
        }}
      >
        <Text as="span" color={primary} fontWeight="700">
          {"<"}
        </Text>
        DevSagar
        <Text as="span" color={primary} fontWeight="700">
          {"/>"}
        </Text>
      </MotionText>
  );
};

export default Logo3D;
