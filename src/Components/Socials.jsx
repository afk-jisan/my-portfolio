import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";
// import { AiTwotoneMail } from "react-icons/ai";

const Socials = () => {
    return(
        <IconContext.Provider value={{ color: "#69070a", className: "global-class-name", size: "2em",  }}>
            <div className="flex flex-row gap-2 cursor-pointer">
                <a href="https://github.com/afk-jisan" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a href="YOUR_GITHUB_PROFILE_LINK" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                {/* <a href="YOUR_GITHUB_PROFILE_LINK" target="_blank" rel="noopener noreferrer"><AiTwotoneMail /></a> */}
            </div>
        </IconContext.Provider>
    )
}

export default Socials;