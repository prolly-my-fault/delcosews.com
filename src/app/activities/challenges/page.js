export default function SewingChallenges() {
  return (
    <div className="min-h-screen bg-background text-foreground py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-background border border-delco-neutral-200 dark:border-delco-neutral-800 rounded-2xl shadow-lg p-12">
          
          <div className="inline-block bg-gradient-to-r from-delco-purple to-delco-teal text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide mb-8 animate-pulse">
            Coming Soon
          </div>
          
          <h1 className="text-4xl font-serif font-bold mb-6 text-foreground">
            Sewing Challenges
          </h1>
          
          <div className="space-y-4 text-lg leading-relaxed max-w-2xl mx-auto">
            <p className="text-foreground">
              🏅 For when your stash needs a purpose and your skills need a push!
            </p>
            <p className="text-delco-neutral-600 dark:text-delco-neutral-400">
              Monthly challenges designed to stretch your creativity, use up that fabric you&apos;ve been &quot;saving for something special,&quot; and give you bragging rights in the best possible way. No pressure, just fun goals and lots of cheerleading.
            </p>
          </div>
          
          <div className="mt-8">
            <a 
              href="mailto:info@delcosews.com?subject=Sewing%20Challenges&body=Hi%20Andrea!%20I%27m%20interested%20in%20sewing%20challenges." 
              className="inline-block bg-delco-purple text-white px-8 py-3 rounded-lg font-medium hover:bg-delco-purple-600 transition-colors duration-200"
            >
              Challenge Accepted!
            </a>
          </div>
          
        </div>
      </div>
    </div>
  )
}