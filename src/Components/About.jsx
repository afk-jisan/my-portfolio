import Socials from "./Socials.jsx";
export default function About() {
    return (
      <div className="min-h-[calc(100vh-69px)] mx-auto px-6 py-12 md:py-16 lg:py-10 ">
        <div className="xl:w-[1280px] mx-auto text-center ">
          <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center ">
            <div className="px-10">
              <p className="text-gray-600 mb-8 text-lg text-[24px] text-start">I'm <span className="font-semibold text-blue-600">Baktier Galib Jisan,</span><br/> a passionate front-end developer and CSE student at BRAC University. I love building clean, user-focused web interfaces with modern technologies.</p>
              <Socials />
            </div>
            <div className="w-full flex justify-center md:justify-end pr-0 md:pr-15 my-5">
              <img src="./pfp.png" alt="profile picture" className=" pointer-events-none justify-self-end animate-[glow_2s_infinite] w-[320px] h-[320px] object-cover rounded-full shadow-xl border-4 border-white hover:scale-105 transition duration-300 ease-in-out"></img>
            </div>
            
          </div>
          
  
          <div className="text-left space-y-6 mx-10">
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">👨‍💻 What I Do</h2>
              <p className="text-gray-600">
                I specialize in developing responsive, interactive web applications using <strong>React</strong> and <strong>TailwindCSS</strong>. I’ve also worked with <strong>HTML5</strong>, <strong>CSS3</strong>, <strong>JavaScript</strong>, and <strong>Python</strong>, and I’m currently exploring <strong>Next.js</strong> and <strong>FastAPI</strong> to expand my full-stack capabilities.
              </p>
            </section>
  
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">🚀 Goals</h2>
              <p className="text-gray-600">
                I’m actively preparing for opportunities like <strong>GSoC</strong> and aiming to contribute to impactful software projects. My long-term goal is to become a highly skilled software engineer with a strong foundation in security and AI.
              </p>
            </section>
  
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">📚 Education</h2>
              <p className="text-gray-600">
                Currently pursuing my Bachelor's degree in Computer Science and Engineering at <strong>BRAC University</strong>, where I’ve developed strong problem-solving skills and a love for clean code.
              </p>
            </section>
  
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">🛠 Skills</h2>
              <ul className="list-disc list-inside text-gray-600">
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
  