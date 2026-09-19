// app/components/TrayModel.tsx
"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows, useGLTF } from "@react-three/drei";
import { Suspense, useEffect, useMemo } from "react";
import * as THREE from "three";

// Definice možných parametrů, které nám pošle UI konfigurátoru
interface TrayModelProps {
  baseColor?: string;
  textColor?: string;
  materialType?: "matte" | "wood" | "metal" | "translucent";
}

function RealModel({ baseColor = "#161616", textColor = "#888888", materialType = "matte" }: TrayModelProps) {
  const { scene } = useGLTF("/models/tray.glb?v=8");

  // useMemo zajistí, že se materiály přepočítají POUZE tehdy, když uživatel klikne na novou barvu
  const materials = useMemo(() => {
    // Výchozí hodnoty pro matné PLA
    let roughness = 0.85;
    let metalness = 0.0;
    let transmission = 0.0;
    let thickness = 0.0;
    let transparent = false;
    let opacity = 1.0;

    // Logika pro různé typy filamentů
    if (materialType === "metal") {
      roughness = 0.3;
      metalness = 0.8;
    } else if (materialType === "wood") {
      roughness = 0.9;
      metalness = 0.0;
      // Zde později přidáme bump mapu (texturu dřeva)
    } else if (materialType === "translucent") {
      roughness = 0.2;
      metalness = 0.1;
      transmission = 0.9; // Efekt matného skla / průsvitného plastu
      thickness = 2.0;    // Jak moc se láme světlo
      transparent = true;
      opacity = 0.9;
    }

    return {
      body: new THREE.MeshPhysicalMaterial({
        color: baseColor,
        roughness,
        metalness,
        transmission,
        thickness,
        transparent,
        opacity,
      }),
      text: new THREE.MeshStandardMaterial({
        color: textColor,
        roughness: 0.5,
        metalness: 0.2,
      })
    };
  }, [baseColor, textColor, materialType]);

  useEffect(() => {
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.geometry.computeVertexNormals();

        if (child.name.includes("2") || child.name.includes("3") || child.name.includes("text")) {
          child.material = materials.text;
        } else {
          child.material = materials.body;
        }
        
        child.castShadow = true; 
        child.receiveShadow = true; 
      }
    });
  }, [scene, materials]);

  return <primitive object={scene} scale={0.01} />;
}

useGLTF.preload("/models/tray.glb?v=8");

// Komponenta nyní přijímá props z nadřazené stránky
export default function TrayModel({ baseColor, textColor, materialType }: TrayModelProps) {
  return (
    <div className="w-full h-[400px] md:h-[600px] cursor-grab active:cursor-grabbing bg-transparent">
      <Canvas camera={{ position: [0, 3, 5.5], fov: 45 }}>
        <ambientLight intensity={0.9} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1.5} />
        <spotLight position={[-10, 5, -10]} angle={0.2} penumbra={1} intensity={0.8} color="#ffffff" />
        
        <Environment preset="studio" />
        
        <Suspense fallback={null}>
          <RealModel baseColor={baseColor} textColor={textColor} materialType={materialType} />
        </Suspense>

        <ContactShadows position={[0, -0.01, 0]} opacity={0.7} scale={10} blur={2.5} far={4} color="#000000" />
        
        <OrbitControls 
          autoRotate 
          autoRotateSpeed={1.0} 
          enableZoom={false} 
          enablePan={false}
          maxPolarAngle={Math.PI / 2.1}
          target={[0, 1.25, 0]} 
        />
      </Canvas>
    </div>
  );
}