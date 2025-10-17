import { motion, useMotionValue, useTransform } from "framer-motion";

function ThreeDButton({ children }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [15, -15]);
  const rotateY = useTransform(x, [-50, 50], [-15, 15]);

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        background: "linear-gradient(145deg, #ff0080, #6100ff)",
        border: "none",
        color: "#fff",
        padding: "1rem 2rem",
        fontSize: "1.1rem",
        fontWeight: "600",
        borderRadius: "12px",
        boxShadow:
          "0 5px 10px rgba(255,0,128,0.4), inset 0 1px 2px rgba(255,255,255,0.2)",
        cursor: "pointer",
        perspective: 600,
      }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
    >
      {children}
    </motion.button>
  );
}



export default ThreeDButton