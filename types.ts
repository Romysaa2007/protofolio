import { LucideIcon } from 'lucide-react';

export enum ProjectCategory {
  FRONTEND = 'Frontend',
  DATA_ENGINEERING = 'Data Engineering',
  AI_ML = 'AI & Machine Learning'
}

export interface Project {
  id: string;
  title: string;
  description: string;
  images: string[]; // Changed from single image to array of images
  tags: string[];
  category: ProjectCategory;
  githubUrl?: string;
  demoUrl?: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  icon?: LucideIcon; 
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}