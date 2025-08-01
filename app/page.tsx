"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Palette,
  Smartphone,
  Globe,
  ChevronLeft,
  ChevronRight,
  Home,
  User,
  Wrench,
  FolderOpen,
  Phone,
} from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

const sections = [
  { id: "hero", icon: Home, label: "Home" },
  { id: "about", icon: User, label: "About" },
  { id: "skills", icon: Wrench, label: "Skills" },
  { id: "projects", icon: FolderOpen, label: "Projects" },
  { id: "contact", icon: Phone, label: "Contact" },
]

export default function Portfolio() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sections.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sections.length) % sections.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide()
      if (e.key === "ArrowRight") nextSlide()
    }

    // Throttle function to prevent too rapid slide changes
    let isScrolling = false
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()

      if (isScrolling) return

      isScrolling = true

      // Determine scroll direction
      if (e.deltaY > 0) {
        // Scrolling down = next slide
        nextSlide()
      } else if (e.deltaY < 0) {
        // Scrolling up = previous slide
        prevSlide()
      }

      // Reset throttle after animation completes
      setTimeout(() => {
        isScrolling = false
      }, 600) // Slightly longer than the CSS transition (500ms)
    }

    window.addEventListener("keydown", handleKeyDown)
    window.addEventListener("wheel", handleWheel, { passive: false })

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener("wheel", handleWheel)
    }
  }, [])

  return (
    <div className="h-screen overflow-hidden bg-background">
      {/* Slides Container */}
      <div className="h-full">
        <div
          className="flex h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {/* Hero Slide */}
          <div className="min-w-full h-full flex items-center justify-center px-4">
            <div className="container mx-auto max-w-4xl">
              <Card className="border-0 shadow-none bg-transparent">
                <CardContent className="text-center p-0">
                  <Avatar className="h-32 w-32 mx-auto mb-8 border-4 border-primary/20">
                    <AvatarImage src="/placeholder.svg?height=128&width=128" alt="Alex Johnson" />
                    <AvatarFallback className="text-2xl">AJ</AvatarFallback>
                  </Avatar>

                  <div className="space-y-4 mb-8">
                    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl">
                      Hi, I'm <span className="text-primary">Alex Johnson</span>
                    </h1>
                    <p className="text-xl text-muted-foreground">Full-Stack Web Developer</p>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-7">
                      I create beautiful, responsive web applications using modern technologies. Passionate about clean
                      code, user experience, and bringing ideas to life.
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

          {/* About Slide */}
          <div className="min-w-full h-full flex items-center justify-center px-4">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-12">
                <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight mb-4">About Me</h2>
                <p className="text-muted-foreground">Learn more about my background and what drives me</p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center max-h-[70vh]">
                <Card className="h-full">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <p className="leading-7 text-lg">
                        With over 5 years of experience in web development, I specialize in creating scalable,
                        user-friendly applications that solve real-world problems.
                      </p>
                      <p className="leading-7 text-lg">
                        I'm passionate about staying up-to-date with the latest technologies and best practices in web
                        development. When I'm not coding, you can find me contributing to open-source projects.
                      </p>
                      <p className="leading-7 text-lg">
                        I believe in writing clean, maintainable code and creating exceptional user experiences that
                        make a difference.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="h-full">
                  <CardContent className="p-8">
                    <div className="space-y-8">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <Code className="h-8 w-8 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">Clean Code</h3>
                          <p className="text-muted-foreground">Maintainable and scalable solutions</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <Palette className="h-8 w-8 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">Modern Design</h3>
                          <p className="text-muted-foreground">Beautiful and intuitive interfaces</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <Smartphone className="h-8 w-8 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">Mobile First</h3>
                          <p className="text-muted-foreground">Responsive across all devices</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <Globe className="h-8 w-8 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">Full Stack</h3>
                          <p className="text-muted-foreground">End-to-end development</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Skills Slide */}
          <div className="min-w-full h-full flex items-center justify-center px-4">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-12">
                <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight mb-4">Skills & Technologies</h2>
                <p className="text-muted-foreground">The tools and technologies I use to bring ideas to life</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-h-[70vh]">
                <Card className="relative overflow-hidden h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <div className="p-2 bg-blue-500/10 rounded-lg">
                        <Code className="h-5 w-5 text-blue-500" />
                      </div>
                      <div>
                        <CardTitle>Frontend</CardTitle>
                        <CardDescription>User interface development</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">React</Badge>
                      <Badge variant="secondary">Next.js</Badge>
                      <Badge variant="secondary">TypeScript</Badge>
                      <Badge variant="secondary">Tailwind CSS</Badge>
                      <Badge variant="secondary">HTML5</Badge>
                      <Badge variant="secondary">CSS3</Badge>
                      <Badge variant="secondary">JavaScript</Badge>
                      <Badge variant="secondary">Vue.js</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="relative overflow-hidden h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <div className="p-2 bg-green-500/10 rounded-lg">
                        <Globe className="h-5 w-5 text-green-500" />
                      </div>
                      <div>
                        <CardTitle>Backend</CardTitle>
                        <CardDescription>Server-side development</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Node.js</Badge>
                      <Badge variant="secondary">Express</Badge>
                      <Badge variant="secondary">Python</Badge>
                      <Badge variant="secondary">PostgreSQL</Badge>
                      <Badge variant="secondary">MongoDB</Badge>
                      <Badge variant="secondary">REST APIs</Badge>
                      <Badge variant="secondary">GraphQL</Badge>
                      <Badge variant="secondary">Prisma</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="relative overflow-hidden h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <div className="p-2 bg-purple-500/10 rounded-lg">
                        <Palette className="h-5 w-5 text-purple-500" />
                      </div>
                      <div>
                        <CardTitle>Tools & DevOps</CardTitle>
                        <CardDescription>Development workflow</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Git</Badge>
                      <Badge variant="secondary">Docker</Badge>
                      <Badge variant="secondary">AWS</Badge>
                      <Badge variant="secondary">Vercel</Badge>
                      <Badge variant="secondary">Jest</Badge>
                      <Badge variant="secondary">Figma</Badge>
                      <Badge variant="secondary">Linux</Badge>
                      <Badge variant="secondary">CI/CD</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Projects Slide */}
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
                        Next.js
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Stripe
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        PostgreSQL
                      </Badge>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" asChild>
                        <Link href="#" className="flex items-center gap-1">
                          <Github className="h-3 w-3" />
                          Code
                        </Link>
                      </Button>
                      <Button size="sm" asChild>
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
                    <div className="w-full h-full bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center">
                      <span className="text-white font-semibold">Task Manager</span>
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="group-hover:text-primary transition-colors text-lg">
                      Task Management App
                    </CardTitle>
                    <CardDescription className="text-sm">
                      Collaborative project management with real-time updates
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1 mb-3">
                      <Badge variant="outline" className="text-xs">
                        React
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Socket.io
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        MongoDB
                      </Badge>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" asChild>
                        <Link href="#" className="flex items-center gap-1">
                          <Github className="h-3 w-3" />
                          Code
                        </Link>
                      </Button>
                      <Button size="sm" asChild>
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
                      <Button size="sm" variant="outline" asChild>
                        <Link href="#" className="flex items-center gap-1">
                          <Github className="h-3 w-3" />
                          Code
                        </Link>
                      </Button>
                      <Button size="sm" asChild>
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

          {/* Contact Slide */}
          <div className="min-w-full h-full flex items-center justify-center px-4">
            <div className="container mx-auto max-w-4xl">
              <Card className="border-0 shadow-none bg-transparent">
                <CardContent className="text-center p-0">
                  <div className="mb-12">
                    <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight mb-4">Let's Work Together</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-7">
                      I'm always interested in new opportunities and exciting projects. Whether you have a question or
                      just want to say hi, feel free to reach out!
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
                          <Link href="mailto:alex@example.com">alex@example.com</Link>
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
                          <Link href="https://linkedin.com/in/alexjohnson">Connect with me</Link>
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
                          <Link href="https://github.com/alexjohnson">View my code</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </div>

                  <Button size="lg" asChild>
                    <Link href="mailto:alex@example.com" className="flex items-center gap-2">
                      <Mail className="h-5 w-5" />
                      Get In Touch
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Icon Navigation */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 bg-background/90 backdrop-blur-sm border rounded-full px-6 py-3 shadow-lg">
        <Button variant="ghost" size="icon" onClick={prevSlide} disabled={currentSlide === 0} className="h-8 w-8">
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <div className="flex items-center space-x-1">
          {sections.map((section, index) => {
            const IconComponent = section.icon
            const isActive = currentSlide === index
            return (
              <button
                key={section.id}
                onClick={() => goToSlide(index)}
                className={`group relative flex items-center justify-center rounded-full p-3 transition-all duration-300 hover:bg-primary/10 ${
                  isActive ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
                title={section.label}
              >
                <IconComponent
                  className={`transition-all duration-300 ${
                    isActive ? "h-6 w-6 scale-110" : "h-5 w-5 group-hover:scale-105"
                  }`}
                />

                {/* Tooltip */}
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-foreground text-background text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                  {section.label}
                </div>
              </button>
            )
          })}
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={nextSlide}
          disabled={currentSlide === sections.length - 1}
          className="h-8 w-8"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Keyboard Instructions */}
      <div className="fixed bottom-4 right-4 text-xs text-muted-foreground bg-background/80 backdrop-blur-sm border rounded px-2 py-1">
        Use ← → keys or mouse wheel to navigate
      </div>
    </div>
  )
}
