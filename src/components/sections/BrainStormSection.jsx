import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { DEFAULT_BRAINSTORM_BUBBLES } from "./brainstormBubbles";

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function mulberry32(seed) {
  let t = seed >>> 0;
  return () => {
    t += 0x6d2b79f5;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

const generateDeterministicProjects = (bubbles) => {
  const n = Math.max(1, bubbles.length);
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));

  return bubbles.map((bubble, i) => {
    const seed = (i + 1) * 144.123;
    const rand = mulberry32((i + 1) * 0x9e3779b1);
    const depth = (seed % 100) / 100;

    const scale = 0.7 + depth * 0.3; // Size
    const widthClass = scale > 1.0 ? "w-80" : scale > 0.9 ? "w-72" : "w-64";

    const cardWidth = scale > 1.0 ? 28 : scale > 0.9 ? 25 : 22;
    const cardHeight = 12;

    const maxX = 100 - cardWidth;
    const maxY = 100 - cardHeight;

    // Even distribution (sunflower) + small deterministic jitter
    const r = Math.sqrt((i + 0.5) / n);
    const theta = i * goldenAngle;

    const xNorm = (Math.cos(theta) * r + 1) / 2;
    const yNorm = (Math.sin(theta) * r + 1) / 2;

    const jitter = 4;
    const startX = clamp(xNorm * maxX + (rand() - 0.5) * jitter, 0, maxX);
    const startY = clamp(yNorm * maxY + (rand() - 0.5) * jitter, 0, maxY);

    // Continuous movement (in % per second), bouncing within bounds.
    // Faster than before so the motion reads as intentional.
    const angle = rand() * Math.PI * 2;
    const speed = 3.5 + rand() * 3.5; // %/sec
    const vx = Math.cos(angle) * speed;
    const vy = Math.sin(angle) * speed;

    const title = bubble.title ?? "";

    return {
      id: i,
      title,
      subtitle: bubble.subtitle ?? "",
      scale,
      zIndex: Math.floor(depth * 50),
      width: widthClass,
      left: `${startX}%`,
      top: `${startY}%`,
      maxX,
      maxY,
      vx,
      vy,
      problem:
        bubble.problem ??
        (title
          ? `Inefficient ${title} workflows are costing your team time.`
          : "Inefficient workflows are costing your team time."),
      solution:
        bubble.solution ??
        (title
          ? `Automated ${title} systems tailored to your data and tools.`
          : "Automated systems tailored to your data and tools."),
    };
  });
};

