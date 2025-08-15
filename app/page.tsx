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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import Hero from "@/components/portfolio/sections/Hero";
import About from "@/components/portfolio/sections/About";
import Skills from "@/components/portfolio/sections/Skills";
import Projects from "@/components/portfolio/sections/Projects";
import Contact from "@/components/portfolio/sections/Contact";
import Navigations from "@/components/portfolio/components/Navigations";

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

    // Throttle function to prevent too rapid slide changes
    let isScrolling = false;
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      if (isScrolling) return;

      isScrolling = true;

      // Determine scroll direction
      if (e.deltaY > 0) {
        // Scrolling down = next slide
        nextSlide();
      } else if (e.deltaY < 0) {
        // Scrolling up = previous slide
        prevSlide();
      }

      // Reset throttle after animation completes
      setTimeout(() => {
        isScrolling = false;
      }, 600); // Slightly longer than the CSS transition (500ms)
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("wheel", handleWheel);
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
        Use ← → keys or mouse wheel to navigate
      </div>
    </div>
  );
}
