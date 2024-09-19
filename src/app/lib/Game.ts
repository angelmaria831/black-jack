import Deck, { DeckType } from "./Deck";
import Player, { PlayerType } from "./Player";

class Game {

    player: PlayerType;
    dealer: PlayerType;
    deck: DeckType | null;

    constructor(playerName: string) {
        this.player = new Player(playerName);
        this.dealer = new Player("Dealer");
        this.deck = null;
    }


    startGame() {

        this.deck = new Deck(); 
        this.deck.shuffleDeck();
        
        this.player.receiveCards(this.deck.draw(2));
        this.dealer.receiveCards(this.deck.draw(2));

    }

    showCards(name: string) {
  
        if(name.toLowerCase() === 'dealer')
            return this.dealer.hand
        else 
            return this.player.hand;
    } 
}

export default Game;