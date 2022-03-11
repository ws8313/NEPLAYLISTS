import ReactDOM from "react-dom"
import React, { useRef, useState } from "react"
import { useThree } from "@react-three/fiber"
import { useDrag } from "react-use-gesture"


//저장버튼 누르면, Draggable의 ~~가 저장됨.
export default function UseDragEx({show}) {
  const { size, viewport } = useThree()
  const ref = useRef();
  const [position,setPosition] = useState([0,0,0])
  const aspect = size.width / viewport.width 

  const bind = useDrag(({ offset : [x,z] }) => {
    const [,y,] =position;
    setPosition([x/aspect, y, z/aspect]);
  }, {pointerEvents : true})

  return (
    <>
    <mesh position={position} {...bind()} ref={ref}>
      <boxBufferGeometry attatch="geometry"  args={[10,10,10]}/>
      <meshLambertMaterial attatch="material" color="orange" />
    </mesh> 
  </>
  )
}