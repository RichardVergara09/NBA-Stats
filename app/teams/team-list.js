export default function Team({ team, onSelect, isSelected }) {
  return (
    <div className={`cursor-pointer team mb-4 rounded-md w-full max-w-lg mx-auto ${isSelected ? 'bg-yellow-900' : ''} flex flex-col items-center justify-center`}>
      <h1 className="text-2xl mb-2" onClick={() => onSelect(team.name)}>Team: {team.name}</h1>
      <p className={`mb-2 cursor-pointer ${isSelected ? 'text-yellow-500' : ''}`} onClick={() => onSelect(team.city)}>
        City: {team.city}
      </p>
      <p className={`mb-2 cursor-pointer ${isSelected ? 'text-blue-500' : ''}`} onClick={() => onSelect(team.arena)}>Arena: {team.arena}</p>
      <p className={`mb-2 cursor-pointer ${isSelected ? 'text-red-500' : ''}`} onClick={() => onSelect(team.coach)}>Coach: {team.coach}</p>
      <p className={`mb-2 cursor-pointer ${isSelected ? 'text-teal-500' : ''}`} onClick={() => onSelect(team.championships_won)}>Championships Won: {team.championships_won}</p>
    </div>
  );
}
