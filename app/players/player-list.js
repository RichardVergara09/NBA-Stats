export default function Player({ player, onSelect, isSelected }) {
  return (
    <div className={`cursor-pointer player mb-4 ${isSelected ? 'bg-green-800' : ''} flex flex-col items-center justify-center `}>
      <h3 className="text-xl mb-2" onClick={() => onSelect(player.name)}>Name: {player.name}</h3>
      <p className={`cursor-pointer ${isSelected ? 'text-yellow-500' : ''}`} onClick={() => onSelect(player.team)}>Team: {player.team}</p>
      <p className={`cursor-pointer ${isSelected ? 'text-blue-500' : ''}`}>Games Played: {player.games_played}</p>
      <p className={`cursor-pointer ${isSelected ? 'text-red-500' : ''}`}>Points Per Game: {player.points_per_game}</p>
      <p className={`cursor-pointer ${isSelected ? 'text-red-500' : ''}`}>Rebounds Per Game: {player.rebounds_per_game}</p>
      <p className={`cursor-pointer ${isSelected ? 'text-red-500' : ''}`}>Assists Per Game: {player.assists_per_game}</p>
      <p className={`cursor-pointer ${isSelected ? 'text-red-500' : ''}`}>Steals Per Game: {player.steals_per_game}</p>
      <p className={`cursor-pointer ${isSelected ? 'text-red-500' : ''}`}>Blocks Per Game: {player.blocks_per_game}</p>
    </div>
  );
}
