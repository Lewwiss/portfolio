import Project from "./Project";

const Work = () => {
    return (
        <div>
            <div className="pb-7">
                <p className="text-white font-semibold text-xl">Recent Projects</p>
                <p className="text-sm leading-8 pt-4 text-slate-400">All source code is available on my GitHub</p>
            </div>
            <div className="grid grid-cols-1 space-y-8">
                <Project title="React Shopify Storefront" desc="This is a react app that uses the Shopify Buy SDK to allow users to import their products and create a custom storefront. This could also be used as a headless CMS." tags={["React", "Shopify", "E-Commerce"]} link="https://github.com/Lewwiss/react-shopify-storefront" />
                <Project title="Next Contract Interactor (Eth)" desc="A next app that uses the alchemy web3 package to allow users to connect a web3 wallet such as Meta Mask, and interact with a ethereum smart contract." tags={["NextJS", "Web3", "Ethereum"]} link="https://github.com/Lewwiss/next-contract-interactor" />
                <Project title="React Tailwind Showcase" desc="A very simple website to showcase my CSS and design skills. I've used tailwind as my styling library as I think it's the easiest to customize." tags={["Javascript", "React", "Tailwind"]} link="https://github.com/Lewwiss/react-tailwind-showcase" />
                <Project title="Node Chat Bot" desc="This is a simple node chat bot that uses discord.js. It includes simple functions such as reaction roles and embedding for custom messages." tags={["Javascript", "Node"]} link="https://github.com/Lewwiss/sa-discord-bot" />
            </div>
        </div>
    );
};

export default Work;