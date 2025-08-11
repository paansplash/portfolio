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
        <Card className="border-1 shadow-sm bg-white/2 backdrop-blur-md p-15">
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
                <span className="text-primary">Farhan Afandi</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Web Developer
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-7">
                I'm a versatile web developer who builds responsive, user-focused applications. Skilled in both development and project management, with a sharp eye for business needs.
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
