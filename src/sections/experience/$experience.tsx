"use client";

import { ChevronDown } from "@/components/chevrondown";
import { Title } from "@/sections/experience/title";
import { Timeline } from "@/sections/experience/timeline";
import { motion } from "motion/react";

function Experience() {
  return (
    <div className="flex flex-col items-center gap-y-8">
      <div className="flex flex-col gap-y-8 px-10">
        <Title />
        <Timeline />
      </div>
      <motion.div
        className="flex items-center justify-center gap-x-2"
        initial={{
          y: 0,
          opacity: 0.7,
        }}
        animate={{
          y: 10,
          opacity: 1,
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        Scroll down to view more
        <ChevronDown />
      </motion.div>
    </div>
  );
}

export default Experience;
