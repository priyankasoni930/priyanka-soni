import React, { useRef, useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import {
  BriefcaseIcon,
  CalendarIcon,
  MapPinIcon,
  StarIcon,
  GraduationCapIcon,
} from "lucide-react";

interface Experience {
  id: number;
  type: "work" | "education";
  title: string;
  organization: string;
  location: string;
  period: string;
  description: string[];
  icon: React.ReactNode;
  color: string;
}

const ExperienceSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const experiences: Experience[] = [
    {
      id: 1,
      type: "work",
      title: "Frontend Developer",
      organization: "Astute Lex Servicado",
      location: "Remote",
      period: "April 2025 - Present",
      description: [
        "Implemented design using React and Tailwind CSS ",
        // "Improved application performance by 20% through code optimization",
        "Collaborated closely with designers and backend developers to build seamless, and responsive interfaces",
        "Developed core user-facing features using React",
      ],
      icon: <BriefcaseIcon />,
      color: "#9b87f5",
    },
    {
      id: 2,
      type: "education",
      title: "Bachelor of Technology in Computer Science AIML",
      organization: "Baderia Global Institute of Engineering and Management",
      location: "Jabalpur, MP",
      period: "2023 - 2027",
      description: [
        "Focused on Software Engineering",
        "Participated in hackathon competitions",
      ],
      icon: <GraduationCapIcon />,
      color: "#C7CEEA",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
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
    <section id="experience" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-pixel">
            <span className="brush-stroke-heading">Experience & Education</span>
          </h2>
          <p className="text-lg font-handwritten text-gray-600 mt-6">
            My professional journey and academic background
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative timeline-brush">
          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`timeline-item relative opacity-0 transition-all duration-700 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-20 opacity-0"
                }`}
                style={{
                  transitionDelay: `${index * 200}ms`,
                  zIndex: experiences.length - index,
                }}
              >
                <div
                  className={`flex ${
                    index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                  }`}
                >
                  <div className="md:w-1/2"></div>
                  <div className="md:w-1/2 relative">
                    <Card
                      className="watercolor-card p-6 ml-8 md:ml-0 md:mx-6 relative "
                      style={{
                        borderLeft: `4px solid ${exp.color}`,
                        boxShadow: `0 10px 25px -5px ${exp.color}30`,
                      }}
                    >
                      {/* Card decoration */}
                      <div
                        className="absolute top-0 right-0 w-20 h-20 -mt-5 -mr-5 opacity-10"
                        style={{
                          backgroundColor: exp.color,
                          borderRadius: "50%",
                          filter: "blur(20px)",
                        }}
                      />

                      {/* Top section */}
                      <div className="flex items-start mb-4">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 mr-4"
                          style={{ backgroundColor: `${exp.color}30` }}
                        >
                          {React.cloneElement(exp.icon as React.ReactElement, {
                            className: "w-5 h-5",
                            style: { color: exp.color },
                          })}
                        </div>

                        <div>
                          <h3 className="text-xl font-bold font-mono">
                            {exp.title}
                          </h3>
                          <p className="text-lg font-medium">
                            {exp.organization}
                          </p>
                        </div>
                      </div>

                      {/* Details */}
                      <div className="text-left">
                        <div className="flex items-center text-sm text-gray-500 mb-2 font-handwritten">
                          <CalendarIcon className="w-4 h-4 mr-1" />
                          <span>{exp.period}</span>
                          <span className="mx-2">•</span>
                          <MapPinIcon className="w-4 h-4 mr-1" />
                          <span>{exp.location}</span>
                        </div>

                        <ul className="space-y-1 text-sm">
                          {exp.description.map((item, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="mr-2 text-xs mt-1">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Card>

                    {/* Timeline dot */}
                    <div
                      className="absolute left-0 md:left-auto md:right-0 top-6 transform md:translate-x-1/2 w-8 h-8 rounded-full border-2 border-white z-10 flex items-center justify-center"
                      style={{
                        backgroundColor: exp.color,
                        boxShadow: `0 0 0 4px ${exp.color}30`,
                        left: index % 2 === 0 ? "auto" : "0",
                        right: index % 2 === 0 ? "0" : "auto",
                        transform:
                          index % 2 === 0
                            ? "translateX(50%)"
                            : "translateX(-50%)",
                      }}
                    >
                      <span className="text-white font-bold text-xs">
                        {exp.id}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
