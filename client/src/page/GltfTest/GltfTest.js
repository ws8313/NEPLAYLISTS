import React, { useState, useRef, useEffect, Suspense } from "react";

import * as THREE from "three"
import { DragControls } from "./DragControls";
import { Canvas } from "@react-three/fiber"
import { Center, OrbitControls, useGLTF } from "@react-three/drei"
import { styled } from "@linaria/react";

function Model({ ...props }) {
    const group = useRef()
    const { nodes, materials } = useGLTF('/redroom.gltf')

    return (
      <group ref={group} {...props} dispose={null}>
        <mesh
          geometry={nodes.mesh_0.geometry}
          material={nodes.mesh_0.material}
          position={[3, -4, -1.5]}
          rotation={[-Math.PI / 3, 0, 0.7]}
          onPointerDown={(e) => console.log(e)}
        />
        <mesh
          geometry={nodes.mesh_1.geometry}
          material={nodes.mesh_1.material}
          position={[3, -4, -1.5]}
          rotation={[-Math.PI / 3, 0, 0.7]}
        />
        <mesh
          geometry={nodes.mesh_2.geometry}
          material={nodes.mesh_2.material}
          position={[3, -4, -1.5]}
          rotation={[-Math.PI / 3, 0, 0.7]}
        />
        <mesh
          geometry={nodes.mesh_3.geometry}
          material={nodes.mesh_3.material}
          position={[3, -4, -1.5]}
          rotation={[-Math.PI / 3, 0, 0.7]}
        />
        <mesh
          geometry={nodes.mesh_4.geometry}
          material={nodes.mesh_4.material}
          position={[3, -4, -1.5]}
          rotation={[-Math.PI / 3, 0, 0.7]}
        />
        <mesh
          geometry={nodes.mesh_5.geometry}
          material={nodes.mesh_5.material}
          position={[3, -4, -1.5]}
          rotation={[-Math.PI / 3, 0, 0.7]}
        />
        <mesh
          geometry={nodes.mesh_6.geometry}
          material={nodes.mesh_6.material}
          position={[3, -4, -1.5]}
          rotation={[-Math.PI / 3, 0, 0.7]}
        />
        <mesh
          geometry={nodes.mesh_7.geometry}
          material={nodes.mesh_7.material}
          position={[3, -4, -1.5]}
          rotation={[-Math.PI / 3, 0, 0.7]}
        />
        <mesh
          geometry={nodes.mesh_8.geometry}
          material={nodes.mesh_8.material}
          position={[3, -4, -1.5]}
          rotation={[-Math.PI / 3, 0, 0.7]}
        />
        <mesh
          geometry={nodes.mesh_9.geometry}
          material={nodes.mesh_9.material}
          position={[3, -4, -1.5]}
          rotation={[-Math.PI / 3, 0, 0.7]}
        />
        <mesh
          geometry={nodes.mesh_10.geometry}
          material={nodes.mesh_10.material}
          position={[3, -4, -1.5]}
          rotation={[-Math.PI / 3, 0, 0.7]}
        />
        <mesh
          geometry={nodes.mesh_11.geometry}
          material={nodes.mesh_11.material}
          position={[3, -4, -1.5]}
          rotation={[-Math.PI / 3, 0, 0.7]}
        />
        <mesh
          geometry={nodes.mesh_12.geometry}
          material={nodes.mesh_12.material}
          position={[3, -4, -1.5]}
          rotation={[-Math.PI / 3, 0, 0.7]}
        />
        <mesh
          geometry={nodes.mesh_13.geometry}
          material={nodes.mesh_13.material}
          position={[3, -4, -1.5]}
          rotation={[-Math.PI / 3, 0, 0.7]}
        />
        <mesh
          geometry={nodes.mesh_14.geometry}
          material={nodes.mesh_14.material}
          position={[3, -4, -1.5]}
          rotation={[-Math.PI / 3, 0, 0.7]}
        />
        <mesh
          geometry={nodes.mesh_15.geometry}
          material={nodes.mesh_15.material}
          position={[3, -4, -1.5]}
          rotation={[-Math.PI / 3, 0, 0.7]}
        />
        <mesh
          geometry={nodes.mesh_16.geometry}
          material={nodes.mesh_16.material}
          position={[3, -4, -1.5]}
          rotation={[-Math.PI / 3, 0, 0.7]}
        />
        <mesh
          geometry={nodes.mesh_17.geometry}
          material={nodes.mesh_17.material}
          position={[3, -4, -1.5]}
          rotation={[-Math.PI / 3, 0, 0.7]}
        />
        <mesh
          geometry={nodes.mesh_18.geometry}
          material={nodes.mesh_18.material}
          position={[3, -4, -1.5]}
          rotation={[-Math.PI / 3, 0, 0.7]}
        />
        <mesh
          geometry={nodes.mesh_19.geometry}
          material={nodes.mesh_19.material}
          position={[3, -4, -1.5]}
          rotation={[-Math.PI / 3, 0, 0.7]}
        />
      </group>
    )
  }

function Bed({ ...props }) {
    const group = useRef()
    const { nodes, materials } = useGLTF('/bed.gltf')
    return (
      <group ref={group} {...props} dispose={null}>
        <mesh
          geometry={nodes.mesh_0.geometry}
          material={nodes.mesh_0.material}
          position={[-0.5, -3.18, 4.54]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.mesh_1.geometry}
          material={nodes.mesh_1.material}
          position={[-0.5, -3.18, 4.54]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.mesh_2.geometry}
          material={nodes.mesh_2.material}
          position={[-0.5, -3.18, 4.54]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.mesh_3.geometry}
          material={nodes.mesh_3.material}
          position={[-0.5, -3.18, 4.54]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.mesh_4.geometry}
          material={nodes.mesh_4.material}
          position={[-0.5, -3.18, 4.54]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.mesh_5.geometry}
          material={nodes.mesh_5.material}
          position={[-0.5, -3.18, 4.54]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.mesh_6.geometry}
          material={nodes.mesh_6.material}
          position={[-0.5, -3.18, 4.54]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.mesh_7.geometry}
          material={nodes.mesh_7.material}
          position={[-0.5, -3.18, 4.54]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.mesh_8.geometry}
          material={nodes.mesh_8.material}
          position={[-0.5, -3.18, 4.54]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
    )
  }


function onClick(event) {
    // console.log(event)
}

export default function GltfTest() {
    return(
      <div>
        <div 
        style={{
            width: "100vw",
            height: "100vh"
        }}
        >
            <Canvas className="room"
            style={{ 
                // width: "100vw", 
                // height: "50vh",
                // top: "50%",
                // display: "flex",
                // alignItems: "center",
                // justifyContent: "center"
            }}
            raycaster={{

            }}
            >
                <Suspense fallback={null}>
                    <ambientLight />
                    <spotLight 
                        intensity={0.9} 
                        angle={0.1} 
                        penumbra={1} 
                        position={[50,50,50]} 
                        castShadow 
                        />
                    <Model/>
                    <Bed />
                    <OrbitControls 
                        enablePan={true} 
                        enableZoom={true} 
                        enableRotate={true}
                        />
                </Suspense>
                {/* <Suspense fallback={null}>
                    <ambientLight />
                    <spotLight 
                        intensity={0.9} 
                        angle={0.1} 
                        penumbra={1} 
                        position={[50,50,50]} 
                        castShadow 
                        />
                    <Bed/>
                    <OrbitControls 
                        enablePan={true} 
                        enableZoom={true} 
                        enableRotate={true}
                        />
                </Suspense> */}
            </Canvas>
        </div>

      </div>
    )
}