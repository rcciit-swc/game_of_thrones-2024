import { events } from "@/utils";
import { useState } from "react";

interface TableProps {
  registrationData: any[];
}

const Table = ({ registrationData }: TableProps) => {

  const getEventType = (event_id: string, is_team: boolean) => {
    const event = events.find((event) => event.id === event_id);
    if (is_team) {
      return event?.teamType === "Team" ? "Team" : "Doubles";
    } else {
      return "Singles";
    }
  }

  return (
    <div className="overflow-x-auto px-3">
      <h1 className="text-2xl font-bold">Registrations</h1>
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">Event Name</th>
            <th className="px-4 py-2 text-left">Type</th>
            <th className="px-4 py-2 text-left">Team Name</th>
            <th className="px-4 py-2 text-left">College</th>
            <th className="px-4 py-2 text-left">Team Lead / Player</th>
            <th className="px-4 py-2 text-left">Team Lead Phone</th>
          </tr>
        </thead>
        <tbody>
          {registrationData?.map((row) => (
            <tr key={row.id}>
              <td className="border px-4 py-2">{row.event_name}</td>
              <td className="border px-4 py-2">{getEventType(row.event_id,row.is_team)}</td>
              <td className="border px-4 py-2">{row.team_name}</td>
              <td className="border px-4 py-2">{row.college}</td>
              <td className="border px-4 py-2">{row.name}</td>
              <td className="border px-4 py-2">{row.team_lead_phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
