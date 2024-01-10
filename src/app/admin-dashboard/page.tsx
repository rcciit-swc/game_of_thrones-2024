"use client";
import { SectionHeader } from "@/components";
import { getRegisteredTeams } from "@/utils/functions/getRegisteredTeams";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import VerificationModal from "./_components/VerificationModal";
import { getEventType } from "@/utils/functions/getEventType";
import { toast } from "sonner";

const AdminDashboard = () => {
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  const [promiseresults, setPromiseResults] = useState<[]>([]);
  const [filteredResults, setFilteredResults] = useState<[]>([]);

  const [modalData, setModalData] = useState<any>({});

  const [showModal, setShowModal] = useState(false);

  const [phone, setPhone] = useState("");

  const [transaction_id, setTransaction_id] = useState("");

  const handleSort = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  useEffect(() => {
    // Sort the results based on transaction_verified
    const sortedResults: any = filteredResults
      .slice()
      .sort((a: any, b: any) => {
        if (sortOrder === "asc") {
          return a.transaction_verified - b.transaction_verified;
        } else {
          return b.transaction_verified - a.transaction_verified;
        }
      });

    setFilteredResults(sortedResults);
  }, [sortOrder, filteredResults]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getRegisteredTeams();
        setFilteredResults(data);
        setPromiseResults(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!phone && !transaction_id) {
      setFilteredResults(promiseresults);
      return;
    }
    const filteredData: any = promiseresults.filter((item: any) => {
      if (phone && item.team_lead_phone.includes(phone)) {
        return true;
      }
      if (transaction_id && item.transaction_id.includes(transaction_id)) {
        return true;
      }
      return false;
    });

    setFilteredResults(filteredData);
  }, [phone, transaction_id, promiseresults]);

  return (
    <>
      <div className="flex flex-col pt-20">
        <SectionHeader text="Admin Dashboard" />
        <div className="mb-4 flex flex-row items-center justify-between px-3">
          <div className="flex w-full items-center justify-end gap-5">
            <label className="text-sm font-medium ">
              Phone Number
              <input
                type="text"
                className="focus mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-black
            shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                onChange={(e) => setPhone(e.target.value)}
              />
            </label>
            <label className="text-sm font-medium">
              Transaction Id
              <input
                type="text"
                className="focus mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-black
              shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                onChange={(e) => setTransaction_id(e.target.value)}
              />
            </label>
          </div>
        </div>
        <div className="overflow-x-auto px-3">
          <table className="w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left">Sl. No.</th>
                <th className="px-4 py-2 text-left" onClick={handleSort}>
                  Payment Status
                  {sortOrder === "asc" ? (
                    <span className="ml-1">▲</span>
                  ) : (
                    <span className="ml-1">▼</span>
                  )}
                </th>
                <th className="px-4 py-2 text-left">Event Name</th>
                <th className="px-4 py-2 text-left">Type</th>
                <th className="px-4 py-2 text-left">College</th>
                <th className="px-4 py-2 text-left">Team Name</th>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Team Lead Phone</th>
                <th className="px-4 py-2 text-left">Transaction Id</th>
              </tr>
            </thead>
            <tbody>
              {filteredResults?.map((e: any, index) => {
                return (
                  <tr
                    key={index}
                    className={`
                    ${
                      e.transaction_verified
                        ? "bg-green-100 text-green-500"
                        : "cursor-pointer bg-red-100 text-red-500 hover:bg-red-200 hover:text-red-600"
                    }
                    `}
                    onClick={() => {
                      if (!e.transaction_verified) {
                        setModalData(e);
                        setShowModal(true);
                      }
                    }}
                  >
                    <td className="border border-gray-300 px-4 py-2">
                      {index + 1}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 capitalize ">
                      {e.transaction_verified ? (
                        <span className="text-green-500">Verified
                        <Image
                          src="https://img.icons8.com/fluency/48/checked-2.png"
                          alt="warning"
                          width={20}
                          height={20}
                          className="inline-block"
                        />
                        </span>
                      ) : (
                        <span className="text-red-500">
                          Not Verified
                          <Image
                            src="https://img.icons8.com/emoji/48/cross-mark-button-emoji.png"
                            alt="warning"
                            width={20}
                            height={20}
                            className="inline-block"
                          />
                        </span>
                      )}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {e.event_name}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 capitalize">
                      {getEventType(e.event_id, e.is_team)}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {e.college}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {e.team_name}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {e.name}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {e.team_lead_phone}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {e.transaction_id}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      {showModal && modalData && (
        <VerificationModal
          modalData={modalData}
          showModal={showModal}
          setShowModal={() => {
            setShowModal(false);
            setModalData({});
          }}
          setReigstrations={(data: any) => {
            setFilteredResults(data);
            setPromiseResults(data);
          }}
        />
      )}
    </>
  );
};

export default AdminDashboard;
