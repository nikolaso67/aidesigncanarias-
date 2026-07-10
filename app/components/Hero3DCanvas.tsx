"use client";

import { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Escena 3D del hero (nudo torus). Vive en su propio chunk: HeroV3D la carga
 * con next/dynamic DESPUÉS del primer render y solo en desktop, para que
 * three.js no entre en el bundle crítico ni toque el LCP.
 */

function Knot({ progress }: { progress: React.RefObject<number> }) {
  const mesh = useRef<THREE.Mesh>(null);
  const pointer = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useFrame((state, delta) => {
    const m = mesh.current;
    if (!m) return;
    const { x, y } = pointer.current;
    const p = progress.current ?? 0;

    // Rotación: deriva constante + cursor con inercia + vuelta completa con el scroll
    const idle = state.clock.elapsedTime * 0.12;
    m.rotation.y = THREE.MathUtils.damp(m.rotation.y, idle + x * 1.2 + p * Math.PI * 2, 2.5, delta);
    m.rotation.x = THREE.MathUtils.damp(m.rotation.x, y * 0.7 + p * 0.9, 2.5, delta);

    // Con el scroll el objeto se acerca y sube un poco
    const s = 1.55 * (1 - p * 0.25);
    m.scale.setScalar(THREE.MathUtils.damp(m.scale.x, s, 3, delta));
    m.position.y = THREE.MathUtils.damp(m.position.y, p * 0.9, 3, delta);
  });

  return (
    <mesh ref={mesh} scale={1.55}>
      <torusKnotGeometry args={[1, 0.32, 260, 48]} />
      <meshPhysicalMaterial
        color="#5b4dff"
        roughness={0.14}
        metalness={0.75}
        clearcoat={1}
        clearcoatRoughness={0.25}
      />
    </mesh>
  );
}

export default function Hero3DCanvas({ progress }: { progress: React.RefObject<number> }) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 7], fov: 42 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 6, 4]} intensity={2.4} color="#d6d2ff" />
      <pointLight position={[-6, -2, 5]} intensity={50} color="#38bdf8" />
      <pointLight position={[3, -6, -4]} intensity={36} color="#7c3aed" />
      <Knot progress={progress} />
    </Canvas>
  );
}
