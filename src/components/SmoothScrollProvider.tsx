'use client';

import { useEffect, ReactNode } from 'react';
import Lenis from 'lenis';

interface SmoothScrollProviderProps {
    children: ReactNode;
}

export default function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {

    useEffect(() => {
        // Initialize Lenis with lighter settings for better scroll performance
        const lenis = new Lenis({
            duration: 0.8,           // Faster, more responsive
            easing: (t) => 1 - Math.pow(1 - t, 3), // Cubic ease out - smoother
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 0.8,    // Slower wheel for more control
            touchMultiplier: 1.5,
            syncTouch: true,         // Sync touch for mobile
            syncTouchLerp: 0.075,    // Touch lerp
        });

        // Use a separate animation loop that doesn't block main thread
        let rafId: number;

        function raf(time: number) {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        }

        rafId = requestAnimationFrame(raf);

        // Add lenis class to html for CSS hooks
        document.documentElement.classList.add('lenis');

        return () => {
            cancelAnimationFrame(rafId);
            document.documentElement.classList.remove('lenis');
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
}
