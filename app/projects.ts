export type ProjectStatus = "active" | "inactive" | "sold" | "listed" | "building";

export type Project = {
  name: string;
  href: string | null;
  icon: string | null;
  description: string;
  status: ProjectStatus;
};

export const projects: Project[] = [
  {
    name: "autoafk.com",
    href: "https://autoafk.com",
    icon: "/autoafk.png",
    description: "AFK your Minecraft accounts 24/7",
    status: "active",
  },
  {
    name: "wraith.email",
    href: "https://wraith.email",
    icon: "/wraith.png",
    description: "Free temporary email that vanishes",
    status: "active",
  },
  {
    name: "wrensim.com",
    href: "https://wrensim.com",
    icon: "/wrensim.png",
    description: "Travel eSIMs in 2 minutes",
    status: "listed",
  },
  {
    name: 'stealth #1',
    href: null,
    icon: null,
    description: 'Details coming soon',
    status: "building",
  }
];
