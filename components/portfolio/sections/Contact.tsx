"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function Contact() {
  return (
    <section id="contact" className="h-full w-full flex items-center justify-center px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="border-0 shadow-none bg-transparent">
            <CardContent className="text-center p-0">
              <div className="mb-12">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="scroll-m-20 text-3xl font-semibold tracking-tight mb-4"
                >
                  Let's Work Together
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-lg text-muted-foreground max-w-2xl mx-auto leading-7"
                >
                  I'm always interested in new opportunities and exciting projects. Whether you have a question or just want to say hi, feel free to reach out!
                </motion.p>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                {/* Email */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6 text-center">
                      <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-2">Email</h3>
                      <Button variant="link" asChild className="p-0 h-auto">
                        <Link href="mailto:farhanafandi.ar@gmail.com">farhanafandi.ar@gmail.com</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* LinkedIn */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6 text-center">
                      <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                        <Linkedin className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-2">LinkedIn</h3>
                      <Button variant="link" asChild className="p-0 h-auto">
                        <Link href="https://linkedin.com/in/frhfnd" target="_blank">Connect with me</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* GitHub */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6 text-center">
                      <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                        <Github className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-2">GitHub</h3>
                      <Button variant="link" asChild className="p-0 h-auto">
                        <Link href="https://github.com/paansplash" target="_blank">View my code</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <Button size="lg" asChild>
                  <Link href="mailto:farhanafandi.ar@gmail.com" className="flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    Get In Touch
                  </Link>
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
