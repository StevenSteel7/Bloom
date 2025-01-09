import Image from "next/image";
import { Hero } from "./sections/hero";
import Introducing from "./sections/Introducing";
import HarmfullEffects from "./sections/HarmfullEffects";
import Bloom from "./sections/Bloom";
import { MoreFeatures } from "./sections/More-Features";
import DoomScrolling from "./sections/DoomScrolling";


export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-center min-h-screen py-2 relative">

       
      <Hero />      
      <HarmfullEffects/> {/* */}
      <DoomScrolling/>
      <Introducing/> 
      <Bloom/>
      <MoreFeatures/>
      
       
      </main>
    </>
  );
}