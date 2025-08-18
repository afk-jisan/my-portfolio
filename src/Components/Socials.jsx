import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";
// import { AiTwotoneMail } from "react-icons/ai";

const Socials = () => {
    return(
        <IconContext.Provider value={{ className: "global-class-name", size: "2em"  }}>
            <div className="flex flex-row gap-2 justify-center cursor-pointer ">
                <a href="https://github.com/afk-jisan" target="_blank" rel="noopener noreferrer"><FaGithub className="hover:text-blue-500 text-[#69070a] dark:text-[#44545c] dark:hover:text-[#9da7bb]"/></a>
                <a href="https://www.linkedin.com/in/baktier-galib" target="_blank" rel="noopener noreferrer" ><FaLinkedin className="hover:text-blue-500 text-[#69070a] dark:text-[#44545c] dark:hover:text-[#9da7bb]"/></a>
                {/* <a href="YOUR_GITHUB_PROFILE_LINK" target="_blank" rel="noopener noreferrer"><AiTwotoneMail /></a> */}
            </div>
        </IconContext.Provider>
    )
}

export default Socials;