// import { projectsData } from "./data"; //fetching from supabase instead of hardcoding
import Card from "../Card";
import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabaseClient";
import MotionWrapper from "../Animation/MotionWrapper";
import LoadingSpinner from "../LoadingSpinner";
import ScrollContainer from "../Projects/ProjectScrollContainer";
export default function Project({ limit }) {
  
  const [projectsData, setProjectsData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() =>  {
    setLoading(true); // Start loading
    
    const fetchProjects = async () => {
      // await new Promise((resolve) => setTimeout(resolve, 5000)); // 5-second fake delay to test loading state
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("id", { ascending: true });
      
      if (error) console.log("Fetch error:", error);
      else setProjectsData(data);
      // console.log(data);
      setLoading(false); // End loading
    };
    fetchProjects();
  }, []);

  if (loading) return <LoadingSpinner />;
  // Determine how much data to map over based on the 'limit' prop
  const dataToMap = limit ? projectsData.slice(0, limit) : projectsData;


  
  // Otherwise render the cards
  return (
    <div id="projects" className="bg-[#bca9bc2a] custom:w-full min-h-screen px-2">
      <MotionWrapper direction="zoomInFromBottom" delay={0.3} >
        <p className="text-[26px] sm:text-[32px] font-bold text-center pt-20 px-5 sm:mb-0 mb-30">What I've Built</p>
      </MotionWrapper>
    <div className="flex flex-col justify-between items-center custom:w-[1200px] mx-auto">
      
        <ScrollContainer>
          {(scrollYProgress) => (
            <div>
              {dataToMap.map((project, i) => {
                const targetScale = 1 - ((projectsData.length - i) * 0.05);
                return (
                  <Card
                    key={i}
                    i={i}
                    {...project}
                    progress={scrollYProgress}
                    range={[i * 0.25, 1]}
                    targetScale={targetScale}
                  />
                );
              })}
            </div>
          )}
        </ScrollContainer>
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