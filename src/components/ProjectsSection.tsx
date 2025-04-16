import React, { useRef, useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Github,
  Code,
  Brush,
  Layout,
  Palette,
} from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  demoUrl: string;
  codeUrl: string;
  color: string;
  icon: React.ReactNode;
  stack: string;
}

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Sample projects data
  const projects: Project[] = [
    {
      id: 1,
      title: "NoteWave",
      description: `NoteWave is a web application that enables users to take real-time speech-to-text notes and summarize those notes,YouTube videos, and PDFs. And generate PPTs, PDFs, flashcards, and quizzes`,
      tags: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
      image: "/notewave.png",
      demoUrl: "https://notewave-ai.vercel.app/",
      codeUrl: "https://github.com/priyankasoni930/NoteWave",
      color: "#9b87f5",
      icon: <Layout />,
      stack: "full",
    },
    {
      id: 2,
      title: "Career-Canvas",
      description: `Career Canvas is a resume builder, cover letter generator, and ATS score checker to help users create job-ready applications. With a portfolio builder where users can upload their resume, choose from 50+ portfolio templates, and get a live link for their portfolio.`,
      tags: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
      image: "/careercanvas.png",
      demoUrl: "https://career-canvas-ai.vercel.app/",
      codeUrl: "#",
      color: "#FEC6A1",
      icon: <Palette />,
      stack: "front",
    },
    {
      id: 3,
      title: "Interview-Buddy",
      description:
        "Interview-Buddy is a web application providing personalized interview simulations and AI-powered performance analysis. Designed to help users refine their interview skills.",
      tags: ["Next.js", "JavaScript", "PostgreSQL", "Drizzle"],
      image: "/interview-buddy.png",
      demoUrl: "https://interview-buddyai.vercel.app/",
      codeUrl: "https://github.com/priyankasoni930/Interview-Buddy",
      color: "#D3E4FD",
      icon: <Brush />,
      stack: "full",
    },
    {
      id: 4,
      title: "LinkShrink",
      description: `LinkShrink is a sleek URL shortener website, designed to make sharing links easier and more efficient. LinkShrink allows users to quickly shorten long URLs, track click statistics, and manage their links effortlessly.`,
      tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
      image: "/linkshrink.png",
      demoUrl: "https://link-shrink-snowy.vercel.app/",
      codeUrl: "https://github.com/priyankasoni930/LinkShrink",
      color: "#F2FCE2",
      icon: <Code />,
      stack: "full",
    },
    {
      id: 5,
      title: "GlamStrip Studio",
      description: `GlamStrip Studio is a web application that lets users capture photobooth-style strip photos, apply aesthetic filters, and craft beautiful photo collages. Users can upload or capture photos, apply real-time filters, remove backgrounds, add cute stickers and text, and customize photo strips with vibrant borders and themes. The platform offers 50+ collage layouts`,
      tags: ["React", "TypeScript", "Tailwind CSS"],
      image: "/glamstrip-studio.png",
      demoUrl: "#",
      codeUrl: "#",
      color: "#FFD1DC",
      icon: <Code />,
      stack: "front",
    },
    {
      id: 6,
      title: "ReadRealm",
      description:
        "ReadRealm is a web application designed for book lovers to connect, track, and grow their reading journeys. The platform allows users to leave detailed reviews on books, build and organize their personal digital library, and create custom reading challenges to stay motivated.It features interactive forums where users can chat",
      tags: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
      image: "/readrealm.png",
      demoUrl: "https://read-realm-snowy.vercel.app/",
      codeUrl: "https://github.com/priyankasoni930/Read-Realm",
      color: "#B5EAD7",
      icon: <Code />,
      stack: "full",
    },
    {
      id: 7,
      title: "StoryNest",
      description: `StoryNest is a backend platform designed to provide a Wattpad-like experience for reading and writing stories.`,
      tags: ["Node.js", "Express.js", "MongoDB", "Mongoose"],
      image: "",
      demoUrl: "#",
      codeUrl: "https://github.com/priyankasoni930/StoryNest-Backend",
      color: "#C7CEEA",
      icon: <Code />,
      stack: "back",
    },
    {
      id: 8,
      title: "DevInquire",
      description: `DevInquire is a backend designed to support a Stack Overflow-like platform. It facilitates efficient question-and-answer interactions, enabling developers to seek help and share knowledge effortlessly.`,
      tags: ["Node.js", "Express.js", "MongoDB", "Mongoose"],
      image: "",
      demoUrl: "#",
      codeUrl: "https://github.com/priyankasoni930/DevInquire-Backend",
      color: "#E2F0CB",
      icon: <Code />,
      stack: "back",
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
    <section id="projects" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-pixel">
            <span className="brush-stroke-heading">Featured Projects</span>
          </h2>
          <p className="text-lg font-handwritten text-gray-600 mt-6">
            A selection of my recent work and personal projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`transform transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Card className="watercolor-project-card overflow-hidden h-full border-0 flex flex-col relative">
                <div
                  className="h-50 relative overflow-hidden project-image-container"
                  style={{
                    backgroundColor: `${project.color}20`,
                  }}
                >
                  {project.stack !== "back" && project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  )}

                  <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent" />
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-2 font-mono">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-md flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs rounded-full"
                        style={{
                          backgroundColor: `${project.color}20`,
                          color: project.color,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-3 mt-auto">
                    {project.stack === "full" && (
                      <>
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex items-center space-x-2 border-retro-purple text-retro-purple hover:bg-retro-purple/10"
                          onClick={() => window.open(project.codeUrl, "_blank")}
                        >
                          <Github className="w-4 h-4" />
                          <span>Code</span>
                        </Button>
                        <Button
                          size="sm"
                          className="flex items-center space-x-2 bg-retro-purple hover:bg-retro-purple/80 text-white"
                          onClick={() => window.open(project.demoUrl, "_blank")}
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Demo</span>
                        </Button>
                      </>
                    )}
                    {project.stack === "front" && (
                      <Button
                        size="sm"
                        className="flex items-center space-x-2 bg-retro-purple hover:bg-retro-purple/80 text-white"
                        onClick={() => window.open(project.demoUrl, "_blank")}
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Demo</span>
                      </Button>
                    )}
                    {project.stack === "back" && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center space-x-2 border-retro-purple text-retro-purple hover:bg-retro-purple/10"
                        onClick={() => window.open(project.codeUrl, "_blank")}
                      >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </Button>
                    )}
                  </div>
                </div>

                <div className="absolute top-3 right-3 z-10">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${project.color}70` }}
                  >
                    <span className="text-xs font-bold text-white">
                      #{project.id}
                    </span>
                  </div>
                </div>

                <div
                  className="brushstroke-corner-top-right absolute top-0 right-0 w-24 h-24 -mt-8 -mr-8"
                  style={{ color: `${project.color}30` }}
                />
                <div
                  className="brushstroke-corner-bottom-left absolute bottom-0 left-0 w-24 h-24 -mb-8 -ml-8"
                  style={{ color: `${project.color}20` }}
                />
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
