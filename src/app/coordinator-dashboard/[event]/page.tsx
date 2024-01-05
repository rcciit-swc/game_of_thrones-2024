"use client";
import { SectionHeader } from "@/components";
import { events } from "@/utils";
import { getRegisteredTeams } from "@/utils/functions/getRegisteredTeams";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Table from "../_components/Table";

const Page = () => {
  let params = useParams();

  const [registrationData, setRegistrationData] = useState<any[]>([]);

  const eventName = events.find((event) => event.id === params.event)?.title;

  useEffect(() => {
    const getRegistrations = async () => {
      const eventType = events.find((event) => event.id === params.event)
        ?.teamType;

      let regData: any[] = [];

      const registrationData = await getRegisteredTeams({
        event_id_param: params.event as string,
      });

      registrationData?.map((team: any) => {
        if (eventType === "Team") {
          regData.push({
            ...team,
            teamType: "team",
          });
        } else if (eventType === "Singles & Doubles") {
          if (team.is_team) {
            regData.push({
              ...team,
              teamType: "Doubles",
            });
          } else {
            regData.push({
              ...team,
              teamType: "Singles",
            });
          }
        } else if (eventType === "Singles") {
          regData.push({
            ...team,
            teamType: "Singles",
          });
        }
      });

      setRegistrationData(regData);
    };

    if (params.event) {
      getRegistrations();
    } else {
      return;
    }
  }, [params.event]);

  return (
    <div className="flex flex-col pt-20">
      <SectionHeader text={`Coordinator Dashboard - ${eventName}`} />
      <Table registrationData={registrationData} />
    </div>
  );
};

export default Page;
