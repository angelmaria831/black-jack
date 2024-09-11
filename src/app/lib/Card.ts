const suits: Set<string> = new Set(['Hearts', 'Diamonds', 'Clubs', 'Spades']);
const ranks: Set<string> = new Set(['A','2','3','4','5','6','7','8','9','10','J','Q','K']);

class Card{
    readonly suit : string;
    readonly rank : string;

    constructor(suit : string, rank : string){
        if(!suits.has(suit) || !ranks.has(rank))
            throw new Error('Invalid suit or rank');
        this.suit = suit;
        this.rank = rank;
    }

}

const suitsArray: string[] = Array.from(suits);
const ranksArray: string[] = Array.from(ranks);
type CardType = Card;

const getCardImagePath = (card: CardType): string =>{
    return `/${card.suit.toLowerCase()}_${card.rank.toLowerCase()}.png`;
}

export {
    Card,
    suitsArray as suits,
    ranksArray as ranks,
    getCardImagePath
 };

 export type { CardType };
