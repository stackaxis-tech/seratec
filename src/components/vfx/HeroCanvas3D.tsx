import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, Lightformer } from '@react-three/drei';
import * as THREE from 'three';

interface HeroCanvas3DProps {
  scrollProgress: number;
  isMobile: boolean;
}

/**
 * Custom animated wave surface mesh with luminous cyan & ice-blue highlights.
 */
const LiquidWaveSurface: React.FC<{ scrollProgress: number }> = ({ scrollProgress }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(13, 5.2, 56, 26);
    geo.rotateX(-Math.PI * 0.36);
    return geo;
  }, []);

  const basePositions = useMemo(() => {
    return Float32Array.from(geometry.attributes.position.array as Float32Array);
  }, [geometry]);

  useFrame(({ clock }) => {
    const mesh = meshRef.current;
    if (!mesh) return;
    const t = clock.getElapsedTime();
    const pos = geometry.attributes.position as THREE.BufferAttribute;
    const arr = pos.array as Float32Array;

    for (let i = 0; i < pos.count; i++) {
      const idx = i * 3;
      const bx = basePositions[idx];
      const by = basePositions[idx + 1];
      const bz = basePositions[idx + 2];

      const waveA = Math.sin(bx * 0.6 + t * 0.85) * 0.24;
      const waveB = Math.cos(bz * 0.85 + t * 0.65) * 0.16;
      const waveC = Math.sin((bx + bz) * 0.42 - t * 0.5) * 0.12;

      arr[idx + 1] = by + waveA + waveB + waveC;
    }
    pos.needsUpdate = true;
    geometry.computeVertexNormals();

    mesh.position.y = -1.65 - scrollProgress * 0.6;
    mesh.rotation.z = Math.sin(t * 0.2) * 0.025;
  });

  return (
    <mesh ref={meshRef} geometry={geometry} position={[1.2, -1.65, -2.2]}>
      <meshPhysicalMaterial
        color="#B9E5FF"
        emissive="#27B9EC"
        emissiveIntensity={0.22}
        roughness={0.14}
        metalness={0.05}
        clearcoat={1}
        clearcoatRoughness={0.1}
        transparent
        opacity={0.42}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

/**
 * Seamless closed flowing liquid-glass ribbon loop (no blunt open ends).
 */
const LiquidGlassRibbonLoop: React.FC<{ scrollProgress: number; isMobile: boolean }> = ({
  scrollProgress,
  isMobile,
}) => {
  const ribbonRef = useRef<THREE.Mesh>(null);

  const tubeGeometry = useMemo(() => {
    const points: THREE.Vector3[] = [];
    const segments = 24;
    for (let i = 0; i < segments; i++) {
      const angle = (i / segments) * Math.PI * 2;
      const x = Math.cos(angle) * 2.25;
      const y = Math.sin(angle * 2) * 0.55 + Math.sin(angle) * 0.65;
      const z = Math.sin(angle) * 1.15;
      points.push(new THREE.Vector3(x, y, z));
    }
    const curve = new THREE.CatmullRomCurve3(points, true);
    return new THREE.TubeGeometry(curve, 128, 0.11, 20, true);
  }, []);

  useFrame(({ clock, pointer }) => {
    const mesh = ribbonRef.current;
    if (!mesh) return;
    const t = clock.getElapsedTime();
    mesh.rotation.x = 0.35 + Math.sin(t * 0.35) * 0.1 + pointer.y * 0.08;
    mesh.rotation.y = t * 0.14 + pointer.x * 0.12;
    mesh.rotation.z = Math.cos(t * 0.25) * 0.08;
    mesh.position.y = 0.05 + Math.sin(t * 0.55) * 0.12 - scrollProgress * 0.85;
  });

  return (
    <mesh
      ref={ribbonRef}
      geometry={tubeGeometry}
      position={[isMobile ? 0.6 : 2.55, 0.05, -0.65]}
      scale={isMobile ? 0.68 : 0.96}
    >
      <meshPhysicalMaterial
        color="#EAF7FF"
        emissive="#27B9EC"
        emissiveIntensity={0.28}
        roughness={0.08}
        metalness={0.06}
        clearcoat={1}
        clearcoatRoughness={0.06}
        ior={1.36}
        transparent
        opacity={0.76}
      />
    </mesh>
  );
};

/**
 * Large floating 3D abstract blue & cyan sculptural wave torus + orbiting tech geometry.
 */
const FloatingSculptureGroup: React.FC<{ scrollProgress: number; isMobile: boolean }> = ({
  scrollProgress,
  isMobile,
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const coreRingRef = useRef<THREE.Mesh>(null);
  const outerRingRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock, pointer }) => {
    const t = clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        pointer.x * 0.2 + t * 0.07,
        0.04
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        -pointer.y * 0.12,
        0.04
      );
      groupRef.current.position.y = 0.15 - scrollProgress * 0.95;
    }
    if (coreRingRef.current) {
      coreRingRef.current.rotation.x = t * 0.2;
      coreRingRef.current.rotation.z = t * 0.15;
    }
    if (outerRingRef.current) {
      outerRingRef.current.rotation.y = -t * 0.16;
      outerRingRef.current.rotation.x = Math.PI * 0.28 + Math.sin(t * 0.3) * 0.12;
    }
  });

  const posX = isMobile ? 0.5 : 2.55;
  const scale = isMobile ? 0.68 : 0.95;

  return (
    <group ref={groupRef} position={[posX, 0.15, -0.5]} scale={scale}>
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.48}>
        <mesh ref={coreRingRef}>
          <torusKnotGeometry args={[1.08, 0.3, 128, 28, 2, 3]} />
          <meshPhysicalMaterial
            color="#B9E5FF"
            emissive="#27B9EC"
            emissiveIntensity={0.24}
            roughness={0.12}
            metalness={0.05}
            clearcoat={1}
            clearcoatRoughness={0.08}
            ior={1.34}
            transparent
            opacity={0.62}
          />
        </mesh>
      </Float>

      {/* Outer crisp cyan orbital ring */}
      <mesh ref={outerRingRef}>
        <torusGeometry args={[1.95, 0.028, 16, 96]} />
        <meshStandardMaterial
          color="#27B9EC"
          emissive="#27B9EC"
          emissiveIntensity={0.55}
          roughness={0.2}
          metalness={0.2}
          transparent
          opacity={0.7}
        />
      </mesh>

      {/* Floating geometric tech polyhedra */}
      <Float speed={2.2} rotationIntensity={0.75} floatIntensity={0.75}>
        <mesh position={[-1.65, 1.35, 0.55]}>
          <icosahedronGeometry args={[0.24, 0]} />
          <meshPhysicalMaterial
            color="#FFFFFF"
            emissive="#B9E5FF"
            emissiveIntensity={0.35}
            roughness={0.12}
            clearcoat={1}
            transparent
            opacity={0.9}
          />
        </mesh>
      </Float>

      <Float speed={1.9} rotationIntensity={0.7} floatIntensity={0.65}>
        <mesh position={[1.7, -1.15, 0.7]}>
          <octahedronGeometry args={[0.26, 0]} />
          <meshPhysicalMaterial
            color="#1769C2"
            emissive="#27B9EC"
            emissiveIntensity={0.32}
            roughness={0.14}
            metalness={0.15}
            clearcoat={1}
          />
        </mesh>
      </Float>

      <Float speed={2.4} rotationIntensity={0.5} floatIntensity={0.85}>
        <mesh position={[-1.3, -1.3, -0.35]}>
          <sphereGeometry args={[0.18, 24, 24]} />
          <meshPhysicalMaterial
            color="#27B9EC"
            emissive="#B9E5FF"
            emissiveIntensity={0.45}
            roughness={0.08}
            clearcoat={1}
          />
        </mesh>
      </Float>
    </group>
  );
};

