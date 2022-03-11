import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import React from "react";

export default function Model({ edit }) {
  const model = useLoader(GLTFLoader, "/TV/scene.gltf");
  return (
    <primitive
      position={[100, 0, -100]}
      object={model.scene}
      scale={300}
      rotation={[0, 0, 0]}
    />
  );
}
