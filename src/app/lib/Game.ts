import Deck, { DeckType } from "./Deck";
import Player, { PlayerType } from "./Player";

class Game {

    player: PlayerType;
    dealer: PlayerType;
    deck: DeckType | null;

    constructor(playerName: string) {
        this.player = new Player(playerName.toLowerCase());
        this.dealer = new Player("dealer");
        this.deck = null;
    }


    startGame() {

        this.deck = new Deck(); 
        this.deck.shuffleDeck();
        
        this.player.receiveCards(this.deck.draw(2));
        this.dealer.receiveCards(this.deck.draw(2));

    }

    showCards() {

        return {
            dealerCards: this.dealer.hand,
            playerCards: this.player.hand
        }
    } 
}

export default Game;