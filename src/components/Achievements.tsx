import { Card } from "@/components/ui/card";
import { Trophy, Award, Code, Briefcase } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "2nd Place - CTF Hackathon",
    description: "Secured runner-up position at SRM Ramapuram hackathon by Supraja Technologies and earned internship opportunity",
    color: "text-yellow-500",
  },
  {
    icon: Trophy,
    title: "1st Place - Geonava Hackathon'25",
    description: "Won first place in Healthcare & Bioinformatics category at Easwari Engineering College",
    color: "text-yellow-400",
  },
  {
    icon: Code,
    title: "350+ LeetCode Problems",
    description: "Active problem solver with 350+ LeetCode solutions and 150+ CodeChef problems. Earned 200 Days Badge 2025",
    color: "text-orange-500",
  },
  {
    icon: Briefcase,
    title: "Cyber Security Intern",
    description: "Worked on ethical hacking, penetration testing, and digital forensics at Supraja Technologies (May-June 2025)",
    color: "text-blue-500",
  },
];

const certifications = [
  "NPTEL: Joy of Computing in Python, Introduction to IoT, Privacy & Security in Social Media",
  "Infosys Springboard: C++ Fundamentals, Java Essentials",
  "Udemy: The Complete JavaScript Course 2025",
  "MathWorks: Machine Learning Onramp",
  "Cisco: Python Essentials, CyberSecurity, Networking Basics",
  "Microsoft: Gen AI and Copilots, Microsoft Fabric & Data Analytics",
  "CCNA: Networks, Switching, Routing, Wireless Essentials",
];

export const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold">
              Achievements & <span className="text-primary">Recognition</span>
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full glow"></div>
          </div>

          {/* Major Achievements */}
          <div className="grid sm:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <Card
                  key={index}
                  className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:glow group animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex gap-4">
                    <div className={`p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors h-fit`}>
                      <Icon className={`h-6 w-6 ${achievement.color}`} />
                    </div>
                    <div className="space-y-2 flex-1">
                      <h3 className="text-lg font-semibold">{achievement.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Certifications */}
          <div className="animate-fade-in-up animation-delay-400">
            <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <Award className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-semibold">Certifications</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground text-sm">{cert}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
