"use client";

import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface HeroProps {
  goToSlide: (index: number) => void;
}

export default function Hero({ goToSlide }: HeroProps) {
  const roles = ["Web Developer", "Front End Web Developer"];
  const [typedText, setTypedText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">(
    "typing"
  );

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[roleIndex];

    if (phase === "typing") {
      if (typedText.length < currentRole.length) {
        const timeout = setTimeout(() => {
          setTypedText(currentRole.slice(0, typedText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        setPhase("pausing");
      }
    }

    if (phase === "pausing") {
      const timeout = setTimeout(() => {
        setPhase("deleting");
      }, 1200); // pause before deleting
      return () => clearTimeout(timeout);
    }

    if (phase === "deleting") {
      if (typedText.length > 0) {
        const timeout = setTimeout(() => {
          setTypedText(typedText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setPhase("typing");
      }
    }
  }, [typedText, phase, roleIndex, roles]);

  return (
    <div className="min-w-full h-full flex items-center justify-center px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ rotateY: 15, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Card className="border shadow-sm bg-white/5 backdrop-blur-md p-6 sm:p-15">
            <CardContent className="text-center p-0">
              {/* Avatar with rotation */}
              <motion.div
                initial={{ rotate: -15, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.8 }}
              >
                <Avatar className="h-24 w-24 sm:h-32 sm:w-32 mx-auto mb-6 sm:mb-8 border-4 border-primary/20">
                  <AvatarImage
                    src="/myAvatar.svg?height=128&width=128"
                    alt="Farhan Afandi"
                  />
                  <AvatarFallback className="text-xl sm:text-2xl">FA</AvatarFallback>
                </Avatar>
              </motion.div>

              {/* Name */}
              <motion.h1
                className="text-3xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="text-primary">Farhan Afandi</span>
              </motion.h1>

              {/* Job Title with rainbow typewriter */}
              <div className="mt-2 flex justify-center">
                <div className="pl-[0.1rem] tracking-[0.1rem] sm:tracking-[0.2rem] flex items-center">
                  <span className="rainbow-text text-sm sm:text-lg font-medium">
                    {typedText}
                  </span>
                  <span
                    style={{ color: "#444444" }}
                    className="animate-pulse ml-1"
                  >
                    |
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-6 sm:leading-7 mt-4 px-2 sm:px-0">
                I'm a versatile web developer who builds responsive,
                user-focused applications. Skilled in both development and
                project management, with a sharp eye for business needs.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="w-full sm:w-auto"
                    onClick={() => goToSlide(3)}
                  >
                    View My Work
                  </Button>
                </motion.div>
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto"
                    onClick={() => goToSlide(4)}
                  >
                    Get In Touch
                  </Button>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
