"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Smartphone, Globe } from "lucide-react";

export default function About() {
  return (
    <div className="min-w-full h-full flex items-center justify-center px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight mb-4 sm:text-xl">
            About Me
          </h2>
          <p className="text-muted-foreground sm:text-m">
            Learn more about my background and what drives me
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-h-[70vh]">
          <Card className="h-full bg-white/2 backdrop-blur-md border border-white/20 shadow-md">
            <CardContent className="p-8">
              <div className="space-y-6">
                <p className="leading-7 text-lg">
                  I’m a Software Engineering graduate and versatile web developer with full-stack experience,
                  focused on building scalable, user-centered applications that deliver real business value.
                </p>
                <p className="leading-7 text-lg">
                  I lead end-to-end development efforts — from gathering requirements and writing proposals
                  to client communication and technical implementation — with strong attention to project goals.
                </p>
                <p className="leading-7 text-lg">
                  I take pride in writing clean, maintainable code and crafting intuitive digital experiences
                  that blend usability, performance, and thoughtful design.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="h-full bg-white/2 backdrop-blur-md border border-white/20 shadow-md">
            <CardContent className="p-8">
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Code className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Clean Code</h3>
                    <p className="text-muted-foreground">
                      Maintainable and scalable solutions
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Palette className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Modern Design</h3>
                    <p className="text-muted-foreground">
                      Beautiful and intuitive interfaces
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Smartphone className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Mobile First</h3>
                    <p className="text-muted-foreground">
                      Responsive across all devices
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Globe className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Full Stack</h3>
                    <p className="text-muted-foreground">
                      End-to-end development
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
