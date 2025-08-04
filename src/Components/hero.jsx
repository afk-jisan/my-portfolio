import { NavLink } from "react-router-dom";
import BlurText from "../Components/BlurText";
import Tabs from "../Components/Tab";
import { Link } from 'react-scroll';
import MotionWrapper from "./Animation/MotionWrapper";
export default function Hero () {
    const handleAnimationComplete = () => {
      console.log('Animation completed!');
    };
    return(
        <div className="min-h-[calc(100vh-69px)] xl:w-[1280px] mx-auto flex flex-col pt-20 items-center">
        
        <div className="flex flex-col mdPlus:flex-row justify-center items-center pb-15 sm:ml-10">
          <MotionWrapper direction="fromLeft" className="flex flex-col justify-around mdPlus:items-start items-center gap-5" >
            <div className="flex flex-col gap-1 px-10">
              <h1 className="text-[32px] font-bold font-jetbrains">Hi, I'm Baktier. 👋🏼</h1>
              <BlurText
                text="A full-stack web dev"
                delay={150}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className="text-2xl mb-8"
              />
              <p className="text-[22px] text-wrap xl:mr-30 mb-5">Welcome to my portfolio! Here, you can explore the <span className="font-bold">projects</span> I've been working on.<br/> I strive to build impactful, functional, and beautifully designed websites and applications.</p>
            </div>

            <Link to="projects" duration={1200} smooth={true}
              className="relative cursor-pointer left-0 mdPlus:left-10 mb-5 mdPlus:mb-0 overflow-hidden inline-block group font-semibold border-2 px-8 py-3 rounded-[16px] border-[#253547] text-[#253547] dark:text-[var(--color-text)] hover:text-[#f0e6e7] hover:dark:text-black">
              <span className="absolute inset-0 bg-[#69070a] dark:bg-[var(--color-text)] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-out z-0 rounded-[14px]"></span>
              <span className="relative z-10 hover:dark:text-black">See my projects</span>
            </Link>
          </MotionWrapper>
          <MotionWrapper direction="fromTop" delay={0.2} className="w-[80%] mt-16 mdPlus:mt-0">
           <Tabs />
          </MotionWrapper>
        </div>

       

        <MotionWrapper direction="fromBottom" delay={0.3} className="flex flex-col justify-center items-center gap-2 py-5 px-5 mt-10">
          <p className="text-center text-[20px]">- Looking to <span className="font-bold"> collaborate, hire, or discuss?</span> Let's build something amazing together!</p>
          <p className="text-center text-[20px] mb-3">I'm here to bring your ideas to life whether you need a cutting-edge website, strategic design solutions, or technical expertise</p>
          
          <Link to="contact" duration={2000} smooth={true}
              className="relative cursor-pointer left-0 mdPlus:left-10 mb-5 mdPlus:mb-0 overflow-hidden inline-block group font-semibold border-2 px-8 py-3 rounded-[16px] border-[#253547] text-[#253547] dark:text-[var(--color-text)] hover:text-[#f0e6e7] hover:dark:text-black">
            <span className="absolute inset-0 bg-[#69070a] dark:bg-[var(--color-text)] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-out z-0 rounded-[14px] "></span>
            <span className="relative z-10 hover:dark:text-black">Contact Me</span>
          </Link>
        </MotionWrapper>       
      </div>

    )
}