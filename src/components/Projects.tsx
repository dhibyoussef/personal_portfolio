import { useState } from "react"
import { motion, type Variants } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, ArrowUpRight } from "lucide-react"

interface Project {
  title: string
  description: string
  tags: string[]
  icon: string
  gradient: string
  color: string
}

const projects: Project[] = [
  {
    title: "RadarWebTN",
    description:
      "Market Intelligence Platform — Real-time data aggregation and analytics dashboard for market insights and competitive analysis.",
    tags: ["React", "Python", "Data Viz", "Analytics"],
    icon: "📊",
    gradient: "from-blue-500/5 to-cyan-500/5",
    color: "oklch(0.6 0.2 230)",
  },
  {
    title: "Fitness Tracker",
    description:
      "Sports Tracking Web App — Track workouts, set goals, monitor progress with interactive charts and personalized insights.",
    tags: ["React", "Tailwind", "Charts", "Health"],
    icon: "🏃",
    gradient: "from-green-500/5 to-emerald-500/5",
    color: "oklch(0.6 0.2 160)",
  },
  {
    title: "Student Management",
    description:
      "Comprehensive system for managing student records, grades, attendance, and academic performance tracking with reporting.",
    tags: ["PHP", "Symfony", "SQL", "Admin"],
    icon: "🎓",
    gradient: "from-amber-500/5 to-orange-500/5",
    color: "oklch(0.65 0.2 70)",
  },
  {
    title: "Tiplink Travel",
    description:
      "Travel web app for planning trips, discovering destinations, and managing itineraries with a seamless UX.",
    tags: ["Next.js", "API", "UI/UX", "Travel"],
    icon: "✈️",
    gradient: "from-purple-500/5 to-pink-500/5",
    color: "oklch(0.6 0.2 300)",
  },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const projectVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="projects" className="relative py-24 md:py-32 px-6">
      <div className="absolute inset-0 grid-overlay opacity-50" />
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 border-primary/30 bg-primary/10 text-primary rounded-full">
            Portfolio
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Featured{" "}
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-foreground/60 mt-4 max-w-xl mx-auto text-sm">
            A selection of projects I've built. Each one represents a unique challenge solved with care.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 gap-6"
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              variants={projectVariants}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group perspective-[1000px]"
            >
              <motion.div
                animate={
                  hoveredIndex === i
                    ? { rotateX: 2, rotateY: -2, z: 20 }
                    : { rotateX: 0, rotateY: 0, z: 0 }
                }
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative"
              >
                <Card
                  className={`relative overflow-hidden border bg-white/50 border-foreground/10 backdrop-blur-sm glow-card bg-gradient-to-br ${project.gradient} h-full`}
                >
                  {/* Top gradient accent line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1.5 opacity-70"
                    style={{
                      background: `linear-gradient(90deg, ${project.color}, transparent)`,
                    }}
                  />

                  {/* Subtle corner glow */}
                  <div className="absolute -top-24 -right-24 w-56 h-56 rounded-full opacity-40 blur-3xl pointer-events-none" style={{ background: project.color }} />
                  <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-primary/8 to-transparent rounded-bl-full opacity-60" />

                  <CardHeader className="pb-2 relative z-10">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <motion.span
                          className="text-3xl"
                          animate={hoveredIndex === i ? { rotate: [0, -10, 10, -10, 0], scale: 1.2 } : {}}
                          transition={{ duration: 0.5 }}
                        >
                          {project.icon}
                        </motion.span>
                        <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                      </div>
                      <motion.span
                        animate={hoveredIndex === i ? { rotate: 0, opacity: 1 } : { rotate: 45, opacity: 0.4 }}
                        className="text-foreground/40"
                      >
                        <ArrowUpRight className="size-4" />
                      </motion.span>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-5 relative z-10">
                    <p className="text-sm text-foreground/65 leading-relaxed font-medium">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-[11px] px-2.5 py-1 font-medium bg-primary/8 text-primary/80 border-primary/15"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={hoveredIndex === i ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex gap-2 pt-1">
                        <a href="#" onClick={(e) => e.preventDefault()}>
                          <Button variant="ghost" size="sm" className="h-8 text-xs gap-1.5">
                            <GithubIcon className="size-3.5" />
                            Code
                          </Button>
                        </a>
                        <a href="#" onClick={(e) => e.preventDefault()}>
                          <Button variant="ghost" size="sm" className="h-8 text-xs gap-1.5">
                            <ExternalLink className="size-3.5" />
                            Live Demo
                          </Button>
                        </a>
                      </div>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
