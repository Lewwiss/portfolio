# Portfolio Template

A customizable and reusable portfolio template built with **Next**

## 🎉 Features

- **SEO-Optimized**: Set your meta title and description for easy discoverability
- **Dynamic Projects**: Showcase highlighted and non-highlighted projects
- **Personalized Links**: Add your social links to platforms like Twitter, GitHub, LinkedIn, and more
- **Theming Options**: Easily change colors, themes, and modes

## 🚀 Getting Started

1. **Clone the Repository**:

    ```bash
    git clone https://github.com/Lewwiss/portfolio.git
    cd portfolio
    ```

2. **Install Dependencies**:

    ```bash
    npm install
    ```

3. **Configure Your Portfolio**:

    Open `config.ts` and customize it with your details:

    ```javascript
    import { Config } from "./types";

    export const config: Config = {
      metaTitle: "Your Name - Your Job Title",
      metaDescription: "A brief intro about yourself.",
      announcement: "🎉 Exciting update announcement!",
      avatar: "https://example.com/your-avatar.jpg",
      name: "Your Name",
      username: "yourusername",
      job: "Your Job Title",
      company: "Your Company",
      description: "A bit about what you do.",
      links: [
        { name: "Twitter", url: "https://twitter.com/yourusername" },
        { name: "GitHub", url: "https://github.com/yourusername" },
        { name: "LinkedIn", url: "https://linkedin.com/in/yourusername" }
      ],
      projects: [
        {
          name: "Project One",
          description: "Brief description of your project.",
          url: "https://github.com/yourusername/project-one",
          image: "https://example.com/project-image.png",
          highlighted: true,
        },
      ],
      color: "#0EA5E9",
      theme: "slate",
      mode: "dark",
    };
    ```

## 🛠️ Configuration Options

| Field             | Type          | Description                                                      |
|-------------------|---------------|------------------------------------------------------------------|
| `metaTitle`       | `string`      | Title for SEO.                                                   |
| `metaDescription` | `string`      | Meta description for SEO.                                        |
| `announcement`    | `string`      | Announcement banner text.                                        |
| `avatar`          | `string`      | URL to your profile image.                                       |
| `name`            | `string`      | Your name as you want it displayed.                              |
| `username`        | `string`      | Your handle or username.                                         |
| `job`             | `string`      | Job title or role.                                               |
| `company`         | `string`      | Company or organization name.                                    |
| `description`     | `string`      | Short description about yourself.                                |
| `links`           | `array`       | Array of social link objects (`name`, `url`).                    |
| `projects`        | `array`       | Array of project objects (`name`, `description`, `url`, `image`).|
| `color`           | `string`      | Accent color in HEX format.                                      |
| `theme`           | `string`      | Tailwind theme name (`slate`, `neutral`, etc.).                  |
| `mode`            | `string`      | Display mode (`dark` or `light`).                                |
