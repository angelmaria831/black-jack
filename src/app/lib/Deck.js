import CardLogic from './Card'

const {suits, ranks, Card} = CardLogic

class Deck {
    constructor(){
        this.cards = suits.flatMap(suit => ranks.map(rank => new Card(suit, rank)))
    }
}

export default Deck