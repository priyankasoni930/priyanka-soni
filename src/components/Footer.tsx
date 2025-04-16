import React from "react";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-retro-purple">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-600 font-handwritten text-lg mb-2">
          Made with{" "}
          <Heart
            className="inline-block w-4 h-4 text-retro-pink mx-1"
            fill="currentColor"
          />{" "}
          and a lot of code
        </p>

        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Priyanka Soni. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
