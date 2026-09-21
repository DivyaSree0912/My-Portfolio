"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Tag from "@/components/ui/Tag";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";

interface Props {
  project: Project;
  featured?: boolean;
  index?: number;
}

export default function ProjectCard({
  project,
  featured = false,
  index = 0,
}: Props) {
  const reduceMotion = useReducedMotion();
  const displayNumber = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: (index % 2) * 0.08, ease: "easeOut" }}
      className={cn(
        "editorial-card group flex h-full flex-col justify-between rounded-[28px] border bg-[#FAF7F4] p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 min-h-[380px]",
        featured
          ? "border-[#1A1A1A]/40 shadow-sm hover:border-[#1A1A1A]"
          : "border-[#E0D9D1] hover:border-[#1A1A1A]/40"
      )}
    >
      {/* Top micro metadata header */}
      <div>
        <div className="mb-5 flex items-center justify-between gap-3 border-b border-[#E0D9D1] pb-3">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#A39E98]">
              {displayNumber}
            </span>
            {featured && (
              <>
                <span className="text-[#D5CCC0]">·</span>
                <span className="inline-flex items-center rounded-full bg-[#1A1A1A] px-2.5 py-0.5 text-[9px] font-bold tracking-[0.16em] text-[#F5F0EB] uppercase">
                  FLAGSHIP
                </span>
              </>
            )}
          </div>

          <div className="flex items-center gap-3">
            {project.status ? (
              <span className="text-[10px] font-medium tracking-[0.16em] text-[#6B6560] uppercase">
                {project.status}
              </span>
            ) : (
              <span className="text-[10px] font-medium tracking-[0.16em] text-[#A39E98] uppercase">
                PUBLIC REPO
              </span>
            )}
          </div>
        </div>

        {/* Title + External GitHub Icon */}
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-2xl sm:text-[1.65rem] font-extrabold tracking-[-0.03em] uppercase text-[#1A1A1A] leading-snug group-hover:text-[#6B6560] transition-colors">
            {project.name}
          </h3>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#E0D9D1] bg-[#F5F0EB] text-[#1A1A1A] transition-all hover:bg-[#1A1A1A] hover:text-[#F5F0EB] hover:border-[#1A1A1A]"
            aria-label={`${project.name} on GitHub`}
            title="View on GitHub"
          >
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>

        {/* One-Liner Description */}
        <p className="mt-4 text-sm text-[#6B6560] leading-relaxed">
          {project.oneLiner}
        </p>

        {/* Tags */}
        <ul className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li key={tag}>
              <Tag label={tag} />
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom Footer Actions */}
      <div className="mt-8 flex items-center justify-between gap-3 border-t border-[#E0D9D1]/70 pt-5">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.1em] text-[#1A1A1A] uppercase transition-colors hover:text-[#6B6560]"
        >
          <span>View Case Study</span>
          <ArrowUpRight size={14} aria-hidden="true" />
        </Link>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-medium text-[#6B6560] hover:text-[#1A1A1A] transition-colors"
        >
          GitHub →
        </a>
      </div>
    </motion.article>
  );
}
