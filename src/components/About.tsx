import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Code2, Palette, Zap, Sparkles, Quote } from "lucide-react"

const highlights = [
  { icon: Code2, label: "Clean Code", desc: "Maintainable, scalable solutions" },
  { icon: Palette, label: "Modern UI", desc: "Pixel-perfect great UX" },
  { icon: Zap, label: "Fast Delivery", desc: "Efficient quick turnaround" },
  { icon: Sparkles, label: "Innovation", desc: "Always exploring new tech" },
]

const infoItems = [
  { label: "Name", value: "Youssef Dhib" },
  { label: "Role", value: "Full Stack Developer" },
  { label: "Email", value: "youssefdhib28@gmail.com" },
  { label: "Location", value: "Remote / Tunisia" },
]

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 px-6">
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
            About Me
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Turning Ideas Into{" "}
            <span className="gradient-text">Digital Reality</span>
          </h2>
          <p className="text-muted-foreground/60 mt-4 max-w-xl mx-auto text-sm">
            Passionate about creating impactful digital experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Card className="overflow-hidden gradient-border-card bg-card/50">
              <CardContent className="p-0">
                <div className="relative aspect-square bg-gradient-to-br from-primary/30 via-purple-500/20 to-cyan-500/20 flex items-center justify-center overflow-hidden">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_30%,oklch(0.62_0.22_280/0.15)_50%,transparent_70%)]"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="relative"
                  >
                    <Avatar className="size-36 md:size-44 ring-4 ring-background/50 shadow-2xl">
                      <AvatarFallback className="text-5xl md:text-6xl bg-gradient-to-br from-primary/30 to-purple-500/30">
                        👨‍💻
                      </AvatarFallback>
                    </Avatar>
                  </motion.div>
                </div>
                <div className="p-6 text-center space-y-1">
                  <h3 className="text-lg font-semibold">Youssef Dhib</h3>
                  <p className="text-sm text-muted-foreground">Full Stack Developer</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3 space-y-6"
          >
            <Card className="glass-card gradient-border-card">
              <CardContent className="p-6 md:p-8 space-y-6">
                <div className="relative">
                  <Quote className="size-8 text-primary/20 absolute -top-1 -left-1" />
                  <p className="text-muted-foreground leading-relaxed pl-6 pt-2 italic">
                    I'm a passionate Full Stack Developer with expertise across the entire
                    development stack. From crafting pixel-perfect frontends with React and Tailwind
                    to building robust backends with PHP, Symfony, and Laravel — I thrive on bringing
                    ideas to life through clean, maintainable code.
                  </p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  My journey spans web development, mobile apps with Flutter, automation with N8N,
                  and data pipelines with Python. Every project is an opportunity to innovate and
                  deliver experiences that users love.
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-3">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="p-4 rounded-xl glass-card hover:border-primary/20 transition-all duration-300"
                >
                  <div className="p-2 w-fit rounded-lg bg-gradient-to-br from-primary/20 to-purple-500/20 mb-3">
                    <h.icon className="size-4 text-primary" />
                  </div>
                  <div className="text-sm font-medium">{h.label}</div>
                  <div className="text-xs text-muted-foreground/60 mt-0.5">{h.desc}</div>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3">
              {infoItems.map((item) => (
                <div
                  key={item.label}
                  className="p-3 rounded-xl bg-gradient-to-br from-muted/50 to-muted/20 border border-border/30"
                >
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground/40 font-medium">
                    {item.label}
                  </div>
                  <div className="text-sm font-medium text-foreground mt-0.5">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
