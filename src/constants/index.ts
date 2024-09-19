import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT: string = `I am a dedicated and versatile  front-end developer with two years of experience, 
I have mastered technologies like React, JavaScript, and TypeScript to create engaging web applications. Currently pursuing IT
 engineering at Al-Baath University, I am committed to expanding my skill set and knowledge in this dynamic field..`
export const ABOUT_TEXT: string = `I am a dedicated and versatile  front-end developer with two years of experience, 
I have mastered technologies like React, JavaScript, and TypeScript to create engaging web applications. Currently pursuing IT
 engineering at Al-Baath University, I am committed to expanding my skill set and knowledge in this dynamic field..`;

export interface Experience {
  year: string;
  role: string;
  company: string;
  description: string;
  technologies: string[];
}

export const EXPERIENCES: Experience[] = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description:
      "Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.",
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "HTML5, CSS",
    company: "",
    description:
      "Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.",
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
 
  
];

export interface PROJECTS {
  title: string;
  image: HTMLImageElement;
  company: string;
  description: string;
  technologies: string[];
}
export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "Syria/Homs ",
  phoneNo: "+963 997 022 873 ",
  email: "abdallahsafi414@gmail.com",
};
