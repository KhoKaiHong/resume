"use client";

import { motion } from "motion/react";

export function Email() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <motion.rect
        initial={{ pathLength: 0 }}
        whileInView={{
          pathLength: 1,
          transition: {
            pathLength: {
              type: "spring",
              duration: 1.5,
              bounce: 0,
            },
          },
        }}
        width="20"
        height="16"
        x="2"
        y="4"
        rx="2"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        whileInView={{
          pathLength: 1,
          transition: {
            pathLength: {
              type: "spring",
              duration: 1.5,
              bounce: 0,
            },
          },
        }}
        d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
      />
    </svg>
  );
}
