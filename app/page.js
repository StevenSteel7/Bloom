"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Hero } from "./sections/hero";
import Introducing from "./sections/Introducing";
import HarmfullEffects from "./sections/HarmfullEffects";
import Bloom from "./sections/Bloom";
import { MoreFeatures } from "./sections/More-Features";
import DoomScrolling from "./sections/DoomScrolling";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
        <h1 className="text-3xl font-bold mb-4 text-white">
          Mobile Version Coming Soon 😇
        </h1>
        <p className="text-gray-400 text-lg">
          This experience is not currently optimized for smartphones due to TimeCrunch. We're working on it! 
        </p>
      </div>
    );
  }

  return (
    <>
      <main className="flex flex-col items-center justify-center min-h-screen py-2 relative">
        <Hero />      
        <HarmfullEffects/>
        <DoomScrolling/>
        <Introducing/> 
        <Bloom/>
        <MoreFeatures/>
      </main>
    </>
  );
}