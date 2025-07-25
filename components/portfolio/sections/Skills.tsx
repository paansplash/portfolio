"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Palette, Globe } from "lucide-react"

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight mb-4">Skills & Technologies</h2>
            <p className="text-muted-foreground">Core tech I use to design systems and build impactful solutions.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[...skillsData].map((skill, i) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="relative overflow-hidden">
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <div className={`p-2 ${skill.bgColor} rounded-lg`}>
                        {<skill.icon className={`h-5 w-5 ${skill.textColor}`} />}
                      </div>
                      <div>
                        <CardTitle>{skill.title}</CardTitle>
                        <CardDescription>{skill.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skill.tech.map((t) => (
                        <Badge key={t} variant="secondary">{t}</Badge>
                      ))}
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

const skillsData = [
  {
    title: "Frontend",
    description: "UI Development & Interaction",
    icon: Code,
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-500",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "JavaScript", "Blade (Laravel)"],
  },
  {
    title: "Backend",
    description: "System logic & Data processing",
    icon: Globe,
    bgColor: "bg-green-500/10",
    textColor: "text-green-500",
    tech: ["Laravel", "PHP", "MySQL", "PostgreSQL", "REST APIs", "Repository Pattern"],
  },
  {
    title: "Tools & Workflow",
    description: "Productivity & Deployment",
    icon: Palette,
    bgColor: "bg-purple-500/10",
    textColor: "text-purple-500",
    tech: ["Git", "Vercel", "Postman", "DBngin", "Herd (Laravel)", "Trello"],
  },
]
