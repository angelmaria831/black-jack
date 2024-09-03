import Deck from '@/app/lib/Deck'
import CardLogic from '@/app/lib/Card'

const {Card} = CardLogic

describe( 'Deck', () => {

    let deck : Deck;

    beforeEach(() => {

        deck = new Deck();
    })

    it('should be defined', () => {
        expect(deck.cards).toBeDefined()
    })

    it('card in deck should be an instance of Card', () => {
        const deck = new Deck()
        expect(deck.cards[0]).toBeInstanceOf(Card)
        expect(deck.cards.length).toBe(52)
    })

    it('should rearrange cards in deck when shuffled', () => {
        //Create shallow copy of deck.cards array.
        const originalOrder = [...deck.cards];
        deck.shuffleDeck();

        const shuffledOrder = deck.cards;

        expect(shuffledOrder).not.toEqual(originalOrder)
        expect(shuffledOrder.length).toBe(52)

    })
})