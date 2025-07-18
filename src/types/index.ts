export interface Project {
  id: string;
  title: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
  githubUrl?: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
  certificateUrl?: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  cgpa: string;
}

export interface Skill {
  category: string;
  skills: string[];
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}