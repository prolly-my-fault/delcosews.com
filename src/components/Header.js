import Link from 'next/link'

export default function Header() {
  return (
    <header className="w-full border-b border-delco-neutral-200 dark:border-delco-neutral-800 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative inline-block transition-all duration-300 group-hover:scale-105">
              <span className="font-roboto text-delco-teal text-xl font-bold transition-colors duration-300 group-hover:text-delco-teal-400">Delco</span><span className="font-script text-delco-pink text-xl font-bold transition-colors duration-300 group-hover:text-delco-pink-400">SEWS</span>
              <div className="absolute -bottom-0.5 left-0 right-0 h-0.5 transition-all duration-300 group-hover:h-1"
                   style={{
                     backgroundImage: 'repeating-linear-gradient(90deg, var(--delco-purple) 0px, var(--delco-purple) 6px, transparent 6px, transparent 12px)',
                   }}>
              </div>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-delco-teal transition-colors duration-200 font-medium">
              Home
            </Link>
            <Link href="/about" className="text-foreground hover:text-delco-teal transition-colors duration-200 font-medium">
              About
            </Link>
            <Link href="/events" className="text-foreground hover:text-delco-teal transition-colors duration-200 font-medium">
              Events
            </Link>
            <Link href="/contact" className="text-foreground hover:text-delco-teal transition-colors duration-200 font-medium">
              Contact
            </Link>
          </nav>

          <button className="md:hidden p-2 rounded-lg hover:bg-delco-neutral-100 dark:hover:bg-delco-neutral-800 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}