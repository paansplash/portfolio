"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Code, Palette, Globe } from "lucide-react";

export default function Skills() {
  return (
<div className="min-w-full h-full flex items-center justify-center px-4 py-17 sm:py-20 xl:py-40">
      <div className="container mx-auto max-w-6xl h-full">
        <div className="pb-20">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="scroll-m-20 text-2xl sm:text-3xl font-semibold tracking-tight mb-2 sm:mb-4">
              Skills & Technologies
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              The tools and technologies I use to bring ideas to life
            </p>
          </div>

          {/* Grid layout - 1 col mobile, 3 cols desktop */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Frontend */}
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <div className="p-2 bg-blue-500/10 rounded-lg">
                    <Code className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <CardTitle>Frontend</CardTitle>
                    <CardDescription>
                      User interface development
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap justify-center gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Tailwind CSS</Badge>
                  <Badge variant="secondary">HTML5</Badge>
                  <Badge variant="secondary">CSS3</Badge>
                  <Badge variant="secondary">JavaScript</Badge>
                  <Badge variant="secondary">Bootstrap</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Backend */}
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <div className="p-2 bg-green-500/10 rounded-lg">
                    <Globe className="h-5 w-5 text-green-500" />
                  </div>
                  <div>
                    <CardTitle>Backend</CardTitle>
                    <CardDescription>Server-side development</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap justify-center gap-2">
                  <Badge variant="secondary">Laravel</Badge>
                  <Badge variant="secondary">PHP</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                  <Badge variant="secondary">MySQL</Badge>
                  <Badge variant="secondary">MongoDB</Badge>
                  <Badge variant="secondary">REST APIs</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Tools & DevOps */}
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <div className="p-2 bg-purple-500/10 rounded-lg">
                    <Palette className="h-5 w-5 text-purple-500" />
                  </div>
                  <div>
                    <CardTitle>Tools & DevOps</CardTitle>
                    <CardDescription>Development workflow</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap justify-center gap-2">
                  <Badge variant="secondary">Digital Ocean</Badge>
                  <Badge variant="secondary">Git</Badge>
                  <Badge variant="secondary">AWS</Badge>
                  <Badge variant="secondary">Vercel</Badge>
                  <Badge variant="secondary">Linux</Badge>
                  <Badge variant="secondary">RunCloud</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
