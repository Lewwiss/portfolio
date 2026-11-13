import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "lewwiss - software engineer",
}

const projects = [
  {
    name: "autoafk.com",
    href: "https://autoafk.com",
    icon: "/projects/autoafk.png",
    description: "AFK your Minecraft accounts 24/7",
  },
  {
    name: "wrensim.com",
    href: "https://wrensim.com",
    icon: "/projects/wrensim.png",
    description: "Travel eSIMs in 2 minutes",
  },
  {
    name: "wraith.email",
    href: "https://wraith.email",
    icon: "/projects/wraith.png",
    description: "Free temporary email that vanishes."
  }
];

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
          {projects.map((project, i) => (
            <a
              key={project.name}
              href={project.href}
              target="_blank"
              style={{ animationDelay: `${340 + i * 80}ms` }}
              className="flex items-center gap-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-200 hover:-translate-y-0.5 px-4 py-3 font-mono animate-fade-in-up"
            >
              <Image
                src={project.icon}
                alt=""
                width={32}
                height={32}
                draggable={false}
                className="rounded-sm select-none"
              />
              <div className="flex flex-col gap-1 truncate">
                <span className="font-semibold text-sm">{project.name}</span>
                <span className="truncate text-xs text-foreground/50">{project.description}</span>
              </div>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
