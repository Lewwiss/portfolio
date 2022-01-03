const Project = ({title, desc, theme, tags, link}) => {
    return (
        <a href={link} target="_blank" className="group">
            <div className={`flex flex-row cursor-pointer border-2 duration-200 group-hover:translate-x-2 group-hover:border-blue-600`}>
                <div className="p-8">
                    <p className="text-md font-bold text-neutral-900">{title}</p>
                    <p className="text-sm leading-loose pt-2.5 text-neutral-500">{desc}</p>
                    <div className="flex flex-row space-x-3 pt-4">
                        {tags.map(element => {
                            return <p key={element} className={`text-white text-xs font-medium py-1.5 px-3.5 rounded-full bg-${theme}-600`}>{element}</p>
                        })}
                    </div>
                </div>
            </div>
        </a>
    );
};

export default Project;