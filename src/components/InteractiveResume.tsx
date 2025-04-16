
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FileText, Briefcase, Code, User, Award, Bookmark } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const InteractiveResume = () => {
  const [activeTab, setActiveTab] = useState('education');

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="bg-white/20 hover:bg-white/30 text-white dark:bg-white/10 dark:hover:bg-white/20 font-mono text-sm border border-white/30 hover:border-white/50 transition-all duration-300 shadow-lg"
        >
          <FileText className="w-4 h-4 mr-2" />
          View Resume
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl h-[85vh] p-0 border border-white/20 dark:border-white/10 shadow-2xl bg-gradient-to-br from-white/90 to-retro-lavender/90 dark:from-slate-900/90 dark:to-slate-800/90 backdrop-blur-xl overflow-hidden">
        <div className="flex flex-col h-full">
          <DialogTitle className="p-6 border-b border-white/20 dark:border-white/10 bg-white/30 dark:bg-black/30 backdrop-blur-md text-2xl font-bold font-pixel tracking-tight text-gray-800 dark:text-white flex items-center">
            <FileText className="w-5 h-5 mr-2 text-retro-purple dark:text-retro-lavender" />
            Interactive Resume
          </DialogTitle>
          
          <div className="flex flex-col md:flex-row h-[calc(100%-70px)] overflow-hidden">
            {/* Sidebar with fixed width and proper ScrollArea */}
            <div className="w-full md:w-64 flex-shrink-0 bg-white/40 dark:bg-black/40 backdrop-blur-md border-r border-white/20 dark:border-white/10">
              <ScrollArea className="h-full py-4 px-4">
                <Tabs
                  defaultValue="education"
                  value={activeTab}
                  onValueChange={handleTabChange}
                  orientation="vertical"
                  className="h-full"
                >
                  <TabsList className="flex flex-col space-y-2 p-2 bg-white/20 dark:bg-black/20 rounded-lg">
                    <TabsTrigger 
                      value="education" 
                      className="justify-start px-4 py-3 data-[state=active]:bg-retro-purple/20 dark:data-[state=active]:bg-retro-purple/30 data-[state=active]:text-retro-purple dark:data-[state=active]:text-white"
                    >
                      <User className="w-5 h-5 mr-2" />
                      <span>Education</span>
                    </TabsTrigger>
                    <TabsTrigger 
                      value="projects" 
                      className="justify-start px-4 py-3 data-[state=active]:bg-retro-purple/20 dark:data-[state=active]:bg-retro-purple/30 data-[state=active]:text-retro-purple dark:data-[state=active]:text-white"
                    >
                      <Briefcase className="w-5 h-5 mr-2" />
                      <span>Projects</span>
                    </TabsTrigger>
                    <TabsTrigger 
                      value="skills" 
                      className="justify-start px-4 py-3 data-[state=active]:bg-retro-purple/20 dark:data-[state=active]:bg-retro-purple/30 data-[state=active]:text-retro-purple dark:data-[state=active]:text-white"
                    >
                      <Code className="w-5 h-5 mr-2" />
                      <span>Skills</span>
                    </TabsTrigger>
                    <TabsTrigger 
                      value="image" 
                      className="justify-start px-4 py-3 data-[state=active]:bg-retro-purple/20 dark:data-[state=active]:bg-retro-purple/30 data-[state=active]:text-retro-purple dark:data-[state=active]:text-white"
                    >
                      <FileText className="w-5 h-5 mr-2" />
                      <span>Full Resume</span>
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </ScrollArea>
            </div>
            
            {/* Content area with flex-1 and ScrollArea for proper scrolling */}
            <div className="flex-1 overflow-hidden">
              <ScrollArea className="h-full">
                <div className="px-6 py-6">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      {activeTab === 'education' && (
                        <div className="space-y-6">
                          <h3 className="text-xl font-bold brush-stroke-heading inline-block">Education</h3>
                          <div className="bg-white/30 dark:bg-white/5 p-4 rounded-lg shadow-sm border border-white/20 dark:border-white/10">
                            <h4 className="text-lg font-bold text-gray-800 dark:text-white">Baderia Global Institute of Engineering and Management</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300">Bachelor of Technology in CSE AIML</p>
                            <p className="text-sm font-medium text-retro-purple dark:text-retro-lavender mt-2">Sept 2023 - May 2027</p>
                          </div>
                        </div>
                      )}
                      
                      {activeTab === 'projects' && (
                        <div className="space-y-6">
                          <h3 className="text-xl font-bold brush-stroke-heading inline-block">Projects</h3>
                          
                          <div className="space-y-4">
                            {[
                              {
                                title: "Interview-Buddy",
                                tech: "Next.js, JavaScript, Tailwind CSS, PostgreSQL, Drizzle",
                                description: "Developed an app providing personalized interview simulations with AI-powered performance analysis."
                              },
                              {
                                title: "Content-Creator",
                                tech: "Next.js, TypeScript, PostgreSQL, Tailwind CSS, Drizzle",
                                description: "Developed a content creating website leveraging Gemini AI for personalized content creation."
                              },
                              {
                                title: "BlogNest",
                                tech: "Next.js, JavaScript, Tailwind CSS, MongoDB",
                                description: "Developed a comprehensive blogging application with CRUD operations for posts and comment functionality."
                              },
                              {
                                title: "LinkShrink",
                                tech: "Next.js, TypeScript, PostgreSQL, Tailwind CSS, Prisma",
                                description: "Created a URL shortener website for efficient link sharing and management."
                              }
                            ].map((project, index) => (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white/30 dark:bg-white/5 p-4 rounded-lg shadow-sm border border-white/20 dark:border-white/10"
                              >
                                <h4 className="text-lg font-bold text-gray-800 dark:text-white">{project.title}</h4>
                                <p className="text-sm text-retro-purple dark:text-retro-lavender">{project.tech}</p>
                                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{project.description}</p>
                                <div className="flex mt-3 space-x-2">
                                  <Button size="sm" variant="outline" className="text-xs h-7 px-2 bg-white/50 dark:bg-black/50">
                                    <Code className="w-3 h-3 mr-1" /> GitHub
                                  </Button>
                                  <Button size="sm" variant="outline" className="text-xs h-7 px-2 bg-white/50 dark:bg-black/50">
                                    <Bookmark className="w-3 h-3 mr-1" /> Live Link
                                  </Button>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {activeTab === 'skills' && (
                        <div className="space-y-6">
                          <h3 className="text-xl font-bold brush-stroke-heading inline-block">Skills</h3>
                          
                          <div className="space-y-4">
                            <div className="bg-white/30 dark:bg-white/5 p-4 rounded-lg shadow-sm border border-white/20 dark:border-white/10">
                              <h4 className="text-lg font-bold text-gray-800 dark:text-white">Technical Skills</h4>
                              <div className="flex flex-wrap gap-2 mt-2">
                                {['JavaScript', 'Python', 'SQL', 'React.js', 'Next.js', 'Node.js', 'HTML', 'CSS', 'Tailwind CSS'].map((skill, index) => (
                                  <motion.span
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="px-3 py-1 bg-retro-purple/20 dark:bg-retro-purple/30 text-retro-purple dark:text-white text-sm rounded-full"
                                  >
                                    {skill}
                                  </motion.span>
                                ))}
                              </div>
                            </div>
                            
                            <div className="bg-white/30 dark:bg-white/5 p-4 rounded-lg shadow-sm border border-white/20 dark:border-white/10">
                              <h4 className="text-lg font-bold text-gray-800 dark:text-white">Databases</h4>
                              <div className="flex flex-wrap gap-2 mt-2">
                                {['MongoDB', 'PostgreSQL'].map((skill, index) => (
                                  <motion.span
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="px-3 py-1 bg-retro-blue/20 dark:bg-retro-blue/30 text-blue-600 dark:text-blue-300 text-sm rounded-full"
                                  >
                                    {skill}
                                  </motion.span>
                                ))}
                              </div>
                            </div>
                            
                            <div className="bg-white/30 dark:bg-white/5 p-4 rounded-lg shadow-sm border border-white/20 dark:border-white/10">
                              <h4 className="text-lg font-bold text-gray-800 dark:text-white">Tools</h4>
                              <div className="flex flex-wrap gap-2 mt-2">
                                {['Git', 'Docker', 'Postman', 'Prisma'].map((skill, index) => (
                                  <motion.span
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="px-3 py-1 bg-retro-green/20 dark:bg-retro-green/30 text-green-600 dark:text-green-300 text-sm rounded-full"
                                  >
                                    {skill}
                                  </motion.span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {activeTab === 'image' && (
                        <div className="flex flex-col items-center justify-center py-6">
                          <h3 className="text-xl font-bold brush-stroke-heading inline-block mb-6">Full Resume</h3>
                          <img 
                            src="/lovable-uploads/720bc288-32c3-46e1-99bc-67e0d186e628.png" 
                            alt="Resume" 
                            className="max-w-full rounded-lg shadow-lg border border-white/20 dark:border-white/10" 
                          />
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </ScrollArea>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default InteractiveResume;
