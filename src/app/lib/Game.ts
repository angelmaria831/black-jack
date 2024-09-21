import Deck, { DeckType } from "./Deck";
import Player, { PlayerType } from "./Player";
import { getCardImagePath } from "./Card";

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

    showCardsImage() {

        return {
            dealerCards: this.dealer.hand.map(card => getCardImagePath(card)),
            playerCards: this.player.hand.map(card => getCardImagePath(card))
        }
    } 
}

export default Game;