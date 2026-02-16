import { Project, ProjectCategory, SkillCategory } from './types';
import { 
  Code, Database, Brain, Layout, Server, GitBranch, 
  Terminal, Globe, Workflow, Cloud, Layers
} from 'lucide-react';

export const HERO_DATA = {
  name: "Romysaa Mohamed",
  title: "Smart Systems Engineer (Aspiring)",
  subtitle: "Front-End Developer | Data Engineering Trainee",
  description: "I am a technology enthusiast aiming to become a Smart Systems Engineer. I bridge the gap between user-friendly interfaces and powerful data-driven backends to build intelligent, scalable systems.",
};

export const SOCIAL_LINKS = {
  email: "romysaa.mohamed.qotb@gmail.com",
  github: "https://github.com/romysaa-mohamed",
  linkedin: "https://www.linkedin.com/in/romysaa-mohamed",
  location: "Tanta, Egypt"
};

export const ABOUT_DATA = `
**About Me**
I am a motivated engineering student interested in smart systems that combine software, data, and intelligent technologies. I have experience in **Front-End Development** and I am currently training in **Data Engineering** through a national initiative.

**Career Objective**
My goal is to work as a **Smart Systems Engineer** where I can design and develop intelligent, data-driven systems and scalable applications.

**Education & Training**
I am pursuing my Bachelor’s Degree at the **Faculty of Computers and Information (FCI)**. 
I am also an active **Data Engineering Trainee** in a National Initiative, gaining hands-on experience with pipelines and data analysis.
`;

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: "Front-End Development",
    skills: [
      { name: "HTML & CSS", level: 95, icon: Layout },
      { name: "JavaScript", level: 90, icon: Code },
      { name: "Responsive Design", level: 90, icon: Globe },
    ]
  },
  {
    title: "Data Engineering & DBs",
    skills: [
      { name: "Python & SQL", level: 80, icon: Database },
      { name: "ETL & Data Cleaning", level: 75, icon: Workflow },
      { name: "MySQL & PostgreSQL", level: 70, icon: Server },
    ]
  },
  {
    title: "Tools & Cloud",
    skills: [
      { name: "Git & GitHub", level: 85, icon: GitBranch },
      { name: "Docker & Spark", level: 60, icon: Layers },
      { name: "AWS & Google Cloud", level: 50, icon: Cloud },
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: '1',
    title: "Book Store Website",
    description: "Developed a responsive Book Store website layout that allows users to browse books and interact with the interface smoothly. Focused on responsive design and interactive features.",
    images: [
      // Using 'thumbnail' endpoint with size w1000 is more reliable for web display than 'export=view'
      "https://drive.google.com/thumbnail?id=1QFJR7_CXyxD9AHm_HGjP9ZsypMXKkrhz&sz=w1000",
      "https://drive.google.com/thumbnail?id=19yM64XKPnFdzL48s144kx4n-WJ9P5HIN&sz=w1000",
      "https://drive.google.com/thumbnail?id=1LoLat0nyfZGH8UfItkvQVaM4ReEwk-Ai&sz=w1000",
      "https://drive.google.com/thumbnail?id=1NMFX4WzjsNBER5ynXI8S2gijVth9REm4&sz=w1000",
      "https://drive.google.com/thumbnail?id=1Ia5SUhQCZwQm_kL5-ZRfbsgoDlTbp0HH&sz=w1000",
      "https://drive.google.com/thumbnail?id=1hglhkFbl6B7Molg5vW3KHcpiMdagIqwN&sz=w1000",
      "https://drive.google.com/thumbnail?id=153DiDo7QaWxhNR5PlpHfKSfrl4-Y3aCu&sz=w1000"
    ], 
    tags: ["HTML", "CSS", "JavaScript", "Responsive"],
    category: ProjectCategory.FRONTEND,
    githubUrl: "https://github.com/romysaa-mohamed/Book-Store", 
    demoUrl: "#"    
  },
  {
    id: '2',
    title: "Sky Wings – Flight Booking",
    description: "Created a flight booking website interface where users can view available flights and booking information. Built a clean, simple UI with responsive design principles.",
    images: [
      "https://drive.google.com/thumbnail?id=1Bla3Td-nUCggDSxThBH3ItoEc_K47ud7&sz=w1000",
      "https://drive.google.com/thumbnail?id=1OD3Pwps_vmOln7PAsu7rxvhfn5Dl9WwX&sz=w1000",
      "https://drive.google.com/thumbnail?id=1jo922Ai-PlLbXds6zpxBKL3AMNI2T9Xe&sz=w1000",
      "https://drive.google.com/thumbnail?id=1aaIgqY1vtY82ENImN7bwSk0syJKUDUgi&sz=w1000",
      "https://drive.google.com/thumbnail?id=1hFPZ-KHP7AyX6J29DnX_KqKSW-UBy7x0&sz=w1000",
      "https://drive.google.com/thumbnail?id=1BuzBeRfhtYWK9x81j80s6F29Bu5PpXY3&sz=w1000",
      "https://drive.google.com/thumbnail?id=1w4zNFw56HdSHw1jqZwhu8OaDYG8kvl9l&sz=w1000",
      "https://drive.google.com/thumbnail?id=13F5IkJ3rkQ7PWT4AAmC48rtG4fokDRby&sz=w1000",
      "https://drive.google.com/thumbnail?id=1ZFOedkX38wUcfhB7Lt-r5VlpgE9xtcaE&sz=w1000",
      "https://drive.google.com/thumbnail?id=1RGcroCJSGMZbY5PfCuq5dt2r-rOCI6rO&sz=w1000",
      "https://drive.google.com/thumbnail?id=1__03IULupVtjG1X4ewBxXQUtkCYbjPBk&sz=w1000"
    ],
    tags: ["HTML", "CSS", "UI Design"],
    category: ProjectCategory.FRONTEND,
    githubUrl: "https://github.com/romysaa-mohamed/Website",
    demoUrl: "#"
  },
  {
    id: '3',
    title: "Paint Store System (Front-End)",
    description: "Developed the front-end interface for a paint store management system. Designed all UI screens, forms, and dashboards, collaborating effectively with the backend team.",
    images: [
      // Converted Paint Store images to thumbnail format for reliable display
      "https://drive.google.com/thumbnail?id=14txb2bMOCCob2z8o2WgVBU1r6EsTAfnJ&sz=w1000",
      "https://drive.google.com/thumbnail?id=1-Si2mEyNURBQ6zJ1-bcZbpvqH-1LqqLQ&sz=w1000",
      "https://drive.google.com/thumbnail?id=1fxUDBMpV-I0Q4q7IqSHSDtFVxLbLZUto&sz=w1000",
      "https://drive.google.com/thumbnail?id=1P8bTOi1JGxt9vREiN7YzQnT_NrYE7AEZ&sz=w1000",
      "https://drive.google.com/thumbnail?id=1hA8EmDjPhb24TNOgY1lJwQloD7-WBfgw&sz=w1000"
    ],
    tags: ["HTML", "CSS", "JavaScript", "Teamwork"],
    category: ProjectCategory.FRONTEND,
    githubUrl: "https://github.com/Romysaa2007/Alashwal-system1",
    demoUrl: "#"
  }
];