import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";
import { AiTwotoneMail } from "react-icons/ai";

const Socials = () => {
    return(
        <IconContext.Provider value={{ color: "#69070a", className: "global-class-name", size: "2em",  }}>
            <div className="flex flex-row gap-2 cursor-pointer">
                <FaGithub />
                <FaLinkedin />
                <AiTwotoneMail />
            </div>
        </IconContext.Provider>
    )
}

export default Socials;