'use client'

import { useEffect, useState } from 'react'
import SunIcon from './ui/SunIcon'
import MoonIcon from './ui/MoonIcon'
import { useTheme } from 'next-themes'

const ThemeToggleButton = () => {
  const [hasMounted, setHasMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  function toggleTheme() {
    if (resolvedTheme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  useEffect(() => {
    setHasMounted(true)
  }, [])

  const isLightTheme = resolvedTheme === 'light'

  return (
    hasMounted && (
      <button
        onClick={toggleTheme}
        className="h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-theme-btn-bg/85 px-3 py-3 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bd focus-visible:ring-offset-2 dark:bg-theme-btn-bg"
        aria-label="Toggle theme"
      >
        <span
          className={`flex w-16 ${isLightTheme ? 'animate-slide-left' : 'animate-slide-right'
            } justify-between transition-transform`}
        >
          <SunIcon className="text-theme-btn-fg" />
          <MoonIcon className="text-theme-btn-fg" />
        </span>
      </button>
    )
  )
}

export default ThemeToggleButton
