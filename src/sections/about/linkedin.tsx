"use client";

import { motion } from "motion/react";

export function LinkedIn() {
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
      <motion.path
        initial={{ pathLength: 0 }}
        whileInView={{
          pathLength: 1,
          transition: {
            pathLength: { type: "spring", duration: 1.5, bounce: 0 },
          },
        }}
        d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
      />
      <motion.rect
        initial={{ pathLength: 0 }}
        whileInView={{
          pathLength: 1,
          transition: {
            pathLength: { type: "spring", duration: 1.5, bounce: 0 },
          },
        }}
        width="4"
        height="12"
        x="2"
        y="9"
      />
      <motion.circle
        initial={{ pathLength: 0 }}
        whileInView={{
          pathLength: 1,
          transition: {
            pathLength: { type: "spring", duration: 1.5, bounce: 0 },
          },
        }}
        cx="4"
        cy="4"
        r="2"
      />
    </svg>
  );
}
