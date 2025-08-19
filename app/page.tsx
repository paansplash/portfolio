"use client";

import { useState, useEffect } from "react";
import { Home, User, Wrench, FolderOpen, Phone } from "lucide-react";

import Hero from "@/components/portfolio/sections/Hero";
import About from "@/components/portfolio/sections/About";
import Skills from "@/components/portfolio/sections/Skills";
import Projects from "@/components/portfolio/sections/Projects";
import Contact from "@/components/portfolio/sections/Contact";
import Navigations from "@/components/portfolio/components/Navigations";
import Chatbox from "@/components/portfolio/components/Chatbox";

const sections = [
  { id: "hero", icon: Home, label: "Home" },
  { id: "about", icon: User, label: "About" },
  { id: "skills", icon: Wrench, label: "Skills" },
  { id: "projects", icon: FolderOpen, label: "Projects" },
  { id: "contact", icon: Phone, label: "Contact" },
];

export default function Portfolio() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sections.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sections.length) % sections.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };

    // Mouse wheel navigation
    let isScrolling = false;
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (isScrolling) return;
      isScrolling = true;

      if (e.deltaY > 0) nextSlide();
      else if (e.deltaY < 0) prevSlide();

      setTimeout(() => {
        isScrolling = false;
      }, 600);
    };

    // Touch swipe navigation
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    };

    const handleSwipe = () => {
      const swipeDistance = touchEndX - touchStartX;
      if (Math.abs(swipeDistance) > 50) {
        // Minimum swipe distance
        if (swipeDistance > 0) prevSlide(); // Swipe right
        else nextSlide(); // Swipe left
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <div className="h-screen overflow-hidden bg-background">
      {/* Slides Container */}
      <div className="h-full">
        <div
          className="flex h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {/* Hero Slide */}
          <Hero goToSlide={goToSlide} />

          {/* About Slide */}
          <About />

          {/* Skills Slide */}
          <Skills />

          {/* Projects Slide */}
          <Projects />

          {/* Contact Slide */}
          <Contact />
        </div>
      </div>

      {/* Icon Navigation */}
      <Navigations
        sections={sections}
        activeIndex={currentSlide}
        goToSection={(i) => setCurrentSlide(i)}
      />

      {/* Keyboard Instructions */}
      <div className="hidden md:fixed md:bottom-4 md:right-4 md:text-xs md:text-muted-foreground md:bg-background/80 md:backdrop-blur-sm md:border md:rounded md:px-2 md:py-1">
        Use ← → keys, mouse wheel, or swipe to navigate
      </div>
      
      {/* Floating Chat */}
      <Chatbox />
    </div>
  );
}
