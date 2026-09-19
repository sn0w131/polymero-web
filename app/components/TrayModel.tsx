// app/components/TrayModel.tsx
"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows, useGLTF, Center } from "@react-three/drei";
import { Suspense, useEffect } from "react";
import * as THREE from "three";

function RealModel() {
  // Načtení reálného modelu ze složky public/models/
  const { scene } = useGLTF("/models/tray.glb");

  // Vynucení industriálního PLA vzhledu (přepíše defaultní materiály z exportu)
  useEffect(() => {
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material = new THREE.MeshStandardMaterial({
          color: "#181818", // Tmavě šedá/černá
          roughness: 0.65,  // Matný PLA povrch
          metalness: 0.1,   // Jemný odlesk hran
        });
      }
    });
  }, [scene]);

  // scale={0.01} převede milimetry z Fusion 360 na metry pro Three.js
  return <primitive object={scene} scale={0.01} />;
}

// Přednačtení modelu pro okamžité zobrazení
useGLTF.preload("/models/tray.glb");

export default function TrayModel() {
  return (
    <div className="w-full h-[400px] md:h-[600px] cursor-grab active:cursor-grabbing bg-transparent">
      <Canvas camera={{ position: [0, 2, 4], fov: 45 }}>
        <ambientLight intensity={0.8} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} />
        <spotLight position={[-10, 5, -10]} angle={0.2} penumbra={1} intensity={1} color="#ffffff" />
        
        <Environment preset="studio" />
        
        <Suspense fallback={null}>
          <Center position={[0, 0, 0]}>
            <RealModel />
          </Center>
        </Suspense>

        <ContactShadows position={[0, -0.2, 0]} opacity={0.7} scale={5} blur={2} far={4} color="#000000" />
        
        <OrbitControls 
          autoRotate 
          autoRotateSpeed={1.0} 
          enableZoom={false} 
          enablePan={false}
          maxPolarAngle={Math.PI / 2.1} 
        />
      </Canvas>
    </div>
  );
}