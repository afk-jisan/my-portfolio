import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import useBreakpoint from "../hooks/useBreakpoint";

export default function Card( { title, description, src, tech, src_link, live_link,  color, i, progress, range, targetScale} ) {
    const container = useRef(null);
    const {scrollYProgress} = useScroll({
        target: container,
        offset: ['start end', 'start start']
    })
   
    const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
    const scale = useTransform(progress, range, [1, targetScale])
    const { isMd } = useBreakpoint();

    return (
        <div ref={container} className="h-[100vh] flex justify-center items-center  sticky top-0 xl:w-[1280px] dark:text-[var(--color-bg)]">
            <motion.div style={{scale, backgroundColor: color, top: `calc(-10% + ${i * 35}px)`, width: isMd ? '75%' : '98%' }} className= "h-[650px] sm:h-[466px] relative  rounded-[25px] sm:rounded-[35px] ">
                <div className="flex flex-col sm:flex-row justify-center items-center">
                    <div className="sm:w-[50%] h-[300px] sm:h-[466px] p-6 sm:p-10  ">
                        <div className=" rounded-[16px] relative overflow-hidden w-full h-full border-2 border-gray-600">
                            <motion.div style={{scale: imageScale}} className="w-full ">
                                <img className="h-[466px] w-full object-cover" src={src}></img>
                            </motion.div>                    
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-start flex-1/2 p-11 pt-0 sm:p-5">
                        <p className="text-[24px] sm:text-[30px] font-pattaya font-normal">{title}</p>
                        <p className="text-[16px] sm:text-[18px]">{description}</p>
                        <p className="text-[16px] mt-2">Tech used: {tech}</p>
                        <div className="flex flex-row gap-2 pt-5">
                          <button className="border-3 border-dashed border-gray-300 w-[80px] rounded-[14px] cursor-pointer py-2 px-4 hover:bg-[#8a0a0f] transition text-[16px] sm:text-[18px]">
                            <a href={src_link} target="_blank" rel="noopener noreferrer">Source</a>
                          </button>
                          <button className="border-3 border-dashed border-gray-300 w-[80px] rounded-[14px] cursor-pointer py-2 px-4 hover:bg-[#8a0a0f] transition text-[16px] sm:text-[18px]">
                            <a href={live_link} target="_blank" rel="noopener noreferrer">Live</a>
                          </button>
                        </div>
                        
                    </div>

                </div>
            </motion.div>
        </div>
    )
}


//relative top-[-10%] diye upore shift 
// use relative top-[-10%] to shift upwards
//left: `calc(-1% + ${i * 55}px) remove it later if needed

// first animation: image has bigger scale, as we scroll it scale to original
// second: cards get scaled down the more we scroll //cards parallax
// thrid : smooth scroll
/* 
const {scrollYProgress} = useScroll({
        target: container,
        offset: ['start end', 'start start'] "cardContainer window"
    })

*/