"use client"
import { SectionHeader } from "@/components";
import { getRegisteredTeams } from "@/utils/functions/getRegisteredTeams";
import React, { useEffect } from "react";

const AdminDashboard = () => {

  useEffect(() => {
    getRegisteredTeams();
  }, []);

  return (
    <div className="flex flex-col pt-20">
      <SectionHeader text="Admin Dashboard" />
    </div>
  );
};

export default AdminDashboard;
