import { problemSolving } from "@/data/problemSolving";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function ProblemSolving() {
  return (
    <section
      id="problem-solving"
      className="section-shell scroll-mt-20 py-28 sm:py-36 border-b border-[#E0D9D1]"
      aria-labelledby="problem-solving-heading"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        {/* Section Header */}
        <AnimatedSection className="mb-14">
          <div className="flex items-center justify-between gap-4 border-b border-[#E0D9D1] pb-4">
            <div className="flex items-center gap-3">
              <span className="inline-block w-2 h-2 rounded-full bg-[#1A1A1A]" />
              <p className="text-[10px] font-medium tracking-[0.22em] text-[#6B6560] uppercase">
                08 / PROBLEM SOLVING
              </p>
            </div>
            <p className="text-[10px] font-medium tracking-[0.22em] text-[#A39E98] uppercase">
              ALGORITHMIC FOUNDATIONS
            </p>
          </div>
        </AnimatedSection>

        {/* Large Editorial Heading */}
        <AnimatedSection delay={0.05} className="mb-16">
          <h2
            id="problem-solving-heading"
            className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-[-0.04em] uppercase text-[#1A1A1A] leading-[1.05]"
          >
            PROBLEM SOLVING,
            <span className="block text-outline font-black">ALGORITHMIC RIGOR.</span>
          </h2>
        </AnimatedSection>

        {/* Editorial Highlight Card */}
        <AnimatedSection delay={0.1}>
          <article className="editorial-card rounded-[32px] p-8 sm:p-12 border border-[#E0D9D1] bg-[#FAF7F4] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-36 h-36 dot-grid opacity-25 pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Big metric */}
              <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-[#E0D9D1] pb-8 lg:pb-0 lg:pr-8">
                <p className="text-[10px] font-semibold tracking-[0.2em] text-[#A39E98] uppercase mb-2">
                  PLATFORM: {problemSolving.platform.toUpperCase()}
                </p>
                <div className="text-4xl sm:text-6xl font-black tracking-tight text-[#1A1A1A]">
                  100+
                </div>
                <p className="text-base sm:text-lg font-medium text-[#6B6560] mt-1">
                  Problems Solved
                </p>
                <p className="text-xs text-[#A39E98] mt-3 font-normal leading-relaxed">
                  Consistent competitive programming and data structure practice.
                </p>
              </div>

              {/* Right Column: Topics practiced */}
              <div className="lg:col-span-7">
                <p className="text-[10px] font-semibold tracking-[0.2em] text-[#A39E98] uppercase mb-4">
                  CORE TOPICS PRACTICED
                </p>
                <ul className="flex flex-wrap gap-2.5">
                  {problemSolving.topics.map((topic) => (
                    <li key={topic}>
                      <span className="inline-block rounded-full border border-[#E0D9D1] bg-[#F5F0EB] px-4 py-2 text-xs font-medium text-[#1A1A1A] tracking-wide hover:border-[#1A1A1A] transition-colors">
                        {topic}
                      </span>
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
