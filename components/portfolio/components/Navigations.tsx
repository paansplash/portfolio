"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Menu, X } from "lucide-react";
import { useState } from "react";

interface Section {
  id: string;
  label: string;
  icon: React.ElementType;
}

interface NavigationsProps {
  sections: Section[];
  activeIndex: number;
  goToSection: (index: number) => void;
}

export default function Navigations({
  sections,
  activeIndex,
  goToSection,
}: NavigationsProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handlePrev = () => {
    if (activeIndex > 0) goToSection(activeIndex - 1);
  };

  const handleNext = () => {
    if (activeIndex < sections.length - 1) goToSection(activeIndex + 1);
  };

  const handleSectionClick = (index: number) => {
    goToSection(index);
    setIsOpen(false); // Close menu after selecting a section
  };

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden md:flex fixed bottom-8 left-1/2 -translate-x-1/2 items-center space-x-2 bg-background/90 backdrop-blur-sm border rounded-full px-6 py-3 shadow-lg z-50">
        <Button
          variant="ghost"
          size="icon"
          onClick={handlePrev}
          disabled={activeIndex === 0}
          className="h-8 w-8"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <div className="flex items-center space-x-1">
          {sections.map((section, index) => {
            const IconComponent = section.icon;
            const isActive = activeIndex === index;
            return (
              <button
                key={section.id}
                onClick={() => handleSectionClick(index)}
                className={`group relative flex items-center justify-center rounded-full p-3 transition-all duration-300 hover:bg-primary/10 ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                title={section.label}
              >
                <IconComponent
                  className={`transition-all duration-300 ${
                    isActive
                      ? "h-6 w-6 scale-110"
                      : "h-5 w-5 group-hover:scale-105"
                  }`}
                />
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-foreground text-background text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                  {section.label}
                </div>
              </button>
            );
          })}
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={handleNext}
          disabled={activeIndex === sections.length - 1}
          className="h-8 w-8"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
        <div className="ml-2">
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile: Burger + Floating Dock */}
      <div className="md:hidden fixed bottom-8 left-4 z-50">
        {!isOpen ? (
          // Burger Button (bottom-left)
          <Button
            variant="default"
            size="icon"
            className="h-12 w-12 rounded-full shadow-lg"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        ) : (
          // Floating Dock (left side, vertical)
          <div className="fixed top-1/2 left-4 -translate-y-1/2 flex flex-col items-center space-y-2 bg-background/95 backdrop-blur-sm border rounded-2xl px-2 py-3 shadow-xl">
            <Button
              variant="ghost"
              size="icon"
              onClick={handlePrev}
              disabled={activeIndex === 0}
              className="h-8 w-8"
            >
              <ChevronLeft className="h-4 w-4 rotate-90" />
              {/* Rotate so it looks like "up" */}
            </Button>

            {sections.map((section, index) => {
              const IconComponent = section.icon;
              const isActive = activeIndex === index;
              return (
                <button
                  key={section.id}
                  onClick={() => handleSectionClick(index)}
                  className={`group relative flex items-center justify-center rounded-full p-2 transition-all duration-300 hover:bg-primary/10 ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  title={section.label}
                >
                  <IconComponent
                    className={`transition-all duration-300 ${
                      isActive
                        ? "h-5 w-5 scale-110"
                        : "h-5 w-5 group-hover:scale-105"
                    }`}
                  />
                </button>
              );
            })}

            <Button
              variant="ghost"
              size="icon"
              onClick={handleNext}
              disabled={activeIndex === sections.length - 1}
              className="h-8 w-8"
            >
              <ChevronRight className="h-4 w-4 -rotate-90" />
              {/* Rotate so it looks like "down" */}
            </Button>

            <div className="mt-2">
              <ThemeToggle />
            </div>

            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
