import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button onClick={() => setDarkMode((prev) => !prev)} className="">
      {darkMode ? (
        <img
          src="day-svgrepo-com.svg"
          alt="day"
          className="h-[40px] w-[40px] cursor-pointer invert"
        />
      ) : (
        <img
          src="moon-duotone-svgrepo-com.svg"
          alt="night"
          className="h-[40px] w-[40px] cursor-pointer"
        />
      )}
    </button>
  );
};

export default DarkModeToggle;
