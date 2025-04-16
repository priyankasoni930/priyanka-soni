import React, { useState, useRef, useEffect } from "react";
import { Bot, MessageSquare, Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi there! I'm your AI assistant. How can I help you with Priyanka's portfolio?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleChatBot = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey && input.trim()) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user" as const, content: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // Call updated Gemini API with the correct model
      const API_KEY = "AIzaSyDcgTXU32BIG3O6_7SoQ6Poq7y-K2Z-4nY";
      const API_URL =
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent";

      // Portfolio information context
      const portfolioContext = `
      # About Priyanka Soni
      Full Stack Developer with expertise in modern web technologies.

      # Education
      - Bachelor of Technology in CSE AIML, Baderia Global Institute of Engineering and Management (Sept 2023 - May 2027)

      # Skills
      - Technical Skills: JavaScript, Python, SQL, React.js, Next.js, Node.js, HTML, CSS, Tailwind CSS
      - Databases: MongoDB, PostgreSQL
      - Tools: Git, Docker, Postman, Prisma

      # Projects
      1. Interview-Buddy: Next.js, JavaScript, Tailwind CSS, PostgreSQL, Drizzle
         Developed an app providing personalized interview simulations with AI-powered performance analysis.
      
      2. Content-Creator: Next.js, TypeScript, PostgreSQL, Tailwind CSS, Drizzle
         Developed a content creating website leveraging Gemini AI for personalized content creation.
      
      3. BlogNest: Next.js, JavaScript, Tailwind CSS, MongoDB
         Developed a comprehensive blogging application with CRUD operations for posts and comment functionality.
      
      4. LinkShrink: Next.js, TypeScript, PostgreSQL, Tailwind CSS, Prisma
         Created a URL shortener website for efficient link sharing and management.

      # Experience
      - Frontend Developer Intern at Astute Lex Servicado, Punjab (April 2025 - Present)
        Led a team of 5 developers building a complex SaaS dashboard with React and TypeScript.
        Implemented design system using Tailwind CSS and Storybook.
        Improved application performance by 40% through code optimization.
      

      # Social Links
      - GitHub: https://github.com/priyankasoni930
      - LinkedIn: https://www.linkedin.com/in/priyanka-soni-6a9798293/
      - Twitter: https://x.com/Priyankasoni930
      
      `;

      const response = await fetch(`${API_URL}?key=${API_KEY}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `You are a helpful AI assistant for Priyanka Soni's portfolio website. 
                  You MUST ONLY answer questions based on the portfolio information provided below.
                  If asked about anything NOT included in this information, politely say you don't have that information.
                  Be helpful, concise, and friendly.
                  
                  ${portfolioContext}
                  
                  User question: ${input}`,
                },
              ],
            },
          ],
          generationConfig: {
            temperature: 0.2,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1024,
          },
        }),
      });

      const data = await response.json();

      if (data.candidates && data.candidates[0]?.content?.parts[0]?.text) {
        const aiResponse = {
          role: "assistant" as const,
          content: data.candidates[0].content.parts[0].text.trim(),
        };
        setMessages((prev) => [...prev, aiResponse]);
      } else if (data.error) {
        console.error("Error from Gemini API:", data.error);
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: `Sorry, I encountered an error: ${
              data.error.message || "Unknown error"
            }. Please try again later.`,
          },
        ]);
      } else {
        throw new Error("Failed to get response from AI");
      }
    } catch (error) {
      console.error("Error calling Gemini API:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, I encountered an error. Please try again later.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat Bot Toggle Button */}
      <Button
        onClick={toggleChatBot}
        className="fixed bottom-5 right-5 rounded-full w-12 h-12 shadow-lg z-50 flex items-center justify-center bg-retro-purple hover:bg-retro-purple/90 dark:bg-retro-purple dark:hover:bg-retro-purple/90 hover:scale-110 transition-all duration-300"
        aria-label="Toggle chat"
      >
        {isOpen ? (
          <X className="w-5 h-5" />
        ) : (
          <MessageSquare className="w-5 h-5" />
        )}
      </Button>

      {/* Chat Bot Panel */}
      <div
        className={`fixed bottom-20 right-5 w-80 sm:w-96 z-50 transition-all duration-300 transform ${
          isOpen
            ? "scale-100 opacity-100"
            : "scale-95 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-[500px] rounded-lg overflow-hidden backdrop-blur-xl bg-gradient-to-br from-slate-900/90 to-purple-900/90 dark:from-slate-800/90 dark:to-purple-800/90 border border-white/20 shadow-2xl">
          {/* Chat Header */}
          <div className="p-3 border-b border-white/20 bg-black/30 flex items-center justify-between">
            <div className="flex items-center">
              <Bot className="w-5 h-5 mr-2 text-retro-purple dark:text-retro-orange" />
              <h3 className="text-lg font-mono text-white">
                Portfolio Assistant
              </h3>
            </div>
            <button
              onClick={toggleChatBot}
              className="text-white/70 hover:text-white transition-colors"
              aria-label="Close chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Messages with ScrollArea */}
          <ScrollArea className="flex-1 p-3">
            <div className="space-y-3 pr-2">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-lg ${
                      message.role === "user"
                        ? "bg-retro-purple/40 text-white rounded-tr-none"
                        : "bg-white/10 text-white rounded-tl-none"
                    }`}
                  >
                    <p className="whitespace-pre-wrap text-sm">
                      {message.content}
                    </p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-[85%] p-3 rounded-lg bg-white/10 text-white">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 rounded-full bg-white/50 animate-pulse"></div>
                      <div
                        className="w-2 h-2 rounded-full bg-white/50 animate-pulse"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                      <div
                        className="w-2 h-2 rounded-full bg-white/50 animate-pulse"
                        style={{ animationDelay: "0.4s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>

          {/* Chat Input */}
          <div className="p-3 border-t border-white/20 bg-black/30">
            <div className="flex items-center">
              <Textarea
                value={input}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Ask me anything..."
                className="resize-none min-h-10 bg-white/10 border-white/20 focus:border-white/50 text-white rounded-md"
                rows={1}
              />
              <Button
                onClick={handleSendMessage}
                disabled={!input.trim() || isLoading}
                className="ml-2 h-10 w-10 p-0 rounded-full bg-retro-purple hover:bg-retro-purple/80 dark:bg-retro-orange dark:hover:bg-retro-orange/80 text-white"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBot;
