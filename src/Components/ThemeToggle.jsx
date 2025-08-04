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
        <motion.img
          src="day-svgrepo-com.svg"
          alt="day"
          className="h-[40px] w-[40px] cursor-pointer invert"
          initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, y: { repeat: Infinity, duration: 3, ease: "easeInOut" } }}
            whileHover={{ rotate: [0, -5, 5, -5, 0] }}
        />
      ) : (
        <motion.img
          src="moon-duotone-svgrepo-com.svg"
          alt="night"
          className="h-[40px] w-[40px] cursor-pointer"
          initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, y: { repeat: Infinity, duration: 3, ease: "easeInOut" } }}
            whileHover={{ rotate: [0, -5, 5, -5, 0] }}
        />
      )}
    </button>
  );
};

export default DarkModeToggle;
