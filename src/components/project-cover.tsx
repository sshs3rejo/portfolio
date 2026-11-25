import type { Project } from "@/data/profile";

export function ProjectCover({
  project,
  index,
  large = false,
}: {
  project: Project;
  index: number;
  large?: boolean;
}) {
  return (
    <div
      aria-hidden
      className={`relative overflow-hidden border-[#30363D] bg-[#161B22] ${
        large ? "aspect-[21/9] rounded-xl border" : "aspect-[16/9] border-b"
      }`}
    >
      <div className="grid-bg absolute inset-0 opacity-70" />
      <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_0%_0%,rgba(88,166,255,0.18),transparent_55%)]" />
      <div className="absolute left-4 top-4 flex gap-1.5">
        <span className="h-2 w-2 rounded-full bg-neutral-700" />
        <span className="h-2 w-2 rounded-full bg-neutral-700" />
        <span className="h-2 w-2 rounded-full bg-accent/70" />
      </div>
      <div className={`absolute inset-x-4 ${large ? "bottom-6" : "bottom-4"}`}>
        <p
          className={`font-mono text-accent/80 ${
            large ? "text-5xl sm:text-6xl" : "text-3xl"
          }`}
        >
          {String(index + 1).padStart(2, "0")}
        </p>
        <p className="mt-2 truncate font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-600">
          ~/projetos/{project.slug}
        </p>
      </div>
    </div>
  );
}
