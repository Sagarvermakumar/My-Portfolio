import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, Stage } from "@react-three/drei";
import CanvasLoader from "../Loader";
import { Suspense } from "react";
import { useColorModeValue } from "@chakra-ui/react";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");
  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = ({ width = 500, height = 500 }) => {
  const bgColor = useColorModeValue("#ffffff00", "#00000000"); // transparent
  const lightIntensity = useColorModeValue(1, 0.8); // light mode vs dark mode

  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
      style={{ width: `${width}px`, height: `${height}px`, background: bgColor }}
    >
      <Suspense fallback={<CanvasLoader />}>
        {/* Optional: stage for proper lighting */}
        <Stage environment="city" intensity={lightIntensity} adjustCamera={false}>
          <Earth />
        </Stage>

        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
