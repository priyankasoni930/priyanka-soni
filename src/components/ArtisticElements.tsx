
import React, { useEffect, useState } from 'react';
import { Paintbrush, Scissors, PenTool, Palette } from 'lucide-react';

const ArtisticElements = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const elements = [
    // Original elements
    {
      icon: <Paintbrush className="w-full h-full" />,
      color: "text-retro-purple",
      style: {
        top: "15%",
        left: "5%",
        transform: `rotate(${25 + scrollPosition * 0.03}deg)`,
        opacity: 0.3,
      }
    },
    {
      icon: <PenTool className="w-full h-full" />,
      color: "text-retro-green",
      style: {
        bottom: "30%",
        right: "10%",
        transform: `rotate(${-30 + scrollPosition * 0.04}deg)`,
        opacity: 0.3,
      }
    },
    {
      icon: <Scissors className="w-full h-full" />,
      color: "text-retro-blue",
      style: {
        top: "50%",
        left: "80%",
        transform: `rotate(${15 + scrollPosition * 0.02}deg)`,
        opacity: 0.3,
      }
    },
    {
      icon: <Palette className="w-full h-full" />,
      color: "text-retro-orange",
      style: {
        bottom: "10%",
        left: "15%",
        transform: `rotate(${-20 + scrollPosition * 0.05}deg)`,
        opacity: 0.3,
      }
    },
    // Additional elements
    {
      icon: <Paintbrush className="w-full h-full" />,
      color: "text-retro-peach",
      style: {
        top: "30%",
        right: "15%",
        transform: `rotate(${45 + scrollPosition * 0.04}deg)`,
        opacity: 0.3,
      }
    },
    {
      icon: <PenTool className="w-full h-full" />,
      color: "text-retro-lavender",
      style: {
        top: "70%",
        right: "30%",
        transform: `rotate(${-15 + scrollPosition * 0.03}deg)`,
        opacity: 0.3,
      }
    },
    {
      icon: <Scissors className="w-full h-full" />,
      color: "text-retro-green",
      style: {
        top: "25%",
        left: "25%",
        transform: `rotate(${30 + scrollPosition * 0.02}deg)`,
        opacity: 0.3,
      }
    },
    {
      icon: <Palette className="w-full h-full" />,
      color: "text-retro-blue",
      style: {
        bottom: "45%",
        left: "40%",
        transform: `rotate(${10 + scrollPosition * 0.04}deg)`,
        opacity: 0.3,
      }
    }
  ];

  return (
    <>
      {elements.map((element, index) => (
        <div
          key={`element-${index}`}
          className={`fixed w-8 h-8 ${element.color} pointer-events-none z-10`}
          style={{
            ...element.style,
            transition: 'transform 0.3s ease-out',
          }}
        >
          {element.icon}
        </div>
      ))}
    </>
  );
};

export default ArtisticElements;
