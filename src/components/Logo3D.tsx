import { Suspense, useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment, OrbitControls } from "@react-three/drei";
import { Group } from "three";
import * as THREE from "three";

interface Logo3DProps {
  className?: string;
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
  autoRotate?: boolean;
  enableControls?: boolean;
  onLoad?: () => void;
}

function LogoModel({
  scale = 1,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  autoRotate = true,
}: Omit<Logo3DProps, "className" | "enableControls">) {
  const { scene } = useGLTF("/assets/specslo_logo_3d.glb");
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (groupRef.current && autoRotate) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
  });

  // Calculate bounding box to ensure object fits
  useEffect(() => {
    if (scene && groupRef.current) {
      const box = new THREE.Box3().setFromObject(scene);
      const size = box.getSize(new THREE.Vector3());
      const maxDimension = Math.max(size.x, size.y, size.z);
      
      // Use a more consistent scale factor based on the scale prop
      let scaleFactor;
      if (scale >= 2) {
        scaleFactor = 1.5 / maxDimension; // Larger scale for bigger displays
      } else if (scale >= 1) {
        scaleFactor = 1.8 / maxDimension; // Medium scale
      } else {
        scaleFactor = 1.5 / maxDimension; // Default scale
      }
      
      groupRef.current.scale.setScalar(scaleFactor * scale);
      
     
    }
  }, [scene, scale]);

  return (
    <group ref={groupRef} position={position} rotation={rotation}>
      <primitive object={scene} />
    </group>
  );
}

function LoadingFallback() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#ffd63c" />
    </mesh>
  );
}

export default function Logo3D({
  className = "",
  scale = 1,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  autoRotate = true,
  enableControls = false,
  // onLoad,
}: Logo3DProps) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { offsetWidth, offsetHeight } = containerRef.current;
        setDimensions({ width: offsetWidth, height: offsetHeight });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Recalculate scale when dimensions change
  useEffect(() => {
    if (dimensions.width > 0 && dimensions.height > 0) {
      // Force a re-render by updating the scale
      const timeout = setTimeout(() => {
        // This will trigger the LogoModel to recalculate its scale
        window.dispatchEvent(new Event('resize'));
      }, 100);
      
      return () => clearTimeout(timeout);
    }
  }, [dimensions]);

  return (
    <div
      ref={containerRef}
      className={`w-full h-full three-d-element !min-h-[300px] lg:!min-h-[400px] ${className}`}
      style={{ 
        minHeight: "300px",
        minWidth: "300px"
      }}
    >
        <Canvas
          camera={{
            position: [0, 0, 6],
            fov: 50,
          }}
          style={{
            background: "transparent",
            width: "100%",
            height: "100%",
            display: "block",
          }}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
          }}
          dpr={[1, 2]}
          orthographic={false}
        >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
        <pointLight position={[-10, -10, -5]} intensity={0.3} />
        
        {/* Clipping planes to prevent overflow */}
        <fog attach="fog" args={['#000000', 5, 20]} />

        <Suspense fallback={<LoadingFallback />}>
          <LogoModel
            scale={scale}
            position={position}
            rotation={rotation}
            autoRotate={autoRotate}
          />
        </Suspense>

        {enableControls && <OrbitControls enableZoom={false} />}
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
}
