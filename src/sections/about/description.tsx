"use client";

import { useState, useEffect } from "react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function Description() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [displayText, setDisplayText] = useState("");
  const characters =
    "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz!<>-_\\/[]{}—=+*^?#@~`;%$:&()";

  const age = new Date().getFullYear() - 2003;

  const text =
    "I am a " +
    age +
    "-year-old graduate from Asia Pacific University of Technology and Innovation with a Bachelor's degree in Computer Science. Always excited to learn emerging tools and frameworks to build innovative web applications that push boundaries.";

  useEffect(() => {
    if (!isInView) return;

    const scrambleText = () => {
      const newText = text
        .split(" ")
        .map((word) => {
          return word
            .split("")
            .map(
              () => characters[Math.floor(Math.random() * characters.length)]
            )
            .join("");
        })
        .join(" ");
      setDisplayText(newText);
    };

    const revealInterval = setInterval(scrambleText, 50);

    const revealTimeout = setTimeout(() => {
      clearInterval(revealInterval);
      setDisplayText(text);
    }, 1000);

    return () => {
      clearInterval(revealInterval);
      clearTimeout(revealTimeout);
    };
  }, [isInView, text]);

  return <div ref={ref}>{displayText}</div>;
}
