import React, { useState } from "react";
import { Moon, Sun } from "lucide-react";

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode((prev) => !prev);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="text-neutral-700 dark:text-white fixed top-0 left-0 w-full px-4 py-1.5  text-end    z-50">
      <button
        onClick={toggleMode}
        className="p-2 cursor-pointer  hover:translate-y-1 shadow  rounded-full hover:bg-[#ff8a00] transition"
      >
        {isDarkMode ? (
          <Sun className="w-5  h-5" />
        ) : (
          <Moon className="w-5 h-5" />
        )}
      </button>
    </div>
  );
}

export default Header;
