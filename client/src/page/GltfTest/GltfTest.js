import React, { useState, useRef, useEffect, Suspense } from "react";

import * as THREE from "three"
import { DragControls } from "./DragControls";
import { Canvas, useFrame } from "@react-three/fiber"
import { Center, OrbitControls, useGLTF, Stars, Sky, softShadows, Reflector } from "@react-three/drei"
import { styled } from "@linaria/react";


// function Model({ ...props }) {
//     const group = useRef()
//     const { nodes, materials } = useGLTF('/redroom.gltf')

//     return (
//       <group ref={group} {...props} dispose={null}>
//         <mesh
//           geometry={nodes.mesh_0.geometry}
//           material={nodes.mesh_0.material}
//           position={[3, -4, -1.5]}
//           rotation={[-Math.PI / 3, 0, 0.7]}
//           onPointerDown={(e) => console.log(e)}
//         />
//         <mesh
//           geometry={nodes.mesh_1.geometry}
//           material={nodes.mesh_1.material}
//           position={[3, -4, -1.5]}
//           rotation={[-Math.PI / 3, 0, 0.7]}
//         />
//         <mesh
//           geometry={nodes.mesh_2.geometry}
//           material={nodes.mesh_2.material}
//           position={[3, -4, -1.5]}
//           rotation={[-Math.PI / 3, 0, 0.7]}
//         />
//         <mesh
//           geometry={nodes.mesh_3.geometry}
//           material={nodes.mesh_3.material}
//           position={[3, -4, -1.5]}
//           rotation={[-Math.PI / 3, 0, 0.7]}
//         />
//         <mesh
//           geometry={nodes.mesh_4.geometry}
//           material={nodes.mesh_4.material}
//           position={[3, -4, -1.5]}
//           rotation={[-Math.PI / 3, 0, 0.7]}
//         />
//         <mesh
//           geometry={nodes.mesh_5.geometry}
//           material={nodes.mesh_5.material}
//           position={[3, -4, -1.5]}
//           rotation={[-Math.PI / 3, 0, 0.7]}
//         />
//         <mesh
//           geometry={nodes.mesh_6.geometry}
//           material={nodes.mesh_6.material}
//           position={[3, -4, -1.5]}
//           rotation={[-Math.PI / 3, 0, 0.7]}
//         />
//         <mesh
//           geometry={nodes.mesh_7.geometry}
//           material={nodes.mesh_7.material}
//           position={[3, -4, -1.5]}
//           rotation={[-Math.PI / 3, 0, 0.7]}
//         />
//         <mesh
//           geometry={nodes.mesh_8.geometry}
//           material={nodes.mesh_8.material}
//           position={[3, -4, -1.5]}
//           rotation={[-Math.PI / 3, 0, 0.7]}
//         />
//         <mesh
//           geometry={nodes.mesh_9.geometry}
//           material={nodes.mesh_9.material}
//           position={[3, -4, -1.5]}
//           rotation={[-Math.PI / 3, 0, 0.7]}
//         />
//         <mesh
//           geometry={nodes.mesh_10.geometry}
//           material={nodes.mesh_10.material}
//           position={[3, -4, -1.5]}
//           rotation={[-Math.PI / 3, 0, 0.7]}
//         />
//         <mesh
//           geometry={nodes.mesh_11.geometry}
//           material={nodes.mesh_11.material}
//           position={[3, -4, -1.5]}
//           rotation={[-Math.PI / 3, 0, 0.7]}
//         />
//         <mesh
//           geometry={nodes.mesh_12.geometry}
//           material={nodes.mesh_12.material}
//           position={[3, -4, -1.5]}
//           rotation={[-Math.PI / 3, 0, 0.7]}
//         />
//         <mesh
//           geometry={nodes.mesh_13.geometry}
//           material={nodes.mesh_13.material}
//           position={[3, -4, -1.5]}
//           rotation={[-Math.PI / 3, 0, 0.7]}
//         />
//         <mesh
//           geometry={nodes.mesh_14.geometry}
//           material={nodes.mesh_14.material}
//           position={[3, -4, -1.5]}
//           rotation={[-Math.PI / 3, 0, 0.7]}
//         />
//         <mesh
//           geometry={nodes.mesh_15.geometry}
//           material={nodes.mesh_15.material}
//           position={[3, -4, -1.5]}
//           rotation={[-Math.PI / 3, 0, 0.7]}
//         />
//         <mesh
//           geometry={nodes.mesh_16.geometry}
//           material={nodes.mesh_16.material}
//           position={[3, -4, -1.5]}
//           rotation={[-Math.PI / 3, 0, 0.7]}
//         />
//         <mesh
//           geometry={nodes.mesh_17.geometry}
//           material={nodes.mesh_17.material}
//           position={[3, -4, -1.5]}
//           rotation={[-Math.PI / 3, 0, 0.7]}
//         />
//         <mesh
//           geometry={nodes.mesh_18.geometry}
//           material={nodes.mesh_18.material}
//           position={[3, -4, -1.5]}
//           rotation={[-Math.PI / 3, 0, 0.7]}
//         />
//         <mesh
//           geometry={nodes.mesh_19.geometry}
//           material={nodes.mesh_19.material}
//           position={[3, -4, -1.5]}
//           rotation={[-Math.PI / 3, 0, 0.7]}
//         />
//       </group>
//     )
//   }

