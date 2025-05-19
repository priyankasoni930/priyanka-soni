import React from "react";
import { Button } from "@/components/ui/button";
import { Terminal, Code, ArrowDownCircle, Sparkles } from "lucide-react";

const HeroSection = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleResumeClick = (e) => {
    e.preventDefault();
    window.open(
      "https://drive.google.com/file/d/1ETVU_DnsOPTY4MWKsCUXzkF7eyklkg85/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      id="home"
    >
      {/* Content */}
      <div className="container px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6 inline-block">
            <span className="px-4 py-2 text-sm font-handwritten text-retro-purple bg-retro-lavender/30 rounded-full shadow-md flex items-center justify-center space-x-2 hover:shadow-lg transition-all duration-300 cursor-default">
              <Sparkles className="w-4 h-4 mr-1" />
              <span>Full Stack Developer</span>
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-pixel tracking-wider relative">
            <span className="brush-stroke-heading inline-block relative">
              Priyanka Soni
            </span>
          </h1>

          <div className="retro-terminal mb-10 animate-fade-in shadow-lg relative">
            <div className="absolute top-0 left-0 w-full h-full bg-retro-purple/5 opacity-50 z-0"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-retro-purple via-retro-blue to-retro-green opacity-30"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-2">
                <Terminal className="w-4 h-4 mr-2" />
                <span className="text-xs opacity-70">user@portfolio ~ $</span>
              </div>
              <p className="text-xl md:text-2xl font-mono leading-relaxed mb-4">
                I build{" "}
                <span className="text-retro-peach animate-pulse">
                  beautiful
                </span>{" "}
                &{" "}
                <span className="text-retro-green animate-pulse">
                  functional
                </span>{" "}
                web experiences with modern technologies
              </p>
              <div className="text-sm opacity-70 flex items-center">
                <Code className="w-4 h-4 mr-2" />
                <span>
                  // Passionate about clean code and creative solutions
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button
              className="bg-retro-purple hover:bg-retro-purple/80 text-white font-mono shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              onClick={scrollToProjects}
            >
              View Projects
            </Button>
            <Button
              variant="outline"
              className="border-retro-purple text-retro-purple hover:bg-retro-purple/10 font-mono shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              onClick={handleResumeClick}
            >
              Download Resume
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
          <a
            href="#skills"
            className="text-sm flex flex-col items-center text-retro-purple hover:text-retro-purple/70 transition-colors"
          >
            <span className="mb-2 font-handwritten">Scroll Down</span>
            <ArrowDownCircle className="w-6 h-6 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
