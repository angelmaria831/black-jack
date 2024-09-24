import { CardType, mapRankValues } from "./Card";

class Player {

    name: string;
    hand: CardType[];

    constructor(name: string) {
        this.name = name;
        this.hand = [];
    }

    receiveCards(cards: CardType[]) {

        if(cards.length === 0) throw new Error("No cards were received");
        
        this.hand = [...this.hand, ...cards];
        return this.hand;
    }

    totalScore(isDealerCardHidden: boolean = false) {

        let total: number  = 0;
        let containsAce: boolean = false;
        let firstCard: boolean = true;

        for (const { rank } of this.hand) {

            if(isDealerCardHidden && firstCard){
                firstCard = false;
                continue;
            }

            if(rank === 'A' && mapRankValues.has(rank)) {
                total += mapRankValues.get(rank)!;
                containsAce = true;
            } else if(mapRankValues.has(rank)) {
                total += mapRankValues.get(rank)!;
            } else {
                total += parseInt(rank);
            }

            firstCard = false;
        }

        if(containsAce && total > 21) total -= 10;

        return total;

    }


}


export default Player;
export type {Player as PlayerType};