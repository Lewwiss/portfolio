const About = () => {
    return (
        <div>
            <div className="pb-3">
                <p className="text-white font-semibold text-xl">Profile / About Me</p>
            </div>
            <div>
                <p className="text-sm leading-8 pt-2.5 text-slate-400">
                Hi I'm Lewis and I'm a developer, I enjoy learning new languages and technologies to further my knowledge in the software industry.
                </p>
                <p className="text-sm leading-8 pt-2.5 text-slate-400">
                My strengths are mainly in web development with front end being my strong point, working with modern frameworks such as React and Next. I am also efficient in some back end technologies such as Node (JavaScript).
                </p>
                <hr className="border-t border-slate-700 mt-8"/>
                <p className="text-sm leading-8 pt-8 text-slate-400">
                    I'm currently looking for an opportunity to work in a company that will help me progress into a career in software development.
                </p>
            </div>
        </div>
    );
};

export default About;