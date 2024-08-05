"use client";

import { useState, useEffect } from "react";
import Match from './match-list';
import matchData from './match.json';

export default function MatchList() {
  const [matches, setMatches] = useState(matchData);
  const [selectedTeam, setSelectedTeam] = useState(null);

  useEffect(() => {
    fetch('/app/matches/match.json')
    .then(response => response.json())
    .then(data => setMatches(data));
  }, []);

  const handleSelect = (team) => {
    setSelectedTeam(team);
  };

  return (
    <div className="match-list">
      <h1 className="text-3xl mb-8 mt-8 text-red-500 flex flex-col items-center justify-center text-2xl">Match Results</h1>
      <ul>
        {matches.map((match) => (
          <Match 
            key={match.match_id} 
            match={match} 
            onSelect={handleSelect} 
            isSelected={selectedTeam === match.home_team || selectedTeam === match.away_team} 
          />
        ))}
      </ul>
    </div>
  );
}