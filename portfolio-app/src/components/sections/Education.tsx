import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Education() {
  return (
    <section
      id="education"
      className="section-shell scroll-mt-24 py-24 sm:py-32"
      aria-labelledby="education-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection className="mb-8">
          <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
            <p className="text-[10px] font-medium tracking-[0.22em] text-zinc-400 uppercase">
              03 / EDUCATION
            </p>
            <p className="text-[10px] font-medium tracking-[0.22em] text-zinc-500 uppercase">
              FOUNDATION · DISCIPLINE
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="premium-card relative overflow-hidden rounded-[30px] p-6 sm:p-8 lg:p-10">
            <div className="absolute inset-0 ambient-grid opacity-30" aria-hidden="true" />
            <div className="relative">
              <p className="text-[11px] font-medium tracking-[0.22em] text-blue-300 uppercase">
                Academic foundation
              </p>

              <h2
                id="education-heading"
                className="mt-4 text-3xl font-semibold tracking-[-0.07em] text-white sm:text-5xl"
              >
                COMPUTER SCIENCE,
                <span className="mt-1 block text-zinc-300">BUILT ON FUNDAMENTALS.</span>
              </h2>

              <div className="mt-8 grid gap-4 lg:grid-cols-[1.5fr_0.8fr] lg:items-end">
                <div>
                  <p className="text-[10px] font-medium tracking-[0.18em] text-zinc-500 uppercase">
                    University
                  </p>
                  <p className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white">
                    GITAM University
                  </p>

                  <div className="mt-6 space-y-2 text-base text-zinc-300 sm:text-lg">
                    <p>B.Tech — Computer Science &amp; Engineering</p>
                    <p>2024 — 2028</p>
                  </div>
                </div>

                <div className="rounded-[24px] border border-blue-400/20 bg-blue-500/5 p-4 sm:p-5">
                  <p className="text-[10px] font-medium tracking-[0.18em] text-zinc-400 uppercase">
                    Academic metric
                  </p>
                  <p className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white">
                    CGPA: 9.3 / 10
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
