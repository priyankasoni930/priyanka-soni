
import React from 'react';
import { useTheme } from '@/providers/ThemeProvider';
import { Moon, Sun } from 'lucide-react';
import { Toggle } from '@/components/ui/toggle';
import { Switch } from '@/components/ui/switch';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex items-center gap-2">
      <Switch 
        checked={theme === 'dark'} 
        onCheckedChange={toggleTheme}
        className="data-[state=checked]:bg-retro-purple data-[state=unchecked]:bg-retro-orange"
      />
      <div className="flex items-center justify-center w-8 h-8">
        {theme === 'dark' ? (
          <Moon className="w-5 h-5 text-retro-purple" />
        ) : (
          <Sun className="w-5 h-5 text-retro-orange" />
        )}
      </div>
    </div>
  );
};

export default ThemeToggle;
