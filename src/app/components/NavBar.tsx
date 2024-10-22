"use client";
import React from "react";
import { useRouter } from "next/navigation";

const NavBar: React.FC = () => {
    const router = useRouter();
    const scrollToDiv = (divId: string) => {
      const section = document.getElementById(divId);
      section ? section.scrollIntoView({behavior: 'smooth'}) : router.push('/');
    }
    return(
      <nav className="fixed top-0 left-0 w-full py-6 px-6 bg-gradient-to-b from-black to-transparent z-20">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-white cursor-pointer hover:text-red-400 hover:font-bold transition duration-300" ><span onClick={() => scrollToDiv("home")}>BlackJack</span></h1>
          <span className="text-white text-xl cursor-pointer hover:text-red-400 hover:font-bold transition duration-300"
          onClick={() =>scrollToDiv("rules")}>Rules</span>
      </div>
  </nav>
    )
}

export default NavBar;