"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {

    const router = useRouter();
    const scrollToDiv = (divId: string) =>{
        const section = document.getElementById(divId);
        section?.scrollIntoView({behavior: 'smooth'});
    }
    
    return (
        <div className="relative w-full h-screen">
            <nav className="fixed top-0 left-0 w-full py-6 px-6 bg-gradient-to-b from-black to-transparent z-20">
                <div className="flex justify-between items-center max-w-7xl mx-auto">
                    <h1 className="text-3xl font-bold text-white cursor-pointer hover:text-red-400 hover:font-bold transition duration-300" ><span onClick={() => scrollToDiv("home")}>BlackJack</span></h1>
                    <span className="text-white text-xl cursor-pointer hover:text-red-400 hover:font-bold transition duration-300"
                    onClick={() =>scrollToDiv("rules")}>Rules</span>
                </div>
            </nav>

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

            <section
                id="rules"
                className="relative z-20 bg-white text-red-800 py-20 px-4 flex flex-col items-center justify-between"
            >
                <h2 className="text-3xl font-bold mb-6">Rules to Play</h2>
                <ul className="max-w-2xl text-lg leading-7 text-left list-none">
                    <li className="mb-2">
                        <span className="mr-2">♠️</span> The objective is to have a hand value closest to 21 without exceeding it.
                    </li>
                    <li className="mb-2">
                        <span className="mr-2">♥️</span> Each player starts with two cards, and so does the dealer.
                    </li>
                    <li className="mb-2">
                        <span className="mr-2">♣️</span> The dealer has one card face up and one card face down.
                    </li>
                    <li className="mb-2">
                        <span className="mr-2">♦️</span> Cards 2 through 10 are worth their face value.
                    </li>
                    <li className="mb-2">
                        <span className="mr-2">♠️</span> Face cards (Jack, Queen, King) are worth 10.
                    </li>
                    <li className="mb-2">
                        <span className="mr-2">♥️</span> An Ace can be worth either 1 or 11, depending on the player's choice.
                    </li>
                    <li className="mb-2">
                        <span className="mr-2">♣️</span> Players can choose to:
                        <ul className="list-none ml-6">
                            <li className="mb-2">
                                <span className="mr-2">♦️</span> <strong>Hit</strong> - take another card.
                            </li>
                            <li className="mb-2">
                                <span className="mr-2">♠️</span> <strong>Stand</strong> - keep their current hand.
                            </li>
                        </ul>
                    </li>
                    <li className="mb-2">
                        <span className="mr-2">♥️</span> If a player's hand exceeds 21, they "bust" and lose the game.
                    </li>
                    <li className="mb-2">
                        <span className="mr-2">♠️</span> If neither player nor dealer busts, the higher hand wins.
                    </li>
                </ul>
            </section>
        </div>
    )
}