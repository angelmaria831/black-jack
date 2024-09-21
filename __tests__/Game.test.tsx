import Game from "@/app/lib/Game";
import Player from "@/app/lib/Player";
import Deck from "@/app/lib/Deck";

let game: Game;

beforeEach(() => {
    game = new Game("Sam");
});

describe('Game', () => {

    it('should initialize game with player and dealer as instance of Player class', () => {
        expect(game.player).toBeInstanceOf(Player);
        expect(game.dealer).toBeInstanceOf(Player);
    });

    it('should initialize game with null deck', () => {
        expect(game.deck).toBe(null);
    });

    it('should get the player name from the argument and dealer name as "dealer" in lowercase', () => {
        expect(game.dealer.name).toBe('dealer');
        expect(game.player.name).toBe('sam');
    });

});

describe('Deck and Cards', () => {

    it('should initialize deck and draw 2 cards for player/dealer when game starts', () => {
        game.startGame();

        expect(game.deck).toBeInstanceOf(Deck);
        expect(game.player.hand.length).toBe(2);
        expect(game.dealer.hand.length).toBe(2);

    });

    it('should show the cards of dealer and player', () => {
        game.startGame();
        const cards = game.showCards();

        expect(cards.dealerCards.length).toBe(2);
        expect(cards.playerCards.length).toBe(2);
    });
});



