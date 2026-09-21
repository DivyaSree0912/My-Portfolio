import AnimatedSection from "@/components/ui/AnimatedSection";

const capabilityBlocks = [
  {
    number: "01",
    title: "SOFTWARE ENGINEERING",
    details: ["Node.js · React · Backend", "REST APIs · Databases · Full-Stack"],
  },
  {
    number: "02",
    title: "APPLIED AI",
    details: ["Deep Learning · EfficientNet", "Explainable AI · Medical Imaging"],
  },
  {
    number: "03",
    title: "COMPUTER VISION",
    details: ["YOLOv8 · OpenCV", "Object Detection · Video Processing"],
  },
  {
    number: "04",
    title: "PROBLEM SOLVING",
    details: ["1st Place · GDGoC Hackathon", "SIH 2026 · 100+ LeetCode"],
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="section-shell scroll-mt-20 py-28 sm:py-36 border-b border-[#E0D9D1]"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        {/* Section Header */}
        <AnimatedSection className="mb-14">
          <div className="flex items-center justify-between gap-4 border-b border-[#E0D9D1] pb-4">
            <div className="flex items-center gap-3">
              <span className="inline-block w-2 h-2 rounded-full bg-[#1A1A1A]" />
              <p className="text-[10px] font-medium tracking-[0.22em] text-[#6B6560] uppercase">
                02 / ABOUT
              </p>
            </div>
            <p className="text-[10px] font-medium tracking-[0.22em] text-[#A39E98] uppercase">
              PHILOSOPHY · BACKGROUND
            </p>
          </div>
        </AnimatedSection>

        {/* Large Editorial Headline */}
        <AnimatedSection delay={0.05} className="mb-16">
          <h2
            id="about-heading"
            className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-[-0.04em] uppercase text-[#1A1A1A] leading-[1.05]"
          >
            I BUILD AT THE
            <span className="block text-outline font-black">INTERSECTION OF</span>
            <span>SOFTWARE + INTELLIGENCE.</span>
          </h2>
        </AnimatedSection>

        {/* Asymmetric 2-Column Storytelling */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-20">
          <AnimatedSection delay={0.1} className="lg:col-span-7">
            <div className="space-y-6 text-lg sm:text-xl text-[#6B6560] leading-relaxed font-normal">
              <p>
                I&apos;m Divya Sree — a Computer Science undergraduate at GITAM
                University building at the intersection of software engineering and
                applied AI. My work spans explainable deep learning for medical
                imaging, AI-powered backend systems, and computer vision pipelines.
              </p>
              <p>
                I build across the stack: EfficientNet and YOLOv8 on the ML side,
                Node.js and React on the product side. I placed 1st at a GDGoC
                state-level hackathon, qualified for the 1st round of SIH 2026, and have solved 100+
                problems on LeetCode. I focus on building systems that are practical,
                well-engineered, and backed by real evidence.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15} className="lg:col-span-5">
            <div className="editorial-card rounded-[28px] p-8 sm:p-10 border border-[#E0D9D1] bg-[#FAF7F4] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 dot-grid opacity-30 pointer-events-none" />
              <p className="text-[10px] font-semibold tracking-[0.2em] text-[#A39E98] uppercase mb-4">
                GUIDING PRINCIPLE
              </p>
              <blockquote className="text-xl sm:text-2xl font-bold tracking-tight text-[#1A1A1A] leading-snug">
                &ldquo;I don&apos;t build AI for the sake of AI.
                <span className="block mt-2 text-[#6B6560] font-medium text-lg">
                  I build systems that solve real problems.&rdquo;
                </span>
              </blockquote>
            </div>
          </AnimatedSection>
        </div>

        {/* Four Restrained Capability Areas (No Progress Bars) */}
        <div>
          <AnimatedSection delay={0.2} className="mb-6">
            <p className="text-[10px] font-semibold tracking-[0.22em] text-[#A39E98] uppercase">
              CORE CAPABILITIES
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilityBlocks.map((block, index) => (
              <AnimatedSection key={block.title} delay={0.15 + index * 0.05}>
                <div className="editorial-card h-full rounded-[24px] p-6 border border-[#E0D9D1] bg-[#FAF7F4] transition-all duration-200 hover:-translate-y-1">
                  <span className="text-[10px] font-mono font-medium text-[#A39E98] tracking-widest block mb-4">
                    {block.number}
                  </span>
                  <h3 className="text-sm font-bold tracking-[0.1em] text-[#1A1A1A] uppercase mb-3">
                    {block.title}
                  </h3>
                  <div className="space-y-1.5 text-xs text-[#6B6560] leading-relaxed">
                    {block.details.map((detail) => (
                      <p key={detail}>{detail}</p>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
