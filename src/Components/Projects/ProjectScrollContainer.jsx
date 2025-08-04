import {  useRef } from "react";
import { useScroll } from "framer-motion";
export default function ScrollContainer({ children }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
    layoutEffect: true,  // try false if needed
  });

  return (
    <div ref={container}>
      {children(scrollYProgress)}
    </div>
  );
}
