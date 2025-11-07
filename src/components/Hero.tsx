import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="Hero Background" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float animation-delay-400"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              Hi, I'm <span className="text-primary glow-text">Madhushree</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground">
              Full Stack Developer & Problem Solver
            </p>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate Computer Science student skilled in React, Python, and AI/ML. 
              Active LeetCode solver with 350+ problems conquered, blending logic and creativity 
              to build innovative solutions.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in-up animation-delay-200">
            <Button size="lg" className="glow group" asChild>
              <a href="#contact">
                <Mail className="mr-2 h-5 w-5 group-hover:animate-glow-pulse" />
                Get In Touch
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 animate-fade-in-up animation-delay-400">
            <Button variant="ghost" size="icon" className="hover:text-primary hover:glow" asChild>
              <a href="https://github.com/madhushree" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary hover:glow" asChild>
              <a href="https://www.linkedin.com/in/madhushree-murali-b876a3320/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary hover:glow" asChild>
              <a href="mailto:madhushreemurali4617@gmail.com" aria-label="Email">
                <Mail className="h-6 w-6" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-glow-pulse"></div>
        </div>
      </div>
    </section>
  );
};
