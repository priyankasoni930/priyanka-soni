import React, { useRef, useEffect } from "react";
import { Sparkles } from "lucide-react";

// Define all technologies without categorization
const technologies = [
  {
    name: "React",
    color: "#61DAFB",
    darkTextColor: "#000",
    darkBgColor: "#1A1F2C",
  },
  {
    name: "TypeScript",
    color: "#3178C6",
    darkTextColor: "#fff",
    darkBgColor: "#222",
  },
  {
    name: "Next.js",
    color: "#000000",
    darkTextColor: "#fff",
    darkBgColor: "#333",
  },
  {
    name: "Tailwind CSS",
    color: "#06B6D4",
    darkTextColor: "#fff",
    darkBgColor: "#1E293B",
  },
  {
    name: "Node.js",
    color: "#339933",
    darkTextColor: "#fff",
    darkBgColor: "#1A2421",
  },
  {
    name: "Express",
    color: "#000000",
    darkTextColor: "#fff",
    darkBgColor: "#2C2C2C",
  },
  {
    name: "Python",
    color: "#3776AB",
    darkTextColor: "#fff",
    darkBgColor: "#1F2937",
  },
  {
    name: "MongoDB",
    color: "#47A248",
    darkTextColor: "#fff",
    darkBgColor: "#1A2421",
  },
  {
    name: "PostgreSQL",
    color: "#336791",
    darkTextColor: "#fff",
    darkBgColor: "#1F2937",
  },
  {
    name: "Docker",
    color: "#2496ED",
    darkTextColor: "#fff",
    darkBgColor: "#1A2B32",
  },
  {
    name: "JavaScript",
    color: "#FF9900",
    darkTextColor: "#000",
    darkBgColor: "#2C2C2C",
  },
  {
    name: "Prisma",
    color: "#4285F4",
    darkTextColor: "#fff",
    darkBgColor: "#1A2B32",
  },
  {
    name: "Git",
    color: "#E10098",
    darkTextColor: "#fff",
    darkBgColor: "#2C0B11",
  },
  {
    name: "Zustand",
    color: "#DC382D",
    darkTextColor: "#fff",
    darkBgColor: "#2C0B0B",
  },
];

const SkillsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skills =
              sectionRef.current?.querySelectorAll(".skill-bubble");
            skills?.forEach((skill, index) => {
              setTimeout(() => {
                skill.classList.add("animate-in");
              }, 50 * index);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-pixel relative inline-block">
            <span className="brush-stroke-heading">Skills & Expertise</span>
          </h2>
          <p className="text-lg font-handwritten text-gray-600 mt-4">
            A collection of technologies I've worked with
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 relative">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="skill-bubble opacity-0 transform translate-y-4 animate-float"
              style={{
                animationDelay: `${index * 0.2}s`,
                animationDuration: `${6 + Math.random() * 2}s`,
              }}
            >
              <div
                className="relative px-5 py-3 rounded-full bg-white/70 dark:bg-gray-800/30 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-default group"
                style={{
                  borderLeft: `3px solid ${tech.color}`,
                  borderRight: `3px solid ${tech.color}`,
                }}
              >
                <div className="absolute inset-0 bg-white/50 dark:bg-gray-900/20 rounded-full -z-10"></div>
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-full -z-10"
                  style={{
                    background: `radial-gradient(circle at center, ${tech.color} 0%, transparent 70%)`,
                  }}
                ></div>

                <div className="flex items-center gap-2">
                  <span
                    className="inline-block w-2 h-2 rounded-full transition-transform duration-300 group-hover:scale-150"
                    style={{ backgroundColor: tech.color }}
                  ></span>
                  <span
                    className="font-mono font-medium text-sm md:text-base dark:text-gray-100"
                    style={{
                      color: "inherit",
                      textShadow: "none",
                    }}
                  >
                    {tech.name}
                  </span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Sparkles
                      className="w-3 h-3"
                      style={{ color: tech.color }}
                    />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
