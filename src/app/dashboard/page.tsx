import React from "react";
import ProfileSide from "./_components/ProfileSide";
import Dashboard from "./_components/Dashboard";

const page = () => {
  return (
    <div className="flex flex-col pt-20 lg:flex-row ">
      <ProfileSide />
      <Dashboard />
    </div>
  );
};

export default page;
