import { projectsData } from "./data";
import Card from "../Card";
import { motion, useScroll } from "framer-motion"
import { useRef } from "react";


export default function Project() {
 const container = useRef(null);
 const { scrollYProgress } = useScroll({
  target: container,
  offset: ['start start', 'end end']
 })

  return (
    <div id="projects" className=" flex flex-col justify-between items-center custom:w-[1200px] mx-auto">
      <p className="text-[32px] font-bold text-center mt-20">Few of the projects I have worked on -</p>
      <div ref={container} className=" ">
        {
          projectsData.map( (project, i) => {
            const targetScale = 1 - ((projectsData.length - i) * 0.05);
            return <Card key={i} i={i} {...project} progress={scrollYProgress} range={[i * 0.25, 1]} targetScale={targetScale}/>
          })
        }
      </div>
    </div>
  );
}




/* 
pt-[40vh] bg-[#f0e6e7] in the conainer

const { scrollYProgress } = useScroll({
  target: container,
  offset: ['start start', 'end end'] --> ["start of the container, start of the window", "end of the main container, end of the window"
 })

when the last card reaches its sticky postion it gonna become 1
 window -> 


<div ref={container} className="mt-[50vh]"> do this if needed


tweak with this only if needed in the future top: `calc(-10% + ${i * 35}px)`
*/