'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    // Read current theme from DOM
    const isDark = document.documentElement.classList.contains('dark')
    setTheme(isDark ? 'dark' : 'light')
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.theme = newTheme
    
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className={`w-full border-b border-delco-neutral-200 dark:border-delco-neutral-800 sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md shadow-lg' 
        : 'bg-background/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center transition-all duration-300 ${
          isScrolled ? 'h-14' : 'h-16'
        }`}>
          <Link href="/" className="flex items-center space-x-3 group" onClick={closeMenu}>
            <div className={`relative inline-block transition-all duration-300 group-hover:scale-105 ${
              isScrolled ? 'scale-90' : 'scale-100'
            }`}>
              <span className={`font-roboto text-delco-teal font-bold transition-all duration-300 group-hover:text-delco-teal-400 ${
                isScrolled ? 'text-lg' : 'text-xl'
              }`}>delco</span><span className={`font-script text-delco-pink font-bold transition-all duration-300 group-hover:text-delco-pink-400 ${
                isScrolled ? 'text-lg' : 'text-xl'
              }`}>SEWS</span>
              <div className="absolute -bottom-0.5 left-0 right-0 h-0.5 transition-all duration-300 group-hover:h-1"
                   style={{
                     backgroundImage: 'repeating-linear-gradient(90deg, var(--delco-purple) 0px, var(--delco-purple) 6px, transparent 6px, transparent 12px)',
                   }}>
              </div>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8 ml-12">
            <Link href="/" className="text-foreground hover:text-delco-teal transition-colors duration-200 font-medium relative group/nav">
              <span>Home</span>
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 transition-all duration-300 opacity-0 group-hover/nav:opacity-100"
                   style={{
                     backgroundImage: 'repeating-linear-gradient(90deg, var(--delco-purple) 0px, var(--delco-purple) 4px, transparent 4px, transparent 8px)',
                   }}>
              </div>
            </Link>
            
            <div className="relative group">
              <Link href="/lessons" className="text-foreground hover:text-delco-teal transition-colors duration-200 font-medium flex items-center space-x-1 relative group/nav">
                <span>Lessons</span>
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 transition-all duration-300 opacity-0 group-hover/nav:opacity-100"
                     style={{
                       backgroundImage: 'repeating-linear-gradient(90deg, var(--delco-purple) 0px, var(--delco-purple) 4px, transparent 4px, transparent 8px)',
                     }}>
                </div>
              </Link>
              <div className="absolute top-full left-0 mt-2 w-48 bg-background/95 backdrop-blur-md border border-delco-neutral-200 dark:border-delco-neutral-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link href="/lessons/beginner" className="block px-4 py-3 text-sm hover:bg-hover-bg hover:text-delco-teal transition-colors">
                  <span className="relative group/text inline-block">
                    Beginner Sewing
                    <div className="absolute -bottom-1 left-0 h-0.5 transition-all duration-300 opacity-0 group-hover/text:opacity-100 w-full"
                         style={{
                           backgroundImage: 'repeating-linear-gradient(90deg, var(--delco-purple) 0px, var(--delco-purple) 3px, transparent 3px, transparent 6px)',
                         }}>
                    </div>
                  </span>
                </Link>
                <Link href="/lessons/intermediate" className="block px-4 py-3 text-sm hover:bg-hover-bg hover:text-delco-teal transition-colors">
                  <span className="relative group/text" style={{display: 'inline-block', whiteSpace: 'nowrap'}}>
                    Intermediate Techniques
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 transition-all duration-300 opacity-0 group-hover/text:opacity-100"
                         style={{
                           backgroundImage: 'repeating-linear-gradient(90deg, var(--delco-purple) 0px, var(--delco-purple) 3px, transparent 3px, transparent 6px)',
                         }}>
                    </div>
                  </span>
                </Link>
                <Link href="/lessons/advanced" className="block px-4 py-3 text-sm hover:bg-hover-bg hover:text-delco-teal transition-colors">
                  <span className="relative group/text inline-block">
                    Advanced Projects
                    <div className="absolute -bottom-1 left-0 h-0.5 transition-all duration-300 opacity-0 group-hover/text:opacity-100 w-full"
                         style={{
                           backgroundImage: 'repeating-linear-gradient(90deg, var(--delco-purple) 0px, var(--delco-purple) 3px, transparent 3px, transparent 6px)',
                         }}>
                    </div>
                  </span>
                </Link>
              </div>
            </div>

            <div className="relative group">
              <Link href="/activities" className="text-foreground hover:text-delco-teal transition-colors duration-200 font-medium flex items-center space-x-1 relative group/nav">
                <span>Activities</span>
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 transition-all duration-300 opacity-0 group-hover/nav:opacity-100"
                     style={{
                       backgroundImage: 'repeating-linear-gradient(90deg, var(--delco-purple) 0px, var(--delco-purple) 4px, transparent 4px, transparent 8px)',
                     }}>
                </div>
              </Link>
              <div className="absolute top-full left-0 mt-2 w-48 bg-background/95 backdrop-blur-md border border-delco-neutral-200 dark:border-delco-neutral-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link href="/activities/workshops" className="block px-4 py-3 text-sm hover:bg-hover-bg hover:text-delco-teal transition-colors">
                  <span className="relative group/text inline-block">
                    Workshops
                    <div className="absolute -bottom-1 left-0 h-0.5 transition-all duration-300 opacity-0 group-hover/text:opacity-100 w-full"
                         style={{
                           backgroundImage: 'repeating-linear-gradient(90deg, var(--delco-purple) 0px, var(--delco-purple) 3px, transparent 3px, transparent 6px)',
                         }}>
                    </div>
                  </span>
                </Link>
                <Link href="/activities/events" className="block px-4 py-3 text-sm hover:bg-hover-bg hover:text-delco-teal transition-colors">
                  <span className="relative group/text inline-block">
                    Community Events
                    <div className="absolute -bottom-1 left-0 h-0.5 transition-all duration-300 opacity-0 group-hover/text:opacity-100 w-full"
                         style={{
                           backgroundImage: 'repeating-linear-gradient(90deg, var(--delco-purple) 0px, var(--delco-purple) 3px, transparent 3px, transparent 6px)',
                         }}>
                    </div>
                  </span>
                </Link>
                <Link href="/activities/challenges" className="block px-4 py-3 text-sm hover:bg-hover-bg hover:text-delco-teal transition-colors">
                  <span className="relative group/text inline-block">
                    Sewing Challenges
                    <div className="absolute -bottom-1 left-0 h-0.5 transition-all duration-300 opacity-0 group-hover/text:opacity-100 w-full"
                         style={{
                           backgroundImage: 'repeating-linear-gradient(90deg, var(--delco-purple) 0px, var(--delco-purple) 3px, transparent 3px, transparent 6px)',
                         }}>
                    </div>
                  </span>
                </Link>
              </div>
            </div>

            <div className="relative group">
              <Link href="/services" className="text-foreground hover:text-delco-teal transition-colors duration-200 font-medium flex items-center space-x-1 relative group/nav">
                <span>Services</span>
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 transition-all duration-300 opacity-0 group-hover/nav:opacity-100"
                     style={{
                       backgroundImage: 'repeating-linear-gradient(90deg, var(--delco-purple) 0px, var(--delco-purple) 4px, transparent 4px, transparent 8px)',
                     }}>
                </div>
              </Link>
              <div className="absolute top-full left-0 mt-2 w-48 bg-background/95 backdrop-blur-md border border-delco-neutral-200 dark:border-delco-neutral-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link href="/services/alterations" className="block px-4 py-3 text-sm hover:bg-hover-bg hover:text-delco-teal transition-colors">
                  <span className="relative group/text inline-block">
                    Alterations
                    <div className="absolute -bottom-1 left-0 h-0.5 transition-all duration-300 opacity-0 group-hover/text:opacity-100 w-full"
                         style={{
                           backgroundImage: 'repeating-linear-gradient(90deg, var(--delco-purple) 0px, var(--delco-purple) 3px, transparent 3px, transparent 6px)',
                         }}>
                    </div>
                  </span>
                </Link>
                <Link href="/services/custom" className="block px-4 py-3 text-sm hover:bg-hover-bg hover:text-delco-teal transition-colors">
                  <span className="relative group/text inline-block">
                    Custom Sewing
                    <div className="absolute -bottom-1 left-0 h-0.5 transition-all duration-300 opacity-0 group-hover/text:opacity-100 w-full"
                         style={{
                           backgroundImage: 'repeating-linear-gradient(90deg, var(--delco-purple) 0px, var(--delco-purple) 3px, transparent 3px, transparent 6px)',
                         }}>
                    </div>
                  </span>
                </Link>
                <Link href="/services/repairs" className="block px-4 py-3 text-sm hover:bg-hover-bg hover:text-delco-teal transition-colors">
                  <span className="relative group/text inline-block">
                    Repairs
                    <div className="absolute -bottom-1 left-0 h-0.5 transition-all duration-300 opacity-0 group-hover/text:opacity-100 w-full"
                         style={{
                           backgroundImage: 'repeating-linear-gradient(90deg, var(--delco-purple) 0px, var(--delco-purple) 3px, transparent 3px, transparent 6px)',
                         }}>
                    </div>
                  </span>
                </Link>
              </div>
            </div>

            <Link href="/about" className="text-foreground hover:text-delco-teal transition-colors duration-200 font-medium relative group/nav">
              <span>About Us</span>
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 transition-all duration-300 opacity-0 group-hover/nav:opacity-100"
                   style={{
                     backgroundImage: 'repeating-linear-gradient(90deg, var(--delco-purple) 0px, var(--delco-purple) 4px, transparent 4px, transparent 8px)',
                   }}>
              </div>
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-3 ml-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-64 px-4 py-2 pl-10 text-sm bg-input-bg text-foreground border border-delco-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-delco-teal-500 focus:border-transparent transition-all duration-200"
              />
              <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-delco-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-hover-bg hover:text-delco-teal transition-colors"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              title={`Current: ${theme} mode`}
            >
              {theme === 'light' ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>

            <button className="px-4 py-2 text-sm font-medium text-delco-teal border border-delco-teal rounded-lg hover:bg-delco-teal hover:text-white transition-all duration-200">
              Log In
            </button>
          </div>

          <div className="flex items-center space-x-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-hover-bg hover:text-delco-teal transition-colors"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>
            
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg hover:bg-hover-bg hover:text-delco-teal transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
                <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
              </div>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-delco-neutral-200 dark:border-delco-neutral-800 bg-background/95 backdrop-blur-sm">
            <nav className="px-4 py-4 space-y-3">
              <Link
                href="/"
                className="block py-2 text-foreground hover:text-delco-teal transition-colors duration-200 font-medium"
                onClick={closeMenu}
              >
                Home
              </Link>
              
              <div className="space-y-2">
                <Link href="/lessons" className="block py-2 text-foreground hover:text-delco-teal transition-colors duration-200 font-medium" onClick={closeMenu}>
                  Lessons
                </Link>
                <Link href="/lessons/beginner" className="block py-1 pl-4 text-sm text-delco-neutral-600 dark:text-delco-neutral-400 hover:text-delco-teal transition-colors" onClick={closeMenu}>
                  Beginner Sewing
                </Link>
                <Link href="/lessons/intermediate" className="block py-1 pl-4 text-sm text-delco-neutral-600 dark:text-delco-neutral-400 hover:text-delco-teal transition-colors" onClick={closeMenu}>
                  Intermediate Techniques
                </Link>
                <Link href="/lessons/advanced" className="block py-1 pl-4 text-sm text-delco-neutral-600 dark:text-delco-neutral-400 hover:text-delco-teal transition-colors" onClick={closeMenu}>
                  Advanced Projects
                </Link>
              </div>

              <div className="space-y-2">
                <Link href="/activities" className="block py-2 text-foreground hover:text-delco-teal transition-colors duration-200 font-medium" onClick={closeMenu}>
                  Activities
                </Link>
                <Link href="/activities/workshops" className="block py-1 pl-4 text-sm text-delco-neutral-600 dark:text-delco-neutral-400 hover:text-delco-teal transition-colors" onClick={closeMenu}>
                  Workshops
                </Link>
                <Link href="/activities/events" className="block py-1 pl-4 text-sm text-delco-neutral-600 dark:text-delco-neutral-400 hover:text-delco-teal transition-colors" onClick={closeMenu}>
                  Community Events
                </Link>
                <Link href="/activities/challenges" className="block py-1 pl-4 text-sm text-delco-neutral-600 dark:text-delco-neutral-400 hover:text-delco-teal transition-colors" onClick={closeMenu}>
                  Sewing Challenges
                </Link>
              </div>

              <div className="space-y-2">
                <Link href="/services" className="block py-2 text-foreground hover:text-delco-teal transition-colors duration-200 font-medium" onClick={closeMenu}>
                  Services
                </Link>
                <Link href="/services/alterations" className="block py-1 pl-4 text-sm text-delco-neutral-600 dark:text-delco-neutral-400 hover:text-delco-teal transition-colors" onClick={closeMenu}>
                  Alterations
                </Link>
                <Link href="/services/custom" className="block py-1 pl-4 text-sm text-delco-neutral-600 dark:text-delco-neutral-400 hover:text-delco-teal transition-colors" onClick={closeMenu}>
                  Custom Sewing
                </Link>
                <Link href="/services/repairs" className="block py-1 pl-4 text-sm text-delco-neutral-600 dark:text-delco-neutral-400 hover:text-delco-teal transition-colors" onClick={closeMenu}>
                  Repairs
                </Link>
              </div>

              <Link
                href="/about"
                className="block py-2 text-foreground hover:text-delco-teal transition-colors duration-200 font-medium"
                onClick={closeMenu}
              >
                About Us
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}