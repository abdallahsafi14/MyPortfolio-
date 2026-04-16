import project1 from "../assets/projects/project-1.webp";
import project6 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";
import project5 from "../assets/projects/project-5.png";
import project2 from "../assets/projects/project-6.png";

export const HERO_CONTENT: string = `As a front-end developer with two years of experience, I am committed to expanding my skill set and knowledge in this dynamic field. I strive to blend creativity with technical proficiency to deliver visually appealing and functional websites. Seeking opportunities to leverage my skills and expertise in front-end development to contribute to dynamic projects and help businesses enhance their online presence.`;

export const ABOUT_TEXT: string = `As a front-end developer with two years of experience, I am committed to expanding my skill set and knowledge in this dynamic field. I strive to blend creativity with technical proficiency to deliver visually appealing and functional websites. Currently pursuing IT engineering at Homs University, I am seeking opportunities to leverage my skills in front-end development to contribute to dynamic projects and help businesses enhance their online presence.`;

export interface Experience {
  year: string;
  role: string;
  company: string;
  description: string;
  technologies: string[];
}

export const EXPERIENCES: Experience[] = [
  {
    year: "2025 - Present",
    role: "Front-End Developer",
    company: "Zedni",
    description:
      "Developed a price comparison web platform helping users find the best product prices across multiple retail stores. Built a responsive interface enabling product search by name and category, advanced filtering and sorting features (by price, distance, and store), integrated real-time price tracking, and collaborated on translating Figma designs into pixel-perfect front-end components.",
    technologies: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "REST API",
    ],
  },
  {
    year: "2025 - Present",
    role: "Front-End Developer",
    company: "Shihal",
    description:
      "Created a multi-language website with internationalization support. Developed responsive UI components, ensured cross-browser compatibility, and optimized performance for both desktop and mobile devices.",
    technologies: ["React.js", "i18next", "CSS3", "Responsive Design"],
  },
  {
    year: "2025",
    role: "Front-End Developer",
    company: "PMGT (CRM & Project Management Platform)",
    description:
      "Developed a CRM and project management web application inspired by Jira. Built intuitive dashboards for tracking project progress, implemented task management features including creation, assignment, prioritization, and status updates, designed Kanban-style boards, created responsive reusable UI components, and implemented role-based UI access for different user types.",
    technologies: [
      "React.js",
      "Redux",
      "Styled Components",
      "REST API",
      "Kanban",
    ],
  },
  {
    year: "2024 - 2025",
    role: "Front-End Developer Intern",
    company: "Sputex",
    description:
      "Contributed to an e-commerce web application development. Built and styled responsive UI components for product listings, product details, and shopping cart pages. Assisted in implementing core e-commerce features, collaborated with senior developers, and gained hands-on experience with real-world codebases.",
    technologies: [
      "React.js",
      "JavaScript",
      "CSS3",
      "Git",
      "Responsive Design",
    ],
  },
];

export interface PROJECTS {
  title: string;
  image: HTMLImageElement;
  description: string;
  technologies: string[];
}

export const PROJECTS = [
  {
    title: "Price Comparison Platform",
    image: project1,
    description:
      "Developed a price comparison web platform that helps users find the best product prices across multiple retail stores. Features include multi-language support, product search by name and category, advanced filtering and sorting by price, distance, and store, plus real-time price tracking.",
    technologies: [
      "React.js",
      "Next.js",
      "TypeScript",
      "i18next",
      "Tailwind CSS",
    ],
  },
  {
    title: "CRM & Project Management Platform",
    image: project5,
    description:
      "Built a comprehensive CRM and project management system inspired by Jira. Features include intuitive dashboards for tracking progress, task creation and assignment, Kanban-style boards for workflow visualization, role-based UI access, and reusable component architecture.",
    technologies: ["React.js", "Redux", "Styled Components", "REST API"],
  },
  {
    title: "ZEDNI Company Portfolio",
    image: project6,
    description:
      "Built a professional portfolio website for Zedni company using WordPress, showcasing their services, team, and company achievements. Designed a modern, responsive layout with custom themes, integrated contact forms, and optimized SEO to enhance their online presence.",
    technologies: ["WordPress", "PHP", "CSS3", "JavaScript", "SEO"],
  },
  {
    title: "E-Commerce Platform",
    image: project1,
    description:
      "Developed a modern e-commerce platform with robust features including product and category management, multi-user roles with permission control, dynamic ad placement, multi-theme support using Styled Components, multilingual functionality with i18next, and secure authentication systems.",
    technologies: [
      "React.js",
      "Styled Components",
      "i18next",
      "Redux",
      "REST API",
    ],
  },
  {
    title: "Food Community Platform",
    image: project2,
    description:
      "Built a modern food community platform using Next.js, allowing users to share, explore, and discover diverse dishes and recipes. Features include recipe uploads, user engagement through likes and comments, server-side rendering for optimal performance, and responsive design.",
    technologies: ["Next.js", "CSS3", "Server-Side Rendering", "REST API"],
  },
  {
    title: "Dashonic Dashboard",
    image: project3,
    description:
      "Developed a fully responsive and dynamic dashboard application with Chart.js for interactive data visualizations and React-Data-Table-Component for efficient data management. Implemented multilingual support with i18next for enhanced accessibility.",
    technologies: [
      "React.js",
      "Styled Components",
      "Chart.js",
      "i18next",
      "Data Tables",
    ],
  },
  {
    title: "Personal Portfolio",
    image: project4,
    description:
      "Built a modern and responsive personal portfolio website using React.js and TypeScript for robust, type-safe development. Styled with Tailwind CSS for a sleek and consistent design, and integrated Framer Motion to deliver smooth animations and interactive user experiences.",
    technologies: ["React.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
];

export const CONTACT = {
  address: "Syria/Homs",
  phoneNo: "+963 997 022 873",
  email: "abdallahsafi414@gmail.com",
  github: "https://github.com/abdallahsafi14",
  linkedin: "https://linkedin.com/in/abdallahsafi14",
};
