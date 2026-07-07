import { useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { PerspectiveCamera, OrbitControls } from "@react-three/drei"
import * as THREE from "three"

function RotatingShape() {
  const meshRef = useRef<THREE.Group>(null)
  const [hovered, setHovered] = useState(false)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.002
      meshRef.current.rotation.y += 0.004
      meshRef.current.scale.lerp(new THREE.Vector3(hovered ? 1.2 : 1, hovered ? 1.2 : 1, hovered ? 1.2 : 1), 0.1)
    }
  })

  return (
    <group ref={meshRef} onPointerEnter={() => setHovered(true)} onPointerLeave={() => setHovered(false)}>
      {/* Main icosahedron */}
      <mesh>
        <icosahedronGeometry args={[1, 4]} />
        <meshPhongMaterial
          color="#5541ff"
          emissive="#3a24aa"
          shininess={100}
          wireframe={false}
          opacity={0.9}
          transparent
        />
      </mesh>

      {/* Outer rotating ring */}
      <mesh rotation={[Math.PI / 2.5, 0, Math.PI / 3]}>
        <torusGeometry args={[1.5, 0.08, 16, 32]} />
        <meshPhongMaterial color="#d86d35" emissive="#7a4028" shininess={60} />
      </mesh>

      {/* Another ring */}
      <mesh rotation={[0, Math.PI / 4, Math.PI / 3.5]}>
        <torusGeometry args={[1.2, 0.06, 16, 32]} />
        <meshPhongMaterial color="#00d9ff" emissive="#007a8c" shininess={60} />
      </mesh>
    </group>
  )
}

export function FloatingShape3D() {
  return (
    <Canvas className="w-full h-full">
      <PerspectiveCamera makeDefault position={[0, 0, 3]} />
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, 10]} intensity={0.5} color="#d86d35" />
      <pointLight position={[0, 0, -15]} intensity={0.4} color="#00d9ff" />
      <RotatingShape />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
    </Canvas>
  )
}
