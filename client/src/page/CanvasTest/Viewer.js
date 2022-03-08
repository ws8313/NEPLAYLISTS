import React, { Suspense, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Modern_furniture from "./Modern_furniture"
// import {useBox} from "use-canon"
import ItemEditor from "./ItemEditor";
import styled from "styled-components";
import Draggable from "./Draggable";
import IsometricRoom from './Isometric_room'

const CanvasContainer = styled.div`
  /* grid-area: main ; */
  position:default;
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
    <>

    <CanvasContainer>
      <Canvas camera={{fov:45, position:[300,300,300]}}>
        <color attach="background" args={["black"]} />
        <OrbitControls 
          minPolarAngle={edit ? - Math.PI/2 : Math.PI/4 }
          maxPolarAngle={edit ? Math.PI/4 : Math.PI/4 }
          // edit? - Math.PI / 4 :
          minAzimuthAngle={edit ? 0: Math.PI/4 }
          maxAzimuthAngle={edit ? Math.PI/2 : Math.PI/4 } />
        <ambientLight intensity={0.2} />
        {/* <directionalLight intensity={0.5} /> */}
        {/* <pointLight color="white" intensity = {1}  /> */}
        <spotLight position={[0, 0, -500]} angle={0.9} color="white" penumbra={1} castShadow />
        {/* 한쪽 방향에서 빛을 줌 */}
        <Suspense fallback={null}>
          {/* 만약 추가 패이지 자체는 링크로 두고,  */}
          {/* <Room /> */}
          <IsometricRoom receiveShadow/>
          <Draggable show={false} />
        </Suspense>
      </Canvas>
    </CanvasContainer>
    </>
  );
}
