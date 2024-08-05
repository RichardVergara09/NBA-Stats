"use client";

import { useState, useEffect } from "react";
import Player from './player-list';
import playerData from './players.json';

export default function PlayerList() {
  const [players, setPlayers] = useState(playerData);
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  useEffect(() => {
    fetch('/app/players/player.json')
    .then(response => response.json())
    .then(data => setPlayers(data));
  }, []);

  const handleSelect = (player) => {
    setSelectedPlayer(player);
  };

  return (
    <div className="player-list">
      <h1 className="text-3xl mb-4 mt-8 flex flex-col items-center justify-center">Player Statistics</h1>
      <h2 className="text-xl mb-8 mt-4 flex flex-col items-center justify-center">In this page, it shows the NBA players with the best stats in 2023-2024 season!</h2>
      <ul>
        {players.map((player) => (
          <Player 
            key={player.player_id} 
            player={player} 
            onSelect={handleSelect} 
            isSelected={selectedPlayer === player.name} 
          />
        ))}
      </ul>
    </div>
  );
}
