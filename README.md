## Create BlackJack App using NextJs - Tailwind CSS

# Game Model 

1. Create a single deck of playing cards
2. Two players (called Player and the Dealer) who will play against each other
3. Each player is given three cards from the top of a shuffled deck of cards

# Rules :

1. Determine score of a hand.
2. Check if either player has blackjack (21) with their initial hand and wins the game
3. If neither player has blackjack then Sam can start drawing cards from the top of the deck
4. Player should stop drawing cards from the deck if their total reaches 17 or higher
5. Player has lost the game if their total is higher than 21
6. When Player has stopped drawing cards the Dealer can start drawing cards from the top of the deck
7. The Dealer should stop drawing cards when their total is higher than Player.
8. The Dealer has lost the game if their total is higher than 21
9. Determine which player wins the game

# Getting Started
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First, run the development server:

```bash
npm run dev

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

