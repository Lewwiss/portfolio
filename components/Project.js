const Project = ({title, desc, tags, link}) => {
    return (
        <a href={link} target="_blank" className="group">
            <div className="flex flex-row cursor-pointer bg-slate-800 border-slate-700 border duration-200 group-hover:translate-x-2">
                <div className="p-9">
                    <div className="flex flex-row space-x-2 items-center">
                        <svg viewBox="0 0 16 16" class="h-4 w-4 mr-1" fill="#64748b">
                            <path fillRule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
                        </svg>
                        <p className="text-md font-bold text-white">{title}</p>
                    </div>
                    <p className="text-sm leading-8 pt-3.5 text-slate-400">{desc}</p>
                    <div className="flex flex-row space-x-3 pt-5">
                        {tags.map(element => {
                            return <p key={element} className="text-white text-xs font-semibold py-1.5 px-3.5 rounded-full bg-slate-700 drop-shadow-lg">{element}</p>
                        })}
                    </div>
                </div>
            </div>
        </a>
    );
};

export default Project;