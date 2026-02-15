'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';

// Shader for "Premium Sparkles" - Holographic/Magic feel
const SparkleShaderMaterial = {
    uniforms: {
        uTime: { value: 0 },
        // "Holographic" palette: White base with subtle iridescent shifts
        uColor1: { value: new THREE.Color('#FFFFFF') }, // Pure sparkle
        uColor2: { value: new THREE.Color('#b3dffc') }, // Soft Sky
        uColor3: { value: new THREE.Color('#e0b3fc') }, // Soft Lavender
    },
    vertexShader: `
    uniform float uTime;
    attribute float aScale;
    attribute float aRandom;
    varying vec3 vPosition;
    varying float vRandom;
    varying float vScale;

    void main() {
      vPosition = position;
      vRandom = aRandom;
      vScale = aScale; // Pass scale to fragment for sparkle intensity
      
      vec3 pos = position;
      
      // ultra-slow, premium drift
      float time = uTime * 0.15; // Very slow
      
      // Complex organic flow (Curl-noise like feel with sin/cos)
      pos.x += sin(time * 0.5 + pos.y * 0.2) * 0.3;
      pos.y += cos(time * 0.3 + pos.x * 0.2) * 0.3;
      pos.z += sin(time * 0.7 + aRandom * 10.0) * 0.2;

      vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
      gl_Position = projectionMatrix * mvPosition;
      
      // Perspective scale
      gl_PointSize = aScale * (30.0 / -mvPosition.z);
    }
  `,
    fragmentShader: `
    uniform float uTime;
    uniform vec3 uColor1;
    uniform vec3 uColor2;
    uniform vec3 uColor3;
    
    varying vec3 vPosition;
    varying float vRandom;
    varying float vScale;

    void main() {
      // Soft Circle
      float dist = length(gl_PointCoord - vec2(0.5));
      if (dist > 0.5) discard;
      
      // Diffuse glow from center
      float strength = pow(1.0 - dist * 2.0, 2.0);

      // TWINKLE EFFECT
      // Use sine wave based on time and random offset
      float sparkle = 0.5 + 0.5 * sin(uTime * 2.0 + vRandom * 100.0);
      
      // COLOR MIXING
      // Mix based on "sparkle" phase and position to create iridescence
      vec3 finalColor = mix(uColor1, uColor2, sin(vPosition.x * 0.1 + uTime * 0.2) * 0.5 + 0.5);
      finalColor = mix(finalColor, uColor3, cos(vPosition.y * 0.1 + uTime * 0.1) * 0.5 + 0.5);
      
      // Add extra white brightness when twinkling
      finalColor += vec3(sparkle * 0.5);

      gl_FragColor = vec4(finalColor, strength * min(sparkle + 0.3, 1.0));
    }
  `
};

function Sparkles() {
    const shaderRef = useRef<THREE.ShaderMaterial>(null!);
    const count = 800; // Elegant amount, not too dense

    const [positions, scales, randoms] = useMemo(() => {
        const positions = new Float32Array(count * 3);
        const scales = new Float32Array(count);
        const randoms = new Float32Array(count);

        for (let i = 0; i < count; i++) {
            const r = 30; // Wide spread
            positions[i * 3] = (Math.random() - 0.5) * r;
            positions[i * 3 + 1] = (Math.random() - 0.5) * r; // Taller Y spread
            positions[i * 3 + 2] = (Math.random() - 0.5) * 15; // Deep depth

            scales[i] = Math.random() * 4.0 + 1.0; // Varied sizes (tiny to large)
            randoms[i] = Math.random();
        }
        return [positions, scales, randoms];
    }, []);

    useFrame((state) => {
        if (shaderRef.current) {
            shaderRef.current.uniforms.uTime.value = state.clock.elapsedTime;
        }
    });

    const shaderArgs = useMemo(() => ({
        uniforms: {
            uTime: { value: 0 },
            uColor1: { value: new THREE.Color('#FFFFFF') },
            uColor2: { value: new THREE.Color('#b3dffc') },
            uColor3: { value: new THREE.Color('#e0b3fc') }
        },
        vertexShader: SparkleShaderMaterial.vertexShader,
        fragmentShader: SparkleShaderMaterial.fragmentShader,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending // Glow integration
    }), []);

    return (
        <points>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} args={[positions, 3]} />
                <bufferAttribute attach="attributes-aScale" count={count} array={scales} itemSize={1} args={[scales, 1]} />
                <bufferAttribute attach="attributes-aRandom" count={count} array={randoms} itemSize={1} args={[randoms, 1]} />
            </bufferGeometry>
            <shaderMaterial ref={shaderRef} attach="material" {...shaderArgs} />
        </points>
    );
}

export default function AIParticles({ className = '' }: { className?: string }) {
    return (
        <div className={`w-full h-full ${className}`}>
            <Canvas
                camera={{ position: [0, 0, 12], fov: 50 }}
                gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
                dpr={[1, 1.5]}
            >
                <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.2}>
                    <Sparkles />
                </Float>

                <EffectComposer>
                    <Bloom
                        luminanceThreshold={0.5}
                        mipmapBlur
                        intensity={1.0} // Soft dreamlike glow
                        radius={0.5}
                    />
                </EffectComposer>
            </Canvas>
        </div>
    );
}
