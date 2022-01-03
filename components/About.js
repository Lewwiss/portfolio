const About = (props) => {
    return (
        <div>
            <div className="pb-3">
                <p className="text-neutral-900 font-bold text-xl">About me</p>
                <div className={`h-1 w-8 bg-${props.theme}-600 mt-5`} />
            </div>
            <div>
                <p className="text-sm leading-loose pt-2.5 text-neutral-500">
                    Hi I'm Lewis, and I'm a web developer. My strengths are mainly in front-end with technologies such as React, although I am sufficient in some
                    backend technologies such as Node and Express. I'm currently looking for an opportunity to work in a company that will help me progress into
                    a career as a fullstack developer. If you would like to know more about my projects, please visit my github.
                </p>
            </div>
        </div>
    );
};

export default About;