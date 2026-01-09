// frontend/src/context/ThemeContext.jsx - UPDATED
import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('devroadmap-theme');
    if (saved) {
      return saved === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    
    // Set CSS variables based on theme
    if (isDarkMode) {
      root.classList.add('dark');
      root.style.setProperty('--bg', '#020617');
      root.style.setProperty('--card', '#0F172A');
      root.style.setProperty('--primary', '#38BDF8');
      root.style.setProperty('--text-main', '#E5E7EB');
      root.style.setProperty('--text-secondary', '#9CA3AF');
      root.style.setProperty('--text-muted', '#6B7280');
      root.style.setProperty('--border', '#1E293B');
      root.style.setProperty('--hover-bg', '#1E293B');
      root.style.setProperty('--success', '#22C55E');
      root.style.setProperty('--warning', '#FACC15');
      root.style.setProperty('--error', '#EF4444');
    } else {
      root.classList.remove('dark');
      root.style.setProperty('--bg', '#F9FAFB');
      root.style.setProperty('--card', '#FFFFFF');
      root.style.setProperty('--primary', '#2563EB');
      root.style.setProperty('--text-main', '#111827');
      root.style.setProperty('--text-secondary', '#4B5563');
      root.style.setProperty('--text-muted', '#6B7280');
      root.style.setProperty('--border', '#E5E7EB');
      root.style.setProperty('--hover-bg', '#EFF6FF');
      root.style.setProperty('--success', '#16A34A');
      root.style.setProperty('--warning', '#F59E0B');
      root.style.setProperty('--error', '#DC2626');
    }
    
    localStorage.setItem('devroadmap-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const setTheme = (theme) => {
    setIsDarkMode(theme === 'dark');
  };

  return (
    <ThemeContext.Provider value={{ 
      isDarkMode, 
      toggleTheme, 
      setTheme,
      theme: isDarkMode ? 'dark' : 'light'
    }}>
      {children}
    </ThemeContext.Provider>
  );
};