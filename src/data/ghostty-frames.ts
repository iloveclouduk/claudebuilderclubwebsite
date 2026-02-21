// Cloudy Code mascot ASCII art frames for the Ghostty terminal animation
// Each frame is a string array (one string per line, may contain <span class="b"> HTML)
// 64 frames, 41 lines × 140 chars each
// Body chars wrapped in <span class="b"> for orange accent (#C07850)

const COLS = 140;
const ROWS = 41;
const TOTAL_FRAMES = 64;

// ---------------------------------------------------------------------------
// Cloudy Code mascot pixel grid (from Image 3)
// 'B' = body, 'E' = eye (dark void), 'N' = nostril (dark void), '.' = empty
// ~12 wide × 8 tall pixel grid
// ---------------------------------------------------------------------------
const MASCOT_PIXELS: string[] = [
  "..BB....BB..",
  ".BBBBBBBBBB.",
  "BBBBBBBBBBBB",
  "BBBEEBBBEEBB",
  "BBBBBBBBBBBB",
  "BBBBB..BBBBB",
  "BBBBBBBBBBBB",
  ".BB..BB..BB.",
];

const MASCOT_W = MASCOT_PIXELS[0].length;
const MASCOT_H = MASCOT_PIXELS.length;

// Scale factor: each pixel → SCALE_X chars wide, SCALE_Y rows tall
// Target ~72 chars wide × 24 rows tall (centered in 140×41)
const SCALE_X = 6;
const SCALE_Y = 3;

const SCALED_W = MASCOT_W * SCALE_X; // 72
const SCALED_H = MASCOT_H * SCALE_Y; // 24

// ---------------------------------------------------------------------------
// Build a scaled boolean grid + type grid for the mascot
// type: 'B' = body, 'E' = eye, 'N' = nostril, '.' = empty
// ---------------------------------------------------------------------------
function buildScaledMascot(): { solid: boolean[][]; type: string[][] } {
  const solid: boolean[][] = [];
  const type: string[][] = [];

  for (let sy = 0; sy < SCALED_H; sy++) {
    const row: boolean[] = [];
    const trow: string[] = [];
    const py = Math.floor(sy / SCALE_Y);
    for (let sx = 0; sx < SCALED_W; sx++) {
      const px = Math.floor(sx / SCALE_X);
      const pixel = MASCOT_PIXELS[py]?.[px] ?? ".";
      if (pixel === "B") {
        row.push(true);
        trow.push("B");
      } else if (pixel === "E") {
        row.push(true); // still "solid" for distance calc edge
        trow.push("E");
      } else {
        row.push(false);
        trow.push(".");
      }
    }
    solid.push(row);
    type.push(trow);
  }

  return { solid, type };
}

const mascot = buildScaledMascot();

// ---------------------------------------------------------------------------
// Pre-compute distance field: for every cell in the frame, the distance to
// the nearest solid mascot pixel (with mascot centered, no bob offset).
// We'll adjust for bob at render time with a simple row shift.
// ---------------------------------------------------------------------------
const CENTER_X = Math.floor((COLS - SCALED_W) / 2);
const CENTER_Y = Math.floor((ROWS - SCALED_H) / 2);

// Distance from each frame cell to nearest mascot body pixel
// Using a BFS / distance transform for accuracy
function buildDistanceField(): number[][] {
  const dist: number[][] = Array.from({ length: ROWS }, () =>
    Array(COLS).fill(999)
  );

  // Queue of cells that are body pixels (distance 0)
  const queue: [number, number][] = [];

  for (let r = 0; r < SCALED_H; r++) {
    for (let c = 0; c < SCALED_W; c++) {
      if (mascot.solid[r][c]) {
        const fr = CENTER_Y + r;
        const fc = CENTER_X + c;
        if (fr >= 0 && fr < ROWS && fc >= 0 && fc < COLS) {
          dist[fr][fc] = 0;
          queue.push([fr, fc]);
        }
      }
    }
  }

  // BFS with Chebyshev distance (8-directional, each step = 1)
  let head = 0;
  const dirs = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1],           [0, 1],
    [1, -1],  [1, 0],  [1, 1],
  ];

  while (head < queue.length) {
    const [r, c] = queue[head++];
    const nd = dist[r][c] + 1;
    for (const [dr, dc] of dirs) {
      const nr = r + dr;
      const nc = c + dc;
      if (nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS && dist[nr][nc] > nd) {
        dist[nr][nc] = nd;
        queue.push([nr, nc]);
      }
    }
  }

  return dist;
}

const baseDistField = buildDistanceField();

