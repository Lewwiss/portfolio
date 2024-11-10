import { Config } from "./types";

export const config: Config = {
    // SEO Meta
    metaTitle: "Lewwiss - Software Engineer",
    metaDescription: "I'm a software engineer who likes to build things.",
    // Announcement
    announcement: "🎉 Welcome to my new portfolio - View the code on my GitHub!",
    // User
    avatar: "https://avatars.githubusercontent.com/u/46723732",
    name: "Lewwiss",
    username: "lewwiss",
    job: "software engineer",
    company: "shockbyte",
    description: "I'm a software engineer who likes to build things.",
    links: [
        {
            name: "Twitter",
            url: "https://twitter.com/lewwisscom"
        },
        {
            name: "GitHub",
            url: "https://github.com/Lewwiss"
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/lewiswinthrop/"
        },
        {
            name: "GitLab",
            url: "https://gitlab.com/Lewwiss"
        },
    ],
    // Projects
    projects: [
        {
            name: "storybook-outlines",
            description: "storybook outlines in an easy to use chrome extension.",
            url: "https://github.com/Lewwiss/storybook-outlines",
            image: "https://i.imgur.com/8jRATob.png",
            highlighted: true,
        },
        {
            name: "webhook-forms",
            description: "easily create widget forms that connect with your all of your favourite apps.",
            url: "",
            highlighted: false,
        },
    ],
    // Appearance
    color: "#0EA5E9",
    theme: "slate",
    mode: "dark",
}
