import Image from "next/image";
import { Card } from "../types/Card";

type DealerCardsProps = {
  dealerHand: Card[];
  standGame: boolean;
  isDealt: boolean;
  dealerScore: number;
};

export default function DealerCards({
  isDealt,
  dealerHand,
  dealerScore,
  standGame,
}: DealerCardsProps) {
  return (
    <div className="relative flex items-center mb-4 ">
      {isDealt && (
        <div
          id="tooltip-dealer"
          className="absolute left-[-115px] w-24 rounded bg-red-900 p-2 text-xs text-white">
          {" "}
          POINTS : {dealerScore}
        </div>
      )}
      <div
        id="dealer-cards"
        className="relative flex w-64 justify-center items-center mb-4 border-4 border-grey rounded-md"
        style={{ height: "140px", width: "250px" }}>
        {isDealt &&
          dealerHand.map((cardObj, index) => (
            <div
              key={index}
              id="card-border"
              className="absolute w-[90px] h-[113px]"
              style={{
                top: `${index * 0}px`,
                left: `${index * 30}px`,
              }} >
              {index === 0 && standGame ? (
                <Image
                  alt={`dealer-card-${index}`}
                  src={cardObj.card}
                  width={80}
                  height={113}
                  className="object-cover dealer-animate cards mt-2"
                />
              ) : cardObj.flipped ? (
                <Image
                  alt={`dealer-card-${index}`}
                  src={cardObj.card}
                  width={80}
                  height={113}
                  className="object-cover dealer-animate cards mt-2"
                />
              ) : (
                <Image
                  alt="back-side-card"
                  src="/cards/card-back2.png"
                  width={80}
                  height={113}
                  className="object-cover dealer-animate flip-card cards mt-2"
                />
              )}
            </div>
          ))}
      </div>
    </div>
  );
}
