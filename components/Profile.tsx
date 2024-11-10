import { config } from "@/config";
import Activity from "./Activity";

const Profile = () => {
  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 py-10">
      <a
        href={`https://github.com/${config.username}`}
        target="_blank"
        className="order-2 lg:order-1 bg-background-100 dark:bg-background-900 p-4 rounded-2xl"
      >
        <Activity period="month" />
      </a>
      <div className="order-1 lg:order-1 flex flex-col gap-4">
        <div className="flex flex-row flex-wrap gap-6 items-center">
          <img
            src="https://avatars.githubusercontent.com/u/46723732"
            alt={config.name}
            className="size-14 rounded-full border-[3px] border-background-200 dark:border-background-900"
            draggable={false}
          />
          <h1 className="font-bold text-background-950 dark:text-white text-2xl">{config.name}</h1>
          <div className="flex flex-row gap-3 items-center text-background-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M3 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5H15v-18a.75.75 0 0 0 0-1.5H3ZM6.75 19.5v-2.25a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h.75a.75.75 0 0 1 0 1.5h-.75A.75.75 0 0 1 6 6.75ZM6.75 9a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM6 12.75a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM10.5 6a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75Zm-.75 3.75A.75.75 0 0 1 10.5 9h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM10.5 12a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM16.5 6.75v15h5.25a.75.75 0 0 0 0-1.5H21v-12a.75.75 0 0 0 0-1.5h-4.5Zm1.5 4.5a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Zm.75 2.25a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75v-.008a.75.75 0 0 0-.75-.75h-.008ZM18 17.25a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z"
                clipRule="evenodd"
              />
            </svg>
            <p className="font-semibold text-lg">
              {config.job}
              {' '}
              <span
                className="text-background-950 dark:text-white"
              >
                @{config.company}
              </span>
            </p>
          </div>
        </div>
        <div className="flex flex-row flex-wrap gap-y-1.5 gap-x-3.5 font-semibold text-lg text-background-500">
          {config.links?.map((link, index) => (
            <div key={index} className="flex flex-row gap-3.5">
              {index !== 0 ? <span>/</span> : null}
              <a href={link.url} target="_blank" className="hover:text-background-950 dark:hover:text-white duration-200">
                {link.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
