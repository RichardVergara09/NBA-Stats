"use client";

import { useState, useEffect } from "react";
import Schedule from './schedule-list';
import scheduleData from './schedule.json';

export default function ScheduleList() {
  const [schedules, setSchedules] = useState(scheduleData);
  const [selectedTeam, setSelectedTeam] = useState(null);

  useEffect(() => {
    fetch('/app/schedule/schedule.json')
    .then(response => response.json())
    .then(data => setSchedules(data));
  }, []);

  const handleSelect = (team) => {
    setSelectedTeam(team);
  };

  return (
    <div className="schedule-list">
      <h1 className="text-3xl mb-8 mt-8 text-red-500 flex flex-col items-center justify-center text-2xl">Team Schedules</h1>
      <ul>
        {schedules.map((team) => (
          <div key={team.team_id}>
            <h1 className=" cursor-pointer text-3xl mb-4 flex flex-col items-center justify-center bg-grey-500">{team.name}</h1>
            {team.schedule.map((game, index) => (
              <Schedule 
                key={index} 
                game={game} 
                onSelect={handleSelect} 
                isSelected={selectedTeam === team.name} 
              />
            ))}
          </div>
        ))}
      </ul>
    </div>
  );
}
