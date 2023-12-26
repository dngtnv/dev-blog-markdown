'use client'

import { useEffect, useState } from 'react'
import SunIcon from './ui/SunIcon'
import MoonIcon from './ui/MoonIcon'

const ThemeToggleButton = () => {
  const [hasMounted, setHasMounted] = useState(false)
  const isBrowser = typeof window !== 'undefined'
  const storedTheme = isBrowser ? window.localStorage.getItem('theme') : null
  const [theme, setTheme] = useState(() => {
    if (storedTheme) {
      return storedTheme
    }
    if (isBrowser) {
      const userMedia = window.matchMedia('(prefers-color-scheme: dark)')
      return userMedia.matches ? 'dark' : 'light'
    }
  })

  function toggleTheme() {
    const updatedTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(updatedTheme)
    window.localStorage.setItem('theme', updatedTheme)
  }

  useEffect(() => {
    setHasMounted(true)
  }, [])

  useEffect(() => {
    const root = window.document.documentElement
    root.dataset.theme = theme
  }, [theme])

  const isLightTheme = theme === 'light'

  return (
    hasMounted && (
      <button
        onClick={toggleTheme}
        className="rounded-lg bg-themebtn px-3 py-3 text-white"
      >
        {isLightTheme ? (
          <MoonIcon className="text-secondary" />
        ) : (
          <SunIcon className="text-[#e0af68]" />
        )}
      </button>
    )
  )
}

export default ThemeToggleButton
