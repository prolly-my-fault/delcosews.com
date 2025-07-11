import ColorShowcase from '@/components/ColorShowcase'

export const metadata = {
  title: "Design System - DelcoSEWS",
  description: "DelcoSEWS design system showcase with brand colors and components",
}

export default function DesignSystemPage() {
  return (
    <main className="min-h-screen bg-background">
      <ColorShowcase />
    </main>
  )
}