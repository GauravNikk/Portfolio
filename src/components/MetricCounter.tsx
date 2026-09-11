"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface MetricCounterProps {
  value: string;
  label: string;
}

export default function MetricCounter({ value, label }: MetricCounterProps) {
  const [count, setCount] = useState<string>("0");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    // Matches numbers with decimals, e.g. "99.1", "50", "4.5", "10"
    const numberPattern = /([0-9]+(?:\.[0-9]+)?)/;
    const match = value.match(numberPattern);
    
    if (!match) {
      setCount(value);
      return;
    }

    const target = parseFloat(match[0]);
    const suffix = value.replace(match[0], "");
    const isDecimal = match[0].includes(".");

    let start = 0;
    const duration = 1000; // ms
    const interval = 20; // ms
    const step = (target / duration) * interval;

    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target.toString() + suffix);
        clearInterval(timer);
      } else {
        const displayVal = isDecimal ? start.toFixed(1) : Math.floor(start).toString();
        setCount(displayVal + suffix);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={ref} className="flex flex-col p-6 bg-zinc-950/40 border border-zinc-900 rounded-xl hover:border-zinc-800 transition-colors">
      <div className="text-4xl md:text-5xl font-mono font-bold text-accent mb-2">
        {count}
      </div>
      <div className="text-xs text-zinc-500 font-mono uppercase tracking-widest leading-relaxed">
        {label}
      </div>
    </div>
  );
}
