import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code2, Smartphone, Zap, Database, Palette, Rocket } from "lucide-react"

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Building scalable, performant web applications using modern technologies and best practices.",
    color: "from-blue-500/20 to-blue-600/10",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Creating responsive mobile experiences with Flutter and React Native for iOS and Android.",
    color: "from-purple-500/20 to-purple-600/10",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Designing beautiful, intuitive interfaces that users love and businesses need.",
    color: "from-pink-500/20 to-pink-600/10",
  },
  {
    icon: Database,
    title: "Backend Systems",
    description: "Architecting robust backend systems with databases, APIs, and cloud infrastructure.",
    color: "from-emerald-500/20 to-emerald-600/10",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing applications for speed, efficiency, and exceptional user experience.",
    color: "from-yellow-500/20 to-yellow-600/10",
  },
  {
    icon: Rocket,
    title: "DevOps & Deployment",
    description: "Managing deployments, CI/CD pipelines, and infrastructure as code for reliable releases.",
    color: "from-orange-500/20 to-orange-600/10",
  },
]

export default function Services() {
  return (
    <section className="relative py-24 md:py-32 px-6 bg-gradient-to-b from-primary/5 to-white/50">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2" />
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
            Services &{" "}
            <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Comprehensive solutions across the full stack from design to deployment
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <Card className={`h-full glass-card hover:shadow-xl transition-all duration-300 bg-gradient-to-br ${service.color}`}>
                  <CardContent className="p-6">
                    <motion.div
                      className="p-3 w-fit rounded-lg bg-white/20 backdrop-blur mb-4"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Icon className="size-6 text-foreground" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                    <p className="text-foreground/60 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
