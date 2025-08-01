"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Smartphone, Globe } from "lucide-react"
import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="h-full w-full flex items-center justify-center px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight mb-4">About Me</h2>
          <p className="text-muted-foreground">
            Passionate about building useful digital products that align with real-world goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Card - Personal Summary */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <p className="leading-7">
                    I'm <strong>Farhan Afandi</strong> — a web developer with a strong grasp of both technical and business needs.
                    I specialize in building practical, user-friendly solutions that help organizations move faster and smarter.
                  </p>
                  <p className="leading-7">
                    With experience in project planning, requirement analysis, and database design,
                    I approach every project with structure and purpose. I’m passionate about creating tools that don’t just work —
                    they solve real problems.
                  </p>
                  <p className="leading-7">
                    Outside of code, I enjoy learning about new tech, optimizing systems, and contributing to meaningful causes through technology.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Card - Skill Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Code className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Clean Code</h3>
                      <p className="text-sm text-muted-foreground">Readable, maintainable, and efficient solutions</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Palette className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Modern Design</h3>
                      <p className="text-sm text-muted-foreground">Interfaces that are simple yet powerful</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Smartphone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Mobile First</h3>
                      <p className="text-sm text-muted-foreground">Responsive by default, optimized for all screens</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Globe className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Full Stack</h3>
                      <p className="text-sm text-muted-foreground">From database to UI — I handle it all</p>
                    </div>
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
