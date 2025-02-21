import { motion } from "motion/react";
import { Award } from "@/sections/experience/award";

const parentVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 1.3 } },
};

const childrenVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.8 } },
};

const lineVariants = {
  hidden: { pathLength: 0 },
  visible: {
    pathLength: 1,
    transition: {
      pathLength: {
        type: "spring",
        damping: 20,
        duration: 0.5,
        bounce: 0,
      },
    },
  },
};

const contentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8 },
  },
};

const events = [
  {
    date: "Jan 2016 - Dec 2020",
    title: "Han Chiang High School",
    description: "Cambridge IGCSE",
    awards:
      "10A*",
  },
  {
    date: "Mar 2021 - Dec 2021",
    title: "Asia Pacific University of Technology and Innovation",
    description: "Foundation in Computing",
    awards: "CGPA: 3.96",
  },
  {
    date: "Mar 2022 - Feb 2025",
    title: "Asia Pacific University of Technology and Innovation",
    description: "BSc (Hons) Computer Science",
    awards: "CGPA: 3.73",
  },
  {
    date: "Jan 2024 - May 2024",
    title: "Keysight Technologies Malaysia",
    description: "Software Applications Development Intern",
  },
];

export function Timeline() {
  return (
    <motion.div
      className="pl-8"
      variants={parentVariants}
      initial="hidden"
      whileInView="visible"
    >
      {events.map((event, index) => (
        <motion.div
          key={index}
          className="flex flex-col justify-top relative pb-7"
          variants={childrenVariants}
        >
          <motion.div variants={contentVariants}>
            <svg
              className="absolute left-0 top-1"
              width="12"
              height="12"
              style={{ transform: "translateX(-29.5px)" }}
            >
              <circle cx="6" cy="6" r="6" fill="currentColor" />
            </svg>

            <div className="flex flex-col gap-y-2">
              <div className="font-medium text-sm sm:text-base text-accent">
                {event.date}
              </div>
              <div className="font-medium text-sm sm:text-base">
                {event.title}
              </div>
              <div className="text-sm sm:text-base">{event.description}</div>
              {event.awards && (
                <div className="flex items-center gap-x-2">
                  <Award />
                  <div className="text-xs sm:text-sm">{event.awards}</div>
                </div>
              )}
            </div>
          </motion.div>
          {index !== events.length - 1 && (
            <svg
              className="absolute left-0 top-0 h-full"
              width="12"
              style={{ transform: "translateX(-29.5px) translateY(10px)" }}
            >
              <motion.line
                x1="6"
                y1="0"
                x2="6"
                y2="100%"
                stroke="currentColor"
                strokeWidth="2"
                variants={lineVariants}
              />
            </svg>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
}
