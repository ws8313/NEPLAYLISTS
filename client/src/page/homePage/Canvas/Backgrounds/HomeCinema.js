import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import React from "react";

export default function Model({ edit }) {
  const model = useLoader( GLTFLoader, "/isometric_bedroom/scene.gltf");
  return (
  <primitive
    position={[0, 0, 0]}
    object={model.scene}
    scale={1}
    rotation={[0,Math.PI/4, 0]}
  />
  )
}
