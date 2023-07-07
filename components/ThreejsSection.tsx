"use client";

import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { Object3D } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Model } from "./Awindyday";
import { ClipLoader } from "react-spinners";
import Loading from "@/app/loading";

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
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />

        <Model />
        {/* <Box position={[-10, 0, 0]} />
        <Box position={[10, 0, 0]} /> */}
      </Canvas>
    </div>
  );
};

export default ThreejsSection;
