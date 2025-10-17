import { motion } from "framer-motion";
import React from "react";
import { useColors } from "../hooks/useColors";
import { TbPlugConnected } from "react-icons/tb";
import { Button } from "@chakra-ui/react";

const MotionButton = motion(Button);
const Outline3DBtn = ({ label = "Click Me" }) => {
  const { primary } = useColors();
  return (
    <MotionButton
      size="lg"
      variant="solid"
      backdropFilter="blur(10px)"
      borderColor={primary}
      color={primary}
      borderWidth="2px"
      bg="rgba(255,255,255,0.05)"
      boxShadow={`0 4px 0 ${primary}55, 0 8px 15px ${primary}25`}
      _hover={{
        transform: "translateY(-3px)",
        boxShadow: `0 6px 0 ${primary}88, 0 10px 20px ${primary}44`,
        bgGradient: `linear(to-b, ${primary}35, ${primary}10)`,
      }}
      _active={{
        transform: "translateY(2px)",
        boxShadow: `0 2px 0 ${primary}44, 0 6px 12px ${primary}22`,
      }}
      whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5 }}
      whileTap={{ scale: 0.95 }}
      transition="all 0.2s ease"
      leftIcon={<TbPlugConnected />}
    >
      {label || "Get In Touch"}
    </MotionButton>
  );
};

export default Outline3DBtn;
