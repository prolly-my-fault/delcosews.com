'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-background border border-delco-neutral-200 dark:border-delco-neutral-800 rounded-2xl shadow-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-2/3 p-8 lg:pr-4 text-center lg:text-left">
              <h1 className="text-6xl font-serif font-bold mb-4">
                <span className="text-delco-teal">4</span>
                <span className="text-delco-teal">0</span>
                <span className="text-delco-teal">4</span>
              </h1>
              <h2 className="text-3xl font-script text-delco-pink mb-6">Page Not Found</h2>
              
              <div className="space-y-4 text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
                <p className="text-foreground">
                  Oops! It looks like you&apos;ve stumbled into the sewing room of the internet. Unfortunately, there&apos;s no pattern for this page.
                </p>
                <p className="text-delco-neutral-600 dark:text-delco-neutral-400">
                  But don&apos;t worry, our sewing machine is always running. Let&apos;s get you back on track!
                </p>
              </div>
              
              <div className="mt-8 space-y-4">
                <Link 
                  href="/" 
                  className="inline-block bg-delco-teal text-white px-8 py-3 rounded-lg font-medium hover:bg-delco-teal-600 transition-colors duration-200"
                >
                  Go back to homepage
                </Link>
                
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm">
                  <Link href="/about" className="text-delco-pink hover:text-delco-teal transition-colors duration-200 font-medium relative group/nav">
                    <span>About Us</span>
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 transition-all duration-300 opacity-0 group-hover/nav:opacity-100"
                         style={{
                           backgroundImage: 'repeating-linear-gradient(90deg, var(--delco-purple) 0px, var(--delco-purple) 4px, transparent 4px, transparent 8px)',
                         }}>
                    </div>
                  </Link>
                  <Link href="/lessons" className="text-delco-pink hover:text-delco-teal transition-colors duration-200 font-medium relative group/nav">
                    <span>Lessons</span>
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 transition-all duration-300 opacity-0 group-hover/nav:opacity-100"
                         style={{
                           backgroundImage: 'repeating-linear-gradient(90deg, var(--delco-purple) 0px, var(--delco-purple) 4px, transparent 4px, transparent 8px)',
                         }}>
                    </div>
                  </Link>
                  <Link href="/activities" className="text-delco-pink hover:text-delco-teal transition-colors duration-200 font-medium relative group/nav">
                    <span>Activities</span>
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 transition-all duration-300 opacity-0 group-hover/nav:opacity-100"
                         style={{
                           backgroundImage: 'repeating-linear-gradient(90deg, var(--delco-purple) 0px, var(--delco-purple) 4px, transparent 4px, transparent 8px)',
                         }}>
                    </div>
                  </Link>
                  <Link href="/services" className="text-delco-pink hover:text-delco-teal transition-colors duration-200 font-medium relative group/nav">
                    <span>Services</span>
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 transition-all duration-300 opacity-0 group-hover/nav:opacity-100"
                         style={{
                           backgroundImage: 'repeating-linear-gradient(90deg, var(--delco-purple) 0px, var(--delco-purple) 4px, transparent 4px, transparent 8px)',
                         }}>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/3 p-8 flex justify-center">
              <div className="relative">
                <Image
                  src="/404.jpg"
                  alt="Oh brother! Page not found"
                  width={350}
                  height={350}
                  className="rounded-full object-cover shadow-lg border-4 border-delco-pink"
                />
                <div className="absolute -top-4 -right-4 bg-delco-pink text-white rounded-full p-3 shadow-lg flex items-center space-x-1">
                  <span 
                    className="text-lg"
                    style={{
                      animation: 'bounce-thread 1.5s ease-in-out infinite'
                    }}
                  >
                    🧵
                  </span>
                  <span 
                    className="text-lg"
                    style={{
                      animation: 'snip-scissors 2s ease-in-out infinite',
                      transformOrigin: 'center'
                    }}
                  >
                    ✂️
                  </span>
                  
                  <style jsx>{`
                    @keyframes bounce-thread {
                      0%, 100% { 
                        transform: translateY(0) rotate(0deg); 
                        opacity: 1; 
                      }
                      50% { 
                        transform: translateY(-4px) rotate(10deg); 
                        opacity: 0.8; 
                      }
                    }
                    @keyframes snip-scissors {
                      0%, 100% { 
                        transform: rotate(0deg) scale(1); 
                      }
                      25% { 
                        transform: rotate(-15deg) scale(1.1); 
                      }
                      75% { 
                        transform: rotate(15deg) scale(1.1); 
                      }
                    }
                  `}</style>
                </div>
                <div className="absolute -bottom-2 -left-2 bg-delco-teal text-white rounded-full px-3 py-1 text-sm font-medium shadow-lg">
                  Oops!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}