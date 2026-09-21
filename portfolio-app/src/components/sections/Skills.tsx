import { skills } from "@/data/skills";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-shell scroll-mt-20 py-28 sm:py-36 border-b border-[#E0D9D1]"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        {/* Section Header */}
        <AnimatedSection className="mb-14">
          <div className="flex items-center justify-between gap-4 border-b border-[#E0D9D1] pb-4">
            <div className="flex items-center gap-3">
              <span className="inline-block w-2 h-2 rounded-full bg-[#1A1A1A]" />
              <p className="text-[10px] font-medium tracking-[0.22em] text-[#6B6560] uppercase">
                07 / SKILLS
              </p>
            </div>
            <p className="text-[10px] font-medium tracking-[0.22em] text-[#A39E98] uppercase">
              TECHNICAL REPERTOIRE
            </p>
          </div>
        </AnimatedSection>

        {/* Large Editorial Heading */}
        <AnimatedSection delay={0.05} className="mb-16">
          <h2
            id="skills-heading"
            className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-[-0.04em] uppercase text-[#1A1A1A] leading-[1.05]"
          >
            TECH STACK &amp;
            <span className="block text-outline font-black">CAPABILITIES.</span>
          </h2>
        </AnimatedSection>

        {/* Grouped Editorial Skills Grid (No Progress Bars) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category, index) => (
            <AnimatedSection key={category.name} delay={index * 0.05}>
              <div className="editorial-card h-full rounded-[28px] p-8 border border-[#E0D9D1] bg-[#FAF7F4] flex flex-col justify-between transition-all duration-200 hover:border-[#1A1A1A]/40">
                <div>
                  <div className="flex items-center justify-between border-b border-[#E0D9D1] pb-3 mb-6">
                    <h3 className="text-xs font-bold tracking-[0.16em] text-[#1A1A1A] uppercase">
                      {category.name}
                    </h3>
                    <span className="text-[10px] font-mono text-[#A39E98]">
                      0{index + 1}
                    </span>
                  </div>

                  <ul className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <li key={skill}>
                        <span className="inline-block rounded-full border border-[#E0D9D1] bg-[#F5F0EB] px-3.5 py-1.5 text-xs font-medium text-[#1A1A1A] tracking-wide hover:border-[#1A1A1A] transition-colors">
                          {skill}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
