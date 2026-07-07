import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-white/70 backdrop-blur-xl border-b border-foreground/10 shadow-lg shadow-black/5"
          : "bg-gradient-to-b from-white/20 to-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
        <motion.a
          href="#hero"
          className="relative text-xl md:text-2xl font-bold tracking-tight"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="gradient-text">&lt;YD</span>
          <span className="text-foreground/50"> /&gt;</span>
        </motion.a>

        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.4 }}
              className="relative px-4 py-2 text-sm text-foreground/60 hover:text-foreground transition-colors group"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-purple-400 rounded-full transition-all duration-300 group-hover:w-6" />
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Button
              size="sm"
              className="ml-2 rounded-full bg-gradient-to-r from-primary via-primary to-accent hover:from-primary/90 hover:via-primary/90 hover:to-accent/90 shadow-lg shadow-primary/20 text-white"
            >
              Hire Me
            </Button>
          </motion.a>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-foreground/10 bg-white/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 rounded-lg text-foreground/60 hover:text-foreground hover:bg-primary/5 transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <a href="#contact" onClick={() => setMobileOpen(false)}>
              <Button className="w-full mt-2 rounded-full bg-gradient-to-r from-primary via-primary to-accent text-white">
                Hire Me
              </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
