"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function BuildLine() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="absolute left-6 md:left-1/2 top-0 bottom-0 md:-translate-x-1/2 w-[1px] bg-zinc-900/50 pointer-events-none z-0">
      <motion.div
        className="w-full h-full bg-gradient-to-b from-accent/20 via-accent to-accent/20 origin-top shadow-[0_0_10px_rgba(0,255,102,0.3)]"
        style={{ scaleY }}
      />
    </div>
  );
}
