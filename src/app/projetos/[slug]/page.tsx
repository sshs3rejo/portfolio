import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectMedia } from "@/components/project-media";
import { profile, projects } from "@/data/profile";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projetos/${project.slug}` },
    openGraph: {
      title: project.title,
      description: project.summary,
      url: `/projetos/${project.slug}`,
      images: project.cover
        ? [
            {
              url: project.cover,
              width: 1280,
              height: 720,
              alt: project.title,
            },
          ]
        : ["/og.png"],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  const index = projects.findIndex((item) => item.slug === slug);

  return (
    <>
      <header className="border-b border-[#30363D]">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <Link
            href="/"
            className="font-mono text-sm text-neutral-200 transition hover:text-accent"
          >
            <span className="text-accent">←</span> felipe
            <span className="text-neutral-500">.</span>serejo
          </Link>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-500 transition hover:text-neutral-200"
          >
            github ↗
          </a>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-12">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-600">
          projeto {String(index + 1).padStart(2, "0")} /{" "}
          {String(projects.length).padStart(2, "0")} · {project.year} ·{" "}
          {project.status}
        </p>
        <h1 className="mt-3 font-mono text-4xl tracking-tight text-neutral-100 sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-neutral-400">
          {project.summary}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded border border-[#30363D] px-2 py-1 font-mono text-[10px] text-neutral-500"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-2.5">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-accent/50 bg-accent/10 px-4 py-2 font-mono text-xs text-accent transition hover:bg-accent/20"
            >
              {project.demoLabel ?? "ver demo"} ↗
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#30363D] bg-[#161B22] px-4 py-2 font-mono text-xs text-neutral-300 transition hover:border-accent/50"
            >
              código ↗
            </a>
          )}
        </div>

        {!project.demo && !project.repo && (
          <p className="mt-4 font-mono text-[11px] text-neutral-500">
            projeto de cliente · código não público
          </p>
        )}

        <div className="mt-10">
          <ProjectMedia project={project} index={index} large />
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-[160px_1fr]">
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-600">
            contexto
          </div>
          <p className="max-w-2xl text-[15px] leading-relaxed text-neutral-300">
            {project.context}
          </p>

          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-600">
            solução
          </div>
          <p className="max-w-2xl text-[15px] leading-relaxed text-neutral-300">
            {project.solution}
          </p>

          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-600">
            destaques
          </div>
          <ul className="max-w-2xl space-y-2">
            {project.highlights.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-[15px] leading-relaxed text-neutral-300"
              >
                <span className="font-mono text-accent">+</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-14 border-t border-[#30363D] pt-6">
          <Link
            href="/#projetos"
            className="font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-500 transition hover:text-neutral-200"
          >
            ← todos os projetos
          </Link>
        </div>
      </main>
    </>
  );
}
