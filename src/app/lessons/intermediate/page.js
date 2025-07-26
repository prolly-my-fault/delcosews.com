export default function IntermediateLessons() {
  return (
    <div className="min-h-screen bg-background text-foreground py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-background border border-delco-neutral-200 dark:border-delco-neutral-800 rounded-2xl shadow-lg p-12">
          
          <div className="inline-block bg-gradient-to-r from-delco-pink to-delco-purple text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide mb-8 animate-pulse">
            Coming Soon
          </div>
          
          <h1 className="text-4xl font-serif font-bold mb-6 text-foreground">
            Intermediate Techniques
          </h1>
          
          <div className="space-y-4 text-lg leading-relaxed max-w-2xl mx-auto">
            <p className="text-foreground">
              🎯 Ready to level up from &quot;it&apos;s functional&quot; to &quot;it&apos;s fabulous&quot;?
            </p>
            <p className="text-delco-neutral-600 dark:text-delco-neutral-400">
              For sewists who can thread a machine with their eyes closed but still get intimidated by zippers. We&apos;ll tackle those techniques that make you go &quot;How did they DO that?&quot; and turn you into the person others ask that question about.
            </p>
          </div>
          
          <div className="mt-8">
            <a 
              href="mailto:info@delcosews.com?subject=Intermediate%20Lessons&body=Hi%20Andrea!%20I%27m%20interested%20in%20intermediate%20sewing%20techniques." 
              className="inline-block bg-delco-pink text-white px-8 py-3 rounded-lg font-medium hover:bg-delco-pink-600 transition-colors duration-200"
            >
              Let&apos;s Get Technical!
            </a>
          </div>
          
        </div>
      </div>
    </div>
  )
}