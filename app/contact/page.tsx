"use client";
import Link from "next/link";
import Particles from "../components/particles";
import { Navigation } from "../components/nav";
import React, { useEffect } from "react";


export default function Example() {
    return (

    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black"> 
      <Navigation />
     
      <Particles
          className="absolute inset-0 -z-10 animate-fade-in"
          quantity={100}
        />
    </div>
	)
	
};