export default function BrainStormSection({
  bubbles = DEFAULT_BRAINSTORM_BUBBLES,
}) {
  const [selectedId, setSelectedId] = useState(null);
  const floatingNodesRef = useRef({});
  const floatingStateRef = useRef({});
  const projects = useMemo(
    () => generateDeterministicProjects(bubbles),
    [bubbles]
  );
  const selectedProject = projects.find((p) => p.id === selectedId);

  useEffect(() => {
    if (selectedId !== null) return;

    // Initialize state for all nodes (in % units)
    const next = {};
    for (const p of projects) {
      next[p.id] = {
        x: parseFloat(p.left),
        y: parseFloat(p.top),
        vx: p.vx,
        vy: p.vy,
        maxX: p.maxX,
        maxY: p.maxY,
      };
    }
    floatingStateRef.current = next;

    let raf = 0;
    let last = performance.now();

    const tick = (now) => {
      const dt = Math.min(0.05, Math.max(0, (now - last) / 1000));
      last = now;

      const state = floatingStateRef.current;
      for (const p of projects) {
        const s = state[p.id];
        const el = floatingNodesRef.current[p.id];
        if (!s || !el) continue;

        s.x += s.vx * dt;
        s.y += s.vy * dt;

        // Bounce off bounds
        if (s.x <= 0) {
          s.x = 0;
          s.vx = Math.abs(s.vx);
        } else if (s.x >= s.maxX) {
          s.x = s.maxX;
          s.vx = -Math.abs(s.vx);
        }

        if (s.y <= 0) {
          s.y = 0;
          s.vy = Math.abs(s.vy);
        } else if (s.y >= s.maxY) {
          s.y = s.maxY;
          s.vy = -Math.abs(s.vy);
        }

        el.style.left = `${s.x}%`;
        el.style.top = `${s.y}%`;
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [projects, selectedId]);

  return (
    <section
      id="projects"
      className="w-full py-24 bg-white flex flex-col items-center select-none overflow-hidden"
    >
      <div className="max-w-5xl text-center mb-20 px-6 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter italic leading-tight">
          Not sure how you want to use AI yet?
        </h2>

        <p className="text-xl md:text-2xl text-slate-400 font-medium italic mt-4">
          Let’s brainstorm.
        </p>

        {/* The Three Accent Lines */}
        <div className="mt-8 flex gap-3">
          <div className="h-1 w-16 bg-slate-100 rounded-full" />
          <div className="h-1 w-16 bg-slate-200 rounded-full" />
          <div className="h-1 w-16 bg-slate-100 rounded-full" />
        </div>
      </div>

      {/* The Container (Play-Space) */}
      <div className="relative w-full max-w-6xl h-[40rem] border border-slate-200 rounded-[3.5rem] bg-slate-50/30 overflow-hidden shadow-[inset_0_2px_15px_rgba(0,0,0,0.01)]">
        {/* Floating Layer */}
        <div
          className={`relative w-full h-full z-20 transition-opacity duration-700 ${
            selectedId !== null
              ? "opacity-0 pointer-events-none"
              : "opacity-100"
          }`}
        >
          {projects.map((p) => (
            <motion.div
              key={p.id}
              ref={(el) => {
                if (el) floatingNodesRef.current[p.id] = el;
              }}
              className="absolute will-change-transform"
              style={{ left: p.left, top: p.top, zIndex: p.zIndex }}
              whileHover={{ zIndex: 999 }}
            >
              <motion.div
                layoutId={`card-${p.id}`}
                onClick={() => setSelectedId(p.id)}
                className={`${p.width} aspect-21/9 flex items-center justify-center px-6
                            bg-white/40 backdrop-blur-md border border-white/40
                            rounded-2xl cursor-pointer shadow-lg transition-all duration-300`}
                style={{
                  scale: p.scale,
                  // Adds a subtle "glass shine" gradient
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.2) 100%)",
                }}
                whileHover={{
                  scale: p.scale + 0.08,
                  backgroundColor: "rgba(255, 255, 255, 0.6)",
                  boxShadow: "0 25px 30px -5px rgba(0,0,0,0.1)",
                }}
              >
                <h3 className="text-xs md:text-sm font-black text-slate-800 truncate uppercase tracking-tighter text-center">
                  {p.title}
                </h3>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Details View - Now fills the container exactly */}
        <AnimatePresence>
          {selectedId !== null && selectedProject && (
            <motion.div
              layoutId={`card-${selectedProject.id}`}
              // absolute inset-0 pins it to the 6xl container edges
              // rounded matches the parent container's radius
              className="absolute inset-0 z-1000 bg-white rounded-[3.5rem] flex flex-col shadow-2xl border border-slate-100 overflow-hidden min-h-0"
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
            >
              <div className="p-8 md:p-12 flex flex-col h-full min-h-0">
                {/* Header of Expanded View */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center">
                    <div>
                      <h3 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase italic leading-none">
                        {selectedProject.title}
                      </h3>
                      {selectedProject.subtitle ? (
                        <p className="text-slate-400 font-bold tracking-[0.12em] text-xs mt-4 uppercase italic">
                          {selectedProject.subtitle}
                        </p>
                      ) : (
                        <p className="text-slate-400 font-bold tracking-[0.35em] text-xs mt-4 uppercase italic">
                          Strategic Engineering Blueprint
                        </p>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedId(null)}
                    className="bg-slate-100 hover:bg-brand-900 w-16 h-16 rounded-full flex items-center justify-center transition-all group shrink-0"
                  >
                    <span className="text-slate-400 group-hover:text-white text-2xl font-light">
                      ✕
                    </span>
                  </button>
                </div>

                {/* Body Content */}
                <div className="border-t border-slate-50 pt-8 grow min-h-0 overflow-y-auto">
                  <div className="space-y-8 max-w-3xl">
                    <div>
                      <h4 className="text-brand-900 font-bold uppercase tracking-[0.25em] text-[11px] mb-4">
                        The Problem
                      </h4>
                      <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-light italic">
                        {selectedProject.problem}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-brand-900 font-bold uppercase tracking-[0.25em] text-[11px] mb-4">
                        The Solution
                      </h4>
                      <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-light italic">
                        {selectedProject.solution}
                      </p>
                    </div>

                    <div className="pt-4">
                      <a
                        href="/contact#contact"
                        onClick={() => setSelectedId(null)}
                        className="inline-flex items-center justify-center bg-brand-900 text-white px-6 py-3.5 rounded-2xl font-bold text-base hover:bg-brand-800 transition-all shadow-xl"
                      >
                        Find out more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
