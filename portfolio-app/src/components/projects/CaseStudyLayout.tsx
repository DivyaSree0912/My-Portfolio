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
    <div className="space-y-4">
      {Object.entries(technology).map(([group, items]) => (
        <div key={group}>
          <p className="mb-2 text-sm font-medium text-zinc-400">{group}</p>
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
    <article className="px-6 pt-28 pb-24">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Back to projects
        </Link>

        <header className="mt-8 border-b border-white/10 pb-8">
          {project.status && (
            <p className="text-sm text-zinc-500">{project.status}</p>
          )}
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {project.name}
          </h1>
          <p className="mt-4 text-lg text-zinc-400">{project.oneLiner}</p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li key={tag}>
                <Tag label={tag} />
              </li>
            ))}
          </ul>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <ArrowUpRight size={16} aria-hidden="true" />
            View on GitHub
          </a>
        </header>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-white">Problem</h2>
          <p className="mt-3 leading-relaxed text-zinc-300">{project.problem}</p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-white">Solution</h2>
          <p className="mt-3 leading-relaxed text-zinc-300">{project.solution}</p>
        </section>

        {project.contributions.length > 0 && (
          <section className="mt-10">
            <h2 className="text-xl font-semibold text-white">My Contribution</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-300">
              {project.contributions.map((item) => (
                <li key={item} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-white">Technology</h2>
          <div className="mt-4">
            <TechList technology={project.technology} />
          </div>
        </section>

        {project.architecture && project.architecture.length > 0 && (
          <section className="mt-10">
            <h2 className="text-xl font-semibold text-white">Architecture</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-300">
              {project.architecture.map((item) => (
                <li key={item} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        )}

        {project.dataset && project.dataset.length > 0 && (
          <section className="mt-10">
            <h2 className="text-xl font-semibold text-white">Dataset</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-300">
              {project.dataset.map((item) => (
                <li key={item} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        )}

        {project.implementationDetails.length > 0 && (
          <section className="mt-10">
            <h2 className="text-xl font-semibold text-white">
              Key Implementation Details
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-300">
              {project.implementationDetails.map((item) => (
                <li key={item} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        )}

        {(project.results.length > 0 || project.metricsTable) && (
          <section className="mt-10">
            <h2 className="text-xl font-semibold text-white">Results / Evidence</h2>
            {project.metricsTable && (
              <div className="mt-4 overflow-x-auto">
                <table className="w-full min-w-[560px] border-collapse text-left text-sm">
                  <caption className="sr-only">
                    Classification metrics for {project.name}
                  </caption>
                  <thead>
                    <tr className="border-b border-white/10 text-zinc-400">
                      {project.metricsTable.headers.map((header) => (
                        <th key={header} scope="col" className="px-3 py-2 font-medium">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {project.metricsTable.rows.map((row) => (
                      <tr key={row.join("-")} className="border-b border-white/5 text-zinc-300">
                        {row.map((cell, cellIndex) => (
                          <td key={`${row[0]}-${cellIndex}`} className="px-3 py-2">
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
              <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-300">
                {project.results.map((item) => (
                  <li key={item} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </section>
        )}

        {project.notes && project.notes.length > 0 && (
          <aside className="mt-10 rounded-xl border border-white/10 bg-[#111113] p-5 text-sm leading-relaxed text-zinc-400">
            {project.notes.map((note) => (
              <p key={note}>{note}</p>
            ))}
          </aside>
        )}

        <nav
          className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between"
          aria-label="Project pagination"
        >
          {previous ? (
            <Link
              href={`/projects/${previous.slug}`}
              className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <ArrowLeft size={16} aria-hidden="true" />
              {previous.name}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={`/projects/${next.slug}`}
              className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 sm:ml-auto"
            >
              {next.name}
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </div>
    </article>
  );
}
