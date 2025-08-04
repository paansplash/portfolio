"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface HeroProps {
  goToSlide: (index: number) => void;
}

export default function Hero({ goToSlide }: HeroProps) {
  return (
    <div className="min-w-full h-full flex items-center justify-center px-4">
      <div className="container mx-auto max-w-4xl">
        <Card className="border-0 shadow-none bg-transparent">
          <CardContent className="text-center p-0">
            <Avatar className="h-32 w-32 mx-auto mb-8 border-4 border-primary/20">
              <AvatarImage
                src="/myAvatar.svg?height=128&width=128"
                alt="Alex Johnson"
              />
              <AvatarFallback className="text-2xl">AJ</AvatarFallback>
            </Avatar>

            <div className="space-y-4 mb-8">
              <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl">
                Hi, I'm <span className="text-primary">Alex Johnson</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Full-Stack Web Developer
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-7">
                I create beautiful, responsive web applications using modern
                technologies. Passionate about clean code, user experience, and
                bringing ideas to life.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" onClick={() => goToSlide(3)}>
                View My Work
              </Button>
              <Button variant="outline" size="lg" onClick={() => goToSlide(4)}>
                Get In Touch
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
