export default function Schedule({ game, onSelect, isSelected }) {
  return (
    <div className={`cursor-pointer game mb-4 rounded-md w-full max-w-lg mx-auto ${isSelected ? 'bg-green-800' : ''} flex flex-col items-center justify-center`}>
      <h3 className="text-xl mb-2" onClick={() => onSelect(game.date)}>Date: {game.date}</h3>
      <p className={`mb-2 cursor-pointer ${isSelected ? 'text-teal-500' : ''}`} onClick={() => onSelect(game.opponent)}>Opponent: {game.opponent}</p>
      <p className={`cursor-pointer ${isSelected ? 'text-red-500' : ''}`} onClick={() => onSelect(game.location)}>Location: {game.location}</p>
    </div>
  );
}
