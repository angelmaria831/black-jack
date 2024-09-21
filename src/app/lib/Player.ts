import { CardType } from "./Card";

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

    totalScore() {

        let total: number  = 0;
        let containsAce: boolean = false;

        for (const { rank } of this.hand) {

            if(rank === 'A') {
                total += 11;
                containsAce = true;
            } else if(['J', 'Q', 'K'].includes(rank)) {
                total += 10;
            } else {
                total += parseInt(rank);
            }
        }

        if(containsAce && total > 21) total -= 10;

        return total;

    }


}


export default Player;
export type {Player as PlayerType};