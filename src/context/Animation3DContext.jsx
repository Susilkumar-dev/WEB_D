// frontend/src/context/Animation3DContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';

const Animation3DContext = createContext();

export const useAnimation3D = () => {
  const context = useContext(Animation3DContext);
  if (!context) {
    throw new Error('useAnimation3D must be used within Animation3DProvider');
  }
  return context;
};

export const Animation3DProvider = ({ children }) => {
  const [is3DEnabled, setIs3DEnabled] = useState(true);
  const [animationIntensity, setAnimationIntensity] = useState(1);

  useEffect(() => {
    // Check user preference for reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIs3DEnabled(!mediaQuery.matches);

    const handleChange = (e) => {
      setIs3DEnabled(!e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggle3D = () => {
    setIs3DEnabled(!is3DEnabled);
  };

  const setIntensity = (intensity) => {
    setAnimationIntensity(Math.min(Math.max(intensity, 0), 1));
  };

  const get3DTransform = (depth = 20) => {
    if (!is3DEnabled) return '';
    return `translateZ(${depth * animationIntensity}px)`;
  };

  const getRotation = (degrees = 5) => {
    if (!is3DEnabled) return '';
    return `rotateY(${degrees * animationIntensity}deg)`;
  };

  const getFloatAnimation = () => {
    if (!is3DEnabled) return '';
    return 'animate-float';
  };

  return (
    <Animation3DContext.Provider value={{
      is3DEnabled,
      toggle3D,
      animationIntensity,
      setIntensity,
      get3DTransform,
      getRotation,
      getFloatAnimation
    }}>
      {children}
    </Animation3DContext.Provider>
  );
};