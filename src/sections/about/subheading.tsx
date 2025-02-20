import { motion, useInView } from "motion/react";
import { useState, useEffect, useRef } from "react";

const sentenceVariants = {
  hidden: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
  visible: { transition: { staggerChildren: 0.05 } },
};

const letterVariants = {
  hidden: {
    opacity: 0,
    display: "none",
    transition: { duration: 0 },
  },
  visible: {
    opacity: 1,
    display: "inline-block",
    transition: { duration: 0 },
  },
};

const subheadings = [
  "Full Stack Software Engineer".replace(/ /g, "\u00A0"),
  "Computer Science Graduate".replace(/ /g, "\u00A0"),
  "Technology Enthusiast".replace(/ /g, "\u00A0"),
  "Problem Solver".replace(/ /g, "\u00A0"),
];

export function Subheading() {
  const ref = useRef(null);
  const [displayedIndex, setDisplayedIndex] = useState(0);
  const [wordVisible, setWordVisible] = useState(false);
  const isInView = useInView(ref);
  const [animateState, setAnimateState] = useState("visible");

  useEffect(() => {
    if (!isInView || !wordVisible) return;

    const timeout = setTimeout(() => {
      setAnimateState("hidden");
      setWordVisible(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [isInView, wordVisible]);

  return (
    <div className="flex gap-x-2 items-center h-10" ref={ref}>
      <motion.h2
        variants={sentenceVariants}
        initial="hidden"
        animate={animateState}
        onAnimationComplete={() => {
          if (animateState === "hidden") {
            setDisplayedIndex((current) =>
              current === subheadings.length - 1 ? 0 : current + 1
            );
            setAnimateState("visible");
          } else {
            setWordVisible(true);
          }
        }}
        className="font-medium sm:text-lg"
      >
        {subheadings[displayedIndex].split("").map((char, index) => (
          <motion.span key={index} variants={letterVariants}>
            {char}
          </motion.span>
        ))}
      </motion.h2>
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="inline-block rounded-sm w-[2px] bg-foreground h-4 sm:h-5"
      ></motion.span>
    </div>
  );
}
