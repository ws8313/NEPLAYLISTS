import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { ContactShadows, Environment, OrbitControls, softShadows, Stage, Stars } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import ItemEditor from "./ItemEditor";
import styled from "styled-components";
import IsometricRoom from './Isometric_room'
import DragTest from "./DragTest";
import UseDragEx from "./UseDragEx"

import { RectAreaLight } from "three";
const CanvasContainer = styled.div`
  height:calc(100vh - 45px);
`;

softShadows();

export default function Viewer({edit}) {
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
        // color="white" 
        intensity = {0.5} 
        position={[0, 0, 0]} 
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        castShadow 
        /> */}
        <spotLight 
        position={[82.123, 106.57, -184.02]} 
        intensity={0.1}
        angle={0.9} 
        color="white" 
        penumbra={1} 
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        castShadow 
        />
        <directionalLight 
        position={[71.429, 158.63, -39.989]} 
        intensity={0.05}
        angle={0.9} 
        color="white" 
        penumbra={1} 
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        // castShadow 
        />
        <directionalLight 
        position={[14.199, 240.66, -83.942]} 
        intensity={0.05}
        angle={0.9} 
        color="white" 
        penumbra={1} 
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        // castShadow 
        />
        <rectAreaLight 
        width={50}
        height={80}
        color="#337882" 
        intensity={20}
        position={[-90, 60, -30]} 
        rotation={[1.3, -1.8, 0]}
        // penumbra={10} 
        // castShadow
        />
        <ambientLight intensity={0.06}/>
        {/* 한쪽 방향에서 빛을 줌 */}
        <OrbitControls 
          minPolarAngle = { edit ? Math.PI/4 : -Math.PI/2 }
          maxPolarAngle = { edit ? Math.PI/4 : Math.PI/3 }
          minAzimuthAngle={edit ? Math.PI/4 : 0 }
          maxAzimuthAngle={edit ? Math.PI/4 : Math.PI/2  } />
        <ambientLight intensity={0.2} />
        <pointLight color="white" intensity = {1}  />
        <spotLight position={[20, 70, -150]} angle={0.9} color="white" penumbra={1} castShadow />
        <Suspense fallback={null}>
          {/* 만약 추가 패이지 자체는 링크로 두고,  */}
          {/* <Room /> */}
          {/* <IsometricRoom receiveShadow/> */}
        {/* <DragTest edit={edit} receiveShadow/> */}
          <UseDragEx/>
        </Suspense>
      </Canvas>
    </CanvasContainer>
    
    </>
  );
}
