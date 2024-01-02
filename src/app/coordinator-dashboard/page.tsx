"use client";
import { SectionHeader } from "@/components";
import { getRegisteredTeams } from "@/utils/functions/getRegisteredTeams";
import React, { useEffect, useState } from "react";
import Table from "./_components/Table";

const CoordinatorDashboard = () => {
  const [registrationData, setRegistrationData] = useState<any[]>([]);

  useEffect(() => {
    const getRegistrations = async () => {
      const registrationData = await getRegisteredTeams();
      setRegistrationData(registrationData!);
    };

    getRegistrations();
  }, []);

  return (
    <div className="flex flex-col pt-20">
      <SectionHeader text="Coordinator Dashboard" />
      <Table registrationData={registrationData} />
    </div>
  );
};

export default CoordinatorDashboard;
