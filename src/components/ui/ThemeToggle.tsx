import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
  variant?: 'default' | 'on-dark';
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  className = '',
  variant = 'default',
}) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  const base =
    variant === 'on-dark'
      ? 'border-white/20 text-white hover:bg-white/10'
      : 'border-[#E5E7EB] text-[#111111] hover:bg-[#F5F5F5] dark:border-[#333333] dark:text-white dark:hover:bg-[#1a1a1a]';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`inline-flex items-center justify-center w-9 h-9 rounded-full border transition-colors duration-200 cursor-pointer ${base} ${className}`}
    >
      {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </button>
  );
};
