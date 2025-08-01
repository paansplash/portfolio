"use client"

import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="border-0 shadow-none bg-transparent">
            <CardContent className="text-center p-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <Avatar className="h-32 w-32 mx-auto mb-8 border-4 border-primary/20">
                  <AvatarImage src="/myAvatar.svg" alt="Farhan Afandi" />
                  <AvatarFallback className="text-2xl">FA</AvatarFallback>
                </Avatar>
              </motion.div>

              <motion.div
                className="space-y-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                  <span className="text-primary">Farhan Afandi</span>
                </h1>
                <p className="text-xl text-muted-foreground">Web Developer</p>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-7">
                  Web developer with a strong grasp of business needs. Experienced in project planning,
                  requirement gathering, and database design.
                </p>
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row justify-center gap-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
              >
                <Button size="lg" asChild>
                  <Link href="#projects">View My Work</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="#contact">Get In Touch</Link>
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
