export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
  image: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: string[];
}

export interface Achievement {
  title: string;
  description: string;
  icon: string;
}

export interface NavLink {
  label: string;
  href: string;
}
