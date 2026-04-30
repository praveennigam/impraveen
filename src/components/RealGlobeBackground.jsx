import React, { useMemo, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";

const EARTH_MAP =
  "https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg";
const EARTH_NORMAL =
  "https://threejs.org/examples/textures/planets/earth_normal_2048.jpg";
const CLOUD_MAP =
  "https://threejs.org/examples/textures/planets/earth_clouds_1024.png";

function Earth() {
  const globeRef = useRef();
  const cloudRef = useRef();

  const [earthMap, normalMap, cloudMap] = useLoader(THREE.TextureLoader, [
    EARTH_MAP,
    EARTH_NORMAL,
    CLOUD_MAP,
  ]);

  useMemo(() => {
    [earthMap, normalMap, cloudMap].forEach((texture) => {
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.anisotropy = 8;
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.ClampToEdgeWrapping;
    });
  }, [earthMap, normalMap, cloudMap]);

  useFrame((state, delta) => {
    if (globeRef.current) {
      globeRef.current.rotation.y += delta * 0.16;
      globeRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
    }
    if (cloudRef.current) {
      cloudRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <group>
      <mesh ref={globeRef}>
        <sphereGeometry args={[1.42, 120, 120]} />
        <meshStandardMaterial
          map={earthMap}
          normalMap={normalMap}
          normalScale={new THREE.Vector2(0.6, 0.6)}
          roughness={0.75}
          metalness={0.02}
        />
      </mesh>
      <mesh ref={cloudRef}>
        <sphereGeometry args={[1.46, 120, 120]} />
        <meshStandardMaterial
          map={cloudMap}
          transparent
          opacity={0.35}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

export default function RealGlobeBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[1] flex items-center justify-center opacity-70">
      <div className="h-[560px] w-[560px] max-h-[75vh] max-w-[75vh]">
        <Canvas camera={{ position: [0, 0, 4.2], fov: 40 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 3, 5]} intensity={1.3} />
          <pointLight position={[-4, -2, 3]} intensity={0.6} color="#7dd3fc" />
          <Earth />
        </Canvas>
      </div>
    </div>
  );
}
