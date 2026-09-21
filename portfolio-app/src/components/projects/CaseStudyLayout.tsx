import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Tag from "@/components/ui/Tag";
import type { Project } from "@/types";
import { projects } from "@/data/projects";

function TechList({ technology }: { technology: Project["technology"] }) {
  if (Array.isArray(technology)) {
    return (
      <ul className="flex flex-wrap gap-2">
        {technology.map((item) => (
          <li key={item}>
            <Tag label={item} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="space-y-6">
      {Object.entries(technology).map(([group, items]) => (
        <div key={group}>
          <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-[#A39E98] uppercase">
            {group}
          </p>
          <ul className="flex flex-wrap gap-2">
            {items.map((item) => (
              <li key={item}>
                <Tag label={item} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default function CaseStudyLayout({ project }: { project: Project }) {
  const index = projects.findIndex((item) => item.slug === project.slug);
  const previous = index > 0 ? projects[index - 1] : undefined;
  const next = index >= 0 && index < projects.length - 1 ? projects[index + 1] : undefined;

  return (
    <article className="px-6 pt-32 pb-28 min-h-screen bg-[#F5F0EB] text-[#1A1A1A]">
      <div className="mx-auto max-w-4xl">
        {/* Back Link */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-[#6B6560] uppercase transition-colors hover:text-[#1A1A1A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A1A1A]"
        >
          <ArrowLeft size={15} aria-hidden="true" />
          <span>Back to all projects</span>
        </Link>

        {/* Case Study Header */}
        <header className="mt-8 border-b border-[#E0D9D1] pb-12">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#A39E98] uppercase">
              CASE STUDY // 0{index + 1}
            </span>
            {project.status && (
              <span className="text-xs font-semibold tracking-wider text-[#6B6560] uppercase">
                {project.status}
              </span>
            )}
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-[-0.04em] uppercase text-[#1A1A1A]">
            {project.name}
          </h1>

          <p className="mt-6 text-xl text-[#6B6560] font-normal leading-relaxed">
            {project.oneLiner}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>

          <div className="mt-8">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#1A1A1A] text-[#F5F0EB] px-6 py-3 text-xs font-semibold tracking-[0.1em] uppercase hover:bg-[#333] transition-all"
            >
              <span>View on GitHub</span>
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
        </header>

        {/* Problem Section */}
        <section className="mt-14 border-b border-[#E0D9D1] pb-12">
          <h2 className="text-xs font-semibold tracking-[0.2em] text-[#A39E98] uppercase mb-4">
            01 / PROBLEM STATEMENT
          </h2>
          <p className="text-lg leading-relaxed text-[#1A1A1A] font-normal">
            {project.problem}
          </p>
        </section>

        {/* Solution Section */}
        <section className="mt-12 border-b border-[#E0D9D1] pb-12">
          <h2 className="text-xs font-semibold tracking-[0.2em] text-[#A39E98] uppercase mb-4">
            02 / PROPOSED ARCHITECTURE &amp; SOLUTION
          </h2>
          <p className="text-lg leading-relaxed text-[#1A1A1A] font-normal">
            {project.solution}
          </p>
        </section>

        {/* My Contribution Section */}
        {project.contributions.length > 0 && (
          <section className="mt-12 border-b border-[#E0D9D1] pb-12">
            <h2 className="text-xs font-semibold tracking-[0.2em] text-[#A39E98] uppercase mb-4">
              03 / TECHNICAL CONTRIBUTIONS
            </h2>
            <ul className="space-y-3 pl-2 text-base text-[#1A1A1A]">
              {project.contributions.map((item) => (
                <li key={item} className="flex items-start gap-3 leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1A1A1A]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Technology Stack */}
        <section className="mt-12 border-b border-[#E0D9D1] pb-12">
          <h2 className="text-xs font-semibold tracking-[0.2em] text-[#A39E98] uppercase mb-6">
            04 / TECHNOLOGY &amp; TOOLS
          </h2>
          <TechList technology={project.technology} />
        </section>

        {/* Architecture Details (if present) */}
        {project.architecture && project.architecture.length > 0 && (
          <section className="mt-12 border-b border-[#E0D9D1] pb-12">
            <h2 className="text-xs font-semibold tracking-[0.2em] text-[#A39E98] uppercase mb-4">
              05 / MODEL ARCHITECTURE
            </h2>
            <ul className="space-y-3 pl-2 text-base text-[#1A1A1A]">
              {project.architecture.map((item) => (
                <li key={item} className="flex items-start gap-3 leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1A1A1A]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Dataset Details (if present) */}
        {project.dataset && project.dataset.length > 0 && (
          <section className="mt-12 border-b border-[#E0D9D1] pb-12">
            <h2 className="text-xs font-semibold tracking-[0.2em] text-[#A39E98] uppercase mb-4">
              06 / DATASET &amp; PARTITIONING
            </h2>
            <ul className="space-y-3 pl-2 text-base text-[#1A1A1A]">
              {project.dataset.map((item) => (
                <li key={item} className="flex items-start gap-3 leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1A1A1A]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Key Implementation Details */}
        {project.implementationDetails.length > 0 && (
          <section className="mt-12 border-b border-[#E0D9D1] pb-12">
            <h2 className="text-xs font-semibold tracking-[0.2em] text-[#A39E98] uppercase mb-4">
              07 / KEY IMPLEMENTATION DETAILS
            </h2>
            <ul className="space-y-3 pl-2 text-base text-[#1A1A1A]">
              {project.implementationDetails.map((item) => (
                <li key={item} className="flex items-start gap-3 leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1A1A1A]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Results & Evidence */}
        {(project.results.length > 0 || project.metricsTable) && (
          <section className="mt-12 border-b border-[#E0D9D1] pb-12">
            <h2 className="text-xs font-semibold tracking-[0.2em] text-[#A39E98] uppercase mb-6">
              08 / RESULTS &amp; REPO EVIDENCE
            </h2>

            {/* Metrics Table */}
            {project.metricsTable && (
              <div className="editorial-card rounded-[24px] p-6 border border-[#E0D9D1] bg-[#FAF7F4] mb-6 overflow-x-auto">
                <table className="w-full min-w-[520px] text-left text-sm">
                  <thead>
                    <tr className="border-b border-[#E0D9D1] text-[#6B6560]">
                      {project.metricsTable.headers.map((header) => (
                        <th key={header} scope="col" className="px-4 py-3 font-semibold text-xs tracking-wider uppercase">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {project.metricsTable.rows.map((row) => (
                      <tr key={row.join("-")} className="border-b border-[#E0D9D1]/60 text-[#1A1A1A]">
                        {row.map((cell, cellIndex) => (
                          <td key={`${row[0]}-${cellIndex}`} className="px-4 py-3 font-medium">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {project.results.length > 0 && (
              <ul className="space-y-3 pl-2 text-base text-[#1A1A1A]">
                {project.results.map((item) => (
                  <li key={item} className="flex items-start gap-3 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1A1A1A]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        )}

        {/* Notes (if any) */}
        {project.notes && project.notes.length > 0 && (
          <aside className="mt-10 rounded-[20px] border border-[#E0D9D1] bg-[#FAF7F4] p-6 text-xs text-[#6B6560] leading-relaxed">
            {project.notes.map((note) => (
              <p key={note}>{note}</p>
            ))}
          </aside>
        )}

        {/* Project Pagination */}
        <nav
          className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#E0D9D1] pt-8"
          aria-label="Project pagination"
        >
          {previous ? (
            <Link
              href={`/projects/${previous.slug}`}
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#6B6560] uppercase hover:text-[#1A1A1A] transition-colors"
            >
              <ArrowLeft size={14} aria-hidden="true" />
              <span>Previous: {previous.name}</span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={`/projects/${next.slug}`}
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#6B6560] uppercase hover:text-[#1A1A1A] transition-colors sm:ml-auto"
            >
              <span>Next: {next.name}</span>
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </div>
    </article>
  );
}
