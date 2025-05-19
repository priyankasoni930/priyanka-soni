import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  Code,
  User,
  Briefcase,
  Mail,
  LayoutGrid,
  Download,
} from "lucide-react";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { href: "#home", label: "Home", icon: <Code className="w-4 h-4" /> },
    {
      href: "#skills",
      label: "Skills",
      icon: <LayoutGrid className="w-4 h-4" />,
    },
    {
      href: "#projects",
      label: "Projects",
      icon: <Briefcase className="w-4 h-4" />,
    },
    {
      href: "#experience",
      label: "Experience",
      icon: <User className="w-4 h-4" />,
    },
    { href: "#contact", label: "Contact", icon: <Mail className="w-4 h-4" /> },
  ];

  const handleResumeClick = (e) => {
    e.preventDefault();
    window.open(
      "https://drive.google.com/file/d/1ETVU_DnsOPTY4MWKsCUXzkF7eyklkg85/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-gradient-to-r from-retro-purple/40 to-retro-blue/40 backdrop-blur-md border-b border-white/10"
          : "py-5 bg-transparent d backdrop-blur-sm border-b border-gray-200/50 dark:border-white/10"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="font-pixel text-lg md:text-xl relative z-10 group"
          >
            <span className="text-gray-800 dark:text-white drop-shadow-md group-hover:text-retro-orange transition-colors">
              Priyanka
            </span>
            <span className="text-gray-800 dark:text-white drop-shadow-md group-hover:text-retro-green transition-colors">
              Soni
            </span>
            <span className="text-gray-800 dark:text-white drop-shadow-md">
              .
            </span>
            <span className="text-gray-800 dark:text-white drop-shadow-md group-hover:text-retro-blue transition-colors">
              dev
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-gray-800 dark:text-white/90 drop-shadow-md hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/10 transition-colors rounded-md font-mono text-sm flex items-center"
              >
                {link.icon}
                <span className="ml-2">{link.label}</span>
              </a>
            ))}
            <Button
              className="ml-4 bg-gray-800 dark:bg-white/20 hover:bg-gray-900 dark:hover:bg-white/30 text-white font-mono text-sm border border-gray-700 dark:border-white/30 hover:border-gray-800 dark:hover:border-white/50 transition-all duration-300 shadow-lg"
              onClick={handleResumeClick}
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </nav>

          {/* Mobile Menu Button */}
{/*           <button
            className="md:hidden p-2 rounded-md text-gray-800 dark:text-white hover:bg-gray-100/50 dark:hover:bg-white/10 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button> */}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-gradient-to-b from-retro-purple/90 to-retro-blue/90 backdrop-blur-lg pt-20 z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="container mx-auto px-4">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-3 text-white hover:bg-white/10 transition-colors rounded-md font-mono text-lg flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.icon}
                <span className="ml-3">{link.label}</span>
              </a>
            ))}
            <Button
              className="mt-4 bg-white/20 hover:bg-white/30 text-white font-mono border border-white/30 hover:border-white/50"
              onClick={(e) => {
                setIsMenuOpen(false);
                handleResumeClick(e);
              }}
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
