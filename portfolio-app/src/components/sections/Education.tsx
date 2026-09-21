import AnimatedSection from "@/components/ui/AnimatedSection";
import { site } from "@/lib/site";

export default function Education() {
  return (
    <section
      id="education"
      className="section-shell scroll-mt-20 py-28 sm:py-36 border-b border-[#E0D9D1]"
      aria-labelledby="education-heading"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        {/* Section Header */}
        <AnimatedSection className="mb-14">
          <div className="flex items-center justify-between gap-4 border-b border-[#E0D9D1] pb-4">
            <div className="flex items-center gap-3">
              <span className="inline-block w-2 h-2 rounded-full bg-[#1A1A1A]" />
              <p className="text-[10px] font-medium tracking-[0.22em] text-[#6B6560] uppercase">
                03 / EDUCATION
              </p>
            </div>
            <p className="text-[10px] font-medium tracking-[0.22em] text-[#A39E98] uppercase">
              ACADEMIC FOUNDATION
            </p>
          </div>
        </AnimatedSection>

        {/* Large Editorial Heading */}
        <AnimatedSection delay={0.05} className="mb-14">
          <h2
            id="education-heading"
            className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-[-0.04em] uppercase text-[#1A1A1A] leading-[1.05]"
          >
            COMPUTER SCIENCE,
            <span className="block text-outline font-black">BUILT ON FUNDAMENTALS.</span>
          </h2>
        </AnimatedSection>

        {/* Education Editorial Showcase */}
        <AnimatedSection delay={0.1}>
          <div className="editorial-card rounded-[32px] p-8 sm:p-12 border border-[#E0D9D1] bg-[#FAF7F4] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-36 h-36 dot-grid opacity-30 pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-8">
                <p className="text-[10px] font-semibold tracking-[0.22em] text-[#A39E98] uppercase mb-3">
                  INSTITUTION
                </p>
                <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1A1A1A]">
                  {site.education.school}
                </h3>
                <p className="text-lg sm:text-xl font-medium text-[#1A1A1A] mt-2">
                  {site.education.degree}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-[#6B6560] mt-3 font-normal">
                  <span>{site.education.duration}</span>
                  <span>·</span>
                  <span>{site.location}</span>
                </div>
              </div>

              {/* CGPA Card (ONLY place CGPA appears) */}
              <div className="lg:col-span-4">
                <div className="rounded-[24px] border border-[#E0D9D1] bg-[#F5F0EB] p-6 sm:p-7 text-center sm:text-left">
                  <p className="text-[10px] font-semibold tracking-[0.2em] text-[#6B6560] uppercase mb-2">
                    ACADEMIC STANDING
                  </p>
                  <p className="text-3xl sm:text-4xl font-black tracking-tight text-[#1A1A1A]">
                    {site.education.cgpa}
                  </p>
                  <p className="text-xs text-[#A39E98] mt-1 font-medium">
                    Scale: 10.0
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
