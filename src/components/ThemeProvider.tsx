import { useEffect } from 'react';

const STORAGE_KEY = 'theme';
type Theme = 'light' | 'dark' | 'system';

function getSystemTheme(): 'light' | 'dark' {
  if (typeof window === 'undefined') return 'dark';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  const resolved = theme === 'system' ? getSystemTheme() : theme;
  root.classList.remove('light', 'dark');
  root.classList.add(resolved);
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const stored = (localStorage.getItem(STORAGE_KEY) as Theme) || 'system';
    applyTheme(stored);

    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      const current = (localStorage.getItem(STORAGE_KEY) as Theme) || 'system';
      if (current === 'system') applyTheme('system');
    };
    media.addEventListener('change', handleChange);
    return () => media.removeEventListener('change', handleChange);
  }, []);

  return <>{children}</>;
}
