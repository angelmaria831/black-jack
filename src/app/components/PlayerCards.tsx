import Image from 'next/image';
import { Card } from '../types/Card';

type PlayerCardsProps = {
    isDealt: boolean;
    playerHand: Card[];
    playerScore: number;
}


export default function PlayerCards ({isDealt, playerHand, playerScore}: PlayerCardsProps){

    return (
        <div className="relative flex items-center mb-4 ">
        <div id="player-cards" className="relative flex justify-center items-center mb-6 border-4 border-grey rounded-md" 
        style={{ height: '140px', width: '250px' }}>
            
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
    )
}
