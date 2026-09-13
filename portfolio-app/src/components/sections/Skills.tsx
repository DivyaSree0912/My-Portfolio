import { skills } from "@/data/skills";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import Tag from "@/components/ui/Tag";

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-shell scroll-mt-24 py-24 sm:py-32"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection className="mb-8">
          <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
            <p className="text-[10px] font-medium tracking-[0.22em] text-zinc-400 uppercase">
              07 / SKILLS
            </p>
            <p className="text-[10px] font-medium tracking-[0.22em] text-zinc-500 uppercase">
              TECH STACK
            </p>
          </div>
        </AnimatedSection>

        <SectionHeading id="skills-heading" title="Skills" />

        <div className="grid gap-5 md:grid-cols-2">
          {skills.map((category, index) => (
            <AnimatedSection key={category.name} delay={index * 0.05}>
              <div className="premium-card h-full rounded-[26px] p-5">
                <h3 className="mb-4 text-xs font-medium tracking-[0.2em] text-zinc-400 uppercase">
                  {category.name}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <li key={skill}>
                      <Tag label={skill} />
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
