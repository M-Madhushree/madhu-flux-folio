import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/80 border-t border-border py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="hover:text-primary hover:glow" asChild>
              <a href="https://github.com/M-Madhushree" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary hover:glow" asChild>
              <a href="https://www.linkedin.com/in/madhushree-murali-b876a3320/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary hover:glow" asChild>
              <a href="mailto:madhushreemurali4617@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* Copyright */}
          <div className="text-center space-y-1">
            <p className="text-sm text-muted-foreground flex items-center gap-1 justify-center">
              Made with <Heart className="h-4 w-4 text-primary animate-glow-pulse" /> by M. Madhushree
            </p>
            <p className="text-xs text-muted-foreground">
              © {currentYear} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
