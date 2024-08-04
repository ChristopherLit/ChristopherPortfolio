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
<div className="-translate-y-1/2 h-1/3">
<h1 className="py-3.5 px-0.5 z-10 text-3xl text-transparent duration-1000 bg-white cursor-default font-display xs:text-xl 1_xs:text-2xl 2_xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl whitespace-nowrap bg-clip-text">
          <span className="text-green-500">Christopher@DESKTOP</span>
          <span className="text-white">:</span>
          <span className="text-blue-500">~</span>
          <span className="text-white">$ cd contact</span>
      </h1>


      </div>


    </div>
	)
	
};

