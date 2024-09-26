
import { CardType, Card, suits, ranks } from './Card';

class  Deck {

    cards: CardType[]

    constructor(){
        this.cards = suits.flatMap(suit => ranks.map(rank => new Card(suit, rank)));
    }

    shuffleDeck() {

        //Fisher-Yates Shuffle Algorithm
        for(let i = this.cards.length - 1; i > 0; i--){
            const newIndex = Math.floor(Math.random() * (i+1));
            const newIndexValue = this.cards[newIndex];
            this.cards[newIndex] = this.cards[i];
            this.cards[i] = newIndexValue;
        }

        return this;
    }  

    draw(count: number): CardType[] | any{

        if(count !== 1 && count !== 2) throw new Error("Invalid Count to Draw");

        if(this.cards.length < count) throw new Error("No Card to draw");

        return Array.from({length : count}, () => this.cards.pop());
    }
}

export default Deck;
export type { Deck as DeckType};