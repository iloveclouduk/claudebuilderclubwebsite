"use client";

import { motion } from "framer-motion";
import ScrollTriggeredTypedText from "./ScrollTriggeredTypedText";

const features = [
    {
        id: "ai-ide-core",
        title: "An AI IDE Core",
        description:
            "Claude Builder Club Northumbria's Editor view offers tab autocompletion, natural language code commands, and a configurable, and context-aware configurable agent.",
        mockupType: "editor",
    },
    {
        id: "synchronized-control",
        title: "Synchronized Control",
        description:
            "Synchronized agentic control across your editor, terminal, and browser for powerful development workflows.",
        mockupType: "terminal",
    },
    {
        id: "agent-manager",
        title: "Agent Manager View",
        description:
            "Manage multiple agents at the same time, across any workspace, from one central mission control view.",
        mockupType: "manager",
    },
];

export default function Features() {
    return (
        <section className="relative bg-white py-16 sm:py-24 lg:py-32 overflow-hidden" id="product">
            <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6">
                {features.map((feature, index) => (
                    <motion.div
                        key={feature.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                            } items-center gap-8 sm:gap-12 lg:gap-16 mb-16 sm:mb-24 lg:mb-32 last:mb-0`}
                    >
                        {/* Text Content */}
                        <div className="flex-1 max-w-xl">
                            <h2 className="text-[28px] sm:text-[36px] md:text-[56px] font-[450] leading-[1.1] tracking-[-0.02em] text-ag-text mb-6">
                                <ScrollTriggeredTypedText
                                    text={feature.title}
                                    startDelay={500 + (index * 200)} // Staggered start delay
                                    className="inline-block"
                                />
                            </h2>
                            <p className="text-base sm:text-[18px] leading-relaxed text-black">
                                {feature.description.replace('Claude Builder Club Northumbria', 'Claude Builder Club ')}<span className="font-bold">Northumbria</span>'s Editor view offers tab autocompletion, natural language code commands, and a configurable, and context-aware configurable agent.
                            </p>
                        </div>

                        {/* Mockup/Screenshot */}
                        <div className="flex-1 w-full">
                            <div className="relative">
                                {/* IDE Window Mockup */}
                                <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200/50">
                                    {/* Window Header */}
                                    <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-gray-100">
                                        <div className="w-3 h-3 rounded-full bg-red-400" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                        <div className="w-3 h-3 rounded-full bg-green-400" />
                                        <span className="ml-4 text-xs text-gray-500">
                                            {feature.mockupType === "editor"
                                                ? "LoginButton.tsx"
                                                : feature.mockupType === "terminal"
                                                    ? "Terminal"
                                                    : "Agent Manager"}
                                        </span>
                                    </div>

                                    {/* Code Content */}
                                    <div className="p-6 font-mono text-sm bg-gradient-to-br from-white to-gray-50">
                                        {feature.mockupType === "editor" && (
                                            <pre className="text-gray-700">
                                                <code>
                                                    <span className="text-purple-600">import</span>{" "}
                                                    <span className="text-blue-600">Link</span>{" "}
                                                    <span className="text-purple-600">from</span>{" "}
                                                    <span className="text-green-600">'next/link'</span>;
                                                    {"\n\n"}
                                                    <span className="text-purple-600">export default function</span>{" "}
                                                    <span className="text-yellow-600">LoginButton</span>(): React.ReactElement {"{"}
                                                    {"\n"}
                                                    {"  "}
                                                    <span className="text-purple-600">return</span> (
                                                    {"\n"}
                                                    {"    "}&lt;<span className="text-blue-600">Link</span>
                                                    {"\n"}
                                                    {"      "}
                                                    <span className="text-green-600">href</span>=
                                                    <span className="text-orange-500">"/api/auth/strava/login"</span>
                                                    {"\n"}
                                                    {"      "}
                                                    <span className="text-green-600">className</span>=
                                                    <span className="text-orange-500">"..."</span>
                                                    {"\n"}
                                                    {"    "}&gt;
                                                </code>
                                            </pre>
                                        )}
                                        {feature.mockupType === "terminal" && (
                                            <pre className="text-gray-700">
                                                <span className="text-green-500">$</span> npm run dev
                                                {"\n"}
                                                <span className="text-gray-500">{">"} next dev</span>
                                                {"\n\n"}
                                                <span className="text-blue-500">▲ Next.js 14.0.0</span>
                                                {"\n"}
                                                <span className="text-gray-500">- Local: http://localhost:3000</span>
                                            </pre>
                                        )}
                                        {feature.mockupType === "manager" && (
                                            <div className="space-y-3">
                                                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                                    <span className="text-gray-700">Agent 1 - Writing component</span>
                                                </div>
                                                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                                    <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                                                    <span className="text-gray-700">Agent 2 - Running tests</span>
                                                </div>
                                                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                                    <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
                                                    <span className="text-gray-700">Agent 3 - Reviewing changes</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>


                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
