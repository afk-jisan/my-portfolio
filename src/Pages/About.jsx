import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRef, useState } from "react";
export default function About() {
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

  return (
    <div className="min-h-[calc(100vh-69px)] mx-auto px-6 lg:py-8">
      <div className="xl:w-[1280px] mx-auto text-center ">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center ">
          <div className="flex flex-col px-10">
            <p className="text-[var(--color-text)] text-lg text-[24px] text-start">
              I'm{" "}
              <span className="font-semibold text-blue-600">
                Baktier Galib Jisan,
              </span>
              <br /> a passionate front-end developer and CSE student at BRAC
              University. I love building clean, user-focused web interfaces
              with modern technologies.
            </p>

            <button className="w-fit relative px-5 py-2 my-5 bg-transparent text-[var(--color-text)] border-2 border-gray-500 border-dashed font-semibold rounded-lg shadow-md hover:bg-[#69070a80] hover:scale-105 active:scale-105 transition-transform duration-150">
              Download CV
            </button>
          </div>
          <div className="w-full flex justify-center md:justify-end pr-0 md:pr-15">
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
              className="w-[320px] h-[320px] rounded-xl cursor-[grab] will-change-transform "
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
        </div>

        <div className="text-left space-y-5 mx-10">
          <section>
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
              👨‍💻 What I Do
            </h2>
            <p className="text-[var(--color-text)]">
              I specialize in developing responsive, interactive web
              applications using <strong>React</strong> and{" "}
              <strong>TailwindCSS</strong>. I’ve also worked with{" "}
              <strong>HTML5</strong>, <strong>CSS3</strong>,{" "}
              <strong>JavaScript</strong>, and <strong>Python</strong>, and I’m
              currently exploring <strong>Next.js</strong> and{" "}
              <strong>FastAPI</strong> to expand my full-stack capabilities.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
              🚀 Goals
            </h2>
            <p className="text-[var(--color-text)]">
              I’m actively preparing for opportunities like{" "}
              <strong>GSoC</strong> and aiming to contribute to impactful
              software projects. My long-term goal is to become a highly skilled
              software engineer with a strong foundation in security and AI.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
              📚 Education
            </h2>
            <p className="text-[var(--color-text)]">
              Currently pursuing my Bachelor's degree in Computer Science and
              Engineering at <strong>BRAC University</strong>, where I’ve
              developed strong problem-solving skills and a love for clean code.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
              🛠 Skills
            </h2>
            <ul className="list-disc list-inside text-[var(--color-text)]">
              <li>React, TailwindCSS, HTML, CSS, JavaScript</li>
              <li>Python, FastAPI, SQL</li>
              <li>Version Control with Git & GitHub</li>
              <li>Learning Next.js, Express.js, and Cybersecurity tools</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
