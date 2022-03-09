import React from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
export default function DragTest() {
  var objects = [];
  const gltf = useLoader(GLTFLoader, "/low_poly_isometric_rooms/scene.gltf");

  return (
    <>
      <primitive position={[0, 0, 0]} object={gltf.scene} scale={1} rotation={[0,Math.PI/2,0]} />
    </>
  );
}
