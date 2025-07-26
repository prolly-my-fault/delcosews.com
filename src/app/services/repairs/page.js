export default function Repairs() {
  return (
    <div className="min-h-screen bg-background text-foreground py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-background border border-delco-neutral-200 dark:border-delco-neutral-800 rounded-2xl shadow-lg p-12">
          
          <div className="inline-block bg-gradient-to-r from-delco-purple to-delco-teal text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide mb-8 animate-pulse">
            Coming Soon
          </div>
          
          <h1 className="text-4xl font-serif font-bold mb-6 text-foreground">
            Repairs
          </h1>
          
          <div className="space-y-4 text-lg leading-relaxed max-w-2xl mx-auto">
            <p className="text-foreground">
              🔧 Your favorite garment&apos;s second chance at life starts here!
            </p>
            <p className="text-delco-neutral-600 dark:text-delco-neutral-400">
              Rips, tears, broken zippers, missing buttons – we&apos;ve seen it all and fixed it all. Don&apos;t let a wardrobe malfunction be the end of a beloved piece. We believe in sustainable fashion and giving your clothes the love they deserve.
            </p>
          </div>
          
          <div className="mt-8">
            <a 
              href="mailto:info@delcosews.com?subject=Clothing%20Repairs&body=Hi%20Andrea!%20I%20have%20something%20that%20needs%20repair." 
              className="inline-block bg-delco-purple text-white px-8 py-3 rounded-lg font-medium hover:bg-delco-purple-600 transition-colors duration-200"
            >
              Save My Favorite!
            </a>
          </div>
          
        </div>
      </div>
    </div>
  )
}