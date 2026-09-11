"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { appsData, AppData } from "@/data/apps";
import { motion, AnimatePresence } from "framer-motion";

export default function AppMarquee() {
  const [activeApp, setActiveApp] = useState<AppData | null>(null);

  // Split apps into two rows for variety and look
  const row1 = appsData.slice(0, 10);
  const row2 = appsData.slice(10, 20);

  return (
    <div className="w-full overflow-hidden py-10 relative">
      {/* Detail Overlay / Modal */}
      <AnimatePresence>
        {activeApp && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveApp(null)}
            className="fixed inset-0 bg-background/80 backdrop-blur-md z-50 flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card max-w-md w-full p-6 rounded-2xl relative border border-zinc-800"
            >
              <div className="flex gap-4 items-start mb-4">
                <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-zinc-900 flex-shrink-0 border border-zinc-800">
                  <img
                    src={activeApp.icon}
                    alt={activeApp.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-mono tracking-wide">{activeApp.name}</h3>
                  <p className="text-xs text-zinc-500 font-mono mb-1">{activeApp.developer}</p>
                  <span className="text-[10px] bg-accent/10 border border-accent/20 text-accent px-2 py-0.5 rounded font-mono">
                    {activeApp.installs} INSTALLS
                  </span>
                </div>
              </div>
              
              <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
                {activeApp.summary || activeApp.description.slice(0, 120) + "..."}
              </p>

              <div className="flex gap-3">
                <a
                  href={activeApp.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-grow flex items-center justify-center gap-2 bg-accent text-accent-foreground py-2.5 rounded-lg text-xs font-mono font-bold tracking-wider hover:bg-accent/90 transition-colors"
                >
                  PLAY STORE
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <button
                  onClick={() => setActiveApp(null)}
                  className="px-4 py-2.5 bg-zinc-950 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-foreground rounded-lg text-xs font-mono tracking-wider transition-colors"
                >
                  CLOSE
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Row 1 (moving left) */}
      <div className="flex gap-6 w-max animate-marquee mb-6 hover:[animation-play-state:paused]">
        {/* Render twice for infinite scroll loop */}
        {[...row1, ...row1].map((app, idx) => (
          <button
            key={`${app.slug}-${idx}`}
            onClick={() => setActiveApp(app)}
            className="group flex items-center gap-4 bg-zinc-950/40 border border-zinc-900 hover:border-accent/30 hover:bg-zinc-900/60 p-3 rounded-2xl transition-all duration-300 w-64 text-left flex-shrink-0"
          >
            <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-zinc-900 flex-shrink-0 border border-zinc-800 transition-transform group-hover:scale-105">
              <img src={app.icon} alt={app.name} className="w-full h-full object-cover" />
            </div>
            <div className="overflow-hidden">
              <h4 className="text-xs font-bold font-mono tracking-wide truncate group-hover:text-accent transition-colors">
                {app.name}
              </h4>
              <p className="text-[10px] text-zinc-500 font-mono truncate">{app.developer}</p>
              <span className="text-[9px] text-zinc-400 font-mono mt-1 block truncate">
                {app.installs} Installs
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Row 2 (moving right / we reverse direction or use different speed) */}
      <div className="flex gap-6 w-max animate-marquee [animation-direction:reverse] hover:[animation-play-state:paused]">
        {[...row2, ...row2].map((app, idx) => (
          <button
            key={`${app.slug}-${idx}-r2`}
            onClick={() => setActiveApp(app)}
            className="group flex items-center gap-4 bg-zinc-950/40 border border-zinc-900 hover:border-accent/30 hover:bg-zinc-900/60 p-3 rounded-2xl transition-all duration-300 w-64 text-left flex-shrink-0"
          >
            <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-zinc-900 flex-shrink-0 border border-zinc-800 transition-transform group-hover:scale-105">
              <img src={app.icon} alt={app.name} className="w-full h-full object-cover" />
            </div>
            <div className="overflow-hidden">
              <h4 className="text-xs font-bold font-mono tracking-wide truncate group-hover:text-accent transition-colors">
                {app.name}
              </h4>
              <p className="text-[10px] text-zinc-500 font-mono truncate">{app.developer}</p>
              <span className="text-[9px] text-zinc-400 font-mono mt-1 block truncate">
                {app.installs} Installs
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
