import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import React from "react";

export default function Model({ edit }) {
  const model = useLoader(GLTFLoader, "/otter/scene.gltf");

  return (
    <>
      <primitive
        position={[200, 0, 100]}
        object={model.scene}
        scale={100}
        rotation={[0, Math.PI, 0]}
      />
    </>
  );
}
