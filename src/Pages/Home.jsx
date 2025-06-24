import Hero from "../Components/hero";
import Project from "../Components/Projects/Projects";
import Footer from "../Components/Footer.jsx"
import Contact from "./contact.jsx";
export default function Home() {
    
    return (
      <div className="">
      <Hero/>
      <Project limit={3}/>
      <Contact />
      <Footer />
      </div>
    );
  }
  


  