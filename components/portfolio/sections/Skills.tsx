"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Palette, Globe } from "lucide-react"

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight mb-4">Skills & Technologies</h2>
          <p className="text-muted-foreground">Core tech I use to design systems and build impactful solutions.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Frontend */}
          <Card className="relative overflow-hidden">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <Code className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <CardTitle>Frontend</CardTitle>
                  <CardDescription>UI Development & Interaction</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">Next.js</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">Tailwind CSS</Badge>
                <Badge variant="secondary">HTML5</Badge>
                <Badge variant="secondary">JavaScript</Badge>
                <Badge variant="secondary">Blade (Laravel)</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Backend */}
          <Card className="relative overflow-hidden">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-green-500/10 rounded-lg">
                  <Globe className="h-5 w-5 text-green-500" />
                </div>
                <div>
                  <CardTitle>Backend</CardTitle>
                  <CardDescription>System logic & Data processing</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Laravel</Badge>
                <Badge variant="secondary">PHP</Badge>
                <Badge variant="secondary">MySQL</Badge>
                <Badge variant="secondary">PostgreSQL</Badge>
                <Badge variant="secondary">REST APIs</Badge>
                <Badge variant="secondary">Repository Pattern</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Tools & DevOps */}
          <Card className="relative overflow-hidden">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-purple-500/10 rounded-lg">
                  <Palette className="h-5 w-5 text-purple-500" />
                </div>
                <div>
                  <CardTitle>Tools & Workflow</CardTitle>
                  <CardDescription>Productivity & Deployment</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Git</Badge>
                <Badge variant="secondary">Vercel</Badge>
                <Badge variant="secondary">Postman</Badge>
                <Badge variant="secondary">DBngin</Badge>
                <Badge variant="secondary">Herd (Laravel)</Badge>
                <Badge variant="secondary">Trello</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