// function Bed({ ...props }) {
//     const group = useRef()
//     const { nodes, materials } = useGLTF('/bed.gltf')
//     return (
//       <group ref={group} {...props} dispose={null}>
//         <mesh
//           geometry={nodes.mesh_0.geometry}
//           material={nodes.mesh_0.material}
//           position={[-0.5, -3.18, 4.54]}
//           rotation={[-Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.mesh_1.geometry}
//           material={nodes.mesh_1.material}
//           position={[-0.5, -3.18, 4.54]}
//           rotation={[-Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.mesh_2.geometry}
//           material={nodes.mesh_2.material}
//           position={[-0.5, -3.18, 4.54]}
//           rotation={[-Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.mesh_3.geometry}
//           material={nodes.mesh_3.material}
//           position={[-0.5, -3.18, 4.54]}
//           rotation={[-Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.mesh_4.geometry}
//           material={nodes.mesh_4.material}
//           position={[-0.5, -3.18, 4.54]}
//           rotation={[-Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.mesh_5.geometry}
//           material={nodes.mesh_5.material}
//           position={[-0.5, -3.18, 4.54]}
//           rotation={[-Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.mesh_6.geometry}
//           material={nodes.mesh_6.material}
//           position={[-0.5, -3.18, 4.54]}
//           rotation={[-Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.mesh_7.geometry}
//           material={nodes.mesh_7.material}
//           position={[-0.5, -3.18, 4.54]}
//           rotation={[-Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           geometry={nodes.mesh_8.geometry}
//           material={nodes.mesh_8.material}
//           position={[-0.5, -3.18, 4.54]}
//           rotation={[-Math.PI / 2, 0, 0]}
//         />
//       </group>
//     )
//   }




const Colorlist = styled.ul`
  position: absolute;
  /* background-color: white; */
  /* width: 300px; */
  /* height: 500px; */
  z-index: 999;
`

const Backgroundlist = styled.ul`
  position: absolute;
  top: 150px;
  /* background-color: white; */
  /* width: 300px; */
  /* height: 500px; */
  z-index: 999;
`

