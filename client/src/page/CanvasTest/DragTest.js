import React from "react";
import { extend, useThree, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DragControls } from "three/examples/jsm/controls/DragControls";

extend({ DragControls });

export default function DragTest({edit}) {
  var objects = [];
  const gltf = useLoader(GLTFLoader, "/low_poly_isometric_rooms/scene.gltf");
  const {
    camera,
    gl: { domElement },
  } = useThree();

  return (
    <>
      <primitive
        position={[0, 0, 0]}
        object={gltf.scene}
        scale={10}
        rotation={[0, Math.PI / 2, 0]}
      />
      {edit ? (
        <dragControls args={[[gltf.scene], camera, domElement]} />
      ) : (
        <></>
      )}
    </>
  );
}
