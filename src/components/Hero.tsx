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
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 grid-overlay" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,oklch(0.62_0.22_280/0.12)_0%,transparent_60%),radial-gradient(ellipse_at_70%_50%,oklch(0.55_0.18_200/0.08)_0%,transparent_60%)]" />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 -left-20 w-72 h-72 rounded-full blur-3xl"
        style={{ background: "oklch(0.62 0.22 280 / 0.15)" }}
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 -right-20 w-96 h-96 rounded-full blur-3xl"
        style={{ background: "oklch(0.55 0.18 200 / 0.1)" }}
        animate={{
          x: [0, -50, 0],
          y: [0, 50, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Particle dots */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            background: i % 3 === 0 ? "oklch(0.62 0.22 280 / 0.4)" : "oklch(0.55 0.18 200 / 0.3)",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        />
      ))}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
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

        <motion.div variants={itemVariants}>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-4">
            Hi, I'm{" "}
            <br className="sm:hidden" />
            <span className="gradient-text">Youssef Dhib</span>
          </h1>
        </motion.div>

        <motion.div variants={itemVariants} className="h-12 md:h-14 flex items-center justify-center mb-4">
          <span className="text-xl sm:text-2xl md:text-3xl text-muted-foreground/80 font-medium">
            <span className="text-primary/60">&lt;</span>
            <motion.span
              key={wordIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="inline-block"
            >
              {words[wordIndex]}
            </motion.span>
            <span className="text-primary/60 animate-pulse"> /&gt;</span>
          </span>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-muted-foreground/60 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I craft digital experiences that blend creativity with technology.
          From web apps to mobile solutions — I build products that matter
          with modern tools and clean, maintainable code.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#projects">
            <Button
              size="lg"
              className="h-13 px-8 rounded-full text-base gap-2 bg-gradient-to-r from-primary to-purple-500 hover:from-primary/90 hover:to-purple-500/90 shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300"
            >
              <Sparkles className="size-4" />
              View My Work
            </Button>
          </a>
          <a href="#contact">
            <Button
              variant="outline"
              size="lg"
              className="h-13 px-8 rounded-full text-base gap-2 border-muted-foreground/20 hover:border-primary/40 hover:bg-primary/5"
            >
              <Code2 className="size-4" />
              Get In Touch
            </Button>
          </a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-16 flex items-center justify-center gap-8 md:gap-12"
        >
          {[
            { value: "10+", label: "Projects Done" },
            { value: "Full Stack", label: "Development" },
            { value: "100%", label: "Dedicated" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-lg md:text-xl font-bold gradient-text">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground/50 mt-1 uppercase tracking-wider">
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
            className="inline-flex flex-col items-center gap-1 text-muted-foreground/30 hover:text-muted-foreground/60 transition-colors group"
          >
            <span className="text-xs">Scroll down</span>
            <ArrowDown className="size-4" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}
