'use client';

import dynamic from 'next/dynamic';
import ClaudeBuilderClubLogo from './ClaudeBuilderClubLogo';
import ScrollTriggeredTypedText from './ScrollTriggeredTypedText';
import { LogoCloud } from "@/components/ui/logo-cloud-3";





// Logo configuration for Experience liftoff with next-generation IDE slider
// NOTE: This slider should show Anthropic logo + Northumbria logo
const logos = [
  {
    src: "/logos/anthropic-seeklogo.svg",
    alt: "Anthropic Logo",
    width: 220,
    height: 110,
  },
  {
    src: "/logos/northumbria-logo.png",
    alt: "Northumbria University Logo",
    width: 160,
    height: 80,
  },
];


export default function Hero() {

  return (
    <section className="welcome-wrapper relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="hero-video-wrapper absolute inset-0 z-0"
      >
      </div>

      {/* Content */}
      <div className="welcome-section relative z-10 flex flex-col items-center justify-center text-center px-6 py-12">

        {/* Logo - fades in after typing */}
        {/* Claude Builder Club Northumbria Logo */}
        <div className="logo-container flex items-center mb-10">
          <ClaudeBuilderClubLogo height={48} />
        </div>



        {/* Main Heading with Typed Effect */}
        <div className="header-container mx-auto mb-8 sm:mb-12 relative max-w-[1100px]">




          <h1 className="landing-main-header heading-1 m-0 relative z-10">
            <ScrollTriggeredTypedText
              text="Experience liftoff with the next-generation IDE"
              speed={35}
              showCursor={true}
            />
          </h1>
        </div>

        {/* Video Section - placed after heading */}
        <div className="video-container mx-auto mb-8 sm:mb-16 px-4 sm:px-6 max-w-2xl w-full">
          <div
            className="relative rounded-[24px] overflow-hidden"
            style={{
              width: '100%',
              position: 'relative',
              border: 'none',
              outline: 'none',
              boxShadow: 'none',
            }}
          >
            <video
              src="/videos/vid3.mp4"
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                border: 'none',
                outline: 'none',
                boxShadow: 'none',
                userSelect: 'none',
                background: 'transparent'
              }}
            />
          </div>
        </div>

        {/* CTA Buttons - fade in after logo */}
        <div className="welcome-cta flex flex-col sm:flex-row gap-3 items-center justify-center mt-4 w-full sm:w-auto px-4 sm:px-0">
          <a
            href="https://claude.ai/new"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-primary button-compact flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 text-base font-[450]"
          >
            Cloudy AI
          </a>

          <a
            href="https://claude.ai/new"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-secondary button-compact w-full sm:w-auto px-6 py-3 text-base font-[450] text-center"
          >
            Cloudy AI
          </a>
        </div>

        {/* Logo Cloud Section */}
        <div className="mt-12 sm:mt-20 mb-8 sm:mb-16 w-full max-w-3xl">
          <LogoCloud logos={logos} className="" />
        </div>


      </div>
    </section >
  );
}
