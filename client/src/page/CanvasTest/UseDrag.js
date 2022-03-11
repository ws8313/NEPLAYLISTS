import React, { useRef, useState } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { useDrag } from "react-use-gesture";
import { useGLTF } from '@react-three/drei'

//저장버튼 누르면, Draggable의 ~~가 저장됨.
export default function Model({ show }) {
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;
  const { nodes, materials } = useGLTF('/isometric_room.gltf')

    const ref = useRef();
    const [position, setPosition] = useState([0, 0, 0]);
    const bind = useDrag(
      ({ offset: [x, z] }) => {
        const [, y] = position;
        setPosition([x / aspect, y, z / aspect]);
      },
      { pointerEvents: true }
    );
      
    return (
        <group rotation={[-Math.PI / 2, 0, 0]} scale={[95, 95, 3.73]} position={position + [5, -0.7, 5]} {...bind()} ref={ref}>
          <mesh geometry={nodes.Cube_Material_0.geometry} material={nodes.Cube_Material_0.material} />
        </group>
    );}
  // return(
  //   <>
  //   <Obj1/>
  //   </>
  // )
// }
