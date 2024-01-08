"use client"
import { SectionHeader } from "@/components";
import { getRegisteredTeams } from "@/utils/functions/getRegisteredTeams";
import React, { useEffect, useState } from "react";

const AdminDashboard = () => {
  const [promiseresults, setPromiseResults] = useState<[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getRegisteredTeams();
        console.log(data)
        setPromiseResults(data)
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [])
  return (
    <div className="flex flex-col pt-20">
      <SectionHeader text="Admin Dashboard" />
      <div className="overflow-x-auto px-3">
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">Sl. No.</th>
            <th className="px-4 py-2 text-left">Gender</th>
            <th className="px-4 py-2 text-left">Event Name</th>
            <th className="px-4 py-2 text-left">College</th>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Team Lead Phone</th>
            <th className="px-4 py-2 text-left">TransactionId</th>
          </tr>
        </thead>
        <tbody>{
          promiseresults?.map((e:any, index) => {
            return (
            <tr key={index} className="">
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">{e.gender}</td>
              <td className="border px-4 py-2">{e.event_name}</td>
              <td className="border px-4 py-2">{e.college}</td>
              <td className="border px-4 py-2">{e.name}</td>
              <td className="border px-4 py-2">{e.team_lead_phone}</td>
              <td className="border px-4 py-2">{e.transaction_id}</td>
            </tr>)
          }
          )
        }
        </tbody>


      </table>
      </div>

    </div>


  );
}

export default AdminDashboard;