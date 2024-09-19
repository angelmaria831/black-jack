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

    showCards(name: string) {

        name = name.toLowerCase();
  
        if(name === 'dealer')
            return this.dealer.hand;
        else if(name === this.player.name)
            return this.player.hand;
        else throw new Error("Invalid player name");
    } 
}

export default Game;