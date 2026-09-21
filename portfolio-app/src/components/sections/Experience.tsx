import { experiences } from "@/data/experience";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-shell scroll-mt-20 py-28 sm:py-36 border-b border-[#E0D9D1]"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        {/* Section Header */}
        <AnimatedSection className="mb-14">
          <div className="flex items-center justify-between gap-4 border-b border-[#E0D9D1] pb-4">
            <div className="flex items-center gap-3">
              <span className="inline-block w-2 h-2 rounded-full bg-[#1A1A1A]" />
              <p className="text-[10px] font-medium tracking-[0.22em] text-[#6B6560] uppercase">
                05 / EXPERIENCE
              </p>
            </div>
            <p className="text-[10px] font-medium tracking-[0.22em] text-[#A39E98] uppercase">
              APPLIED INDUSTRY PRACTICE
            </p>
          </div>
        </AnimatedSection>

        {/* Large Editorial Heading */}
        <AnimatedSection delay={0.05} className="mb-16">
          <h2
            id="experience-heading"
            className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-[-0.04em] uppercase text-[#1A1A1A] leading-[1.05]"
          >
            EXPERIENCE,
            <span className="block text-outline font-black">BUILT THROUGH PRACTICE.</span>
          </h2>
        </AnimatedSection>

        {/* Editorial Timeline / List */}
        <div className="space-y-8">
          {experiences.map((item, index) => (
            <AnimatedSection
              key={`${item.company}-${item.role}`}
              delay={index * 0.08}
            >
              <article className="editorial-card rounded-[30px] p-8 sm:p-12 border border-[#E0D9D1] bg-[#FAF7F4] transition-all duration-200 hover:border-[#1A1A1A]/40">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
                  {/* Left Metadata Column */}
                  <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-[#E0D9D1] pb-6 lg:pb-0 lg:pr-8">
                    <p className="text-[10px] font-mono font-bold tracking-widest text-[#A39E98] uppercase mb-2">
                      0{index + 1} // INTERNSHIP
                    </p>
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1A1A1A]">
                      {item.company}
                    </h3>
                    <p className="text-sm font-semibold tracking-wider text-[#6B6560] uppercase mt-1">
                      {item.duration}
                    </p>
                  </div>

                  {/* Right Detail Column */}
                  <div className="lg:col-span-8">
                    <p className="text-lg sm:text-xl font-bold text-[#1A1A1A] mb-4">
                      {item.role}
                    </p>

                    <ul className="space-y-3 text-sm sm:text-base text-[#6B6560] leading-relaxed">
                      {item.responsibilities.map((responsibility) => (
                        <li key={responsibility} className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1A1A1A]" />
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
