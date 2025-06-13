import { NavLink, Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";

export default function App() {
  return (
    <div className="flex flex-col bg-[#e5e7eb] h-screen">
      
      <Navbar/>
      
      <Outlet />
    </div>
  );
}
