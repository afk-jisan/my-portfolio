// import { projectsData } from "./data";
import Card from "../Card";
import { motion, useScroll } from "framer-motion"
import { useState, useEffect, useRef } from "react";
import { supabase } from "../../lib/supabaseClient";

export default function Project({ limit }) {
 const container = useRef(null);
 const { scrollYProgress } = useScroll({
  target: container,
  offset: ['start start', 'end end']
 })
  const [projectsData, setProjectsData] = useState([]);
  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("id", { ascending: true });
      
      if (error) console.log("Fetch error:", error);
      else setProjectsData(data);
      // console.log(data);
    };
    fetchProjects();
  }, []);

  // Determine how much data to map over based on the 'limit' prop
  const dataToMap = limit ? projectsData.slice(0, limit) : projectsData;

  return (
    <div id="projects" className="bg-[#bca9bc2a] custom:w-full">
      <p className="text-[32px] font-bold text-center pt-20 sm:mb-0 mb-30">Few of the projects I have worked on -</p>
    <div className="flex flex-col justify-between items-center custom:w-[1200px] mx-auto">
      
      <div ref={container} className=" ">
        {
          dataToMap.map( (project, i) => {
            const targetScale = 1 - ((projectsData.length - i) * 0.05);
            return <Card key={i} i={i} {...project} progress={scrollYProgress} range={[i * 0.25, 1]} targetScale={targetScale}/>
          })
        }
      </div>
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