/**
 * Lightweight glowing blue & cyan particle field (capped count for 60fps).
 */
const BlueParticleField: React.FC<{ count: number; scrollProgress: number }> = ({
  count,
  scrollProgress,
}) => {
  const pointsRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const seed1 = Math.sin(i * 12.9898) * 43758.5453;
      const seed2 = Math.sin(i * 78.233) * 43758.5453;
      const seed3 = Math.sin(i * 45.164) * 43758.5453;
      const r1 = seed1 - Math.floor(seed1);
      const r2 = seed2 - Math.floor(seed2);
      const r3 = seed3 - Math.floor(seed3);

      arr[i * 3] = (r1 - 0.5) * 14;
      arr[i * 3 + 1] = (r2 - 0.5) * 7.2;
      arr[i * 3 + 2] = (r3 - 0.5) * 4.5 - 1.2;
    }
    return arr;
  }, [count]);

  useFrame(({ clock }) => {
    if (!pointsRef.current) return;
    const t = clock.getElapsedTime();
    pointsRef.current.rotation.y = t * 0.022;
    pointsRef.current.position.y = Math.sin(t * 0.3) * 0.1 - scrollProgress * 0.4;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#27B9EC"
        transparent
        opacity={0.55}
        sizeAttenuation
      />
    </points>
  );
};

const HeroCanvas3D: React.FC<HeroCanvas3DProps> = ({ scrollProgress, isMobile }) => {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0.15, 6.4], fov: 44 }}
      gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
      className="h-full w-full"
    >
      <ambientLight intensity={1.5} color="#FFFFFF" />
      <hemisphereLight args={['#FFFFFF', '#EAF7FF', 1.3]} />
      <directionalLight position={[5, 6, 5]} intensity={1.5} color="#FFFFFF" />
      <directionalLight position={[-4, 2, 4]} intensity={1.0} color="#B9E5FF" />
      <pointLight position={[2.5, 1.5, 3]} intensity={1.4} color="#27B9EC" distance={12} />

      <Environment resolution={128} frames={1}>
        <Lightformer
          form="rect"
          intensity={2.6}
          position={[0, 4, 3]}
          scale={[12, 5, 1]}
          color="#FFFFFF"
        />
        <Lightformer
          form="circle"
          intensity={2.0}
          position={[4, 1, 2]}
          scale={5}
          color="#B9E5FF"
        />
        <Lightformer
          form="rect"
          intensity={1.4}
          position={[-4, -1, 2]}
          scale={[6, 4, 1]}
          color="#27B9EC"
        />
      </Environment>

      <FloatingSculptureGroup scrollProgress={scrollProgress} isMobile={isMobile} />
      <LiquidGlassRibbonLoop scrollProgress={scrollProgress} isMobile={isMobile} />
      <LiquidWaveSurface scrollProgress={scrollProgress} />
      <BlueParticleField count={isMobile ? 42 : 85} scrollProgress={scrollProgress} />
    </Canvas>
  );
};

export default HeroCanvas3D;
