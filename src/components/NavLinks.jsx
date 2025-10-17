import { Link as ChakraLink } from "@chakra-ui/react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useColors } from "../hooks/useColors";

const MotionLink = motion(ChakraLink);

const NavLink = ({ children, to, onClose }) => {
    const {text} = useColors()
  return (
    <Link
      activeClass="active"
      to={to}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      onClick={onClose}
    >
      <MotionLink
        px={2}
        py={1}
        rounded="md"
        color={text}
        fontWeight="medium"
        cursor="pointer"
        style={{
          transformStyle: "preserve-3d",
          perspective: "1000px",
          display: "inline-block",
        }}
        whileHover={{
          rotateY: 10,          // tilt horizontally
          rotateX: 5,           // tilt vertically
          scale: 1.1,           // popout
          textShadow: "0 5px 10px rgba(0,0,0,0.3)", // subtle shadow
          color: "#ff0080",     // hover color
          transition: { type: "spring", stiffness: 200, damping: 15 },
        }}
        whileTap={{
          scale: 0.95,
          rotateY: 0,
          rotateX: 0,
        }}
      >
        {children}
      </MotionLink>
    </Link>
  );
};



export default NavLink