import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls,Stars } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import {useBox} from "use-canon"
import Notebook from '../CanvasTest/Notebook'
import styled from "styled-components";

const CanvasContainer = styled.div`
  grid-area: main;
  display:flex;
  flex-direction: column;
  `
export default function Viewer() {
  function Room() {
    return (
      <>
      <mesh position={[0, 0, -5]} >
        <boxBufferGeometry attatch="geometry"  args={[10,10,0.1]}/>
        <meshLambertMaterial attatch="material" color="orange" />
      </mesh>
      <mesh position={[5, 0, 0]} rotation={[0,-Math.PI/2,0]}>
        <boxBufferGeometry attatch="geometry"  args={[10,10,0.1]}/>
        <meshLambertMaterial attatch="material" color="orange" />
      </mesh>
      <mesh position={[0, -5, 0]} rotation={[-Math.PI/2,0,0]}>
        <boxBufferGeometry attatch="geometry"  args={[10,10,0.1]}/>
        <meshLambertMaterial attatch="material" color="orange" />
      </mesh>
    </>
    );
  }

  function Plane() {
    console.log(-Math.PI);
    return (
      
      <mesh position={[0, -1, 0]} rotation={[-Math.PI/2, 0, 0]}>
      <planeBufferGeometry attatch="geometry" args={[10,10]}/>
      <meshLambertMaterial attatch="material" color="lightblue" />
    </mesh>
    

);
  }

  return (
    <CanvasContainer>
      <Canvas>
        <color attach="background" args={["black"]} />
        <OrbitControls />
        <ambientLight intensity={0.4}/>  
        {/* 모든 면에서 빛이 나는 상태 */}
        <directionalLight intensity={0.5}/>
        <spotLight position={[10,15,10]} angle = {0.9}/>
        {/* 한쪽 방향에서 빛을 줌 */}
        <Suspense fallback={null}>
         <Notebook />
        <Stars/>
        <Room/>
        {/* <Plane /> */}
        </Suspense>

      </Canvas>
    </CanvasContainer>
  );
}
