import { Metadata } from "next";
import Image from "next/image";
import { projects, ProjectStatus } from "./projects";

export const metadata: Metadata = {
  title: "lewwiss - software engineer",
}

const statusStyles: Record<ProjectStatus, string> = {
  active: "bg-emerald-500/10 text-emerald-400",
  listed: "bg-amber-500/10 text-amber-400",
  sold: "bg-blue-500/10 text-blue-400",
  building: "bg-neutral-500/10 text-neutral-400",
  inactive: "bg-neutral-500/10 text-neutral-400",
};

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen p-10">
      <main className="flex flex-col gap-6 items-center justify-center w-full">
        <div className="flex flex-row gap-2 items-center font-mono font-medium">
          <a href="" className="text-blue-500 underline underline-offset-4 transition-colors hover:text-blue-400 animate-fade-in-up [animation-delay:0ms]">
            lewwiss
          </a>
          <span className="animate-fade-in-up [animation-delay:0ms]">/</span>
          <a href="https://github.com/Lewwiss" target="_blank" className="text-blue-500 underline underline-offset-4 transition-colors hover:text-blue-400 animate-fade-in-up [animation-delay:60ms]">
            github
          </a>
          <span className="animate-fade-in-up [animation-delay:60ms]">/</span>
          <a href="https://www.linkedin.com/in/lewiswinthrop" target="_blank" className="text-blue-500 underline underline-offset-4 transition-colors hover:text-blue-400 animate-fade-in-up [animation-delay:120ms]">
            linkedin
          </a>
          <span className="animate-fade-in-up [animation-delay:120ms]">/</span>
          <a href="http://gitlab.com/lewwiss" target="_blank" className="text-blue-500 underline underline-offset-4 transition-colors hover:text-blue-400 animate-fade-in-up [animation-delay:180ms]">
            gitlab
          </a>
        </div>
        <p className="font-mono font-medium animate-fade-in-up [animation-delay:260ms]">
          software engineer{" "}
          <a href="https://shockbyte.com" target="_blank" className="text-blue-500 underline underline-offset-4 transition-colors hover:text-blue-400">
            @shockbyte
          </a>
        </p>
        <div className="w-full max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {projects.map((project, i) => {
            const Tag = project.href ? "a" : "div";
            return (
              <Tag
                key={project.name}
                href={project.href ?? undefined}
                target={project.href ? "_blank" : undefined}
                style={{ animationDelay: `${340 + i * 80}ms` }}
                className={`flex items-center gap-3 rounded-lg border border-neutral-900/50 bg-neutral-950 transition-all duration-200 px-4 py-3 font-mono animate-fade-in-up ${
                  project.href ? "hover:bg-neutral-900 hover:-translate-y-0.5" : ""
                }`}
              >
                {project.icon ? (
                  <Image
                    src={project.icon}
                    alt={project.name}
                    width={32}
                    height={32}
                    draggable={false}
                    className="rounded-sm select-none"
                  />
                ) : (
                  <div className="w-8 h-8 shrink-0 rounded-sm bg-neutral-900" />
                )}
                <div className="flex flex-col gap-1 truncate">
                  <span className="font-semibold text-sm">{project.name}</span>
                  <span className="truncate text-xs text-neutral-500">{project.description}</span>
                </div>
                <span
                  className={`ml-auto shrink-0 rounded-md px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide ${statusStyles[project.status]}`}
                >
                  {project.status}
                </span>
              </Tag>
            );
          })}
        </div>
      </main>
    </div>
  );
}
