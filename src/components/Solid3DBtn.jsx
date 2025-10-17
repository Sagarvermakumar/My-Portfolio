import { Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { TbWorldCheck } from "react-icons/tb";
import { useColors } from "../hooks/useColors";

const MotionButton = motion(Button);

const Solid3DBtn = ({label}) => {
  const { primary } = useColors();

  return (
    <MotionButton
      size="lg"
      variant="solid"
      color="white"
      bgGradient={`linear(to-b, ${primary}, ${primary}90)`}
      borderWidth="2px"
      borderColor={`${primary}aa`}
      borderRadius="xl"
      boxShadow={`
        0 4px 0 ${primary}aa,
        0 8px 15px ${primary}55,
        inset 0 2px 6px rgba(255,255,255,0.25)
      `}
      _hover={{
        transform: "translateY(-4px)",
        boxShadow: `
          0 6px 0 ${primary},
          0 10px 20px ${primary}66,
          inset 0 2px 6px rgba(255,255,255,0.3)
        `,
        bgGradient: `linear(to-b, ${primary}, ${primary}bb)`,
      }}
      _active={{
        transform: "translateY(2px)",
        boxShadow: `
          0 2px 0 ${primary}99,
          0 6px 12px ${primary}44,
          inset 0 2px 4px rgba(255,255,255,0.2)
        `,
      }}
      whileHover={{ scale: 1.06, rotateX: 5, rotateY: -5 }}
      whileTap={{ scale: 0.96 }}
      transition="all 0.2s ease"
      leftIcon={<TbWorldCheck />}
    >
 {label}
    </MotionButton>
  );
};

export default Solid3DBtn;
