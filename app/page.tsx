import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Github, Linkedin, Mail, ExternalLink, Code, Palette, Smartphone, Globe, Menu } from "lucide-react"
import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ModeToggle } from "@/components/ui/mode-toggle"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Farhan Afandi" />
                <AvatarFallback>FA</AvatarFallback>
              </Avatar>
              <span className="text-xl font-bold">Farhan Afandi</span>
            </div>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="#about"
                      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                    >
                      About
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="#skills"
                      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                    >
                      Skills
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="#projects"
                      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                    >
                      Projects
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="#contact"
                      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                    >
                      Contact
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <ModeToggle />
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Mobile Navigation */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col space-y-4">
                  <Link href="#about" className="text-lg font-medium hover:text-primary transition-colors">
                    About
                  </Link>
                  <Link href="#skills" className="text-lg font-medium hover:text-primary transition-colors">
                    Skills
                  </Link>
                  <Link href="#projects" className="text-lg font-medium hover:text-primary transition-colors">
                    Projects
                  </Link>
                  <Link href="#contact" className="text-lg font-medium hover:text-primary transition-colors">
                    Contact
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-0 shadow-none bg-transparent">
            <CardContent className="text-center p-0">
              <Avatar className="h-32 w-32 mx-auto mb-8 border-4 border-primary/20">
                <AvatarImage src="/placeholder.svg?height=128&width=128" alt="Farhan Afandi" />
                <AvatarFallback className="text-2xl">FA</AvatarFallback>
              </Avatar>

              <div className="space-y-4 mb-8">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                  <span className="text-primary">Farhan Afandi</span>
                </h1>
                <p className="text-xl text-muted-foreground">Web Developer</p>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-7">
                  Web developer with a strong grasp of business needs. Experienced in project planning, 
                  requirement gathering, and database design.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" asChild>
                  <Link href="#projects">View My Work</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="#contact">Get In Touch</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* About Section */}
      <section id="about" className="py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight mb-4">About Me</h2>
            <p className="text-muted-foreground">Learn more about my background and what drives me</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <p className="leading-7">
                    With over 5 years of experience in web development, I specialize in creating scalable, user-friendly
                    applications that solve real-world problems.
                  </p>
                  <p className="leading-7">
                    I'm passionate about staying up-to-date with the latest technologies and best practices in web
                    development. When I'm not coding, you can find me contributing to open-source projects or learning
                    new frameworks.
                  </p>
                  <p className="leading-7">
                    I believe in writing clean, maintainable code and creating exceptional user experiences that make a
                    difference.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Code className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Clean Code</h3>
                      <p className="text-sm text-muted-foreground">Maintainable and scalable solutions</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Palette className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Modern Design</h3>
                      <p className="text-sm text-muted-foreground">Beautiful and intuitive interfaces</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Smartphone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Mobile First</h3>
                      <p className="text-sm text-muted-foreground">Responsive across all devices</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Globe className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Full Stack</h3>
                      <p className="text-sm text-muted-foreground">End-to-end development</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator />

      {/* Skills Section */}
      <section id="skills" className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight mb-4">Skills & Technologies</h2>
            <p className="text-muted-foreground">The tools and technologies I use to bring ideas to life</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="relative overflow-hidden">
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

            <Card className="relative overflow-hidden">
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

            <Card className="relative overflow-hidden">
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
      </section>

      <Separator />

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight mb-4">Featured Projects</h2>
            <p className="text-muted-foreground">A showcase of my recent work and personal projects</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300">
              <div className="aspect-video relative overflow-hidden rounded-t-lg">
                <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-white font-semibold">E-commerce Platform</span>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">E-commerce Platform</CardTitle>
                <CardDescription>
                  Full-stack e-commerce solution with payment integration and admin dashboard
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Next.js</Badge>
                  <Badge variant="outline">Stripe</Badge>
                  <Badge variant="outline">PostgreSQL</Badge>
                  <Badge variant="outline">Prisma</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <Link href="#" className="flex items-center gap-2">
                      <Github className="h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href="#" className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" />
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
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">Task Management App</CardTitle>
                <CardDescription>
                  Collaborative project management tool with real-time updates and team features
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">Socket.io</Badge>
                  <Badge variant="outline">MongoDB</Badge>
                  <Badge variant="outline">Express</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <Link href="#" className="flex items-center gap-2">
                      <Github className="h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href="#" className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" />
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
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">Weather Dashboard</CardTitle>
                <CardDescription>
                  Beautiful weather application with location-based forecasts and PWA features
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Vue.js</Badge>
                  <Badge variant="outline">PWA</Badge>
                  <Badge variant="outline">API</Badge>
                  <Badge variant="outline">Charts</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <Link href="#" className="flex items-center gap-2">
                      <Github className="h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href="#" className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator />

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-0 shadow-none bg-transparent">
            <CardContent className="text-center p-0">
              <div className="mb-12">
                <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight mb-4">Let's Work Together</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-7">
                  I'm always interested in new opportunities and exciting projects. Whether you have a question or just
                  want to say hi, feel free to reach out!
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 mb-8">
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
      </section>

      <Separator />

      {/* Footer */}
      <footer className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-0 shadow-none bg-transparent">
            <CardContent className="text-center p-0">
              <p className="text-sm text-muted-foreground">
                © 2024 Farhan Afandi. Built with Next.js, shadcn/ui, and Tailwind CSS.
              </p>
            </CardContent>
          </Card>
        </div>
      </footer>
    </div>
  )
}
