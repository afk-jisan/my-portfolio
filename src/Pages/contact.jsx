import Form from "../Components/Form";
import Socials from "../Components/Socials";
import CopyEmailButton from "../Components/CopyEmail";
import MotionWrapper from "../Components/Animation/MotionWrapper";
export default function Contact() {
    return (
      <div id="contact" className="min-h-[calc(100vh)] flex items-center">
        <div className="xl:w-[1280px] flex flex-col mdPlus:flex-row mx-auto border-4 border-double border-gray-500  overflow-hidden">

          <MotionWrapper direction="fromLeft" className="p-10 flex flex-col justify-center items-center gap-5 flex-1 py-25 mdPlus:py-0">
            <p  className="text-[24px] font-[400] text-center">Would you like to chat or simply work on a project ?  Don't hesitate to contact me</p>
            <Socials />
            <CopyEmailButton />
          </MotionWrapper>
          <div className="mdPlus:border-r-2 border-dashed border-gray-500"></div>
          <MotionWrapper direction="fromRight" delay={0.2}  className="justify-end flex-1">
            <Form />
          </MotionWrapper>

        </div>
      </div>
    );
  }
  