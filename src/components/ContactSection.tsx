import React from "react";
import { GithubIcon, LinkedinIcon, Palette, Twitter } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-40 h-40 opacity-20">
        <div className="absolute w-full h-full bg-retro-purple rounded-full filter blur-3xl"></div>
      </div>
      <div className="absolute bottom-0 left-0 w-60 h-60 opacity-10">
        <div className="absolute w-full h-full bg-retro-orange rounded-full filter blur-3xl"></div>
      </div>
      {/* Paint splatters
      <div className="paint-splatter absolute top-10 right-10 rotate-45"></div>
      <div className="paint-splatter absolute bottom-20 left-40 -rotate-12"></div> */}

      {/* Floating artistic elements */}
      <div
        className="absolute top-1/4 right-1/4 animate-float"
        style={{ animationDelay: "0.5s" }}
      >
        <div className="w-16 h-16 opacity-20 rotate-12">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 21V3H21V21H3Z"
              stroke="#9b87f5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 9C9 9 9 6 12 6C15 6 15 9 15 9"
              stroke="#9b87f5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.5 12.5C10.5 12.5 10.5 10.5 12 10.5C13.5 10.5 13.5 12.5 13.5 12.5"
              stroke="#9b87f5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div
        className="absolute bottom-1/3 left-1/4 animate-float"
        style={{ animationDelay: "1.2s" }}
      >
        <div className="w-14 h-14 opacity-30 -rotate-45">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="9" stroke="#FEC6A1" strokeWidth="2" />
            <circle cx="9" cy="10" r="1.5" fill="#FEC6A1" />
            <circle cx="12" cy="8" r="1.5" fill="#D3E4FD" />
            <circle cx="15" cy="10" r="1.5" fill="#F2FCE2" />
            <circle cx="16" cy="14" r="1.5" fill="#9b87f5" />
            <circle cx="12" cy="16" r="1.5" fill="#FDE1D3" />
            <circle cx="8" cy="14" r="1.5" fill="#FFDEE2" />
          </svg>
        </div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-pixel">
            <span className="brush-stroke-heading">Let's Connect</span>
          </h2>
          <p className="text-lg font-handwritten text-gray-600 mt-4">
            Have a project in mind or want to chat? Reach out!
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Enhanced Terminal with Social Links */}
          <div className="retro-terminal p-8 shadow-xl relative overflow-hidden rounded-lg border border-white/10 backdrop-blur-sm bg-gradient-to-br from-slate-900/90 to-purple-900/90">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-retro-purple via-retro-blue to-retro-green opacity-70"></div>
            <div className="flex items-center mb-6">
              <div className="w-3 h-3 rounded-full bg-red-400 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <div className="ml-4 text-xs opacity-70 font-mono">
                terminal@portfolio ~
              </div>
            </div>

            <div className="font-mono space-y-4 mb-8">
              <p className="text-sm">
                $ <span className="text-retro-green">npm</span> run connect
              </p>
              <p className="text-sm text-retro-orange">
                {">"} Installing collaboration packages...
              </p>
              <p className="text-sm text-retro-blue">
                {">"} Setting up creative environment...
              </p>
              <p className="text-sm text-retro-purple">
                {">"} Ready for connection! Here are my links:
              </p>
            </div>

            <div className="grid grid-cols-8 gap-3 mt-6">
              <a
                href="https://github.com/priyankasoni930"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center bg-white/5 backdrop-blur-sm p-2 rounded-lg hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-retro-purple/50"
              >
                <div className="w-8 h-8 rounded-full bg-retro-purple/20 flex items-center justify-center mb-1 group-hover:scale-110 transition-transform">
                  <GithubIcon className="w-4 h-4 text-retro-purple" />
                </div>
                <span className="text-xs text-white group-hover:text-retro-purple transition-colors">
                  GitHub
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/priyanka-soni-6a9798293/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center bg-white/5 backdrop-blur-sm p-2 rounded-lg hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-retro-blue/50"
              >
                <div className="w-8 h-8 rounded-full bg-retro-blue/20 flex items-center justify-center mb-1 group-hover:scale-110 transition-transform">
                  <LinkedinIcon className="w-4 h-4 text-retro-blue" />
                </div>
                <span className="text-xs text-white group-hover:text-retro-blue transition-colors">
                  LinkedIn
                </span>
              </a>

              <a
                href="https://x.com/Priyankasoni930"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center bg-white/5 backdrop-blur-sm p-2 rounded-lg hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-retro-green/50"
              >
                <div className="w-8 h-8 rounded-full bg-retro-green/20 flex items-center justify-center mb-1 group-hover:scale-110 transition-transform">
                  <Twitter className="w-4 h-4 text-retro-green" />
                </div>
                <span className="text-xs text-white group-hover:text-retro-green transition-colors">
                  Twitter
                </span>
              </a>
            </div>

            <div className="mt-8 font-mono text-sm relative">
              <p>
                $ <span className="text-retro-green">echo</span> "Let's build
                something amazing together!"
              </p>
              <p className="text-retro-yellow">
                Let's build something amazing together!
              </p>
              <p>
                $ <span className="animate-pulse">|</span>
              </p>
            </div>

            {/* Floating color palette inside terminal */}
            <div className="absolute bottom-6 right-6 opacity-70">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-retro-purple animate-pulse"></div>
                <div
                  className="w-3 h-3 rounded-full bg-retro-blue animate-pulse"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="w-3 h-3 rounded-full bg-retro-green animate-pulse"
                  style={{ animationDelay: "0.4s" }}
                ></div>
                <div
                  className="w-3 h-3 rounded-full bg-retro-orange animate-pulse"
                  style={{ animationDelay: "0.6s" }}
                ></div>
                <div
                  className="w-3 h-3 rounded-full bg-retro-yellow animate-pulse"
                  style={{ animationDelay: "0.8s" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
