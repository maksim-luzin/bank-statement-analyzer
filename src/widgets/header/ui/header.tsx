'use client'
import dynamic from 'next/dynamic'

const ThemeSwitch = dynamic(
  () => import('@/shared/ui/components/theme-switch'),
  { ssr: false }
);

export const Header = () => (
  <header className='w-all sticky top-0 z-50 flex items-center justify-between border-0 border-b-2 border-foreground bg-background p-4'>
    <h1 className='text-2xl font-bold'>
      Аналізатор виписок з банківського рахунку
    </h1>
    <div className='flex items-center justify-end gap-2'>
      <ThemeSwitch />
    </div>
  </header>
);
