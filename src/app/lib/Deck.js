import CardLogic from './Card'

const {suits, ranks, Card} = CardLogic

class Deck {

    constructor(){
        this.cards = suits.flatMap(suit => ranks.map(rank => new Card(suit, rank)))
    }

    shuffleDeck() {

        for(let i = this.cards.length - 1; i > 0; i--){
            const newIndex = Math.floor(Math.random() * (i+1))
            const newIndexValue = this.cards[newIndex]
            this.cards[newIndex] = this.cards[i]
            this.cards[i] = newIndexValue
        }

        return this.cards
    }
}

export default Deck