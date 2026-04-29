'use client'

import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

import { ThemeName } from '@/shared/model/consts';
import { Button } from './button';

export const ThemeSwitch = () => {
  const { setTheme, theme } = useTheme();

  const switchTheme = () => {
    const newTheme = theme === ThemeName.Dark ? ThemeName.Light : ThemeName.Dark;

    setTheme(newTheme);
  }

  return (
    <Button
      variant='ghost'
      size='icon'
      onClick={switchTheme}
      suppressHydrationWarning
    >
      {theme === ThemeName.Dark ? (
        <Sun className='text-currentColor h-20 w-20' />
      ) : (
        <Moon className='text-currentColor h-20 w-20' />
      )}
    </Button>
  )
};

export default ThemeSwitch;
