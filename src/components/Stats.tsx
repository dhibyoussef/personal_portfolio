import { motion } from "framer-motion"
import { useScrollReveal } from "@/hooks/useScrollReveal"
import { useEffect, useState } from "react"

const StatCounter = ({ value, suffix, label }: { value: number; suffix: string; label: string }) => {
  const [count, setCount] = useState(0)
  const { ref, isVisible } = useScrollReveal()

  useEffect(() => {
    if (!isVisible) return

    let start = 0
    const end = value
    const duration = 2000
    const increment = end / (duration / 16)

    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [isVisible, value])

  return (
    <div
      ref={ref}
      className="text-center px-6 py-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg"
    >
      <div className="text-4xl md:text-5xl font-black gradient-text">
        {count}
        <span className="text-2xl md:text-3xl">{suffix}</span>
      </div>
      <p className="text-sm font-semibold text-foreground/70 mt-2 uppercase tracking-wider">{label}</p>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="relative py-24 md:py-32 px-6 bg-gradient-to-b from-white/50 to-primary/5">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground mb-4">
            Proven{" "}
            <span className="gradient-text">Results</span>
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Building digital experiences that drive real business impact and client satisfaction
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCounter value={50} suffix="+" label="Projects Delivered" />
          <StatCounter value={98} suffix="%" label="Client Satisfaction" />
          <StatCounter value={5} suffix="y+" label="Industry Experience" />
        </div>
      </div>
    </section>
  )
}
