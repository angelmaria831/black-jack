import Deck, { DeckType } from "./Deck";
import Player, { PlayerType } from "./Player";
import { getCardImagePath, cardBackImagePath } from "./Card";

class Game {

    player: PlayerType;
    dealer: PlayerType;
    deck: DeckType | null;
    isDealerCardHidden: boolean;

    constructor(playerName: string) {
        this.player = new Player(playerName.toLowerCase());
        this.dealer = new Player("dealer");
        this.deck = null;
        this.isDealerCardHidden = true;
    }


    startGame() {

        this.deck = new Deck(); 
        this.deck.shuffleDeck();
        
        this.player.receiveCards(this.deck.draw(2));
        this.dealer.receiveCards(this.deck.draw(2));

    }

    showCardsImage() {
        return {
            dealerCards: this.dealer.hand.map((card, index) => (this.isDealerCardHidden && index === 0) ? cardBackImagePath : getCardImagePath(card)),
            playerCards: this.player.hand.map(card => getCardImagePath(card))
        }
    } 

    getTotalScore() {
        return {
            dealerScore: this.dealer.totalScore(this.isDealerCardHidden),
            playerScore: this.player.totalScore()
        }
    }
}

export default Game;