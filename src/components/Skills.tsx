import { motion, type Variants } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code2, Server, Smartphone, Wrench, type LucideIcon } from "lucide-react"

interface SkillCategory {
  title: string
  icon: LucideIcon
  skills: string[]
  gradient: string
  accentColor: string
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: Code2,
    gradient: "from-blue-500/10 via-blue-500/5 to-transparent",
    accentColor: "oklch(0.6 0.2 230)",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "Tailwind CSS", "React", "Next.js"],
  },
  {
    title: "Backend",
    icon: Server,
    gradient: "from-emerald-500/10 via-emerald-500/5 to-transparent",
    accentColor: "oklch(0.6 0.2 160)",
    skills: ["PHP", "Symfony", "Laravel", "Python", "N8N", "REST APIs"],
  },
  {
    title: "Mobile",
    icon: Smartphone,
    gradient: "from-orange-500/10 via-orange-500/5 to-transparent",
    accentColor: "oklch(0.65 0.2 70)",
    skills: ["Flutter", "Dart", "Responsive Design", "Cross-platform"],
  },
  {
    title: "Tools & More",
    icon: Wrench,
    gradient: "from-purple-500/10 via-purple-500/5 to-transparent",
    accentColor: "oklch(0.6 0.2 300)",
    skills: ["Git", "Databases", "CI/CD", "Linux", "Docker"],
  },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
}

const skillTags = ["HTML", "CSS", "JavaScript", "TypeScript", "Tailwind CSS", "React", "Next.js", "PHP", "Symfony", "Laravel", "Python", "N8N", "Flutter", "Dart", "Git", "Databases", "CI/CD", "Linux", "Docker"]

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32 px-6 bg-gradient-to-br from-white/50 to-primary/5">
      <div className="absolute inset-0 grid-overlay opacity-30" />
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 border-primary/30 bg-primary/10 text-primary rounded-full">
            Skills & Expertise
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Technologies I Work{" "}
            <span className="gradient-text">With</span>
          </h2>
          <p className="text-foreground/60 mt-4 max-w-xl mx-auto text-sm">
            A curated set of technologies I use daily to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {skillCategories.map((cat) => (
            <motion.div key={cat.title} variants={cardVariants}>
              <Card
                className={`group h-full overflow-hidden border bg-white/50 border-foreground/10 backdrop-blur-sm glow-card bg-gradient-to-br ${cat.gradient}`}
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div
                      className="p-2.5 rounded-xl"
                      style={{ background: `${cat.accentColor}20` }}
                    >
                      <cat.icon className="size-4" style={{ color: cat.accentColor }} />
                    </div>
                    <CardTitle className="text-sm font-semibold">{cat.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((skill, i) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.03, duration: 0.2 }}
                        className="px-3 py-1 text-[11px] font-medium rounded-full border"
                        style={{
                          background: `${cat.accentColor}12`,
                          color: cat.accentColor,
                          borderColor: `${cat.accentColor}20`,
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating skill cloud */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <div className="text-center mb-6">
          <p className="text-xs text-foreground/50 uppercase tracking-widest">
            — Full Technology Stack —
          </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
            {skillTags.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.02, duration: 0.3 }}
                whileHover={{ scale: 1.1, y: -4 }}
                className="px-4 py-2 text-xs rounded-full bg-white/40 border border-primary/20 text-foreground/70 hover:text-foreground hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
