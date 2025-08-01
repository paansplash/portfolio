"use client"

import { useEffect, useRef, useState } from "react"

import Navigations from "@/components/portfolio/components/Navigations"
import Hero from "@/components/portfolio/sections/Hero"
import About from "@/components/portfolio/sections/About"
import Skills from "@/components/portfolio/sections/Skills"
import Projects from "@/components/portfolio/sections/Projects"
import Contact from "@/components/portfolio/sections/Contact"
import Footer from "@/components/portfolio/components/Footer"

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const sections = 6

  useEffect(() => {
    const container = containerRef.current

    const onWheel = (e: WheelEvent) => {
  if (!container) return

  // Support both regular and shift-based horizontal scrolling
  if (e.shiftKey) {
    container.scrollLeft += e.deltaY
  } else {
    container.scrollLeft += e.deltaY
  }
}

    const onKeyDown = (e: KeyboardEvent) => {
      if (!container) return
      const width = window.innerWidth
      if (e.key === "ArrowRight") {
        container.scrollBy({ left: width, behavior: "smooth" })
      } else if (e.key === "ArrowLeft") {
        container.scrollBy({ left: -width, behavior: "smooth" })
      }
    }

    const onScroll = () => {
      if (!container) return
      const index = Math.round(container.scrollLeft / window.innerWidth)
      setActiveIndex(index)
    }

    container?.addEventListener("scroll", onScroll)
    window.addEventListener("wheel", onWheel) // removed passive: false
    window.addEventListener("keydown", onKeyDown)

    return () => {
      container?.removeEventListener("scroll", onScroll)
      window.removeEventListener("wheel", onWheel)
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [])

  const goToSection = (index: number) => {
    const container = containerRef.current
    if (container) {
      container.scrollTo({ left: index * window.innerWidth, behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-background overflow-hidden relative">
      <Navigations activeIndex={activeIndex} goToSection={goToSection} />

      {/* 🔁 Horizontal Scroll Wrapper */}
      <div
        id="horizontal-wrapper"
        ref={containerRef}
        style={{ touchAction: 'pan-x' }}
        className="flex h-screen w-screen overflow-x-scroll overflow-y-hidden scroll-smooth snap-x snap-mandatory"
      >

        {/* 🔵 Section Indicator */}
        <div className="fixed top-1/2 right-4 -translate-y-1/2 z-50 flex flex-col gap-3 items-center">
          {Array.from({ length: sections }).map((_, i) => (
            <button
              key={i}
              onClick={() => goToSection(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${i === activeIndex ? 'bg-primary scale-125' : 'bg-muted-foreground/30'
                }`}
              aria-label={`Go to section ${i + 1}`}
            />
          ))}
        </div>
        <section className="w-screen h-screen snap-start shrink-0">
          <Hero />
        </section>
        <section className="w-screen h-screen snap-start shrink-0">
          <About />
        </section>
        <section className="w-screen h-screen snap-start shrink-0">
          <Skills />
        </section>
        <section className="w-screen h-screen snap-start shrink-0">
          <Projects />
        </section>
        <section className="w-screen h-screen snap-start shrink-0">
          <Contact />
        </section>
        <section className="w-screen h-screen snap-start shrink-0">
          <Footer />
        </section>
      </div>
    </div>
  )
}
