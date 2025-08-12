"use client";

import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

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
          <Card className="border shadow-sm bg-white/5 backdrop-blur-md p-15">
            <CardContent className="text-center p-0">
              {/* Avatar with rotation */}
              <motion.div
                initial={{ rotate: -15, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                whileHover={{ scale: 1.1 }} // magnify on hover
                whileTap={{ scale: 0.95 }} // slight shrink when clicked
                transition={{ duration: 0.8 }}
              >
                <Avatar className="h-32 w-32 mx-auto mb-8 border-4 border-primary/20">
                  <AvatarImage
                    src="/myAvatar.svg?height=128&width=128"
                    alt="Farhan Afandi"
                  />
                  <AvatarFallback className="text-2xl">FA</AvatarFallback>
                </Avatar>
              </motion.div>

              {/* Name */}
              <motion.h1
                className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="text-primary">Farhan Afandi</span>
              </motion.h1>

              {/* Job Title with rainbow typewriter */}
              <div className="mt-2 flex justify-center">
                <div className="pl-[0.1rem] tracking-[0.2rem] flex items-center">
                  <span className="rainbow-text xs:text-base sm:text-lg font-medium">
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
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-7 mt-4">
                I'm a versatile web developer who builds responsive,
                user-focused applications. Skilled in both development and
                project management, with a sharp eye for business needs.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  whileHover={{ scale: 1.1 }} // magnify on hover
                  whileTap={{ scale: 0.95 }} // slight shrink when clicked
                >
                  <Button size="lg" onClick={() => goToSlide(3)}>
                    View My Work
                  </Button>
                </motion.div>
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  whileHover={{ scale: 1.1 }} // magnify on hover
                  whileTap={{ scale: 0.95 }} // slight shrink when clicked
                >
                  <Button
                    variant="outline"
                    size="lg"
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
