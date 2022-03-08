
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/notebook.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <group position={[-7.82, -8.7, -7.66]}>
            <mesh geometry={nodes.mesh_0.geometry} material={materials.Material__64} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/notebook.gltf')
