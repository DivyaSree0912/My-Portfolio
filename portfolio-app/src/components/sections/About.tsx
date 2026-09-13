import AnimatedSection from "@/components/ui/AnimatedSection";

const capabilityBlocks = [
  {
    title: "SOFTWARE ENGINEERING",
    details: ["Node.js · React · Backend", "APIs · Databases"],
  },
  {
    title: "APPLIED AI",
    details: ["Deep Learning · EfficientNet", "Explainable AI · Medical Imaging"],
  },
  {
    title: "COMPUTER VISION",
    details: ["YOLOv8 · OpenCV", "Detection · Visual Intelligence"],
  },
  {
    title: "PROBLEM SOLVING",
    details: ["1st Place · GDGoC Hackathon", "SIH 2025 · 100+ LeetCode"],
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="section-shell scroll-mt-24 py-24 sm:py-32"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection className="mb-10">
          <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
            <p className="text-[10px] font-medium tracking-[0.22em] text-zinc-400 uppercase">
              02 / ABOUT
            </p>
            <p className="text-[10px] font-medium tracking-[0.22em] text-zinc-500 uppercase">
              SOFTWARE + INTELLIGENCE
            </p>
          </div>
        </AnimatedSection>

        <div className="grid gap-8 lg:grid-cols-[1.15fr_1.85fr] lg:items-start">
          <AnimatedSection delay={0.05}>
            <div className="premium-card rounded-[30px] p-6 sm:p-8">
              <p className="text-[11px] font-medium tracking-[0.22em] text-blue-300 uppercase">
                Snapshot
              </p>
              <h2
                id="about-heading"
                className="mt-4 text-2xl font-semibold tracking-[-0.06em] text-white sm:text-4xl"
              >
                I BUILD AT THE INTERSECTION OF
                <span className="mt-1 block text-zinc-300">SOFTWARE + INTELLIGENCE.</span>
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="premium-card rounded-[30px] p-6 sm:p-8">
              <p className="text-base leading-relaxed text-zinc-300 sm:text-lg">
                I&apos;m Divya Sree — a Computer Science undergraduate at GITAM
                University building at the intersection of software engineering and
                applied AI. My work spans explainable deep learning for medical
                imaging, AI-powered backend systems, and computer vision pipelines. I
                build across the stack: EfficientNet and YOLOv8 on the ML side,
                Node.js and React on the product side. I placed 1st at a GDGoC
                state-level hackathon, participated in SIH 2025, and have solved 100+
                problems on LeetCode. I focus on building systems that are practical,
                well-engineered, and backed by real evidence.
              </p>
            </div>
          </AnimatedSection>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {capabilityBlocks.map((block, index) => (
            <AnimatedSection key={block.title} delay={0.12 + index * 0.05}>
              <article className="premium-card h-full rounded-[26px] p-5 transition-transform duration-300 hover:-translate-y-0.5">
                <p className="text-[10px] font-medium tracking-[0.2em] text-zinc-500 uppercase">
                  {block.title}
                </p>
                <div className="mt-4 space-y-2">
                  {block.details.map((detail) => (
                    <p key={detail} className="text-sm text-zinc-300">
                      {detail}
                    </p>
                  ))}
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.28}>
          <div className="mt-8 rounded-[28px] border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <p className="text-lg font-medium leading-relaxed text-zinc-200 sm:text-xl">
              &ldquo;I don&apos;t build AI for the sake of AI.
              <span className="mt-1 block text-white">
                I build systems that solve real problems.&rdquo;
              </span>
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
