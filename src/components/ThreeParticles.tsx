'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface ThreeParticlesProps {
    className?: string;
}

export default function ThreeParticles({ className = '' }: ThreeParticlesProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
    const [isClient, setIsClient] = useState(false);

    // Only render on client to avoid hydration mismatch
    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (!isClient || !containerRef.current) return;

        const container = containerRef.current;
        const width = container.clientWidth;
        const height = container.clientHeight;

        // Scene setup
        const scene = new THREE.Scene();

        // Camera
        const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
        camera.position.z = 100;

        // Renderer - optimized settings
        const renderer = new THREE.WebGLRenderer({
            antialias: false,
            alpha: true,
            powerPreference: 'high-performance'
        });
        renderer.setSize(width, height);
        renderer.setPixelRatio(1);
        renderer.setClearColor(0x000000, 0);
        container.appendChild(renderer.domElement);
        rendererRef.current = renderer;

        // Seeded random for consistent values
        const seededRandom = (seed: number) => {
            const x = Math.sin(seed) * 10000;
            return x - Math.floor(x);
        };

        // Google-style confetti colors
        const confettiColors = [
            new THREE.Color('#4285F4'),
            new THREE.Color('#EA4335'),
            new THREE.Color('#FBBC04'),
            new THREE.Color('#34A853'),
        ];

        // Reduced particle count
        const particleCount = 120;

        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);
        const velocities: number[] = [];

        const spreadX = 200;
        const spreadY = 160;

        for (let i = 0; i < particleCount; i++) {
            // Use seeded random for consistent initial positions
            const seed = i * 1337;
            positions[i * 3] = (seededRandom(seed) - 0.5) * spreadX;
            positions[i * 3 + 1] = (seededRandom(seed + 1) - 0.5) * spreadY;
            positions[i * 3 + 2] = -50 + seededRandom(seed + 2) * 60;

            const colorIndex = Math.floor(seededRandom(seed + 3) * confettiColors.length);
            const color = confettiColors[colorIndex];
            colors[i * 3] = color.r;
            colors[i * 3 + 1] = color.g;
            colors[i * 3 + 2] = color.b;

            velocities.push(0.015 + seededRandom(seed + 4) * 0.025);
        }

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const material = new THREE.PointsMaterial({
            size: 3,
            vertexColors: true,
            transparent: true,
            opacity: 0.8,
            sizeAttenuation: true
        });

        const particles = new THREE.Points(geometry, material);
        scene.add(particles);

        // Animation loop - throttled to 24fps for scroll performance
        let animationId: number;
        let lastTime = 0;
        const frameInterval = 1000 / 24;

        const animate = (currentTime: number) => {
            animationId = requestAnimationFrame(animate);

            const delta = currentTime - lastTime;
            if (delta < frameInterval) return;
            lastTime = currentTime - (delta % frameInterval);

            const posArray = geometry.attributes.position.array as Float32Array;

            for (let i = 0; i < particleCount; i++) {
                posArray[i * 3 + 1] += velocities[i];

                if (posArray[i * 3 + 1] > spreadY / 2 + 20) {
                    posArray[i * 3 + 1] = -spreadY / 2 - 20;
                    posArray[i * 3] = (seededRandom(i + currentTime * 0.001) - 0.5) * spreadX;
                }
            }

            geometry.attributes.position.needsUpdate = true;
            renderer.render(scene, camera);
        };

        requestAnimationFrame(animate);

        // Throttled resize
        let resizeTimeout: NodeJS.Timeout;
        const handleResize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                const newWidth = container.clientWidth;
                const newHeight = container.clientHeight;
                camera.aspect = newWidth / newHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(newWidth, newHeight);
            }, 150);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', handleResize);
            clearTimeout(resizeTimeout);
            if (container.contains(renderer.domElement)) {
                container.removeChild(renderer.domElement);
            }
            geometry.dispose();
            material.dispose();
            renderer.dispose();
        };
    }, [isClient]);

    // Don't render anything on server to avoid hydration mismatch
    if (!isClient) {
        return (
            <div
                className={`absolute inset-0 overflow-hidden ${className}`}
                style={{ zIndex: 0 }}
            />
        );
    }

    return (
        <div
            ref={containerRef}
            className={`absolute inset-0 overflow-hidden ${className}`}
            style={{
                zIndex: 0,
                contain: 'layout paint',
                isolation: 'isolate'
            }}
        />
    );
}
