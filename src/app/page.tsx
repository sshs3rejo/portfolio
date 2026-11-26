import Image from "next/image";
import Link from "next/link";
import { AnimatePage } from "@/components/animate-page";
import { ProjectMedia } from "@/components/project-media";
import { profile, projects } from "@/data/profile";

function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-neutral-500">
      <span className="text-accent">{index}</span>
      <span>{title}</span>
      <span className="h-px flex-1 bg-[#30363D]" />
    </div>
  );
}

function SectionHeading({
  index,
  label,
  title,
}: {
  index: string;
  label: string;
  title: string;
}) {
  return (
    <div>
      <SectionLabel index={index} title={label} />
      <h2 className="mt-3 font-mono text-2xl tracking-tight text-neutral-100 sm:text-3xl">
        {title}
      </h2>
    </div>
  );
}

const socials = [
  {
    label: "GitHub",
    handle: "@sshs3rejo",
    href: profile.links.github,
    icon: "github",
  },
  {
    label: "LinkedIn",
    handle: "in/felipe-serejo",
    href: profile.links.linkedin,
    icon: "linkedin",
  },
  {
    label: "Instagram",
    handle: "@sshs3rejo",
    href: profile.links.instagram,
    icon: "instagram",
  },
  {
    label: "E-mail",
    handle: "felipeserejodev",
    href: profile.links.email,
    icon: "email",
  },
];

const stack = [
  ["TypeScript", "typescript"],
  ["Next.js", "nextjs"],
  ["React", "react"],
  ["Laravel", "laravel"],
  ["PHP", "php"],
  ["C#", "csharp"],
  [".NET", "dot-net"],
  ["PostgreSQL", "postgresql"],
  ["MySQL", "mysql"],
  ["Docker", "docker"],
  ["Linux", "linux"],
  ["Git", "git"],
];

