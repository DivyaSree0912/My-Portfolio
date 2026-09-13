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

export default function ProjectCard({ project, featured = false, index = 0 }: Props) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: "easeOut" }}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,_rgba(18,18,22,0.94),_rgba(12,12,15,0.96))] p-5 shadow-[0_24px_80px_rgba(2,6,23,0.36)] transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_36px_90px_rgba(2,6,23,0.45)]",
        featured && "sm:p-7",
      )}
    >
      {featured && (
        <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/80 to-transparent" aria-hidden="true" />
      )}

      <div className="mb-5 flex items-center justify-between gap-3">
        <p className="text-[10px] font-medium tracking-[0.22em] text-zinc-500 uppercase">
          {String(index + 1).padStart(2, "0")}
        </p>
        {featured ? (
          <p className="text-[10px] font-medium tracking-[0.22em] text-blue-300 uppercase">
            Featured project
          </p>
        ) : (
          project.status && (
            <p className="text-[10px] font-medium tracking-[0.18em] text-zinc-400 uppercase">
              {project.status}
            </p>
          )
        )}
      </div>

      <div className="flex items-start justify-between gap-4">
        <h3 className={cn("font-semibold tracking-[-0.04em] text-white", featured ? "text-2xl" : "text-xl")}>
          {project.name}
        </h3>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-zinc-300 transition-colors hover:border-white/20 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          aria-label={`${project.name} on GitHub`}
        >
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>

      <p className={cn("mt-4 text-zinc-400", featured ? "text-base" : "text-sm")}>
        {project.oneLiner}
      </p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li key={tag}>
            <Tag label={tag} />
          </li>
        ))}
      </ul>

      <div className="mt-auto flex items-center justify-between gap-3 pt-6">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1 text-sm font-medium text-blue-300 transition-colors hover:text-blue-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          View case study
          <ArrowUpRight size={16} aria-hidden="true" />
        </Link>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-xs font-medium text-zinc-300 transition-colors hover:border-white/20 hover:text-white"
        >
          GitHub
        </a>
      </div>
    </motion.article>
  );
}

