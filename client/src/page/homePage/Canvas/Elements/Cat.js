import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { extend, useLoader, useThree } from "@react-three/fiber";
import React from "react";
import { DragControls } from "three/examples/jsm/controls/DragControls";

extend({ DragControls });

export default function Model({ edit }) {
  const model = useLoader(GLTFLoader, "/Cat/scene.gltf");

  const {
    camera,
    gl: { domElement },
  } = useThree();

  return (
    <>
      <primitive
        position={[0, 0, 100]}
        object={model.scene}
        scale={0.1}
        rotation={[0, Math.PI, 0]}
      />

      <dragControls args={[model.scene, camera, domElement]} />
    </>
  );
}
