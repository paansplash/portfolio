"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Smartphone, Globe } from "lucide-react"


export default function About(){
    return (

<section id="about" className="min-h-screen flex items-center justify-center px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight mb-4">About Me</h2>
            <p className="text-muted-foreground">Learn more about my background and what drives me</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <p className="leading-7">
                    With over 5 years of experience in web development, I specialize in creating scalable, user-friendly
                    applications that solve real-world problems.
                  </p>
                  <p className="leading-7">
                    I'm passionate about staying up-to-date with the latest technologies and best practices in web
                    development. When I'm not coding, you can find me contributing to open-source projects or learning
                    new frameworks.
                  </p>
                  <p className="leading-7">
                    I believe in writing clean, maintainable code and creating exceptional user experiences that make a
                    difference.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Code className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Clean Code</h3>
                      <p className="text-sm text-muted-foreground">Maintainable and scalable solutions</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Palette className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Modern Design</h3>
                      <p className="text-sm text-muted-foreground">Beautiful and intuitive interfaces</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Smartphone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Mobile First</h3>
                      <p className="text-sm text-muted-foreground">Responsive across all devices</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Globe className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Full Stack</h3>
                      <p className="text-sm text-muted-foreground">End-to-end development</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    )
}
