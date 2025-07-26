export default function Activities() {
  return (
    <div className="min-h-screen bg-background text-foreground py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-background border border-delco-neutral-200 dark:border-delco-neutral-800 rounded-2xl shadow-lg p-12">
          
          {/* Coming Soon Badge */}
          <div className="inline-block bg-gradient-to-r from-delco-pink to-delco-purple text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide mb-8 animate-pulse">
            Coming Soon
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl font-serif font-bold mb-6">
            <span className="relative inline-block group cursor-pointer transition-all duration-300 hover:scale-105 hover:drop-shadow-lg">
              <span className="font-roboto text-delco-teal transition-colors duration-300 group-hover:text-delco-teal-400">delco</span><span className="font-script text-delco-pink transition-colors duration-300 group-hover:text-delco-pink-400">SEWS</span>
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 transition-all duration-300 group-hover:h-1"
                   style={{
                     backgroundImage: 'repeating-linear-gradient(90deg, var(--delco-purple) 0px, var(--delco-purple) 8px, transparent 8px, transparent 16px)',
                   }}>
              </div>
            </span> Activities
          </h1>
          
          {/* Witty Message */}
          <div className="space-y-4 text-lg leading-relaxed max-w-2xl mx-auto">
            <p className="text-foreground">
              🎉 We&apos;re busy planning some seriously fun sewing shenanigans! 
            </p>
            <p className="text-delco-neutral-600 dark:text-delco-neutral-400">
              Think workshops where you actually finish projects, community events where everyone leaves with something amazing, and challenges that are more &quot;fun Friday night&quot; than &quot;final exam.&quot;
            </p>
            <p className="text-delco-pink font-medium">
              Warning: Side effects may include uncontrollable fabric hoarding and the sudden urge to make gifts for everyone you know.
            </p>
          </div>
          
          {/* Call to Action */}
          <div className="mt-8">
            <a 
              href="mailto:info@delcosews.com?subject=Activities%20Inquiry&body=Hi%20Andrea!%20I%27d%20love%20to%20know%20more%20about%20your%20upcoming%20activities." 
              className="inline-block bg-delco-teal text-white px-8 py-3 rounded-lg font-medium hover:bg-delco-teal-600 transition-colors duration-200"
            >
              Join the Fun List
            </a>
          </div>
          
        </div>
      </div>
    </div>
  )
}