export default function GltfTest() {
  const [customColor, setCustomColor] = useState("");
  const [backGround, setBackGround] = useState("");
  const [isShow, setIsShow] = useState(false);

  softShadows();

  function CoinMesh() {
    const mesh = useRef(null);
    useFrame(() => (mesh.current.rotation.y =  mesh.current.rotation.z += 0.01));
    return (
      <mesh ref={mesh} scale={0.7} position={[1, 1, 1]}>
        <cylinderBufferGeometry args={[1, 1, 0.3, 50]} />
        <meshLambertMaterial attach="material" color={customColor} />
      </mesh>
    );
  }

  function Light({ brightness, color }) {
    const ref = useRef()
    // useFrame(() => (mesh.current.rotation.y =  mesh.current.rotation.z += 0.01)); 
    return (
      /* <mesh ref={mesh} scale={1}>
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshLambertMaterial attach="material" color={customColor} />
      </mesh> */
      // <rectAreaLight
      //   width={3}
      //   height={3}
      //   color={color}
      //   intensity={brightness}
      //   position={[0, 1, 2]}
      //   lookAt={[0, 0, 0]}
      //   penumbra={1}
      //   castShadow
      //   />
      // <directionalLight
      //     color={color}
      //     position={[0, 0, 10]}
      //     intensity={brightness}
      //     castShadow
          
      //     shadow-mapSize-width={1024}
      //     shadow-mapSize-height={1024}
      //     shadow-camera-far={30}
      //     shadow-camera-left={-10}
      //     shadow-camera-right={10}
      //     shadow-camera-top={10}
      //     shadow-camera-bottom={-10}
      //   >
      // </directionalLight>
      <pointLight
          color={color}
          position={[0, 0, 10]}
          intensity={brightness}
          castShadow
          
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={30}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
      >

      </pointLight>
    );
  }

  function FillLight({ brightness, color }) {
    return (
      <rectAreaLight
        width={3}
        height={3}
        intensity={brightness}
        color={color}
        position={[2, 1, 4]}
        lookAt={[0, 0, 0]}
        penumbra={2}
        castShadow
      />
    );
  }

  function RimLight({ brightness, color }) {
    return (
      <rectAreaLight
        width={2}
        height={2}
        intensity={brightness}
        color={color}
        position={[1, 4, -2]}
        rotation={[0, 180, 0]}
        castShadow
      />
    );
  }

  function GroundPlane() {
    return (
      <mesh receiveShadow rotation={[5, 0, 0]} position={[0, -1, 0]}>
        <planeBufferGeometry attach="geometry" args={[50, 50]} />
        <meshStandardMaterial attach="material" color="white" />
      </mesh>
    );
  }

  function BackDrop() {
    return (
      <mesh receiveShadow position={[0, 0, -5]}>
        <planeBufferGeometry attach="geometry" args={[50, 50]} />
        <meshStandardMaterial attach="material" color="white" />
      </mesh>
    );
  }

  function Sphere() {
    return (
      <mesh
        visible
        userData={{ test: "hello" }}
        position={[0, 1, 0]}
        rotation={[0, 0, 0]}
        castShadow
      >
        <sphereGeometry attach="geometry" args={[1, 16, 16]} />
        <meshStandardMaterial
          attach="material"
          color="white"
          transparent
          roughness={0.1}
          metalness={0.1}
          toneMapped={false}
        />
      </mesh>
    );
  }

  const clickHandler = (e) => {
    setCustomColor(e.target.id)
    // console.log(customColor)
    console.log(customColor)
  }

  const bgClickHandler = (e) => {
    if (e.target.id === "star") {
      setBackGround("black")
      setIsShow(true)
    }
    else {
      setBackGround(e.target.id)
      setIsShow(false)
    }
  }

  useEffect(() => {
    console.log(customColor)
  }, [])

    return(
        <div 
        // style={{
        //     width: "100vw",
        //     height: "100vh"
        // }}
        >
          
            <Colorlist>
              <li>
                <button id="red" onClick={clickHandler}>
                  red
                </button>
              </li>
              <li>
                <button id="blue" onClick={clickHandler}>
                  blue
                </button>
              </li>
              <li>
                <button id="white" onClick={clickHandler}>
                  white
                </button>
              </li>
              <li>
                <button id="orange" onClick={clickHandler}>
                  orange
                </button>
              </li>
              <li>
                <button id="yellow" onClick={clickHandler}>
                  yellow
                </button>
              </li>
              <li>
                <button id="black" onClick={clickHandler}>
                  black
                </button>
              </li>
            </Colorlist>

            <Backgroundlist>
            <li>
                <button id="red" onClick={bgClickHandler}>
                  red
                </button>
              </li>
              <li>
                <button id="blue" onClick={bgClickHandler}>
                  blue
                </button>
              </li>
              <li>
                <button id="white" onClick={bgClickHandler}>
                  white
                </button>
              </li>
              <li>
                <button id="orange" onClick={bgClickHandler}>
                  orange
                </button>
              </li>
              <li>
                <button id="yellow" onClick={bgClickHandler}>
                  yellow
                </button>
              </li>
              <li>
                <button id="black" onClick={bgClickHandler}>
                  black
                </button>
              </li>
              <li>
                <button id="star" onClick={bgClickHandler}>
                  star
                </button>
              </li>
            </Backgroundlist>
          
            <Canvas shadows style={{
              width: "100vw",
              height: "100vh",
              backgroundColor: backGround,
              overflow: "hidden"
            }}>
              <ambientLight intensity={0.4}/>
              {isShow && 
                <>
                  <Stars fade /> 
                  <OrbitControls
                    autoRotate
                    autoRotateSpeed={2}
                  />
                </>
                }
              <OrbitControls 
              // autoRotate 
              // autoRotateSpeed={2} 
              />
              <CoinMesh/>
              {/* <GroundPlane receiveShadow/>
              <BackDrop receiveShadow/>
              <Sphere 
              // scale={0.009} 
              castShadow /> */}
              {/* <Light brightness={0.2} 
              // color="#ffbdf4" 
              color={customColor}
              /> */}
              {/* <FillLight brightness={2.6} color="#bdefff" />
              <RimLight brightness={54} color="#fff" /> */}
            </Canvas>
        </div>
    )
}