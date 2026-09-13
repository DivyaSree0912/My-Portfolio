"use client";

import { ArrowDown, ArrowUpRight, Mail } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Button from "@/components/ui/Button";
import { site } from "@/lib/site";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden border-b border-white/10"
      aria-label="Introduction"
    >
      <div className="absolute inset-0 ambient-grid opacity-40" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,_rgba(96,165,250,0.18),_transparent_60%)]" aria-hidden="true" />
      <div className="absolute top-1/2 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl pulse-soft" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#09090b] via-[#09090b]/60 to-transparent" aria-hidden="true" />
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute left-8 top-24 hidden h-px w-28 bg-gradient-to-r from-blue-400/40 via-blue-300/20 to-transparent lg:block" />
        <div className="absolute right-10 top-32 hidden h-px w-36 bg-gradient-to-r from-transparent via-violet-300/20 to-violet-400/40 lg:block" />
        <div className="absolute left-1/2 top-20 hidden -translate-x-1/2 rounded-full border border-white/10 bg-white/[0.02] px-2 py-1 text-[9px] font-medium tracking-[0.18em] text-zinc-400 uppercase lg:block">
          SYSTEM // LIVE
        </div>
        <div className="absolute right-14 bottom-24 hidden rounded-full border border-white/10 bg-white/[0.02] px-2 py-1 text-[9px] font-medium tracking-[0.18em] text-zinc-400 uppercase lg:block">
          01 / PORTFOLIO
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-16 pt-28 text-center sm:pt-32">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.02] px-3.5 py-2 text-[11px] font-medium tracking-[0.18em] text-zinc-300 uppercase shadow-[0_20px_40px_rgba(0,0,0,0.18)]"
        >
          <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(74,222,128,0.8)]" aria-hidden="true" />
          {site.tagline}
        </motion.div>

        <motion.h1
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mx-auto max-w-5xl text-4xl font-semibold tracking-[-0.08em] text-white sm:text-6xl lg:text-8xl"
        >
          {site.nameDisplay}
        </motion.h1>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-zinc-400 sm:text-xl"
        >
          {site.statement}
        </motion.p>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.24 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Button href="#projects" size="lg">
            View Projects
            <ArrowDown size={16} aria-hidden="true" />
          </Button>
          <Button href="#contact" variant="secondary" size="lg">
            Get in Touch
          </Button>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.32 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-zinc-300"
        >
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3 py-2 transition-colors hover:border-white/20 hover:text-white"
          >
            GitHub
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3 py-2 transition-colors hover:border-white/20 hover:text-white"
          >
            LinkedIn
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3 py-2 transition-colors hover:border-white/20 hover:text-white"
          >
            <Mail size={14} aria-hidden="true" />
            Email
          </a>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex justify-center"
        >
          <a
            href="#about"
            className="group inline-flex flex-col items-center gap-2 text-[10px] font-medium tracking-[0.22em] text-zinc-500 uppercase transition-colors hover:text-zinc-300"
            aria-label="Scroll to about section"
          >
            <span>Scroll</span>
            <span className="flex h-10 w-6 items-start justify-center rounded-full border border-white/10 bg-white/[0.02]">
              <span className="mt-2 h-2.5 w-1 rounded-full bg-zinc-300 transition-transform duration-300 group-hover:translate-y-1" />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
