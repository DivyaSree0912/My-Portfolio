export interface Project {
  slug: string;
  name: string;
  oneLiner: string;
  tags: string[];
  github: string;
  featured?: boolean;
  status?: string;
  problem: string;
  solution: string;
  contributions: string[];
  technology: Record<string, string[]> | string[];
  architecture?: string[];
  dataset?: string[];
  implementationDetails: string[];
  results: string[];
  metricsTable?: {
    headers: string[];
    rows: string[][];
  };
  notes?: string[];
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  responsibilities: string[];
}

export interface Achievement {
  icon: string;
  title: string;
  details: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}
