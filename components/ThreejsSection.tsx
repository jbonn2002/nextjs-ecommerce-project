"use client";

import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Model } from "./Awindyday";

const ThreejsSection = () => {
  return (
    <div className="w-full md:h-[500px] h-full">
      <Canvas>
        <PerspectiveCamera
          makeDefault
          fov={75}
          near={0.1}
          far={1000}
          position={[0, 0, 2]}
        />
        <OrbitControls maxDistance={10} />
        {/* <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} /> */}

        <Model />
      </Canvas>
    </div>
  );
};

export default ThreejsSection;
