import { useState } from "react";
import { NavLink } from "react-router-dom";
import  DarkModeToggle from './ThemeToggle';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex flex-row items-center justify-around xl:w-[1280px] px-2 smc:px-8 xl:px-0 mx-auto ">
      <div className="h-[40px] w-[40px] xl:ml-20 cursor-pointer">
        <img src="batman-emotions-hero-superhero-svgrepo-com.svg" className="dark:invert" alt="" ></img>
      </div>
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
          <img
            src="home-svgrepo-com.svg"
            alt="Home"
            className="smc:hidden h-[40px] w-[40px] relative z-10"
          />
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
          <img
            src="laptop-minimalistic-svgrepo-com.svg"
            alt="about"
            className="smc:hidden h-[40px] w-[40px] relative z-10"
          />
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
          <img
            src="contact-svgrepo-com.svg"
            alt="contact"
            className="smc:hidden h-[40px] w-[40px] relative z-10"
          />
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
          <img
            src="projects-svgrepo-com.svg"
            alt="project"
            className="smc:hidden h-[40px] w-[40px] relative z-10"
          />
        </NavLink>
      </div>

      <div>
        <DarkModeToggle/>
      </div>

    </nav>
  );
}
