"use client";

import React from "react";
import { ArrowUp, PenLine, BookOpen, Code, X } from "lucide-react";
import { motion } from "framer-motion";

export function ThinkingPartner() {
    return (
        <section className="bg-white text-black py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-12 relative overflow-hidden">
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="z-10">
                    <h2 className="font-serif text-3xl sm:text-5xl md:text-7xl mb-6 tracking-tight leading-[1.1]">
                        Meet your <br />
                        thinking partner
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-lg">
                        Tackle any big, bold, bewildering challenge with Claude.
                    </p>

                    {/* Input Mockup */}
                    <div className="bg-gray-50 rounded-xl p-3 mb-6 relative border border-gray-300 shadow-lg max-w-lg">
                        <input
                            type="text"
                            placeholder="How can I help you today?"
                            className="w-full bg-transparent text-black placeholder-gray-500 outline-none px-2 py-3 text-lg"
                            readOnly
                        />
                        <button className="absolute right-3 top-3 bottom-3 bg-[#D97757] hover:bg-[#C56A4C] text-white px-4 rounded-lg flex items-center gap-2 font-medium transition-colors min-h-[44px]">
                            Ask Claude <ArrowUp size={18} />
                        </button>
                    </div>

                    {/* Action Chips */}
                    <div className="flex flex-wrap gap-3">
                        <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium transition-colors border border-gray-300">
                            <PenLine size={16} /> Write
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium transition-colors border border-gray-300">
                            <BookOpen size={16} /> Learn
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium transition-colors border border-gray-300">
                            <Code size={16} /> Code
                        </button>
                    </div>
                </div>

                {/* Right Animation */}
                <div className="relative h-full w-full flex items-center justify-center">
                    <video
                        src="/videos/claude-demo.mp4"
                        autoPlay
                        loop
                        muted={true}
                        playsInline
                        className="w-full h-auto max-h-[500px] object-contain pointer-events-none"
                    />
                </div>
            </div>
        </section>
    );
}
