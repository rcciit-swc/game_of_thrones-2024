import { CSVLink } from "react-csv";

interface TableProps {
  registrationData: any[];
}

export const Headers = [
  {
    label: "Id",
    key: "team_id",
  },
  {
    label: "Team Name",
    key: "team_name",
  },
  {
    label: "Event Name",
    key: "event_name",
  },
  {
    label: "Team Type",
    key: "teamType",
  },
  {
    label: "Team Lead/Player Name",
    key: "name",
  },
  {
    label: "Team Lead/Player Phone",
    key: "team_lead_phone",
  },
  {
    label: "College",
    key: "college",
  },
];

const Table = ({ registrationData }: TableProps) => {

  let DateTime = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="overflow-x-auto px-3">
      <div className="mb-4 flex flex-row items-center justify-between px-3">
        <h1 className="text-2xl font-bold">Registrations</h1>
        <CSVLink
          data={registrationData}
          headers={Headers}
          filename={`registrations-${DateTime}.csv`}
          className="w-fit-content rounded-md bg-blue-500 px-4 py-2 text-white shadow-md hover:bg-blue-600"
        >
          Download CSV
        </CSVLink>
      </div>
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">Sl. No.</th>
            <th className="px-4 py-2 text-left">Type</th>
            <th className="px-4 py-2 text-left">Team Name</th>
            <th className="px-4 py-2 text-left">College</th>
            <th className="px-4 py-2 text-left">Team Lead / Player</th>
            <th className="px-4 py-2 text-left">Team Lead Phone</th>
          </tr>
        </thead>
        <tbody>
          {registrationData?.map((row, index) => (
            <tr key={row.id}>
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">{row.teamType}</td>
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
