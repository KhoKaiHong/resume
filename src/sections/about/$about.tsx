"use client";

import { LinkedIn } from "@/sections/about/linkedin";
import { GitHub } from "@/sections/about/github";
import { Email } from "@/sections/about/email";
import { WhatsApp } from "@/sections/about/whatsapp";
import { AnimatedButton } from "@/components/ui/animatedButton";
import { Name } from "@/sections/about/name";
import { Download } from "@/sections/about/download";
import { Description } from "@/sections/about/description";
import { useState } from "react";
import { motion } from "motion/react";

function About() {
  const [downloadButtonHovered, setDownloadButtonHovered] = useState(false);

  return (
    <div>
      <div className="flex gap-5">
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
        <AnimatedButton
          asChild
          className="h-15 rounded-full"
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
      <Name />
      <Description />
    </div>
  );
}

export default About;
