import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Group, Mesh } from "three";

function CoreShape() {
  const meshRef = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += delta * 0.06;
    meshRef.current.rotation.y += delta * 0.09;
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.5, 1]} />
      <meshBasicMaterial
        color="#4F46E5"
        wireframe
        transparent
        opacity={0.5}
      />
    </mesh>
  );
}

interface OrbitRingProps {
  radius: number;
  speed: number;
  tilt: [number, number, number];
  color: string;
  nodeCount: number;
}

function OrbitRing({
  radius,
  speed,
  tilt,
  color,
  nodeCount,
}: OrbitRingProps) {
  const groupRef = useRef<Group>(null);
  const nodes = Array.from({ length: nodeCount });

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.z += delta * speed;
  });

  return (
    <group rotation={tilt}>
      <group ref={groupRef}>
        <mesh>
          <torusGeometry args={[radius, 0.004, 8, 100]} />
          <meshBasicMaterial
            color={color}
            transparent
            opacity={0.35}
          />
        </mesh>

        {nodes.map((_, index) => {
          const angle = (index / nodeCount) * Math.PI * 2;

          return (
            <mesh
              key={index}
              position={[
                Math.cos(angle) * radius,
                Math.sin(angle) * radius,
                0,
              ]}
            >
              <sphereGeometry args={[0.045, 16, 16]} />
              <meshBasicMaterial color={color} />
            </mesh>
          );
        })}
      </group>
    </group>
  );
}

function Rig() {
  useFrame((state) => {
    const { pointer, camera } = state;

    camera.position.x +=
      (pointer.x * 0.6 - camera.position.x) * 0.03;

    camera.position.y +=
      (pointer.y * 0.4 - camera.position.y) * 0.03;

    camera.lookAt(0, 0, 0);
  });

  return null;
}

function SceneContents() {
  return (
    <>
      <CoreShape />

      <OrbitRing
        radius={2.3}
        speed={0.12}
        tilt={[0.6, 0.2, 0]}
        color="#7C3AED"
        nodeCount={6}
      />

      <OrbitRing
        radius={2.9}
        speed={-0.08}
        tilt={[1.1, -0.3, 0.4]}
        color="#06B6D4"
        nodeCount={5}
      />

      <OrbitRing
        radius={3.5}
        speed={0.05}
        tilt={[-0.4, 0.6, 0.2]}
        color="#10B981"
        nodeCount={4}
      />

      <Rig />
    </>
  );
}

export default function HeroScene() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        dpr={[1, 1.25]}
        gl={{ antialias: true, alpha: true }}
      >
        <SceneContents />
      </Canvas>
    </div>
  );
}
