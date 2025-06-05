export interface Resource {
  name: string;
  url: string;
}

export interface Skill {
  id: string;
  name: string;
  emoji: string;
  tagline: string;
  category: string;
  description: string;
  sevenDayPlan: string[];
  videoUrl: string;
  resources: Resource[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
}

export interface UserProgress {
  completedSkills: string[];
  currentSkill?: string;
  startDate?: string;
  journalEntries: JournalEntry[];
}

export interface JournalEntry {
  id: string;
  date: string;
  content: string;
  skillId?: string;
}