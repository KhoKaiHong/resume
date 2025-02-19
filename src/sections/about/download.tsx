"use client";

import { motion } from "motion/react";
import { useEffect } from "react";
import { useAnimate } from "motion/react";

export function Download({ isHovered }: { isHovered: boolean }) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (isHovered) {
      animate(scope.current, { y: 10, opacity: 0 }, { duration: 0.2 }).then(
        () => {
          animate(scope.current, { y: -10 }, { duration: 0 });
        }
      );

      const timeout = setTimeout(() => {
        animate(scope.current, { y: 0, opacity: 1 }, { duration: 0.2 });
      }, 220);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [isHovered, animate, scope]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
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
            pathLength: {
              type: "spring",
              duration: 1.5,
              bounce: 0,
            },
          },
        }}
        d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
      />
      <g ref={scope}>
        <motion.polyline
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
          points="7 10 12 15 17 10"
        />
        <motion.line
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
          x1="12"
          x2="12"
          y1="15"
          y2="3"
        />
      </g>
    </svg>
  );
}
