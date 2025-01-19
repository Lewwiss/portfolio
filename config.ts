import { Config } from "./types";

export const config: Config = {
    // SEO Meta
    metaTitle: "Lewwiss - Software Engineer",
    metaDescription: "I'm a software engineer who likes to build things.",
    // Announcement
    announcement: "Try out webhookforms.com now! Let me know what you think.",
    // Profile
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
            highlighted: false,
        },
        {
            name: "webhook-forms",
            description: "instant form widgets connected to your favourite apps.",
            url: "http://webhookforms.com/",
            highlighted: true,
        },
        {
            name: "supaproof",
            description: "get ai to proof read your blog website in minutes.",
            url: "http://supaproof.com/",
            highlighted: false,
        },
    ],
    // Appearance
    color: "#0ea5e9",
    theme: "slate",
    mode: "dark",
}
