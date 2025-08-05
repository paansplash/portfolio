"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function Projects() {
  return (
    <div className="min-w-full h-full flex items-center justify-center px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight mb-4">Featured Projects</h2>
          <p className="text-muted-foreground">A showcase of my recent work and personal projects</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[70vh] overflow-y-auto">
          <Card className="group hover:shadow-lg transition-all duration-300">
            <div className="aspect-video relative overflow-hidden rounded-t-lg">
              <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-semibold">E-commerce Platform</span>
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
                    <Github className="h-3 w-3" />
                    Code
                  </Link>
                </Button>
                <Button size="sm" disabled>
                  <Link href="#" className="flex items-center gap-1">
                    <ExternalLink className="h-3 w-3" />
                    Demo
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300">
            <div className="aspect-video relative overflow-hidden rounded-t-lg">
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
                    <Github className="h-3 w-3" />
                    Code
                  </Link>
                </Button>
                <Button size="sm" disabled>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <ExternalLink className="h-3 w-3" />
                    Demo
                  </div>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300">
            <div className="aspect-video relative overflow-hidden rounded-t-lg">
              <div className="w-full h-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                <span className="text-white font-semibold">Weather App</span>
              </div>
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="group-hover:text-primary transition-colors text-lg">
                Weather Dashboard
              </CardTitle>
              <CardDescription className="text-sm">
                Beautiful weather app with location-based forecasts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-1 mb-3">
                <Badge variant="outline" className="text-xs">
                  Vue.js
                </Badge>
                <Badge variant="outline" className="text-xs">
                  PWA
                </Badge>
                <Badge variant="outline" className="text-xs">
                  API
                </Badge>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" disabled>
                  <Link href="#" className="flex items-center gap-1">
                    <Github className="h-3 w-3" />
                    Code
                  </Link>
                </Button>
                <Button size="sm" disabled>
                  <Link href="#" className="flex items-center gap-1">
                    <ExternalLink className="h-3 w-3" />
                    Demo
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}