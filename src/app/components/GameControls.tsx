
type GameControlsProps = {
    startGame: () => void;
    hitWithCard: () => void;
    stand: () => void;
    playButtonText: string;
}


export default function GameControls({startGame, hitWithCard, stand, playButtonText}: GameControlsProps){
    return (
        <div className="relative w-full flex justify-center mb-8">
        <button type="button"
            className="inset-y-0 px-5 py-3 m-8 bg-red-900 text-white rounded hover:scale-110"
            onClick={startGame}> { playButtonText }</button>
        <button type="button" className="inset-y-0 px-6 py-3 m-8 bg-red-900 text-white rounded hover:scale-110"
            onClick={hitWithCard}> HIT</button>
        <button type="button" className="inset-y-0 px-5 py-3 m-8 bg-red-900 text-white rounded hover:scale-110" 
        onClick={stand}>STAND</button>
    </div>
    )
}