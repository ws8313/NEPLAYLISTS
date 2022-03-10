import React, { Suspense, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import ItemEditor from "./ItemEditor";
import styled from "styled-components";
import IsometricRoom from './Isometric_room'
import DragTest from "./DragTest";

import UseDragEx from "./UseDragEx"

const CanvasContainer = styled.div`
  height:calc(100vh - 45px);
`;

export default function Viewer({edit}) {
  return (
    <>
    <CanvasContainer>
      <Canvas camera={{fov:45, position:[300,300,300]}}>
        <color attach="background" args={["grey"]} />
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
