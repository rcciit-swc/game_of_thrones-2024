import { Headers } from "@/utils";
import { dateTime } from "@/utils/functions/dateTime";
import { CSVLink } from "react-csv";

interface TableProps {
  registrationData: any[];
}

const Table = ({ registrationData }: TableProps) => {

  return (
    <>
      <div className="mb-4 flex flex-row items-center justify-between px-3">
        <h1 className="text-2xl font-bold">Registrations</h1>
        <CSVLink
          data={registrationData}
          headers={Headers}
          filename={`registrations-${dateTime()}.csv`}
          className="w-fit-content rounded-md bg-blue-500 px-4 py-2 text-white shadow-md hover:bg-blue-600"
        >
          Download CSV
        </CSVLink>
      </div>
      <div className="overflow-x-auto px-3">
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">Sl. No.</th>
              <th className="px-4 py-2 text-left">Event Name</th>
              <th className="px-4 py-2 text-left">Type</th>
              <th className="px-4 py-2 text-left">Gender</th>
              <th className="px-4 py-2 text-left">Team Name</th>
              <th className="px-4 py-2 text-left">College</th>
              <th className="px-4 py-2 text-left">Team Lead / Player</th>
              <th className="px-4 py-2 text-left">Team Lead Phone</th>
              <th className="px-4 py-2 text-left">Verification Status</th>
            </tr>
          </thead>
          <tbody>
            {registrationData?.map((row, index) => (
              <tr key={row.id}>
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">{row.event_name}</td>
                <td className="border px-4 py-2 capitalize">{row.teamType}</td>
                <td className="border px-4 py-2 capitalize">{row.gender}</td>
                <td className="border px-4 py-2">{row.team_name}</td>
                <td className="border px-4 py-2">{row.college}</td>
                <td className="border px-4 py-2">{row.name}</td>
                <td className="border px-4 py-2">
                  <a
                    href={`
                    tel:${row.team_lead_phone}
                  `}
                  className="text-blue-500 hover:text-blue-600"
                  >
                    {row.team_lead_phone}
                  </a>
                </td>
                <td className="border px-4 py-2 capitalize">
                  {row.transaction_verified ? (
                    <span className="text-green-500">Verified</span>
                  ) : (
                    <span className="text-red-500">Not Verified</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
