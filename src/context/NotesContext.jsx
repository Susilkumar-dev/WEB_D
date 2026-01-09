import React, { createContext, useState, useContext, useEffect } from 'react';

const NotesContext = createContext();

export const useNotes = () => {
  const context = useContext(NotesContext);
  if (!context) {
    throw new Error('useNotes must be used within NotesProvider');
  }
  return context;
};

export const NotesProvider = ({ children }) => {
  const [currentTopic, setCurrentTopic] = useState(null);
  const [progress, setProgress] = useState({});
  const [notes, setNotes] = useState([]);

  // Load progress from localStorage
  useEffect(() => {
    const savedProgress = localStorage.getItem('devroadmap-progress');
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress));
    }
  }, []);

  // Save progress to localStorage
  useEffect(() => {
    localStorage.setItem('devroadmap-progress', JSON.stringify(progress));
  }, [progress]);

  const markAsComplete = (topicId) => {
    setProgress(prev => ({
      ...prev,
      [topicId]: true
    }));
  };

  const markAsIncomplete = (topicId) => {
    setProgress(prev => ({
      ...prev,
      [topicId]: false
    }));
  };

  const toggleProgress = (topicId) => {
    if (progress[topicId]) {
      markAsIncomplete(topicId);
    } else {
      markAsComplete(topicId);
    }
  };

  return (
    <NotesContext.Provider value={{
      currentTopic,
      setCurrentTopic,
      progress,
      markAsComplete,
      markAsIncomplete,
      toggleProgress,
      notes,
      setNotes
    }}>
      {children}
    </NotesContext.Provider>
  );
};