"use client";

import About from "@/sections/about/$about";
import Experience from "./sections/experience/$experience";

import { motion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";

function Section({ children }: { children: React.ReactNode }) {
  return (
    <section className="h-full w-full snap-start overflow-hidden place-content-center">
      {children}
    </section>
  );
}

function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: containerRef });
  const scaleX = useSpring(scrollYProgress, {
    damping: 30,
    bounce: 0,
  });

  return (
    <div
      className="h-dvh overflow-y-scroll snap-y snap-mandatory scroll-smooth"
      ref={containerRef}
    >
      <Section>
        <About />
      </Section>
      <Section>
        <Experience />
      </Section>
      <motion.div
        className="fixed left-0 right-0 h-2 w-full bg-accent bottom-2 origin-left"
        style={{ scaleX }}
      />
    </div>
  );
}

export default App;
