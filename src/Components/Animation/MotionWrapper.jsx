import { motion } from "framer-motion";

// Base animation speed
const DURATION = 0.6;

// Variants (optimized for mobile performance)
const variants = {
  fromLeft: {
    hidden: { x: -60, opacity: 0 }, // smaller distance for less work
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: DURATION, ease: "easeOut" },
    },
  },
  fromRight: {
    hidden: { x: 60, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: DURATION, ease: "easeOut" },
    },
  },
  fromBottom: {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: DURATION, ease: "easeOut" },
    },
  },
  fromTop: {
    hidden: { y: -60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: DURATION, ease: "easeOut" },
    },
  },
  zoomIn: {
    hidden: { opacity: 0, scale: 0.95 }, // less scaling to reduce GPU load
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: DURATION, ease: "easeOut" },
    },
  },
  zoomInFromBottom: {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: DURATION, ease: [0.22, 1, 0.36, 1] },
    },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: DURATION, ease: "easeOut" },
    },
  },
};

export default function MotionWrapper({
  children,
  direction = "fromBottom",
  className = "",
  delay = 0, // allow stagger manually
  ...rest
}) {
  return (
    <motion.div
      className={`${className} motion-smooth`} // GPU acceleration class
      variants={variants[direction]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }} // triggers later to reduce lag, change amount as needed
      transition={{ delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
