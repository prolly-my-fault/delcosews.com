export default function BeginnerLessons() {
  return (
    <div className="min-h-screen bg-background text-foreground py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-background border border-delco-neutral-200 dark:border-delco-neutral-800 rounded-2xl shadow-lg p-12">
          
          <div className="inline-block bg-gradient-to-r from-delco-teal to-delco-pink text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide mb-8 animate-pulse">
            Coming Soon
          </div>
          
          <h1 className="text-4xl font-serif font-bold mb-6 text-foreground">
            Beginner Sewing Lessons
          </h1>
          
          <div className="space-y-4 text-lg leading-relaxed max-w-2xl mx-auto">
            <p className="text-foreground">
              🪡 Starting from &quot;What&apos;s this pointy thing?&quot; and ending at &quot;I made this!&quot;
            </p>
            <p className="text-delco-neutral-600 dark:text-delco-neutral-400">
              Perfect for absolute beginners who think a bobbin is a type of bird. We&apos;ll cover everything from threading a machine without crying to making your first project that doesn&apos;t look like abstract art.
            </p>
          </div>
          
          <div className="mt-8">
            <a 
              href="mailto:info@delcosews.com?subject=Beginner%20Lessons&body=Hi%20Andrea!%20I%27m%20interested%20in%20beginner%20sewing%20lessons." 
              className="inline-block bg-delco-teal text-white px-8 py-3 rounded-lg font-medium hover:bg-delco-teal-600 transition-colors duration-200"
            >
              I&apos;m Ready to Learn!
            </a>
          </div>
          
        </div>
      </div>
    </div>
  )
}