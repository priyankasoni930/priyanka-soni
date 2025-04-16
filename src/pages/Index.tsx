import React from "react";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import ExperienceSection from "../components/ExperienceSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import ArtisticElements from "../components/ArtisticElements";
import ChatBot from "../components/ChatBot";
import { ThemeProvider } from "@/providers/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";
import CursorBrushstroke from "../components/CursorBrushstroke";

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen relative overflow-hidden">
        <CursorBrushstroke />
        <ArtisticElements />

        <NavBar />

        <div className="fixed top-24 right-5 z-50">
          <ThemeToggle />
        </div>

        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
        <Footer />

        <ChatBot />
      </div>
    </ThemeProvider>
  );
};

export default Index;
