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
        className="rounded-lg bg-theme-btn-bg/85 px-3 py-3 text-white dark:bg-theme-btn-bg"
      >
        {isLightTheme ? (
          <MoonIcon className="text-theme-btn-fg" />
        ) : (
          <SunIcon className="text-theme-btn-fg" />
        )}
      </button>
    )
  )
}

export default ThemeToggleButton
