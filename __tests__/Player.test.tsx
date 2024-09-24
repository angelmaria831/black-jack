import Player from "@/app/lib/Player";
import { Card } from "@/app/lib/Card";

describe('Player & Dealer', () => {

    let player: Player;
    let dealer: Player;

    beforeEach(() => {
        player = new Player('John');
        dealer = new Player('Dealer');
    })

    it('should initialize Player with name and empty hand', () => {

        expect(player.name).toBe('John');
        expect(player.hand).toEqual([]);
    })

    it('should receive two cards in hand', () => {

        const drawnTwoCards = [new Card('Diamonds', '8'), new Card('Spades', '3')];
        const receivedCards = player.receiveCards(drawnTwoCards);

        expect(receivedCards).toEqual(drawnTwoCards); 
        expect(receivedCards.length).toBe(2);

    })

    it('should add one card to hand after receiving two cards', () => {

        const initialCards = [new Card('Diamonds', '8'), new Card('Spades', '3')];
        player.receiveCards(initialCards);

        const drawnOneCard = [new Card('Hearts', '3')];
        const totalReceivedCards = player.receiveCards(drawnOneCard);

        expect(totalReceivedCards).toEqual([...initialCards, ...drawnOneCard]);
        expect(totalReceivedCards.length).toBe(3);
    })

    it('should throw error when receiving no cards', () => {

        expect(() => {
            player.receiveCards([]);
        }).toThrow('No cards were received');

    })

    it('should calculate total score based on card ranks', () => {

        const initialCards = [new Card('Diamonds', '8'), new Card('Spades', '10')];
        player.receiveCards(initialCards);

        const totalScore = player.totalScore();
        expect(totalScore).toBe(18);

    })

    it('should not consider rank value of first card for dealer if dealerCard is hidden', () => {
        const initialCards = [new Card('Diamonds', '8'), new Card('Spades', '10')];
        dealer.receiveCards(initialCards);

        const isDealerCardHidden = true;
        const totalScore = dealer.totalScore(isDealerCardHidden);
        expect(totalScore).toBe(10);
    })

    it('should calculate dealer score with all card"s rank if dealerCard is not hidden', () => {
        const initialCards = [new Card('Diamonds', '8'), new Card('Spades', '10')];
        dealer.receiveCards(initialCards);

        const isDealerCardHidden = false;
        const totalScore = dealer.totalScore(isDealerCardHidden);
        expect(totalScore).toBe(18);
    })

    it('should consider Ace card as 11 when totalScore is less than ir equal to 21', () => {

        const initialCards = [new Card('Diamonds', '2'), new Card('Spades', '4')];
        player.receiveCards(initialCards);

        const newCard = [new Card('Spades', 'A')]
        player.receiveCards(newCard);

        const totalScore = player.totalScore();
        expect(totalScore).toBe(17); //2 + 4 + 11

    })

    it('should consider Ace card as 1 when totalScore is greater than 21', () => {

        const initialCards = [new Card('Diamonds', '8'), new Card('Spades', '10')];
        player.receiveCards(initialCards);

        const newCard = [new Card('Spades', 'A')]
        player.receiveCards(newCard);

        const totalScore = player.totalScore();
        expect(totalScore).toBe(19); // 8 + 10 + 1

    })

    it('should count J, Q, K as 10 points each', () => {

        const initialCards = [new Card('Diamonds', 'J'), new Card('Spades', 'Q')];
        player.receiveCards(initialCards);
        const initialTotalScore = player.totalScore();

        expect(initialTotalScore).toBe(20); // J = 10, Q = 10

        player.receiveCards([new Card('Spades', 'K')]);
        const updatedTotalScore = player.totalScore();

        expect(updatedTotalScore).toBe(30); // J + Q + K = 30
    })

    it('should handle multiple Aces correctly', () => {

        const initialCards = [new Card('Spades', 'A'), new Card('Diamonds', 'A')];
        player.receiveCards(initialCards);

        const totalScore = player.totalScore();
        expect(totalScore).toBe(12); // One Ace counts as 11, and other as 1
    })
})