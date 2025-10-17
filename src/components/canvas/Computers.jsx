import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import PropTypes from "prop-types";


const Computers = ({isMobile}) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  return (
    <mesh>
       <hemisphereLight 
       intensity={2} 
        groundColor={'#fff'}
      /> 
      
      <spotLight
       intensity={1.9}
       angle={0.12}
       penumbra={1}
       castShadow
       shadow-mapSize={1024}
       />

       <pointLight intensity={1}/>

      <primitive 
      object={computer.scene}
       scale={ isMobile?  0.6:0.65}
        position={ isMobile ? [0,-3,-2.2] : [0,-3.5,-1.5]} 
       rotation={[-0.01,-0.2,-0.1]}
      />
    </mesh>
  );
};

const computerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);


  useEffect(()=>{
    //add a listner for change to the screen size
    const mediaQuery = window.matchMedia("(max-width:500px)");


    //set the initial value of the ismobile state variable 
    setIsMobile(mediaQuery.matches);

    // define the function as a listner for change to thr media query
    const handdleMediaqueryChange=(e)=>{
      setIsMobile(e.matches)
      console.log(e.matches)
    }
    
    //add the callback function as listner for change the media query

    mediaQuery.addEventListener("change", handdleMediaqueryChange);


    //remove the listner when the component is unmounted
    return ()=>{
      mediaQuery.removeEventListener("change", handdleMediaqueryChange )
    }
  },[])

  return (
    <Canvas
      frameloop="always"
      shadows
      dpr={[1,2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all/>
    </Canvas>
  );
};



Computers.propTypes = {
  isMobile : PropTypes.string.isRequired
}

export default computerCanvas;
