"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    setMounted(true)
    const isDarkMode = document.documentElement.classList.contains("dark")
    setIsDark(isDarkMode)
  }, [])

  const toggleTheme = () => {
    const html = document.documentElement
    const newIsDark = !isDark

    if (newIsDark) {
      html.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      html.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }

    setIsDark(newIsDark)
  }

  if (!mounted) return null

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-serif font-bold text-primary hover-underline">
            Ankit V
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium transition-smooth hover:text-primary">
              About
            </a>
            <a href="#services" className="text-sm font-medium transition-smooth hover:text-primary">
              Services
            </a>
            <a href="#projects" className="text-sm font-medium transition-smooth hover:text-primary">
              Projects
            </a>
            <a href="#contact" className="text-sm font-medium transition-smooth hover:text-primary">
              Contact
            </a>
          </nav>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-border hover:bg-secondary transition-smooth focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-5 h-5 text-primary" /> : <Moon className="w-5 h-5 text-primary" />}
          </button>
        </div>
      </div>
    </header>
  )
}
