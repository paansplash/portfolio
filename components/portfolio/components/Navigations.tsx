"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  const handlePrev = () => {
    if (activeIndex > 0) {
      goToSection(activeIndex - 1);
    }
  };

  const handleNext = () => {
    if (activeIndex < sections.length - 1) {
      goToSection(activeIndex + 1);
    }
  };

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 bg-white/5 backdrop-blur-sm border rounded-full px-6 py-3 shadow-lg z-50">
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
              onClick={() => goToSection(index)}
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
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-foreground text-background text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
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
  );
}
