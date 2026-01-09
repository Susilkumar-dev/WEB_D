// frontend/src/hooks/useTheme.jsx
import { useEffect } from 'react';
import { useTheme } from '../context/ThemeContext.jsx';

/**
 * Custom hook for theme-related functionality
 * @returns {Object} Theme utilities and state
 */
export const useThemeHook = () => {
  const { isDarkMode, toggleTheme, setTheme, theme } = useTheme();

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e) => {
      if (!localStorage.getItem('devroadmap-theme')) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [setTheme]);

  // Get theme class for conditional styling
  const getThemeClass = (lightClass, darkClass) => {
    return isDarkMode ? darkClass : lightClass;
  };

  // Get theme color based on current theme
  const getThemeColor = () => {
    return isDarkMode ? '#1f2937' : '#f9fafb';
  };

  // Get text color based on current theme
  const getTextColor = () => {
    return isDarkMode ? '#f9fafb' : '#111827';
  };

  // Get accent color based on current theme
  const getAccentColor = () => {
    return isDarkMode ? '#6366f1' : '#4f46e5';
  };

  // Toggle theme with animation
  const toggleThemeWithAnimation = () => {
    // Add animation class
    document.documentElement.classList.add('theme-transition');
    toggleTheme();
    
    // Remove animation class after transition
    setTimeout(() => {
      document.documentElement.classList.remove('theme-transition');
    }, 300);
  };

  return {
    isDarkMode,
    theme,
    toggleTheme: toggleThemeWithAnimation,
    setTheme,
    getThemeClass,
    getThemeColor,
    getTextColor,
    getAccentColor,
    isLight: !isDarkMode
  };
};

/**
 * Hook for responsive theme adjustments
 * @returns {Object} Responsive theme utilities
 */
export const useResponsiveTheme = () => {
  const { isDarkMode } = useTheme();

  // Adjust theme based on screen size
  const useMobileTheme = () => {
    useEffect(() => {
      if (window.innerWidth < 768) {
        // Adjust theme for mobile
        document.documentElement.style.setProperty(
          '--mobile-bg', 
          isDarkMode ? '#0f172a' : '#ffffff'
        );
      }
    }, [isDarkMode]);
  };

  return {
    useMobileTheme
  };
};

/**
 * Hook for theme persistence across routes
 * @returns {Function} Function to persist theme state
 */
export const useThemePersistence = () => {
  const { theme } = useTheme();

  const persistThemeToStorage = (key, data) => {
    const themeData = {
      ...data,
      theme,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem(key, JSON.stringify(themeData));
  };

  const getPersistedThemeData = (key) => {
    const data = localStorage.getItem(key);
    if (!data) return null;
    
    const parsed = JSON.parse(data);
    // Check if theme matches current theme
    if (parsed.theme !== theme) {
      // Theme changed, clear old data
      localStorage.removeItem(key);
      return null;
    }
    return parsed;
  };

  return {
    persistThemeToStorage,
    getPersistedThemeData
  };
};