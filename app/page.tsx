import Head from 'next/head';
import Link from "next/link";
import Particles from "./components/particles";

const navigation = [
    { name: "Experience", href: "/experience" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
];

export default function Home() {
    return (
      <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
        <nav className="my-16 animate-fade-in">
          
          <ul className="flex items-center justify-center gap-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
              >
                {item.name}
              </Link>
            ))}
          </ul>
        </nav>
        
       <h1 className="py-3.5 px-0.5 z-10 text-3xl text-transparent duration-1000 bg-white cursor-default animate-title font-display xs:text-xl 1_xs:text-2xl 2_xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl whitespace-nowrap bg-clip-text">
          <span className="text-green-500">Christopher@DESKTOP</span>
          <span className="text-white">:</span>
          <span className="text-blue-500">~</span>
          <span className="text-white">$ cd home</span>
      </h1>

      <Particles
          className="absolute inset-0 -z-10 animate-fade-in"
          quantity={100}
        />
     
        <div className="my-16 text-center animate-fade-in">
          <h2 className="text-sm text-zinc-500 ">I'm building</h2>
        </div>
      </div>
    );
  
  }