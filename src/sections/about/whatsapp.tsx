"use client";

import { motion } from "motion/react";

export function WhatsApp() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      viewBox="0 0 25 25"
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
        d="M12,.5A11.5,11.5,0,0,0,2.46,18.42L.5,23.5l5.23-1.87A11.5,11.5,0,1,0,12,.5Z"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        whileInView={{
          pathLength: 1,
          transition: {
            pathLength: { type: "spring", duration: 1.5, bounce: 0 },
          },
        }}
        d="M9.5,14.5c1.3,1.3,4.17,3,5.5,3a2.53,2.53,0,0,0,2.5-2v-1s-1.23-.6-2-1-2,1-2,1A6.52,6.52,0,0,1,11,13a6.52,6.52,0,0,1-1.5-2.5s1.4-1.23,1-2-1-2-1-2h-1A2.53,2.53,0,0,0,6.5,9C6.5,10.33,8.2,13.2,9.5,14.5Z"
      />
    </svg>
  );
}
