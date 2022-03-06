import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Modern_furniture from "./Modern_furniture"
// import {useBox} from "use-canon"

import styled from "styled-components";
import Draggable from "./Draggable";
import IsometricRoom from './Isometric_room'

const CanvasContainer = styled.div`
  /* grid-area: main ; */
  height:100vh;
  display: flex;
  flex-direction: column;
`;

export default function Viewer({edit}) {
  function Room() {
    return (
      <>
        <mesh position={[0, 0, -5]}>
          <boxBufferGeometry attatch="geometry" args={[10, 10, 0.1]} />
          <meshLambertMaterial attatch="material" color="lightblue" />
        </mesh>
        <mesh position={[5, 0, 0]} rotation={[0, -Math.PI / 2, 0]}>
          <boxBufferGeometry attatch="geometry" args={[10, 10, 0.1]} />
          <meshLambertMaterial attatch="material" color="orange" />
        </mesh>
        <mesh position={[0, -5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <boxBufferGeometry attatch="geometry" args={[10, 10, 0.1]} />
          <meshLambertMaterial attatch="material" color="orange" />
        </mesh>
      </>
    );
  }

  return (
    <CanvasContainer>
      <Canvas camera={{fov:45, position:[300,300,300]}}>
        <color attach="background" args={["black"]} />
        <OrbitControls 
        // position0={10,10,10} 
          // minZoom={50}
          minPolarAngle={edit ? - Math.PI/2 : Math.PI/4 }
          maxPolarAngle={edit ? Math.PI/4 : Math.PI/4 }
          // edit? - Math.PI / 4 :
          minAzimuthAngle={edit ? 0: Math.PI/4 }
          maxAzimuthAngle={edit ? Math.PI/2 : Math.PI/4 } />
        <ambientLight intensity={0.1} />
        {/* 모든 면에서 빛이 나는 상태 */}
        {/* <directionalLight intensity={0.5} /> */}
        {/* <pointLight color="white" intensity = {1}  /> */}
        <spotLight position={[500, 0, 100]} angle={0.9} color="white" penumbra={1} castShadow />
        {/* 한쪽 방향에서 빛을 줌 */}
        <Suspense fallback={null}>
          <Room />
          <IsometricRoom receiveShadow/>
          <Draggable />
          {/* <Notebook/> */}
          {/* <Modern_furniture/> */}
        </Suspense>
      </Canvas>
    </CanvasContainer>
  );
}
