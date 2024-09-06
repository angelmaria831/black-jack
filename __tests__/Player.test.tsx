import Player from "@/app/lib/Player";
import Deck from "@/app/lib/Deck";
import { Card } from "@/app/lib/Card";

describe('Player', () => {

    let player: Player;
    let deck: Deck;

    beforeEach(() => {
        player = new Player('John');
        deck = new Deck();
    })

    it('should initialize Player with name and empty hand', () => {

        expect(player.name).toBe('John');
        expect(player.hand).toEqual([]);
    })

    it('should receive two cards in hand', () => {

        const drawnTwoCards = [new Card('8', 'Diamonds'), new Card('3', 'Spades')];
        const receivedCards = player.receiveCards(drawnTwoCards);

        expect(receivedCards).toEqual(drawnTwoCards); 
        expect(receivedCards.length).toBe(2);

        })

    it('should add one card to hand after receiving two cards', () => {

        const initialCards = [new Card('8', 'Diamonds'), new Card('3', 'Spades')];
        player.receiveCards(initialCards);

        const drawnOneCard = [new Card('3', 'Hearts')];
        const totalReceivedCards = player.receiveCards(drawnOneCard);

        expect(totalReceivedCards).toEqual([...initialCards, ...drawnOneCard]);
        expect(totalReceivedCards.length).toBe(3);


    })
})