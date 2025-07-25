import Hero from "@/components/portfolio/sections/Hero"
import About from "@/components/portfolio/sections/About"
import Skills from "@/components/portfolio/sections/Skills"
import Projects from "@/components/portfolio/sections/Projects"
import Contact from "@/components/portfolio/sections/Contact"
import Footer from "@/components/portfolio/components/Footer"
import { Separator } from "@/components/ui/separator"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">

      <Hero />

      <Separator />

      <About />

      <Separator />

      <Skills />

      <Separator />

      <Projects />

      <Separator />

      <Contact />

      <Separator />

      <Footer />
      
    </div>
  )
}
