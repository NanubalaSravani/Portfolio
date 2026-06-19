import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

export type Theme = 'dark' | 'light';

type ThemeContextValue = {
  theme: Theme;
  isDark: boolean;
  toggleTheme: (event?: React.MouseEvent<HTMLButtonElement>) => void;
};

const STORAGE_KEY = 'portfolio-theme';

const ThemeContext = createContext<ThemeContextValue | null>(null);

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'dark';
  const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
  if (stored === 'dark' || stored === 'light') return stored;
  return 'light';
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const triggerLightUpPulse = useCallback((x: number, y: number) => {
    document.body.style.setProperty('--pulse-x', `${x}px`);
    document.body.style.setProperty('--pulse-y', `${y}px`);
    document.body.classList.add('light-up-pulse');
    window.setTimeout(() => {
      document.body.classList.remove('light-up-pulse');
    }, 600);
  }, []);

  const toggleTheme = useCallback(
    (event?: React.MouseEvent<HTMLButtonElement>) => {
      setThemeState((prev) => {
        const next = prev === 'dark' ? 'light' : 'dark';
        if (next === 'light' && event?.currentTarget) {
          const rect = event.currentTarget.getBoundingClientRect();
          triggerLightUpPulse(rect.left + rect.width / 2, rect.top + rect.height / 2);
        }
        return next;
      });
    },
    [triggerLightUpPulse],
  );

  const value = useMemo(
    () => ({ theme, isDark: theme === 'dark', toggleTheme }),
    [theme, toggleTheme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
