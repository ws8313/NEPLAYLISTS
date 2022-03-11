// import React from "react";
import { extend, useThree, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DragControls } from "three/examples/jsm/controls/DragControls";

import { Canvas, useFrame } from "@react-three/fiber"
import React, { useRef, useState } from "react"
import { useDrag } from "react-use-gesture"

extend({ DragControls });
export default function DragTest({edit}) {
  const {
    camera,
    gl: { domElement },
  } = useThree();
  const ex = []
  const isome= useLoader(GLTFLoader, "/isometric_bedroom/scene.gltf");
  const low= useLoader(GLTFLoader, "/low_poly_isometric_rooms/scene.gltf");
  // console.log(isome);
  
  ex.push(isome.scene)
  ex.push(low.scene)  

  // const { size, viewport } = useThree()
  // const ref = useRef();
  // const [position,setPosition] = useState([0,0,0])
  // const aspect = size.width / viewport.width 

  // const bind = useDrag(({ offset : [x,z] }) => {
  //   const [,y,] =position;
  //   setPosition([x/aspect, y, z/aspect]);
  // }, {pointerEvents : true})


  return (
    <>
      <primitive
        position={[0, 0, 0]}
        // ref={ref}
        object={low.scene}
        scale={1}
        rotation={[0, 0, 0]}
      />

      <primitive 
        position={[0, 0, 0]}
        object={isome.scene}
        scale={1}
        rotation={[0, 0, 0]}
      />
      {edit ? (
        <dragControls args={[ex, camera, domElement]} />
      ) : (
        <></>
      )}
    </>
  );
}
