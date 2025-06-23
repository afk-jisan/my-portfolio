import Form from "../Components/Form";
import Socials from "../Components/Socials";
import CopyEmailButton from "../Components/CopyEmail";
export default function Contact() {
    return (
      <div className="xl:w-[1280px] flex flex-col mdPlus:flex-row mx-auto border-4 border-double border-gray-500 mdPlus:divide-x-3 divide-dashed divide-gray-500">
        <div className="p-10 flex flex-col justify-center items-center gap-5  flex-1">
          <p  className="text-[24px] font-[400] text-center">Would you like to chat or simply work on a project ?  Don't hesitate to contact me</p>
          <Socials />
          <CopyEmailButton />
        </div>
        <div className="justify-end flex-1">
          <Form />
        </div>
        
        
      </div>
    );
  }
  