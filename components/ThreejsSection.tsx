"use client";

import { PerspectiveCamera, PointMaterial } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { AnimatePresence, motion } from "framer-motion";
import { Github, X } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";
import * as THREE from "three";
import { Points } from "three";

const ThreejsSection = () => {
  const [showModal, setShowModal] = useState(true);

  return (
    <>
      <AnimatePresence>
        {showModal && (
          <motion.div
            key="globe-modal"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="group absolute bottom-96 z-10 mx-auto max-w-sm rounded-md border border-gray-200 bg-black/50 bg-opacity-90 px-5 py-4 shadow-md backdrop-blur-md sm:py-7"
          >
            <button
              className="group visible absolute right-0 top-0 float-right m-3 rounded-full p-1 transition-all duration-75 hover:bg-green-500 focus:outline-none active:scale-75 group-hover:visible sm:invisible"
              autoFocus={false}
              onClick={() => setShowModal(false)}
            >
              <span className="sr-only">Spin Globe</span>
              <X className="h-4 w-4 hover:text-black" />
            </button>
            <p className="text-center text-sm text-white sm:text-base">
              Click on the canvas to stop/start the animation
            </p>
            <Link
              href="https://github.com/jbonn2002"
              target="_blank"
              className="mx-auto mt-2 flex max-w-fit rounded-full border border-black bg-black px-4 py-1.5 text-sm text-white hover:bg-green-500 hover:text-black sm:mt-4"
            >
              GitHub
              <div className="ml-2">
                <Github />
              </div>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="w-full md:h-[500px] h-full dark:filter-none filterBlue">
        <Canvas>
          <PerspectiveCamera makeDefault fov={75} position={[0, 0, 2]} />
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          <TorusPoints />
        </Canvas>
      </div>
    </>
  );
};

export default ThreejsSection;

function TorusPoints() {
  const [clicked, setClicked] = useState(false);
  const torusKnot = new THREE.TorusKnotGeometry(10, 3, 300, 20);
  const torushMesh = useRef<Points>(null!);
  useFrame(({ clock }) => {
    !clicked
      ? (torushMesh.current.rotation.x = clock.getElapsedTime() / 2)
      : (torushMesh.current.rotation.x = 0);
  });

  const changeAnimation = () =>
    clicked ? setClicked(false) : setClicked(true);

  return (
    <points args={[torusKnot]} ref={torushMesh} onClick={changeAnimation}>
      {/* <pointsMaterial
        color={"#22c55e"}
        sizeAttenuation={true}
        size={0.1}
        alphaTest={0.5}
        transparent={true} 

      /> */}
      <PointMaterial
        color={"#22c55e"}
        transparent
        size={3}
        sizeAttenuation={false}
        depthWrite={false}
      />
    </points>
  );
}
