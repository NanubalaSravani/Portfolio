import { useTheme } from '../hooks/useTheme';
import './ThemeToggle.css';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      aria-pressed={theme === 'light'}
    >
      <span className="theme-toggle-track">
        <span className={`theme-toggle-thumb ${theme === 'light' ? 'is-light' : ''}`}>
          <span className={`theme-icon theme-icon-sun ${theme === 'light' ? 'visible' : ''}`} aria-hidden>
            ☀
          </span>
          <span className={`theme-icon theme-icon-moon ${theme === 'dark' ? 'visible' : ''}`} aria-hidden>
            ☾
          </span>
        </span>
      </span>
    </button>
  );
}
