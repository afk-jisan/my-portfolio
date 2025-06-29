import { useState } from "react";
import { NavLink } from "react-router-dom";
import  DarkModeToggle from './ThemeToggle';
import { motion } from "framer-motion";
import ProjectsIcon from "./icons/ProjectsIcon";
import ContactIcon from "./icons/ContactIcon";
import LaptopIcon from "./icons/LaptopIcon";
import HomeIcon from "./icons/HomeIcon";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  

  return (
    <nav className="flex flex-row items-center justify-around xl:w-[1280px] px-2 smc:px-8 xl:px-0 mx-auto ">
      {/* Light mode image */}
      <div className="h-[40px] w-[40px] xl:ml-20 cursor-pointer block dark:hidden">
        <motion.img
        src="./batman-emotions-hero-superhero-svgrepo-com.svg"
        className="dark:invert"
        alt="Batman"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        whileHover={{rotate: [0, -5, 5, -5, 0]}}
      />
      </div>
      {/* Dark mode image */}
      <motion.img
      src="/batman-svgrepo-com.svg"
      alt="Batman Logo"
      className="hidden dark:block h-[48px] w-[48px] xl:ml-20 cursor-pointer invert drop-shadow-xl"
      initial={{
        y: -100,
        rotate: -180,
        opacity: 0,
        scale: 0.8,
      }}
      animate={{
        y: 0,
        rotate: 360,
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1], // easeOutBack
      }}
      whileHover={{
        scale: 1.1,
        rotate: 10,
        transition: { type: "spring", stiffness: 200 },
      }}
    />

      {/* Desktop Menu */}
      <div className=" flex text-[22px] border-2 rounded-full mx-auto  overflow-hidden">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `relative overflow-hidden inline-block group px-2 xsm:px-6 py-2 ${isActive ? "text-blue-400 font-semibold" : "hover:text-blue-300 text-[var(--nav-text)] font-semibold"}`
          }
        >
          {/* Text for screen >= 650px */}
          <div className="hidden smc:block z-10">
            <span className="absolute inset-0 bg-[#69070a] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-out z-0"></span>
            <span className="relative z-10">Home</span>
          </div>

          {/* Icon for screen < 650px */}
          {/* <img
            src="home-svgrepo-com.svg"
            alt="Home"
            className="smc:hidden h-[40px] w-[40px] relative z-10"
          /> */}
          <HomeIcon className="smc:hidden h-[40px] text-black  dark:text-[#a9aaaf] w-[40px]"/>
        </NavLink>

        <div className="w-[1px] bg-gray-400" />

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `relative overflow-hidden inline-block group px-2 xsm:px-6 py-2 ${isActive ? "text-blue-400 font-semibold" : "hover:text-blue-300 text-[var(--nav-text)] font-semibold"}`
          }
        >
          <div className="hidden smc:block z-10">
            <span className="absolute inset-0 bg-[#69070a] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-out z-0 "></span>
            <span className="relative z-10">About</span>
          </div>
          {/* Icon for screen < 650px */}
          {/* <img
            src="laptop-minimalistic-svgrepo-com.svg"
            alt="about"
            className="smc:hidden h-[40px] w-[40px] relative z-10"
          /> */}
          <LaptopIcon className="smc:hidden h-[40px] text-black  dark:text-[#a9aaaf] w-[40px]"/>
        </NavLink>

        <div className="w-[1px] bg-gray-400" />

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `relative overflow-hidden inline-block group px-2 xsm:px-6 py-2 ${isActive ? "text-blue-400 font-semibold" : "hover:text-blue-300 text-[var(--nav-text)] font-semibold"}`
          }
        >
          <div className="hidden smc:block z-10">
            <span className="absolute inset-0 bg-[#69070a] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-out z-0 "></span>
            <span className="relative z-10">Contact</span>
          </div>
          {/* <img
            src="contact-svgrepo-com.svg"
            alt="contact"
            className="smc:hidden h-[40px] dark:invert w-[40px] relative z-10"
          /> */}

          <ContactIcon className="smc:hidden h-[40px] text-black dark:text-[#a9aaaf] w-[40px]"/>
        </NavLink>

        <div className="w-[1px] bg-gray-400" />

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `relative overflow-hidden inline-block group px-2 xsm:px-6 py-2 ${isActive ? "text-blue-400 font-semibold" : "hover:text-blue-300 text-[var(--nav-text)] font-semibold"}`
          }
        >
          <div className="hidden smc:block z-10">
            <span className="absolute inset-0 bg-[#69070a] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-out z-0 "></span>
            <span className="relative z-10">Projects</span>
          </div>
          {/* <img
            src="projects-svgrepo-com.svg"
            alt="project"
            className="smc:hidden h-[40px] dark:text-blue-400 w-[40px] relative z-10"
          /> */}
          <ProjectsIcon className="smc:hidden h-[40px] text-black dark:text-[#a9aaaf] w-[40px]"/>
        </NavLink>
      </div>

      <div>
        <DarkModeToggle/>
      </div>

    </nav>
  );
}
