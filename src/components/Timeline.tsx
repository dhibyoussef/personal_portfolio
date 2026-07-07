import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Briefcase } from "lucide-react"

const experiences = [
  {
    type: "work" as const,
    title: "Full Stack Developer",
    org: "Freelance / Self-Employed",
    period: "2023 — Present",
    description: "Building web apps, mobile apps, and automation solutions for clients. Working with React, PHP, Flutter, and Python across the full stack.",
    highlights: ["10+ projects delivered", "End-to-end development", "Client communication"],
  },
  {
    type: "work" as const,
    title: "Web Developer",
    org: "Freelance Projects",
    period: "2022 — 2023",
    description: "Developed dynamic web applications using PHP, Symfony, and Laravel. Built REST APIs and integrated third-party services.",
    highlights: ["API development", "Database design", "Performance optimization"],
  },
  {
    type: "education" as const,
    title: "Computer Science Studies",
    org: "University",
    period: "2021 — 2024",
    description: "Studied computer science fundamentals, algorithms, data structures, and software engineering principles.",
    highlights: ["Software Engineering", "Data Structures", "Web Technologies"],
  },
]

export default function Timeline() {
  return (
    <section id="experience" className="relative py-24 md:py-32 px-6">
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
            Experience
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            My{" "}
            <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-foreground/60 mt-4 max-w-xl mx-auto text-sm">
            Education, work, and everything in between
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-20"
              >
                <div className="absolute left-5 top-1 w-6 h-6 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                  <div className="size-2 rounded-full bg-primary" />
                </div>

                <div className="absolute left-[26px] top-7 w-px h-[calc(100%+20px)] bg-border/50 last:hidden" />

                <Card className="glass-card border-foreground/10 overflow-hidden group hover:border-primary/30 transition-colors">
                  <div className="absolute top-0 left-0 w-1 h-full bg-primary/30 group-hover:bg-primary/60 transition-colors" />
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          {exp.type === "education" ? (
                            <GraduationCap className="size-3.5 text-primary" />
                          ) : (
                            <Briefcase className="size-3.5 text-primary" />
                          )}
                          <span className="text-[11px] uppercase tracking-widest text-foreground/40 font-medium">
                            {exp.type === "education" ? "Education" : "Work"}
                          </span>
                        </div>
                        <h3 className="text-base font-bold text-foreground">{exp.title}</h3>
                        <p className="text-sm text-foreground/60">{exp.org}</p>
                      </div>
                      <span className="text-xs text-foreground/40 whitespace-nowrap px-3 py-1 rounded-full bg-primary/5 border border-primary/10">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-sm text-foreground/65 leading-relaxed mb-3">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {exp.highlights.map((h) => (
                        <span
                          key={h}
                          className="px-2.5 py-0.5 text-[11px] rounded-full bg-primary/8 text-primary/70 border border-primary/15"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
