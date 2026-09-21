"use client";

import { useState } from "react";
import { ArrowDown, Mail } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Button from "@/components/ui/Button";
import { site } from "@/lib/site";

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24 border-b border-[#E0D9D1]"
      aria-label="Introduction"
    >
      {/* Subtle decorative dot grid and lines */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-20 right-12 w-48 h-48 dot-grid hidden lg:block" />
        <div className="absolute bottom-16 left-8 w-36 h-36 dot-grid hidden lg:block" />
        <div className="absolute left-1/3 top-0 bottom-0 w-px bg-[#E0D9D1]/60 hidden xl:block" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 w-full">
        {/* Top micro metadata bar */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E0D9D1] pb-4 mb-10 text-[10px] font-medium tracking-[0.22em] text-[#6B6560] uppercase"
        >
          <div className="flex items-center gap-3">
            <span className="inline-block w-2 h-2 rounded-full bg-[#1A1A1A]" />
            <span>01 / PORTFOLIO</span>
            <span className="text-[#A39E98]">|</span>
            <span className="text-[#1A1A1A]">SOFTWARE ENGINEERING · AI/ML</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-[#A39E98]">
            <span>GITAM UNIVERSITY &apos;28</span>
            <span>·</span>
            <span>VISAKHAPATNAM, IN</span>
          </div>
        </motion.div>

        {/* Main Grid: Asymmetric Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Massive Editorial Typography & Identity */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center">
            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="text-xs sm:text-sm font-semibold tracking-[0.24em] text-[#6B6560] uppercase mb-4"
            >
              {site.nameDisplay}
            </motion.p>

            {/* Giant Editorial Headline: Solid + Outlined */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="tracking-[-0.04em] font-black uppercase text-[#1A1A1A] leading-[0.92]"
            >
              <div className="text-5xl sm:text-7xl xl:text-8xl font-extrabold">
                SOFTWARE
              </div>
              <div className="text-5xl sm:text-7xl xl:text-8xl font-black text-outline-lg my-1 sm:my-2">
                + AI/ML
              </div>
              <div className="text-5xl sm:text-7xl xl:text-8xl font-extrabold">
                BUILDER.
              </div>
            </motion.div>

            {/* Statement */}
            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.2 }}
              className="mt-8 max-w-xl text-lg sm:text-xl text-[#6B6560] leading-relaxed font-normal"
            >
              {site.statement}
            </motion.p>

            {/* CTA Buttons & Social Icons */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.3 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Button href="#projects" size="lg" arrow>
                View Projects
              </Button>
              <Button href="#contact" variant="secondary" size="lg">
                Get in Touch
              </Button>

              {/* Circular Social Buttons */}
              <div className="flex items-center gap-2.5 ml-1 sm:ml-2">
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full border border-[#E0D9D1] bg-[#FAF7F4] flex items-center justify-center text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#F5F0EB] hover:border-[#1A1A1A] transition-all duration-200"
                  aria-label="GitHub Profile"
                  title="GitHub"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full border border-[#E0D9D1] bg-[#FAF7F4] flex items-center justify-center text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#F5F0EB] hover:border-[#1A1A1A] transition-all duration-200"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="w-11 h-11 rounded-full border border-[#E0D9D1] bg-[#FAF7F4] flex items-center justify-center text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#F5F0EB] hover:border-[#1A1A1A] transition-all duration-200"
                  aria-label="Send an Email"
                  title="Email"
                >
                  <Mail size={16} aria-hidden="true" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Editorial Portrait Showcase */}
          <div className="lg:col-span-5 xl:col-span-5 relative flex justify-center lg:justify-end">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="relative w-full max-w-[360px] sm:max-w-[420px] aspect-[4/5]"
            >
              {/* Soft background shape behind portrait inspired by reference */}
              <div
                className="absolute inset-0 -bottom-4 rounded-[40px] bg-gradient-to-b from-[#EAE2D8] via-[#E4DCCE] to-[#D9D0C1] shadow-lg"
                aria-hidden="true"
              />

              {/* Decorative fine circle ring */}
              <div
                className="absolute -top-6 -right-6 w-32 h-32 deco-circle border-[#D5CCC0] opacity-60 hidden sm:block pointer-events-none"
                aria-hidden="true"
              />

              {/* Dot grid accent */}
              <div
                className="absolute -bottom-6 -left-6 w-24 h-24 dot-grid opacity-60 hidden sm:block pointer-events-none"
                aria-hidden="true"
              />

              {/* Portrait Container with smooth mask fade */}
              <div className="relative z-10 w-full h-full rounded-[36px] overflow-hidden">
                {!imageError ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src="/images/profile.png"
                    alt="Dadi Divya Sree"
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-[1.02]"
                    style={{
                      maskImage:
                        "linear-gradient(to bottom, black 80%, transparent 100%)",
                      WebkitMaskImage:
                        "linear-gradient(to bottom, black 80%, transparent 100%)",
                    }}
                  />
                ) : (
                  // Elegant editorial fallback if profile.png is not yet placed
                  <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-b from-[#EAE2D8] to-[#DDD4C6]">
                    <div className="w-24 h-24 rounded-full border border-[#1A1A1A]/20 flex items-center justify-center mb-6">
                      <span className="text-2xl font-bold tracking-widest text-[#1A1A1A]">
                        DS
                      </span>
                    </div>
                    <p className="text-xs font-semibold tracking-[0.2em] text-[#1A1A1A] uppercase mb-1">
                      PORTRAIT DISPLAY
                    </p>
                    <p className="text-[11px] text-[#6B6560] leading-relaxed max-w-[200px]">
                      Place your photo at <br />
                      <code className="bg-[#1A1A1A]/10 px-1.5 py-0.5 rounded text-[10px] text-[#1A1A1A]">
                        public/images/profile.png
                      </code>
                    </p>
                  </div>
                )}
              </div>

              {/* Editorial micro badge overlay on portrait corner */}
              <div className="absolute -bottom-3 right-4 z-20 rounded-full border border-[#E0D9D1] bg-[#FAF7F4] px-4 py-1.5 shadow-sm text-[10px] font-semibold tracking-[0.16em] text-[#1A1A1A] uppercase">
                PORTRAIT // 2026
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom subtle scroll indicator */}
        <div className="mt-14 pt-8 flex items-center justify-between border-t border-[#E0D9D1]/70 text-[10px] font-medium tracking-[0.2em] text-[#A39E98] uppercase">
          <span>01 / 09</span>
          <a
            href="#about"
            className="flex items-center gap-2 hover:text-[#1A1A1A] transition-colors"
          >
            <span>SCROLL DOWN</span>
            <ArrowDown size={12} />
          </a>
        </div>
      </div>
    </section>
  );
}
