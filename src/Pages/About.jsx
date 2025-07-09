import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRef, useState } from "react";

export default function StylishCV() {
  const ref = useRef(null);

  const [isHovering, setIsHovering] = useState(false);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  // These rotate values are *only* used while hovering
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [15, -15]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-15, 15]), {
    stiffness: 150,
    damping: 20,
  });

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;

    const xPercent = Math.min(Math.max(offsetX / rect.width, 0), 1);
    const yPercent = Math.min(Math.max(offsetY / rect.height, 0), 1);

    mouseX.set(xPercent);
    mouseY.set(yPercent);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
    setIsHovering(false);
  };

  //min-h-[calc(100vh-69px)] using  this to avoid extra screen height... 69 is the height of navbar.
  return (
    <div className="min-h-[calc(100vh-69px)] flex items-center justify-center py-10 px-4 font-sans transition-all duration-500">
      <div className="custom:w-[1200px] bg-white dark:bg-gray-800 rounded-3xl shadow-2xl dark:shadow-gray-900/50 flex flex-col lg:flex-row overflow-hidden relative backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/30">
        {/* Enhanced Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Gradient Orbs */}
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-r from-blue-400/20 to-purple-400/20 dark:from-blue-500/10 dark:to-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-gradient-to-r from-pink-400/20 to-orange-400/20 dark:from-pink-500/10 dark:to-orange-500/10 rounded-full blur-3xl"></div>

          {/* Floating SVG Elements */}
          <svg
            className="absolute left-8 top-12 w-8 h-8 opacity-30 dark:opacity-20 text-blue-500 dark:text-blue-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>

          <svg
            className="absolute right-12 bottom-16 w-6 h-6 opacity-20 dark:opacity-15 text-purple-500 dark:text-purple-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>

          <svg
            className="absolute left-1/2 top-8 w-5 h-5 opacity-25 dark:opacity-15 text-green-500 dark:text-green-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </div>

        {/* Left Side: Photo, Name, Contact, About */}
        <div className="lg:w-2/5 flex flex-col items-center pt-12 pb-8 px-6 gap-6 relative z-10 bg-gradient-to-b from-transparent to-gray-50/50 dark:to-gray-800/50 border-r-2 border-dashed border-gray-400">
          {/* Name and Title */}
          <div className="flex flex-col items-center text-center mb-4">
            <h1 className="text-3xl lg:text-4xl font-jetbrains font-black text-gray-900 dark:text-white tracking-tight bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 bg-clip-text">
              Baktier Galib
            </h1>
            <h2 className="text-lg font-semibold text-blue-600 dark:text-blue-400 tracking-[0.2em] mt-2 uppercase">
              Software Developer
            </h2>
          </div>

          {/* Profile Image */}
          <div className="w-full flex justify-center">
            <motion.div
              key={isHovering ? "hover" : "idle"} // Force animation reset on change
              ref={ref}
              onMouseEnter={handleMouseEnter}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              {...(!isHovering
                ? {
                    // Auto tilt when idle
                    animate: { rotateX: [0, 15] },
                    transition: {
                      duration: 1.2,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    },
                  }
                : {
                    // Controlled by mouse
                    style: {
                      rotateX,
                      rotateY,
                      transformPerspective: 1000,
                    },
                  })}
              className="w-[200px] h-[200px] rounded-xl cursor-[grab] will-change-transform "
            >
              <motion.img
                src="./pfp.png"
                alt="Profile"
                draggable={false}
                animate={{
                  boxShadow: [
                    "0px 0px 0px rgba(0, 191, 255, 0.2)",
                    "0px 0px 20px rgba(0, 191, 255, 0.6)",
                    "0px 0px 0px rgba(0, 191, 255, 0.2)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-full h-full object-cover rounded-full pointer-events-none select-none"
              />
            </motion.div>
            
          </div>
            
         

          

          {/* Contact Tags */}
          <div className="flex flex-col gap-3 w-full items-center mb-2">
            {/* <div className="flex items-center gap-3 bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm rounded-full px-5 py-2 shadow-lg border border-gray-200/50 dark:border-gray-600/50 hover:scale-105 transition-all duration-300">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-gray-700 dark:text-gray-200 text-sm font-medium">
                0170530XXX9
              </span>
            </div> */}
            <button className="w-fit relative px-5 py-2 my-2 bg-transparent text-[var(--color-text)] border-2 border-gray-500 border-dashed font-semibold rounded-lg shadow-md hover:bg-[#69070a80] hover:scale-105 active:scale-105 transition-transform duration-150">
              Download CV
            </button>
            {/* <div className="flex items-center gap-3 bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm rounded-full px-5 py-2 shadow-lg border border-gray-200/50 dark:border-gray-600/50 hover:scale-105 transition-all duration-300">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-gray-700 dark:text-gray-200 text-sm font-medium">
                baktier.galib.jisan@gmail.com
              </span>
            </div> */}
          </div>

          {/* About Me Section */}
          <div className="bg-gradient-to-r from-[#a8d5e557] to-[#c0b4e498]  dark:from-gray-700 dark:to-gray-600 rounded-3xl p-6 shadow-xl  w-full relative overflow-hidden backdrop-blur-sm">
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-400/20 dark:from-blue-500/10 dark:to-purple-500/10 rounded-full blur-2xl"></div>

            <h2 className="text-xl font-bold text-gray-900 dark:text-[#d1d5dc]  mb-3 tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 font-poppins bg-blue-500 rounded-full"></span>
              ABOUT ME
            </h2>
            <p className="text-gray-700 dark:text-[#d1d5dc] text-sm leading-relaxed relative z-10">
             I'm a Computer Science student with a deep interest in building clean, scalable, and user-focused web applications. 
             I'm driven by curiosity and a passion for learning, constantly exploring new technologies and improving my craft as a full-stack developer.
            </p>
          </div>
        </div>


        

        {/* Right Side: Main Content */}
        <div className="lg:w-3/5 flex flex-col gap-8 p-8 lg:p-10 bg-gradient-to-br from-transparent to-gray-50/30 dark:to-gray-800/30">
          {/* What I Do Section */}
          <div className="bg-gradient-to-r from-[#a8d5e557] to-[#c0b4e498] rounded-2xl p-6 shadow-lg relative">
            <h2 className="text-xl font-poppins font-bold text-[#232226] mb-4 tracking-wider flex items-center gap-2">
              WHAT I DO
            </h2>
            <p className="text-[#232226] text-[16px] leading-relaxed">
              I specialize in developing responsive, interactive web
              applications using <strong>React</strong> and{" "}
              <strong>TailwindCSS</strong>. I've also worked with{" "}
              <strong>HTML5</strong>, <strong>CSS3</strong>,{" "}
              <strong>JavaScript</strong>, <strong>Python</strong>, <strong>FastAPI</strong>, and I'm
              currently exploring <strong>Next.js</strong> and{" "}
              <strong>Go</strong> to expand my full-stack capabilities.
            </p>
            {/* Decorative code icon */}
            <svg
              className="absolute right-4 top-4 w-6 h-6 opacity-30"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                d="M8 4l-6 8 6 8M16 4l6 8-6 8"
                stroke="#232226"
                strokeWidth="2"
              />
            </svg>
          </div>

          {/* Goals Section */}
          <div className="bg-gradient-to-l from-[#a8d5e557] to-[#c0b4e498] rounded-2xl p-6 shadow-lg relative">
            <h2 className="text-xl font-poppins font-bold text-[#232226] mb-4 tracking-wider flex items-center gap-2">
              GOALS
            </h2>
            <p className="text-[#232226] text-sm leading-relaxed">
              I'm actively preparing for opportunities like{" "}
              <strong>GSoC</strong> and aiming to contribute to impactful
              software projects. My long-term goal is to become a highly skilled
              software engineer with a strong foundation in security and AI.
            </p>
            {/* Decorative target icon */}
            <svg
              className="absolute right-4 top-4 w-6 h-6 opacity-30"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z"
                stroke="#232226"
                strokeWidth="1.5"
              />
            </svg>
          </div>

          {/* Education and Skills */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Education */}
            <div className="flex-1 bg-gradient-to-br from-[#a8d5e557] to-[#bbabe998] dark:from-gray-700 dark:to-gray-700 rounded-3xl p-6 shadow-xl border border-purple-100/50 dark:border-gray-600/50 relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-400/10 to-pink-400/10 dark:from-purple-500/5 dark:to-pink-500/5 rounded-full blur-2xl"></div>

              <h2 className="text-xl font-bold text-gray-900 dark:text-[#d1d5dc] mb-4 tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 font-poppins bg-purple-500 rounded-full"></span>
                EDUCATION
              </h2>
              <div className="relative z-10">
                <div className="text-gray-900 dark:text-[#d1d5dc] font-bold text-base mb-1">
                  Bachelor of Science in Computer Science & Engineering (CSE)
                </div>
                <div className="text-purple-600 dark:text-purple-400 font-semibold text-sm">
                  BRAC University
                </div>
                <div className="text-gray-600 dark:text-gray-300 text-sm">
                  2024 - 2027
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="flex-1 bg-gradient-to-br from-[#a8d5e557] to-[#c0b4e498] dark:from-gray-700 dark:to-gray-700 rounded-3xl p-6 shadow-xl border border-gray-400/50 dark:border-gray-500/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-500/20 to-purple-500/20 dark:from-blue-400/10 dark:to-purple-400/10 rounded-full blur-2xl"></div>

              <h2 className="text-xl font-bold text-black dark:text-[#d1d5dc] mb-6 tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 font-poppins bg-blue-300  rounded-full"></span>
                SKILLS
              </h2>
              <div className="grid grid-cols-1 gap-3 relative z-10">
                {[
                  "ReactJS",
                  "TailwindCSS",
                  "Go",
                ].map((skill, index) => (
                  <div
                    key={skill}
                    className="bg-gray-700/80 dark:bg-[#f6f5f200] text-white dark:text-[#d1d5dc] rounded-full px-4 py-2.5 text-center text-sm font-medium backdrop-blur-sm border border-gray-600/30 dark:border-gray-300/30 hover:scale-105 transition-all duration-300 hover:bg-blue-600/80 dark:hover:bg-blue-400/80"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
