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
        highlighted ? "border-[3px] border-primary" : ""
      } hover:scale-[102%] duration-200 relative pb-7 rounded-3xl bg-background-900 overflow-hidden`}
    >
      <div className="relative h-16 lg:h-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-background-900 to-transparent z-10" />
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
        <h2 className="font-bold text-xl text-white">{name}</h2>
        <p className="font-semibold text-lg text-background-500 truncate">
          {description}
        </p>
      </div>
    </a>
  );
};

export default Project;
