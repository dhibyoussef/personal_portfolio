import { useEffect } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { TooltipProvider } from "@/components/ui/tooltip"
import "./App.css"

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark")
  }, [])

  return (
    <TooltipProvider>
      <div className="relative min-h-screen overflow-x-hidden">
        <div className="noise-bg" />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </TooltipProvider>
  )
}
