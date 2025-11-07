import { Card } from "@/components/ui/card";
import { Code2, Database, Globe, GitBranch, Brain, Network } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["Python", "C", "C++", "Java", "JavaScript", "TypeScript"],
  },
  {
    title: "Web Development",
    icon: Globe,
    skills: ["HTML", "CSS", "Tailwind CSS", "React.js", "Angular"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "PostgreSQL"],
  },
  {
    title: "Tools & Platforms",
    icon: GitBranch,
    skills: ["Git", "GitHub", "Linux"],
  },
  {
    title: "Core Areas",
    icon: Brain,
    skills: ["DSA", "OOP", "AI/ML", "Cloud Computing", "Problem Solving"],
  },
  {
    title: "Networking & Security",
    icon: Network,
    skills: ["Networking", "Cybersecurity", "Ethical Hacking"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold">
              Technical <span className="text-primary">Skills</span>
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full glow"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit built through hands-on projects, coursework, and continuous learning
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card
                  key={index}
                  className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:glow group animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 text-sm bg-muted rounded-full text-foreground/80 hover:bg-primary/20 hover:text-primary transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
