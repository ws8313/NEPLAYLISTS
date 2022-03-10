import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import React from "react";

export default function Model({ edit }) {
  const model = useLoader(GLTFLoader, "/the_amazing_spider_man_2_rigged_model/scene.gltf");
  return (
  <primitive
    position={[0, 0, 0]}
    object={model.scene}
    scale={10}
    rotation={[0, 0, 0]}
  />
  )
}
