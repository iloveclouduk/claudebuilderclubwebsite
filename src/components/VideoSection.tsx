'use client';

import { useRef, useEffect, useState } from 'react';

export default function VideoSection() {
    const sectionRef = useRef<HTMLElement>(null);

    // Single Claude intro video
    const video = { src: '/videos/intro-video.mp4', title: 'Claude Intro Video' };

    // Scroll-linked animation - tracks scroll progress
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const section = sectionRef.current;
            if (!section) return;

            const rect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Calculate progress: 0 when section enters viewport, 1 when it's fully visible
            // Start animating when section is 200px from entering the viewport
            const startPoint = windowHeight + 100;
            const endPoint = windowHeight * 0.3; // Animation completes when section is 30% from top

            const progress = Math.min(
                Math.max((startPoint - rect.top) / (startPoint - endPoint), 0),
                1
            );

            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial check

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);



    return (
        <section
            ref={sectionRef}
            className="relative py-4 px-2 overflow-hidden"
            style={{ perspective: '1200px', perspectiveOrigin: 'center 40%' }}
        >
            <div
                className="max-w-[1200px] mx-auto will-change-transform"
                style={{
                    transformOrigin: 'center bottom',
                    opacity: scrollProgress,
                    transform: `translateY(${120 * (1 - scrollProgress)}px) translateZ(${-200 * (1 - scrollProgress)}px) scale(${0.6 + 0.4 * scrollProgress}) rotateX(${15 * (1 - scrollProgress)}deg)`,
                }}
            >
                <div className="relative rounded-[24px] overflow-hidden bg-[#0a0a0a] aspect-video border-2 border-white/25 ring-1 ring-white/10" style={{ boxShadow: '0 25px 50px -12px rgba(255, 255, 255, 0.8)' }}>
                    <video
                        src={video.src}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-contain"
                    />


                    {/* Overlay to ensure minimal interaction and add slight dimming */}
                    <div className="absolute inset-0 bg-black/5 pointer-events-none" />
                </div>
            </div>
        </section>
    );
}
