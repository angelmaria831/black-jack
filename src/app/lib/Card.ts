const suits: Set<string> = new Set(['Hearts', 'Diamonds', 'Clubs', 'Spades']);
const ranks: Set<string> = new Set(['A','2','3','4','5','6','7','8','9','10','J','Q','K']);
const cardBackImagePath: string = '/cards/card-back2.png';
const mapRankValues: Map<string, number> = new Map([['A',11], ['J', 10], ['Q', 10], ['K', 10]])

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
    return `/cards/${card.suit.toLowerCase()}_${card.rank.toLowerCase()}.png`;
}

export {
    Card,
    suitsArray as suits,
    ranksArray as ranks,
    mapRankValues,
    getCardImagePath,
    cardBackImagePath
 };

 export type { CardType };
