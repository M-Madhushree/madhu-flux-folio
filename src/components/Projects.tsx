import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "MEDICARE - Hospital Management System",
    description: "Comprehensive hospital management platform with role-based dashboards, billing module, and Supabase authentication. Features real-time patient tracking and appointment scheduling.",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "Supabase"],
    category: "Full Stack",
  },
  {
    title: "Lambo Car Website",
    description: "Multi-page web application for Lamborghini Automobili featuring smooth animations, image carousel, user authentication, and customer review system.",
    tech: ["HTML", "CSS", "JavaScript", "Animations"],
    category: "Frontend",
  },
  {
    title: "AgriCare Platform",
    description: "Support system for farmers providing real-time weather updates and market data integration to enable better agricultural decision-making.",
    tech: ["React", "Weather API", "Data Visualization"],
    category: "Web App",
  },
  {
    title: "Attendify - Smart Attendance System",
    description: "Geo-location and biometric-based attendance tracking system with cloud-based data management to eliminate proxy attendance.",
    tech: ["GPS Integration", "Biometric Auth", "Cloud Storage"],
    category: "IoT & Security",
  },
  {
    title: "Webcam Spyware Detection Tool",
    description: "Security tool built during cybersecurity internship using computer vision to detect unauthorized webcam access and potential spyware.",
    tech: ["Python", "OpenCV", "Tkinter", "Firebase"],
    category: "Cybersecurity",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-radial opacity-30"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full glow"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real-world applications solving practical problems across healthcare, agriculture, and security
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:glow hover:-translate-y-1 group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-2">
                    <Badge variant="outline" className="border-primary/50 text-primary">
                      {project.category}
                    </Badge>
                    <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs bg-muted rounded-full text-foreground/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
