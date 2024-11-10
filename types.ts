export interface Config {
    metaTitle: string;
    metaDescription: string;
    announcement?: string;
    avatar?: string;
    name: string;
    username: string;
    job?: string;
    company?: string;
    description?: string;
    links?: Link[];
    projects?: Project[];
    color: string;
    theme: "slate" | "gray" | "zinc" | "neutral" | "stone";
    mode: "light" | "dark";
}

export interface Link {
    name: string;
    url: string;
}

export interface Project {
    name: string;
    description: string;
    url: string;
    image?: string;
    highlighted?: boolean;
}
