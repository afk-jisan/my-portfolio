import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-center  w-full z-50 shadow-md py-2">
      
          
          {/* Desktop Menu */}
          <div className="hidden text-[22px] md:flex space-x-6 px-8 py-2 border-2 rounded-[30px]">
            <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-400 font-semibold" : "hover:text-gray-300 text-[#253547] font-semibold"}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? "text-blue-400 font-semibold" : "hover:text-gray-300 text-[#253547] font-semibold"}>About</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "text-blue-400 font-semibold" : "hover:text-gray-300 text-[#253547] font-semibold"}>Contact</NavLink>
            <NavLink to="/projects" className={({ isActive }) => isActive ? "text-blue-400 font-semibold" : "hover:text-gray-300 text-[#253547] font-semibold"}>projects</NavLink>
          </div>

      

      
    </nav>
  );
}