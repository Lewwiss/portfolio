import Project from "./Project";

const Work = (props) => {
    return (
        <div>
            <div className="pb-7">
                <p className="text-neutral-900 font-bold text-xl">Some recent projects</p>
                <div className={`h-1 w-8 bg-${props.theme}-600 mt-5`} />
            </div>
            <div className="grid grid-cols-1 space-y-6">
                <Project title="React Shopify Storefront" desc="This is a React app using Shopify as a backend & headless CMS." theme={props.theme} tags={["React", "Shopify", "E-Commerce"]} link="https://github.com/Lewwiss/react-storefront-template" />
                <Project title="NextJS NFT Minter (Eth)" desc="A NextJS app that uses alchemy web3 allowing users to interact with an ethereum contract." theme={props.theme} tags={["NextJS", "Web3", "Ethereum"]} link="https://github.com/Lewwiss/next-nft-minter" />
                <Project title="Node Web Scraper" desc="An app that uses Puppeteer to scrape and present data." theme={props.theme} tags={["Javascript", "Node", "Puppeteer"]} link="" />
                <Project title="Discord Chat Bot" desc="Simple chat bot that uses discord.js. Has simple functions such as reaction roles and embedding." theme={props.theme} tags={["Javascript", "Node"]} link="https://github.com/Lewwiss/sa-discord-bot" />
            </div>
        </div>
    );
};

export default Work;