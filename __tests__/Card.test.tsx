import { Card, suits, ranks } from '@/app/lib/Card'

describe('Card', () => {

    it('should create a card with suit and rank', () => {

        const card = new Card('Hearts', 'A')
        expect(card.suit).toBe('Hearts')
        expect(card.rank).toBe('A')
    })

    it('should create cards with all valid suits and ranks', () => {

        suits.forEach(suit => {
            ranks.forEach(rank => {
                const card = new Card(suit, rank);
                expect(card.suit).toBe(suit);
                expect(card.rank).toBe(rank);
            });
        });
    })
})