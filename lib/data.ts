import { Project, SkillCategory, Achievement, NavLink } from "@/types";


export const NAV_LINKS: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Programming Languages",
    icon: "💻",
    skills: ["C", "C++", "Java", "JavaScript"],
  },
  {
    category: "Web Development",
    icon: "🌐",
    skills: ["HTML", "CSS", "React", "Next.js"],
  },
  {
    category: "Tools & Platforms",
    icon: "🛠️",
    skills: ["Git", "GitHub", "VS Code"],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Olea Cafe Landing Page",
    description:
      "A luxury cafe landing page built with modern frontend technologies. Features an elegant UI with smooth interactions, menu showcase, and contact section. Focused on clean aesthetics and user experience.",
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    githubUrl: "https://github.com/VanshikaGhatwal/olea-cafe",
    liveUrl: "https://olea-cafe-one.vercel.app/",
    image: "/olea.png",
  },
  {
    id: 2,
    title: "AI Trip Planner",
    description:
      "An AI-powered travel planning app that generates personalized itineraries based on destination, budget, and travel preferences. Built as an exploration into integrating AI APIs with a React frontend.",
    tech: ["React", "Next.js", "Tailwind CSS", "OpenAI API"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    image: "/projects/ai-trip.png",
  },
  {
    id: 3,
    title: "Library Inventory System",
    description:
      "An academic CRUD application for managing book records, price, and publisher information. Built as a college project to learn backend concepts, database operations, and REST API design.",
    tech: ["Java", "MySQL", "JDBC", "Swing"],
    githubUrl: "https://github.com/VanshikaGhatwal/Library-Inventory-System",
    image: "/projects/sms.png",
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "3rd Place — College Hackathon",
    description:
      "Competed in a 24-hour college hackathon and secured 3rd place by building a functional web application with the team.",
    icon: "🏆",
  },
  {
    title: "CGPA: 8.6 / 10",
    description:
      "Maintaining a strong academic record in B.Tech Computer Science Engineering.",
    icon: "📊",
  },
  {
    title: "Consistent Participant",
    description:
      "Actively participates in college coding events, workshops, and development bootcamps.",
    icon: "🎯",
  },
];
