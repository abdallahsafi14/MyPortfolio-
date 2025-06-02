import project1 from "../assets/projects/project-1.webp";
import project6 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";
import project5 from "../assets/projects/project-5.png";
import project2 from "../assets/projects/project-6.png";

export const HERO_CONTENT: string = `I am a dedicated and versatile front-end developer with two years of experience, 
committed to expanding my skill set and knowledge in this dynamic field. I strive to blend creativity with technical 
proficiency to deliver visually appealing and functional websites. Currently pursuing IT engineering at Homs University, 
I am seeking opportunities to leverage my skills in front-end development to contribute to dynamic projects and help 
businesses enhance their online presence.`;

export const ABOUT_TEXT: string = `I am a dedicated and versatile front-end developer with two years of experience, 
committed to expanding my skill set and knowledge in this dynamic field. I strive to blend creativity with technical 
proficiency to deliver visually appealing and functional websites. Currently pursuing IT engineering at Homs University, 
I am seeking opportunities to leverage my skills in front-end development to contribute to dynamic projects and help 
businesses enhance their online presence.`;

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
      "Built a professional portfolio website for the company using WordPress, showcasing their services and enhancing their online presence. Developed a comprehensive cleaning services website with modern design and user-friendly interface to improve customer engagement and service accessibility.",
    technologies: ["WordPress", "React.js", "Next.js"],
  },
  {
    year: "2024 - 2025",
    role: "Front-End Developer",
    company: "Sputix",
    description:
      "Built and developed a comprehensive e-commerce platform with advanced features including product management, user authentication, and payment integration. Created a multi-language website with internationalization support, enhancing user experience for diverse audiences across different regions.",
    technologies: [
      "React.js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "i18next",
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
    title: "Project Management System",
    image: project5,
    description:
      "Developed a comprehensive project management system with features including task creation and assignment, project timeline tracking, team collaboration tools, and progress monitoring dashboards. Implemented user role management, file sharing capabilities, real-time notifications, and detailed reporting analytics to enhance team productivity and project oversight.",
    technologies: ["React.js", "Styled Components", "prime react", "Redux"],
  },
  {
    title: "ZEDNI Company Portfolio",
    image: project6,
    description:
      "Built a professional portfolio website for Zedni company using WordPress, showcasing their services, team, and company achievements. Designed a modern, responsive layout with custom themes, integrated contact forms, and optimized SEO to enhance their online presence and attract potential clients.",
    technologies: ["WordPress", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "E-Commerce Platform",
    image: project1,
    description:
      "Developed a modern e-commerce platform with robust features, including product and category management, multi-user roles with permission control, and dynamic ad placement. Implemented multi-theme support using Styled Components and integrated multilingual functionality with i18next. Built secure authentication systems for both customers and admin users.",
    technologies: ["React.js", "Styled Components", "i18next"],
  },
  {
    title: "Food Community Platform",
    image: project2,
    description:
      "Built a modern food community platform using Next.js, allowing users to share, explore, and discover diverse dishes and recipes. Designed a sleek, responsive UI for seamless browsing and interaction across all devices. Implemented key features such as recipe uploads, user engagement through likes and comments, and optimized performance with Next.js server-side rendering.",
    technologies: ["Next.js", "CSS", "Server-Side Rendering"],
  },
  {
    title: "Personal Portfolio",
    image: project4,
    description:
      "Built a modern and responsive personal portfolio website using React.js and TypeScript for robust, type-safe development. Styled with Tailwind CSS for a sleek and consistent design, and integrated Framer Motion to deliver smooth animations and interactive user experiences.",
    technologies: ["React.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Dashonic Dashboard",
    image: project3,
    description:
      "Developed a fully responsive and dynamic dashboard application using React.js and Styled-Components for modern UI design. Integrated Chart.js for interactive data visualizations and React-Data-Table-Component for efficient data management. Implemented multilingual support with i18next, enhancing user accessibility across different languages.",
    technologies: ["React.js", "Styled Components", "Chart.js", "i18next"],
  },
];

export const CONTACT = {
  address: "Syria/Homs",
  phoneNo: "+963 997 022 873",
  email: "abdallahsafi414@gmail.com",
  github: "https://github.com/abdallahsafi14",
  linkedin: "www.linkedin.com/in/abdallahsafi14",
};
