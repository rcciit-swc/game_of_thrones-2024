import React from "react";
import ProfileSide from "./_components/ProfileSide";
import Dashboard from "./_components/Dashboard";

const page = () => {
  return (
    <div className="pt-20 flex flex-col lg:flex-row ">
      <ProfileSide />
      <Dashboard />
    </div>
  );
};

export default page;
