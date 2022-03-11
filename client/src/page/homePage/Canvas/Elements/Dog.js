import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader, useThree } from "@react-three/fiber";
import React from "react";
import { DragControls } from 'three/examples/jsm/controls/DragControls'
import { TransformControls } from "@react-three/drei";

export default function Model({ edit }) {

  const model = useLoader(GLTFLoader, "/Dog/scene.gltf");
  const {
    camera,
    gl: { domElement },
  } = useThree();

  // const dragControls = new DragControls([model.scene], camera,domElement)
  const transformControls = new TransformControls(camera, domElement)
  try { transformControls.attach(model) }
  catch (err) {console.log(err);}

  return (
  <primitive
    position={[50, 0, 100]}
    object={model.scene}
    scale={10}
    rotation={[0, 0, 0]}
  />
  // <dragControls 
  )

}
