import ReactDOM from "react-dom"
import React, { useRef, useState } from "react"
import { Canvas, useThree, useFrame } from "@react-three/fiber"
import { useDrag } from "react-use-gesture"
import { TransformControls } from "@react-three/drei"

export default function Draggable() {
  const { size, viewport } = useThree()
  const ref = useRef();
  const [position,setPosition] = useState([0,0,0])

  const aspect = size.width / viewport.width 
  
  useFrame(()=>{
    // ref.current.rotation.z += 0.01
    // ref.current.rotation.x += 0.01    
  });

  const bind = useDrag(({ offset : [x,z] }) => {
    const [,y,] =position;
    setPosition([x/aspect, y, z/aspect]);
  }, {pointerEvents : true})

  return (
    <mesh position={position} {...bind()} ref={ref}>
      <boxBufferGeometry attatch="geometry"  args={[10,10,10]}/>
      <meshLambertMaterial attatch="material" color="orange" />
    </mesh>
  )
}

//Edit Page에서는 카메라 고정시키고, 요소들 선택하면, MODEL 나타나고, 그걸 이동시킬수 있는 식.
