"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="min-w-full h-full flex items-center justify-center px-4">
      <div className="container mx-auto max-w-4xl">
        <Card className="border-0 shadow-none bg-transparent">
          <CardContent className="text-center p-0">
            <div className="mb-12">
              <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight mb-4">
                Let's Work Together
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-7">
                I'm always interested in new opportunities and exciting
                projects. Whether you have a question or just want to say hi,
                feel free to reach out!
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 mb-8">
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

              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                    <Linkedin className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">LinkedIn</h3>
                  <Button variant="link" asChild className="p-0 h-auto">
                    <Link href="https://linkedin.com/in/frhnfnd" target="_blank">
                      Connect with me
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                    <Github className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">GitHub</h3>
                  <Button variant="link" asChild className="p-0 h-auto">
                    <Link href="https://github.com/paansplash" target="_blank">
                      View my code
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Button size="lg" asChild>
              <Link
                href="mailto:farhanafandi.ar@gmail.com"
                className="flex items-center gap-2"
              >
                <Mail className="h-5 w-5" />
                Get In Touch
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
