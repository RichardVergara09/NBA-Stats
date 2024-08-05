export default function Match({ match, onSelect, isSelected }) {
    return (
      <div className={`cursor-pointer match mb-4 rounded-md w-full max-w-lg mx-auto ${isSelected? 'bg-green-800' : ''} flex flex-col items-center justify-center `}>
        <h3 className="text-xl mb-2" onClick={() => onSelect(match.date)}>Date: {match.date}</h3>
        <p 
          className={`cursor-pointer ${isSelected? 'text-yellow-500' : ''}`} onClick={() => onSelect(match.home_team)}>
          Home Team: {match.home_team} - {match.home_team_score}
        </p>
        <p 
          className={`cursor-pointer ${isSelected? 'text-blue-500' : ''}`} 
          onClick={() => onSelect(match.away_team)}
        >
          Away Team: {match.away_team} - {match.away_team_score}
        </p>
        <p 
          className={`cursor-pointer ${isSelected? 'text-red-500' : ''}`} 
          onClick={() => onSelect(match.away_team)}
        >
            Location: {match.location}
        </p>
      </div>
    );
  }