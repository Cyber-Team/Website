"use client";
import { MaskContainer } from "./ui/svg-mask-effect";

export function SVGMaskEffectDemo() {
  return (
    <div
      className="h-[40rem] w-full flex items-center justify-center bg-inherit  overflow-hidden">
      <MaskContainer
        revealText={
          <p className="max-w-5xl mx-auto text-center">
          <span className="block text-8xl font-extrabold tracking-widest font-[Rajdhani]">
            <span className="text-white">Cyber</span>
            <span className="text-red-700">Team</span>
          </span>
          <span className="block text-3xl mt-6 text-slate-200 italic bg-gradient-to-r from-cyan-500 via-green-400 to-purple-500 bg-clip-text text-transparent font-[Rajdhani]">
            Empowering the next generation of cybersecurity leaders, we provide the tools, knowledge, and real-world skills needed to dominate the digital world.
          </span>
        </p>
        
        }
        className="h-[80rem] rounded-md"
      >
        <span className="block text-4xl mt-6 italic font-[Rajdhani]">
        We don’t break the systems, we <span className="text-red-500">reprogram</span> the <span className="text-red-500">rules</span>
        </span>
      </MaskContainer>
    </div>
  )
}