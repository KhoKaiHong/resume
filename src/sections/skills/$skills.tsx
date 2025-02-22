"use client";

import { ChevronUp } from "@/components/chevronup";
import { Title } from "@/sections/skills/title";
import { LogoTable } from "@/sections/skills/logoTable";
import { motion } from "motion/react";

function Skills() {
  return (
    <div className="flex flex-col items-center gap-y-8">
      <div className="flex flex-col gap-y-8 px-10">
        <Title />
      </div>
      <div className="flex flex-col w-full">
        <LogoTable />
      </div>
      <motion.div
        className="flex items-center justify-center gap-x-2"
        initial={{
          y: 0,
          opacity: 0.7,
        }}
        animate={{
          y: -10,
          opacity: 1,
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        Back to top
        <ChevronUp />
      </motion.div>
    </div>
  );
}

export default Skills;
