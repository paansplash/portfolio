"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="min-w-full px-4 py-17 md:h-full md:flex md:items-center md:justify-center sm:py-20 xl:py-40 overflow-y-auto md:overflow-visible">
      <div className="container mx-auto max-w-6xl h-full">
        <div className="pb-20">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="scroll-m-20 text-2xl sm:text-3xl font-semibold tracking-tight mb-2 sm:mb-4">
              Featured Projects
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              A showcase of my recent work and personal projects
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project 1 */}
            <Card className="group hover:shadow-lg transition-all duration-300">
              <div className="hidden sm:block aspect-video relative overflow-hidden rounded-t-lg">
                <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-white font-semibold">
                    E-commerce Platform
                  </span>
                </div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="group-hover:text-primary transition-colors text-lg">
                  E-commerce Platform
                </CardTitle>
                <CardDescription className="text-sm">
                  Full-stack e-commerce solution with payment integration
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1 mb-3">
                  <Badge variant="outline" className="text-xs">
                    Bootstrap5
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Laravel
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    PostgreSQL
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Billplz
                  </Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" disabled>
                    <Link href="#" className="flex items-center gap-1">
                      <Github className="h-3 w-3" /> Code
                    </Link>
                  </Button>
                  <Button size="sm" disabled>
                    <Link href="#" className="flex items-center gap-1">
                      <ExternalLink className="h-3 w-3" /> Demo
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Project 2 */}
            <Card className="group hover:shadow-lg transition-all duration-300">
              <div className="hidden sm:block aspect-video relative overflow-hidden rounded-t-lg">
                <div className="w-full h-full bg-gradient-to-br from-indigo-600 to-blue-500 flex items-center justify-center">
                  <span className="text-white font-semibold">Data Manager</span>
                </div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="group-hover:text-primary transition-colors text-lg">
                  Internal Information System
                </CardTitle>
                <CardDescription className="text-sm">
                  Data input/output with analytics and admin control panel
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1 mb-3">
                  <Badge variant="outline" className="text-xs">
                    Laravel
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Bootstrap 5
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    MySQL
                  </Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" disabled>
                    <Link href="#" className="flex items-center gap-1">
                      <Github className="h-3 w-3" /> Code
                    </Link>
                  </Button>
                  <Button size="sm" disabled>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <ExternalLink className="h-3 w-3" /> Demo
                    </div>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Project 3 */}
            <Card className="group hover:shadow-lg transition-all duration-300">
              <div className="hidden sm:block aspect-video relative overflow-hidden rounded-t-lg">
                <div className="w-full h-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                  <span className="text-white font-semibold">Insurance</span>
                </div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="group-hover:text-primary transition-colors text-lg">
                  Payungku
                </CardTitle>
                <CardDescription className="text-sm">
                  A website for medical practitioners to buy medical
                  indemnities.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1 mb-3">
                  <Badge variant="outline" className="text-xs">
                    HTML
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    CSS
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    BS5
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Laravel
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    PHP
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    BillPlz
                  </Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" disabled>
                    <Link href="#" className="flex items-center gap-1">
                      <Github className="h-3 w-3" /> Code
                    </Link>
                  </Button>
                  <Button size="sm">
                    <Link
                      href="https://payungku.my/user-login"
                      className="flex items-center gap-1"
                      target="_blank"
                    >
                      <ExternalLink className="h-3 w-3" /> View
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
