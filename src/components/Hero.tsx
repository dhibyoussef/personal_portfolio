import { useEffect, useState } from "react"
import { motion, type Variants } from "framer-motion"
import { ArrowDown, Sparkles, Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
}

const words = ["Full Stack Developer", "UI Enthusiast", "Problem Solver", "Tech Innovator"]

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
      <div className="absolute inset-0 grid-overlay" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,oklch(0.55_0.22_280/0.08)_0%,transparent_60%),radial-gradient(ellipse_at_70%_50%,oklch(0.72_0.25_25/0.06)_0%,transparent_60%)]" />

      {/* Premium animated background */}
      <motion.div
        className="absolute top-0 -left-1/2 w-full h-full rounded-full blur-3xl pointer-events-none"
        style={{ background: "linear-gradient(135deg, oklch(0.55 0.22 280 / 0.15), transparent)" }}
        animate={{
          x: [0, 100, 0],
          y: [0, -60, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-1/2 -right-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: "linear-gradient(135deg, oklch(0.72 0.25 25 / 0.12), transparent)" }}
        animate={{
          x: [0, -80, 0],
          y: [0, 80, 0],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Floating accent shapes */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 2 + Math.random() * 4,
            height: 2 + Math.random() * 4,
            background: i % 2 === 0 ? "oklch(0.55 0.22 280 / 0.5)" : "oklch(0.72 0.25 25 / 0.4)",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, Math.random() * 30 - 15, 0],
            opacity: [0, 0.8, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 6,
            ease: "easeInOut",
          }}
        />
      ))}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <Badge
            className="px-4 py-1.5 gap-2 border-primary/30 bg-primary/10 text-primary text-xs font-medium rounded-full"
          >
            <span className="relative flex size-2">
              <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75" />
              <span className="relative rounded-full size-2 bg-green-400" />
            </span>
            Available for projects
          </Badge>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-8">
          <div className="inline-block">
            <motion.h1 
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[0.95] tracking-tighter mb-4 text-foreground"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Youssef{" "}
              <br className="sm:hidden" />
              <span className="gradient-text inline-block">Dhib</span>
            </motion.h1>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-8">
          <span className="text-lg sm:text-xl md:text-2xl text-foreground/70 font-semibold tracking-wide">
            <motion.span
              key={wordIndex}
              initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-gradient-to-r from-primary via-accent to-blue-500 bg-clip-text text-transparent font-bold"
            >
              {words[wordIndex]}
            </motion.span>
          </span>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-foreground/60 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I craft digital experiences that blend creativity with technology.
          From web apps to mobile solutions — I build products that matter
          with modern tools and clean, maintainable code.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-12"
        >
          <motion.a 
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="h-14 px-10 rounded-full text-base font-bold gap-2 bg-gradient-to-r from-primary via-primary to-accent hover:shadow-2xl hover:shadow-primary/40 shadow-xl shadow-primary/25 transition-all duration-300 text-white uppercase tracking-wide"
            >
              <Sparkles className="size-5" />
              View My Work
            </Button>
          </motion.a>
          <motion.a 
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="outline"
              size="lg"
              className="h-14 px-10 rounded-full text-base font-bold gap-2 border-2 border-foreground/20 text-foreground hover:border-primary hover:bg-primary/10 hover:text-primary transition-all duration-300 uppercase tracking-wide"
            >
              <Code2 className="size-5" />
              Get In Touch
            </Button>
          </motion.a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-20 flex items-center justify-center gap-6 md:gap-10 flex-wrap"
        >
          {[
            { value: "10+", label: "Projects" },
            { value: "Full Stack", label: "Developer" },
            { value: "100%", label: "Dedicated" },
          ].map((stat) => (
            <div key={stat.label} className="text-center px-4 py-2 rounded-lg hover:bg-primary/5 transition-colors duration-300">
              <div className="text-xl md:text-2xl font-bold gradient-text block">
                {stat.value}
              </div>
              <div className="text-xs text-foreground/50 mt-1 uppercase tracking-widest font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="mt-16">
          <motion.a
            href="#about"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex flex-col items-center gap-1 text-foreground/40 hover:text-foreground/70 transition-colors group"
          >
            <span className="text-xs">Scroll down</span>
            <ArrowDown className="size-4" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}
