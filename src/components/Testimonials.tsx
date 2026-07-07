import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Ahmed Hassan",
    role: "CEO, Tech Startup",
    content: "Youssef transformed our vision into reality. His attention to detail and technical expertise are unmatched.",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    content: "Working with Youssef was seamless. He understood our requirements and delivered beyond expectations.",
    rating: 5,
  },
  {
    name: "Marcus Chen",
    role: "Founder, Digital Agency",
    content: "The quality of work is exceptional. Highly recommended for anyone looking for a professional developer.",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="relative py-24 md:py-32 px-6 bg-white/40">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-96 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-96 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
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
            What Clients{" "}
            <span className="gradient-text">Say</span>
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Real feedback from people I've had the pleasure to work with
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full glass-card hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="size-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-foreground/70 flex-1 mb-6 leading-relaxed">{testimonial.content}</p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-foreground/50">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
