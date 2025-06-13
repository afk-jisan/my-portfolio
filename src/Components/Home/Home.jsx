import { NavLink } from "react-router-dom";

export default function Home() {
    return (
      <div className="flex flex-col justify-center items-center gap-5 py-5 bg-[#d2b5b6]">
        <h1 className="text-[32px] font-bold text-center">Hey, I'm Baktier. </h1>
        <p className="text-center text-[22px]">Welcome to my <span className="font-bold">portfolio!</span> Here, you can explore the <span className="font-bold">projects</span> I've been working on.<br/> I strive to build impactful, functional, and beautifully designed websites and applications.</p>
        <img src="./pfp.png" alt="profile picture" className="w-[400px] h-[400px]"></img>
        <div className="flex flex-col gap-1">
          <p className="text-center text-[20px]">I specialize in frontend development with <span className="font-bold">React, TailwindCSS,</span> and <span className="font-bold">responsive UI/UX design.</span> Exploring backend technologies like <span className="font-bold">FastAPI</span> and <span className="font-bold">PostgreSQL.</span></p>
          <p className="text-center text-[20px]">- Looking to <span className="font-bold"> collaborate, hire, or discuss?</span> Let's build something amazing together!</p>
          <p className="text-center text-[20px]">I'm here to bring your ideas to life whether you need a cutting-edge website, strategic design solutions, or technical expertise</p>
        </div>
        <NavLink to="/contact"
            className={({ isActive }) =>
              `relative overflow-hidden inline-block group font-semibold border-2 px-8 py-3 rounded-[16px] border-[#253547] ${
                isActive
                  ? "text-blue-400"
                  : "text-[#253547] hover:text-[#f0e6e7]"
              }`
          }>
          <span className="absolute inset-0 bg-[#69070a] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-out z-0 rounded-[14px]"></span>
          <span className="relative z-10">Contact Me</span>
        </NavLink>
      </div>
    );
  }
  