import { Award, Code, GraduationCap, Trophy } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { achievements } from "@/data/achievements";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";

const icons: Record<string, LucideIcon> = {
  Trophy,
  Award,
  Code,
  GraduationCap,
};

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="section-shell scroll-mt-24 py-24 sm:py-32"
      aria-labelledby="achievements-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection className="mb-8">
          <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
            <p className="text-[10px] font-medium tracking-[0.22em] text-zinc-400 uppercase">
              06 / ACHIEVEMENTS
            </p>
            <p className="text-[10px] font-medium tracking-[0.22em] text-zinc-500 uppercase">
              RECOGNIZED WORK
            </p>
          </div>
        </AnimatedSection>

        <SectionHeading id="achievements-heading" title="Achievements" />

        <div className="grid gap-4 sm:grid-cols-2">
          {achievements.map((item, index) => {
            const Icon = icons[item.icon] ?? Award;
            return (
              <AnimatedSection key={item.title} delay={index * 0.05}>
                <article className="premium-card h-full rounded-[26px] p-5 transition-transform duration-300 hover:-translate-y-0.5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10">
                      <Icon
                        size={18}
                        className="shrink-0 text-blue-300"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.details}</p>
                    </div>
                  </div>
                </article>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
