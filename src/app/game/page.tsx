"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import Game from "../lib/Game";


type Card = {
    card: string;
    flipped: boolean;
}

export default function GamePage() {

    const [game, setGame] = useState<Game>(new Game("Sam"));
    const [isDealt, setIsDealt] = useState(false);
    const [playButtonText, setPlayButtonText] = useState("START")
    const [dealerHand, setDealerHand] = useState<Card[]>([]);
    const [playerHand, setPlayerHand] = useState<Card[]>([]);
    const [dealerScore, setDealerScore] =useState(0);
    const [playerScore, setPlayerScore] =useState(0);
    // const cardFlipSound = '/sounds/card-sounds.mp3';
    // const audio = new Audio(cardFlipSound);
    

    const startGame = async() => {

        if(!isDealt) {
            game.startGame();
            console.log("starting...")
            const {dealerCards, playerCards} = await game.showCardsImage();
            console.log({dealerCards, playerCards})
    
            flipDealerCards(dealerCards);
            flipPlayerCards(playerCards);

            setIsDealt(true);
            setPlayButtonText("RESET");

            setTotalScoreAndStatus();

        } else {
            const newGame = new Game("Sam");
            setGame(newGame);
            setIsDealt(false);
            setPlayButtonText("START");
            setDealerHand([]);
            setPlayerHand([]);
        }


        async function setTotalScoreAndStatus() {

            const scores = await game.getTotalScoreAndStatus();
            console.log("sco ", scores)
            setDealerScore((scores?.dealerScore) ?? 0);
            setPlayerScore((scores?.playerScore) ?? 0);
        }


    }

    const flipDealerCards = (dealerCards: Card[]) => {

        dealerCards.forEach((cardObj, index) => {
            console.log({cardObj})
            setTimeout(() => {
                setDealerHand((prevCards) => [
                    ...prevCards, 
                    cardObj,
                ]);

                setTimeout(() => {
                    // audio.play();
                    setDealerHand((prevCards) => 
                    prevCards.map((c, i) => ({...c, flipped: true})))
                }, 1000);
            }, index * 2000);

        });

    }

    const flipPlayerCards = (playerCards: Card[]) => {
        console.log({playerCards})
        playerCards.forEach((cardObj, index) => {

            setTimeout(() => {
                console.log("1st")
                setPlayerHand((prevCards) => [
                    ...prevCards, 
                    cardObj,
                ]);

                setTimeout(() => {
                    // audio.play();
                    console.log("2nd")
                    setPlayerHand((prevCards) => 
                    prevCards.map((c, i) =>  ({...c, flipped: true})))
                }, 1000);
            }, index * 2000);

        });

    }

    const hitWithCard = async() => {
        const newCard = game.hitWithCard();
        flipPlayerCards([newCard]);
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
                            alt="Shuffled Deck"
                            src="/cards/card-back2.png"
                            width={80}
                            height={120}
                            className="absolute cards-shuffled right-0 mr-40 object-contain" />
                   </div>
                   
                   <div className="relative flex items-center mb-4 ">
                   {isDealt && 
                   <div id="tooltip-dealer" className="absolute left-[-115px] w-24 rounded bg-red-900 p-2 text-xs text-white"> POINTS : {dealerScore}</div>}
                   <div id="dealer-cards" className="relative flex w-64 justify-center items-center mb-4 border-4 border-grey rounded-md"
                    style={{ height: '140px', width: '200px' }}>
                      
                            {isDealt && 
                            dealerHand.map((cardObj, index) =>
                                <div key={index} id="card-border" className="absolute w-[90px] h-[113px]"   
                                     style={{
                                    top: `${index * 0}px`,
                                    left: `${index * 30}px`
                                }}>
                                {
                                    cardObj.flipped ? (
                                    <Image
                                    alt={`dealer-card-${index}`}
                                    src={cardObj.card}
                                    width={80}
                                    height={113}
                                    className="object-cover dealer-animate cards mt-2"
                                   /> 
                                    ): (
                                        <Image
                                        alt= "back-side-card"
                                        src="/cards/card-back2.png"
                                        width={80}
                                        height={113}
                                        className="object-cover dealer-animate flip-card cards mt-2"
                                       /> 
                                    )
                                }
                                </div>
                            )                            
                            }

                    </div>
                    
                   </div>

                    <h1 className="text-white text-4xl font-bold mb-4 mt-4">You</h1>
                    <div className="relative flex items-center mb-4 ">
                    <div id="player-cards" className="relative flex justify-center items-center mb-6 border-4 border-grey rounded-md" 
                    style={{ height: '140px', width: '200px' }}>
                        
                        {isDealt && 
                            playerHand.map((cardObj, index) =>
                                <div key={index} id="card-border" className="absolute w-[90px] h-[113px]"   
                                     style={{
                                    top: `${index * 0}px`,
                                    left: `${index * 30}px`
                                }}>
                                {
                                    cardObj.flipped ? (
                                    <Image
                                    alt={`player-card-${index}`}
                                    src={cardObj.card}
                                    width={80}
                                    height={113}
                                    className="object-cover cards mt-2"
                                   /> 
                                    ): (
                                        <Image
                                        alt= "back-side-card"
                                        src="/cards/card-back2.png"
                                        width={80}
                                        height={113}
                                        className="object-cover player-animate cards mt-2"
                                       /> 
                                    )
                                }
                                </div>
                            )                            
                            }

                    </div>
                    {isDealt && <div id="tooltip-player" className="absolute right-[-115px] w-24 rounded bg-red-900 p-2 text-xs text-white"> POINTS : {playerScore}</div>}
                    </div>
                    <div className="relative w-full flex justify-center mb-8">
                        <button type="button"
                            className="inset-y-0 px-5 py-3 m-8 bg-red-900 text-white rounded hover:scale-110"
                            onClick={startGame}> { playButtonText }</button>
                        <button type="button" className="inset-y-0 px-6 py-3 m-8 bg-red-900 text-white rounded hover:scale-110"
                            onClick={hitWithCard}> Hit</button>
                        <button type="button" className="inset-y-0 px-5 py-3 m-8 bg-red-900 text-white rounded hover:scale-110"> Stand</button>
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
