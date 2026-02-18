"use client";

import { useRef } from "react";
import Navbar from "@/components/Navbar";
import IntroAnimation from "@/components/ui/scroll-morph-hero";
import Hero from "@/components/Hero";

import { ThinkingPartner } from "@/components/ThinkingPartner";
import { CuriosityCollaborator } from "@/components/CuriosityCollaborator";
import { HackathonSection } from "@/components/HackathonSection";
import VideoSection from "@/components/VideoSection";
import Features from "@/components/Features";
import { Component as LuminaInteractiveList } from "@/components/ui/lumina-interactive-list";
import KeepThinking from "@/components/KeepThinking";
import Resources from "@/components/Resources";
import JoinCTA from "@/components/JoinCTA";
import Footer from "@/components/Footer";



export default function Home() {
  const scrollSectionRef = useRef<HTMLDivElement>(null);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      {/* Sticky Scroll Animation Section - 300vh height for full animation timeline */}
      <div ref={scrollSectionRef} className="relative" style={{ height: '300vh' }}>
        <div className="sticky top-0 w-full h-screen">
          <IntroAnimation scrollContainerRef={scrollSectionRef} />
        </div>
      </div>
      <Hero />
      <VideoSection />
      <ThinkingPartner />
      <HackathonSection />
      <CuriosityCollaborator />

      <Features />
      <LuminaInteractiveList />
      <KeepThinking />
      <Resources />
      <JoinCTA />
      <Footer />
    </main>
  );
}
