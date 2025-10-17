import { Box, Badge, useMediaQuery } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useTexture, Float } from "@react-three/drei";
import * as THREE from "three";
import React, { useRef } from "react";
import { useColors } from "../src/hooks/useColors";

const MotionBox = motion(Box);

// ✅ Inner 3D image mesh (texture plane)
function ImageMesh({ img }) {
  const meshRef = useRef();
  const texture = useTexture(img);
  const { mouse } = useThree();

  useFrame(() => {
    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      mouse.x * 0.5,
      0.05
    );
    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      -mouse.y * 0.3,
      0.05
    );

    meshRef.current.position.y = Math.sin(Date.now() * 0.0015) * 0.1;
  });

  return (
    <Float speed={1.4} floatIntensity={0.8}>
      <mesh ref={meshRef}>
        <planeGeometry args={[2.6, 2.6, 32, 32]} />
        <meshStandardMaterial
          map={texture}
          roughness={0.25}
          metalness={0.8}
          emissive="#ff0080"
          emissiveIntensity={0.15}
        />
      </mesh>
    </Float>
  );
}

// ✅ Main 3D box wrapper
export default function Profile3DMeshBox({ img }) {
  const { primary, cardBg, glassBorder } = useColors();
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <MotionBox
      whileHover={{ scale: 1.05, rotateY: 10, rotateX: -5 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      style={{ perspective: "1000px" }}
    >
      <Box
        position="relative"
        borderRadius="2xl"
        overflow="hidden"
        bgGradient={`linear(to-b, ${cardBg}, ${cardBg}aa)`}
        border="1px solid"
        borderColor={glassBorder}
        boxShadow={`0 10px 30px ${primary}30, inset 0 0 30px ${primary}15`}
        backdropFilter="blur(25px)"
        transformStyle="preserve-3d"
        p={4}
        w={isMobile ? "270px" : "320px"}
        h={isMobile ? "270px" : "320px"}
        display="flex"
        alignItems="center"
        justifyContent="center"
        _before={{
          content: '""',
          position: "absolute",
          top: "0",
          left: "0",
          w: "100%",
          h: "100%",
          bgGradient: "linear(to-tr, rgba(255,255,255,0.1), transparent)",
          zIndex: 1,
        }}
      >
        {/* 🧠 3D Canvas */}
        <Canvas
          camera={{ position: [0, 0, 3.5], fov: 50 }}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "1rem",
          }}
        >
          <ambientLight intensity={0.6} />
          <directionalLight position={[2, 2, 5]} intensity={1.3} />
          <ImageMesh img={img} />
        </Canvas>

        {/* 🔮 Floating Badge */}
        <motion.div
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            zIndex: 2,
          }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          <Badge
            colorScheme="pink"
            px={3}
            py={1}
            borderRadius="full"
            fontSize="sm"
            fontWeight="bold"
            boxShadow={`0 0 15px ${primary}60`}
          >
            Available
          </Badge>
        </motion.div>

        {/* 💡 Glow reflection at bottom */}
        <motion.div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            width: "100%",
            height: "30%",
            background: `radial-gradient(circle at bottom, ${primary}30, transparent 70%)`,
            filter: "blur(25px)",
            zIndex: 0,
          }}
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </Box>
    </MotionBox>
  );
}
