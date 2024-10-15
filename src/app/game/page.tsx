"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import Game from "../lib/Game";

import { Card } from "../types/Card";
import GameRules from "../components/GameRules";
import DealerCards from "../components/DealerCards";
import PlayerCards from "../components/PlayerCards";
import GameControls from "../components/GameControls";

export default function GamePage() {
  const [game, setGame] = useState<Game>(new Game("Sam"));
  const [isDealt, setIsDealt] = useState(false);
  const [playButtonText, setPlayButtonText] = useState("START");
  const [dealerHand, setDealerHand] = useState<Card[]>([]);
  const [playerHand, setPlayerHand] = useState<Card[]>([]);
  const [dealerScore, setDealerScore] = useState(0);
  const [playerScore, setPlayerScore] = useState(0);
  const [standGame, setStandGame] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [gameResult, setGameResult] = useState("");
  const cardFlipSound = "/sounds/card-sounds.mp3";

  const startGame = async () => {
    if (!isDealt) {
      game.startGame();
      console.log("starting...");
      const { dealerCards, playerCards } = await game.showCardsImage();
      console.log({ dealerCards, playerCards });

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
      setStandGame(false);
      setIsGameOver(false);
      setGameResult("");
    }
  };

  const setTotalScoreAndStatus = async () => {
    const scores = await game.getTotalScoreAndStatus();
    setDealerScore(scores?.dealerScore ?? 0);
    setPlayerScore(scores?.playerScore ?? 0);
    if (scores?.isGameOver) {
      setIsGameOver(true);
      scores.isPlayerWinner
        ? setGameResult("YOU WON!!")
        : setGameResult("BUST! Try Next Time.");
    }
  };

  const flipDealerCards = (dealerCards: Card[]) => {
    const audio = new Audio(cardFlipSound);
    dealerCards.forEach((cardObj, index) => {
      console.log({ cardObj });
      setTimeout(() => {
        setDealerHand((prevCards) => [...prevCards, cardObj]);

        setTimeout(() => {
          audio.play();
          setDealerHand((prevCards) =>
            prevCards.map((c, i) => ({ ...c, flipped: true }))
          );
        }, 1000);
      }, index * 2000);
    });
  };

  const flipPlayerCards = (playerCards: Card[]) => {
    console.log({ playerCards });
    const audio = new Audio(cardFlipSound);
    playerCards.forEach((cardObj, index) => {
      setTimeout(() => {
        console.log("1st");
        setPlayerHand((prevCards) => [...prevCards, cardObj]);

        setTimeout(() => {
          audio.play();
          console.log("2nd");
          setPlayerHand((prevCards) =>
            prevCards.map((c, i) => ({ ...c, flipped: true }))
          );
        }, 1000);
      }, index * 2000);
    });
  };

  const hitWithCard = async () => {
    const newCard = game.hitWithCard();
    flipPlayerCards([newCard]);
    setTotalScoreAndStatus();
  };

  const stand = () => {
    const { hiddenCard, newCards } = game.stand();
    setStandGame(true);
    const audio = new Audio(cardFlipSound);
    audio.play();
    setDealerHand((prevCards) =>
      prevCards.map((card, index) => (index === 0 ? hiddenCard : card))
    );
    flipDealerCards(newCards);
    setTotalScoreAndStatus();
  };

  return (
    <div className="relative w-full h-screen bg-black">
      {/* <nav className="fixed top-0 left-0 w-full py-6 px-6 bg-gradient-to-b from-black to-transparent z-10">
                <div className="flex justify-between items-center max-w-7xl mx-auto">
                    <h1 className="text-3xl font-bold text-white cursor-pointer hover:text-red-400 hover:font-bold transition duration-300" >
                        <span>BlackJack</span></h1>
                    <span className="text-white text-xl cursor-pointer hover:text-red-400 hover:font-bold transition duration-300"
                    >Rules</span>
                </div>
            </nav> */}

      <main className="relative w-full h-screen top-0 overflow-hidden bg-gradient-to-l from-tranparent to-black">
        <Image
          src="/table_background.png"
          alt="Table Image"
          fill
          style={{ objectFit: "cover" }}
        />

        <div className="relative flex flex-col items-center justify-center h-full mt-7">
          <div className="relative w-full flex justify-center items-center mt-14">
            <h1 className="text-red-900 text-4xl left-0 font-bold mb-6 ">
              Dealer
            </h1>
            <Image
              alt="Shuffled Deck"
              src="/cards/card-back2.png"
              width={80}
              height={120}
              className="absolute cards-shuffled right-0 mr-40 object-contain"
            />
          </div>

          <DealerCards
            isDealt={isDealt}
            dealerHand={dealerHand}
            dealerScore={dealerScore}
            standGame={standGame}
          />
          {isGameOver && (
            <h1 className="text-yellow text-4xl font-bold">{gameResult}</h1>
          )}
          <h1 className="text-white text-4xl font-bold mb-4 mt-4">You</h1>

          <PlayerCards
            isDealt={isDealt}
            playerHand={playerHand}
            playerScore={playerScore}
          />

          <GameControls
            startGame={startGame}
            hitWithCard={hitWithCard}
            stand={stand}
            playButtonText={playButtonText}
          />
        </div>
      </main>
      <GameRules />
    </div>
  );
}
