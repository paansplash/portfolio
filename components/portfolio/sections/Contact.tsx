"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="min-w-full px-4 py-11 md:h-screen overflow-y-auto lg:overflow-visible">
      <div className="container mx-auto max-w-4xl flex flex-col lg:justify-center lg:h-full">
        <Card className="border-0 shadow-none bg-transparent">
          <CardContent className="text-center p-0">
            <div className="mb-12">
              <h2 className="scroll-m-20 text-2xl sm:text-3xl font-semibold tracking-tight mb-2 sm:mb-4">
                Let's Work Together
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground">
                If you have any enquiries, feel free to reach out!
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 mb-8">
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-0 sm:p-6 text-center">
                  <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <Button variant="link" asChild className="p-0 h-auto">
                    <Link href="mailto:farhanafandi.ar@gmail.com">
                      farhanafandi.ar@gmail.com
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-0 sm:p-6 text-center">
                  <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                    <Linkedin className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">LinkedIn</h3>
                  <Button variant="link" asChild className="p-0 h-auto">
                    <Link
                      href="https://linkedin.com/in/frhnfnd"
                      target="_blank"
                    >
                      Connect with me
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-0 sm:p-6 text-center">
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
