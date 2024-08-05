"use client";

import { useState, useEffect } from "react";
import Team from './team-list';
import teamData from './teams.json';

export default function TeamList() {
  const [teams, setTeams] = useState(teamData);
  const [selectedTeam, setSelectedTeam] = useState(null);

  useEffect(() => {
    fetch('/teams/teams.json')
      .then(response => response.json())
      .then(data => setTeams(data))
      .catch(error => console.error('Error fetching team data:', error));
  }, []);

  const handleSelect = (team) => {
    setSelectedTeam(team);
  };

  return (
    <div className="team-list">
      <h1 className="text-3xl mb-8 mt-8 text-red-500 flex flex-col items-center justify-center text-2xl">Teams</h1>
      <ul>
        {teams.map((team) => (
          <Team 
            key={team.team_id} 
            team={team} 
            onSelect={handleSelect} 
            isSelected={selectedTeam === team.name || selectedTeam === team.city} 
          />
        ))}
      </ul>
    </div>
  );
}
