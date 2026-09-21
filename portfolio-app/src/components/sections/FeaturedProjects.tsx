import { projects } from "@/data/projects";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ProjectCard from "@/components/projects/ProjectCard";

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="section-shell scroll-mt-20 py-28 sm:py-36 border-b border-[#E0D9D1]"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        {/* Section Header */}
        <AnimatedSection className="mb-14">
          <div className="flex items-center justify-between gap-4 border-b border-[#E0D9D1] pb-4">
            <div className="flex items-center gap-3">
              <span className="inline-block w-2 h-2 rounded-full bg-[#1A1A1A]" />
              <p className="text-[10px] font-medium tracking-[0.22em] text-[#6B6560] uppercase">
                04 / SELECTED WORK
              </p>
            </div>
            <p className="text-[10px] font-medium tracking-[0.22em] text-[#A39E98] uppercase">
              ENGINEERED &amp; DEPLOYED
            </p>
          </div>
        </AnimatedSection>

        {/* Large Editorial Heading */}
        <AnimatedSection delay={0.05} className="mb-16">
          <h2
            id="projects-heading"
            className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-[-0.04em] uppercase text-[#1A1A1A] leading-[1.05]"
          >
            SELECTED
            <span className="block text-outline font-black">PROJECTS.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#6B6560] max-w-2xl font-normal leading-relaxed">
            Systems selected for technical depth, model architecture, and real problem statements.
          </p>
        </AnimatedSection>

        {/* Clean, balanced 2-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              featured={index === 0}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
