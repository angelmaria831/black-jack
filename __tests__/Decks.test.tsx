import Deck from '@/app/lib/Deck'
import { Card } from '@/app/lib/Card'

describe( 'Deck', () => {

    let deck : Deck;

    beforeEach(() => {

        deck = new Deck();
    })

    it('should be defined', () => {
        expect(deck.cards).toBeDefined();
    })

    it('card in deck should be an instance of Card', () => {
        expect(deck.cards[0]).toBeInstanceOf(Card);
        expect(deck.cards.length).toBe(52);
    })

    it('should rearrange cards in deck when shuffled', () => {
        //Create shallow copy of deck.cards array.
        const originalOrder = [...deck.cards];
        deck.shuffleDeck();

        const shuffledOrder = deck.cards;

        expect(shuffledOrder).not.toEqual(originalOrder);
        expect(shuffledOrder.length).toBe(52);
    })

    it('should be able to draw one card from deck', () => {
        const drawnOneCard = deck.draw(1);
        expect(drawnOneCard.length).toBe(1);
        expect(deck.cards.length).toBe(51);
        expect(drawnOneCard[0]).toBeInstanceOf(Card);
    })

    it('should be able to draw two cards from deck', () => {
        const drawnTwoCards = deck.draw(2);
        expect(drawnTwoCards.length).toBe(2);
        expect(deck.cards.length).toBe(50);

        expect(drawnTwoCards[0]).toBeInstanceOf(Card);
        expect(drawnTwoCards[1]).toBeInstanceOf(Card);
    })

    it('should throw error if draws card besides one or two',() => {
        
        expect(() => {
            const drawnZeroCards = deck.draw(0);
        }).toThrow("Invalid Count to Draw");

        expect(() => {
            const drawnThreeCards = deck.draw(3);
        }).toThrow("Invalid Count to Draw");

        expect(() => {
            const drawnNegativeCards = deck.draw(-1);
        }).toThrow("Invalid Count to Draw");

        expect(() => {
            const drawnFiveCards = deck.draw(5);
        }).toThrow("Invalid Count to Draw")
        
    })
})