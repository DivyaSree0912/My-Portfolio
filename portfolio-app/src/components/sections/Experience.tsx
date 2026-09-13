import { experiences } from "@/data/experience";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-shell scroll-mt-24 py-24 sm:py-32"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection className="mb-8">
          <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
            <p className="text-[10px] font-medium tracking-[0.22em] text-zinc-400 uppercase">
              05 / EXPERIENCE
            </p>
            <p className="text-[10px] font-medium tracking-[0.22em] text-zinc-500 uppercase">
              BUILT THROUGH PRACTICE
            </p>
          </div>
        </AnimatedSection>

        <SectionHeading id="experience-heading" title="Experience" />

        <ol className="relative mt-8 space-y-6 before:absolute before:inset-y-0 before:left-[0.6rem] before:w-px before:bg-gradient-to-b before:from-white/10 before:to-white/5">
          {experiences.map((item, index) => (
            <AnimatedSection
              key={`${item.company}-${item.role}`}
              delay={index * 0.06}
              className="relative pl-8"
            >
              <span
                className="absolute left-0 top-6 h-3 w-3 rounded-full border border-blue-200/60 bg-blue-400 shadow-[0_0_16px_rgba(96,165,250,0.8)]"
                aria-hidden="true"
              />

              <div className="premium-card rounded-[26px] p-5 sm:p-6">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-xs font-medium tracking-[0.18em] text-zinc-500 uppercase">
                      {item.duration}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-white">{item.role}</h3>
                    <p className="mt-1 text-sm text-zinc-400">{item.company}</p>
                  </div>
                </div>

                <ul className="mt-4 space-y-2">
                  {item.responsibilities.map((responsibility) => (
                    <li key={responsibility} className="flex gap-3 text-sm leading-relaxed text-zinc-300">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" aria-hidden="true" />
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </ol>
      </div>
    </section>
  );
}
