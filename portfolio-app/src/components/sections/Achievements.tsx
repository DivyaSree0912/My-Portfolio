import { achievements } from "@/data/achievements";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="section-shell scroll-mt-20 py-28 sm:py-36 border-b border-[#E0D9D1]"
      aria-labelledby="achievements-heading"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        {/* Section Header */}
        <AnimatedSection className="mb-14">
          <div className="flex items-center justify-between gap-4 border-b border-[#E0D9D1] pb-4">
            <div className="flex items-center gap-3">
              <span className="inline-block w-2 h-2 rounded-full bg-[#1A1A1A]" />
              <p className="text-[10px] font-medium tracking-[0.22em] text-[#6B6560] uppercase">
                06 / ACHIEVEMENTS
              </p>
            </div>
            <p className="text-[10px] font-medium tracking-[0.22em] text-[#A39E98] uppercase">
              RECOGNITIONS · COMPETITIONS
            </p>
          </div>
        </AnimatedSection>

        {/* Large Editorial Heading */}
        <AnimatedSection delay={0.05} className="mb-16">
          <h2
            id="achievements-heading"
            className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-[-0.04em] uppercase text-[#1A1A1A] leading-[1.05]"
          >
            HONORS &amp;
            <span className="block text-outline font-black">ACHIEVEMENTS.</span>
          </h2>
        </AnimatedSection>

        {/* Editorial Numbered Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((item, index) => (
            <AnimatedSection key={item.title} delay={index * 0.07}>
              <article className="editorial-card h-full rounded-[28px] p-8 border border-[#E0D9D1] bg-[#FAF7F4] flex flex-col justify-between transition-all duration-300 hover:border-[#1A1A1A]/40 hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl sm:text-4xl font-black text-outline tracking-wider font-mono">
                      0{index + 1}
                    </span>
                    <span className="text-[10px] font-semibold tracking-[0.2em] text-[#A39E98] uppercase">
                      RECOGNITION
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1A1A1A]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm sm:text-base text-[#6B6560] leading-relaxed">
                    {item.details}
                  </p>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
