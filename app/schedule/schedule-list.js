export default function Schedule({ game, onSelect, isSelected }) {
  return (
    <div className={`cursor-pointer game mb-4 ${isSelected ? 'bg-green-800' : ''} flex flex-col items-center justify-center `}>
      <h3 className="text-xl mb-2" onClick={() => onSelect(game.date)}>Date: {game.date}</h3>
      <p className={`cursor-pointer ${isSelected ? 'text-yellow-500' : ''}`} onClick={() => onSelect(game.opponent)}>Opponent: {game.opponent}</p>
      <p className={`cursor-pointer ${isSelected ? 'text-red-500' : ''}`}>Location: {game.location}</p>
    </div>
  );
}
