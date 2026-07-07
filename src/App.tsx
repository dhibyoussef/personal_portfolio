
import { useState, useEffect, createContext, useContext } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Timeline from "./components/Timeline"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import BackToTop from "./components/BackToTop"
import { TooltipProvider } from "@/components/ui/tooltip"
import "./App.css"

type Theme = "dark" | "light"

const ThemeContext = createContext<{ theme: Theme; toggle: () => void }>({
  theme: "dark",
  toggle: () => { },
})

export const useTheme = () => useContext(ThemeContext)

export default function App() {

  const [theme, setTheme] = useState<Theme>("dark")

  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null
    if (stored) setTheme(stored)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle("dark", theme === "dark")
    localStorage.setItem("theme", theme)
  }, [theme])

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"))


  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      <TooltipProvider>
        <div className="relative min-h-screen overflow-x-hidden">
          <div className="noise-bg" />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Timeline />
            <Projects />
            <Contact />
          </main>
          <Footer />
          <BackToTop />
        </div>
      </TooltipProvider>
    </ThemeContext.Provider>
  )
}
