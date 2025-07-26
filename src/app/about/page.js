'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Instagram } from 'lucide-react'

export default function About() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains('dark'))
    }

    checkDarkMode()

    const observer = new MutationObserver(checkDarkMode)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-background border border-delco-neutral-200 dark:border-delco-neutral-800 rounded-2xl shadow-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/3 p-8 flex justify-center items-start">
              <div className="relative">
                <Image
                  src="/andrea.jpg"
                  alt="Andrea from delcoSEWS"
                  width={300}
                  height={300}
                  className="rounded-full object-cover shadow-lg"
                  priority
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-delco-teal rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
              </div>
            </div>

            <div className="lg:w-2/3 p-8 lg:pl-4">
              <h1 className="text-4xl font-serif font-bold text-foreground mb-6">
                About <span className="relative inline-block group cursor-pointer transition-all duration-300 hover:scale-105 hover:drop-shadow-lg">
                  <span className="font-roboto text-delco-teal transition-colors duration-300 group-hover:text-delco-teal-400">delco</span><span className="font-script text-delco-pink transition-colors duration-300 group-hover:text-delco-pink-400">SEWS</span>
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 transition-all duration-300 group-hover:h-1"
                       style={{
                         backgroundImage: 'repeating-linear-gradient(90deg, var(--delco-purple) 0px, var(--delco-purple) 8px, transparent 8px, transparent 16px)',
                       }}>
                  </div>
                </span>
              </h1>

              <div className="max-w-none text-foreground space-y-6">
                <p className="text-lg leading-relaxed">
                  Hi, my name is Andrea and I love to sew! Actually, I am <span className="font-semibold text-delco-teal">OBSESSED</span> with sewing. I love to create, learn, upcycle, and share my love of all things handmade through my social media, in my partnerships with blogs and pattern companies, and through my new initiative delcoSEWS - where I connect with friends and neighbors in Delaware County, PA to share the joy of sewing.
                </p>

                <p className="leading-relaxed">
                  About me - I live in Media with my husband, two children, two dogs and our gecko. Both of our kids were born at Riddle Hospital but we&apos;ve also lived in Boston and Chester County. Delco has always been our home and we&apos;re so fortunate to have been able to move back here in 2024.
                </p>

                <p className="leading-relaxed">
                  I taught myself to sew in 2015 as a result of my then eight year old daughter wanting to dive into the hobby. So we bought a used sewing machine and I got to learning. She lost interest and moved on to other things, but for me, it was like I discovered my passion and what I was meant to do! Over the last ten years, I&apos;ve taught myself so much, which was fun but also hard work - sometimes it&apos;s tough to learn entirely through videos and pattern instructions, without human intervention. That&apos;s one of the reasons I started delcoSEWS - to help you jump start your sewing journey with lessons and activities.
                </p>

                <div className={`p-6 rounded-lg border ${isDark ? 'bg-delco-neutral-900 border-delco-neutral-800' : 'bg-delco-teal-50 border-delco-teal-200'}`}>
                  <h2 className="text-2xl font-serif font-bold mb-4">
                    What&apos;s <span className="relative inline-block group cursor-pointer transition-all duration-300 hover:scale-105 hover:drop-shadow-lg">
                      <span className="font-roboto text-delco-teal transition-colors duration-300 group-hover:text-delco-teal-400">delco</span><span className="font-script text-delco-pink transition-colors duration-300 group-hover:text-delco-pink-400">SEWS</span>
                      <div className="absolute -bottom-1 left-0 right-0 h-0.5 transition-all duration-300 group-hover:h-1"
                           style={{
                             backgroundImage: 'repeating-linear-gradient(90deg, var(--delco-purple) 0px, var(--delco-purple) 8px, transparent 8px, transparent 16px)',
                           }}>
                      </div>
                    </span> all about?
                  </h2>
                  <p className="leading-relaxed text-foreground">
                    I offer a wide variety of sewing learning and experiential activities, such as in studio and in home sewing lessons to get you stitching! I also do child birthday parties and adult gatherings where we create one of a kind treasures - you do the designing and I do the sewing! I also do &quot;sewspiration&quot; talks and presentations, create personal mementos from your treasured items, and offer &quot;sew 911&quot; tailoring services. Visit my full activities and services page for all the options!
                  </p>
                </div>

                <div className="text-center py-6">
                  <p className="text-lg mb-4">Please contact me for more information on any of these activities.</p>
                  <div className="space-y-4">
                    <a
                      href="mailto:info@delcosews.com?subject=About%20delcoSEWS&body=Hi%20Andrea!%20I%27d%20love%20to%20learn%20more%20about%20delcoSEWS."
                      className="inline-block bg-delco-teal text-white px-8 py-3 rounded-lg font-medium hover:bg-delco-teal-600 transition-colors duration-200"
                    >
                      Get in Touch
                    </a>
                    <div className="flex justify-center space-x-6 text-sm">
                      <a href="https://www.instagram.com/happy.things.here" className="text-delco-pink hover:text-delco-pink-600 transition-colors flex items-center space-x-2 group">
                        <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                        <span>Follow on Instagram</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="text-center pt-6 border-t border-delco-neutral-200 dark:border-delco-neutral-800">
                  <p className="font-script text-2xl text-delco-purple">Happy Sewing!</p>
                  <p className="font-medium text-delco-teal mt-2">Andrea @ delcoSEWS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
