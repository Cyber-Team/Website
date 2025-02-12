"use client";
import { MaskContainer } from "./ui/svg-mask-effect";

export function SVGMaskEffectDemo() {
  return (
    <div
      className="h-[40rem] w-full flex items-center justify-center bg-inherit  overflow-hidden">
      <MaskContainer
        revealText={
          <p className="max-w-4xl mx-auto text-slate-100 text-center text-4xl font-bold">
            <span className="text-red-500">CyberTeam</span>: Empowering the next generation of cybersecurity leaders, we provide the tools, knowledge, and real-world skills needed to dominate the digital world
          </p>
        }
        className="h-[80rem] rounded-md"
      >
        We don’t break the systems, we <span className="text-red-500">reprogram</span> the <span className="text-red-500">rules</span>
      </MaskContainer>
    </div>
  )
}