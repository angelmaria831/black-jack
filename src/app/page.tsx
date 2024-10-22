"use client";

import React from "react";
import { useRouter } from "next/navigation";
import GameRules from "./components/GameRules";

export default function HomePage() {

    const router = useRouter();  
    return (
        <div className="relative w-full h-screen bg-black">
            <main className="relative w-full h-screen overflow-hidden" id="home">
                <video
                    autoPlay
                    loop
                    muted
                    className="absolute top-0 left-0 w-full h-full object-cover"
                >
                    <source src="/home_background.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <div className="relative z-10 flex flex-col items-center justify-center h-full">
                    <h1 className="text-white text-5xl font-bold ">Beat the <span className="text-red-700">Dealer</span>, Not the Odds. Are You In?</h1>
                    <button className="mt-5 px-4 py-2 bg-red-800 text-white rounded hover:bg-red-500 transition duration-300"
                    onClick={() => router.push('/game')}>Play Now!</button>
                </div>
            </main>
            <GameRules />
        </div>
    )
}