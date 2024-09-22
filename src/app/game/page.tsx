"use client";
import Image from "next/image";
import { useState } from "react";
import Game from "../lib/Game";

export default function GamePage() {

    const [isDealt, setIsDealt] = useState(false);
    const game = new Game("Sam");
    const [dealerHand, setDealerHand] = useState(['','']);
    let [playerHand, setPlayerHand] = useState(['','']);


    const startGame = () => {
        game.startGame();
        const {dealerCards, playerCards} = game.showCardsImage();
        console.log({dealerCards, playerCards})
        setDealerHand(dealerCards);
        setPlayerHand(playerCards);

        /**
         * dealerCards: ["/diamonds_4.png", "/spades_3.png"]
         * playerCards: ["/diamonds_a.png", "/spades_a.png"]
         */
        setIsDealt(true);
    }

    return (
        <div className="relative w-full h-screen bg-black">
            <nav className="fixed top-0 left-0 w-full py-6 px-6 bg-gradient-to-b from-black to-transparent z-10">
                <div className="flex justify-between items-center max-w-7xl mx-auto">
                    <h1 className="text-3xl font-bold text-white cursor-pointer hover:text-red-400 hover:font-bold transition duration-300" >
                        <span>BlackJack</span></h1>
                    <span className="text-white text-xl cursor-pointer hover:text-red-400 hover:font-bold transition duration-300"
                    >Rules</span>
                </div>
            </nav>

            <main className="relative w-full h-screen top-0 overflow-hidden bg-gradient-to-l from-tranparent to-black">
                <Image src="/table_background.png"
                    alt="Table Image"
                    fill
                    style={{ objectFit: "cover" }} />

                <div className="relative flex flex-col items-center justify-center h-full mt-7">

                    <div className="relative w-full flex justify-center items-center mt-14">
                        <h1 className="text-red-900 text-4xl left-0 font-bold mb-6 ">Dealer</h1>
                        <Image
                            alt="cards-shuffled"
                            src="/cards/card-back2.png"
                            width={80}
                            height={120}
                            className="absolute cards-shuffled right-0 mr-40 object-contain" />


                    </div>
                    <div id="dealer-cards" className="relative flex justify-center items-center mb-4 border-4 border-grey rounded-md"
                    style={{ height: '140px', width: '200px' }}>
 
                        
                            {isDealt ? 
                            dealerHand.map((cardImage, index) =>
                                <div key={index} id="card-border" className="absolute w-[90px] h-[113px]"    style={{
                                    top: `${index * 0}px`,
                                    left: `${index * 30}px`
                                }}>
                                <Image
                                    alt={`dealer-card-${index}`}
                                    src={cardImage}
                                    width={80}
                                    height={113}
                                    className="object-cover cards animate-card-deal animate-slide-to-position mt-2"
                                   />
                                </div>
                            ) :
                            (
                                dealerHand.map((_, index) => 
                                    <div key={index} id="card-border" className="absolute w-[90px] h-[113px] " />
                                )                          
                            )
                            }

                    </div>
                    <h1 className="text-white text-4xl font-bold mb-4 mt-4">You</h1>
                    <div id="player-cards" className="relative flex justify-center items-center mb-6 border-4 border-grey rounded-md" 
                    style={{ height: '140px', width: '200px' }}>
                        
                            {isDealt ? 
                            playerHand.map((cardImage, index) => 
                                <div key={index} id="card-border" className="absolute w-[90px] h-[113px]" 
                                 style={{
                                    top: `${index * 0}px`,
                                    left: `${index * 30}px`
                                }}  >
                                <Image
                                alt={`player-card-${index}`}
                                src={cardImage}
                                width={80}
                                height={113}
                                className="object-cover cards animate-card-deal animate-slide-to-position mt-2"
                               />
                        </div>
                            ) : 
                            (
                                playerHand.map((_, index) => 
                                    <div key={index} id="card-border" className="absolute w-[90px] h-[120px]" />
                                )
                            )
                            
                         }

                    </div>

                    <div className="relative w-full flex justify-center mb-8">
                        <button type="button"
                            className="inset-y-0 px-5 py-3 m-8 bg-red-900 text-white rounded"
                            onClick={startGame}> Start</button>
                        <button type="button" className="inset-y-0 px-6 py-3 m-8 bg-red-900 text-white rounded"> Hit</button>
                        <button type="button" className="inset-y-0 px-5 py-3 m-8 bg-red-900 text-white rounded"> Stand</button>
                    </div>

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
