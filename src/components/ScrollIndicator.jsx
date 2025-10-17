import { Link } from "react-scroll";
import { useColors } from "../hooks/useColors";
import { motion } from "framer-motion";

const ScrollIndicator = () => {
  const { primary } = useColors();

  return (
    <motion.div
      style={{
        position: "absolute",
        bottom: "2rem",
        left: "50%",
        transform: "translateX(-50%)",
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 2 }}
    >
      <Link to="about" spy={true} smooth={true} duration={500}>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          cursor="pointer"
        >
          <motion.svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            whileHover={{
              scale: 1.15,
              y: 5,
              filter: "drop-shadow(10px 2px 8px #ff0080df)",
            }}
            style={{
              display: "block",
              cursor: "pointer",
            }}
          >
            <motion.path
              d="M8 14l8 8 8-8"
              stroke={primary}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0.7 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 2.2 }}
            />
          </motion.svg>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default ScrollIndicator;
