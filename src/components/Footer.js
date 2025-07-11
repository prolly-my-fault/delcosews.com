import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full border-t border-delco-neutral-200 dark:border-delco-neutral-800 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-4 group">
              <div className="relative inline-block transition-all duration-300 group-hover:scale-105">
                <span className="font-roboto text-delco-teal text-2xl font-bold transition-colors duration-300 group-hover:text-delco-teal-400">delco</span><span className="font-script text-delco-pink text-2xl font-bold transition-colors duration-300 group-hover:text-delco-pink-400">SEWS</span>
                <div className="absolute -bottom-0.5 left-0 right-0 h-0.5 transition-all duration-300 group-hover:h-1"
                     style={{
                       backgroundImage: 'repeating-linear-gradient(90deg, var(--delco-purple) 0px, var(--delco-purple) 6px, transparent 6px, transparent 12px)',
                     }}>
                </div>
              </div>
            </Link>
            <p className="text-delco-neutral-600 dark:text-delco-neutral-400 max-w-md">
              Where we learn, create and inspire the magic of sewing! Join us to connect with fellow creators, share projects, and learn new skills.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <nav className="space-y-3">
              <Link href="/about" className="block text-delco-neutral-600 dark:text-delco-neutral-400 hover:text-delco-teal transition-colors duration-200">
                About Us
              </Link>
              <Link href="/events" className="block text-delco-neutral-600 dark:text-delco-neutral-400 hover:text-delco-teal transition-colors duration-200">
                Events
              </Link>
              <Link href="/contact" className="block text-delco-neutral-600 dark:text-delco-neutral-400 hover:text-delco-teal transition-colors duration-200">
                Contact
              </Link>
            </nav>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/delcosews" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-delco-neutral-600 dark:text-delco-neutral-400 hover:text-delco-pink transition-colors duration-200"
                aria-label="Follow us on Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://facebook.com/delcosews" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-delco-neutral-600 dark:text-delco-neutral-400 hover:text-delco-pink transition-colors duration-200"
                aria-label="Follow us on Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="https://threads.net/@delcosews" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-delco-neutral-600 dark:text-delco-neutral-400 hover:text-delco-pink transition-colors duration-200"
                aria-label="Follow us on Threads"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.781 3.631 2.695 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142c-.126-.742-.375-1.332-.742-1.756-.4-.462-.994-.744-1.743-.827-.284-.031-.575-.043-.863-.036-1.883.03-3.097.665-3.418 1.795l-1.982-.46c.5-1.746 2.308-2.818 5.382-2.865.43-.006.864.006 1.294.05 1.068.109 1.97.537 2.682 1.273.802.827 1.325 2.01 1.555 3.514.244 1.593.047 3.488-.544 5.28-.543 1.655-1.419 3.1-2.605 4.298C17.818 23.291 15.38 24 12.186 24z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-delco-neutral-200 dark:border-delco-neutral-800">
          <p className="text-center text-delco-neutral-600 dark:text-delco-neutral-400 text-sm">
            © {new Date().getFullYear()} delcoSEWS. Made with ❤️ for the Delaware County creative community.
          </p>
        </div>
      </div>
    </footer>
  )
}