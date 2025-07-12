import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground">
          Welcome to <span className="relative inline-block group cursor-pointer transition-all duration-300 hover:scale-105 hover:drop-shadow-lg">
            <span className="font-roboto text-delco-teal transition-colors duration-300 group-hover:text-delco-teal-400">delco</span><span className="font-script text-delco-pink transition-colors duration-300 group-hover:text-delco-pink-400">SEWS</span>
            <div className="absolute -bottom-1 left-0 right-0 h-0.5 transition-all duration-300 group-hover:h-1"
                 style={{
                   backgroundImage: 'repeating-linear-gradient(90deg, var(--delco-purple) 0px, var(--delco-purple) 8px, transparent 8px, transparent 16px)',
                 }}>
            </div>
          </span>
        </h1>
        <p className="text-xl text-delco-neutral-600 dark:text-delco-neutral-400 max-w-2xl">
          Where we learn, create and inspire the magic of sewing!
        </p>
        <div className="flex justify-center mt-8">
          <a href="mailto:andrea@delcosews.com?subject=Request%20More%20Info&body=Hi%20there!%20I%27d%20love%20to%20learn%20more%20about%20delcoSEWS%20and%20how%20to%20get%20involved." className="bg-primary text-white px-8 py-4 rounded-lg font-medium border-2 border-transparent hover:border-delco-pink hover:text-delco-pink hover:bg-transparent transition-all duration-300 inline-block">
            Request more info
          </a>
        </div>
      </div>
    </main>
  );
}
