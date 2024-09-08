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

    it('should throw error when card with invalid suits or ranks are defined', () => {

        expect(() => {
            new Card('A', 'Hearts');
        }).toThrow('Invalid suit or rank'); // 'A' is a rank, not a suit

        expect(() => {
            new Card('Diamonds', '12');
        }).toThrow('Invalid suit or rank'); // Invalid rank

        expect(() => {
            new Card('Club', '3');
        }).toThrow('Invalid suit or rank'); // Typo : 'Clubs'
    })

    it('should throw an error if suit or rank is missing', () => {

        expect(() => {
            new Card(undefined as any, 'A');
        }).toThrow('Invalid suit or rank');

        expect(() => {
            new Card('Spades', undefined as any);
        }).toThrow('Invalid suit or rank');
    })

    it('should throw an error if suit or rank is null', () => {

        expect(() => {
            new Card(null as any, 'A');
        }).toThrow('Invalid suit or rank');

        expect(() => {
            new Card('Spades', null as any);
        }).toThrow('Invalid suit or rank');

    })

})