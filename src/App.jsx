import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Logos from './components/Logos'
import Solutions from './components/Solutions'
import Services from './components/Services'
import Process from './components/Process'
import Results from './components/Results'
import Pricing from './components/Pricing'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(124,58,237,0.08),transparent_60%)]">
      <Navbar />
      <main>
        <Hero />
        <Logos />
        <Solutions />
        <Services />
        <Process />
        <Results />
        <Pricing />
        <CTA />
      </main>
      <footer className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} Auraloom AI. All rights reserved.</p>
            <div className="text-sm text-gray-500">Built with AI sales systems</div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
