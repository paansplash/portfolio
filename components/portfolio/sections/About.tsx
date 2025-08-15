"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Smartphone, Globe } from "lucide-react";

export default function About() {
  return (
    <div className="min-w-full px-4 py-17 lg:h-full lg:flex lg:items-center lg:justify-center sm:py-20 xl:py-40 overflow-y-auto lg:overflow-visible">
      <div className="container mx-auto max-w-6xl">
        {/* Scrollable content in mobile */}
        <div className="pb-20">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="scroll-m-20 text-2xl sm:text-3xl font-semibold tracking-tight mb-2 sm:mb-4">
              About Me
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              Learn more about my background and what drives me
            </p>
          </div>

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
                  {[
                    {
                      icon: Code,
                      title: "Clean Code",
                      desc: "Maintainable and scalable solutions",
                    },
                    {
                      icon: Palette,
                      title: "Modern Design",
                      desc: "Beautiful and intuitive interfaces",
                    },
                    {
                      icon: Smartphone,
                      title: "Mobile First",
                      desc: "Responsive across all devices",
                    },
                    {
                      icon: Globe,
                      title: "Full Stack",
                      desc: "End-to-end development",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center space-x-3 sm:space-x-4"
                    >
                      <div className="p-2 sm:p-3 bg-primary/10 rounded-lg">
                        <item.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-base sm:text-lg">
                          {item.title}
                        </h3>
                        <p className="text-sm sm:text-base text-muted-foreground">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
