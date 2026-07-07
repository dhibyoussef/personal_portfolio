import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, Download, Send, CheckCircle2, Globe, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

const socials = [
  { name: "GitHub", url: "https://github.com/youssefdhib", icon: GithubIcon, color: "hover:text-[#f0f6fc]" },
  { name: "LinkedIn", url: "https://linkedin.com/in/youssefdhib", icon: LinkedinIcon, color: "hover:text-[#0a66c2]" },
  { name: "Twitter / X", url: "https://x.com/youssefdhib", icon: TwitterIcon, color: "hover:text-[#1da1f2]" },
  { name: "Email", url: "mailto:youssefdhib28@gmail.com", icon: Mail, color: "hover:text-primary" },
]

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    window.location.href = `mailto:youssefdhib28@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${encodeURIComponent(form.email)}`
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section id="contact" className="relative py-24 md:py-32 px-6 bg-gradient-to-br from-white/50 to-primary/5">
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
            Contact
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Let's{" "}
            <span className="gradient-text">Work Together</span>
          </h2>
          <p className="text-foreground/60 mt-4 max-w-xl mx-auto text-sm">
            Got a project in mind? Let's build something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <Card className="glass-card gradient-border-card bg-white/40 border-foreground/10">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-sm font-semibold mb-6 flex items-center gap-2 text-foreground">
                  <span className="p-1.5 rounded-lg bg-primary/10">
                    <Send className="size-3.5 text-primary" />
                  </span>
                  Send a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-medium text-foreground/70">Your Name</label>
                      <Input
                        placeholder="John Doe"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="h-11 bg-white/50 border-foreground/20 focus:border-primary/40 transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-medium text-foreground/70">Your Email</label>
                      <Input
                        type="email"
                        placeholder="john@example.com"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="h-11 bg-white/50 border-foreground/20 focus:border-primary/40 transition-colors"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-foreground/70">Message</label>
                    <Textarea
                      placeholder="Tell me about your project..."
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="bg-white/50 border-foreground/20 focus:border-primary/40 transition-colors resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full h-12 gap-2 rounded-xl bg-gradient-to-r from-primary via-primary to-accent hover:from-primary/90 hover:via-primary/90 hover:to-accent/90 shadow-lg shadow-primary/20 text-white"
                  >
                    {sent ? (
                      <>
                        <CheckCircle2 className="size-4" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send className="size-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 space-y-5"
          >
            <Card className="glass-card gradient-border-card bg-white/40 border-foreground/10">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-sm font-semibold flex items-center gap-2 text-foreground">
                  <span className="p-1.5 rounded-lg bg-primary/10">
                    <Globe className="size-3.5 text-primary" />
                  </span>
                  Connect With Me
                </h3>
                <div className="flex flex-wrap gap-2">
                  {socials.map((social) => (
                    <Tooltip key={social.name}>
                      <TooltipTrigger>
                        <a href={social.url} target="_blank" rel="noopener noreferrer">
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-9 gap-2 text-xs border-foreground/20 hover:border-primary/50 hover:bg-primary/10"
                          >
                            <social.icon className={`size-3.5 ${social.color} transition-colors`} />
                            {social.name}
                          </Button>
                        </a>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Follow me on {social.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card gradient-border-card bg-white/40 border-foreground/10">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-sm font-semibold flex items-center gap-2 text-foreground">
                  <span className="p-1.5 rounded-lg bg-primary/10">
                    <Download className="size-3.5 text-primary" />
                  </span>
                  Download CV
                </h3>
                <p className="text-xs text-foreground/60">
                  Get my full resume with detailed experience, education, and skills.
                </p>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    alert("CV download link — add your PDF file URL here")
                  }}
                >
                  <Button
                    variant="default"
                    className="w-full gap-2 rounded-xl h-11 bg-gradient-to-r from-primary via-primary to-accent hover:from-primary/90 hover:via-primary/90 hover:to-accent/90 shadow-lg shadow-primary/20 text-white"
                  >
                    <Download className="size-4" />
                    Download CV (PDF)
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/10 via-accent/5 to-blue-500/5 border-primary/20">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-primary/10 shrink-0">
                    <Mail className="size-4 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs font-semibold text-foreground/70 mb-0.5">Email Me Directly</h4>
                    <a
                      href="mailto:youssefdhib28@gmail.com"
                      className="text-sm text-primary hover:text-primary/80 transition-colors break-all"
                    >
                      youssefdhib28@gmail.com
                    </a>
                  </div>
                  <ArrowUpRight className="size-3.5 text-primary/40 shrink-0 mt-1" />
                </div>
                <Separator className="bg-foreground/10" />
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-primary/10 shrink-0">
                    <MapPin className="size-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-foreground/70 mb-0.5">Location</h4>
                    <p className="text-sm text-foreground">Remote / Tunisia</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
