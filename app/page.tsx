import { Metadata } from "next";

export const metadata: Metadata = {
  title: "lewwiss - software engineer",
}

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen p-10">
      <main className="flex flex-col gap-6 items-center justify-center">
        <div className="flex flex-row gap-2 items-center font-mono font-medium">
          <a href="" className="text-blue-500 underline underline-offset-4">
            lewwiss
          </a>
          <span>/</span>
          <a href="https://github.com/Lewwiss" target="_blank" className="text-blue-500 underline underline-offset-4">
            github
          </a>
          <span>/</span>
          <a href="https://www.linkedin.com/in/lewiswinthrop" target="_blank" className="text-blue-500 underline underline-offset-4">
            linkedin
          </a>
          <span>/</span>
          <a href="http://gitlab.com/lewwiss" target="_blank" className="text-blue-500 underline underline-offset-4">
            gitlab
          </a>
        </div>
        <p className="font-mono font-medium">
          software engineer{" "}
          <a href="https://shockbyte.com" target="_blank" className="text-blue-500 underline underline-offset-4">
            @shockbyte
          </a>
        </p>
      </main>
    </div>
  );
}
