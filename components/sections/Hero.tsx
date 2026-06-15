"use client";

import { useEffect, useState } from "react";
import { Download, ArrowDown, MapPin, Wifi } from "lucide-react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative bg-white dark:bg-slate-950"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#3B82F6 1px, transparent 1px), linear-gradient(90deg, #3B82F6 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="section-container relative z-10 py-24 w-full">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Left: Text content */}
          <div
            className={`flex-1 transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {/* Status badges */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 px-3 py-1 rounded-full">
                <MapPin className="w-3 h-3 text-blue-500" />
                Delhi, India
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 px-3 py-1 rounded-full">
                <Wifi className="w-3 h-3" />
                Open to Remote
              </span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-slate-50 mb-3">
              Hi, I&apos;m <br />
              <span className="text-blue-500">Vanshika Ghatwal</span>
            </h1>

            {/* Role with cursor blink */}
            <p className="font-mono text-sm md:text-base text-slate-500 dark:text-slate-400 mb-5 cursor-blink">
              B.Tech CSE Student
            </p>

            {/* Intro */}
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-lg mb-8">
              Second-year computer science student who enjoys building things.
              Currently exploring full-stack development and sharpening my
              fundamentals in DSA.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <a href="#projects" className="btn-primary">
                View Projects
                <ArrowDown className="w-4 h-4" />
              </a>
              <a href="/resume.pdf" download className="btn-secondary">
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
