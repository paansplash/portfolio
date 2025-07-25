"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight mb-4">Featured Projects</h2>
            <p className="text-muted-foreground">A showcase of my recent work and personal projects</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectList.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="group hover:shadow-lg transition-all duration-300">
                  <div className={`aspect-video relative overflow-hidden rounded-t-lg ${project.bg}`}>
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-white font-semibold">{project.label}</span>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((t) => (
                        <Badge key={t} variant="outline">{t}</Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" asChild>
                        <Link href={project.codeLink} className="flex items-center gap-2" target="_blank">
                          <Github className="h-4 w-4" />
                          Code
                        </Link>
                      </Button>
                      <Button size="sm" asChild>
                        <Link href={project.demoLink} className="flex items-center gap-2" target="_blank">
                          <ExternalLink className="h-4 w-4" />
                          Demo
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const projectList = [
  {
    title: "E-commerce Platform",
    label: "E-commerce Platform",
    description: "Full-stack e-commerce solution with payment integration and admin dashboard",
    bg: "bg-gradient-to-br from-blue-500 to-purple-600",
    tech: ["Next.js", "Stripe", "PostgreSQL", "Prisma"],
    codeLink: "#",
    demoLink: "#"
  },
  {
    title: "Task Management App",
    label: "Task Manager",
    description: "Collaborative project management tool with real-time updates and team features",
    bg: "bg-gradient-to-br from-green-500 to-teal-600",
    tech: ["React", "Socket.io", "MongoDB", "Express"],
    codeLink: "#",
    demoLink: "#"
  },
  {
    title: "Weather Dashboard",
    label: "Weather App",
    description: "Beautiful weather application with location-based forecasts and PWA features",
    bg: "bg-gradient-to-br from-orange-500 to-red-600",
    tech: ["Vue.js", "PWA", "API", "Charts"],
    codeLink: "#",
    demoLink: "#"
  }
]
