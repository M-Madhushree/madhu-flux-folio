import { GraduationCap, MapPin, Phone, Mail } from "lucide-react";
import { Card } from "@/components/ui/card";

const education = [
  {
    degree: "B.E. Computer Science Engineering",
    institution: "Easwari Engineering College, Anna University",
    period: "2023 - 2027",
    grade: "CGPA: 9.2",
  },
  {
    degree: "Class 12",
    institution: "DAV School, Adambakkam",
    period: "2023",
    grade: "94%",
  },
  {
    degree: "Class 10",
    institution: "DAV School, Adambakkam",
    period: "2021",
    grade: "97%",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-radial opacity-50"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full glow"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Objective */}
            <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:glow animate-fade-in-up">
              <h3 className="text-xl font-semibold mb-4 text-primary">Objective</h3>
              <p className="text-muted-foreground leading-relaxed">
                Passionate Computer Science student skilled in full-stack development, problem-solving, 
                and collaborative learning. An active LeetCode solver and React developer with hands-on 
                exposure to Machine Learning and AI tools. With a creative background in classical dance 
                and music, I bring both logic and artistry into everything I do. Eager to grow in a 
                dynamic, hands-on environment that blends technology, intelligence, and innovation.
              </p>
            </Card>

            {/* Contact Info */}
            <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:glow animate-fade-in-up animation-delay-200">
              <h3 className="text-xl font-semibold mb-4 text-primary">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Chennai, Tamil Nadu</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>8825587716</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="h-5 w-5 text-primary" />
                  <a href="mailto:madhushreemurali4617@gmail.com" className="hover:text-primary transition-colors">
                    madhushreemurali4617@gmail.com
                  </a>
                </div>
              </div>
            </Card>
          </div>

          {/* Education */}
          <div className="space-y-6 animate-fade-in-up animation-delay-400">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              Education
            </h3>
            <div className="grid gap-4">
              {education.map((edu, index) => (
                <Card key={index} className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <h4 className="font-semibold text-lg">{edu.degree}</h4>
                      <p className="text-muted-foreground">{edu.institution}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-primary font-semibold">{edu.grade}</p>
                      <p className="text-sm text-muted-foreground">{edu.period}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
