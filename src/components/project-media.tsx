import Image from "next/image";
import { ProjectCover } from "@/components/project-cover";
import type { Project } from "@/data/profile";

export function ProjectMedia({
  project,
  index,
  large = false,
}: {
  project: Project;
  index: number;
  large?: boolean;
}) {
  if (!project.cover) {
    return <ProjectCover project={project} index={index} large={large} />;
  }

  return (
    <div
      className={`relative aspect-[16/9] overflow-hidden border-[#30363D] bg-[#161B22] ${
        large ? "rounded-xl border" : "border-b"
      }`}
    >
      <Image
        src={project.cover}
        alt={`Interface do projeto ${project.title}`}
        width={1280}
        height={720}
        sizes={
          large
            ? "(min-width: 1024px) 1024px, 100vw"
            : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        }
        className="h-full w-full object-cover"
      />
    </div>
  );
}
