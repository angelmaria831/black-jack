import Deck from '@/app/lib/Deck'
import CardLogic from '@/app/lib/Card'

const {Card} = CardLogic

describe( 'Deck', () => {

    it('should be defined', () => {
        const deck = new Deck()
        expect(deck.cards).toBeDefined()
    });

    it('card in deck should be an instance of Card', () => {
        const deck = new Deck()
        expect(deck.cards[0]).toBeInstanceOf(Card)
        expect(deck.cards.length).toBe(52)
    })
})