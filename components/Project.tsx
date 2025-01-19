import { Project as ProjectType } from "@/types";

const Project = ({
  name,
  description,
  url,
  image,
  highlighted,
}: ProjectType) => {
  return (
    <a
      target="_blank"
      href={url}
      className={`${
        highlighted ? "border-4 border-primary" : ""
      } hover:scale-[101%] duration-200 relative pb-7 rounded-3xl bg-background-100 dark:bg-background-900 overflow-hidden`}
    >
      <div className="relative h-16 lg:h-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-background-100 dark:from-background-900 to-transparent z-10" />
        {image ? (
          <img
            src={image}
            alt={name}
            className="absolute top-0 left-0 w-full opacity-40"
            draggable={false}
          />
        ) : null}
      </div>
      <div className="relative flex flex-col gap-1.5 px-7">
        <div className="flex flex-row gap-2 items-center">
          <h2 className="font-bold text-xl text-background-950 dark:text-white">
            {name}
          </h2>
          {url ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="size-3.5 text-background-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          ) : null}
        </div>
        <p className="font-semibold text-lg text-background-500 truncate">
          {description}
        </p>
      </div>
    </a>
  );
};

export default Project;
