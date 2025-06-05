import React, { createContext, useContext, useState, useEffect } from 'react';
import { skills } from '../data/skillsData';
import { UserProgress, Skill, JournalEntry } from '../types/skills';

interface SkillContextType {
  userProgress: UserProgress;
  allSkills: Skill[];
  completedSkills: Skill[];
  addCompletedSkill: (skillId: string) => void;
  removeCompletedSkill: (skillId: string) => void;
  setCurrentSkill: (skillId: string) => void;
  isSkillCompleted: (skillId: string) => boolean;
  addJournalEntry: (content: string, skillId?: string) => void;
  deleteJournalEntry: (entryId: string) => void;
  getSkillById: (skillId: string) => Skill | undefined;
}

const defaultProgress: UserProgress = {
  completedSkills: [],
  currentSkill: undefined,
  startDate: new Date().toISOString(),
  journalEntries: [],
};

const SkillContext = createContext<SkillContextType | undefined>(undefined);

export const SkillProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userProgress, setUserProgress] = useState<UserProgress>(defaultProgress);
  const [allSkills] = useState<Skill[]>(skills);

  // Load user progress from localStorage on initial render
  useEffect(() => {
    const savedProgress = localStorage.getItem('glowUpProgress');
    if (savedProgress) {
      setUserProgress(JSON.parse(savedProgress));
    }
  }, []);

  // Save user progress to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('glowUpProgress', JSON.stringify(userProgress));
  }, [userProgress]);

  const completedSkills = allSkills.filter(skill => 
    userProgress.completedSkills.includes(skill.id)
  );

  const getSkillById = (skillId: string) => {
    return allSkills.find(skill => skill.id === skillId);
  };

  const addCompletedSkill = (skillId: string) => {
    if (!userProgress.completedSkills.includes(skillId)) {
      setUserProgress(prev => ({
        ...prev,
        completedSkills: [...prev.completedSkills, skillId],
      }));
    }
  };

  const removeCompletedSkill = (skillId: string) => {
    setUserProgress(prev => ({
      ...prev,
      completedSkills: prev.completedSkills.filter(id => id !== skillId),
    }));
  };

  const setCurrentSkill = (skillId: string) => {
    setUserProgress(prev => ({
      ...prev,
      currentSkill: skillId,
    }));
  };

  const isSkillCompleted = (skillId: string) => {
    return userProgress.completedSkills.includes(skillId);
  };

  const addJournalEntry = (content: string, skillId?: string) => {
    const newEntry: JournalEntry = {
      id: Date.now().toString(),
      date: new Date().toISOString(),
      content,
      skillId,
    };

    setUserProgress(prev => ({
      ...prev,
      journalEntries: [newEntry, ...prev.journalEntries],
    }));
  };

  const deleteJournalEntry = (entryId: string) => {
    setUserProgress(prev => ({
      ...prev,
      journalEntries: prev.journalEntries.filter(entry => entry.id !== entryId),
    }));
  };

  return (
    <SkillContext.Provider 
      value={{
        userProgress,
        allSkills,
        completedSkills,
        addCompletedSkill,
        removeCompletedSkill,
        setCurrentSkill,
        isSkillCompleted,
        addJournalEntry,
        deleteJournalEntry,
        getSkillById,
      }}
    >
      {children}
    </SkillContext.Provider>
  );
};

export const useSkills = () => {
  const context = useContext(SkillContext);
  if (context === undefined) {
    throw new Error('useSkills must be used within a SkillProvider');
  }
  return context;
};