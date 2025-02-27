"use client"

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Objectives from "@/components/Objectives";
import HowItWorks from "@/components/HowItWorks";
export default function Home() {
  return (
    <div className="grid grid-rows items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20  bg-dot-white/[0.4]">
    <Hero/>
    <Navbar/>
    
    <br />
    <br />
    <br />
    <HowItWorks/>
    <Objectives/>
    </div>
    
  );
}
