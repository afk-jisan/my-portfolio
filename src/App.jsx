import { NavLink, Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col mx-auto">
      {/* Fixed navbar on top */}
      <div className="fixed top-0 left-0 w-full z-50  shadow-md py-2 bg-[var(--nav-bg)] text-[var(--nav-text)] h-[69px]">
        <Navbar />
      </div>

      {/* Page content */}
      <main className="mt-[69px] bg-[var(--color-bg)] text-[var(--color-text)] flex-1 min-h-[calc(100vh-69px)]">
        <Outlet />
      </main>
    </div>
  );
}

//flex flex-col bg-[#e5e7eb] h-screen

//fixed top-0 left-0 w-full z-50
