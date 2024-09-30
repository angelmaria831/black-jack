

export default function GameRules(){
    return (
        
        <section
        id="rules"
        className="relative z-20 bg-white text-red-800 py-20 px-4 flex flex-col items-center justify-between">
        <h2 className="text-3xl font-bold mb-6">Rules to Play</h2>
        <ul className="max-w-2xl text-lg leading-7 text-left list-none">
            <li className="mb-2">
                <span className="mr-2">♠️</span> The objective is to have a hand value closest to 21 without exceeding it.
            </li>
            <li className="mb-2">
                <span className="mr-2">♥️</span> Each player starts with two cards, and so does the dealer.
            </li>
            <li className="mb-2">
                <span className="mr-2">♣️</span> The dealer has one card face up and one card face down.
            </li>
            <li className="mb-2">
                <span className="mr-2">♦️</span> Cards 2 through 10 are worth their face value.
            </li>
            <li className="mb-2">
                <span className="mr-2">♠️</span> Face cards (Jack, Queen, King) are worth 10.
            </li>
            <li className="mb-2">
                <span className="mr-2">♥️</span> An Ace can be worth either 1 or 11, depending on the player's choice.
            </li>
            <li className="mb-2">
                <span className="mr-2">♣️</span> Players can choose to:
                <ul className="list-none ml-6">
                    <li className="mb-2">
                        <span className="mr-2">♦️</span> <strong>Hit</strong> - take another card.
                    </li>
                    <li className="mb-2">
                        <span className="mr-2">♠️</span> <strong>Stand</strong> - keep their current hand.
                    </li>
                </ul>
            </li>
            <li className="mb-2">
                <span className="mr-2">♥️</span> If a player's hand exceeds 21, they "bust" and lose the game.
            </li>
            <li className="mb-2">
                <span className="mr-2">♠️</span> If neither player nor dealer busts, the higher hand wins.
            </li>
        </ul>
    </section>
    )
}