export default function Home() {
  const featured = projects.filter((project) => project.featured);
  const others = projects.filter((project) => !project.featured);

  return (
    <>
      <AnimatePage />

      <main className="mx-auto w-full max-w-5xl flex-1 px-6 pt-10">
        <section className="grid gap-10 py-14 lg:grid-cols-[1.3fr_0.7fr] lg:items-center lg:py-20">
          <div>
            <p data-hero className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
              {"// "}
              {profile.status}
            </p>
            <h1 className="mt-4 font-mono text-4xl tracking-tight text-neutral-100 sm:text-5xl lg:text-6xl">
              {profile.name}
              <span className="text-accent">.</span>
            </h1>
            <p data-hero className="mt-3 font-mono text-sm text-neutral-400">
              {profile.headline}
            </p>
            <p data-hero className="mt-6 max-w-xl text-[15px] leading-relaxed text-neutral-300">
              Desenvolvedor web em formação em Caxias–MA. Construo sistemas de
              ponta a ponta — do modelo de dados à interface — com{" "}
              <span className="text-neutral-100">TypeScript</span>,{" "}
              <span className="text-neutral-100">Next.js</span> e{" "}
              <span className="text-neutral-100">Laravel</span>.
            </p>
            <p data-hero className="mt-3 max-w-xl text-[15px] leading-relaxed text-neutral-400">
              Atuo como programador em banco de dados na{" "}
              <span className="text-neutral-200">
                Fábrica de Software da UniFacema
              </span>{" "}
              e desenvolvo sistemas no setor de TI da{" "}
              <span className="text-neutral-200">SAAE Caxias</span>. Gosto de
              entender o processo antes de escolher a ferramenta.
            </p>

            <div data-hero className="mt-7 flex flex-wrap items-center gap-4">
              <a
                href="#projetos"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 font-mono text-xs text-[#04121f] transition hover:bg-[#7bb8ff]"
              >
                ver projetos <span>↓</span>
              </a>
              <a
                href="#links"
                className="font-mono text-[11px] uppercase tracking-[0.16em] text-neutral-500 transition hover:text-neutral-200"
              >
                links e contato
              </a>
            </div>

            <dl data-hero className="mt-8 grid grid-cols-2 gap-4 border-t border-[#30363D] pt-6 sm:grid-cols-4">
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-600">
                  local
                </dt>
                <dd className="mt-1 font-mono text-xs text-neutral-300">
                  Caxias – MA
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-600">
                  formação
                </dt>
                <dd className="mt-1 font-mono text-xs text-neutral-300">
                  {profile.education.short}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-600">
                  fábrica
                </dt>
                <dd className="mt-1 font-mono text-xs text-neutral-300">
                  Banco de dados
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-600">
                  saae
                </dt>
                <dd className="mt-1 font-mono text-xs text-neutral-300">
                  Sistemas · TI
                </dd>
              </div>
            </dl>
          </div>

          <div className="order-first flex flex-col items-center gap-3 lg:order-last">
            <div data-avatar-float className="rounded-full bg-gradient-to-br from-accent/60 via-transparent to-transparent p-[2px]">
              <Image
                src="/avatar.jpg"
                alt="Felipe Serejo"
                width={900}
                height={900}
                sizes="(min-width: 1024px) 224px, (min-width: 640px) 192px, 160px"
                priority
                fetchPriority="high"
                className="h-40 w-40 rounded-full border border-[#0D1117] object-cover sm:h-48 sm:w-48 lg:h-56 lg:w-56"
              />
            </div>
            <span className="rounded-full border border-[#30363D] bg-[#161B22] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-400">
              {profile.location}
            </span>
          </div>
        </section>

        <section
          data-reveal
          id="links"
          className="scroll-mt-24 border-y border-[#30363D] py-10"
        >
          <SectionHeading
            index="00"
            label="links"
            title="Onde me encontrar"
          />
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {socials.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noreferrer"
                className="group flex items-center gap-3 rounded-2xl border border-[#30363D] bg-[#161B22] p-5 transition hover:-translate-y-0.5 hover:border-accent/50"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#30363D] bg-[#0D1117]">
                  <Image
                    src={`/icons/${link.icon}.svg`}
                    alt=""
                    width={18}
                    height={18}
                    unoptimized
                  />
                </span>
                <span className="min-w-0">
                  <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-500">
                    {link.label}
                  </span>
                  <span className="block truncate font-mono text-xs text-neutral-200">
                    {link.handle}
                  </span>
                </span>
                <span className="ml-auto text-neutral-600 transition group-hover:text-accent">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </section>

        <section data-reveal className="border-b border-[#30363D] py-12">
          <SectionHeading
            index="01"
            label="stack"
            title="Ferramentas do dia a dia"
          />
          <ul className="mt-6 grid grid-cols-4 gap-2.5 sm:grid-cols-6">
            {stack.map(([name, file]) => (
              <li
                key={file}
                className="flex flex-col items-center gap-2 rounded-lg border border-[#30363D] bg-[#161B22] px-2 py-3"
              >
                <Image
                  src={`/stack/${file}.svg`}
                  alt={name}
                  width={28}
                  height={28}
                  unoptimized
                  className="h-7 w-7 object-contain"
                />
                <span className="font-mono text-[10px] text-neutral-400">
                  {name}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section
          data-reveal
          id="projetos"
          className="scroll-mt-24 border-b border-[#30363D] py-14"
        >
          <SectionHeading
            index="02"
            label="projetos"
            title="Projetos em destaque"
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((project) => {
              const index = projects.findIndex(
                (item) => item.slug === project.slug
              );
              return (
                <Link
                  key={project.slug}
                  href={`/projetos/${project.slug}`}
                  className="group overflow-hidden rounded-2xl border border-[#30363D] bg-[#161B22] transition hover:-translate-y-0.5 hover:border-accent/50"
                >
                  <ProjectMedia project={project} index={index} />
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-2">
                      <span className="rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.14em] text-accent">
                        {project.status}
                      </span>
                      <span className="font-mono text-[10px] text-neutral-600">
                        {project.year}
                      </span>
                    </div>
                    <h2 className="mt-3 font-mono text-sm text-neutral-100">
                      {project.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                      {project.summary}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded border border-[#30363D] px-1.5 py-0.5 font-mono text-[10px] text-neutral-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="mt-4 font-mono text-[11px] text-neutral-500 transition group-hover:text-accent">
                      ver caso ↗
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        <section
          data-reveal
          id="outros"
          className="scroll-mt-24 border-b border-[#30363D] py-14"
        >
          <SectionHeading index="03" label="outros" title="Outros projetos" />
          <div className="mt-2 divide-y divide-[#30363D] border-y border-[#30363D]">
            {others.map((project, index) => (
              <div
                key={project.slug}
                className="grid gap-3 py-6 md:grid-cols-[40px_1fr_auto] md:items-start"
              >
                <span className="font-mono text-xs text-neutral-600">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-mono text-sm text-neutral-100">
                      {project.title}
                    </h3>
                    <span className="rounded border border-[#30363D] px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.14em] text-neutral-500">
                      {project.status}
                    </span>
                  </div>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-400">
                    {project.summary}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded border border-[#30363D] px-1.5 py-0.5 font-mono text-[10px] text-neutral-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  href={`/projetos/${project.slug}`}
                  className="font-mono text-[11px] text-neutral-500 transition hover:text-accent"
                >
                  ver caso ↗
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section
          data-reveal
          id="experiencia"
          className="scroll-mt-24 border-b border-[#30363D] py-14"
        >
          <SectionHeading
            index="04"
            label="experiência"
            title="Onde estou agora"
          />
          <div className="mt-6 divide-y divide-[#30363D] border-y border-[#30363D]">
            {profile.experience.map((item) => (
              <div
                key={item.org}
                className="grid gap-2 py-6 md:grid-cols-[160px_1fr] md:gap-6"
              >
                <p className="font-mono text-[11px] text-neutral-600">
                  {item.period}
                </p>
                <div>
                  <h3 className="font-mono text-sm text-neutral-100">
                    {item.org}
                  </h3>
                  <p className="mt-1 font-mono text-[11px] text-accent">
                    {item.role}
                  </p>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 font-mono text-[11px] text-neutral-500">
            {profile.education.course} · {profile.education.school} ·{" "}
            {profile.education.period}
          </p>
        </section>

        <section data-reveal className="py-14">
          <SectionHeading index="05" label="contato" title="Vamos conversar" />
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-neutral-400">
            Aberto a estágio, júnior e projetos freelance. Se você tem um
            processo manual que pode virar software, me chama.
          </p>
          <a
            href={profile.links.email}
            className="mt-4 inline-block break-all font-mono text-lg text-accent transition hover:text-[#7bb8ff] sm:text-xl"
          >
            {profile.email}
          </a>
          <div className="mt-8 flex flex-wrap gap-5 font-mono text-[11px] uppercase tracking-[0.16em] text-neutral-500">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-neutral-200"
            >
              GitHub
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-neutral-200"
            >
              LinkedIn
            </a>
            <a
              href={profile.links.instagram}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-neutral-200"
            >
              Instagram
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#30363D]">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-8 font-mono text-[10px] text-neutral-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© {profile.fullName}</p>
          <p>feito com Next.js e Tailwind</p>
        </div>
      </footer>
    </>
  );
}
