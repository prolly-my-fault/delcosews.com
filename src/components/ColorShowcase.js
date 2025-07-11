export default function ColorShowcase() {
  const colorPalettes = [
    {
      name: "DelcoSEWS Teal",
      base: "delco-teal",
      shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]
    },
    {
      name: "DelcoSEWS Pink", 
      base: "delco-pink",
      shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]
    },
    {
      name: "DelcoSEWS Purple",
      base: "delco-purple", 
      shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]
    },
    {
      name: "DelcoSEWS Neutrals",
      base: "delco-neutral",
      shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]
    }
  ]

  return (
    <div className="p-8 space-y-8">
      <h2 className="text-3xl font-serif font-bold text-foreground mb-8">
        DelcoSEWS Design System
      </h2>
      
      {colorPalettes.map((palette) => (
        <div key={palette.name} className="space-y-4">
          <h3 className="text-xl font-medium text-foreground">{palette.name}</h3>
          <div className="grid grid-cols-11 gap-2">
            {palette.shades.map((shade) => (
              <div key={shade} className="space-y-2">
                <div 
                  className={`w-full h-16 rounded-lg bg-${palette.base}-${shade} border border-delco-neutral-200 dark:border-delco-neutral-800`}
                />
                <div className="text-center">
                  <div className="text-sm font-medium text-foreground">{shade}</div>
                  <div className={`text-xs text-${palette.base}-${shade}`}>
                    {palette.base}-{shade}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      
      <div className="mt-12 space-y-4">
        <h3 className="text-xl font-medium text-foreground">Semantic Colors</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="space-y-2">
            <div className="w-full h-16 rounded-lg bg-primary border border-delco-neutral-200 dark:border-delco-neutral-800" />
            <div className="text-center text-sm font-medium text-foreground">Primary (Teal)</div>
          </div>
          <div className="space-y-2">
            <div className="w-full h-16 rounded-lg bg-secondary border border-delco-neutral-200 dark:border-delco-neutral-800" />
            <div className="text-center text-sm font-medium text-foreground">Secondary (Pink)</div>
          </div>
          <div className="space-y-2">
            <div className="w-full h-16 rounded-lg bg-accent border border-delco-neutral-200 dark:border-delco-neutral-800" />
            <div className="text-center text-sm font-medium text-foreground">Accent (Purple)</div>
          </div>
        </div>
      </div>
    </div>
  )
}