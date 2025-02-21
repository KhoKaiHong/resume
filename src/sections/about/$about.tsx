"use client";

import { LinkedIn } from "@/sections/about/linkedin";
import { GitHub } from "@/sections/about/github";
import { Email } from "@/sections/about/email";
import { WhatsApp } from "@/sections/about/whatsapp";
import { AnimatedButton } from "@/components/ui/animatedButton";
import { Name } from "@/sections/about/name";
import { Download } from "@/sections/about/download";
import { Description } from "@/sections/about/description";
import { Subheading } from "@/sections/about/subheading";
import { ChevronDown } from "@/components/chevrondown";
import { useState } from "react";
import { motion } from "motion/react";

function About() {
  const [downloadButtonHovered, setDownloadButtonHovered] = useState(false);

  return (
    <div className="flex flex-col items-center gap-y-20">
      <div className="flex flex-col items-center gap-y-10 sm:gap-y-0 sm:flex-row-reverse">
        <div className="flex flex-col gap-y-3 px-10">
          <Name />
          <Subheading />
          <Description />
          <AnimatedButton
            asChild
            className="h-15 rounded-full w-60 mt-5"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.a
              href="/assets/Resume.pdf"
              download="Kho Kai Hong Resume"
              onHoverStart={() => setDownloadButtonHovered(true)}
              onHoverEnd={() => setDownloadButtonHovered(false)}
            >
              <Download isHovered={downloadButtonHovered} />
              Download Résumé
            </motion.a>
          </AnimatedButton>
        </div>
        <div className="flex flex-row gap-x-5 sm:flex-col sm:gap-y-5 px-10">
          <AnimatedButton
            asChild
            className="h-15 w-15 rounded-full"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            size="icon"
          >
            <a
              href="https://www.linkedin.com/in/kho-kai-hong-787043276"
              target="_blank"
            >
              <LinkedIn />
            </a>
          </AnimatedButton>
          <AnimatedButton
            asChild
            className="h-15 w-15 rounded-full"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            size="icon"
          >
            <a href="https://github.com/KhoKaiHong" target="_blank">
              <GitHub />
            </a>
          </AnimatedButton>
          <AnimatedButton
            asChild
            className="h-15 w-15 rounded-full"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            size="icon"
          >
            <a href="https://wa.me/601135275289" target="_blank">
              <WhatsApp />
            </a>
          </AnimatedButton>
          <AnimatedButton
            asChild
            className="h-15 w-15 rounded-full"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            size="icon"
          >
            <a href="mailto:khokaihong@gmail.com" target="_blank">
              <Email />
            </a>
          </AnimatedButton>
        </div>
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

export default About;