// ---------------------------------------------------------------------------
// Seeded PRNG for deterministic particle placement per frame
// ---------------------------------------------------------------------------
function mulberry32(seed: number): () => number {
  let s = seed | 0;
  return () => {
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// ---------------------------------------------------------------------------
// Character sets for body shimmer
// ---------------------------------------------------------------------------
const BODY_CHARS = ["$", "@", "%", "#", "&"];
const EDGE_CHARS = ["@", "%", "*", "#"];
const INNER_GLOW = ["*", "o", "+", "x"];
const OUTER_GLOW = ["+", "x", "=", "~"];
const DISTANT_PARTICLES = ["~", "·", ".", "+"];

// ---------------------------------------------------------------------------
// Generate a single frame
// ---------------------------------------------------------------------------
function generateFrame(frameIndex: number): string[] {
  // Vertical bobbing: ±1 row sine wave
  const bobOffset = Math.round(
    Math.sin((frameIndex * 2 * Math.PI) / TOTAL_FRAMES)
  );

  const rng = mulberry32(frameIndex * 7919 + 31337);

  // Shimmer phase
  const shimmerPhase = frameIndex % BODY_CHARS.length;

  const lines: string[] = [];

  for (let row = 0; row < ROWS; row++) {
    // For this row, figure out the mascot-relative row (accounting for bob)
    const mascotRow = row - CENTER_Y - bobOffset;

    let lineChars: string[] = []; // the visible character at each column
    let isOrange: boolean[] = [];  // whether it should be wrapped in span.b

    for (let col = 0; col < COLS; col++) {
      const mascotCol = col - CENTER_X;

      // Check if this cell is inside the mascot body
      const inMascot =
        mascotRow >= 0 &&
        mascotRow < SCALED_H &&
        mascotCol >= 0 &&
        mascotCol < SCALED_W;

      const cellType = inMascot ? mascot.type[mascotRow]?.[mascotCol] ?? "." : ".";
      const cellSolid = inMascot && mascot.solid[mascotRow]?.[mascotCol];

      // Distance — shift by bob offset from precomputed field
      const srcRow = row - bobOffset;
      const dist =
        srcRow >= 0 && srcRow < ROWS
          ? baseDistField[srcRow][col]
          : 999;

      if (cellSolid && cellType === "E") {
        // Eye — dark void
        lineChars.push(" ");
        isOrange.push(false);
      } else if (cellSolid && cellType === "B") {
        // Body — dense shimmer characters
        const ci = (col + row + shimmerPhase) % BODY_CHARS.length;
        lineChars.push(BODY_CHARS[ci]);
        isOrange.push(true);
      } else if (dist <= 2) {
        // Body edge glow
        const ci = (col + row + frameIndex) % EDGE_CHARS.length;
        lineChars.push(EDGE_CHARS[ci]);
        isOrange.push(true);
      } else if (dist <= 5) {
        // Inner glow
        const density = 0.7 - (dist - 2) * 0.15;
        if (rng() < density) {
          const ci = (col + row + frameIndex) % INNER_GLOW.length;
          lineChars.push(INNER_GLOW[ci]);
          isOrange.push(true);
        } else {
          lineChars.push(" ");
          isOrange.push(false);
        }
      } else if (dist <= 12) {
        // Outer glow
        const density = 0.35 - (dist - 5) * 0.04;
        if (rng() < density) {
          const ci = (col + row + frameIndex) % OUTER_GLOW.length;
          lineChars.push(OUTER_GLOW[ci]);
          isOrange.push(true);
        } else {
          lineChars.push(" ");
          isOrange.push(false);
        }
      } else if (dist <= 25) {
        // Distant particles
        const density = 0.1 - (dist - 12) * 0.006;
        if (rng() < Math.max(0, density)) {
          const ci = (col + row + frameIndex) % DISTANT_PARTICLES.length;
          lineChars.push(DISTANT_PARTICLES[ci]);
          isOrange.push(true);
        } else {
          lineChars.push(" ");
          isOrange.push(false);
        }
      } else {
        lineChars.push(" ");
        isOrange.push(false);
      }
    }

    // Build HTML line — group consecutive orange chars into <span class="b">
    let html = "";
    let i = 0;
    while (i < COLS) {
      if (isOrange[i]) {
        let span = "";
        while (i < COLS && isOrange[i]) {
          span += lineChars[i];
          i++;
        }
        html += `<span class="b">${span}</span>`;
      } else {
        html += lineChars[i];
        i++;
      }
    }

    lines.push(html);
  }

  return lines;
}

// Pre-generate all frames
function generateAllFrames(): string[][] {
  const frames: string[][] = [];
  for (let i = 0; i < TOTAL_FRAMES; i++) {
    frames.push(generateFrame(i));
  }
  return frames;
}

export const ghostFrames: string[][] = generateAllFrames();
export const FRAME_COLS = COLS;
export const FRAME_ROWS = ROWS;
