"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Smartphone, Globe } from "lucide-react";

export default function About() {
  return (
    <div className="min-w-full h-full flex items-center justify-center px-4 py-17 sm:py-20 xl:py-40">
      <div className="container mx-auto max-w-6xl h-full">
        {/* Scrollable only on mobile */}
        <div className="h-full pb-20">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="scroll-m-20 text-2xl sm:text-3xl font-semibold tracking-tight mb-2 sm:mb-4">
              About Me
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              Learn more about my background and what drives me
            </p>
          </div>

          {/* Centered on desktop, scrollable on mobile */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <Card className="bg-white/2 backdrop-blur-md border border-white/20 shadow-md">
              <CardContent className="p-5 sm:p-8">
                <div className="space-y-4 sm:space-y-6">
                  <p className="leading-6 sm:leading-7 text-base sm:text-lg">
                    I’m a Software Engineering graduate and versatile web
                    developer with full-stack experience, focused on building
                    scalable, user-centered applications that deliver real
                    business value.
                  </p>
                  <p className="leading-6 sm:leading-7 text-base sm:text-lg">
                    I lead end-to-end development efforts — from gathering
                    requirements and writing proposals to client communication
                    and technical implementation — with strong attention to
                    project goals.
                  </p>
                  <p className="leading-6 sm:leading-7 text-base sm:text-lg">
                    I take pride in writing clean, maintainable code and
                    crafting intuitive digital experiences that blend usability,
                    performance, and thoughtful design.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/2 backdrop-blur-md border border-white/20 shadow-md">
              <CardContent className="p-5 sm:p-8">
                <div className="space-y-6 sm:space-y-8">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="p-2 sm:p-3 bg-primary/10 rounded-lg">
                      <Code className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-base sm:text-lg">
                        Clean Code
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground">
                        Maintainable and scalable solutions
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="p-2 sm:p-3 bg-primary/10 rounded-lg">
                      <Palette className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-base sm:text-lg">
                        Modern Design
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground">
                        Beautiful and intuitive interfaces
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="p-2 sm:p-3 bg-primary/10 rounded-lg">
                      <Smartphone className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-base sm:text-lg">
                        Mobile First
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground">
                        Responsive across all devices
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="p-2 sm:p-3 bg-primary/10 rounded-lg">
                      <Globe className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-base sm:text-lg">
                        Full Stack
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground">
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
    </div>
  );
}
