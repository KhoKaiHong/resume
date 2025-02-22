import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "motion/react";
import { useState } from "react";

const logoImageVariants = {
  grayed: { filter: "grayscale(1) contrast(0.8)" },
  focused: {
    filter: "drop-shadow(0px 0px 30px rgba(255, 255, 255, 1))",
    transition: { duration: 0 },
  },
};

interface LogoItemProps {
  src: string;
  alt: string;
  index: number;
  isFocused: boolean;
  onFocusChange: (index: number, focused: boolean) => void;
}

const LogoItem = ({
  src,
  alt,
  index,
  isFocused,
  onFocusChange,
}: LogoItemProps) => {
  return (
    <TooltipProvider>
      <Tooltip open={isFocused}>
        <TooltipTrigger>
          <motion.img
            src={src}
            width="60"
            height="60"
            initial="grayed"
            animate={isFocused ? "focused" : "grayed"}
            onTap={() => onFocusChange(index, true)}
            onHoverStart={() => onFocusChange(index, true)}
            onHoverEnd={() => onFocusChange(index, false)}
            variants={logoImageVariants}
            alt={alt}
          />
        </TooltipTrigger>
        <TooltipContent>
          <p>{alt}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

const logos = [
  { src: "/assets/logos/html.svg", alt: "HTML" },
  { src: "/assets/logos/css.svg", alt: "CSS" },
  { src: "/assets/logos/javascript.svg", alt: "JavaScript" },
  { src: "/assets/logos/typescript.svg", alt: "TypeScript" },
  { src: "/assets/logos/tailwind.svg", alt: "Tailwind CSS" },
  { src: "/assets/logos/react.svg", alt: "React" },
  { src: "/assets/logos/solidjs.svg", alt: "SolidJS" },
  { src: "/assets/logos/nextjs.svg", alt: "NextJS" },
  { src: "/assets/logos/postgres.svg", alt: "PostgreSQL" },
  { src: "/assets/logos/tanstack.png", alt: "TanStack" },
  { src: "/assets/logos/rust.svg", alt: "Rust" },
  { src: "/assets/logos/java.svg", alt: "Java" },
  { src: "/assets/logos/c.svg", alt: "C" },
  { src: "/assets/logos/cpp.svg", alt: "C++" },
  { src: "/assets/logos/python.svg", alt: "Python" },
  { src: "/assets/logos/solidity.png", alt: "Solidity" },
  { src: "/assets/logos/r.svg", alt: "R" },
  { src: "/assets/logos/git.svg", alt: "Git" },
];

export function LogoTable() {
  const [isFocused, setIsFocused] = useState<boolean[]>(
    new Array(logos.length).fill(false)
  );

  const handleFocusChange = (index: number, focused: boolean) => {
    setIsFocused((prev) => {
      const newState = new Array(prev.length).fill(false);
      if (focused) newState[index] = true;
      return newState;
    });
  };

  return (
    <div className="grid grid-cols-3 md:grid-cols-6 gap-y-10 justify-items-center">
      {logos.map((logo, index) => (
        <LogoItem
          key={logo.alt}
          {...logo}
          index={index}
          isFocused={isFocused[index]}
          onFocusChange={handleFocusChange}
        />
      ))}
    </div>
  );
}
