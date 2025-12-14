'use client';

import React, {createContext, ReactNode, useContext, useEffect, useState} from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme | null; // Allow null for initial state
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export default function ThemeProvider({children}: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    // Read the theme from the data-theme attribute on the HTML element
    const root = document.documentElement;
    const initialTheme = root.getAttribute('data-theme') as Theme;
    setTheme(initialTheme);
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', newTheme);
      window.localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  return (
      <ThemeContext.Provider value={{theme, toggleTheme}}>
        {children}
      </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
