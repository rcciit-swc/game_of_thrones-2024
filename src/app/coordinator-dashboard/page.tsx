"use client";
import { SectionHeader } from "@/components";
import { getRegisteredTeams } from "@/utils/functions/getRegisteredTeams";
import React, { useEffect, useState } from "react";
import Table from "./_components/Table";
import { supabase, useUser } from "@/lib";
import {adminHeaders, events } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { CSVLink } from "react-csv";
import { dateTime } from "@/utils/functions/dateTime";


const CoordinatorDashboard = () => {
  const user = useUser((state) => state.user);

  const [coordinatingEvents, setCoordinatingEvents] = useState<any[]>();

  const [registrationData, setRegistrationData] = useState<any[]>([]);

  useEffect(() => {
    const getCoordinatingEvents = async () => {
      const userRoles = await supabase
        .from("roles")
        .select()
        .eq("id", user?.id!);

      if (userRoles.data?.[0].role === "super_admin") {
        const data = await getRegisteredTeams();
        console.log(data);
        setRegistrationData(data);
        setCoordinatingEvents(events);
      } else if (userRoles.data?.[0].role === "event_coordinator") {
        const coordinatingEventIds = userRoles.data.map(
          (role) => role.event_id,
        );
        const coordinatingEvents = events.filter((event) =>
          coordinatingEventIds.includes(event.id),
        );
        setCoordinatingEvents(coordinatingEvents);
      }
    };

    getCoordinatingEvents();
  }, [user]);

  return (
    <div className="flex flex-col pt-20">
      <SectionHeader text="Coordinator Dashboard" />
      <CSVLink  
          data={registrationData}
          headers={adminHeaders}
          filename={`registrations-${dateTime()}.csv`}
          className="w-fit rounded-md bg-blue-500 px-4 py-2 text-white shadow-md hover:bg-blue-600 ml-5 mb-10"
        >
          Download CSV
        </CSVLink>
      <div
      className="flex flex-row flex-wrap items-center justify-center gap-20"
      >
        {coordinatingEvents?.map((value: any, index: number) => (
          <Link href={`/coordinator-dashboard/${value.id}`}
            key={index}
          >
          <div
            className="card relative w-[300px] cursor-pointer overflow-hidden rounded-md transition-all duration-500
          ease-in-out hover:scale-110 md:h-[250px] md:w-[350px]
          "
          >
            <Image
              src={value.hoverImage}
              alt="football"
              className="h-full w-full object-cover"
              width={0}
              height={0}
            />
            <div className="card-body absolute bottom-[-100%] flex h-full w-full flex-col items-center justify-center bg-[#1f3d4738] px-3 backdrop-blur-[5px] duration-500">
              <h1 className="pt-2 text-center font-got font-semibold md:text-2xl">
                {value.title}
              </h1>
            </div>
          </div>
        </Link>
        ))}
      </div>
    </div>
  );
};

export default CoordinatorDashboard;
