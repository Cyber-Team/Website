import React from "react";
import { Spotlight } from "./ui/spotlight-new";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { SVGMaskEffectDemo } from "./Reveal";
import logo from "../assets/logo.png"

const BoxesCore = ({ className, ...rest }) => {
  const rows = new Array(150).fill(1);
  const cols = new Array(100).fill(1);
  const colors = [
    "--sky-300",
    "--pink-300",
    "--green-300",
    "--yellow-300",
    "--red-300",
    "--purple-300",
    "--blue-300",
    "--indigo-300",
    "--violet-300",
  ];
  
  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };
  
  return (
    <div
      style={{
        transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
      }}
      className={cn(
        "absolute left-1/4 p-4 -top-1/4 flex -translate-x-1/2 -translate-y-1/2 w-full h-full z-0",
        className
      )}
      {...rest}
    >
      {rows.map((_, i) => (
        <motion.div key={`row` + i} className="w-16 h-8 border-l border-slate-700 relative">
          {cols.map((_, j) => (
            <motion.div
              whileHover={{
                backgroundColor: `var(${getRandomColor()})`,
                transition: { duration: 0 },
              }}
              animate={{
                transition: { duration: 2 },
              }}
              key={`col` + j}
              className="w-16 h-8 border-r border-t border-slate-700 relative"
            >
              {j % 2 === 0 && i % 2 === 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="absolute h-6 w-10 -top-[14px] -left-[22px] text-slate-700 stroke-[1px] pointer-events-none"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                </svg>
              ) : null}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};
const Boxes = React.memo(BoxesCore);

export function SpotlightNewDemo() {
  return (
    <div className="h-[50rem] w-full rounded-md flex md:items-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight />
      <Boxes className="opacity-20" />

      <div className="flex flex-col md:flex-row justify-between items-center w-full p-4 max-w-7xl mx-auto relative z-10 gap-8">
        {/* Text content */}
        <div className="w-full md:w-3/4 px-4 md:pl-8 order-2 md:order-1">
          <SVGMaskEffectDemo />
        </div>

        {/* Logo - Pushed Further Right */}
        <div className="w-full md:w-1/4 flex justify-end ml-auto order-1 md:order-2">
          <img 
            className="w-156 h-156 md:w-164 md:h-164 rounded-full" 
            src={logo}
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
}
