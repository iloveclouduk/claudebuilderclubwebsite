"use client"

import { AnimatedFolder } from "@/components/ui/3d-folder"
import { useState } from "react"

const portfolioData = [
  {
    title: "Hackathon Projects",
    projects: [
      {
        id: "1",
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop&crop=center",
        title: "AI Code Assistant"
      },
      {
        id: "2",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop&crop=center",
        title: "Smart Analytics"
      },
      {
        id: "3",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center",
        title: "Data Visualizer"
      },
    ]
  },
  {
    title: "Branding",
    projects: [
      {
        id: "4",
        image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop&crop=center",
        title: "Lumnia"
      },
      {
        id: "5",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop&crop=center",
        title: "Prism"
      },
      {
        id: "6",
        image: "https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?w=400&h=300&fit=crop&crop=center",
        title: "Vertex"
      },
    ]
  },
  {
    title: "Web Development",
    projects: [
      {
        id: "7",
        image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=300&fit=crop&crop=center",
        title: "E-commerce Platform"
      },
      {
        id: "8",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop&crop=center",
        title: "Portfolio Site"
      },
      {
        id: "9",
        image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=400&h=300&fit=crop&crop=center",
        title: "SaaS Dashboard"
      },
    ]
  }
]

export default function Demo3DFolderPage() {
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('dark', !isDark)
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'dark' : ''}`}>
      <div className="min-h-screen bg-background transition-colors duration-300">
        {/* Header */}
        <header className="border-b border-border">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-foreground">3D Folder Component Demo</h1>
            <button
              onClick={toggleTheme}
              className="px-4 py-2 rounded-lg border border-border bg-card text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              {isDark ? '☀️ Light' : '🌙 Dark'}
            </button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Beautiful 3D Folder Component
            </h2>
            <p className="text-lg text-muted-foreground">
              Interactive portfolio folders with smooth animations and orange theme
            </p>
          </div>

          {/* Demo Grid */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
              {portfolioData.map((folder) => (
                <AnimatedFolder
                  key={folder.title}
                  title={folder.title}
                  projects={folder.projects}
                  className="w-full max-w-sm"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-6 border-t border-border">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 rounded-lg border border-border bg-card">
                <h4 className="text-lg font-medium text-foreground mb-2">3D Animation</h4>
                <p className="text-muted-foreground">
                  Smooth CSS 3D transforms with realistic folder opening animation
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <h4 className="text-lg font-medium text-foreground mb-2">Interactive Lightbox</h4>
                <p className="text-muted-foreground">
                  Click on project cards to view them in a beautiful lightbox
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <h4 className="text-lg font-medium text-foreground mb-2">Orange Theme</h4>
                <p className="text-muted-foreground">
                  Beautiful orange gradient colors that work in light and dark modes
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <h4 className="text-lg font-medium text-foreground mb-2">Responsive Design</h4>
                <p className="text-muted-foreground">
                  Fully responsive component that works on all device sizes
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Instructions */}
        <section className="py-16 px-6 bg-muted/50">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-semibold text-foreground mb-4">How to Use</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>🎯 <strong>Hover</strong> over any folder to see the 3D animation</p>
              <p>🖱️ <strong>Click</strong> on project cards to open them in lightbox</p>
              <p>⌨️ Use <kbd className="px-2 py-1 bg-background border rounded">←</kbd> <kbd className="px-2 py-1 bg-background border rounded">→</kbd> keys to navigate</p>
              <p>🌙 Toggle the theme to see how it looks in dark mode</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}