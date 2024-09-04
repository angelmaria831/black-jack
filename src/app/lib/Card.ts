class Card{
    suit : string;
    rank : string;

    constructor(suit : string, rank : string){
        this.suit = suit
        this.rank = rank
    }
}

const suits = ["Hearts", "Diamonds", "Clubs", "Spades"]
const ranks = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']

export {
    Card,
    suits,
    ranks}

export type CardType = Card;