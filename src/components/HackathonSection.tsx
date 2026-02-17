"use client";

import React from "react";
import { motion } from "framer-motion";
import TypedHeader from "./TypedHeader";
import { AnimatedFolder } from "@/components/ui/3d-folder";
import { LogoCloud } from "@/components/ui/logo-cloud-3";

// Logo configuration for Claude Hackathon Northumbria University section
// NOTE: This section should show Claude AI logo (not Anthropic) + Northumbria logo
const hackathonLogos = [
    {
        src: "/logos/claude-ai-logo.svg",
        alt: "Claude AI Logo",
        width: 200,
        height: 100,
    },
    {
        src: "/logos/northumbria-logo.png",
        alt: "Northumbria University Logo",
        width: 160,
        height: 80,
    },
];

export function HackathonSection() {
    return (
        <section className="bg-white text-black py-24 px-6 md:px-12 relative overflow-hidden">
            <div className="max-w-[1000px] mx-auto flex flex-col items-center">
                {/* Main Title */}
                <motion.div
                    className="text-center mb-12 w-full"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="font-anthropic font-medium text-4xl md:text-6xl lg:text-7xl mb-6 tracking-tight leading-[1.1]">
                        <span className="text-[#D97757]">
                            <TypedHeader text="Claude Hackathon" speed={80} showCursor={true} />
                        </span>
                        <br />
                        <span className="text-black">
                            <TypedHeader text="Northumbria University" speed={80} showCursor={false} />
                        </span>
                    </h1>
                </motion.div>

                {/* Logo Cloud Section */}
                <motion.div
                    className="w-full max-w-4xl mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "100px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <LogoCloud logos={hackathonLogos} className="py-8" />
                </motion.div>

                {/* Photo Section */}
                <motion.div
                    className="relative w-full max-w-4xl mb-24"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="aspect-[16/9] rounded-xl overflow-hidden shadow-2xl">
                        <img
                            src="/images/claude hackathon .png"
                            alt="Claude Hackathon Northumbria University Group Photo"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </motion.div>

                {/* 3D Folder Component */}
                <motion.div
                    className="w-full max-w-3xl mb-24 flex justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "100px" }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <AnimatedFolder
                        title="Hackathon Projects"
                        projects={[
                            { id: "1", image: "https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "AI Chat Bot" },
                            { id: "2", image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Code Assistant" },
                            { id: "3", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Data Analyzer" },
                        ]}
                    />
                </motion.div>

                {/* Call to Action Buttons */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "100px" }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-full text-lg font-medium transition-colors duration-300 shadow-lg hover:shadow-xl min-w-[280px]">
                            Click to see project hackathon
                        </button>

                        <button className="bg-gray-100 hover:bg-gray-200 text-black px-8 py-4 rounded-full text-lg font-medium transition-colors duration-300 border border-gray-300 hover:border-gray-400 min-w-[160px]">
                            Join Us
                        </button>
                    </div>
                </motion.div>

                {/* Video Section - Centered */}
                <motion.div
                    className="relative w-full max-w-4xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "100px" }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
                        <video
                            src="/videos/anthropic-claude-cartoon.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover bg-gray-100"
                        >
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}