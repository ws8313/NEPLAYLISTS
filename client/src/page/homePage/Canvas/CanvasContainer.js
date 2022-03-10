import React, { Suspense, useState } from "react";
import styled from "styled-components";

import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls,Stars } from "@react-three/drei";
import MagicRoom from './Elements/MagicRoom'
import IsometricRoom from './Isometric_room'
import SpiderMan from './Elements/SpiderMan'
import ManSitting from './Elements/ManSitting'
import { useDispatch,useSelector } from "react-redux";
import { onOffElement, savePosition } from "../../../redux/actions/canvas";

export default function CanvasContainer({edit}) {
  const dispatch = useDispatch();
  const save_Position = (positions) => dispatch(savePosition(positions));
  
  const {onNOff} = useSelector((state)=>{
    return {
      onNOff : state.canvas.onNOff
    }
  })

  return(
    <div style={{height: "100vh"}}>
      <Canvas camera={{fov:45, position:[300,300,300]}}>
        <color attach="background" args={["black"]} />
        <OrbitControls 
          minPolarAngle = { edit ? Math.PI/4 : -Math.PI/2 }
          maxPolarAngle = { edit ? Math.PI/4 : Math.PI/3 }
          minAzimuthAngle={edit ? Math.PI/4 : 0 }
          maxAzimuthAngle={edit ? Math.PI/4 : Math.PI/2  } />
          {/* light 들 적용시킬 것 */}v 
          <ambientLight intensity={0.05} />
          {/* <pointLight color="white" intensity = {0.1}  /> */}
          <spotLight position={[20, 70, -150]} angle={1} color="white" penumbra={1} castShadow />

        <Suspense fallback={null}>
          {/* 기본 방 + 버튼 클릭에 따른 Element들 */}
          <IsometricRoom />
          {/* <MagicRoom edit/> */}
          { onNOff[0] ? <SpiderMan/> : <></> }
          { onNOff[1] ? <ManSitting/> : <></> }
          {/* {onNOff[2] ? <SpiderMan/> : <></>} */}
          {/* {onNOff[3] ? <SpiderMan/> : <></>} */}
          
        </Suspense>
      </Canvas>

    </div>
  )
}