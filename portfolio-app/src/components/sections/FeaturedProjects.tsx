import { projects } from "@/data/projects";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ProjectCard from "@/components/projects/ProjectCard";
import SectionHeading from "@/components/ui/SectionHeading";

export default function FeaturedProjects() {
  const [featured, ...rest] = projects;

  return (
    <section
      id="projects"
      className="section-shell scroll-mt-24 py-24 sm:py-32"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection className="mb-8">
          <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
            <p className="text-[10px] font-medium tracking-[0.22em] text-zinc-400 uppercase">
              04 / FEATURED PROJECTS
            </p>
            <p className="text-[10px] font-medium tracking-[0.22em] text-zinc-500 uppercase">
              SHIPPED SYSTEMS · REAL PROBLEM STATEMENTS
            </p>
          </div>
        </AnimatedSection>

        <SectionHeading
          id="projects-heading"
          title="Featured Projects"
          subtitle="Work selected for technical depth, shipped systems, and real problem statements."
        />

        {featured && (
          <div className="mb-6">
            <ProjectCard project={featured} featured index={0} />
          </div>
        )}

        <div className="grid gap-6 md:grid-cols-2">
          {rest.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
