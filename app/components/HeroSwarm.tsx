"use client";

import { useEffect, useRef } from "react";

/**
 * Fondo del hero en canvas: partículas dispersas que cristalizan en una
 * retícula triangular alrededor del titular y se vuelven a soltar.
 * - Ciclo de 12 s. Todo es función periódica de la fase → loop exacto.
 * - Hueco elíptico en el centro para que el h1 siempre se lea.
 * - prefers-reduced-motion: se queda quieto con la retícula formada.
 * - Cámara estática: el zoom lento lo pone el GSAP de HeroVideo.
 * - Se pausa fuera de pantalla (IntersectionObserver) para no gastar batería.
 */

const CYCLE_S = 12;
const TAU = Math.PI * 2;
const SEED = 20260928;

type Node = {
  tx: number; ty: number;   // posición en la retícula
  sx: number; sy: number;   // posición dispersa
  k1: number; k2: number;   // frecuencias enteras de deriva (periódicas en el ciclo)
  f1: number; f2: number;
  amp: number;
  delay: number;            // cristaliza antes en los bordes
  rNorm: number;
  size: number;
  x: number; y: number; a: number; pulse: number;
};

function seededRandom(seed: number) {
  return () => {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    return seed / 4294967296;
  };
}

const clamp01 = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v);
const smoother = (t: number) => t * t * t * (t * (t * 6 - 15) + 10);

// 0 en p=0 y p=1: el loop cierra sin costura
function envelope(p: number) {
  if (p < 0.12) return 0;
  if (p < 0.42) return smoother((p - 0.12) / 0.3);
  if (p < 0.62) return 1;
  if (p < 0.9) return 1 - smoother((p - 0.62) / 0.28);
  return 0;
}

function makeGlowSprite() {
  const glow = document.createElement("canvas");
  glow.width = glow.height = 64;
  const g = glow.getContext("2d");
  if (!g) throw new Error("HeroSwarm: sin contexto 2D para el sprite");
  const grd = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  grd.addColorStop(0, "rgba(214,210,255,1)");
  grd.addColorStop(0.18, "rgba(146,139,255,0.85)");
  grd.addColorStop(0.5, "rgba(91,77,255,0.22)");
  grd.addColorStop(1, "rgba(91,77,255,0)");
  g.fillStyle = grd;
  g.fillRect(0, 0, 64, 64);
  return glow;
}

function buildLattice(W: number, H: number) {
  const rand = seededRandom(SEED);
  const s = Math.max(22, W / 34);
  const rowH = s * 0.866;
  const cx = W / 2;
  const cy = H / 2;
  // En vertical (móvil) el titular ocupa casi todo el ancho: hueco más ancho
  const rx = W * (W < H ? 0.46 : 0.34);
  const ry = H * 0.36;
  const cols = Math.ceil(W / s) + 2;
  const rows = Math.ceil(H / rowH) + 2;
  const index = new Map<string, number>();
  const nodes: Node[] = [];

  for (let j = -1; j < rows; j++) {
    for (let i = -1; i < cols; i++) {
      const x = i * s + (j & 1 ? s / 2 : 0);
      const y = j * rowH;
      const e = ((x - cx) / rx) ** 2 + ((y - cy) / ry) ** 2;
      if (e < 1) continue;
      const edgeness = clamp01((Math.sqrt(e) - 1) / 1.2);
      index.set(`${i},${j}`, nodes.length);
      nodes.push({
        tx: x, ty: y,
        sx: -0.05 * W + rand() * 1.1 * W,
        sy: -0.05 * H + rand() * 1.1 * H,
        k1: 1 + ((rand() * 2) | 0), k2: 1 + ((rand() * 2) | 0),
        f1: rand() * TAU, f2: rand() * TAU,
        amp: s * (0.8 + rand() * 1.6),
        delay: 0.65 * (1 - edgeness) + 0.35 * rand(),
        rNorm: Math.sqrt(e),
        size: 0.8 + rand() * 0.9,
        x: 0, y: 0, a: 0, pulse: 0,
      });
    }
  }

  const edges: number[] = [];
  for (const [key, a] of index) {
    const [i, j] = key.split(",").map(Number);
    const odd = j & 1;
    const neighbours = [
      [i + 1, j],
      odd ? [i, j + 1] : [i - 1, j + 1],
      odd ? [i + 1, j + 1] : [i, j + 1],
    ];
    for (const [ni, nj] of neighbours) {
      const b = index.get(`${ni},${nj}`);
      if (b !== undefined) edges.push(a, b);
    }
  }
  return { nodes, edges };
}

