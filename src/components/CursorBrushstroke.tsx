
import React, { useEffect, useRef } from 'react';

const CursorBrushstroke = () => {
  const brushRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const brush = brushRef.current;
    if (!brush) return;

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      
      brush.style.left = `${x}px`;
      brush.style.top = `${y}px`;
      brush.style.opacity = '1';
      
      // Create ripple effect
      const ripple = document.createElement('div');
      ripple.className = 'brushstroke-ripple';
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      document.body.appendChild(ripple);
      
      // Remove ripple after animation
      setTimeout(() => {
        ripple.remove();
      }, 1000);
    };

    const handleMouseLeave = () => {
      if (brush) {
        brush.style.opacity = '0';
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      <div
        ref={brushRef}
        className="pointer-events-none fixed z-50 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-retro-purple/20 opacity-0 blur-xl transition-opacity duration-300"
      />
      <style>
        {`
        .brushstroke-ripple {
          position: fixed;
          pointer-events: none;
          z-index: 49;
          width: 20px;
          height: 20px;
          background: rgba(155, 135, 245, 0.2);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          animation: ripple 1s ease-out forwards;
        }

        @keyframes ripple {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(3);
            opacity: 0;
          }
        }
        `}
      </style>
    </>
  );
};

export default CursorBrushstroke;
