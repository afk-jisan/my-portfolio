import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-center w-fit mx-auto">
        {/* Desktop Menu */}
        <div className="hidden md:flex text-[22px] border-2 rounded-full overflow-hidden">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `relative overflow-hidden inline-block group px-6 py-2 ${isActive ? "text-blue-400 font-semibold" : "hover:text-blue-300 text-[#253547] font-semibold"}`
                }
              >
                <span className="absolute inset-0 bg-[#69070a] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-out z-0 "></span>
                <span className="relative z-10">Home</span>
              </NavLink>
              
              <div className="w-[1px] bg-gray-400" />
              
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `relative overflow-hidden inline-block group px-6 py-2 ${isActive ? "text-blue-400 font-semibold" : "hover:text-blue-300 text-[#253547] font-semibold"}`
                }
              >
                <span className="absolute inset-0 bg-[#69070a] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-out z-0 "></span>
                <span className="relative z-10">About</span>
              </NavLink>

              <div className="w-[1px] bg-gray-400" />

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `relative overflow-hidden inline-block group px-6 py-2 ${isActive ? "text-blue-400 font-semibold" : "hover:text-blue-300 text-[#253547] font-semibold"}`
                }
              >
                
                <span className="absolute inset-0 bg-[#69070a] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-out z-0 "></span>
                <span className="relative z-10">Contact</span>
              </NavLink>
              
              <div className="w-[1px] bg-gray-400" />
              
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  `relative overflow-hidden inline-block group px-6 py-2 ${isActive ? "text-blue-400 font-semibold" : "hover:text-blue-300 text-[#253547] font-semibold"}`
                }
              >
                
                <span className="absolute inset-0 bg-[#69070a] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-out z-0 "></span>
                <span className="relative z-10">Projects</span>
              </NavLink>


              
          </div>

      

      
    </nav>
  );
}