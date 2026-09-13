import { Code2 } from "lucide-react";
import { problemSolving } from "@/data/problemSolving";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Tag from "@/components/ui/Tag";

export default function ProblemSolving() {
  return (
    <section
      id="problem-solving"
      className="section-shell scroll-mt-24 py-24 sm:py-32"
      aria-labelledby="problem-solving-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection className="mb-8">
          <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
            <p className="text-[10px] font-medium tracking-[0.22em] text-zinc-400 uppercase">
              08 / PROBLEM SOLVING
            </p>
            <p className="text-[10px] font-medium tracking-[0.22em] text-zinc-500 uppercase">
              DATA STRUCTURES · PATTERNS · PRACTICE
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <article className="premium-card rounded-[30px] p-6 sm:p-8">
            <div className="grid gap-6 lg:grid-cols-[0.6fr_1.4fr] lg:items-center">
              <div className="flex items-center gap-4 lg:flex-col lg:items-start">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10">
                  <Code2 className="shrink-0 text-blue-300" size={22} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-[10px] font-medium tracking-[0.18em] text-zinc-500 uppercase">
                    Platform
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-[-0.05em] text-white">
                    {problemSolving.platform}
                  </h3>
                </div>
              </div>

              <div>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-[10px] font-medium tracking-[0.18em] text-blue-300 uppercase">
                    {problemSolving.metric}
                  </p>
                  <span className="inline-flex w-fit rounded-full border border-white/10 bg-white/[0.02] px-2.5 py-1 text-[10px] font-medium tracking-[0.16em] text-zinc-300 uppercase">
                    Core problem solving
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-zinc-400 sm:text-base">
                  Topics practiced across arrays, strings, linked lists, trees, graphs,
                  recursion, dynamic programming, and greedy algorithms.
                </p>

                <p className="mt-5 text-[10px] font-medium tracking-[0.18em] text-zinc-500 uppercase">
                  Topics practiced
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {problemSolving.topics.map((topic) => (
                    <li key={topic}>
                      <Tag label={topic} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </AnimatedSection>
      </div>
    </section>
  );
}
