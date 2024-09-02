import Card from '@/app/lib/Card'

// const {Card} = CardClass
describe('Card', () => {

    it('should create a card with suit and rank', () => {

        const card = new Card('Hearts', 'A')
        expect(card.suit).toBe('Hearts')
        expect(card.rank).toBe('A')
    })
})