export default function HeroSwarm({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      console.error("HeroSwarm: el navegador no dio contexto 2D; queda el fondo aurora");
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const glow = makeGlowSprite();
    let W = 0;
    let H = 0;
    let dpr = 1;
    let nodes: Node[] = [];
    let edges: number[] = [];
    let phase = reduceMotion ? 0.52 : 0;
    let last = performance.now();
    let raf = 0;
    let visible = true;

    function resize() {
      const rect = canvas!.getBoundingClientRect();
      W = rect.width;
      H = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = Math.round(W * dpr);
      canvas!.height = Math.round(H * dpr);
      ({ nodes, edges } = buildLattice(W, H));
      if (reduceMotion) draw(phase);
    }

    function draw(p: number) {
      const env = envelope(p);
      const tt = p * TAU;
      const wave = (p * 3) % 1;
      const maxR = 2.6;

      for (const n of nodes) {
        const a = smoother(clamp01(env * 1.65 - n.delay));
        const sx = n.sx + Math.sin(tt * n.k1 + n.f1) * n.amp;
        const sy = n.sy + Math.cos(tt * n.k2 + n.f2) * n.amp;
        n.x = sx + (n.tx - sx) * a;
        n.y = sy + (n.ty - sy) * a;
        n.a = a;
        n.pulse = a * Math.max(0, 1 - Math.abs(n.rNorm / maxR - wave) * 9);
      }

      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx!.globalCompositeOperation = "source-over";
      ctx!.globalAlpha = 1;
      ctx!.fillStyle = "#0a0a12";
      ctx!.fillRect(0, 0, W, H);
      ctx!.globalCompositeOperation = "lighter";

      ctx!.lineWidth = 0.7;
      ctx!.strokeStyle = "#928bff";
      for (let e = 0; e < edges.length; e += 2) {
        const A = nodes[edges[e]];
        const B = nodes[edges[e + 1]];
        const m = Math.min(A.a, B.a);
        if (m < 0.02) continue;
        ctx!.globalAlpha = m * m * 0.22 + Math.max(A.pulse, B.pulse) * 0.35;
        ctx!.beginPath();
        ctx!.moveTo(A.x, A.y);
        ctx!.lineTo(B.x, B.y);
        ctx!.stroke();
      }

      const base = Math.max(9, W / 90);
      for (const n of nodes) {
        const r = base * n.size * (0.75 + 0.35 * n.a + 0.9 * n.pulse);
        ctx!.globalAlpha = 0.28 + 0.42 * n.a + 0.5 * n.pulse;
        ctx!.drawImage(glow, n.x - r / 2, n.y - r / 2, r, r);
      }

      // Oscurece el centro para el titular
      ctx!.globalCompositeOperation = "source-over";
      ctx!.globalAlpha = 1;
      const vg = ctx!.createRadialGradient(W / 2, H / 2, 0, W / 2, H / 2, Math.max(W, H) * 0.42);
      vg.addColorStop(0, "rgba(10,10,18,0.78)");
      vg.addColorStop(0.55, "rgba(10,10,18,0.35)");
      vg.addColorStop(1, "rgba(10,10,18,0)");
      ctx!.fillStyle = vg;
      ctx!.fillRect(0, 0, W, H);
    }

    function tick(now: number) {
      const dt = Math.min(0.1, (now - last) / 1000);
      last = now;
      phase = (phase + dt / CYCLE_S) % 1;
      draw(phase);
      raf = visible ? requestAnimationFrame(tick) : 0;
    }

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();
    if (!reduceMotion) raf = requestAnimationFrame(tick);

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && !reduceMotion && raf === 0) {
        last = performance.now();
        raf = requestAnimationFrame(tick);
      }
    });
    io.observe(canvas);

    return () => {
      io.disconnect();
      ro.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden />;
}
