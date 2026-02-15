"use client";

import Link from "next/link";
import { ChevronRight, ChevronLeft } from "lucide-react";
import ScrollTriggeredTypedText from "./ScrollTriggeredTypedText";

const blogPosts = [
    {
        id: 1,
        title: "Gemini 3 Flash in Claude Builder Club Northumbria",
        date: "Dec 17, 2025",
        category: "Product",
        image: "gemini", // Will render a styled placeholder
    },
    {
        id: 2,
        title: "Nano Banana Pro in Claude Builder Club Northumbria",
        date: "Nov 20, 2025",
        category: "Product",
        image: "banana",
    },
    {
        id: 3,
        title: "Introducing Claude Builder Club Northumbria",
        date: "Nov 18, 2025",
        category: "Product",
        image: "intro",
    },
];

export default function Resources() {
    return (
        <section className="bg-[#f8f9fa] py-24" id="blog">
            <div className="max-w-[1400px] mx-auto px-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-12">
                    <h2 className="text-[40px] md:text-[56px] font-[450] tracking-[-0.02em] text-ag-text">
                        <ScrollTriggeredTypedText
                            text="Latest Blogs"
                            startDelay={200}
                        />
                    </h2>
                    <Link
                        href="#"
                        className="hidden md:inline-flex items-center gap-2 px-6 py-3 text-[14px] font-medium text-ag-text border border-gray-200 rounded-full hover:bg-white transition-colors"
                    >
                        View blog
                    </Link>
                </div>

                {/* Blog Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <article key={post.id} className="group">
                            {/* Card Image - Dark themed for Claude Builder Club Northumbria */}
                            <div className="aspect-square rounded-2xl overflow-hidden mb-6 bg-[#0a0a0f] relative">
                                {/* Content overlay */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    {post.image === "gemini" && (
                                        <div className="text-white flex items-center gap-2">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M12 2L2 22h20L12 2z" fill="#4285F4" />
                                            </svg>
                                            <span className="text-lg font-medium">Gemini 3 Flash</span>
                                        </div>
                                    )}
                                    {post.image === "banana" && (
                                        <span className="text-6xl">🍌</span>
                                    )}
                                    {post.image === "intro" && (
                                        <div className="px-4 py-2 bg-gray-800/80 rounded-full text-white text-sm flex items-center gap-2">
                                            Experience liftoff
                                            <ChevronLeft className="w-4 h-4" />
                                            <ChevronRight className="w-4 h-4" />
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Card Content */}
                            <h3 className="text-[22px] font-[450] leading-tight text-black mb-3 group-hover:text-ag-text-secondary transition-colors">
                                {post.title.replace('Claude Builder Club Northumbria', 'Claude Builder Club ')}
                                <span className="font-bold">Northumbria</span>
                            </h3>
                            <div className="flex items-center gap-4 text-[14px] text-ag-text-secondary mb-4">
                                <span>{post.date}</span>
                                <span>{post.category}</span>
                            </div>
                            <Link
                                href="#"
                                className="inline-flex items-center gap-1 text-[14px] font-medium text-ag-text hover:text-ag-text-secondary transition-colors"
                            >
                                Read blog
                                <ChevronRight className="w-4 h-4" />
                            </Link>
                        </article>
                    ))}
                </div>

                {/* Navigation arrows */}
                <div className="flex items-center gap-2 mt-12">
                    <button className="p-3 rounded-full border border-gray-200 hover:bg-white transition-colors">
                        <ChevronLeft className="w-5 h-5 text-ag-text" />
                    </button>
                    <button className="p-3 rounded-full border border-gray-200 hover:bg-white transition-colors">
                        <ChevronRight className="w-5 h-5 text-ag-text" />
                    </button>
                </div>
            </div>
        </section>
    );
}
