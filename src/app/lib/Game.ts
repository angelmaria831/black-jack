import Deck, { DeckType } from "./Deck";
import Player, { PlayerType } from "./Player";
import { getCardImagePath, cardBackImagePath } from "./Card";

class Game {

    player: PlayerType;
    dealer: PlayerType;
    deck: DeckType;
    isDealerCardHidden: boolean;

    constructor(playerName: string) {
        this.player = new Player(playerName.toLowerCase());
        this.dealer = new Player("dealer");
        this.deck = new Deck();
        this.isDealerCardHidden = true;
    }


    startGame() {

        this.deck.shuffleDeck();
        
        this.player.receiveCards(this.deck.draw(2));
        this.dealer.receiveCards(this.deck.draw(2));

    }

    showCardsImage() {
        return {
            dealerCards: this.dealer.hand.map((card, index) => (this.isDealerCardHidden && index === 0) ? 
            {'card': cardBackImagePath, 'flipped':true } : 
            {'card': getCardImagePath(card), 'flipped': false}),

            playerCards: this.player.hand.map((card) => ({'card': getCardImagePath(card), 'flipped': false}))
        }
    } 

    getTotalScoreAndStatus() {

        const scores = {
            dealerScore: this.dealer.totalScore(this.isDealerCardHidden),
            playerScore: this.player.totalScore(),
            isGameOver: false,
            isPlayerWinner: false
        }

        if(scores.playerScore === 21 || scores.dealerScore > 21){
            scores.isGameOver = true;
            scores.isPlayerWinner = true;
        }else if(scores.dealerScore === 21 || scores.playerScore > 21){
            scores.isGameOver = true;
        }
        return scores;
    }

    hitWithCard() {
        
        const card = this.deck.draw(1)
        this.player.receiveCards(card);
        return {'card': getCardImagePath(card[0]), flipped: false}
    }

    stand() {
        this.isDealerCardHidden = false;

        return {
            'hiddenCard': {'card': getCardImagePath(this.dealer.hand[0]),
                flipped: true
            }
        }
    }
}

export default Game;