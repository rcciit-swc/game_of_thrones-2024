"use client"
import { SectionHeader } from "@/components";
import { supabase } from "@/lib";
import React, { useEffect } from "react";

const AdminDashboard = () => {
//   const getEventParticipations = async () => {
//     const { data, error } = await supabase.rpc("get_event_participations", {
        
//     });
//     if (error) console.error(error);
//     else console.log(data);
//   };

//   useEffect(() => {
//     getEventParticipations();
//   }, []);

  return (
    <div className="flex flex-col pt-20">
      <SectionHeader text="Admin Dashboard" />
    </div>
  );
};

export default AdminDashboard;
