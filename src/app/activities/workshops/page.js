export default function Workshops() {
  return (
    <div className="min-h-screen bg-background text-foreground py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-background border border-delco-neutral-200 dark:border-delco-neutral-800 rounded-2xl shadow-lg p-12">
          
          <div className="inline-block bg-gradient-to-r from-delco-teal to-delco-pink text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide mb-8 animate-pulse">
            Coming Soon
          </div>
          
          <h1 className="text-4xl font-serif font-bold mb-6 text-foreground">
            Workshops
          </h1>
          
          <div className="space-y-4 text-lg leading-relaxed max-w-2xl mx-auto">
            <p className="text-foreground">
              🎨 Where &quot;I&apos;ll just try this quickly&quot; turns into a full day of creative bliss!
            </p>
            <p className="text-delco-neutral-600 dark:text-delco-neutral-400">
              Intensive, project-focused sessions where you&apos;ll actually finish what you start. Revolutionary concept, we know! Come for the skills, stay for the community, leave with something amazing you made with your own hands.
            </p>
          </div>
          
          <div className="mt-8">
            <a 
              href="mailto:info@delcosews.com?subject=Workshop%20Inquiry&body=Hi%20Andrea!%20I%27d%20love%20to%20know%20about%20upcoming%20workshops." 
              className="inline-block bg-delco-teal text-white px-8 py-3 rounded-lg font-medium hover:bg-delco-teal-600 transition-colors duration-200"
            >
              Save My Spot!
            </a>
          </div>
          
        </div>
      </div>
    </div>
  )
}