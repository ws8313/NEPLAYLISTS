import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { ContactShadows, Environment, OrbitControls, Reflector, softShadows, Stage, Stars } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import {useBox} from "use-canon"
import ItemEditor from "./ItemEditor";
import styled from "styled-components";
// import Draggable from "./Draggable";
import IsometricRoom from './Isometric_room'
import DragTest from "./DragTest";
import { RectAreaLight } from "three";
const CanvasContainer = styled.div`
  height:calc(100vh - 46px);
`;

softShadows();

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
      <Canvas shadows camera={{fov:45, position:[300,300,300]}}>
        <color attach="background" args={["black"]} />
        {/* <directionalLight 
        color="white"
        intensity={0.1} 
        position={[20, 70, -150]}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        castShadow
        /> */}
        {/* <pointLight 
        color="white" 
        intensity = {0.5} 
        position={[0, 300, 0]} 
        // lookAt={[0, 0, 0]}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        castShadow 
        /> */}
        <spotLight 
        position={[82.123, 106.57, -184.02]} 
        intensity={0.3}
        angle={0.9} 
        color="white" 
        penumbra={1} 
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        castShadow 
        />
        {/* <directionalLight 
        position={[71.429, 158.63, -39.989]} 
        intensity={0.1}
        angle={0.9} 
        color="white" 
        penumbra={1} 
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        // castShadow 
        /> */}
        {/* <directionalLight 
        position={[14.199, 240.66, -83.942]} 
        intensity={0.1}
        angle={0.9} 
        color="white" 
        penumbra={1} 
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        // castShadow 
        /> */}
        <rectAreaLight 
        width={110}
        height={10}
        color="#0000FF" 
        intensity={30}
        position={[-88.8, 40, -32]} 
        rotation={[0, -1.57, 0]}
        />
        <pointLight 
        color="#0000FF"
        intensity={0.4}
        position={[-70, 100, -23]}
        />
          
        <ambientLight intensity={0.1}/>
        {/* 한쪽 방향에서 빛을 줌 */}
        <OrbitControls 
          minPolarAngle = { edit ? Math.PI/4 : -Math.PI/2 }
          maxPolarAngle = { edit ? Math.PI/4 : Math.PI/3 }
          minAzimuthAngle={edit ? Math.PI/4 : 0 }
          maxAzimuthAngle={edit ? Math.PI/4 : Math.PI/2  } />
        <Suspense fallback={null}>
          {/* 만약 추가 패이지 자체는 링크로 두고,  */}
          {/* <Room /> */}
        {/* <Stage 
        environment={null}
        intensity={0.5} 
        contactShadowOpacity={0.1} 
        shadowBias={-0.0015}
        > */}
        {/* <Environment preset="city" /> */}
          <IsometricRoom />
        {/* </Stage> */}
        <DragTest edit={edit}/>
        </Suspense>
      </Canvas>
    </CanvasContainer>
    
    </>
  );
}
