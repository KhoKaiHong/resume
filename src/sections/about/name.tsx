import { motion } from "motion/react";

const sentenceVariants = {
  hidden: {},
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const letterVariants = {
  hidden: { opacity: 0, display: "none" },
  visible: {
    opacity: 1,
    transition: { opacity: { duration: 0 } },
    display: "inline-block",
    width: "fit-content",
  },
};

export function Name() {
  const name = "Kho Kai Hong".replace(/ /g, "\u00A0");

  return (
    <div className="flex gap-x-2 items-center">
      <motion.h1
        variants={sentenceVariants}
        initial="hidden"
        whileInView="visible"
        className="text-accent font-medium text-5xl"
      >
        {name.split("").map((char, index) => (
          <motion.span key={index} variants={letterVariants}>
            {char}
          </motion.span>
        ))}
      </motion.h1>
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
        className="inline-block rounded-sm w-[4px] h-10 bg-accent"
      ></motion.span>
    </div>
  );
}
