"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { ghostFrames, FRAME_COLS, FRAME_ROWS } from "@/data/ghostty-frames";

// ---------------------------------------------------------------------------
// Animator — drives frame updates via requestAnimationFrame at ~32fps
// ---------------------------------------------------------------------------
class Animator {
  private _animation: number | null = null;
  private lastFrame = -1;
  private frameTime: number;
  private callback: (frame: number) => void;
  private totalFrames: number;

  constructor(
    callback: (frame: number) => void,
    fps: number,
    totalFrames: number
  ) {
    this.callback = callback;
    this.frameTime = 1000 / fps;
    this.totalFrames = totalFrames;
  }

  start() {
    if (this._animation !== null) return;
    this._animation = requestAnimationFrame(this.update);
  }

  stop() {
    if (this._animation !== null) {
      cancelAnimationFrame(this._animation);
      this._animation = null;
    }
  }

  private update = (timestamp: number) => {
    const frameIndex =
      Math.floor(timestamp / this.frameTime) % this.totalFrames;
    if (frameIndex !== this.lastFrame) {
      this.lastFrame = frameIndex;
      this.callback(frameIndex);
    }
    this._animation = requestAnimationFrame(this.update);
  };
}

// ---------------------------------------------------------------------------
// CSS custom-property values
// ---------------------------------------------------------------------------
const CONTENT_FONT_SIZE = 10; // px
const CHAR_WIDTH = 6; // px
const CHAR_HEIGHT = 13.8; // px

const terminalStyle: React.CSSProperties = {
  ["--columns" as string]: FRAME_COLS,
  ["--rows" as string]: FRAME_ROWS,
  ["--content-font-size" as string]: `${CONTENT_FONT_SIZE}px`,
  ["--content-character-width" as string]: `${CHAR_WIDTH}px`,
  ["--content-character-height" as string]: `${CHAR_HEIGHT}px`,
  width: `calc(var(--columns) * var(--content-character-width) + 32px)`, // +32 for padding
  maxWidth: "100%",
  background: "#0F0F11",
  border: "1px solid #4C4C50",
  borderRadius: 10,
  overflow: "hidden",
};

const headerStyle: React.CSSProperties = {
  display: "grid",
  gridTemplate: '"start title end" auto / 1fr 1fr 1fr',
  alignItems: "center",
  padding: "10px 14px",
  background: "#1A1A1C",
  userSelect: "none",
};

const controlsStyle: React.CSSProperties = {
  gridArea: "start",
  display: "flex",
  gap: 8,
};

const dotBase: React.CSSProperties = {
  width: 12,
  height: 12,
  borderRadius: "50%",
};

const titleStyle: React.CSSProperties = {
  gridArea: "title",
  textAlign: "center",
  fontSize: 13,
  color: "#9d9d9f",
  fontWeight: 500,
  fontFamily: "Inter, system-ui, sans-serif",
};

const contentStyle: React.CSSProperties = {
  padding: 16,
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: "var(--content-font-size)",
  lineHeight: "var(--content-character-height)",
  color: "#c3c3c4",
  whiteSpace: "pre",
  overflowX: "auto",
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export default function GhosttyTerminal() {
  const [frameIndex, setFrameIndex] = useState(0);
  const animatorRef = useRef<Animator | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  // Responsive scaling
  const updateScale = useCallback(() => {
    if (!containerRef.current) return;
    const parent = containerRef.current.parentElement;
    if (!parent) return;
    const parentWidth = parent.clientWidth - 32; // account for section padding
    const terminalWidth = FRAME_COLS * CHAR_WIDTH + 32;
    const newScale = Math.min(1, parentWidth / terminalWidth);
    setScale(newScale);
  }, []);

  useEffect(() => {
    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!prefersReducedMotion) {
      const animator = new Animator(setFrameIndex, 32, ghostFrames.length);
      animatorRef.current = animator;
      animator.start();

      // Focus/blur handling — pause when tab not visible
      const handleVisibilityChange = () => {
        if (document.hidden) {
          animator.stop();
        } else {
          animator.start();
        }
      };

      document.addEventListener("visibilitychange", handleVisibilityChange);

      return () => {
        animator.stop();
        animatorRef.current = null;
        document.removeEventListener(
          "visibilitychange",
          handleVisibilityChange
        );
      };
    }
  }, []);

  // Handle responsive scaling
  useEffect(() => {
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, [updateScale]);

  const frame = ghostFrames[frameIndex];

  return (
    <section className="w-full bg-white py-16 sm:py-24 px-4">
      <div className="mx-auto flex justify-center">
        <div
          ref={containerRef}
          style={{
            ...terminalStyle,
            transform: scale < 1 ? `scale(${scale})` : undefined,
            transformOrigin: "top center",
          }}
        >
          {/* Header — CSS Grid: start | title | end */}
          <div style={headerStyle}>
            <div style={controlsStyle}>
              <span style={{ ...dotBase, backgroundColor: "#ff605c" }} />
              <span style={{ ...dotBase, backgroundColor: "#ffbd44" }} />
              <span style={{ ...dotBase, backgroundColor: "#00ca4e" }} />
            </div>
            <span style={titleStyle}>👻 Ghostty</span>
            <div style={{ gridArea: "end" }} />
          </div>

          {/* Content — <code> with individual <div> per line */}
          <code style={contentStyle}>
            {frame.map((line, i) => (
              <div key={i} dangerouslySetInnerHTML={{ __html: line }} />
            ))}
          </code>
        </div>
      </div>

    </section>
  );
}
