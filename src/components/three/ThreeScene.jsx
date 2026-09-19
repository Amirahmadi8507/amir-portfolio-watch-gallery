import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { PerspectiveCamera } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

import SceneLights from "./SceneLights";
import HeroObject from "./HeroObject";
import FloatingParticles from "./FloatingParticles";

function SceneContent() {
  const groupRef = useRef();

  useFrame((state) => {
    if (!groupRef.current) return;

    const mouseX = state.pointer.x;
    const mouseY = state.pointer.y;

    const targetRotationY = mouseX * 0.08;
    const targetRotationX = -mouseY * 0.05;

    groupRef.current.rotation.y +=
      (targetRotationY - groupRef.current.rotation.y) * 0.02;

    groupRef.current.rotation.x +=
      (targetRotationX - groupRef.current.rotation.x) * 0.02;
  });

  return (
    <group ref={groupRef}>
      <SceneLights />

      {/* آبجکت اصلی در مرکز صحنه */}
      <group position={[0, 0, 0]}>
        <HeroObject />
      </group>

      {/* ذرات در فضای اطراف */}
      <group position={[0, 0, -1]}>
        <FloatingParticles />
      </group>
    </group>
  );
}

function ThreeScene() {
  return (
    <div className="three-scene">
      <Canvas
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
        }}
        camera={{
          position: [0, 0, 7],
          fov: 42,
          near: 0.1,
          far: 100,
        }}
      >
        <Suspense fallback={null}>
          <PerspectiveCamera
            makeDefault
            position={[0, 0, 7]}
            fov={42}
            near={0.1}
            far={100}
          />

          <SceneContent />

          <EffectComposer>
            <Bloom
              intensity={0.55}
              luminanceThreshold={0.75}
              luminanceSmoothing={0.5}
              mipmapBlur
            />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  );
}

export default ThreeScene;