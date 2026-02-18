'use client';

import { useRef, useEffect, useState } from 'react';
import ScrollTriggeredTypedText from './ScrollTriggeredTypedText';

export default function KeepThinking() {
    const videoRef = useRef<HTMLVideoElement>(null);

    return (
        <section className="bg-white py-24 px-6 overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                <div className="flex flex-col items-center text-center mb-16">
                    <div className="max-w-[1000px] w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
                        <div>
                            <h2 className="font-serif text-2xl md:text-3xl leading-[1.2] tracking-tight text-[#1a1a1a]">
                                Your curiosity&apos;s collaborator
                            </h2>
                        </div>
                        <div className="flex items-center">
                            <p className="text-sm md:text-base text-gray-600 leading-relaxed text-left">
                                There&apos;s never been a worse time to be a problem, or a better time to be a problem solver.
                            </p>
                        </div>
                    </div>
                    <h2 className="text-[40px] md:text-[64px] font-[450] tracking-[-0.02em] leading-[1.1] text-[#1a1a1a] mb-6">
                        <ScrollTriggeredTypedText
                            text="Keep thinking with Claude"
                            startDelay={100}
                        />
                    </h2>
                </div>

                <div className="relative w-full max-w-[1200px] mx-auto aspect-video rounded-3xl overflow-hidden shadow-2xl bg-black">
                    <video
                        ref={videoRef}
                        src="/videos/keep-thinking.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* Optional overlay to soften the video if needed, or consistent with other sections */}
                    <div className="absolute inset-0 bg-black/5 pointer-events-none" />
                </div>
            </div>
        </section>
    );
}
